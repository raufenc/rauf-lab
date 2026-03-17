/* ============================================================
   Diyaloglar — Günlük konuşma senaryoları
   ============================================================ */
const DIYALOG_DATA = [
  {
    baslik: 'Tanışma',
    emoji: '🤝',
    seviye: 'Başlangıç',
    satirlar: [
      { konusmaci: 'A', isim: 'Ali', farsca: 'سلام! اسم من علی است.', okunuş: 'Selâm! Esm-e men Ali ast.', anlam: 'Merhaba! Benim adım Ali.' },
      { konusmaci: 'B', isim: 'Meryem', farsca: 'سلام! من مریم هستم. از آشنایی شما خوشحالم.', okunuş: 'Selâm! Men Meryem hestem. Ez âşenâyi-ye şomâ hoşhâlem.', anlam: 'Merhaba! Ben Meryem. Tanıştığıma memnun oldum.' },
      { konusmaci: 'A', isim: 'Ali', farsca: 'شما اهل کجا هستید؟', okunuş: 'Şomâ ehl-e kojâ hestid?', anlam: 'Nerelisiniz?' },
      { konusmaci: 'B', isim: 'Meryem', farsca: 'من اهل ترکیه هستم. شما چطور؟', okunuş: 'Men ehl-e Torkiye hestem. Şomâ çetor?', anlam: 'Türkiyeliyim. Ya siz?' },
      { konusmaci: 'A', isim: 'Ali', farsca: 'من ایرانی هستم، از تهران.', okunuş: 'Men irâni hestem, ez Tehrân.', anlam: 'İranlıyım, Tahran\'dan.' },
    ]
  },
  {
    baslik: 'Restoranda',
    emoji: '🍽️',
    seviye: 'Başlangıç',
    satirlar: [
      { konusmaci: 'A', isim: 'Garson', farsca: 'سلام، خوش آمدید! چند نفر هستید؟', okunuş: 'Selâm, hoş âmedid! Çend nefer hestid?', anlam: 'Merhaba, hoş geldiniz! Kaç kişisiniz?' },
      { konusmaci: 'B', isim: 'Müşteri', farsca: 'سلام، دو نفر. یک میز لطفاً.', okunuş: 'Selâm, do nefer. Yek miz lotfen.', anlam: 'Merhaba, iki kişi. Bir masa lütfen.' },
      { konusmaci: 'A', isim: 'Garson', farsca: 'بفرمایید. منوی غذا.', okunuş: 'Befermâyid. Menuy-e ğazâ.', anlam: 'Buyurun. Yemek menüsü.' },
      { konusmaci: 'B', isim: 'Müşteri', farsca: 'چلوکباب و یک لیوان دوغ لطفاً.', okunuş: 'Çelov-kebâb va yek livân-e duğ lotfen.', anlam: 'Çelov kebap ve bir bardak ayran lütfen.' },
      { konusmaci: 'A', isim: 'Garson', farsca: 'چشم، الآن می‌آورم.', okunuş: 'Çeşm, el-ân mi-âverem.', anlam: 'Baş üstüne, hemen getiriyorum.' },
      { konusmaci: 'B', isim: 'Müşteri', farsca: 'ممنون. حساب لطفاً.', okunuş: 'Memnun. Hesâb lotfen.', anlam: 'Teşekkürler. Hesap lütfen.' },
    ]
  },
  {
    baslik: 'Yol Sorma',
    emoji: '🗺️',
    seviye: 'Başlangıç',
    satirlar: [
      { konusmaci: 'A', isim: 'Turist', farsca: 'ببخشید، مسجد جامع کجاست؟', okunuş: 'Be-bahşid, mesjed-e jâme\' kojâst?', anlam: 'Affedersiniz, ulu cami nerede?' },
      { konusmaci: 'B', isim: 'Yolcu', farsca: 'مستقیم بروید، سر چهارراه بپیچید به راست.', okunuş: 'Mostakim berevid, sar-e çehârrâh bepiçid be râst.', anlam: 'Düz gidin, kavşakta sağa dönün.' },
      { konusmaci: 'A', isim: 'Turist', farsca: 'خیلی دور است؟', okunuş: 'Heyli dur ast?', anlam: 'Çok uzak mı?' },
      { konusmaci: 'B', isim: 'Yolcu', farsca: 'نه، پنج دقیقه پیاده.', okunuş: 'Na, penj dağiğe piyâde.', anlam: 'Hayır, yürüyerek beş dakika.' },
      { konusmaci: 'A', isim: 'Turist', farsca: 'خیلی ممنون!', okunuş: 'Heyli memnun!', anlam: 'Çok teşekkürler!' },
    ]
  },
  {
    baslik: 'Alışveriş',
    emoji: '🛍️',
    seviye: 'Orta',
    satirlar: [
      { konusmaci: 'A', isim: 'Müşteri', farsca: 'سلام، قیمت این فرش چقدر است؟', okunuş: 'Selâm, ğeymet-e in ferş çeğedr ast?', anlam: 'Merhaba, bu halının fiyatı ne kadar?' },
      { konusmaci: 'B', isim: 'Satıcı', farsca: 'این فرش دستبافت است. پانصد هزار تومان.', okunuş: 'İn ferş dest-bâft ast. Pânsad hezâr tumân.', anlam: 'Bu el dokuması halı. Beş yüz bin tümen.' },
      { konusmaci: 'A', isim: 'Müşteri', farsca: 'خیلی گران است! کمتر نمی‌شود؟', okunuş: 'Heyli gerân ast! Kemter ne-mi-şeved?', anlam: 'Çok pahalı! Daha az olmaz mı?' },
      { konusmaci: 'B', isim: 'Satıcı', farsca: 'برای شما چهارصد و پنجاه هزار.', okunuş: 'Berây-e şomâ çehârsad-o pencâh hezâr.', anlam: 'Sizin için dört yüz elli bin.' },
      { konusmaci: 'A', isim: 'Müşteri', farsca: 'قبول است. کارت می‌زنم.', okunuş: 'Ğabul ast. Kârt mi-zenem.', anlam: 'Kabul. Kartla ödeyeceğim.' },
    ]
  },
  {
    baslik: 'Doktorda',
    emoji: '🏥',
    seviye: 'Orta',
    satirlar: [
      { konusmaci: 'A', isim: 'Doktor', farsca: 'سلام، مشکل شما چیست؟', okunuş: 'Selâm, moşkel-e şomâ çist?', anlam: 'Merhaba, sorununuz nedir?' },
      { konusmaci: 'B', isim: 'Hasta', farsca: 'سرم درد می‌کند و تب دارم.', okunuş: 'Serem derd mi-koned va tab dârem.', anlam: 'Başım ağrıyor ve ateşim var.' },
      { konusmaci: 'A', isim: 'Doktor', farsca: 'از کِی این‌طوری هستید؟', okunuş: 'Ez key in-tori hestid?', anlam: 'Ne zamandan beri böylesiniz?' },
      { konusmaci: 'B', isim: 'Hasta', farsca: 'از دیروز. گلویم هم درد می‌کند.', okunuş: 'Ez diruz. Geluyem hem derd mi-koned.', anlam: 'Dünden beri. Boğazım da ağrıyor.' },
      { konusmaci: 'A', isim: 'Doktor', farsca: 'سرماخوردگی است. این دارو را بخورید.', okunuş: 'Sarmâ-hordegi ast. İn dâru râ bohorid.', anlam: 'Soğuk algınlığı. Bu ilacı için.' },
    ]
  },
  {
    baslik: 'Havaalanında',
    emoji: '✈️',
    seviye: 'Orta',
    satirlar: [
      { konusmaci: 'A', isim: 'Yolcu', farsca: 'سلام، پرواز به استانبول ساعت چند است؟', okunuş: 'Selâm, pervâz be Estânbul sâ\'at-e çend ast?', anlam: 'Merhaba, İstanbul uçuşu saat kaçta?' },
      { konusmaci: 'B', isim: 'Görevli', farsca: 'ساعت سه بعد از ظهر. گیت شماره هشت.', okunuş: 'Sâ\'at-e se ba\'d ez zohr. Geyt-e şomâre-ye heşt.', anlam: 'Öğleden sonra saat üçte. Kapı numarası sekiz.' },
      { konusmaci: 'A', isim: 'Yolcu', farsca: 'پاسپورتم اینجاست. چمدانم را کجا بگذارم؟', okunuş: 'Pâsportem injâst. Çemedânem râ kojâ begozârem?', anlam: 'Pasaportum burada. Bavulumu nereye koyayım?' },
      { konusmaci: 'B', isim: 'Görevli', farsca: 'چمدان را روی نوار بگذارید. خوش سفر!', okunuş: 'Çemedân râ ruy-e navâr begozârid. Hoş safar!', anlam: 'Bavulu banda koyun. İyi yolculuklar!' },
    ]
  }
];
