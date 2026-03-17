/* ============================================================
   Gramer Modülü — Dilbilgisi dersleri
   ============================================================ */
const GramerModule = (() => {

  function render(container, param) {
    if (param !== null && param !== undefined) {
      renderDetail(container, parseInt(param));
      return;
    }

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>📐 Gramer</h1>
        <p class="subtitle">${GRAMER_DATA.length} ders — Farsça dilbilgisi kuralları</p>
      </div>

      ${GRAMER_DATA.map((g, i) => `
        <div class="card fade-in" style="cursor:pointer; animation-delay:${i * 0.05}s" onclick="location.hash='gramer/${i}'">
          <div class="card-header">
            <span class="icon">${g.emoji}</span>
            <h3>${g.baslik}</h3>
          </div>
          <p style="font-size:0.85rem; color:var(--text-secondary)">${g.aciklama}</p>
        </div>
      `).join('')}
    `;
  }

  function renderDetail(container, idx) {
    const g = GRAMER_DATA[idx];
    if (!g) { App.navigate('gramer'); return; }

    container.innerHTML = `
      <button class="back-btn" onclick="location.hash='gramer'">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Gramer
      </button>

      <div class="app-header fade-in">
        <h1>${g.emoji} ${g.baslik}</h1>
        <p class="subtitle">${g.aciklama}</p>
      </div>

      <table class="grammar-table fade-in">
        <thead>
          <tr>${g.tablo.basliklar.map(b => `<th>${b}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${g.tablo.satirlar.map(row => `
            <tr>${row.map((cell, ci) => `
              <td class="${ci === 1 ? 'persian-cell' : ''}">${cell}</td>
            `).join('')}</tr>
          `).join('')}
        </tbody>
      </table>

      ${g.notlar.length ? `
        <h3 class="section-title">Notlar</h3>
        ${g.notlar.map(n => `
          <div class="card" style="padding:12px 16px; font-size:0.85rem;">
            💡 ${n}
          </div>
        `).join('')}
      ` : ''}

      <div style="text-align:center; margin-top:24px;">
        ${idx > 0 ? `<button class="btn btn-secondary" onclick="location.hash='gramer/${idx - 1}'">← Önceki</button>` : ''}
        ${idx < GRAMER_DATA.length - 1 ? `<button class="btn btn-primary" onclick="location.hash='gramer/${idx + 1}'">Sonraki →</button>` : ''}
        <button class="btn btn-success" onclick="GramerModule.complete(${idx})">✓ Anladım</button>
      </div>
    `;
  }

  function complete(idx) {
    FarsStorage.markLessonComplete('gramer_' + idx);
    FarsStorage.addXP(20);
    App.showToast('Ders tamamlandı! +20 XP');
    if (idx < GRAMER_DATA.length - 1) {
      App.navigate('gramer/' + (idx + 1));
    } else {
      App.navigate('gramer');
    }
  }

  return { render, complete };
})();
