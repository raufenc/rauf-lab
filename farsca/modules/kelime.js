/* ============================================================
   Kelime Modülü — Kelime kartları ve flashcard tekrarı
   ============================================================ */
const KelimeModule = (() => {

  let selectedCategory = 0;
  let flashcardIdx = 0;
  let flashcardRevealed = false;
  let mode = 'list'; // 'list' | 'flashcard'

  function render(container, param) {
    if (param === 'flashcard') {
      mode = 'flashcard';
      flashcardIdx = 0;
      flashcardRevealed = false;
    } else {
      mode = 'list';
    }

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>📚 Kelime</h1>
        <p class="subtitle">${getTotalCount()} kelime · ${KELIME_DATA.length} kategori</p>
      </div>

      <div style="text-align:center; margin-bottom:20px;">
        <button class="btn ${mode === 'list' ? 'btn-primary' : 'btn-secondary'}" onclick="KelimeModule.setMode('list')">Liste</button>
        <button class="btn ${mode === 'flashcard' ? 'btn-primary' : 'btn-secondary'}" onclick="KelimeModule.setMode('flashcard')">Flashcard</button>
      </div>

      <div class="category-chips">
        ${KELIME_DATA.map((k, i) => `
          <button class="chip ${selectedCategory === i ? 'active' : ''}" onclick="KelimeModule.selectCat(${i})">${k.emoji} ${k.kategori}</button>
        `).join('')}
      </div>

      <div id="kelime-content"></div>
    `;

    renderContent();
  }

  function selectCat(i) {
    selectedCategory = i;
    flashcardIdx = 0;
    flashcardRevealed = false;
    document.querySelectorAll('.chip').forEach((c, ci) => c.classList.toggle('active', ci === i));
    renderContent();
  }

  function setMode(m) {
    mode = m;
    flashcardIdx = 0;
    flashcardRevealed = false;
    render(document.getElementById('app'));
  }

  function renderContent() {
    const el = document.getElementById('kelime-content');
    if (!el) return;
    const cat = KELIME_DATA[selectedCategory];

    if (mode === 'flashcard') {
      renderFlashcard(el, cat);
    } else {
      renderList(el, cat);
    }
  }

  function renderList(el, cat) {
    el.innerHTML = cat.kelimeler.map(k => `
      <div class="word-card" onclick="FarsTTS.speak('${k.farsca}')">
        <div class="word-persian">${k.farsca}</div>
        <div class="word-info">
          <div class="word-translit">${k.okunuş}</div>
          <div class="word-meaning">${k.anlam}</div>
        </div>
        <button class="word-play" onclick="event.stopPropagation(); FarsTTS.speak('${k.farsca}')">🔊</button>
      </div>
    `).join('');
  }

  function renderFlashcard(el, cat) {
    if (flashcardIdx >= cat.kelimeler.length) {
      el.innerHTML = `
        <div class="score-result fade-in">
          <div class="score-circle">✓</div>
          <div class="score-text">Kategori tamamlandı!</div>
          <div class="score-sub">${cat.emoji} ${cat.kategori} — ${cat.kelimeler.length} kelime</div>
          <button class="btn btn-primary" onclick="KelimeModule.selectCat(${(selectedCategory + 1) % KELIME_DATA.length})">Sonraki Kategori →</button>
        </div>
      `;
      FarsStorage.addXP(10);
      FarsStorage.markLessonComplete('kelime_' + selectedCategory);
      return;
    }

    const k = cat.kelimeler[flashcardIdx];
    el.innerHTML = `
      <div class="flashcard-container fade-in">
        <div class="quiz-progress">
          ${cat.kelimeler.map((_, i) => `<div class="quiz-dot ${i < flashcardIdx ? 'done' : i === flashcardIdx ? 'current' : ''}"></div>`).join('')}
        </div>

        <div class="flashcard ${flashcardRevealed ? 'revealed' : ''}" onclick="KelimeModule.reveal()">
          <div class="fc-persian">${k.farsca}</div>
          <div class="fc-translit">${k.okunuş}</div>
          <div class="fc-meaning">${k.anlam}</div>
          ${!flashcardRevealed ? '<div class="fc-hint">Çeviriyi görmek için tıkla</div>' : ''}
        </div>

        <div class="fc-actions">
          <button class="btn btn-secondary" onclick="FarsTTS.speak('${k.farsca}')">🔊 Dinle</button>
          ${flashcardRevealed ? `
            <button class="btn btn-danger btn-sm" onclick="KelimeModule.rate(1)">Zor</button>
            <button class="btn btn-secondary btn-sm" onclick="KelimeModule.rate(3)">Orta</button>
            <button class="btn btn-success btn-sm" onclick="KelimeModule.rate(5)">Kolay</button>
          ` : ''}
        </div>
      </div>
    `;
  }

  function reveal() {
    if (flashcardRevealed) return;
    flashcardRevealed = true;
    const cat = KELIME_DATA[selectedCategory];
    FarsTTS.speak(cat.kelimeler[flashcardIdx].farsca);
    renderContent();
  }

  function rate(quality) {
    const cat = KELIME_DATA[selectedCategory];
    const k = cat.kelimeler[flashcardIdx];
    SpacedRepetition.review(`kelime_${selectedCategory}_${flashcardIdx}`, quality);
    FarsStorage.addXP(quality >= 3 ? 3 : 1);
    flashcardIdx++;
    flashcardRevealed = false;
    renderContent();
  }

  function getTotalCount() {
    return KELIME_DATA.reduce((sum, cat) => sum + cat.kelimeler.length, 0);
  }

  return { render, selectCat, setMode, reveal, rate };
})();
