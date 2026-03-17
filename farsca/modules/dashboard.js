/* ============================================================
   Dashboard — Ana sayfa modülü
   ============================================================ */
const DashboardModule = (() => {

  const CARDS = [
    { id: 'alfabe', icon: '🔤', title: 'Alfabe', desc: 'Farsça\'ya özgü 4 harf ve okunuş kuralları', color: '#0d9488' },
    { id: 'kelime', icon: '📚', title: 'Kelime', desc: 'Kategorilere göre kelime kartları ve tekrar', color: '#6366f1' },
    { id: 'gramer', icon: '📐', title: 'Gramer', desc: 'Zamirler, fiil çekimi, ezafe ve daha fazlası', color: '#f59e0b' },
    { id: 'konusma', icon: '🗣️', title: 'Konuşma', desc: 'Günlük diyaloglar ve konuşma pratiği', color: '#ec4899' },
    { id: 'dinleme', icon: '👂', title: 'Dinleme', desc: 'Farsça cümleleri dinle ve anla', color: '#8b5cf6' },
    { id: 'okuma', icon: '📖', title: 'Okuma', desc: 'Seviyeye göre Farsça okuma parçaları', color: '#14b8a6' },
    { id: 'yazma', icon: '✍️', title: 'Yazma', desc: 'Farsça klavye ile yazma pratiği', color: '#f97316' },
    { id: 'quiz', icon: '🎯', title: 'Quiz', desc: 'Bilgini test et, puanını gör', color: '#ef4444' },
    { id: 'ilerleme', icon: '📊', title: 'İlerleme', desc: 'İstatistiklerin, rozetlerin ve seri takibin', color: '#d4a843' },
  ];

  function render(container) {
    const p = FarsStorage.getProgress();
    const streakText = p.streak > 0 ? `${p.streak} gün seri` : 'Bugün başla!';

    container.innerHTML = `
      <div class="app-header fade-in">
        <h1>Farsça Öğren</h1>
        <p class="subtitle">Türkler için kapsamlı Farsça öğrenme uygulaması</p>
      </div>

      <div class="stats-bar fade-in">
        <div class="stat-chip"><strong>Sv. ${p.level}</strong></div>
        <div class="stat-chip">🔥 <strong>${streakText}</strong></div>
        <div class="stat-chip">⭐ <strong>${p.xp}</strong> XP</div>
      </div>

      <div class="module-grid">
        ${CARDS.map((c, i) => `
          <div class="module-card fade-in" onclick="location.hash='${c.id}'" style="animation-delay:${i * 0.05}s">
            <div class="card-icon">${c.icon}</div>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            ${getProgressBar(c.id, p)}
          </div>
        `).join('')}
      </div>

      <div class="app-footer">
        <a href="/">raufenc.com</a> · Rauf Enç &copy; 2026
      </div>
    `;
  }

  function getProgressBar(moduleId, p) {
    let pct = 0;
    if (moduleId === 'alfabe' && p.completedAlfabe) pct = 100;
    const lessonCount = p.completedLessons.filter(l => l.startsWith(moduleId)).length;
    if (lessonCount > 0) pct = Math.min(100, lessonCount * 10);
    if (pct === 0) return '';
    return `<div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div>`;
  }

  return { render };
})();
