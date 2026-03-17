/* ============================================================
   Okuma Modülü — Farsça okuma parçaları
   ============================================================ */
const OkumaModule = (() => {

  let showTranslation = false;
  let showTranslit = false;

  function render(container, param) {
    if (param !== null && param !== undefined) {
      renderText(container, parseInt(param));
      return;
    }

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>📖 Okuma</h1>
        <p class="subtitle">${METIN_DATA.length} okuma parçası</p>
      </div>

      ${METIN_DATA.map((m, i) => `
        <div class="card fade-in" style="cursor:pointer; animation-delay:${i * 0.05}s" onclick="location.hash='okuma/${i}'">
          <div class="card-header">
            <span class="icon">${m.emoji}</span>
            <h3>${m.baslik}</h3>
          </div>
          <p style="font-size:0.82rem; color:var(--text-secondary)">${m.seviye}</p>
        </div>
      `).join('')}
    `;
  }

  function renderText(container, idx) {
    const m = METIN_DATA[idx];
    if (!m) { App.navigate('okuma'); return; }
    showTranslation = false;
    showTranslit = false;

    container.innerHTML = `
      <button class="back-btn" onclick="location.hash='okuma'">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Okuma
      </button>

      <div class="app-header fade-in">
        <h1>${m.emoji} ${m.baslik}</h1>
        <p class="subtitle">${m.seviye}</p>
      </div>

      <div style="text-align:center; margin-bottom:16px; display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="FarsTTS.speak(document.querySelector('.reading-text').textContent)">🔊 Dinle</button>
        <button class="btn btn-secondary btn-sm" onclick="FarsTTS.speakSlow(document.querySelector('.reading-text').textContent)">🐢 Yavaş</button>
        <button class="btn btn-secondary btn-sm" id="translit-btn" onclick="OkumaModule.toggleTranslit()">Okunuş</button>
        <button class="btn btn-secondary btn-sm" id="translate-btn" onclick="OkumaModule.toggleTranslation()">Çeviri</button>
      </div>

      <div class="reading-text">${m.metin}</div>

      <div id="okuma-translit" style="display:none" class="card">
        <h4 style="margin-bottom:8px; color:var(--accent);">Okunuş</h4>
        <p style="font-size:0.9rem; line-height:1.8; font-style:italic;">${m.okunuş}</p>
      </div>

      <div id="okuma-translation" style="display:none" class="card">
        <h4 style="margin-bottom:8px; color:var(--accent);">Türkçe Çeviri</h4>
        <p style="font-size:0.9rem; line-height:1.8;">${m.anlam}</p>
      </div>

      <h3 class="section-title">Anahtar Kelimeler</h3>
      ${m.kelimeler.map(k => `
        <div class="word-card" onclick="FarsTTS.speak('${k.kelime}')">
          <div class="word-persian">${k.kelime}</div>
          <div class="word-info">
            <div class="word-meaning">${k.anlam}</div>
          </div>
          <button class="word-play" onclick="event.stopPropagation(); FarsTTS.speak('${k.kelime}')">🔊</button>
        </div>
      `).join('')}

      <div style="text-align:center; margin-top:24px;">
        ${idx > 0 ? `<button class="btn btn-secondary" onclick="location.hash='okuma/${idx - 1}'">← Önceki</button>` : ''}
        <button class="btn btn-success" onclick="OkumaModule.complete(${idx})">✓ Okudum</button>
        ${idx < METIN_DATA.length - 1 ? `<button class="btn btn-primary" onclick="location.hash='okuma/${idx + 1}'">Sonraki →</button>` : ''}
      </div>
    `;
  }

  function toggleTranslit() {
    showTranslit = !showTranslit;
    document.getElementById('okuma-translit').style.display = showTranslit ? 'block' : 'none';
  }

  function toggleTranslation() {
    showTranslation = !showTranslation;
    document.getElementById('okuma-translation').style.display = showTranslation ? 'block' : 'none';
  }

  function complete(idx) {
    FarsStorage.markLessonComplete('okuma_' + idx);
    FarsStorage.addXP(20);
    App.showToast('Okuma tamamlandı! +20 XP');
  }

  return { render, toggleTranslit, toggleTranslation, complete };
})();
