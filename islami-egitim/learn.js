// =====================================================
// İslami Eğitim Programı — Öğrenme İçerik Kütüphanesi
// Ayet-i Kerîme, Hadis-i Şerif, Ders İçerikleri, Quiz
// =====================================================

'use strict';

// =====================================================
// AYET-İ KERÎME KÜTÜPHANESİ
// =====================================================

const AYET_LIBRARY = [
  // --- Akâid ---
  { id:'AY01', ref:'Bakara 2:255', alan:'Akâid',
    baslik:'Âyetü\'l-Kürsî',
    arapca:'اللَّهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    meal:'Allah Teâlâ\'dan başka ilah yoktur. O, Hayy ve Kayyûm\'dur. O\'nu ne bir uyuklama ne de uyku tutar.' },
  { id:'AY02', ref:'İhlâs 112:1-4', alan:'Akâid',
    baslik:'İhlâs Suresi',
    arapca:'قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
    meal:'De ki: O Allah birdir. Allah Samed\'dir (her şey O\'na muhtaç, O hiçbir şeye muhtaç değildir). Doğurmamıştır, doğurulmamıştır. Hiçbir şey O\'nun dengi değildir.' },
  { id:'AY03', ref:'Haşr 59:22-24', alan:'Akâid',
    baslik:'Allah Teâlâ\'nın Sıfatları',
    arapca:'هُوَ اللَّهُ الَّذِي لَا إِلٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمٰنُ الرَّحِيمُ',
    meal:'O, kendisinden başka ilah olmayan Allah Teâlâ\'dır. Görüleni de görülmeyeni de bilendir. O, Rahmân ve Rahîm\'dir.' },
  { id:'AY04', ref:'Âl-i İmrân 3:18', alan:'Akâid',
    baslik:'Tevhid Şehadeti',
    arapca:'شَهِدَ اللَّهُ أَنَّهُ لَا إِلٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ',
    meal:'Allah Teâlâ, melekler ve ilim sahipleri, O\'ndan başka ilah olmadığına şahitlik etmiştir.' },
  { id:'AY05', ref:'Bakara 2:285', alan:'Akâid',
    baslik:'İman Esasları',
    arapca:'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ',
    meal:'Peygamber, Rabbinden kendisine indirilene iman etti, mü\'minler de. Her biri Allah Teâlâ\'ya, meleklerine, kitaplarına ve peygamberlerine iman etti.' },

  // --- Kur'an ve Tecvid ---
  { id:'AY06', ref:'Bakara 2:2', alan:'Kur\'an ve Tecvid',
    baslik:'Kur\'an-ı Kerîm Rehberdir',
    arapca:'ذٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ',
    meal:'İşte o Kitap; onda şüphe yoktur. Müttakiler için bir hidayet rehberidir.' },
  { id:'AY07', ref:'İsrâ 17:9', alan:'Kur\'an ve Tecvid',
    baslik:'Kur\'an-ı Kerîm Doğruya İletir',
    arapca:'إِنَّ هٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',
    meal:'Şüphesiz bu Kur\'an-ı Kerîm, en doğru yola iletir.' },

  // --- Siyer ---
  { id:'AY08', ref:'Ahzâb 33:21', alan:'Siyer, Hadis ve Tarih',
    baslik:'Güzel Örnek',
    arapca:'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
    meal:'Andolsun ki sizin için, Allah Teâlâ\'yı ve ahireti uman ve Allah Teâlâ\'yı çokça anan kimseler için Resûlullah\'ta (sallallahu aleyhi ve sellem) güzel bir örnek vardır.' },
  { id:'AY09', ref:'Enbiyâ 21:107', alan:'Siyer, Hadis ve Tarih',
    baslik:'Âlemlere Rahmet',
    arapca:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',
    meal:'Biz seni ancak âlemlere rahmet olarak gönderdik.' },

  // --- İbadetler ---
  { id:'AY10', ref:'Bakara 2:43', alan:'İbadetler',
    baslik:'Namaz ve Zekât Emri',
    arapca:'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ',
    meal:'Namazı dosdoğru kılın, zekâtı verin ve rükû edenlerle birlikte rükû edin.' },
  { id:'AY11', ref:'Ankebût 29:45', alan:'İbadetler',
    baslik:'Namazın Kötülükten Alıkoyması',
    arapca:'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ',
    meal:'Şüphesiz namaz, hayâsızlıktan ve kötülükten alıkoyar.' },
  { id:'AY12', ref:'Bakara 2:183', alan:'İbadetler',
    baslik:'Orucun Farziyeti',
    arapca:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ',
    meal:'Ey iman edenler! Sizden öncekilere farz kılındığı gibi oruç size de farz kılındı.' },
  { id:'AY13', ref:'Âl-i İmrân 3:97', alan:'İbadetler',
    baslik:'Hac Farziyeti',
    arapca:'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
    meal:'Yoluna gücü yetenlerin Beytullah\'ı haccetmesi, Allah Teâlâ\'nın insanlar üzerinde bir hakkıdır.' },
  { id:'AY14', ref:'Tâhâ 20:14', alan:'İbadetler',
    baslik:'Namaz Emri',
    arapca:'إِنَّنِي أَنَا اللَّهُ لَا إِلٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
    meal:'Şüphesiz ben Allah\'ım. Benden başka ilah yoktur. Bana kulluk et ve beni anmak için namaz kıl.' },

  // --- Taharet ---
  { id:'AY15', ref:'Mâide 5:6', alan:'Taharet ve Günlük Fıkıh',
    baslik:'Abdest Ayeti',
    arapca:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ',
    meal:'Ey iman edenler! Namaza kalkacağınız zaman yüzlerinizi, dirseklere kadar ellerinizi yıkayın; başlarınızı meshedin ve topuklara kadar ayaklarınızı yıkayın.' },
  { id:'AY16', ref:'Bakara 2:222', alan:'Taharet ve Günlük Fıkıh',
    baslik:'Temizlik Sevgisi',
    arapca:'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ',
    meal:'Şüphesiz Allah Teâlâ çok tövbe edenleri sever ve çok temizlenenleri sever.' },

  // --- Helal-Haram ---
  { id:'AY17', ref:'Bakara 2:168', alan:'Helal-Haram',
    baslik:'Helal Yemek',
    arapca:'يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا',
    meal:'Ey insanlar! Yeryüzündeki şeylerden helal ve temiz olanlarını yiyin.' },
  { id:'AY18', ref:'Mâide 5:90', alan:'Helal-Haram',
    baslik:'İçki ve Kumar Yasağı',
    arapca:'إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ',
    meal:'Ey iman edenler! İçki, kumar, putlar ve fal okları ancak şeytanın işinden birer pisliktir. Bunlardan kaçının.' },

  // --- Ahlâk ---
  { id:'AY19', ref:'Kalem 68:4', alan:'Ahlâk',
    baslik:'Peygamber Efendimiz\'in Ahlakı',
    arapca:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
    meal:'Ve şüphesiz sen büyük bir ahlak üzeresin.' },
  { id:'AY20', ref:'Hucurât 49:12', alan:'Ahlâk',
    baslik:'Gıybet Yasağı',
    arapca:'وَلَا يَغْتَبْ بَعْضُكُمْ بَعْضًا أَيُحِبُّ أَحَدُكُمْ أَنْ يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا',
    meal:'Birbirinizin gıybetini yapmayın. Biriniz ölmüş kardeşinin etini yemekten hoşlanır mı?' },
  { id:'AY21', ref:'İsrâ 17:23-24', alan:'Ahlâk',
    baslik:'Anne-Babaya İyilik',
    arapca:'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
    meal:'Rabbin, yalnız kendisine kulluk etmenizi ve anne-babanıza iyilik etmenizi emretmiştir.' },
  { id:'AY22', ref:'Hucurât 49:11', alan:'Ahlâk',
    baslik:'Alay Etmemek',
    arapca:'لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ',
    meal:'Bir topluluk diğerini alaya almasın. Belki de onlar kendilerinden daha hayırlıdır.' },

  // --- Sabır ve Şükür ---
  { id:'AY23', ref:'Bakara 2:153', alan:'Ahlâk',
    baslik:'Sabır ve Namaz',
    arapca:'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ',
    meal:'Ey iman edenler! Sabır ve namazla Allah Teâlâ\'dan yardım isteyin. Şüphesiz Allah sabredenlerle beraberdir.' },
  { id:'AY24', ref:'İbrâhîm 14:7', alan:'Ahlâk',
    baslik:'Şükür Nimeti Artırır',
    arapca:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
    meal:'Andolsun, şükrederseniz elbette size nimetimi artırırım.' },

  // --- Kalp ve Nefis ---
  { id:'AY25', ref:'Ra\'d 13:28', alan:'Kalp ve Nefis Terbiyesi',
    baslik:'Kalplerin Huzuru',
    arapca:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    meal:'Biliniz ki kalpler ancak Allah Teâlâ\'yı zikretmekle huzur bulur.' },
  { id:'AY26', ref:'Şems 91:9-10', alan:'Kalp ve Nefis Terbiyesi',
    baslik:'Nefsin Arındırılması',
    arapca:'قَدْ أَفْلَحَ مَنْ زَكَّاهَا وَقَدْ خَابَ مَنْ دَسَّاهَا',
    meal:'Nefsini arındıran felaha ermiştir. Onu kirletip gömen ise ziyana uğramıştır.' },

  // --- Aile ---
  { id:'AY27', ref:'Rûm 30:21', alan:'Aile ve Muamelat',
    baslik:'Eşler Arası Sevgi',
    arapca:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا',
    meal:'O\'nun ayetlerinden biri de sizin için nefislerinizden eşler yaratması, onlara ısınmanız ve aranıza sevgi ve merhamet koymasıdır.' },

  // --- Dijital ---
  { id:'AY28', ref:'Hucurât 49:6', alan:'Dijital ve Çağdaş Hayat',
    baslik:'Bilgiyi Doğrulamak',
    arapca:'إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
    meal:'Ey iman edenler! Size bir fasık haber getirirse onu iyice araştırın.' },

  // --- Manevî Gelişim ---
  { id:'AY29', ref:'Zâriyât 51:56', alan:'Manevî Gelişim',
    baslik:'Yaratılışın Hikmeti',
    arapca:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ',
    meal:'Ben cinleri ve insanları ancak bana kulluk etsinler diye yarattım.' },
  { id:'AY30', ref:'Fecr 89:27-28', alan:'Manevî Gelişim',
    baslik:'Mutmain Nefis',
    arapca:'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً',
    meal:'Ey huzura kavuşmuş nefis! Sen O\'ndan razı, O da senden razı olarak Rabbine dön.' }
];


