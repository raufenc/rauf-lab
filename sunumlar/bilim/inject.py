#!/usr/bin/env python3
"""Inject Hero screen + Quiz into bilim/index.html"""

with open('/Users/raufenc/Downloads/rauf-lab/bilim/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# ─── 1. CSS ───────────────────────────────────────────────────────────
HERO_QUIZ_CSS = """
    /* ── Hero Screen ── */
    .hero-screen {
      position: fixed; inset: 0; z-index: 500;
      background: #04050e;
      display: flex; align-items: center; justify-content: center;
      transition: opacity .6s ease, transform .6s ease;
    }
    .hero-screen.hide { opacity: 0; pointer-events: none; transform: scale(1.03); }
    .hero-content {
      text-align: center; max-width: 700px; padding: 20px 24px;
      position: relative; z-index: 1;
    }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 14px; border-radius: 20px; font-size: 11px;
      font-weight: 600; text-transform: uppercase; letter-spacing: .12em;
      color: var(--accent); border: 1px solid var(--border);
      background: var(--accent-dim); margin-bottom: 24px;
    }
    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(34px, 7vw, 72px); font-weight: 700;
      line-height: 1.15; color: var(--text); margin-bottom: 18px;
    }
    .hero-title span { color: var(--accent); }
    .hero-sub {
      font-size: clamp(14px, 1.6vw, 17px); color: var(--dim);
      line-height: 1.7; max-width: 540px; margin: 0 auto 30px;
    }
    .hero-stats {
      display: flex; justify-content: center; gap: 40px; margin-bottom: 34px;
    }
    .hero-stats > div {
      display: flex; flex-direction: column; align-items: center; gap: 3px;
      font-size: clamp(30px, 5vw, 48px); font-weight: 800; color: var(--text);
    }
    .hero-stats > div span {
      font-size: 11px; font-weight: 400; color: var(--dim);
      text-transform: uppercase; letter-spacing: .1em;
    }
    .hero-btns {
      display: flex; justify-content: center; gap: 12px;
      margin-bottom: 32px; flex-wrap: wrap;
    }
    .hero-btn-primary {
      background: var(--accent); color: #fff; border: none;
      border-radius: 10px; padding: 13px 30px;
      font-size: 15px; font-weight: 600; cursor: pointer;
      transition: all .2s; font-family: 'Inter', sans-serif;
    }
    .hero-btn-primary:hover { background: #6366f1; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,.3); }
    .hero-btn-secondary {
      background: var(--accent-dim); color: var(--accent);
      border: 1px solid var(--border); border-radius: 10px; padding: 13px 30px;
      font-size: 15px; font-weight: 600; cursor: pointer;
      transition: all .2s; font-family: 'Inter', sans-serif;
    }
    .hero-btn-secondary:hover { background: rgba(129,140,248,.2); transform: translateY(-2px); }
    .hero-chapters {
      display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
    }
    .hero-ch-chip {
      padding: 5px 12px; border-radius: 20px; font-size: 11px;
      border: 1px solid; cursor: pointer; transition: all .2s; font-weight: 500;
    }
    .hero-ch-chip:hover { filter: brightness(1.4); transform: translateY(-1px); }

    /* ── Quiz Screen ── */
    .quiz-screen {
      position: fixed; inset: 0; z-index: 400;
      background: #04050e;
      display: none; flex-direction: column;
      align-items: center; overflow-y: auto; padding: 80px 20px 60px;
    }
    .quiz-screen.open { display: flex; }
    .quiz-wrap { max-width: 660px; width: 100%; }
    .quiz-header { text-align: center; margin-bottom: 28px; }
    .quiz-header h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(22px, 4vw, 34px); font-weight: 700; color: var(--text); margin-bottom: 8px;
    }
    .quiz-header p { color: var(--dim); font-size: 14px; }
    .quiz-progress {
      width: 100%; height: 3px; background: rgba(255,255,255,0.08);
      border-radius: 3px; overflow: hidden; margin-bottom: 24px;
    }
    .quiz-progress-fill {
      height: 100%; background: var(--accent); border-radius: 3px; transition: width .4s ease;
    }
    .quiz-q-num {
      font-size: 11px; color: var(--dim2); text-transform: uppercase;
      letter-spacing: .1em; margin-bottom: 6px;
    }
    .quiz-question {
      font-size: clamp(15px, 2.2vw, 19px); font-weight: 600; color: var(--text);
      line-height: 1.5; margin-bottom: 20px;
    }
    .quiz-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
    .quiz-opt {
      padding: 13px 18px; border-radius: 10px; border: 1px solid var(--border);
      background: var(--surface); color: var(--text); cursor: pointer;
      transition: all .2s; text-align: left; font-size: 14px;
      font-family: 'Inter', sans-serif; line-height: 1.45;
    }
    .quiz-opt:hover:not([disabled]) { border-color: var(--accent); background: var(--accent-dim); }
    .quiz-opt.correct { border-color: #34d399; background: rgba(52,211,153,.1); color: #34d399; }
    .quiz-opt.wrong { border-color: #f87171; background: rgba(248,113,113,.08); color: #f87171; }
    .quiz-opt[disabled] { cursor: default; }
    .quiz-feedback {
      font-size: 13px; color: var(--dim); line-height: 1.7; padding: 12px 16px;
      background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid var(--border);
      display: none; margin-bottom: 16px;
    }
    .quiz-feedback.show { display: block; }
    .quiz-next-btn {
      background: var(--accent); color: #fff; border: none;
      border-radius: 8px; padding: 10px 24px;
      font-size: 14px; font-weight: 600; cursor: pointer;
      font-family: 'Inter', sans-serif; transition: background .2s; display: none;
    }
    .quiz-next-btn.show { display: inline-block; }
    .quiz-next-btn:hover { background: #6366f1; }
    .quiz-result { text-align: center; padding: 32px 20px; display: none; }
    .quiz-result.show { display: block; }
    .quiz-score-num {
      font-size: clamp(52px, 10vw, 88px); font-weight: 800; color: var(--accent); line-height: 1;
    }
    .quiz-level { font-size: clamp(18px, 3vw, 28px); font-weight: 700; color: var(--text); margin: 14px 0 8px; }
    .quiz-level-sub { color: var(--dim); font-size: 14px; margin-bottom: 28px; }
    .quiz-result-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .quiz-close-btn {
      background: none; border: 1px solid var(--border); color: var(--dim);
      border-radius: 8px; padding: 10px 22px; font-size: 14px; cursor: pointer;
      font-family: 'Inter', sans-serif; transition: all .2s;
    }
    .quiz-close-btn:hover { color: var(--text); border-color: var(--accent); }
"""

html = html.replace('  </style>', HERO_QUIZ_CSS + '  </style>')

# ─── 2. Hero HTML (before <!-- Nav -->) ──────────────────────────────
HERO_HTML = """  <!-- Hero Screen -->
  <div id="heroScreen" class="hero-screen">
    <canvas id="heroStars" style="position:absolute;inset:0;z-index:0;pointer-events:none;"></canvas>
    <div class="hero-content">
      <div class="hero-tag">🔬 Rauf Enç &middot; Sunum</div>
      <h1 class="hero-title">Bilim Nedir?<br><span>Ne Değildir?</span></h1>
      <p class="hero-sub">Bilimsel düşünce, yöntem ve epistemoloji üzerine kapsamlı bir yolculuk. Popper'dan Kuhn'a, Hume'dan Collins'e...</p>
      <div class="hero-stats">
        <div>6<span>Bölüm</span></div>
        <div>64<span>Slayt</span></div>
        <div>15<span>Quiz Sorusu</span></div>
      </div>
      <div class="hero-btns">
        <button class="hero-btn-primary" onclick="startPresentation(0)">▶ Sunuma Başla</button>
        <button class="hero-btn-secondary" onclick="openQuiz()">📝 Bilgi Testi</button>
      </div>
      <div class="hero-chapters">
        <span class="hero-ch-chip" style="color:#818cf8;border-color:#818cf8;background:rgba(129,140,248,.08)" onclick="startPresentation(1)">B1 · Bilim Nedir?</span>
        <span class="hero-ch-chip" style="color:#34d399;border-color:#34d399;background:rgba(52,211,153,.08)" onclick="startPresentation(11)">B2 · Bilimsel Yöntem</span>
        <span class="hero-ch-chip" style="color:#60a5fa;border-color:#60a5fa;background:rgba(96,165,250,.08)" onclick="startPresentation(22)">B3 · Paradigma</span>
        <span class="hero-ch-chip" style="color:#f472b6;border-color:#f472b6;background:rgba(244,114,182,.08)" onclick="startPresentation(33)">B4 · Bilim ve İnanç</span>
        <span class="hero-ch-chip" style="color:#fbbf24;border-color:#fbbf24;background:rgba(251,191,36,.08)" onclick="startPresentation(44)">B5 · Epistemoloji</span>
        <span class="hero-ch-chip" style="color:#fb923c;border-color:#fb923c;background:rgba(251,146,60,.08)" onclick="startPresentation(55)">B6 · Bilimin Sınırları</span>
      </div>
    </div>
  </div>

"""

html = html.replace('  <!-- Nav -->', HERO_HTML + '  <!-- Nav -->')

# ─── 3. Quiz HTML (before <!-- Dots -->) ─────────────────────────────
QUIZ_HTML = """
  <!-- Quiz Screen -->
  <div id="quizScreen" class="quiz-screen">
    <button class="quiz-close-btn" onclick="closeQuiz()" style="position:fixed;top:14px;right:14px;z-index:410;">✕ Kapat</button>
    <div class="quiz-wrap" id="quizWrap"></div>
  </div>

"""

html = html.replace('  <!-- Dots -->', QUIZ_HTML + '  <!-- Dots -->')

# ─── 4. Add Quiz button to nav ───────────────────────────────────────
html = html.replace(
    '<button class="toc-btn" id="tocBtn">☰ Bölümler</button>',
    '<button class="toc-btn" onclick="openQuiz()" style="margin-right:8px">📝 Quiz</button>'
    + '<button class="toc-btn" id="tocBtn">☰ Bölümler</button>'
)

# ─── 5. JS (before </script>) ────────────────────────────────────────
HERO_QUIZ_JS = """
    // ── Hero Screen ──
    const heroScreen = document.getElementById('heroScreen');
    const hcanvas = document.getElementById('heroStars');
    const hctx = hcanvas.getContext('2d');
    function resizeH() { hcanvas.width = innerWidth; hcanvas.height = innerHeight; }
    resizeH(); addEventListener('resize', resizeH);
    const HSTARS = Array.from({length: 200}, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.6 + 0.1,
      da: (Math.random() - 0.5) * 0.003
    }));
    let heroHidden = false;
    (function htick() {
      if (!heroHidden) {
        hctx.clearRect(0, 0, hcanvas.width, hcanvas.height);
        HSTARS.forEach(s => {
          s.a += s.da;
          if (s.a < 0.05) s.da = Math.abs(s.da);
          if (s.a > 0.7) s.da = -Math.abs(s.da);
          hctx.beginPath();
          hctx.arc(s.x * hcanvas.width, s.y * hcanvas.height, s.r, 0, Math.PI * 2);
          hctx.fillStyle = `rgba(190,200,255,${s.a})`;
          hctx.fill();
        });
      }
      requestAnimationFrame(htick);
    })();

    function startPresentation(slideIndex) {
      heroScreen.classList.add('hide');
      setTimeout(() => { heroScreen.style.display = 'none'; heroHidden = true; }, 600);
      if (slideIndex > 0) { setTimeout(() => goTo(slideIndex), 200); }
    }

    // ── Quiz ──
    const QUIZ = [
      {
        q: "Popper'ın yanlışlanabilirlik ilkesine göre bilimsel bir önermenin nasıl olması gerekir?",
        opts: ["Doğrulanabilir olmalıdır","Yanlışlanabilir olmalıdır","İspat edilebilir olmalıdır","Mantıksal olarak tutarlı olmalıdır"],
        ans: 1,
        exp: "Karl Popper'a göre bir önermenin bilimsel sayılabilmesi için yanlışlanabilir olması gerekir — teorik olarak çürütülebilir olmalıdır."
      },
      {
        q: '"Confirmation Bias" hangi Türkçe kavrama karşılık gelir?',
        opts: ["Yayın Yanlılığı","Doğrulama Önyargısı","Seçici Dikkat","Paradigma Kayması"],
        ans: 1,
        exp: "Doğrulama Önyargısı: İnançlarımızı destekleyen kanıtları arar, çürütenleri görmezden geliriz."
      },
      {
        q: "Stephen Jay Gould'un 'NOMA' tezi neyi savunur?",
        opts: ["Bilim dinden üstündür","Bilim ve din farklı epistemik alanları kapsar","Din bilimin yerini tutabilir","İkisi de aynı soruları sorar"],
        ans: 1,
        exp: "NOMA (Non-Overlapping Magisteria): Bilim ve din örtüşmeyen iki ayrı bilgi alanını kapsar — biri gerçekliği, diğeri anlam ve değerleri ele alır."
      },
      {
        q: '"Publication Bias" (Yayın Yanlılığı) ne anlama gelir?',
        opts: ["Yalnızca Türkçe çalışmaların yayınlanması","Akademisyenlerin yanlı davranması","Pozitif sonuçların yayınlanırken negatiflerin rafa kaldırılması","Editörlerin favori yazarları tercih etmesi"],
        ans: 2,
        exp: "Yayın yanlılığı: Pozitif ve istatistiksel olarak anlamlı sonuçlar daha kolay yayınlanırken, negatif sonuçlar çoğunlukla rafta kalır."
      },
      {
        q: '"Paradigma" kavramını bilim felsefesine kim kazandırdı?',
        opts: ["Karl Popper","David Hume","Francis Bacon","Thomas Kuhn"],
        ans: 3,
        exp: "Thomas Kuhn, 'Bilimsel Devrimlerin Yapısı' (1962) adlı eserinde paradigma kavramını ortaya koydu."
      },
      {
        q: "Bilimsel yöntemin temel döngüsü nedir?",
        opts: ["Gözlem → Hipotez → Deney → Sonuç","Hipotez → Gözlem → Yayın → Sonuç","Deney → Gözlem → Sonuç → Yayın","Teori → Test → Kanıt → Doğrulama"],
        ans: 0,
        exp: "Bilimsel yöntem: Gözlem ile başlar, hipotez kurulur, deney ile test edilir ve sonuç değerlendirilir."
      },
      {
        q: '"Tümevarım sorunu" hangi filozofla özdeşleştirilir?',
        opts: ["Karl Popper","Thomas Kuhn","David Hume","Francis Bacon"],
        ans: 2,
        exp: "David Hume, tümevarımsal akıl yürütmenin mantıksal olarak haklılaştırılamayacağını — her zaman geçmiş gözlemlere dayandığını — ortaya koydu."
      },
      {
        q: '"Scientism" (Bilimcilik) nedir?',
        opts: ["Bilimin nesnel olduğu görüşü","Bilimi desteklemek","Her şeyin bilimle açıklanabileceğini savunan görüş","Bilimi dinden ayıran tutum"],
        ans: 2,
        exp: "Bilimcilik: Her anlamlı sorunun yalnızca bilimsel yöntemlerle yanıtlanabileceğini savunan aşırı görüş."
      },
      {
        q: '"Tekrarlanabilirlik Krizi" (Replication Crisis) ne demektir?',
        opts: ["Deneylerin teknik olarak zor olması","Yayınlanmış önemli çalışmaların tekrarlandığında doğrulanamaması","Bilim adamlarının çalışmalarını tekrar etmemesi","Verilerin kaybolması"],
        ans: 1,
        exp: "Birçok önemli bilimsel çalışma, bağımsız araştırmacılar tarafından tekrarlandığında orijinal sonuçları üretemedi."
      },
      {
        q: "Werner Heisenberg hangi dalda Nobel Ödülü almıştır?",
        opts: ["Kimya","Tıp","Edebiyat","Fizik"],
        ans: 3,
        exp: "Werner Heisenberg, kuantum mekaniğini kurması nedeniyle 1932 yılında Fizik Nobel Ödülü'ne layık görüldü."
      },
      {
        q: '"Teori Yüklü Gözlem" ne anlama gelir?',
        opts: ["Teorilerin gözlemlerden üstün olması","Gözlemlerin mevcut teoriler çerçevesinde yapılması ve yorumlanması","Teorilerin gözlem yapmadan üretilmesi","Gözlemlerin teorileri çürütmesi"],
        ans: 1,
        exp: "Gözlemler asla tamamen nötr değildir; her gözlemci mevcut teorik çerçevesiyle görür ve yorumlar."
      },
      {
        q: "Francis Collins kim?",
        opts: ["Evrim karşıtı bir din adamı","İnsan Genomunun Haritacısı ve inançlı bir bilim insanı","Büyük Patlama teorisini geliştiren fizikçi","Paradigma kavramını ortaya atan felsefeci"],
        ans: 1,
        exp: "Francis Collins, İnsan Genomunun Haritacısı ve BioLogos'un kurucusudur. Hem evrimci hem de Hristiyan inancını savunur."
      },
      {
        q: "Formel bilimler (matematik, mantık) nasıl çalışır?",
        opts: ["Deney ve gözlemle hipotezleri test eder","Aksiyomlardan tümdengelimle tutarlı bir yapı inşa eder","İstatistiksel analizlere dayanır","Bilimsel devrimlerle ilerler"],
        ans: 1,
        exp: "Formel bilimler, deneysel gözlem yerine aksiyomlardan tümdengelimle hareket eder; matematik ve mantık buna örnektir."
      },
      {
        q: "Dunning-Kruger etkisi neyi açıklar?",
        opts: ["Bilimsel yöntemin hatalarını","Paradigma değişimlerini","Bilgi eksikliği olan kişilerin bu eksikliğin farkında olmamasını","Yayın yanlılığının sonuçlarını"],
        ans: 2,
        exp: "Dunning-Kruger: Az bilen kişiler yetersizliklerinin farkında olmayabilir; çünkü bir konuyu bilmek, o konuyu değerlendirmeyi de gerektirir."
      },
      {
        q: '"p-Hacking" nedir?',
        opts: ["Bilgisayarları hacklemek","Deney prosedürünü keyfi değiştirmek","Verileri silmek","İstenen istatistiksel sonucu elde etmek için veri manipülasyonu"],
        ans: 3,
        exp: "p-Hacking: Araştırmacıların anlamlı p-değeri elde edene kadar veri analizini çeşitli şekillerde manipüle etmesi."
      }
    ];

    let quizQIndex = 0, quizScore = 0;

    function openQuiz() {
      if (heroScreen && !heroScreen.classList.contains('hide')) {
        heroScreen.classList.add('hide');
        setTimeout(() => { heroScreen.style.display = 'none'; heroHidden = true; }, 600);
      }
      quizQIndex = 0; quizScore = 0;
      document.getElementById('quizScreen').classList.add('open');
      renderQuestion();
    }

    function closeQuiz() {
      document.getElementById('quizScreen').classList.remove('open');
    }

    function renderQuestion() {
      const wrap = document.getElementById('quizWrap');
      const q = QUIZ[quizQIndex];
      const pct = (quizQIndex / QUIZ.length * 100).toFixed(0);
      wrap.innerHTML =
        '<div class="quiz-header"><h2>📝 Bilgi Testi</h2><p>Sunumdan 15 soru — kaç doğru yapabilirsin?</p></div>' +
        '<div class="quiz-progress"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="quiz-q-num">Soru ' + (quizQIndex + 1) + ' / ' + QUIZ.length + '</div>' +
        '<div class="quiz-question">' + q.q + '</div>' +
        '<div class="quiz-options">' +
          q.opts.map(function(o, i) {
            return '<button class="quiz-opt" data-idx="' + i + '" onclick="answerQuiz(' + i + ')">' + o + '</button>';
          }).join('') +
        '</div>' +
        '<div class="quiz-feedback" id="qFeedback">' + q.exp + '</div>' +
        '<button class="quiz-next-btn" id="qNext" onclick="nextQuestion()">' +
          (quizQIndex < QUIZ.length - 1 ? 'Sonraki Soru &rarr;' : 'Sonuçları Gör 🎓') +
        '</button>';
    }

    function answerQuiz(idx) {
      const q = QUIZ[quizQIndex];
      const opts = document.querySelectorAll('.quiz-opt');
      opts.forEach(function(o) { o.disabled = true; });
      opts[q.ans].classList.add('correct');
      if (idx !== q.ans) opts[idx].classList.add('wrong');
      else quizScore++;
      document.getElementById('qFeedback').classList.add('show');
      document.getElementById('qNext').classList.add('show');
    }

    function nextQuestion() {
      quizQIndex++;
      if (quizQIndex >= QUIZ.length) showResult();
      else renderQuestion();
    }

    function showResult() {
      const wrap = document.getElementById('quizWrap');
      var level, sub;
      if (quizScore <= 4) { level = '🌱 Meraklı Öğrenci'; sub = 'Konuya ilgin var, sunumu bir daha izle!'; }
      else if (quizScore <= 9) { level = '📚 Araştırmacı'; sub = 'İyi başlangıç! Tekrar edersen daha da iyi olacaksın.'; }
      else if (quizScore <= 12) { level = '🔭 Bilim Dostu'; sub = 'Harika! Bilim felsefesine ciddi ilgin var.'; }
      else { level = '🏆 Bilim Filozofu'; sub = 'Mükemmel! Epistemoloji senin alanın.'; }
      wrap.innerHTML =
        '<div class="quiz-result show">' +
          '<div class="quiz-score-num">' + quizScore + '<span style="font-size:.45em;opacity:.4;margin-left:4px">/ 15</span></div>' +
          '<div class="quiz-level">' + level + '</div>' +
          '<div class="quiz-level-sub">' + sub + '</div>' +
          '<div style="font-size:13px;color:var(--dim2);margin-bottom:28px">Başarı oranın: %' + Math.round(quizScore/15*100) + '</div>' +
          '<div class="quiz-result-btns">' +
            '<button class="hero-btn-primary" onclick="openQuiz()">🔄 Tekrar Çöz</button>' +
            '<button class="quiz-close-btn" onclick="closeQuiz()">◀ Sunuma Dön</button>' +
          '</div>' +
        '</div>';
    }
"""

html = html.replace('  </script>', HERO_QUIZ_JS + '  </script>')

with open('/Users/raufenc/Downloads/rauf-lab/bilim/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done! Lines:", html.count('\\n'))
