/* nav.js — Rauf Lab Global Navigation v2
 * Her sayfaya <script src="/nav.js"></script> ekle.
 * Lab ana sayfası → raufenc.com butonu
 * Proje sayfaları  → ← Lab  +  🏠 raufenc.com butonları
 */
(function () {
  var PATH     = window.location.pathname.replace(/\/index\.html$/, '/');
  var isHome   = PATH === '/' || PATH === '';
  var RAUFENC  = 'https://raufenc.com';
  var LAB      = '/';

  var arrowSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';
  var homeSvg  = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

  var inner;
  if (isHome) {
    /* Lab ana sayfası: sadece raufenc.com */
    inner = '<a href="' + RAUFENC + '" class="rn-btn" title="raufenc.com ana sayfası">'
          + homeSvg + ' <span>raufenc.com</span></a>';
  } else {
    /* Proje sayfası: Lab geri + raufenc.com */
    inner = '<a href="' + LAB + '" class="rn-btn rn-back" title="Lab ana sayfasına dön">'
          + arrowSvg + ' <span>Lab</span></a>'
          + '<a href="' + RAUFENC + '" class="rn-btn rn-home" title="raufenc.com">'
          + homeSvg + '</a>';
  }

  var nav = document.createElement('div');
  nav.id = 'rauf-nav';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Site navigasyonu');
  nav.innerHTML = inner;

  var style = document.createElement('style');
  style.id = 'rauf-nav-css';
  style.textContent = [
    '#rauf-nav{',
      'position:fixed;top:12px;left:12px;z-index:400;',
      'display:flex;align-items:center;gap:6px;',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;',
    '}',
    '.rn-btn{',
      'display:inline-flex;align-items:center;gap:5px;',
      'padding:6px 12px;',
      'background:rgba(8,8,14,.72);',
      'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
      'border:1px solid rgba(255,255,255,.1);border-radius:100px;',
      'color:rgba(255,255,255,.65);text-decoration:none;',
      'font-size:.72rem;font-weight:500;letter-spacing:.01em;',
      'white-space:nowrap;line-height:1;',
      'transition:background .15s,color .15s,border-color .15s;',
      'opacity:.75;',
    '}',
    '.rn-btn:hover{',
      'background:rgba(255,255,255,.1);',
      'border-color:rgba(255,255,255,.2);',
      'color:#fff;opacity:1;',
    '}',
    /* Sadece ev ikonu olan buton (icon-only) → kare padding */
    '.rn-home{padding:6px 10px;}',
    /* Küçük ekranda Lab yazısını gizle */
    '@media(max-width:360px){.rn-btn span{display:none}.rn-btn{padding:7px 10px}}',
  ].join('');

  function inject() {
    if (document.getElementById('rauf-nav')) return;
    if (!document.getElementById('rauf-nav-css')) document.head.appendChild(style);
    document.body.insertBefore(nav, document.body.firstChild);
  }

  if (document.body) { inject(); }
  else { document.addEventListener('DOMContentLoaded', inject); }
})();
