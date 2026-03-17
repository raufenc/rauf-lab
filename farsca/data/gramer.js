/* ============================================================
   Gramer — Farsça dilbilgisi dersleri
   ============================================================ */
const GRAMER_DATA = [
  {
    baslik: 'Zamirler',
    emoji: '👤',
    aciklama: 'Farsça kişi zamirleri. Türkçeye çok benzer.',
    tablo: {
      basliklar: ['Kişi', 'Farsça', 'Okunuş', 'Türkçe'],
      satirlar: [
        ['1. tekil', 'من', 'men', 'ben'],
        ['2. tekil', 'تو', 'to', 'sen'],
        ['3. tekil', 'او', 'u', 'o'],
        ['1. çoğul', 'ما', 'mâ', 'biz'],
        ['2. çoğul', 'شما', 'şomâ', 'siz'],
        ['3. çoğul', 'آنها', 'ânhâ', 'onlar'],
      ]
    },
    notlar: [
      'شما (şomâ) aynı zamanda tekil saygılı "siz" olarak da kullanılır.',
      'او (u) hem erkek hem kadın için kullanılır, cinsiyet ayrımı yoktur.'
    ]
  },
  {
    baslik: 'Fiil Çekimi: Şimdiki Zaman',
    emoji: '🔄',
    aciklama: 'Farsçada şimdiki zaman می (mi-) ön eki ile yapılır. Örnek: رفتن (reften = gitmek)',
    tablo: {
      basliklar: ['Kişi', 'Çekim', 'Okunuş', 'Türkçe'],
      satirlar: [
        ['من', 'می‌روم', 'mi-revem', 'gidiyorum'],
        ['تو', 'می‌روی', 'mi-revi', 'gidiyorsun'],
        ['او', 'می‌رود', 'mi-reved', 'gidiyor'],
        ['ما', 'می‌رویم', 'mi-revim', 'gidiyoruz'],
        ['شما', 'می‌روید', 'mi-revid', 'gidiyorsunuz'],
        ['آنها', 'می‌روند', 'mi-revend', 'gidiyorlar'],
      ]
    },
    notlar: [
      'Kök: رو (rev-) — رفتن fiilinin şimdiki zaman kökü.',
      'Kalıp: می + kök + şahıs eki',
      'Şahıs ekleri: -م (-em), -ی (-i), -د (-ed), -یم (-im), -ید (-id), -ند (-end)'
    ]
  },
  {
    baslik: 'Fiil Çekimi: Geçmiş Zaman',
    emoji: '⏪',
    aciklama: 'Geçmiş zaman mastar kökünden yapılır. Örnek: رفتن (reften = gitmek), kök: رفت (reft-)',
    tablo: {
      basliklar: ['Kişi', 'Çekim', 'Okunuş', 'Türkçe'],
      satirlar: [
        ['من', 'رفتم', 'reftem', 'gittim'],
        ['تو', 'رفتی', 'refti', 'gittin'],
        ['او', 'رفت', 'reft', 'gitti'],
        ['ما', 'رفتیم', 'reftim', 'gittik'],
        ['شما', 'رفتید', 'reftid', 'gittiniz'],
        ['آنها', 'رفتند', 'reftend', 'gittiler'],
      ]
    },
    notlar: [
      'Geçmiş zaman kökü = mastardan -ن (en) atılır: رفتن → رفت',
      'Şahıs ekleri geçmişte: -م, -ی, -, -یم, -ید, -ند'
    ]
  },
  {
    baslik: 'Ezafe Yapısı',
    emoji: '🔗',
    aciklama: 'Farsçanın en önemli gramer özelliği. İki kelimeyi birbirine bağlayan görünmez -e sesi.',
    tablo: {
      basliklar: ['Yapı', 'Örnek', 'Okunuş', 'Anlam'],
      satirlar: [
        ['İsim-e Sıfat', 'کتابِ بزرگ', 'ketâb-e bozorg', 'büyük kitap'],
        ['İsim-e İsim', 'کتابِ من', 'ketâb-e men', 'benim kitabım'],
        ['İsim-e İsim-e Sıfat', 'درِ خانه‌یِ بزرگ', 'der-e hâne-ye bozorg', 'büyük evin kapısı'],
        ['ه ile biten', 'خانه‌یِ ما', 'hâne-ye mâ', 'bizim evimiz'],
      ]
    },
    notlar: [
      'Ezafe genelde yazılmaz, konuşurken duyulur.',
      'Sıfat isimden SONRA gelir (Türkçenin tersi): "güzel ev" → "ev-e güzel"',
      'Zincirleme ezafe yapılabilir: کتابِ بزرگِ من (ketâb-e bozorg-e men = benim büyük kitabım)'
    ]
  },
  {
    baslik: 'Çoğul Yapımı',
    emoji: '📚',
    aciklama: 'Farsçada çoğul yapmanın birkaç yolu vardır.',
    tablo: {
      basliklar: ['Ek', 'Tekil', 'Çoğul', 'Anlam'],
      satirlar: [
        ['-ها (-hâ)', 'کتاب', 'کتاب‌ها', 'kitaplar'],
        ['-ها (-hâ)', 'خانه', 'خانه‌ها', 'evler'],
        ['-ان (-ân)', 'مرد', 'مردان', 'erkekler (edebi)'],
        ['-ان (-ân)', 'زن', 'زنان', 'kadınlar (edebi)'],
        ['Arapça kırık çoğul', 'کتاب', 'کُتُب', 'kitaplar (edebi)'],
      ]
    },
    notlar: [
      '-ها en yaygın çoğul ekidir, hemen her kelimeye eklenir.',
      '-ان daha edebi/resmîdir, canlı varlıklar için tercih edilir.',
      'Arapça kökenli kelimelerde bazen kırık çoğul kullanılır.'
    ]
  },
  {
    baslik: 'Olumsuzluk',
    emoji: '🚫',
    aciklama: 'Farsçada fiilleri olumsuz yapmak için ن (ne-) ön eki kullanılır.',
    tablo: {
      basliklar: ['Olumlu', 'Olumsuz', 'Okunuş', 'Anlam'],
      satirlar: [
        ['می‌روم', 'نمی‌روم', 'ne-mi-revem', 'gitmiyorum'],
        ['رفتم', 'نرفتم', 'na-reftem', 'gitmedim'],
        ['هست', 'نیست', 'nist', 'değil/yok'],
        ['دارم', 'ندارم', 'na-dârem', 'sahip değilim'],
      ]
    },
    notlar: [
      'Şimdiki zaman: ن + می + kök + ek → نمی‌روم',
      'Geçmiş zaman: ن + kök + ek → نرفتم',
      '"Olmak" fiilinin olumsuzu: است → نیست (ast → nist)'
    ]
  },
  {
    baslik: 'Soru Cümlesi',
    emoji: '❓',
    aciklama: 'Farsçada soru cümlesi yapmak basittir.',
    tablo: {
      basliklar: ['Soru Kelimesi', 'Farsça', 'Okunuş', 'Anlam'],
      satirlar: [
        ['Ne?', 'چه / چی', 'çe / çi', 'ne?'],
        ['Kim?', 'کی', 'ki', 'kim?'],
        ['Nerede?', 'کجا', 'kojâ', 'nerede?'],
        ['Ne zaman?', 'کِی / چه وقت', 'key / çe vağt', 'ne zaman?'],
        ['Nasıl?', 'چطور / چگونه', 'çetor / çegune', 'nasıl?'],
        ['Neden?', 'چرا', 'çerâ', 'neden/niçin?'],
        ['Kaç?', 'چند', 'çend', 'kaç?'],
      ]
    },
    notlar: [
      'Evet/Hayır soruları sadece tonlama ile yapılır: می‌روی؟ (mi-revi? = gidiyor musun?)',
      'آیا (âyâ) ön eki ile de soru yapılabilir ama günlük konuşmada nadirdir.'
    ]
  },
  {
    baslik: 'İşaret Zamirleri',
    emoji: '👉',
    aciklama: 'Farsçada işaret zamirleri Türkçeye benzer.',
    tablo: {
      basliklar: ['Farsça', 'Okunuş', 'Türkçe'],
      satirlar: [
        ['این', 'in', 'bu'],
        ['آن', 'ân', 'o/şu'],
        ['اینجا', 'injâ', 'burası'],
        ['آنجا', 'ânjâ', 'orası'],
        ['اینها', 'inhâ', 'bunlar'],
        ['آنها', 'ânhâ', 'onlar/şunlar'],
      ]
    },
    notlar: []
  }
];