// =====================================================
// HADİS-İ ŞERİF KÜTÜPHANESİ
// =====================================================

const HADIS_LIBRARY = [
  { id:'HD01', alan:'Akâid',
    metin:'Ameller ancak niyetlere göredir. Herkese niyet ettiği şey vardır.',
    kaynak:'Sahih-i Buhârî, Bed\'ü\'l-Vahy 1',
    konu:'Niyetin önemi' },
  { id:'HD02', alan:'Ahlâk',
    metin:'Ben ancak güzel ahlakı tamamlamak için gönderildim.',
    kaynak:'Muvatta, Hüsnü\'l-Hulk 1',
    konu:'Peygamber Efendimiz\'in (sallallahu aleyhi ve sellem) gönderiliş gayesi' },
  { id:'HD03', alan:'Ahlâk',
    metin:'Müslüman, elinden ve dilinden diğer Müslümanların selamette olduğu kimsedir.',
    kaynak:'Sahih-i Buhârî, İman 4',
    konu:'Müslümanın tanımı' },
  { id:'HD04', alan:'Ahlâk',
    metin:'Kolaylaştırın, zorlaştırmayın; müjdeleyin, nefret ettirmeyin.',
    kaynak:'Sahih-i Buhârî, İlim 11',
    konu:'Kolaylaştırma prensibi' },
  { id:'HD05', alan:'Ahlâk',
    metin:'İnsanların en hayırlısı, insanlara en çok faydalı olanıdır.',
    kaynak:'Dârekutnî',
    konu:'Topluma faydalı olmanın değeri' },
  { id:'HD06', alan:'Ahlâk',
    metin:'Kardeşine tebessüm etmen sadakadır.',
    kaynak:'Sünen-i Tirmizî, Birr 36',
    konu:'Tebessümün değeri' },
  { id:'HD07', alan:'Ahlâk',
    metin:'Sizin en hayırlınız, ahlakı en güzel olanınızdır.',
    kaynak:'Sahih-i Buhârî, Edeb 38',
    konu:'Güzel ahlakın üstünlüğü' },
  { id:'HD08', alan:'Taharet ve Günlük Fıkıh',
    metin:'Temizlik imanın yarısıdır.',
    kaynak:'Sahih-i Müslim, Taharet 1',
    konu:'Temizliğin önemi' },
  { id:'HD09', alan:'İbadetler',
    metin:'Namaz dinin direğidir.',
    kaynak:'Sünen-i Tirmizî, İman 8',
    konu:'Namazın yeri' },
  { id:'HD10', alan:'İbadetler',
    metin:'Allah Teâlâ katında amellerin en sevileni, az da olsa devamlı olanıdır.',
    kaynak:'Sahih-i Buhârî, Rikâk 18',
    konu:'Devamlılığın önemi' },
  { id:'HD11', alan:'Aile ve Muamelat',
    metin:'Cennet annelerin ayakları altındadır.',
    kaynak:'Sünen-i Nesâî, Cihad 6',
    konu:'Anneye hürmetin değeri' },
  { id:'HD12', alan:'Ahlâk',
    metin:'Komşusu açken tok yatan bizden değildir.',
    kaynak:'Hâkim, Müstedrek',
    konu:'Komşu hakkı' },
  { id:'HD13', alan:'Helal-Haram',
    metin:'Helal olan şeyler belli, haram olan şeyler de bellidir. Bu ikisi arasında şüpheli şeyler vardır. Şüpheli şeylerden kaçınan dinini ve ırzını korumuştur.',
    kaynak:'Sahih-i Buhârî, İman 39; Sahih-i Müslim, Müsâkât 107',
    konu:'Helal-haram sınırı' },
  { id:'HD14', alan:'Kalp ve Nefis Terbiyesi',
    metin:'Dikkat edin! Vücutta bir et parçası vardır; o düzelirse bütün vücut düzelir, o bozulursa bütün vücut bozulur. Dikkat edin, o kalptir.',
    kaynak:'Sahih-i Buhârî, İman 39',
    konu:'Kalbin merkezi önemi' },
  { id:'HD15', alan:'Ahlâk',
    metin:'Sabır, acı bir olayın ilk anında gösterilendir.',
    kaynak:'Sahih-i Buhârî, Cenâiz 32',
    konu:'Sabrın hakikati' },
  { id:'HD16', alan:'İbadetler',
    metin:'Kim Ramazan orucunu iman ederek ve sevabını yalnız Allah Teâlâ\'dan bekleyerek tutarsa, geçmiş günahları bağışlanır.',
    kaynak:'Sahih-i Buhârî, Savm 6',
    konu:'Ramazan orucunun fazileti' },
  { id:'HD17', alan:'Manevî Gelişim',
    metin:'İhsan, Allah Teâlâ\'ya O\'nu görüyormuş gibi ibadet etmendir. Sen O\'nu görmesen de O seni görüyor.',
    kaynak:'Sahih-i Müslim, İman 1 (Cibril Hadis-i Şerifi)',
    konu:'İhsan makamı' },
  { id:'HD18', alan:'Dijital ve Çağdaş Hayat',
    metin:'Kişiye yalan olarak her duyduğunu söylemesi yeter.',
    kaynak:'Sahih-i Müslim, Mukaddime 5',
    konu:'Bilgiyi doğrulamak' },
  { id:'HD19', alan:'Kur\'an ve Tecvid',
    metin:'Sizin en hayırlınız Kur\'an-ı Kerîm\'i öğrenen ve öğretendir.',
    kaynak:'Sahih-i Buhârî, Fezâilü\'l-Kur\'ân 21',
    konu:'Kur\'an-ı Kerîm öğrenmenin fazileti' },
  { id:'HD20', alan:'Siyer, Hadis ve Tarih',
    metin:'Size iki şey bırakıyorum; bunlara sımsıkı sarıldığınız müddetçe asla sapıtmazsınız: Allah Teâlâ\'nın Kitabı ve Resûlü\'nün Sünneti.',
    kaynak:'Muvatta, Kader 3',
    konu:'Kur\'an-ı Kerîm ve Sünnet-i Seniyye\'ye bağlılık' }
];


// =====================================================
// ALAN → DELİL EŞLEŞTİRME
// =====================================================

const ALAN_DELIL_MAP = {
  'Akâid':                    { ayetler:['AY01','AY02','AY03','AY04','AY05'], hadisler:['HD01'] },
  'Kur\'an ve Tecvid':        { ayetler:['AY06','AY07'], hadisler:['HD19'] },
  'Siyer, Hadis ve Tarih':    { ayetler:['AY08','AY09'], hadisler:['HD20'] },
  'İbadetler':                { ayetler:['AY10','AY11','AY12','AY13','AY14'], hadisler:['HD09','HD10','HD16'] },
  'Taharet ve Günlük Fıkıh':  { ayetler:['AY15','AY16'], hadisler:['HD08'] },
  'Helal-Haram':              { ayetler:['AY17','AY18'], hadisler:['HD13'] },
  'Ahlâk':                    { ayetler:['AY19','AY20','AY21','AY22','AY23','AY24'], hadisler:['HD02','HD03','HD04','HD05','HD06','HD07','HD12','HD15'] },
  'Kalp ve Nefis Terbiyesi':  { ayetler:['AY25','AY26'], hadisler:['HD14'] },
  'Aile ve Muamelat':         { ayetler:['AY27','AY21'], hadisler:['HD11'] },
  'Dijital ve Çağdaş Hayat':  { ayetler:['AY28'], hadisler:['HD18'] },
  'Manevî Gelişim':           { ayetler:['AY29','AY30'], hadisler:['HD17'] }
};


