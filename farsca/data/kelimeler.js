/* ============================================================
   Kelimeler — Kategorilere göre Farsça kelime havuzu
   ============================================================ */
const KELIME_DATA = [
  {
    kategori: 'Selamlaşma',
    emoji: '👋',
    kelimeler: [
      { farsca: 'سلام', okunuş: 'selâm', anlam: 'merhaba' },
      { farsca: 'صبح بخیر', okunuş: 'sobh be-heyr', anlam: 'günaydın' },
      { farsca: 'شب بخیر', okunuş: 'şeb be-heyr', anlam: 'iyi geceler' },
      { farsca: 'حال شما چطور است؟', okunuş: 'hâl-e şomâ çetor ast?', anlam: 'nasılsınız?' },
      { farsca: 'خوبم', okunuş: 'hubem', anlam: 'iyiyim' },
      { farsca: 'ممنون', okunuş: 'memnun', anlam: 'teşekkürler' },
      { farsca: 'خواهش می‌کنم', okunuş: 'hâheş mi-konem', anlam: 'rica ederim' },
      { farsca: 'لطفاً', okunuş: 'lotfen', anlam: 'lütfen' },
      { farsca: 'بله', okunuş: 'bele', anlam: 'evet' },
      { farsca: 'نه', okunuş: 'na', anlam: 'hayır' },
      { farsca: 'ببخشید', okunuş: 'be-bahşid', anlam: 'affedersiniz' },
      { farsca: 'خداحافظ', okunuş: 'hodâhâfez', anlam: 'güle güle' },
    ]
  },
  {
    kategori: 'Aile',
    emoji: '👨‍👩‍👧‍👦',
    kelimeler: [
      { farsca: 'پدر', okunuş: 'peder', anlam: 'baba' },
      { farsca: 'مادر', okunuş: 'mâder', anlam: 'anne' },
      { farsca: 'برادر', okunuş: 'berâder', anlam: 'erkek kardeş' },
      { farsca: 'خواهر', okunuş: 'hâher', anlam: 'kız kardeş' },
      { farsca: 'پسر', okunuş: 'pesar', anlam: 'oğul' },
      { farsca: 'دختر', okunuş: 'dohtar', anlam: 'kız' },
      { farsca: 'شوهر', okunuş: 'şoher', anlam: 'koca' },
      { farsca: 'زن', okunuş: 'zen', anlam: 'kadın/eş' },
      { farsca: 'بچه', okunuş: 'becce', anlam: 'çocuk' },
      { farsca: 'خانواده', okunuş: 'hânevâde', anlam: 'aile' },
      { farsca: 'پدربزرگ', okunuş: 'peder-bozorg', anlam: 'büyükbaba' },
      { farsca: 'مادربزرگ', okunuş: 'mâder-bozorg', anlam: 'büyükanne' },
    ]
  },
  {
    kategori: 'Sayılar',
    emoji: '🔢',
    kelimeler: [
      { farsca: 'یک', okunuş: 'yek', anlam: 'bir (1)' },
      { farsca: 'دو', okunuş: 'do', anlam: 'iki (2)' },
      { farsca: 'سه', okunuş: 'se', anlam: 'üç (3)' },
      { farsca: 'چهار', okunuş: 'cehâr', anlam: 'dört (4)' },
      { farsca: 'پنج', okunuş: 'penj', anlam: 'beş (5)' },
      { farsca: 'شش', okunuş: 'şeş', anlam: 'altı (6)' },
      { farsca: 'هفت', okunuş: 'heft', anlam: 'yedi (7)' },
      { farsca: 'هشت', okunuş: 'heşt', anlam: 'sekiz (8)' },
      { farsca: 'نه', okunuş: 'noh', anlam: 'dokuz (9)' },
      { farsca: 'ده', okunuş: 'deh', anlam: 'on (10)' },
      { farsca: 'صد', okunuş: 'sad', anlam: 'yüz (100)' },
      { farsca: 'هزار', okunuş: 'hezâr', anlam: 'bin (1000)' },
    ]
  },
  {
    kategori: 'Yiyecek & İçecek',
    emoji: '🍽️',
    kelimeler: [
      { farsca: 'نان', okunuş: 'nân', anlam: 'ekmek' },
      { farsca: 'آب', okunuş: 'âb', anlam: 'su' },
      { farsca: 'چای', okunuş: 'çây', anlam: 'çay' },
      { farsca: 'برنج', okunuş: 'berenj', anlam: 'pirinç/pilav' },
      { farsca: 'گوشت', okunuş: 'guşt', anlam: 'et' },
      { farsca: 'مرغ', okunuş: 'morğ', anlam: 'tavuk' },
      { farsca: 'ماهی', okunuş: 'mâhi', anlam: 'balık' },
      { farsca: 'میوه', okunuş: 'mive', anlam: 'meyve' },
      { farsca: 'سبزی', okunuş: 'sabzi', anlam: 'sebze' },
      { farsca: 'شیر', okunuş: 'şir', anlam: 'süt' },
      { farsca: 'شکر', okunuş: 'şeker', anlam: 'şeker' },
      { farsca: 'نمک', okunuş: 'namak', anlam: 'tuz' },
    ]
  },
  {
    kategori: 'Renkler',
    emoji: '🎨',
    kelimeler: [
      { farsca: 'سفید', okunuş: 'sefid', anlam: 'beyaz' },
      { farsca: 'سیاه', okunuş: 'siyâh', anlam: 'siyah' },
      { farsca: 'قرمز', okunuş: 'ğermez', anlam: 'kırmızı' },
      { farsca: 'آبی', okunuş: 'âbi', anlam: 'mavi' },
      { farsca: 'سبز', okunuş: 'sabz', anlam: 'yeşil' },
      { farsca: 'زرد', okunuş: 'zerd', anlam: 'sarı' },
      { farsca: 'نارنجی', okunuş: 'nârenji', anlam: 'turuncu' },
      { farsca: 'بنفش', okunuş: 'benefş', anlam: 'mor' },
      { farsca: 'قهوه‌ای', okunuş: 'ğehve-i', anlam: 'kahverengi' },
      { farsca: 'صورتی', okunuş: 'surati', anlam: 'pembe' },
    ]
  },
  {
    kategori: 'Zaman',
    emoji: '⏰',
    kelimeler: [
      { farsca: 'امروز', okunuş: 'emruz', anlam: 'bugün' },
      { farsca: 'دیروز', okunuş: 'diruz', anlam: 'dün' },
      { farsca: 'فردا', okunuş: 'ferdâ', anlam: 'yarın' },
      { farsca: 'صبح', okunuş: 'sobh', anlam: 'sabah' },
      { farsca: 'ظهر', okunuş: 'zohr', anlam: 'öğle' },
      { farsca: 'شب', okunuş: 'şeb', anlam: 'gece' },
      { farsca: 'ساعت', okunuş: 'sâ\'at', anlam: 'saat' },
      { farsca: 'هفته', okunuş: 'hefte', anlam: 'hafta' },
      { farsca: 'ماه', okunuş: 'mâh', anlam: 'ay' },
      { farsca: 'سال', okunuş: 'sâl', anlam: 'yıl' },
    ]
  },
  {
    kategori: 'Mekan',
    emoji: '🏠',
    kelimeler: [
      { farsca: 'خانه', okunuş: 'hâne', anlam: 'ev' },
      { farsca: 'مدرسه', okunuş: 'medrese', anlam: 'okul' },
      { farsca: 'بازار', okunuş: 'bâzâr', anlam: 'çarşı/pazar' },
      { farsca: 'مسجد', okunuş: 'mesjed', anlam: 'cami' },
      { farsca: 'بیمارستان', okunuş: 'bimârestân', anlam: 'hastane' },
      { farsca: 'خیابان', okunuş: 'hiyâbân', anlam: 'cadde' },
      { farsca: 'شهر', okunuş: 'şehr', anlam: 'şehir' },
      { farsca: 'کتابخانه', okunuş: 'ketâbhâne', anlam: 'kütüphane' },
      { farsca: 'رستوران', okunuş: 'restorân', anlam: 'restoran' },
      { farsca: 'فرودگاه', okunuş: 'forudgâh', anlam: 'havalimanı' },
    ]
  },
  {
    kategori: 'Fiiller',
    emoji: '🏃',
    kelimeler: [
      { farsca: 'رفتن', okunuş: 'reften', anlam: 'gitmek' },
      { farsca: 'آمدن', okunuş: 'âmeden', anlam: 'gelmek' },
      { farsca: 'خوردن', okunuş: 'horden', anlam: 'yemek' },
      { farsca: 'نوشیدن', okunuş: 'nuşiden', anlam: 'içmek' },
      { farsca: 'خوابیدن', okunuş: 'hâbiden', anlam: 'uyumak' },
      { farsca: 'نوشتن', okunuş: 'neveşten', anlam: 'yazmak' },
      { farsca: 'خواندن', okunuş: 'hânden', anlam: 'okumak' },
      { farsca: 'گفتن', okunuş: 'goften', anlam: 'söylemek' },
      { farsca: 'دیدن', okunuş: 'diden', anlam: 'görmek' },
      { farsca: 'شنیدن', okunuş: 'şeniden', anlam: 'duymak/dinlemek' },
      { farsca: 'دانستن', okunuş: 'dânesten', anlam: 'bilmek' },
      { farsca: 'خواستن', okunuş: 'hâsten', anlam: 'istemek' },
    ]
  },
  {
    kategori: 'Sıfatlar',
    emoji: '✨',
    kelimeler: [
      { farsca: 'بزرگ', okunuş: 'bozorg', anlam: 'büyük' },
      { farsca: 'کوچک', okunuş: 'kuçek', anlam: 'küçük' },
      { farsca: 'خوب', okunuş: 'hub', anlam: 'iyi/güzel' },
      { farsca: 'بد', okunuş: 'bed', anlam: 'kötü' },
      { farsca: 'زیبا', okunuş: 'zibâ', anlam: 'güzel' },
      { farsca: 'گرم', okunuş: 'germ', anlam: 'sıcak' },
      { farsca: 'سرد', okunuş: 'serd', anlam: 'soğuk' },
      { farsca: 'نزدیک', okunuş: 'nezdik', anlam: 'yakın' },
      { farsca: 'دور', okunuş: 'dur', anlam: 'uzak' },
      { farsca: 'تازه', okunuş: 'tâze', anlam: 'taze/yeni' },
    ]
  },
  {
    kategori: 'Vücut',
    emoji: '🫀',
    kelimeler: [
      { farsca: 'سر', okunuş: 'ser', anlam: 'baş/kafa' },
      { farsca: 'چشم', okunuş: 'çeşm', anlam: 'göz' },
      { farsca: 'گوش', okunuş: 'guş', anlam: 'kulak' },
      { farsca: 'دهان', okunuş: 'dehân', anlam: 'ağız' },
      { farsca: 'دست', okunuş: 'dest', anlam: 'el' },
      { farsca: 'پا', okunuş: 'pâ', anlam: 'ayak' },
      { farsca: 'دل', okunuş: 'del', anlam: 'gönül/kalp' },
      { farsca: 'صورت', okunuş: 'surat', anlam: 'yüz' },
      { farsca: 'مو', okunuş: 'mu', anlam: 'saç' },
      { farsca: 'بینی', okunuş: 'bini', anlam: 'burun' },
    ]
  }
];
