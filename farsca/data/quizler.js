/* ============================================================
   Quizler — Çoktan seçmeli quiz verileri
   ============================================================ */
const QUIZ_DATA = [
  {
    baslik: 'Temel Kelimeler',
    emoji: '📝',
    seviye: 'Başlangıç',
    sorular: [
      { soru: 'آب', tip: 'farsca-turkce', dogru: 'su', secenekler: ['su', 'ateş', 'hava', 'toprak'] },
      { soru: 'نان', tip: 'farsca-turkce', dogru: 'ekmek', secenekler: ['pirinç', 'ekmek', 'et', 'süt'] },
      { soru: 'خانه', tip: 'farsca-turkce', dogru: 'ev', secenekler: ['okul', 'cami', 'ev', 'çarşı'] },
      { soru: 'کتاب', tip: 'farsca-turkce', dogru: 'kitap', secenekler: ['defter', 'kalem', 'kitap', 'masa'] },
      { soru: 'بزرگ', tip: 'farsca-turkce', dogru: 'büyük', secenekler: ['küçük', 'büyük', 'güzel', 'kötü'] },
      { soru: 'سفید', tip: 'farsca-turkce', dogru: 'beyaz', secenekler: ['siyah', 'kırmızı', 'beyaz', 'yeşil'] },
      { soru: 'مادر', tip: 'farsca-turkce', dogru: 'anne', secenekler: ['baba', 'kardeş', 'anne', 'amca'] },
      { soru: 'گل', tip: 'farsca-turkce', dogru: 'çiçek/gül', secenekler: ['ağaç', 'yaprak', 'çiçek/gül', 'dal'] },
      { soru: 'چشم', tip: 'farsca-turkce', dogru: 'göz', secenekler: ['göz', 'kulak', 'burun', 'ağız'] },
      { soru: 'دست', tip: 'farsca-turkce', dogru: 'el', secenekler: ['ayak', 'el', 'baş', 'parmak'] },
    ]
  },
  {
    baslik: 'Türkçe→Farsça',
    emoji: '🔄',
    seviye: 'Başlangıç',
    sorular: [
      { soru: 'su', tip: 'turkce-farsca', dogru: 'آب', secenekler: ['آب', 'آتش', 'باد', 'خاک'] },
      { soru: 'baba', tip: 'turkce-farsca', dogru: 'پدر', secenekler: ['مادر', 'پدر', 'برادر', 'پسر'] },
      { soru: 'güzel', tip: 'turkce-farsca', dogru: 'زیبا', secenekler: ['بد', 'بزرگ', 'زیبا', 'کوچک'] },
      { soru: 'gitmek', tip: 'turkce-farsca', dogru: 'رفتن', secenekler: ['آمدن', 'رفتن', 'خوردن', 'دیدن'] },
      { soru: 'kitap', tip: 'turkce-farsca', dogru: 'کتاب', secenekler: ['کتاب', 'قلم', 'دفتر', 'میز'] },
      { soru: 'çay', tip: 'turkce-farsca', dogru: 'چای', secenekler: ['آب', 'شیر', 'چای', 'قهوه'] },
      { soru: 'büyük', tip: 'turkce-farsca', dogru: 'بزرگ', secenekler: ['کوچک', 'بزرگ', 'خوب', 'بد'] },
      { soru: 'ev', tip: 'turkce-farsca', dogru: 'خانه', secenekler: ['مدرسه', 'بازار', 'خانه', 'مسجد'] },
      { soru: 'kırmızı', tip: 'turkce-farsca', dogru: 'قرمز', secenekler: ['سبز', 'آبی', 'زرد', 'قرمز'] },
      { soru: 'gece', tip: 'turkce-farsca', dogru: 'شب', secenekler: ['روز', 'شب', 'صبح', 'ظهر'] },
    ]
  },
  {
    baslik: 'Gramer: Zamirler',
    emoji: '👤',
    seviye: 'Başlangıç',
    sorular: [
      { soru: 'من', tip: 'farsca-turkce', dogru: 'ben', secenekler: ['ben', 'sen', 'o', 'biz'] },
      { soru: 'شما', tip: 'farsca-turkce', dogru: 'siz', secenekler: ['biz', 'onlar', 'siz', 'sen'] },
      { soru: 'آنها', tip: 'farsca-turkce', dogru: 'onlar', secenekler: ['biz', 'siz', 'onlar', 'o'] },
      { soru: '"biz" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'ما', secenekler: ['من', 'تو', 'ما', 'شما'] },
      { soru: '"o" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'او', secenekler: ['این', 'آن', 'او', 'تو'] },
      { soru: '"bu" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'این', secenekler: ['این', 'آن', 'او', 'ما'] },
    ]
  },
  {
    baslik: 'Fiil Çekimleri',
    emoji: '🏃',
    seviye: 'Orta',
    sorular: [
      { soru: '"gidiyorum" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'می‌روم', secenekler: ['می‌روم', 'می‌روی', 'می‌رود', 'رفتم'] },
      { soru: '"gittim" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'رفتم', secenekler: ['رفتم', 'رفتی', 'رفت', 'می‌روم'] },
      { soru: 'می‌خورم', tip: 'farsca-turkce', dogru: 'yiyorum', secenekler: ['yiyorum', 'içiyorum', 'gidiyorum', 'geliyorum'] },
      { soru: 'نمی‌روم', tip: 'farsca-turkce', dogru: 'gitmiyorum', secenekler: ['gidiyorum', 'gitmiyorum', 'gitmedim', 'gittim'] },
      { soru: '"yazdım" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'نوشتم', secenekler: ['نوشتم', 'خواندم', 'گفتم', 'دیدم'] },
      { soru: 'خواندند', tip: 'farsca-turkce', dogru: 'okudular', secenekler: ['okudular', 'yazdılar', 'gittiler', 'geldiler'] },
      { soru: '"söylüyor" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'می‌گوید', secenekler: ['می‌گوید', 'می‌رود', 'می‌خورد', 'می‌آید'] },
      { soru: 'آمدیم', tip: 'farsca-turkce', dogru: 'geldik', secenekler: ['gittik', 'geldik', 'yaptık', 'okuduk'] },
    ]
  },
  {
    baslik: 'Günlük İfadeler',
    emoji: '💬',
    seviye: 'Orta',
    sorular: [
      { soru: 'ببخشید', tip: 'farsca-turkce', dogru: 'affedersiniz', secenekler: ['teşekkürler', 'merhaba', 'affedersiniz', 'güle güle'] },
      { soru: 'خداحافظ', tip: 'farsca-turkce', dogru: 'güle güle', secenekler: ['merhaba', 'güle güle', 'nasılsın', 'teşekkürler'] },
      { soru: '"nasılsınız?" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'حال شما چطور است؟', secenekler: ['حال شما چطور است؟', 'اسم شما چیست؟', 'شما کجا هستید؟', 'شما چند سال دارید؟'] },
      { soru: 'خوش آمدید', tip: 'farsca-turkce', dogru: 'hoş geldiniz', secenekler: ['hoş geldiniz', 'güle güle', 'buyurun', 'aferin'] },
      { soru: '"lütfen" Farsça\'da ne?', tip: 'turkce-farsca', dogru: 'لطفاً', secenekler: ['لطفاً', 'ممنون', 'ببخشید', 'بله'] },
      { soru: 'چشم', tip: 'farsca-turkce', dogru: 'baş üstüne', secenekler: ['göz', 'baş üstüne', 'tamam', 'evet'] },
    ]
  }
];