// =====================================================
// DERS İÇERİKLERİ (Modül bazlı)
// =====================================================

const DERS_ICERIGI = {
  "Allah'a İman": {
    aciklama: "İmanın ilk ve en temel esası Allah Teâlâ'ya imandır. Bu, Allah Teâlâ'nın var olduğuna, bir ve tek olduğuna, eşi ve benzeri bulunmadığına kalpten inanmak demektir. Kâinattaki mükemmel düzen — göklerin, yerin, canlıların yaratılışı — Allah Teâlâ'nın varlığının en açık delillerindendir. Bir evin bile bir yapıcısı olduğunu kabul eden akıl, bu muhteşem kâinatın bir Yaratıcısı olduğunu da kabul eder. Tevhid inancı, yani Allah Teâlâ'nın birliğine iman, İslam'ın temelidir.",
    soru: "Kâinattaki düzen Allah Teâlâ'nın varlığına nasıl delil olur?",
    cevap: "Her düzenli eser bilinçli bir yapıcıya işaret eder. Göklerin, yerin, canlıların, mevsimlerin mükemmel düzeni rastgele olamaz; tüm bunlar bir Yaratıcı'nın — Allah Teâlâ'nın — varlığına ve kudretine delildir."
  },
  "Allah'ın Sıfatları": {
    aciklama: "Allah Teâlâ'nın zâtî ve sübûtî sıfatları vardır. Zâtî sıfatlar: Vücûd (var olmak), Kıdem (başlangıcı olmamak), Bekâ (sonu olmamak), Muhâlefetün li'l-havâdis (yarattıklarına benzememek), Kıyâm bi-nefsihî (varlığı kendinden olmak), Vahdâniyet (bir olmak). Sübûtî sıfatlar: Hayat, İlim, İrade, Kudret, Semi' (işitmek), Basar (görmek), Kelâm (konuşmak), Tekvîn (yaratmak). Bu sıfatlar Allah Teâlâ'yı tanımamızın temelidir.",
    soru: "Allah Teâlâ'nın 'Vahdâniyet' sıfatı ne anlama gelir?",
    cevap: "Vahdâniyet, Allah Teâlâ'nın zâtında, sıfatlarında ve fiillerinde bir ve tek olması, eşi ve ortağı bulunmaması demektir."
  },
  "Meleklere İman": {
    aciklama: "Melekler, Allah Teâlâ'nın nurdan yarattığı, günah işlemeyen, emredildikleri şeylerde Allah Teâlâ'ya isyan etmeyen varlıklardır. Cebrâil (aleyhisselam) vahiy getirmekle, Mikâil (aleyhisselam) rızık ve tabiat olaylarıyla, Azrâil (aleyhisselam) ruhları almakla, İsrâfil (aleyhisselam) sûra üflemekle görevlidir. Ayrıca Kirâmen Kâtibîn melekleri insanların amellerini yazar. Meleklere iman, imanın altı esasından biridir.",
    soru: "Cebrâil aleyhisselamın görevi nedir?",
    cevap: "Cebrâil aleyhisselam, Allah Teâlâ'dan peygamberlere vahiy getirmekle görevli melektir. Kur'an-ı Kerîm'i Peygamber Efendimiz'e (sallallahu aleyhi ve sellem) getiren odur."
  },
  "Kitaplara İman": {
    aciklama: "Allah Teâlâ, insanlara doğru yolu göstermek için peygamberler aracılığıyla kitaplar göndermiştir. Dört büyük kitap: Tevrat (Hz. Musa aleyhisselama), Zebur (Hz. Davud aleyhisselama), İncil (Hz. İsa aleyhisselama) ve Kur'an-ı Kerîm (Peygamber Efendimiz sallallahu aleyhi ve selleme) indirilmiştir. Kur'an-ı Kerîm, son ilahi kitap olup hiçbir değişikliğe uğramamıştır ve kıyamete kadar korunacaktır.",
    soru: "Kur'an-ı Kerîm'in diğer ilahi kitaplardan farkı nedir?",
    cevap: "Kur'an-ı Kerîm, son ilahi kitaptır. Allah Teâlâ tarafından korunmuştur, hiçbir değişikliğe uğramamıştır ve hükümleri kıyamete kadar geçerlidir."
  },
  "Peygamberlere İman": {
    aciklama: "Allah Teâlâ, insanlara doğru yolu göstermek için peygamberler göndermiştir. Peygamberlerin sıfatları: Sıdk (doğruluk), Emanet (güvenilirlik), Tebliğ (bildirmek), Fetânet (üstün akıl), İsmet (günahtan korunmuşluk). İlk peygamber Hz. Âdem (aleyhisselam), son peygamber Peygamber Efendimiz Hz. Muhammed Mustafa'dır (sallallahu aleyhi ve sellem). Kur'an-ı Kerîm'de isimleri zikredilen 25 peygamber vardır.",
    soru: "Peygamberlerin 'İsmet' sıfatı ne demektir?",
    cevap: "İsmet, peygamberlerin günah işlemekten korunmuş olmaları demektir. Allah Teâlâ onları her türlü günahtan muhafaza etmiştir."
  },
  "Ahirete İman": {
    aciklama: "Ahirete iman, ölümden sonra dirilmeye (ba's), hesap gününe, sırat köprüsüne, cennet ve cehenneme inanmaktır. Dünya hayatı geçicidir, asıl ve ebedi hayat ahirettir. Ahirete iman eden kişi, yaptığı her şeyin hesabını vereceğini bilir. Bu bilinç, insanı haramlardan sakındırır ve iyiliğe teşvik eder.",
    soru: "Ahirete iman, insanın günlük davranışlarını nasıl etkiler?",
    cevap: "Ahirete iman eden kişi, her amelinin kayıt altına alındığını ve hesabını vereceğini bilir. Bu bilinç onu kötülüklerden uzak tutar, iyiliğe ve hakka yöneltir."
  },
  "Kaza ve Kadere İman": {
    aciklama: "Kaza ve kadere iman, olmuş ve olacak her şeyin Allah Teâlâ'nın ilmi ve takdiriyle gerçekleştiğine inanmaktır. Kader, Allah Teâlâ'nın ezelden ebede her şeyi bilmesi ve takdir etmesidir. Kaza, bu takdirin zamanı geldiğinde gerçekleşmesidir. Kader, insanın iradesini ortadan kaldırmaz; Allah Teâlâ insana seçme hakkı (cüz'î irade) vermiştir.",
    soru: "Kadere iman etmek, insanı tembelliğe sevk eder mi?",
    cevap: "Hayır. İslam'da kadere iman, tedbir almayı ve çalışmayı gerektirmez demek değildir. Peygamber Efendimiz (sallallahu aleyhi ve sellem) tedbir almayı, çalışmayı, duayı emretmiştir. İnsan elinden geleni yapar, sonucu Allah Teâlâ'ya bırakır (tevekkül)."
  },
  "Namaz": {
    aciklama: "Namaz, İslam'ın beş şartından biri ve dinin direğidir. Beş vakit namaz her akıllı ve ergin Müslümana farzdır: Sabah (2 rekât farz), Öğle (4 rekât farz), İkindi (4 rekât farz), Akşam (3 rekât farz), Yatsı (4 rekât farz). Namaz, Kur'an-ı Kerîm'de defalarca emredilmiştir. Namaz kılan kişi, günde beş kez Rabbinin huzuruna durur, O'nu anar ve kötülüklerden uzak durur.",
    soru: "Namazın 'dinin direği' olarak nitelendirilmesinin hikmeti nedir?",
    cevap: "Namaz, kulun Rabbi ile en yakın bağını kuran ibadettir. Günde beş vakit tekrarlanarak mü'mini sürekli Allah Teâlâ'ya bağlar, kötülükten alıkoyar ve manevi disiplin kazandırır."
  },
  "Abdest ve Taharet": {
    aciklama: "Abdest, namaza hazırlığın ilk adımı ve bir ibadettir. Abdestin farzları: yüzü yıkamak, kolları dirseklerle birlikte yıkamak, başın dörtte birini meshetmek ve ayakları topuklarla birlikte yıkamaktır. Abdest, hem bedeni hem de manevi olarak temizler. Peygamber Efendimiz (sallallahu aleyhi ve sellem) temizliğin imanın yarısı olduğunu bildirmiştir.",
    soru: "Abdestin farzları nelerdir?",
    cevap: "Yüzü yıkamak, kolları dirseklerle birlikte yıkamak, başın dörtte birini meshetmek ve ayakları topuklarla birlikte yıkamak. Bu dört farz yerine getirilmeden abdest sahih olmaz."
  },
  "Oruç": {
    aciklama: "Oruç, imsak vaktinden iftar vaktine kadar yeme, içme ve oruca aykırı davranışlardan uzak durmaktır. Ramazan orucu, İslam'ın beş şartından biridir ve akıllı, ergin, sağlıklı her Müslümana farzdır. Oruç nefis terbiyesi sağlar, sabrı öğretir, fakirlerin halinden anlamayı sağlar ve takvayı artırır. Kur'an-ı Kerîm'de \"Oruç sizden öncekilere farz kılındığı gibi size de farz kılındı\" buyrulmuştur.",
    soru: "Orucun hikmetlerinden üçünü sayınız.",
    cevap: "1) Nefis terbiyesi ve özdenetim kazandırır. 2) Sabır ve iradeyi güçlendirir. 3) Yoksulların halinden anlama duygusu kazandırır. Ayrıca takvayı artırır ve günahların bağışlanmasına vesile olur."
  },
  "Zekât": {
    aciklama: "Zekât, belli bir nisap miktarına ulaşmış malın her yıl belirli oranını ihtiyaç sahiplerine vermektir. İslam'ın beş şartından biridir. Zekât malı temizler, bereketini artırır ve toplumda adaleti sağlar. Zekât verilecek kimseleri Kur'an-ı Kerîm belirlemiştir: fakirler, miskinler, zekât memurları, kalpleri İslam'a ısındırılacaklar, köleler, borçlular, Allah yolundakiler ve yolda kalmışlar.",
    soru: "Zekât neden hem ferdî hem toplumsal bir ibadettir?",
    cevap: "Ferdî boyutu: cimrilik hastalığından arındırır, malı bereketlendirir. Toplumsal boyutu: zengin ile yoksul arasındaki uçurumu kapatır, toplumda dayanışma ve adaleti sağlar."
  },
  "Hac": {
    aciklama: "Hac, maddi ve bedeni gücü yeten her Müslümanın ömründe bir kez Kâbe-i Muazzama'yı ziyaret ederek belirli ibadetleri yerine getirmesidir. Hac, İslam'ın beş şartının sonuncusudur. Dünyanın dört bir yanından gelen Müslümanlar aynı kıyafeti giyerek (ihram) eşitlik, kardeşlik ve tevazu içinde Allah Teâlâ'nın huzurunda toplanır. Hac, kişiyi günahlarından arındıran büyük bir ibadettir.",
    soru: "Hac ibadeti hangi İslami değerleri simgeler?",
    cevap: "Hac; eşitliği (herkes aynı ihramda), kardeşliği (tüm milletler bir arada), tevazuyu (dünyevi farkların silinmesi) ve Allah Teâlâ'ya tam teslimiyeti simgeler."
  },
  "Sıdk ve Dürüstlük": {
    aciklama: "Sıdk (doğruluk), İslam ahlakının temel taşlarından biridir. Sözde, fiilde ve niyette doğru olmak demektir. Peygamber Efendimiz (sallallahu aleyhi ve sellem) 'es-Sâdık' (doğru sözlü) ve 'el-Emîn' (güvenilir) lakaplarıyla anılırdı. Yalan söylemek münafıklık alametlerinden sayılmıştır. Doğruluk kişiyi hayra, hayır da cennete götürür.",
    soru: "Peygamber Efendimiz (sallallahu aleyhi ve sellem) neden 'es-Sâdık el-Emîn' olarak anılırdı?",
    cevap: "Çünkü O (sallallahu aleyhi ve sellem), peygamberliğinden önce de sonra da daima doğru sözlü (sâdık) ve güvenilir (emîn) idi. Müşrikler bile emanetlerini O'na teslim ederdi."
  },
  "Sabır": {
    aciklama: "Sabır, zorluklar karşısında isyan etmeyip Allah Teâlâ'nın takdirine rıza göstermek ve ibadette sebat etmektir. Sabır üç kısımdır: musibetlere karşı sabır, günahlardan sakınmada sabır, ibadetlere devamda sabır. Kur'an-ı Kerîm'de sabır 70'ten fazla yerde zikredilmiştir. Allah Teâlâ sabredenlerle beraberdir ve onlara hesapsız mükâfat verilecektir.",
    soru: "Sabrın üç çeşidini açıklayınız.",
    cevap: "1) Musibetlere sabır: hastalık, kayıp gibi sıkıntılarda isyan etmemek. 2) Günahlardan sabır: haramlara karşı direnmek. 3) İbadette sabır: ibadetlere istikrarla devam etmek."
  },
  "Şükür": {
    aciklama: "Şükür, Allah Teâlâ'nın verdiği nimetleri tanımak, O'na minnet duymak ve nimetleri O'nun rızasına uygun kullanmaktır. Şükrün üç boyutu vardır: kalple şükür (nimeti Allah Teâlâ'dan bilmek), dille şükür (O'na hamd etmek) ve azalarla şükür (nimetleri doğru yolda kullanmak). Allah Teâlâ \"Şükrederseniz elbette artırırım\" buyurmuştur.",
    soru: "Şükrün üç boyutunu günlük hayattan örneklerle açıklayınız.",
    cevap: "Kalple: Sağlığımızın Allah Teâlâ'dan olduğunu bilmek. Dille: Yemekten sonra 'Elhamdülillah' demek. Azalarla: Verilen sağlığı ibadette ve insanlara hizmette kullanmak."
  },
  "Emanet": {
    aciklama: "Emanet, kendisine teslim edilen şeyi koruyup zamanında geri vermek, sözünde durmak ve güvenilir olmaktır. Kur'an-ı Kerîm'de emaneti yerine getirmek emredilmiş, emanete ihanet ise münafıklık alameti sayılmıştır. Emanet sadece maddi eşya değildir; görev, sır, söz, çocukların eğitimi, toplumsal sorumluluklar da birer emanettir.",
    soru: "Emanet kavramının kapsamı nedir?",
    cevap: "Emanet yalnızca maddi eşyaları değil; sır saklamayı, verilen görevi yerine getirmeyi, sözünde durmayı, çocukların eğitimini ve toplumsal sorumlulukları da kapsar."
  },
  "Gıybet ve Dil Âfetleri": {
    aciklama: "Gıybet, bir kişinin yokluğunda onun hoşlanmayacağı şekilde konuşmaktır — söylenen doğru olsa bile. Kur'an-ı Kerîm gıybeti \"ölü kardeşinin etini yemek\" olarak nitelemiştir (Hucurât 49:12). Dil âfetleri arasında gıybet, nemîme (koğuculuk), iftira, yalan ve alay etmek sayılır. Dilin muhafazası imanın gereğidir.",
    soru: "Söylenen şey doğru olsa bile gıybet sayılır mı?",
    cevap: "Evet. Peygamber Efendimiz (sallallahu aleyhi ve sellem) şöyle buyurmuştur: 'Söylediğin şey onda varsa gıybet etmiş olursun, yoksa iftira etmiş olursun.' Her iki halde de büyük günahtır."
  },
  "Anne-Baba Hakkı": {
    aciklama: "Kur'an-ı Kerîm'de Allah Teâlâ'ya kulluk emrinden hemen sonra anne-babaya iyilik emri gelir (İsrâ 17:23). Bu, anne-baba hakkının ne kadar büyük olduğunu gösterir. Onlara 'öf' bile dememek, güzel söz söylemek, alçakgönüllü davranmak ve duacı olmak emredilmiştir. Cennetin annelerin ayakları altında olduğu bildirilmiştir.",
    soru: "Kur'an-ı Kerîm'de anne-baba hakkı neden Allah Teâlâ'ya kulluk emrinin hemen ardından zikredilmiştir?",
    cevap: "Bu sıralama, anne-baba hakkının Allah hakkından sonra en büyük hak olduğunu gösterir. Onlar insanın dünyaya gelmesine, büyümesine vesile olmuş; bu hak ancak ömür boyu saygı, sevgi ve iyilikle ödenebilir."
  },
  "Nefis Terbiyesi": {
    aciklama: "Nefis terbiyesi (tezkiye), insanın kötü huylardan arınıp güzel ahlakla donanmasıdır. Kur'an-ı Kerîm'de 'Nefsini arındıran felaha ermiştir' buyrulmuştur (Şems 91:9). Nefsin mertebeleri: emmâre (kötülüğü emreden), levvâme (kendini kınayan), mutmainne (huzura ermiş). İbadet, zikir, ilim ve muhasebe ile nefis terbiye edilir.",
    soru: "Nefsin 'emmâre' mertebesinden 'mutmainne' mertebesine nasıl yükselir?",
    cevap: "İbadetlere devam, günahlardan kaçınma, ilim öğrenme, günlük nefis muhasebesi yapma ve Allah Teâlâ'yı çokça zikretme ile nefis terbiye edilir ve daha yüksek mertebelere ulaşır."
  },
  "Günlük Zikir ve Dua": {
    aciklama: "Zikir, Allah Teâlâ'yı anmak, O'nu hatırlamaktır. Kur'an-ı Kerîm 'Kalpler ancak Allah'ın zikriyle huzur bulur' buyurmuştur (Ra'd 13:28). Sabah-akşam zikirleri, yemekten önce ve sonra dualar, eve girerken ve çıkarken edilen dualar, uyumadan önce okunan sureler mü'minin günlük hayatını ibadetle kuşatır. Düzenli zikir kalbi nurlandırır ve insanı gafletten korur.",
    soru: "Günlük zikir ve dua alışkanlığının insana ne faydası vardır?",
    cevap: "Günlük zikir kalbe huzur verir, gafletten korur, Allah Teâlâ ile bağı güçlendirir, günlük hayatı ibadete dönüştürür ve manevi disiplin kazandırır."
  },
  "Helal Gıda ve Beslenme": {
    aciklama: "İslam, helal ve temiz (tayyib) gıdalarla beslenmeyi emreder. Allah Teâlâ 'Ey insanlar, yeryüzündeki helal ve temiz şeylerden yiyin' buyurmuştur (Bakara 2:168). Haram gıdalar: ölü hayvan (meyte), kan, domuz eti, Allah Teâlâ'nın adı anılmadan kesilen hayvan, alkollü içecekler. Helal gıda ile beslenmek, duaların kabulünün şartlarındandır.",
    soru: "Helal gıda ile beslenmenin ibadet hayatına etkisi nedir?",
    cevap: "Haram lokma kalbi karartır ve duaların kabulüne engel olur. Helal ve temiz gıda ise bedeni sağlıklı, kalbi nurlu tutar ve ibadetlerin verimini artırır."
  },
  "Dijital Ahlak": {
    aciklama: "Dijital ortamda da İslam ahlakının kuralları geçerlidir. İnternette yalan haber yaymak, gıybet etmek, başkalarını aşağılamak, mahremiyeti ihlal etmek günahtır. Kur'an-ı Kerîm 'Size bir fasık haber getirirse onu araştırın' (Hucurât 49:6) buyurarak bilgi doğrulamasını emretmiştir. Zaman israfı, ekran bağımlılığı ve faydasız içerik tüketimi de nefis terbiyesiyle alakalıdır.",
    soru: "İnternet ortamında hangi İslami ahlak kuralları geçerlidir?",
    cevap: "Doğruluk (yalan haber yaymamak), gıybetten kaçınmak, başkalarının mahremiyetini korumak, bilgiyi doğrulamak, zamanı israf etmemek ve faydalı içerik üretmek/tüketmek."
  },
  "Tefekkür": {
    aciklama: "Tefekkür, Allah Teâlâ'nın yaratışı, nimetleri ve ayetleri üzerinde derin düşünmektir. Kur'an-ı Kerîm insanları defalarca tefekkür etmeye çağırmıştır. Göklerin, yerin, gece ile gündüzün değişmesinin arkasındaki hikmeti düşünmek ibadettir. Bir saatlik tefekkür, bir yıllık nafile ibadetten hayırlı sayılmıştır.",
    soru: "Tefekkür ibadeti nasıl yapılır?",
    cevap: "Doğadaki mükemmel yaratılışı, kendi bedenindeki harika düzeni, hayatın geçiciliğini, ahireti ve Allah Teâlâ'nın nimetlerini sessizce, derin düşünerek tefakkur edilir. Bu düşünce insanı Allah Teâlâ'ya yaklaştırır."
  },
  "Tevbe ve İstiğfar": {
    aciklama: "Tevbe, günahtan pişmanlık duyup Allah Teâlâ'ya yönelmektir. Tevbenin şartları: günahı bırakmak, pişman olmak ve bir daha yapmamaya azmetmektir. Kul hakkı varsa onu da iade etmek gerekir. Allah Teâlâ 'Çok tövbe edenleri sever' (Bakara 2:222) buyurmuştur. İstiğfar (Allah Teâlâ'dan bağışlanma dilemek) günlük ibadetlerimizden olmalıdır.",
    soru: "Sahih bir tevbenin şartları nelerdir?",
    cevap: "1) Günahı hemen bırakmak. 2) Yaptığına pişman olmak. 3) Bir daha yapmamaya kesin niyet etmek. 4) Kul hakkı varsa onu iade etmek veya helallik almak."
  },
  "Komşu Hakkı": {
    aciklama: "Peygamber Efendimiz (sallallahu aleyhi ve sellem) 'Cebrâil (aleyhisselam) bana komşu hakkını o kadar tavsiye etti ki, komşuyu komşuya mirasçı kılacak sandım' buyurmuştur. Komşuya iyilik etmek, onu gözetmek, zarar vermemek İslam'ın temel ahlak ilkelerindendir. Komşusu açken tok yatanı Peygamber Efendimiz (sallallahu aleyhi ve sellem) 'bizden değildir' diye uyarmıştır.",
    soru: "İslam'da komşu hakkının bu kadar önemli olmasının sebebi nedir?",
    cevap: "Komşu, kişiye en yakın toplumsal çevredir. Komşuların birbiriyle iyi ilişkisi toplumsal barış ve dayanışmanın temelidir. İslam toplumsal hayatı bireysel ibadetle iç içe kurmuştur."
  }
};


