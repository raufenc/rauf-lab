/* ============================================================
   Quiz Modülü — Çoktan seçmeli quizler
   ============================================================ */
const QuizModule = (() => {

  let currentQuiz = null;
  let questionIdx = 0;
  let score = 0;
  let answered = false;

  function render(container, param) {
    if (param !== null && param !== undefined) {
      startQuiz(container, parseInt(param));
      return;
    }

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>🎯 Quiz</h1>
        <p class="subtitle">${QUIZ_DATA.length} quiz — Bilgini test et!</p>
      </div>

      ${QUIZ_DATA.map((q, i) => `
        <div class="card fade-in" style="cursor:pointer; animation-delay:${i * 0.05}s" onclick="location.hash='quiz/${i}'">
          <div class="card-header">
            <span class="icon">${q.emoji}</span>
            <h3>${q.baslik}</h3>
          </div>
          <p style="font-size:0.82rem; color:var(--text-secondary)">${q.seviye} · ${q.sorular.length} soru</p>
        </div>
      `).join('')}
    `;
  }

  function startQuiz(container, idx) {
    currentQuiz = QUIZ_DATA[idx];
    if (!currentQuiz) { App.navigate('quiz'); return; }
    questionIdx = 0;
    score = 0;
    answered = false;

    container.innerHTML = `
      <button class="back-btn" onclick="location.hash='quiz'">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Quizler
      </button>

      <div class="app-header fade-in">
        <h1>${currentQuiz.emoji} ${currentQuiz.baslik}</h1>
      </div>

      <div id="quiz-content"></div>
    `;

    renderQuestion();
  }

  function renderQuestion() {
    const el = document.getElementById('quiz-content');
    if (!el) return;

    if (questionIdx >= currentQuiz.sorular.length) {
      renderResult(el);
      return;
    }

    const q = currentQuiz.sorular[questionIdx];
    answered = false;
    const shuffled = shuffle([...q.secenekler]);

    const isFarsca = q.tip === 'farsca-turkce';

    el.innerHTML = `
      <div class="quiz-progress">
        ${currentQuiz.sorular.map((_, i) => `<div class="quiz-dot ${i < questionIdx ? 'done' : i === questionIdx ? 'current' : ''}"></div>`).join('')}
      </div>

      <div class="quiz-question fade-in">
        <div class="q-number">Soru ${questionIdx + 1}/${currentQuiz.sorular.length}</div>
        ${isFarsca ? `
          <div class="q-persian">${q.soru}</div>
          <div class="q-prompt">Bu kelimenin anlamı nedir?</div>
          <button class="btn btn-secondary btn-sm" style="margin-top:8px;" onclick="FarsTTS.speak('${q.soru.replace(/'/g, "\\'")}')">🔊 Dinle</button>
        ` : `
          <div class="q-persian" style="font-size:1.5rem; direction:ltr;">${q.soru}</div>
          <div class="q-prompt">${q.tip === 'turkce-farsca' ? 'Farsçası hangisi?' : ''}</div>
        `}
      </div>

      <div class="quiz-options" id="quiz-options">
        ${shuffled.map((s, i) => `
          <button class="quiz-option ${q.tip === 'turkce-farsca' ? 'persian-cell' : ''}" id="qopt-${i}" onclick="QuizModule.answer(${i}, '${escapeStr(q.dogru)}')">${s}</button>
        `).join('')}
      </div>
    `;
  }

  function answer(idx, correct) {
    if (answered) return;
    answered = true;

    const options = document.querySelectorAll('.quiz-option');
    const selected = options[idx];

    options.forEach(o => {
      if (o.textContent === correct) o.classList.add('correct');
    });

    if (selected.textContent === correct) {
      score++;
      FarsStorage.recordAnswer(true);
      FarsStorage.addXP(5);
    } else {
      selected.classList.add('wrong');
      FarsStorage.recordAnswer(false);
    }

    setTimeout(() => {
      questionIdx++;
      renderQuestion();
    }, 1200);
  }

  function renderResult(el) {
    const pct = Math.round((score / currentQuiz.sorular.length) * 100);
    FarsStorage.markLessonComplete('quiz_' + QUIZ_DATA.indexOf(currentQuiz));

    let emoji = '📚';
    let msg = 'Tekrar dene!';
    if (pct >= 90) { emoji = '🏆'; msg = 'Mükemmel!'; FarsStorage.addBadge('quiz_master'); }
    else if (pct >= 70) { emoji = '🎉'; msg = 'Çok iyi!'; }
    else if (pct >= 50) { emoji = '💪'; msg = 'İyi gidiyorsun!'; }

    el.innerHTML = `
      <div class="score-result fade-in">
        <div class="score-circle">${pct}%</div>
        <div class="score-text">${emoji} ${msg}</div>
        <div class="score-sub">${score}/${currentQuiz.sorular.length} doğru cevap</div>
        <button class="btn btn-primary" onclick="location.hash='quiz'">Quizlere Dön</button>
        <button class="btn btn-secondary" onclick="location.hash='dashboard'" style="margin-left:8px;">Ana Sayfa</button>
      </div>
    `;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeStr(t) { return t.replace(/'/g, "\\'"); }

  return { render, answer };
})();
