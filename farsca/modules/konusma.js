/* ============================================================
   Konuşma Modülü — Diyaloglar ve konuşma pratiği
   ============================================================ */
const KonusmaModule = (() => {

  let showTranslations = false;

  function render(container, param) {
    if (param !== null && param !== undefined) {
      renderDialog(container, parseInt(param));
      return;
    }

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>🗣️ Konuşma</h1>
        <p class="subtitle">${DIYALOG_DATA.length} diyalog — Günlük konuşma senaryoları</p>
      </div>

      ${DIYALOG_DATA.map((d, i) => `
        <div class="card fade-in" style="cursor:pointer; animation-delay:${i * 0.05}s" onclick="location.hash='konusma/${i}'">
          <div class="card-header">
            <span class="icon">${d.emoji}</span>
            <h3>${d.baslik}</h3>
          </div>
          <p style="font-size:0.82rem; color:var(--text-secondary)">${d.seviye} · ${d.satirlar.length} satır</p>
        </div>
      `).join('')}
    `;
  }

  function renderDialog(container, idx) {
    const d = DIYALOG_DATA[idx];
    if (!d) { App.navigate('konusma'); return; }
    showTranslations = false;

    container.innerHTML = `
      <button class="back-btn" onclick="location.hash='konusma'">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Konuşma
      </button>

      <div class="app-header fade-in">
        <h1>${d.emoji} ${d.baslik}</h1>
        <p class="subtitle">${d.seviye}</p>
      </div>

      <div style="text-align:center; margin-bottom:16px;">
        <button class="btn btn-secondary btn-sm" onclick="KonusmaModule.toggleTranslations()">
          Çevirileri ${showTranslations ? 'Gizle' : 'Göster'}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="KonusmaModule.playAll(${idx})">▶ Hepsini Dinle</button>
      </div>

      <div id="dialog-lines">
        ${d.satirlar.map((s, si) => `
          <div class="dialog-line speaker-${s.konusmaci.toLowerCase()} fade-in" style="animation-delay:${si * 0.1}s" onclick="FarsTTS.speak('${escapeTTS(s.farsca)}')">
            <div class="dialog-bubble">
              <div class="dialog-speaker">${s.isim}</div>
              <div class="dialog-persian">${s.farsca}</div>
              <div class="dialog-translit">${s.okunuş}</div>
              <div class="dialog-meaning" style="display:${showTranslations ? 'block' : 'none'}">${s.anlam}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="text-align:center; margin-top:24px;">
        ${idx > 0 ? `<button class="btn btn-secondary" onclick="location.hash='konusma/${idx - 1}'">← Önceki</button>` : ''}
        <button class="btn btn-success" onclick="KonusmaModule.complete(${idx})">✓ Tamamla</button>
        ${idx < DIYALOG_DATA.length - 1 ? `<button class="btn btn-primary" onclick="location.hash='konusma/${idx + 1}'">Sonraki →</button>` : ''}
      </div>
    `;
  }

  function toggleTranslations() {
    showTranslations = !showTranslations;
    document.querySelectorAll('.dialog-meaning').forEach(el => {
      el.style.display = showTranslations ? 'block' : 'none';
    });
  }

  function playAll(idx) {
    const d = DIYALOG_DATA[idx];
    let i = 0;
    function next() {
      if (i >= d.satirlar.length) return;
      FarsTTS.speak(d.satirlar[i].farsca, { onEnd: () => { i++; setTimeout(next, 500); } });
    }
    next();
  }

  function complete(idx) {
    FarsStorage.markLessonComplete('konusma_' + idx);
    FarsStorage.addXP(15);
    App.showToast('Diyalog tamamlandı! +15 XP');
  }

  function escapeTTS(text) {
    return text.replace(/'/g, "\\'");
  }

  return { render, toggleTranslations, playAll, complete };
})();