// =====================================================
// QUIZ SORU BANKASI
// =====================================================

const QUIZ_BANK = {
  'Akâid': [
    { soru:'Tevhid ne demektir?', secenekler:['Allah Teâlâ\'nın bir ve tek olduğuna iman','Ahirete iman','Meleklere iman','Kadere iman'], dogru:0,
      aciklama:'Tevhid, Allah Teâlâ\'nın zâtında, sıfatlarında ve fiillerinde bir ve tek olduğuna iman etmek demektir.' },
    { soru:'İmanın şartları kaçtır?', secenekler:['5','6','7','4'], dogru:1,
      aciklama:'İmanın 6 şartı: Allah Teâlâ\'ya, meleklerine, kitaplarına, peygamberlerine, ahiret gününe ve kaza-kadere iman.' },
    { soru:'Âyetü\'l-Kürsî hangi surede yer alır?', secenekler:['Bakara','Âl-i İmrân','Nisâ','Mâide'], dogru:0,
      aciklama:'Âyetü\'l-Kürsî, Bakara suresinin 255. Ayet-i Kerîmesidir.' },
    { soru:'İhlâs suresinin ana mesajı nedir?', secenekler:['Namaz emri','Allah Teâlâ\'nın birliği (Tevhid)','Oruç farziyeti','Zekât emri'], dogru:1,
      aciklama:'İhlâs suresi, Allah Teâlâ\'nın birliğini, her şeyden müstağni oluşunu ve benzersizliğini bildirir.' },
    { soru:'"Allahu Samed" ne demektir?', secenekler:['Allah çok bağışlayıcıdır','Allah her şeyden müstağnidir, her şey O\'na muhtaçtır','Allah çok merhametlidir','Allah her şeyi bilir'], dogru:1,
      aciklama:'Samed: hiçbir şeye muhtaç olmayan, her şeyin kendisine muhtaç olduğu Zât demektir.' },
    { soru:'Allah Teâlâ\'nın zâtî sıfatlarından biri hangisidir?', secenekler:['İlim','Kudret','Kıdem','İrade'], dogru:2,
      aciklama:'Kıdem (başlangıcı olmamak) zâtî sıfatlardandır. İlim, Kudret ve İrade ise sübûtî sıfatlardandır.' },
    { soru:'Vahiy meleğinin adı nedir?', secenekler:['Mikâil (aleyhisselam)','Cebrâil (aleyhisselam)','İsrâfil (aleyhisselam)','Azrâil (aleyhisselam)'], dogru:1,
      aciklama:'Cebrâil aleyhisselam, Allah Teâlâ\'dan peygamberlere vahiy getirmekle görevli melektir.' },
    { soru:'Kur\'an-ı Kerîm hangi peygambere indirilmiştir?', secenekler:['Hz. İsa (aleyhisselam)','Hz. Musa (aleyhisselam)','Peygamber Efendimiz (sallallahu aleyhi ve sellem)','Hz. Davud (aleyhisselam)'], dogru:2,
      aciklama:'Kur\'an-ı Kerîm, son ilahi kitap olarak Peygamber Efendimiz\'e (sallallahu aleyhi ve sellem) indirilmiştir.' },
    { soru:'Kadere iman ne demektir?', secenekler:['Her şeyin tesadüf olduğuna inanmak','Çalışmaya gerek olmadığına inanmak','Her şeyin Allah Teâlâ\'nın ilmi ve takdiriyle gerçekleştiğine inanmak','Kötü olayları kabul etmemek'], dogru:2,
      aciklama:'Kader, Allah Teâlâ\'nın ezelden her şeyi bilmesi ve takdir etmesidir. Bu, insanın iradesini ortadan kaldırmaz.' },
    { soru:'Peygamberlerin "İsmet" sıfatı ne anlama gelir?', secenekler:['Çok güçlü olmak','Günah işlemekten korunmuş olmak','Çok akıllı olmak','Güvenilir olmak'], dogru:1,
      aciklama:'İsmet, peygamberlerin Allah Teâlâ tarafından günah işlemekten korunmuş olmalarıdır.' },
  ],
  'İbadetler': [
    { soru:'Farz namazlar günde kaç vakittir?', secenekler:['3','4','5','7'], dogru:2,
      aciklama:'Sabah, Öğle, İkindi, Akşam ve Yatsı olmak üzere günde 5 vakit farz namaz vardır.' },
    { soru:'Abdestin farzları kaçtır?', secenekler:['3','4','5','6'], dogru:1,
      aciklama:'Abdestin 4 farzı: yüzü yıkamak, kolları dirseklerle yıkamak, başın dörtte birini meshetmek, ayakları topuklarla yıkamak.' },
    { soru:'Namaz dinin ne olarak nitelendirilmiştir?', secenekler:['Süsü','Direği','Kapısı','Çatısı'], dogru:1,
      aciklama:'Peygamber Efendimiz (sallallahu aleyhi ve sellem) "Namaz dinin direğidir" buyurmuştur.' },
    { soru:'Ramazan orucu kimlere farzdır?', secenekler:['Yalnızca yaşlılara','Akıllı, ergin, sağlıklı Müslümanlara','Yalnızca erkeklere','Zenginlere'], dogru:1,
      aciklama:'Oruç; akıllı, ergin (bâliğ), sağlıklı ve mukim olan her Müslümana farzdır.' },
    { soru:'Zekâtın farz olmasının şartlarından biri nedir?', secenekler:['Hac yapmış olmak','Nisap miktarına sahip olup üzerinden bir yıl geçmesi','Yaşlı olmak','Namaz kılıyor olmak'], dogru:1,
      aciklama:'Zekât, nisap miktarına ulaşan mal üzerinden bir yıl geçtikten sonra farz olur.' },
    { soru:'Hac ibadetinde ihram nedir?', secenekler:['Kâbe\'yi tavaf etmek','Özel kıyafet giyerek belirli yasaklara girmek','Şeytan taşlamak','Zemzem suyu içmek'], dogru:1,
      aciklama:'İhram, hac veya umre için niyet edip özel kıyafet giyerek belirli yasaklara girme halidir.' },
    { soru:'Namazı bozan durumlardan biri hangisidir?', secenekler:['Tesbih çekmek','Secde etmek','Namazda konuşmak','Rükû yapmak'], dogru:2,
      aciklama:'Namazda bilerek konuşmak, namazı bozan hallerden biridir.' },
    { soru:'Kur\'an-ı Kerîm\'de orucun farz kılındığını bildiren sure hangisidir?', secenekler:['Âl-i İmrân','Bakara','Mâide','Nisâ'], dogru:1,
      aciklama:'Bakara suresi 183. Ayet-i Kerîmede "Sizden öncekilere farz kılındığı gibi oruç size de farz kılındı" buyrulmuştur.' },
    { soru:'Vitir namazı kaç rekâttır?', secenekler:['2','3','4','1'], dogru:1,
      aciklama:'Vitir namazı 3 rekâttır ve yatsı namazının ardından kılınır.' },
    { soru:'Sehiv secdesi ne zaman yapılır?', secenekler:['Her namazın sonunda','Namaz içinde yanılma olduğunda','Cuma namazında','Bayram namazında'], dogru:1,
      aciklama:'Namazda yanılma (fazla veya eksik rekât, oturuşu unutma gibi) durumunda sehiv secdesi yapılır.' },
  ],
  'Ahlâk': [
    { soru:'"Sıdk" ne demektir?', secenekler:['Cömertlik','Dürüstlük, doğruluk','Sabır','Merhamet'], dogru:1,
      aciklama:'Sıdk, sözde, fiilde ve niyette doğru olmak demektir. İslam ahlakının temellerindendir.' },
    { soru:'Gıybet nedir?', secenekler:['Yüze karşı övmek','Kişinin yokluğunda onu hoşlanmayacağı şekilde anmak','Birini savunmak','İyilik yapmak'], dogru:1,
      aciklama:'Gıybet, söylenen doğru olsa bile kişinin yokluğunda onu hoşlanmayacağı şekilde konuşmaktır.' },
    { soru:'Kur\'an-ı Kerîm\'de Peygamber Efendimiz (sallallahu aleyhi ve sellem) nasıl nitelendirilmiştir?', secenekler:['Büyük bir ahlak üzeredir','Çok zengindir','Savaşçıdır','Yalnız yaşar'], dogru:0,
      aciklama:'"Ve şüphesiz sen büyük bir ahlak üzeresin" (Kalem 68:4).' },
    { soru:'Emanet yalnızca maddi eşya mıdır?', secenekler:['Evet, sadece maddi eşya','Hayır; sır, görev, söz, sorumluluk da emanettir','Yalnızca para','Sadece mülkler'], dogru:1,
      aciklama:'Emanet kavramı geniştir: sır, görev, söz, çocukların eğitimi, toplumsal sorumluluklar hep birer emanettir.' },
    { soru:'Sabrın kaç çeşidi vardır?', secenekler:['1','2','3','5'], dogru:2,
      aciklama:'Musibetlere sabır, günahlardan sabır ve ibadette sabır olmak üzere 3 çeşittir.' },
    { soru:'Şükrün üç boyutu nelerdir?', secenekler:['Dil, göz, kulak','Kalp, dil, azalar','Namaz, oruç, zekât','Yemek, içmek, uyumak'], dogru:1,
      aciklama:'Kalple şükür (nimeti Allah Teâlâ\'dan bilmek), dille şükür (hamd etmek), azalarla şükür (nimetleri doğru kullanmak).' },
    { soru:'Komşu hakkı hakkında Peygamber Efendimiz (sallallahu aleyhi ve sellem) ne buyurmuştur?', secenekler:['"Komşusu açken tok yatan bizden değildir"','"Komşunu tanıma"','"Komşu hakkı yoktur"','"Komşuyu hiç ziyaret etme"'], dogru:0,
      aciklama:'Bu Hadis-i Şerif, komşu hakkının ne kadar büyük olduğunu gösterir.' },
    { soru:'Kibir (büyüklenme) ne demektir?', secenekler:['Özgüvenli olmak','Kendini başkalarından üstün görmek','Çok çalışmak','Sessiz olmak'], dogru:1,
      aciklama:'Kibir, hakkı kabul etmemek ve insanları küçük görmek demektir. Kalpten tedavi edilmesi gereken bir hastalıktır.' },
    { soru:'Gıybetin haram olduğunu bildiren Ayet-i Kerîme hangi surededir?', secenekler:['Bakara','Hucurât','Yâsîn','Rahmân'], dogru:1,
      aciklama:'Hucurât suresi 12. Ayet-i Kerîmede gıybet yapmak "ölü kardeşin etini yemek" olarak nitelendirilmiştir.' },
    { soru:'Tevazu ne demektir?', secenekler:['Korkaklık','Alçakgönüllülük','Tembellik','Çekingenlik'], dogru:1,
      aciklama:'Tevazu, kibirsiz olmak, başkalarına karşı alçakgönüllü davranmak demektir. Peygamber Efendimiz\'in (sallallahu aleyhi ve sellem) en belirgin sıfatlarındandır.' },
  ],
  'Helal-Haram': [
    { soru:'Domuz eti neden haramdır?', secenekler:['Pahalı olduğu için','Kur\'an-ı Kerîm\'de açıkça yasaklandığı için','Tadı kötü olduğu için','Bulunamadığı için'], dogru:1,
      aciklama:'Domuz eti Kur\'an-ı Kerîm\'de birçok Ayet-i Kerîmede (Bakara 173, Mâide 3, En\'âm 145) açıkça haram kılınmıştır.' },
    { soru:'Faiz (riba) İslam\'da nasıl değerlendirilir?', secenekler:['Mekruhtur','Mübahtır','Kesinlikle haramdır','Sadece azı caizdir'], dogru:2,
      aciklama:'Faiz, Kur\'an-ı Kerîm\'de açıkça yasaklanmıştır (Bakara 2:275). Toplumsal adaletsizliğe yol açan büyük günahlardandır.' },
    { soru:'İçki İslam\'da nasıl nitelendirilmiştir?', secenekler:['İlaçtır','Faydalı içecektir','Şeytanın işinden bir pisliktir','Sadece fazlası haramdır'], dogru:2,
      aciklama:'"İçki, kumar, putlar ve fal okları şeytanın işinden birer pisliktir" (Mâide 5:90).' },
    { soru:'"Şüpheli şeylerden kaçınan dinini korumuş olur" sözü neye aittir?', secenekler:['Kur\'an-ı Kerîm Ayet-i Kerîmesi','Hadis-i Şerif','Sahabe sözü','İmam sözü'], dogru:1,
      aciklama:'Bu meşhur Hadis-i Şerif, Sahih-i Buhârî ve Sahih-i Müslim\'de geçmektedir.' },
    { soru:'Helal kesimin temel şartı nedir?', secenekler:['Hayvanın büyük olması','Besmele ile kesilmesi','Gece kesilmesi','Ateşle kesilmesi'], dogru:1,
      aciklama:'Hayvan, Allah Teâlâ\'nın adı anılarak (Besmele ile) kesilmelidir. Bu, helal kesimin olmazsa olmaz şartıdır.' },
    { soru:'İsraf neden yasaktır?', secenekler:['Parayı bitirdiği için','Allah Teâlâ israf edenleri sevmez','Komşular kıskanır','Devlet yasaklamıştır'], dogru:1,
      aciklama:'"Yiyin, için fakat israf etmeyin. Allah israf edenleri sevmez" (A\'râf 7:31).' },
    { soru:'Kumar hangi Ayet-i Kerîmede yasaklanmıştır?', secenekler:['Bakara 255','Mâide 90','İhlâs 1','Fâtiha 5'], dogru:1,
      aciklama:'Mâide suresi 90. Ayet-i Kerîmede kumar, içki, putlar ve fal oklarıyla birlikte yasaklanmıştır.' },
    { soru:'Haram kazanç hangi durumda caiz olur?', secenekler:['Hiçbir zaman','Zaruret halinde, hayatı sürdürecek kadar','Zengin olunca','İzin alınca'], dogru:1,
      aciklama:'İslam\'da zaruret (hayati tehlike) halinde, yalnızca hayatı sürdürecek miktarda haram ruhsat verilmiştir.' },
  ],
  'Kalp ve Nefis Terbiyesi': [
    { soru:'"Nefs-i Emmâre" ne demektir?', secenekler:['Huzurlu nefis','Daima kötülüğü emreden nefis','Kendini kınayan nefis','Teslim olan nefis'], dogru:1,
      aciklama:'Nefs-i Emmâre, insanı sürekli kötülüğe ve günaha sevk eden nefsin en alt mertebesidir.' },
    { soru:'Riya nedir?', secenekler:['Doğruluk','İbadeti başkalarına gösteriş için yapmak','Güzel ahlak','Tevazu'], dogru:1,
      aciklama:'Riya, ibadeti Allah Teâlâ rızası için değil, insanlara göstermek için yapmaktır. "Gizli şirk" olarak nitelendirilmiştir.' },
    { soru:'"Kalpler ancak ... ile huzur bulur" Ayet-i Kerîmesi neyle tamamlanır?', secenekler:['Para ile','Allah Teâlâ\'nın zikriyle','Uyku ile','Yemek ile'], dogru:1,
      aciklama:'"Biliniz ki kalpler ancak Allah Teâlâ\'yı zikretmekle huzur bulur" (Ra\'d 13:28).' },
    { soru:'İhlas ne demektir?', secenekler:['Çok namaz kılmak','İbadeti yalnızca Allah Teâlâ için yapmak','Oruç tutmak','Sadaka vermek'], dogru:1,
      aciklama:'İhlas, yapılan her ibadette ve amelde yalnızca Allah Teâlâ\'nın rızasını gözetmektir.' },
    { soru:'Tevekkül ne demektir?', secenekler:['Hiçbir şey yapmamak','Gerekli tedbiri alıp sonucu Allah Teâlâ\'ya bırakmak','Kaderci olmak','Başkalarına güvenmek'], dogru:1,
      aciklama:'Tevekkül, elden gelen çabayı gösterdikten sonra sonucu Allah Teâlâ\'ya teslim etmektir.' },
    { soru:'Tevbenin şartlarından biri değildir:', secenekler:['Günahı bırakmak','Pişman olmak','Bir daha yapmamaya azmetmek','Herkese ilan etmek'], dogru:3,
      aciklama:'Tevbe Allah Teâlâ ile kul arasındadır. Günahı herkese ilan etmek şart değildir; aksine günahı gizlemek faziletlidir.' },
    { soru:'Murâkabe ne demektir?', secenekler:['Başkalarını kontrol etmek','Allah Teâlâ\'nın her an gördüğünü hissetmek','Hesap sormak','Denetim yapmak'], dogru:1,
      aciklama:'Murâkabe, Allah Teâlâ\'nın her halimizi gördüğünü kalben hissederek yaşamaktır.' },
  ],
  'Kur\'an ve Tecvid': [
    { soru:'Kur\'an-ı Kerîm kaç suredir?', secenekler:['100','114','120','99'], dogru:1,
      aciklama:'Kur\'an-ı Kerîm 114 sureden oluşmaktadır.' },
    { soru:'Kur\'an-ı Kerîm\'in ilk inen Ayet-i Kerîmeleri hangi surededir?', secenekler:['Fâtiha','Bakara','Alak','İhlâs'], dogru:2,
      aciklama:'İlk inen Ayet-i Kerîmeler, Alak suresinin ilk 5 Ayet-i Kerîmesidir: "Oku! Yaratan Rabbinin adıyla oku!"' },
    { soru:'"Tecvid" ne demektir?', secenekler:['Hızlı okumak','Kur\'an-ı Kerîm\'i kurallarına uygun güzel okumak','Sessiz okumak','Ezberden okumak'], dogru:1,
      aciklama:'Tecvid, Kur\'an-ı Kerîm\'in harflerini doğru mahreçlerinden, kurallarına uygun şekilde okuma ilmidir.' },
    { soru:'En uzun sure hangisidir?', secenekler:['Âl-i İmrân','Nisâ','Bakara','Mâide'], dogru:2,
      aciklama:'Bakara suresi 286 Ayet-i Kerîme ile Kur\'an-ı Kerîm\'in en uzun suresidir.' },
    { soru:'"Hafız" kimdir?', secenekler:['Çok okuyan kişi','Kur\'an-ı Kerîm\'i tamamen ezberleyen kişi','İmam olan kişi','Müfessir'], dogru:1,
      aciklama:'Hafız, Kur\'an-ı Kerîm\'in tamamını ezberleyen kişidir. Bu çok faziletli bir ameldir.' },
  ],
  'Siyer, Hadis ve Tarih': [
    { soru:'Peygamber Efendimiz (sallallahu aleyhi ve sellem) nerede doğmuştur?', secenekler:['Medine-i Münevvere','Kudüs-i Şerîf','Mekke-i Mükerreme','Tâif'], dogru:2,
      aciklama:'Peygamber Efendimiz (sallallahu aleyhi ve sellem) 571 yılında Mekke-i Mükerreme\'de dünyayı teşrif etmiştir.' },
    { soru:'İlk inen vahiy nerede nazil olmuştur?', secenekler:['Kâbe-i Muazzama\'da','Hira Mağarası\'nda','Mescid-i Nebevî\'de','Medine\'de'], dogru:1,
      aciklama:'İlk vahiy, Peygamber Efendimiz\'e (sallallahu aleyhi ve sellem) Hira Mağarası\'nda, Cebrâil (aleyhisselam) vasıtasıyla nazil olmuştur.' },
    { soru:'Hicret ne zaman gerçekleşmiştir?', secenekler:['M. 610','M. 622','M. 630','M. 632'], dogru:1,
      aciklama:'Hicret, M. 622 yılında Mekke-i Mükerreme\'den Medine-i Münevvere\'ye yapılmıştır.' },
    { soru:'Kütüb-i Sitte nedir?', secenekler:['6 fıkıh kitabı','6 temel Hadis-i Şerif külliyatı','6 tefsir kitabı','6 siyer kitabı'], dogru:1,
      aciklama:'Kütüb-i Sitte: Buhârî, Müslim, Tirmizî, Ebû Dâvûd, Nesâî ve İbn Mâce\'nin Hadis-i Şerif külliyatlarıdır.' },
    { soru:'İlk iman eden kişi kimdir?', secenekler:['Hz. Ömer (radıyallahu anh)','Hz. Hatice (radıyallahu anha)','Hz. Ali (radıyallahu anh)','Hz. Ebu Bekir (radıyallahu anh)'], dogru:1,
      aciklama:'İlk iman eden kişi, Peygamber Efendimiz\'in (sallallahu aleyhi ve sellem) mübarek eşi Hz. Hatice validemizdir (radıyallahu anha).' },
  ],
  'Taharet ve Günlük Fıkıh': [
    { soru:'"Taharet" ne demektir?', secenekler:['Namaz kılmak','Maddi ve manevi temizlik','Oruç tutmak','Dua etmek'], dogru:1,
      aciklama:'Taharet, hem bedenî (hades ve necasetten) hem de manevî (günahlardan) temizlenme demektir.' },
    { soru:'Temizlik imanın yarısıdır" sözü kime aittir?', secenekler:['Bir âlime','Peygamber Efendimiz\'e (sallallahu aleyhi ve sellem)','Bir sahabeye','Bir müfessire'], dogru:1,
      aciklama:'Bu meşhur Hadis-i Şerif, Sahih-i Müslim\'de geçmektedir.' },
    { soru:'Teyemmüm ne zaman yapılır?', secenekler:['Her zaman','Su bulunamadığında veya kullanılamadığında','Yalnızca seferde','Cuma günü'], dogru:1,
      aciklama:'Su bulunmadığında veya sağlık sebebiyle kullanılamadığında temiz toprak ile teyemmüm yapılır.' },
    { soru:'Gusül hangi hallerde farzdır?', secenekler:['Her gün','Cünüplük, hayız ve nifas hallerinden sonra','Sadece Cuma günü','Yalnızca hac için'], dogru:1,
      aciklama:'Cünüplük, kadınlarda hayız ve nifas hallerinin sona ermesinin ardından gusül almak farzdır.' },
  ],
  'Aile ve Muamelat': [
    { soru:'Nikahın İslam\'daki yeri nedir?', secenekler:['Gelenek','İbadet sayılan bir akit','Zorunlu değil','Sadece yasal işlem'], dogru:1,
      aciklama:'Nikah, İslam\'da ibadet olarak kabul edilen, aileyi ve nesli koruyan bir akittir.' },
    { soru:'"Sıla-i Rahim" ne demektir?', secenekler:['Oruç tutmak','Akrabalarla ilişkiyi sürdürmek','Namaz kılmak','Zekat vermek'], dogru:1,
      aciklama:'Sıla-i rahim, akrabaları ziyaret etmek, onlarla bağı koparmamak ve iyilik yapmaktır.' },
    { soru:'Anne-babaya "öf" bile denmemesi hangi Ayet-i Kerîmede bildirilmiştir?', secenekler:['Bakara','İsrâ 17:23','Mâide','Hucurât'], dogru:1,
      aciklama:'İsrâ suresi 23. Ayet-i Kerîmede anne-babaya saygı emredilmiş, "öf" bile denmemesi buyrulmuştur.' },
  ],
  'Dijital ve Çağdaş Hayat': [
    { soru:'Sosyal medyada gıybet yapmanın hükmü nedir?', secenekler:['Serbesttir','Mekruhtur','Gerçek hayattaki gibi haramdır','Sadece yanlış bilgi haramdır'], dogru:2,
      aciklama:'Gıybet hangi ortamda yapılırsa yapılsın (yüz yüze, sosyal medya, mesaj) haramdır.' },
    { soru:'"Bilgiyi doğrulamak" konusundaki Ayet-i Kerîme hangi surededir?', secenekler:['Bakara','Hucurât 49:6','Nûr','Mâide'], dogru:1,
      aciklama:'"Size bir fasık haber getirirse onu iyice araştırın" (Hucurât 49:6).' },
    { soru:'Ekran bağımlılığı hangi İslami kavramla ilişkilidir?', secenekler:['Zekât','Nefis terbiyesi ve özdenetim','Hac','Oruç'], dogru:1,
      aciklama:'Nefis terbiyesi, arzu ve alışkanlıkları kontrol altına almayı gerektirir. Ekran bağımlılığı da bu kapsamdadır.' },
  ],
  'Manevî Gelişim': [
    { soru:'"İhsan" ne demektir?', secenekler:['Sadaka vermek','Allah Teâlâ\'yı görüyormuş gibi ibadet etmek','Oruç tutmak','Hac yapmak'], dogru:1,
      aciklama:'İhsan: "Sen O\'nu görmesen de O seni görüyor" şuuruyla ibadet etmektir (Cibril Hadis-i Şerifi).' },
    { soru:'Tefekkür ibadeti nedir?', secenekler:['Çok namaz kılmak','Allah Teâlâ\'nın yaratışı üzerinde derin düşünmek','Çok oruç tutmak','Sadaka vermek'], dogru:1,
      aciklama:'Tefekkür, kâinatı, kendi yaratılışını, ahireti ve Allah Teâlâ\'nın nimetlerini derinden düşünmektir.' },
    { soru:'"Tezkiye-i nefs" ne demektir?', secenekler:['Para biriktirmek','Nefsi kötü huylardan arındırıp güzel ahlakla donatmak','Spor yapmak','Çok uyumak'], dogru:1,
      aciklama:'"Nefsini arındıran felaha ermiştir" (Şems 91:9). Tezkiye, manevi gelişimin temelidir.' },
    { soru:'Zikrin temel anlamı nedir?', secenekler:['Kitap okumak','Allah Teâlâ\'yı hatırlamak ve anmak','Yolculuk yapmak','Uyumak'], dogru:1,
      aciklama:'Zikir, Allah Teâlâ\'yı kalben ve dilen anmak, O\'ndan gafil olmamak demektir.' },
  ]
};


