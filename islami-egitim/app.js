/* =====================================================
   İslami Eğitim Programı - App Logic
   ===================================================== */

'use strict';

// =====================================================
// CONSTANTS
// =====================================================

const MONTHS = [
  'Mart 2026', 'Nisan 2026', 'Mayıs 2026', 'Haziran 2026',
  'Temmuz 2026', 'Ağustos 2026', 'Eylül 2026', 'Ekim 2026',
  'Kasım 2026', 'Aralık 2026', 'Ocak 2027', 'Şubat 2027'
];

const VIRTUES = [
  'Dürüstlük', 'Emanet', 'Sabır', 'Merhamet', 'Dil Kontrolü',
  'Tevazu', 'Şükür', 'Özdenetim', 'Aile Hakkı', 'Çevre Hakkı'
];

const LS_AMEL = 'islami-egitim-amel';
const LS_AHLAK = 'islami-egitim-ahlak';
const LS_EZBER = 'islami-egitim-ezber';

const PAGE_SIZE = 50;

// =====================================================
// STATE
// =====================================================

const state = {
  currentSection: 'dashboard',
  kazanim: {
    filtered: [],
    page: 1,
    search: '',
    alan: '',
    seviye: '',
    oncelik: '',
    faz: ''
  },
  roadmap: { activeTrack: 'Çocuk Temel' },
  etkinlik: { format: '', area: '', duration: '' },
  amel: { activeMonth: 0, data: {} },
  ahlak: { activeMonth: 0, data: {} },
  ezber: { activeType: 'Tümü', data: {} }
};

// =====================================================
// INIT
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  loadAllStorage();
  initNavigation();
  navigateTo('dashboard');
  startCounters();
});

// =====================================================
// NAVIGATION
// =====================================================

function initNavigation() {
  // Sidebar nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const sec = item.dataset.section;
      navigateTo(sec);
    });
  });

  // Bottom tabs
  document.querySelectorAll('.bottom-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const sec = tab.dataset.section;
      navigateTo(sec);
    });
  });
}

function navigateTo(sectionId) {
  state.currentSection = sectionId;

  // Update active nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === sectionId);
  });
  document.querySelectorAll('.bottom-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.section === sectionId);
  });

  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  // Show target section
  const target = document.getElementById('section-' + sectionId);
  if (target) {
    target.classList.add('active');
    // Update header title
    updateHeader(sectionId);
    // Lazy init
    initSection(sectionId);
    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
    window.scrollTo(0, 0);
  }
}

function updateHeader(sectionId) {
  const titles = {
    dashboard: { title: 'Ana Sayfa', sub: 'Program Genel Bakış' },
    kazanim: { title: 'Kazanım Havuzu', sub: '1.021 öğrenme hedefi' },
    roadmap: { title: 'Yol Haritaları', sub: '4 yol × 12 aylık plan' },
    etkinlik: { title: 'Etkinlik Bankası', sub: '30 öğretim etkinliği' },
    amel: { title: 'Amel Takip', sub: 'Aylık ibadet takibi' },
    ahlak: { title: 'Ahlak Muhasebe', sub: 'Aylık öz değerlendirme' },
    ezber: { title: 'Ezber & Okuma', sub: '37 hedef içerik' },
    sozluk: { title: 'Sözlük', sub: '20 temel kavram' }
  };
  const t = titles[sectionId] || { title: '', sub: '' };
  const titleEl = document.getElementById('header-section-title');
  const subEl = document.getElementById('header-subtitle');
  if (titleEl) titleEl.textContent = t.title;
  if (subEl) subEl.textContent = t.sub;
}

function initSection(sectionId) {
  switch (sectionId) {
    case 'dashboard': initDashboard(); break;
    case 'kazanim': initKazanim(); break;
    case 'roadmap': initRoadmap(); break;
    case 'etkinlik': initEtkinlik(); break;
    case 'amel': initAmel(); break;
    case 'ahlak': initAhlak(); break;
    case 'ezber': initEzber(); break;
    case 'sozluk': initSozluk(); break;
  }
}

// =====================================================
// DASHBOARD
// =====================================================

let countersStarted = false;

function startCounters() {
  // Will be triggered when dashboard is visible
}

