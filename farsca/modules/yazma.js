/* ============================================================
   Yazma Modülü — Farsça yazma pratiği
   ============================================================ */
const YazmaModule = (() => {

  let exercises = [];
  let currentIdx = 0;
  let showKeyboard = true;

  function render(container) {
    // Kelime havuzundan egzersiz oluştur
    const allWords = [];
    KELIME_DATA.forEach(cat => {
      cat.kelimeler.forEach(k => allWords.push(k));
    });
    exercises = shuffle(allWords).slice(0, 8);
    currentIdx = 0;

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>✍️ Yazma</h1>
        <p class="subtitle">Türkçe kelimeyi Farsça yaz</p>
      </div>

      <div style="text-align:right; margin-bottom:12px;">
        <button class="btn btn-secondary btn-sm" onclick="YazmaModule.toggleKeyboard()">
          ⌨️ Klavye ${showKeyboard ? 'Gizle' : 'Göster'}
        </button>
      </div>

      <div id="yazma-content"></div>
    `;

    renderExercise();
  }

  function renderExercise() {
    const el = document.getElementById('yazma-content');
    if (!el) return;

    if (currentIdx >= exercises.length) {
      renderResult(el);
      return;
    }

    const ex = exercises[currentIdx];

    el.innerHTML = `
      <div class="quiz-progress">
        ${exercises.map((_, i) => `<div class="quiz-dot ${i < currentIdx ? 'done' : i === currentIdx ? 'current' : ''}"></div>`).join('')}
      </div>

      <div class="card fade-in" style="text-align:center; padding:24px;">
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:4px;">Bu kelimeyi Farsça yaz:</p>
        <p style="font-size:1.5rem; font-weight:700; margin-bottom:4px;">${ex.anlam}</p>
        <p style="font-size:0.85rem; color:var(--accent); font-style:italic;">${ex.okunuş}</p>
      </div>

      <div style="margin-top:16px;">
        <input type="text" class="input-field persian-input" id="yazma-input" placeholder="Farsça yazın..." autocomplete="off" dir="rtl" />
      </div>

      <div id="yazma-keyboard" style="display:${showKeyboard ? 'block' : 'none'}"></div>

      <div style="text-align:center; margin-top:16px;">
        <button class="btn btn-primary" onclick="YazmaModule.check()">Kontrol Et</button>
        <button class="btn btn-secondary" onclick="YazmaModule.skip()">Atla →</button>
      </div>

      <div id="yazma-feedback"></div>
    `;

    // Klavye bağla
    if (showKeyboard) {
      const kbContainer = document.getElementById('yazma-keyboard');
      const kb = FarsKeyboard.create('#yazma-input');
      kbContainer.appendChild(kb);
      const input = document.getElementById('yazma-input');
      FarsKeyboard.attachTo(input);
    }
  }

  function check() {
    const input = document.getElementById('yazma-input');
    const ex = exercises[currentIdx];
    const userAnswer = normalizeText(input.value.trim());
    const correctAnswer = normalizeText(ex.farsca);

    const feedback = document.getElementById('yazma-feedback');

    if (userAnswer === correctAnswer) {
      feedback.innerHTML = `
        <div class="card fade-in" style="border-color:#10b981; text-align:center; margin-top:12px;">
          <p style="color:#10b981; font-weight:700;">✓ Doğru!</p>
        </div>
      `;
      FarsStorage.addXP(5);
      FarsStorage.recordAnswer(true);
      setTimeout(() => { currentIdx++; renderExercise(); }, 1000);
    } else {
      feedback.innerHTML = `
        <div class="card fade-in" style="border-color:#ef4444; text-align:center; margin-top:12px;">
          <p style="color:#ef4444; font-weight:700;">✗ Yanlış</p>
          <p style="font-family:'Vazirmatn',serif; font-size:1.3rem; direction:rtl; margin-top:8px;">${ex.farsca}</p>
          <button class="btn btn-secondary btn-sm" style="margin-top:8px;" onclick="FarsTTS.speak('${ex.farsca}')">🔊 Dinle</button>
        </div>
      `;
      FarsStorage.recordAnswer(false);
      setTimeout(() => { currentIdx++; renderExercise(); }, 2500);
    }
  }

  function skip() {
    currentIdx++;
    renderExercise();
  }

  function toggleKeyboard() {
    showKeyboard = !showKeyboard;
    render(document.getElementById('app'));
  }

  function renderResult(el) {
    FarsStorage.markLessonComplete('yazma_' + Date.now());

    el.innerHTML = `
      <div class="score-result fade-in">
        <div class="score-circle">✍️</div>
        <div class="score-text">Yazma pratiği tamamlandı!</div>
        <div class="score-sub">${exercises.length} kelime</div>
        <button class="btn btn-primary" onclick="YazmaModule.render(document.getElementById('app'))">Tekrar</button>
        <button class="btn btn-secondary" onclick="location.hash='dashboard'" style="margin-left:8px;">Ana Sayfa</button>
      </div>
    `;
  }

  function normalizeText(text) {
    return text
      .replace(/\u200C/g, '') // ZWNJ
      .replace(/\s+/g, '')
      .replace(/ي/g, 'ی')
      .replace(/ك/g, 'ک')
      .replace(/ؤ/g, 'و')
      .replace(/إ|أ/g, 'ا')
      .replace(/ة/g, 'ه');
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return { render, check, skip, toggleKeyboard };
})();
