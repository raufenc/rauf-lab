/* ============================================================
   Metinler — Okuma parçaları (seviyeye göre)
   ============================================================ */
const METIN_DATA = [
  {
    baslik: 'Ailem',
    seviye: 'Başlangıç',
    emoji: '👨‍👩‍👧',
    metin: 'خانواده‌ی من کوچک است. پدرم معلم است و مادرم دکتر. من یک برادر دارم. اسم او حسین است. ما در تهران زندگی می‌کنیم. خانه‌ی ما بزرگ نیست ولی قشنگ است.',
    okunuş: 'Hânevâde-ye men kuçek ast. Pedrem mo\'allem ast va mâderem doktor. Men yek berâder dârem. Esm-e u Hoseyn ast. Mâ der Tehrân zendegi mi-konim. Hâne-ye mâ bozorg nist veli ğeşeng ast.',
    anlam: 'Ailem küçüktür. Babam öğretmen ve annem doktordur. Bir erkek kardeşim var. Adı Hüseyin. Biz Tahran\'da yaşıyoruz. Evimiz büyük değil ama güzeldir.',
    kelimeler: [
      { kelime: 'خانواده', anlam: 'aile' },
      { kelime: 'معلم', anlam: 'öğretmen' },
      { kelime: 'زندگی', anlam: 'yaşam/hayat' },
      { kelime: 'قشنگ', anlam: 'güzel' },
    ]
  },
  {
    baslik: 'Sabah Rutini',
    seviye: 'Başlangıç',
    emoji: '🌅',
    metin: 'هر روز صبح ساعت شش بیدار می‌شوم. صبحانه نان و پنیر و چای می‌خورم. بعد از صبحانه به مدرسه می‌روم. مدرسه نزدیک خانه است. پیاده می‌روم.',
    okunuş: 'Her ruz sobh sâ\'at-e şeş bidâr mi-şevem. Sobhâne nân va penir va çây mi-horem. Ba\'d ez sobhâne be medrese mi-revem. Medrese nezdik-e hâne ast. Piyâde mi-revem.',
    anlam: 'Her gün sabah saat altıda uyanıyorum. Kahvaltıda ekmek, peynir ve çay yiyorum. Kahvaltıdan sonra okula gidiyorum. Okul eve yakın. Yürüyerek gidiyorum.',
    kelimeler: [
      { kelime: 'بیدار', anlam: 'uyanık' },
      { kelime: 'صبحانه', anlam: 'kahvaltı' },
      { kelime: 'پنیر', anlam: 'peynir' },
      { kelime: 'پیاده', anlam: 'yaya/yürüyerek' },
    ]
  },
  {
    baslik: 'Nevruz Bayramı',
    seviye: 'Orta',
    emoji: '🌸',
    metin: 'نوروز مهم‌ترین جشن ایرانی است. نوروز اول فروردین است، یعنی اول بهار. مردم قبل از نوروز خانه را تمیز می‌کنند. سفره‌ی هفت‌سین می‌چینند. هفت چیز که با حرف سین شروع می‌شود روی سفره می‌گذارند. خانواده‌ها دور هم جمع می‌شوند و عید را جشن می‌گیرند.',
    okunuş: 'Novruz mohemtarin-e ceşn-e irâni ast. Novruz avval-e ferverdin ast, ya\'ni avval-e behâr. Mordom ğabl ez Novruz hâne râ temiz mi-konend. Sofre-ye heft-sin mi-çinend. Heft çiz ke bâ harf-e sin şoru\' mi-şeved ruy-e sofre mi-gozârend. Hânevâde-hâ dor-e hem cem\' mi-şevend va eyd râ ceşn mi-girend.',
    anlam: 'Nevruz en önemli İran bayramıdır. Nevruz 1 Ferverdin\'dedir, yani baharın başı. İnsanlar Nevruz\'dan önce evi temizlerler. Heft-sin sofrası kurarlar. "Sin" harfiyle başlayan yedi şeyi sofraya koyarlar. Aileler bir araya gelir ve bayramı kutlarlar.',
    kelimeler: [
      { kelime: 'جشن', anlam: 'bayram/kutlama' },
      { kelime: 'بهار', anlam: 'bahar' },
      { kelime: 'تمیز', anlam: 'temiz' },
      { kelime: 'سفره', anlam: 'sofra' },
      { kelime: 'عید', anlam: 'bayram' },
    ]
  },
  {
    baslik: 'İran Mutfağı',
    seviye: 'Orta',
    emoji: '🍛',
    metin: 'غذای ایرانی خیلی خوشمزه و متنوع است. برنج مهم‌ترین غذای ایرانی‌ها است. چلوکباب معروف‌ترین غذا است. قورمه سبزی و قیمه هم خیلی محبوب هستند. ایرانی‌ها چای خیلی دوست دارند و بعد از هر غذا چای می‌نوشند. نان هم بخش مهمی از غذای روزانه است.',
    okunuş: 'Ğazâ-ye irâni heyli hoşmeze va motenabbe\' ast. Berenj mohemtarin-e ğazâ-ye irâni-hâ ast. Çelov-kebâb ma\'ruftarin-e ğazâ ast. Ğorme-sabzi va ğeyme hem heyli mahbub hestend. İrâni-hâ çây heyli dust dârend va ba\'d ez her ğazâ çây mi-nuşend. Nân hem bahş-e mohemmi ez ğazâ-ye ruzâne ast.',
    anlam: 'İran yemekleri çok lezzetli ve çeşitlidir. Pirinç İranlıların en önemli yemeğidir. Çelov kebap en meşhur yemektir. Gorme sabzi ve kıyma da çok sevilir. İranlılar çayı çok severler ve her yemekten sonra çay içerler. Ekmek de günlük yemeğin önemli bir parçasıdır.',
    kelimeler: [
      { kelime: 'خوشمزه', anlam: 'lezzetli' },
      { kelime: 'معروف', anlam: 'meşhur' },
      { kelime: 'محبوب', anlam: 'sevilen/popüler' },
      { kelime: 'روزانه', anlam: 'günlük' },
    ]
  },
  {
    baslik: 'Şiraz Şehri',
    seviye: 'İleri',
    emoji: '🕌',
    metin: 'شیراز یکی از زیباترین شهرهای ایران است. این شهر به شهر شعر و گل معروف است. حافظ و سعدی، دو شاعر بزرگ ایرانی، در شیراز زندگی کرده‌اند. آرامگاه حافظ و باغ ارم از مکان‌های دیدنی شیراز هستند. مردم شیراز به مهمان‌نوازی و خوش‌رویی شهرت دارند.',
    okunuş: 'Şirâz yeki ez zibâtarin-e şehrhâ-ye İrân ast. İn şehr be şehr-e şe\'r va gol ma\'ruf ast. Hâfez va Sa\'di, do şâ\'er-e bozorg-e irâni, der Şirâz zendegi kerde-end. Ârâmgâh-e Hâfez va Bâğ-e Erem ez mekânhâ-ye dideni-ye Şirâz hestend. Mordom-e Şirâz be mehmân-navâzi va hoş-ruyi şohret dârend.',
    anlam: 'Şiraz, İran\'ın en güzel şehirlerinden biridir. Bu şehir şiir ve gül şehri olarak bilinir. Hafız ve Sadi, iki büyük İranlı şair, Şiraz\'da yaşamışlardır. Hafız\'ın türbesi ve Erem Bahçesi, Şiraz\'ın görülecek yerlerindendir. Şiraz halkı misafirperverliği ve güler yüzlülüğü ile ünlüdür.',
    kelimeler: [
      { kelime: 'شاعر', anlam: 'şair' },
      { kelime: 'آرامگاه', anlam: 'türbe/anıt mezar' },
      { kelime: 'دیدنی', anlam: 'görülmeye değer' },
      { kelime: 'مهمان‌نوازی', anlam: 'misafirperverlik' },
    ]
  }
];