function initDashboard() {
  if (!countersStarted) {
    countersStarted = true;
    animateCounters();
    animateAreaBars();
  }
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString('tr-TR');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

function animateAreaBars() {
  setTimeout(() => {
    document.querySelectorAll('.area-bar-fill[data-pct]').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 200);
}

// =====================================================
// KAZANIM HAVUZU
// =====================================================

let kazanimInited = false;

function initKazanim() {
  if (kazanimInited) return;
  kazanimInited = true;

  buildKazanimFilters();
  applyKazanimFilters();
}

function buildKazanimFilters() {
  // Search
  const searchInput = document.getElementById('kaz-search');
  searchInput.addEventListener('input', debounce(() => {
    state.kazanim.search = searchInput.value.toLowerCase().trim();
    state.kazanim.page = 1;
    applyKazanimFilters();
  }, 280));

  // Selects
  ['kaz-alan', 'kaz-seviye', 'kaz-oncelik', 'kaz-faz'].forEach(id => {
    document.getElementById(id).addEventListener('change', (e) => {
      const key = id.replace('kaz-', '');
      state.kazanim[key] = e.target.value;
      state.kazanim.page = 1;
      applyKazanimFilters();
    });
  });
}

function applyKazanimFilters() {
  const { search, alan, seviye, oncelik, faz } = state.kazanim;

  state.kazanim.filtered = KAZANIM_DATA.filter(k => {
    if (alan && k.Ana_Alan !== alan) return false;
    if (seviye && k.Seviye !== seviye) return false;
    if (oncelik && k.Oncelik !== oncelik) return false;
    if (faz && k.Program_Fazi !== faz) return false;
    if (search) {
      const haystack = (k.ID + ' ' + k.Kazanim + ' ' + k.Ana_Alan).toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  renderKazanimTable();
  renderPagination();
  updateKazanimCount();
}

function updateKazanimCount() {
  const el = document.getElementById('kaz-count');
  if (el) {
    el.innerHTML = `<span>${state.kazanim.filtered.length.toLocaleString('tr-TR')}</span> kazanım gösteriliyor`;
  }
}

function renderKazanimTable() {
  const tbody = document.getElementById('kazanim-tbody');
  if (!tbody) return;

  const { filtered, page } = state.kazanim;
  const start = (page - 1) * PAGE_SIZE;
  const slice = filtered.slice(start, start + PAGE_SIZE);

  if (slice.length === 0) {
    tbody.innerHTML = `
      <tr><td colspan="7">
        <div class="no-results">
          <div class="icon">◎</div>
          <p>Kriterlere uygun kazanım bulunamadı</p>
        </div>
      </td></tr>`;
    return;
  }

  tbody.innerHTML = slice.map((k, i) => `
    <tr onclick="openKazanimModal(${start + i})" style="cursor:pointer">
      <td><span class="k-id">${esc(k.ID)}</span></td>
      <td><div class="k-text">${esc(k.Kazanim)}</div></td>
      <td><span class="k-alan">${esc(k.Ana_Alan)}</span></td>
      <td>${seviyeBadge(k.Seviye)}</td>
      <td>${onceBadge(k.Oncelik)}</td>
      <td><span class="k-sure">${k.Sure} dk</span></td>
      <td><span class="k-faz">${fazShort(k.Program_Fazi)}</span></td>
    </tr>
  `).join('');
}

function renderPagination() {
  const container = document.getElementById('kazanim-pagination');
  if (!container) return;

  const total = state.kazanim.filtered.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const current = state.kazanim.page;

  if (totalPages <= 1) { container.innerHTML = ''; return; }

  let html = `<button class="page-btn" ${current === 1 ? 'disabled' : ''} onclick="changePage(${current - 1})">← Önceki</button>`;

  const pages = getPageNumbers(current, totalPages);
  pages.forEach(p => {
    if (p === '...') {
      html += `<span class="page-info">…</span>`;
    } else {
      html += `<button class="page-btn ${p === current ? 'active' : ''}" onclick="changePage(${p})">${p}</button>`;
    }
  });

  html += `<button class="page-btn" ${current === totalPages ? 'disabled' : ''} onclick="changePage(${current + 1})">Sonraki →</button>`;
  html += `<span class="page-info">${current}/${totalPages}</span>`;

  container.innerHTML = html;
}

function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  pages.push(1);
  if (current > 3) pages.push('...');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) pages.push(p);
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}

function changePage(page) {
  state.kazanim.page = page;
  renderKazanimTable();
  renderPagination();
  document.getElementById('section-kazanim').querySelector('.kazanim-table-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openKazanimModal(idx) {
  const k = state.kazanim.filtered[idx];
  if (!k) return;

  document.getElementById('modal-k-id').textContent = k.ID;
  document.getElementById('modal-k-title').innerHTML = esc(k.Kazanim);
  document.getElementById('modal-k-alan').textContent = k.Ana_Alan;
  document.getElementById('modal-k-altalan').textContent = k.Alt_Alan || '-';
  document.getElementById('modal-k-modul').textContent = k.Modul || '-';
  document.getElementById('modal-k-seviye').innerHTML = seviyeBadge(k.Seviye);
  document.getElementById('modal-k-oncelik').innerHTML = onceBadge(k.Oncelik);
  document.getElementById('modal-k-sure').textContent = (k.Sure || '-') + ' dakika';
  document.getElementById('modal-k-profil').textContent = k.Onerilen_Profil || '-';
  document.getElementById('modal-k-faz').textContent = k.Program_Fazi || '-';
  document.getElementById('modal-k-yontem').textContent = k.Ogretim_Yontemi || '-';
  document.getElementById('modal-k-olcme').textContent = k.Olcme_Turu || '-';
  document.getElementById('modal-k-transfer').textContent = k.Gunluk_Hayat_Transferi || '-';

  document.getElementById('kazanim-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeKazanimModal() {
  document.getElementById('kazanim-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// =====================================================
// YOL HARİTALARI
// =====================================================

let roadmapInited = false;

function initRoadmap() {
  if (roadmapInited) return;
  roadmapInited = true;
  renderRoadmap(state.roadmap.activeTrack);
}

function switchTrack(track) {
  state.roadmap.activeTrack = track;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.track === track);
  });
  renderRoadmap(track);
}

function renderRoadmap(track) {
  const container = document.getElementById('roadmap-grid');
  if (!container) return;

  const months = YOL_HARITA_DATA.filter(y => y['Yol / Track'] === track)
    .sort((a, b) => a['Ay No'] - b['Ay No']);

  container.innerHTML = months.map(m => `
    <div class="month-card">
      <div class="month-header">
        <div class="month-badge">${m['Ay No']}</div>
        <div>
          <div class="month-block">${esc(m['Ay Bloğu'])}</div>
          <div class="month-tema">${esc(m['Odak Tema'])}</div>
        </div>
      </div>
      <div class="month-alan-chip">${esc(m['Ana Alan'])}</div>
      <div class="month-hedef">${esc(m['Ana Hedef / Çıktı'])}</div>
      <div class="month-meta">
        <div class="month-meta-row">
          <strong>Aile</strong>
          <span>${esc(m['Ev / Aile Uygulaması'])}</span>
        </div>
        <div class="month-meta-row">
          <strong>Ölçme</strong>
          <span>${esc(m['Ölçme'])}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// =====================================================
// ETKİNLİK BANKASI
// =====================================================

let etkinlikInited = false;

function initEtkinlik() {
  if (etkinlikInited) return;
  etkinlikInited = true;
  renderEtkinlikGrid(ETKINLIK_DATA);
  buildEtkinlikFilters();
}

function buildEtkinlikFilters() {
  document.getElementById('etk-format').addEventListener('change', applyEtkinlikFilters);
  document.getElementById('etk-duration').addEventListener('change', applyEtkinlikFilters);
}

function applyEtkinlikFilters() {
  const format = document.getElementById('etk-format').value.toLowerCase();
  const duration = document.getElementById('etk-duration').value;

  const filtered = ETKINLIK_DATA.filter(e => {
    if (format && !e['Uygulama Biçimi'].toLowerCase().includes(format)) return false;
    if (duration) {
      const d = e['Süre (dk)'];
      if (duration === 'short' && d > 15) return false;
      if (duration === 'medium' && (d < 16 || d > 30)) return false;
      if (duration === 'long' && d <= 30) return false;
    }
    return true;
  });

  renderEtkinlikGrid(filtered);
}

function renderEtkinlikGrid(data) {
  const container = document.getElementById('etkinlik-grid');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `<div class="no-results" style="grid-column:span 3"><div class="icon">◆</div><p>Etkinlik bulunamadı</p></div>`;
    return;
  }

  container.innerHTML = data.map(e => `
    <div class="etkinlik-card" onclick="toggleEtkinlik(this)">
      <div class="etk-code">${esc(e.Kod)}</div>
      <div class="etk-name">${esc(e.Etkinlik)}</div>
      <div class="etk-tags">
        <span class="etk-tag tag-format">${esc(e['Uygulama Biçimi'])}</span>
        <span class="etk-tag tag-seviye">${esc(e['Uygun Seviye'])}</span>
      </div>
      <div class="etk-duration">
        <span>⏱</span>
        <span>${e['Süre (dk)']} dakika</span>
      </div>
      <div class="etk-outcome">${esc(e['Beklenen Çıktı'])}</div>
      <div class="etk-expand">
        <strong style="color:var(--accent-gold);font-size:11px;">MATERYAL:</strong> ${esc(e.Materyal)}<br>
        <strong style="color:var(--accent-gold);font-size:11px;">UYGUN ALAN:</strong> ${esc(e['Uygun Alanlar'])}<br>
        ${e.Not ? `<strong style="color:var(--accent-gold);font-size:11px;">NOT:</strong> ${esc(e.Not)}` : ''}
      </div>
    </div>
  `).join('');
}

function toggleEtkinlik(card) {
  card.classList.toggle('expanded');
}

// =====================================================
// AMEL TAKİP
// =====================================================

function initAmel() {
  renderAmelMonthTabs();
  renderAmelForm(state.amel.activeMonth);
  renderAnnualSummary();
}

function renderAmelMonthTabs() {
  const container = document.getElementById('amel-month-tabs');
  container.innerHTML = MONTHS.map((m, i) => `
    <button class="amel-month-btn ${i === state.amel.activeMonth ? 'active' : ''}"
      onclick="switchAmelMonth(${i})">${m}</button>
  `).join('');
}

function switchAmelMonth(idx) {
  state.amel.activeMonth = idx;
  document.querySelectorAll('.amel-month-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  renderAmelForm(idx);
}

function renderAmelForm(monthIdx) {
  const container = document.getElementById('amel-form-body');
  const saved = (state.amel.data[monthIdx] || {});
  const monthName = MONTHS[monthIdx];

  const starHtml = (field, val) => {
    return [1,2,3,4,5].map(n =>
      `<span class="star ${(val||0) >= n ? 'active' : ''}"
        data-field="${field}" data-val="${n}"
        onclick="setAmelStar('${field}', ${n}, ${monthIdx})">★</span>`
    ).join('');
  };

  container.innerHTML = `
    <div class="amel-form-title">${monthName} — Amel Kaydı</div>
    <div class="amel-grid">
      <div class="amel-field">
        <label>5 Vakit Devam % <span class="range-val" id="amel-vakit-val">${saved.vakit || 0}%</span></label>
        <input type="range" min="0" max="100" value="${saved.vakit || 0}" step="5"
          oninput="amelRangeChange('vakit', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Cemaat / Mescid Günleri</label>
        <input type="number" min="0" max="30" value="${saved.cemaat || ''}"
          placeholder="0-30" onchange="saveAmelField('cemaat', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Kur'an Günleri</label>
        <input type="number" min="0" max="30" value="${saved.kuran || ''}"
          placeholder="0-30" onchange="saveAmelField('kuran', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Dua-Zikir Günleri</label>
        <input type="number" min="0" max="30" value="${saved.dua || ''}"
          placeholder="0-30" onchange="saveAmelField('dua', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Nafile Oruç Günleri</label>
        <input type="number" min="0" max="30" value="${saved.nafileOruc || ''}"
          placeholder="0-30" onchange="saveAmelField('nafileOruc', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Sadaka / İnfak</label>
        <input type="text" value="${saved.sadaka || ''}"
          placeholder="miktar / bilgi" onchange="saveAmelField('sadaka', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Ders Saati</label>
        <input type="number" min="0" value="${saved.ders || ''}"
          placeholder="saat" onchange="saveAmelField('ders', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Hizmet / Yardım</label>
        <input type="text" value="${saved.hizmet || ''}"
          placeholder="kısa not" onchange="saveAmelField('hizmet', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Aile Görevi (gün)</label>
        <input type="number" min="0" max="30" value="${saved.aileGorev || ''}"
          placeholder="0-30" onchange="saveAmelField('aileGorev', this.value, ${monthIdx})">
      </div>
      <div class="amel-field">
        <label>Genel Değerlendirme</label>
        <div class="star-rating" id="amel-star-rating">
          ${starHtml('genelPuan', saved.genelPuan)}
        </div>
      </div>
      <div class="amel-field amel-field-full">
        <label>Kısa Not</label>
        <textarea placeholder="Bu ay hakkında notlar..."
          onchange="saveAmelField('not', this.value, ${monthIdx})">${saved.not || ''}</textarea>
      </div>
    </div>
    <button class="save-btn" onclick="saveAmel(${monthIdx})">Kaydet</button>
    <span class="saved-badge" id="amel-saved-badge">✓ Kaydedildi</span>
  `;
}

function amelRangeChange(field, val, monthIdx) {
  document.getElementById('amel-vakit-val').textContent = val + '%';
  saveAmelField(field, parseInt(val), monthIdx);
}

function setAmelStar(field, val, monthIdx) {
  if (!state.amel.data[monthIdx]) state.amel.data[monthIdx] = {};
  state.amel.data[monthIdx][field] = val;
  // Update stars display
  document.querySelectorAll(`[data-field="${field}"]`).forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= val);
  });
}

function saveAmelField(field, val, monthIdx) {
  if (!state.amel.data[monthIdx]) state.amel.data[monthIdx] = {};
  state.amel.data[monthIdx][field] = val;
}

function saveAmel(monthIdx) {
  localStorage.setItem(LS_AMEL, JSON.stringify(state.amel.data));
  renderAnnualSummary();
  const badge = document.getElementById('amel-saved-badge');
  if (badge) {
    badge.classList.add('show');
    setTimeout(() => badge.classList.remove('show'), 2500);
  }
}

function renderAnnualSummary() {
  const container = document.getElementById('annual-grid');
  if (!container) return;

  const months = Object.values(state.amel.data);
  const filled = months.length;
  if (filled === 0) {
    container.innerHTML = `<div style="grid-column:span 4;text-align:center;color:var(--text-muted);padding:16px;font-size:13px;">Henüz kayıt yok</div>`;
    return;
  }

  const avg = (field) => {
    const vals = months.map(m => parseFloat(m[field] || 0)).filter(v => !isNaN(v));
    return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : '—';
  };

  container.innerHTML = `
    <div class="annual-stat">
      <div class="num">${avg('vakit')}%</div>
      <div class="lbl">Ort. Vakit</div>
    </div>
    <div class="annual-stat">
      <div class="num">${avg('kuran')}</div>
      <div class="lbl">Ort. Kur'an Günü</div>
    </div>
    <div class="annual-stat">
      <div class="num">${avg('ders')}</div>
      <div class="lbl">Ort. Ders Saati</div>
    </div>
    <div class="annual-stat">
      <div class="num">${avg('genelPuan')}</div>
      <div class="lbl">Ort. Puan</div>
    </div>
  `;
}

// =====================================================
// AHLAK MUHASEBE
// =====================================================

let ahlakInited = false;

function initAhlak() {
  if (ahlakInited) { updateRadarChart(); renderTrendBars(); return; }
  ahlakInited = true;

  renderAhlakMonthTabs();
  renderAhlakForm(state.ahlak.activeMonth);
  updateRadarChart();
  renderTrendBars();
  renderRadarLegend();
}

function renderAhlakMonthTabs() {
  const container = document.getElementById('ahlak-month-tabs');
  container.innerHTML = MONTHS.map((m, i) => `
    <button class="amel-month-btn ${i === state.ahlak.activeMonth ? 'active' : ''}"
      onclick="switchAhlakMonth(${i})">${m}</button>
  `).join('');
}

function switchAhlakMonth(idx) {
  state.ahlak.activeMonth = idx;
  document.querySelectorAll('#ahlak-month-tabs .amel-month-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  renderAhlakForm(idx);
  updateRadarChart();
  renderTrendBars();
}

function renderAhlakForm(monthIdx) {
  const container = document.getElementById('ahlak-virtue-grid');
  const saved = (state.ahlak.data[monthIdx] || {});

  container.innerHTML = VIRTUES.map((v, vi) => {
    const val = saved[vi] || 0;
    return `
      <div class="virtue-item">
        <div class="virtue-name">${v}</div>
        <div class="virtue-stars">
          ${[1,2,3,4,5].map(n => `
            <span class="virtue-star ${val >= n ? 'active' : ''}"
              data-virtue="${vi}" data-val="${n}"
              onclick="setVirtue(${monthIdx}, ${vi}, ${n})">★</span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function setVirtue(monthIdx, virtueIdx, val) {
  if (!state.ahlak.data[monthIdx]) state.ahlak.data[monthIdx] = {};
  state.ahlak.data[monthIdx][virtueIdx] = val;

  // Update stars
  document.querySelectorAll(`[data-virtue="${virtueIdx}"]`).forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= val);
  });

  updateRadarChart();
  renderTrendBars();
  autoSaveAhlak();
}

function autoSaveAhlak() {
  localStorage.setItem(LS_AHLAK, JSON.stringify(state.ahlak.data));
  const badge = document.getElementById('ahlak-saved-badge');
  if (badge) {
    badge.classList.add('show');
    clearTimeout(badge._timer);
    badge._timer = setTimeout(() => badge.classList.remove('show'), 2000);
  }
}

function saveAhlak(monthIdx) {
  localStorage.setItem(LS_AHLAK, JSON.stringify(state.ahlak.data));
  renderTrendBars();
  const badge = document.getElementById('ahlak-saved-badge');
  if (badge) {
    badge.classList.add('show');
    setTimeout(() => badge.classList.remove('show'), 2500);
  }
}

function updateRadarChart() {
  const svg = document.getElementById('radar-chart');
  if (!svg) return;

  const monthIdx = state.ahlak.activeMonth;
  const saved = (state.ahlak.data[monthIdx] || {});
  const values = VIRTUES.map((_, i) => (saved[i] || 0) / 5);

  const cx = 160, cy = 160, r = 120;
  const n = VIRTUES.length;

  // Build polygons
  const toCoord = (i, scale) => {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2;
    return {
      x: cx + r * scale * Math.cos(angle),
      y: cy + r * scale * Math.sin(angle)
    };
  };

  // Grid circles
  let gridLines = '';
  for (let s = 0.2; s <= 1; s += 0.2) {
    const pts = Array.from({ length: n }, (_, i) => toCoord(i, s));
    gridLines += `<polygon points="${pts.map(p => `${p.x},${p.y}`).join(' ')}"
      fill="none" stroke="rgba(201,162,39,0.1)" stroke-width="1"/>`;
  }

  // Axis lines
  let axes = '';
  for (let i = 0; i < n; i++) {
    const outer = toCoord(i, 1);
    axes += `<line x1="${cx}" y1="${cy}" x2="${outer.x}" y2="${outer.y}"
      stroke="rgba(201,162,39,0.15)" stroke-width="1"/>`;
  }

  // Labels
  let labels = '';
  for (let i = 0; i < n; i++) {
    const pos = toCoord(i, 1.18);
    const short = VIRTUES[i].substring(0, 8);
    labels += `<text x="${pos.x}" y="${pos.y}" text-anchor="middle" dominant-baseline="middle"
      fill="#a89070" font-size="10" font-family="Inter">${short}</text>`;
  }

  // Data polygon
  const dataPoints = values.map((v, i) => toCoord(i, Math.max(v, 0.02)));
  const dataPath = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

  svg.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      ${gridLines}
      ${axes}
      <polygon points="${dataPath}"
        fill="rgba(201,162,39,0.2)" stroke="#c9a227" stroke-width="2" stroke-linejoin="round"/>
      ${dataPoints.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#c9a227"/>`).join('')}
      ${labels}
    </svg>
  `;
}

function renderRadarLegend() {
  const container = document.getElementById('radar-legend');
  if (!container) return;
  container.innerHTML = VIRTUES.map(v => `<div class="radar-legend-item">${v}</div>`).join('');
}

function renderTrendBars() {
  const container = document.getElementById('ahlak-trend-bars');
  if (!container) return;

  const monthIdx = state.ahlak.activeMonth;
  const saved = (state.ahlak.data[monthIdx] || {});

  container.innerHTML = VIRTUES.map((v, i) => {
    const val = saved[i] || 0;
    const pct = (val / 5) * 100;
    return `
      <div class="trend-row">
        <div class="trend-label">${v}</div>
        <div class="trend-bar-track">
          <div class="trend-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="trend-val">${val}</div>
      </div>
    `;
  }).join('');
}

// =====================================================
// EZBER & OKUMA
// =====================================================

let ezberInited = false;

function initEzber() {
  if (ezberInited) { updateEzberProgress(); return; }
  ezberInited = true;
  renderEzberTabs();
  filterEzber('Tümü');
  updateEzberProgress();
}

function renderEzberTabs() {
  const types = ['Tümü', 'Sure', 'Ayet', 'Dua', 'Hadis', 'Kitap'];
  const container = document.getElementById('ezber-tabs');
  container.innerHTML = types.map(t => {
    const count = t === 'Tümü' ? EZBER_DATA.length :
      EZBER_DATA.filter(e => e['Tür'] === t).length;
    return `
      <button class="ezber-tab ${t === state.ezber.activeType ? 'active' : ''}"
        onclick="filterEzber('${t}')">${t} (${count})</button>
    `;
  }).join('');
}

function filterEzber(type) {
  state.ezber.activeType = type;
  document.querySelectorAll('.ezber-tab').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.startsWith(type));
  });
  renderEzberList(type);
}

function renderEzberList(type) {
  const container = document.getElementById('ezber-list');
  const items = type === 'Tümü' ? EZBER_DATA : EZBER_DATA.filter(e => e['Tür'] === type);

  container.innerHTML = items.map((item, idx) => {
    const globalIdx = EZBER_DATA.indexOf(item);
    const saved = state.ezber.data[globalIdx] || {};
    const isChecked = saved.checked || false;
    const status = saved.status || item.Durum || 'Planlandı';

    return `
      <div class="ezber-item ${isChecked ? 'completed' : ''}" id="ezber-item-${globalIdx}">
        <div class="ezber-checkbox ${isChecked ? 'checked' : ''}"
          onclick="toggleEzber(${globalIdx})">
          ${isChecked ? '✓' : ''}
        </div>
        <div>
          <div class="ezber-content-name">${esc(item['İçerik'])}</div>
          <div class="ezber-tekrar">${esc(item['Tekrar / Hedef'])}</div>
        </div>
        ${seviyeBadge(item['Seviye'])}
        ${onceBadge(item['Öncelik'])}
        <select class="ezber-status-sel" onchange="setEzberStatus(${globalIdx}, this.value)">
          <option ${status === 'Planlandı' ? 'selected' : ''}>Planlandı</option>
          <option ${status === 'Devam' ? 'selected' : ''}>Devam</option>
          <option ${status === 'Tamamlandı' ? 'selected' : ''}>Tamamlandı</option>
        </select>
      </div>
    `;
  }).join('');
}

function toggleEzber(idx) {
  if (!state.ezber.data[idx]) state.ezber.data[idx] = {};
  state.ezber.data[idx].checked = !state.ezber.data[idx].checked;

  if (state.ezber.data[idx].checked) {
    state.ezber.data[idx].status = 'Tamamlandı';
  }

  localStorage.setItem(LS_EZBER, JSON.stringify(state.ezber.data));
  filterEzber(state.ezber.activeType);
  updateEzberProgress();
}

function setEzberStatus(idx, status) {
  if (!state.ezber.data[idx]) state.ezber.data[idx] = {};
  state.ezber.data[idx].status = status;
  if (status === 'Tamamlandı') state.ezber.data[idx].checked = true;
  if (status === 'Planlandı') state.ezber.data[idx].checked = false;
  localStorage.setItem(LS_EZBER, JSON.stringify(state.ezber.data));
  updateEzberProgress();
}

function updateEzberProgress() {
  const total = EZBER_DATA.length;
  const completed = Object.values(state.ezber.data).filter(d => d.checked).length;
  const pct = Math.round((completed / total) * 100);

  const bar = document.getElementById('ezber-progress-bar');
  const text = document.getElementById('ezber-progress-text');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = `${completed} / ${total} tamamlandı (${pct}%)`;
}

// =====================================================
// SÖZLÜK
// =====================================================

let sozlukInited = false;

function initSozluk() {
  if (sozlukInited) return;
  sozlukInited = true;
  renderSozluk(SOZLUK_DATA);
  document.getElementById('sozluk-search').addEventListener('input', debounce((e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = q ? SOZLUK_DATA.filter(s =>
      s.Terim.toLowerCase().includes(q) ||
      s.Kisa_Anlam.toLowerCase().includes(q) ||
      (s.Alan || '').toLowerCase().includes(q)
    ) : SOZLUK_DATA;
    renderSozluk(filtered);
  }, 250));
}

function renderSozluk(data) {
  const container = document.getElementById('sozluk-grid');

  if (data.length === 0) {
    container.innerHTML = `<div class="no-results" style="grid-column:span 3"><div class="icon">◎</div><p>Terim bulunamadı</p></div>`;
    return;
  }

  container.innerHTML = data.map(s => `
    <div class="sozluk-card">
      <div class="sozluk-term">${esc(s.Terim)}</div>
      <div class="sozluk-meaning">${esc(s.Kisa_Anlam)}</div>
      ${s.Alan ? `<div class="sozluk-alan">${esc(s.Alan)}</div>` : ''}
      ${s.Not ? `<div class="sozluk-note">${esc(s.Not)}</div>` : ''}
    </div>
  `).join('');
}

// =====================================================
// STORAGE
// =====================================================

function loadAllStorage() {
  try {
    const amel = localStorage.getItem(LS_AMEL);
    if (amel) state.amel.data = JSON.parse(amel);
  } catch(e) {}

  try {
    const ahlak = localStorage.getItem(LS_AHLAK);
    if (ahlak) state.ahlak.data = JSON.parse(ahlak);
  } catch(e) {}

  try {
    const ezber = localStorage.getItem(LS_EZBER);
    if (ezber) state.ezber.data = JSON.parse(ezber);
  } catch(e) {}
}

// =====================================================
// HELPERS
// =====================================================

function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function seviyeBadge(s) {
  const map = {
    'Başlangıç': 'badge-baslangic',
    'Temel': 'badge-temel',
    'Gelişim': 'badge-gelisim',
    'Derinleşme': 'badge-derinlesme'
  };
  return `<span class="badge ${map[s] || ''}">${esc(s)}</span>`;
}

function onceBadge(o) {
  const map = {
    'Çekirdek': 'badge-cekirdek',
    'Yüksek': 'badge-yuksek',
    'Destekleyici': 'badge-destekleyici'
  };
  return `<span class="badge ${map[o] || ''}">${esc(o)}</span>`;
}

function fazShort(faz) {
  if (!faz) return '-';
  const match = faz.match(/Faz (\d)/);
  return match ? 'F' + match[1] : faz.substring(0, 8);
}

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Expose to HTML
window.navigateTo = navigateTo;
window.switchTrack = switchTrack;
window.openKazanimModal = openKazanimModal;
window.closeKazanimModal = closeKazanimModal;
window.changePage = changePage;
window.toggleEtkinlik = toggleEtkinlik;
window.switchAmelMonth = switchAmelMonth;
window.saveAmel = saveAmel;
window.setAmelStar = setAmelStar;
window.amelRangeChange = amelRangeChange;
window.saveAmelField = saveAmelField;
window.switchAhlakMonth = switchAhlakMonth;
window.setVirtue = setVirtue;
window.saveAhlak = saveAhlak;
window.filterEzber = filterEzber;
window.toggleEzber = toggleEzber;
window.setEzberStatus = setEzberStatus;
window.applyEtkinlikFilters = applyEtkinlikFilters;