// =====================================================
// YARDIMCI FONKSİYONLAR
// =====================================================

/** Alan adından rastgele bir Ayet getir */
function getRandomAyet(alan) {
  const map = ALAN_DELIL_MAP[alan];
  if (!map || !map.ayetler.length) return AYET_LIBRARY[0];
  const id = map.ayetler[Math.floor(Math.random() * map.ayetler.length)];
  return AYET_LIBRARY.find(a => a.id === id) || AYET_LIBRARY[0];
}

/** Alan adından rastgele bir Hadis getir */
function getRandomHadis(alan) {
  const map = ALAN_DELIL_MAP[alan];
  if (!map || !map.hadisler.length) return HADIS_LIBRARY[0];
  const id = map.hadisler[Math.floor(Math.random() * map.hadisler.length)];
  return HADIS_LIBRARY.find(h => h.id === id) || HADIS_LIBRARY[0];
}

/** Kazanım için ders içeriği bul (Modül veya Alt_Alan üzerinden) */
function getDersIcerigi(kazanim) {
  // Önce Modül adıyla dene
  if (kazanim.Modul && DERS_ICERIGI[kazanim.Modul]) return DERS_ICERIGI[kazanim.Modul];
  // Alt alan ile dene
  if (kazanim.Alt_Alan && DERS_ICERIGI[kazanim.Alt_Alan]) return DERS_ICERIGI[kazanim.Alt_Alan];
  // Bulunamazsa genel bir ders oluştur
  return {
    aciklama: kazanim.Kazanim + '. Bu kazanım, ' + kazanim.Ana_Alan + ' alanının ' + (kazanim.Alt_Alan || '') + ' konusunu kapsamaktadır. ' + (kazanim.Gunluk_Hayat_Transferi || ''),
    soru: 'Bu kazanımın günlük hayata nasıl aktarılabileceğini kendi cümlelerinizle açıklayınız.',
    cevap: kazanim.Gunluk_Hayat_Transferi || 'Öğrendiklerinizi günlük hayatınızda uygulamaya çalışınız.'
  };
}

/** Çekirdek kazanımları filtrele ve sırala */
function getCekirdekKazanimlar() {
  return KAZANIM_DATA
    .filter(k => k.Oncelik === 'Çekirdek')
    .sort((a, b) => {
      const fazA = parseInt((a.Program_Fazi || '').match(/\d/) || 9);
      const fazB = parseInt((b.Program_Fazi || '').match(/\d/) || 9);
      if (fazA !== fazB) return fazA - fazB;
      return a.ID.localeCompare(b.ID);
    });
}

/** Quiz için belirli alandan veya rastgele N soru getir */
function getQuizSorulari(alan, adet) {
  adet = adet || 10;
  let havuz;
  if (alan && QUIZ_BANK[alan]) {
    havuz = [...QUIZ_BANK[alan]];
  } else {
    // Tüm alanlardan karışık
    havuz = [];
    Object.values(QUIZ_BANK).forEach(arr => havuz.push(...arr));
  }
  // Shuffle
  for (let i = havuz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [havuz[i], havuz[j]] = [havuz[j], havuz[i]];
  }
  return havuz.slice(0, adet);
}
