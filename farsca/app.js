/* ============================================================
   Farsça Öğren — Ana Uygulama (Router & State)
   ============================================================ */
const App = (() => {
  let currentModule = null;

  const MODULES = {
    dashboard: DashboardModule,
    alfabe: AlfabeModule,
    kelime: KelimeModule,
    gramer: GramerModule,
    konusma: KonusmaModule,
    dinleme: DinlemeModule,
    okuma: OkumaModule,
    yazma: YazmaModule,
    quiz: QuizModule,
    ilerleme: IlerlemeModule
  };

  function init() {
    window.addEventListener('hashchange', route);
    route();
  }

  function route() {
    const hash = location.hash.slice(1) || 'dashboard';
    const parts = hash.split('/');
    const moduleName = parts[0];
    const param = parts[1] || null;

    if (MODULES[moduleName]) {
      currentModule = moduleName;
      FarsStorage.updateStreak();
      MODULES[moduleName].render(document.getElementById('app'), param);
    } else {
      navigate('dashboard');
    }
  }

  function navigate(path) {
    location.hash = path;
  }

  function showToast(msg, duration = 2500) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  function renderBackBtn(label = 'Ana Sayfa') {
    return `<button class="back-btn" onclick="location.hash='dashboard'">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      ${label}
    </button>`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { navigate, showToast, renderBackBtn };
})();
