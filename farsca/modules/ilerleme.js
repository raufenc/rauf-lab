/* ============================================================
   İlerleme Modülü — İstatistik, rozetler, seri takibi
   ============================================================ */
const IlerlemeModule = (() => {

  const BADGES = [
    { id: 'alfabe_tamamlandi', icon: '🔤', name: 'Alfabe Ustası', desc: '4 harfi öğrendin' },
    { id: 'quiz_master', icon: '🏆', name: 'Quiz Ustası', desc: 'Bir quizi %90+ ile bitirdin' },
    { id: 'streak_7', icon: '🔥', name: '7 Gün Seri', desc: '7 gün üst üste çalıştın' },
    { id: 'streak_30', icon: '💎', name: '30 Gün Seri', desc: '30 gün üst üste çalıştın' },
    { id: 'kelime_50', icon: '📚', name: '50 Kelime', desc: '50 kelime tekrar ettin' },
    { id: 'level_5', icon: '⭐', name: 'Seviye 5', desc: 'Seviye 5\'e ulaştın' },
    { id: 'level_10', icon: '🌟', name: 'Seviye 10', desc: 'Seviye 10\'a ulaştın' },
    { id: 'ilk_ders', icon: '🎯', name: 'İlk Ders', desc: 'İlk dersini tamamladın' },
  ];

  function render(container) {
    const p = FarsStorage.getProgress();
    const sr = SpacedRepetition.getTotalStats();
    checkBadges(p);

    const totalAnswers = p.totalCorrect + p.totalWrong;
    const accuracy = totalAnswers > 0 ? Math.round((p.totalCorrect / totalAnswers) * 100) : 0;

    container.innerHTML = `
      ${App.renderBackBtn()}
      <div class="app-header fade-in">
        <h1>📊 İlerleme</h1>
        <p class="subtitle">Öğrenme istatistiklerin</p>
      </div>

      <div class="streak-display fade-in">
        🔥 ${p.streak} gün seri
      </div>

      <div class="progress-stats fade-in">
        <div class="progress-stat">
          <div class="stat-value">${p.level}</div>
          <div class="stat-label">Seviye</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value">${p.xp}</div>
          <div class="stat-label">XP</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value">${p.completedLessons.length}</div>
          <div class="stat-label">Tamamlanan Ders</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value">${accuracy}%</div>
          <div class="stat-label">Doğruluk</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value">${p.totalCorrect}</div>
          <div class="stat-label">Doğru Cevap</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value">${p.studyDays.length}</div>
          <div class="stat-label">Çalışma Günü</div>
        </div>
      </div>

      <h3 class="section-title">Tekrar İstatistikleri</h3>
      <div class="progress-stats fade-in">
        <div class="progress-stat">
          <div class="stat-value">${sr.totalCards}</div>
          <div class="stat-label">Toplam Kart</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value" style="color:#10b981">${sr.mastered}</div>
          <div class="stat-label">Öğrenildi</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value" style="color:#f59e0b">${sr.learning}</div>
          <div class="stat-label">Öğreniliyor</div>
        </div>
        <div class="progress-stat">
          <div class="stat-value" style="color:#ef4444">${sr.newOrFailed}</div>
          <div class="stat-label">Yeni/Zor</div>
        </div>
      </div>

      <h3 class="section-title">Rozetler</h3>
      <div class="badge-grid fade-in">
        ${BADGES.map(b => `
          <div class="badge-item ${p.badges.includes(b.id) ? 'earned' : ''}">
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-name">${b.name}</div>
          </div>
        `).join('')}
      </div>

      <div style="text-align:center; margin-top:32px;">
        <button class="btn btn-danger btn-sm" onclick="if(confirm('Tüm ilerleme sıfırlansın mı?')) { localStorage.clear(); location.hash='dashboard'; location.reload(); }">İlerlemeyi Sıfırla</button>
      </div>
    `;
  }

  function checkBadges(p) {
    if (p.streak >= 7) FarsStorage.addBadge('streak_7');
    if (p.streak >= 30) FarsStorage.addBadge('streak_30');
    if (p.level >= 5) FarsStorage.addBadge('level_5');
    if (p.level >= 10) FarsStorage.addBadge('level_10');
    if (p.completedLessons.length >= 1) FarsStorage.addBadge('ilk_ders');

    const srData = FarsStorage.getSRData();
    if (Object.keys(srData).length >= 50) FarsStorage.addBadge('kelime_50');
  }

  return { render };
})();
