/* ============================================================
   Alfabe Modülü — Harfler, okunuş kuralları, sayılar
   ============================================================ */
const AlfabeModule = (() => {

  let activeTab = 'harfler';

  function render(container, param) {
    if (param && !isNaN(param)) {
      renderLetterDetail(container, parseInt(param));
      return;
    }

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>🔤 Alfabe</h1>
        <p class="subtitle">Farsça'ya özgü harfler ve okunuş kuralları</p>
      </div>

      <div class="tab-bar">
        <button class="tab-btn ${activeTab === 'harfler' ? 'active' : ''}" onclick="AlfabeModule.setTab('harfler')">4 Özel Harf</button>
        <button class="tab-btn ${activeTab === 'kurallar' ? 'active' : ''}" onclick="AlfabeModule.setTab('kurallar')">Okunuş Kuralları</button>
        <button class="tab-btn ${activeTab === 'sayilar' ? 'active' : ''}" onclick="AlfabeModule.setTab('sayilar')">Sayılar</button>
      </div>

      <div id="alfabe-content"></div>
    `;

    renderTab();
  }

  function setTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick*="${tab}"]`).classList.add('active');
    renderTab();
  }

  function renderTab() {
    const el = document.getElementById('alfabe-content');
    if (!el) return;

    if (activeTab === 'harfler') renderHarfler(el);
    else if (activeTab === 'kurallar') renderKurallar(el);
    else if (activeTab === 'sayilar') renderSayilar(el);
  }

  function renderHarfler(el) {
    el.innerHTML = `
      <p class="section-subtitle">Kur'an okuyan biri için sadece 4 yeni harf öğrenmek yeterli!</p>
      <div class="letter-grid">
        ${ALFABE_DATA.harfler.map((h, i) => `
          <div class="letter-card fade-in" onclick="location.hash='alfabe/${i}'" style="animation-delay:${i * 0.1}s">
            <div class="letter">${h.harf}</div>
            <div class="letter-name">${h.isim}</div>
            <div class="letter-sound">${h.ses}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderLetterDetail(container, idx) {
    const h = ALFABE_DATA.harfler[idx];
    if (!h) { App.navigate('alfabe'); return; }

    container.innerHTML = `
      ${App.renderBackBtn('Alfabe')}

      <div class="letter-detail fade-in">
        <div class="big-letter">${h.harf}</div>
        <h2>${h.isim} — "${h.ses}"</h2>
        <p class="section-subtitle">${h.aciklama}</p>

        <div class="letter-forms">
          <div class="letter-form">
            <div class="form-char">${h.baslangic}</div>
            <div class="form-label">Başlangıç</div>
          </div>
          <div class="letter-form">
            <div class="form-char">${h.orta}</div>
            <div class="form-label">Orta</div>
          </div>
          <div class="letter-form">
            <div class="form-char">${h.son}</div>
            <div class="form-label">Son</div>
          </div>
        </div>

        <button class="btn btn-primary" onclick="FarsTTS.speak('${h.ornekler[0].kelime}')">
          🔊 Sesi Dinle
        </button>
      </div>

      <h3 class="section-title">Örnekler</h3>
      <ul class="example-list">
        ${h.ornekler.map(o => `
          <li class="example-item" onclick="FarsTTS.speak('${o.kelime}')">
            <span class="ex-persian">${o.kelime}</span>
            <span class="ex-translit">${o.okunuş}</span>
            <span class="ex-meaning">${o.anlam}</span>
            <button class="word-play" onclick="event.stopPropagation(); FarsTTS.speak('${o.kelime}')">🔊</button>
          </li>
        `).join('')}
      </ul>

      <div style="text-align:center; margin-top:24px;">
        ${idx > 0 ? `<button class="btn btn-secondary" onclick="location.hash='alfabe/${idx - 1}'">← Önceki</button>` : ''}
        ${idx < ALFABE_DATA.harfler.length - 1 ? `<button class="btn btn-primary" onclick="location.hash='alfabe/${idx + 1}'">Sonraki →</button>` : `<button class="btn btn-success" onclick="AlfabeModule.completeAlfabe()">✓ Tamamla</button>`}
      </div>
    `;
  }

  function renderKurallar(el) {
    el.innerHTML = ALFABE_DATA.okunusKurallari.map(k => `
      <div class="rule-card fade-in">
        <div class="rule-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.querySelector('.expand-arrow').classList.toggle('open')">
          <span class="rule-icon">${k.ikon}</span>
          <h3>${k.baslik}</h3>
          <span class="expand-arrow">▼</span>
        </div>
        <div style="display:none">
          <p class="section-subtitle">${k.aciklama}</p>
          ${k.detaylar.map(d => `
            <div class="rule-detail">
              <div class="rule-label">${d.kural}</div>
              <div class="rule-example">${d.ornek}</div>
              ${d.not ? `<div class="rule-note">${d.not}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderSayilar(el) {
    el.innerHTML = `
      <p class="section-subtitle">0'dan 1000'e Farsça sayılar</p>
      <div class="number-grid">
        ${ALFABE_DATA.sayilar.map(s => `
          <div class="number-item" onclick="FarsTTS.speak('${s.farsca}')">
            <div class="num-digit">${s.sayi}</div>
            <div class="num-persian">${s.farsca}</div>
            <div class="num-read">${s.okunuş}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function completeAlfabe() {
    const p = FarsStorage.getProgress();
    p.completedAlfabe = true;
    FarsStorage.saveProgress(p);
    FarsStorage.addXP(50);
    FarsStorage.addBadge('alfabe_tamamlandi');
    App.showToast('Alfabe tamamlandı! +50 XP 🎉');
    App.navigate('dashboard');
  }

  return { render, setTab, completeAlfabe };
})();
