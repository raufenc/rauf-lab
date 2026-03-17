/* ============================================================
   Dinleme Modülü — Kelime ve cümle dinleme egzersizleri
   ============================================================ */
const DinlemeModule = (() => {

  let currentWords = [];
  let currentIdx = 0;
  let score = 0;
  let answered = false;

  function render(container) {
    // Tüm kelimelerden rastgele 10 tane seç
    const allWords = [];
    KELIME_DATA.forEach(cat => {
      cat.kelimeler.forEach(k => allWords.push(k));
    });
    currentWords = shuffle(allWords).slice(0, 10);
    currentIdx = 0;
    score = 0;
    answered = false;

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>👂 Dinleme</h1>
        <p class="subtitle">Kelimeyi dinle, doğru anlamını seç</p>
      </div>
      <div id="dinleme-content"></div>
    `;

    renderQuestion();
  }

  function renderQuestion() {
    const el = document.getElementById('dinleme-content');
    if (!el) return;

    if (currentIdx >= currentWords.length) {
      renderResult(el);
      return;
    }

    const word = currentWords[currentIdx];
    const options = generateOptions(word);
    answered = false;

    el.innerHTML = `
      <div class="quiz-progress">
        ${currentWords.map((_, i) => `<div class="quiz-dot ${i < currentIdx ? 'done' : i === currentIdx ? 'current' : ''}"></div>`).join('')}
      </div>

      <div class="listen-prompt fade-in">
        <button class="listen-btn-big" onclick="FarsTTS.speak('${escapeTTS(word.farsca)}')">
          🔊
        </button>
        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:8px;">Kelimeyi dinle</p>
        <button class="btn btn-secondary btn-sm" onclick="FarsTTS.speakSlow('${escapeTTS(word.farsca)}')">🐢 Yavaş</button>
      </div>

      <div class="quiz-options" id="dinleme-options">
        ${options.map((o, i) => `
          <button class="quiz-option" id="dopt-${i}" onclick="DinlemeModule.answer(${i}, '${escapeStr(word.anlam)}')">${o}</button>
        `).join('')}
      </div>
    `;

    // Otomatik olarak kelimeyi oku
    setTimeout(() => FarsTTS.speak(word.farsca), 300);
  }

  function answer(idx, correct) {
    if (answered) return;
    answered = true;

    const options = document.querySelectorAll('.quiz-option');
    const selected = options[idx];
    const correctText = correct;

    options.forEach(o => {
      if (o.textContent === correctText) o.classList.add('correct');
    });

    if (selected.textContent === correctText) {
      score++;
      FarsStorage.recordAnswer(true);
      FarsStorage.addXP(3);
    } else {
      selected.classList.add('wrong');
      FarsStorage.recordAnswer(false);
    }

    setTimeout(() => {
      currentIdx++;
      renderQuestion();
    }, 1200);
  }

  function renderResult(el) {
    const pct = Math.round((score / currentWords.length) * 100);
    FarsStorage.markLessonComplete('dinleme_' + Date.now());

    el.innerHTML = `
      <div class="score-result fade-in">
        <div class="score-circle">${pct}%</div>
        <div class="score-text">${score}/${currentWords.length} doğru</div>
        <div class="score-sub">${pct >= 80 ? 'Harika! 🎉' : pct >= 50 ? 'İyi gidiyorsun! 💪' : 'Tekrar dene! 📚'}</div>
        <button class="btn btn-primary" onclick="DinlemeModule.render(document.getElementById('app'))">Tekrar Dene</button>
        <button class="btn btn-secondary" onclick="location.hash='dashboard'" style="margin-left:8px;">Ana Sayfa</button>
      </div>
    `;
  }

  function generateOptions(correctWord) {
    const allMeanings = [];
    KELIME_DATA.forEach(cat => {
      cat.kelimeler.forEach(k => {
        if (k.anlam !== correctWord.anlam) allMeanings.push(k.anlam);
      });
    });
    const wrongOptions = shuffle(allMeanings).slice(0, 3);
    const options = shuffle([correctWord.anlam, ...wrongOptions]);
    return options;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeTTS(t) { return t.replace(/'/g, "\\'"); }
  function escapeStr(t) { return t.replace(/'/g, "\\'"); }

  return { render, answer };
})();
