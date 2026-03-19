export const config = { runtime: 'edge' };

const MADDE_LISTESI = `1/1: Muhammed aleyhisselâma uymak, se'âdete kavuşdurur
1/2: Allahü teâlâya itâ'at için, Resûlüne itâ'at lâzımdır
1/3: Müslimân olmak için, ne yapmalı? Kelime-i şehâdet
1/4: Ehl-i sünnet âlimleri
1/5: Ehl-i sünnetin reîsi, imâm-ı a'zam Ebû Hanîfedir
1/6: İmâm-ı a'zamın büyüklüğü. (Dürr-ül-muhtâr)ın önsözünden ve (Hayrât-ül-hisân)dan alınmışdır
1/7: İslâm âlimlerinin kitâbları
1/8: Uydurma tefsîr yazan kâfir olur
1/9: Kur'ân tercemelerinden hangisine güvenileceği
1/10: Din hırsızları
1/11: Îmânın gitmesine sebeb olan şeyler
1/12: Kalbde îmân bulunmasına alâmet, ahkâm-ı islâmiyyeye uymakdır
1/13: Allahü teâlânın ni'metleri, dünyâda herkesedir
1/14: Âhıretde kâfire merhamet yokdur
1/15: Muhabbetin alâmetleri
1/16: Muhammed "aleyhisselâm", Allahü teâlânın sevgilisidir
1/17: Peygamberimizin mu'cizeleri. Kur'ân-ı kerîmin üstünlüğü
1/18: Resûle tâbi' olmak nasıl olur? Evlâd terbiyesi
1/19: Hubb-i fillah, buğd-i fillah. Kazâya rızâ nasıl olur?
1/20: Kâfirler iki kısmdır
1/21: Cennete girmek için Muhammed aleyhisselâma uymak lâzımdır
1/22: Kâfirlerin iyiliği dünyâda kalır
1/23: Dünyâ, âhıretin tarlasıdır
1/24: Âhıret bilgileri, aklın dışındadır. Bunlara akl ermez
1/25: Kur'ân-ı kerîm nedir? Kur'ân tercemeleri
1/26: İctihâd hatâları. İmâm-ı a'zamın büyüklüğü
1/27: İctihâd ne demekdir? Müctehid kime denir?
1/28: Sünnet-i müekkede, sünnet-i zevâid
1/29: Bir üniversiteliye cevâb. Fen bilgileri, bir yaratıcının var olduğunu bildirmekdedir
1/30: Dünyâya, burada kalacak kadar, âhırete de orada kalacak kadar çalışmalıdır
1/31: Dünyâda âhırete yarar iş görmek lâzımdır
1/32: Tenâsuh ve iki rûhluluk yokdur. Âlem-i misâl
1/33: Allahü teâlânın yakın olması ne demekdir?
1/34: Sünnete yapışmak, bid'atlerden sakınmak lâzımdır
1/35: Müşriklerin bedenleri pis değildir. İ'tikâdları pisdir
1/36: Bir üniversiteliye cevâb. Fen bilgileri
1/37: Kur'ân-ı kerîmi felsefecilere göre tefsîr câiz değildir
1/38: Sünnete yapışmak, bid'atlerden sakınmak lâzımdır
1/39: Tenâsuh ve iki rûhluluk yokdur. Âlem-i misâl
1/40: Âlem-i ervâh ve âlem-i misâl ve âlem-i ecsâd. Kabr azâbı
1/41: Emr-i bil-ma'rûf, nehy-i anil-münker ve cihâd sevâbı çokdur
1/42: Vera' ve takvâ. Hâlis ibâdetin alâmeti nedir?
1/43: Tevbe, vera' ve takvâ
1/44: Farz, sünnet ve nâfilelerin ehemmiyyetleri ve farkları
1/45: Allahü teâlânın yakın olması ne demekdir?
1/46: Îmân, ibâdetler ve lüzûmlu nasîhatler
1/47: Îmân, ibâdetler, harâmlar
1/48: Gençlikde yapılan ibâdetlerin kıymeti
1/49: Âlemler, herşey yokdan var edildi. Yunan felesofları
1/50: Tesavvuf yolunda çalışmak istiyenin yapması lâzım olan şeyler
1/51: Beş vakt nemâz, otuzüç farz
1/52: Abdest almak. Abdesti bozan şeyler
1/53: Mest üzerine mesh, özr sâhibi olmak
1/54: Gusl abdesti nasıl alınır? Ne zemân alınır?
1/55: Teyemmüm. Su bulamamak nasıl olur?
1/56: Necâsetden tahâret. İstincâ. İstibrâ
1/57: Sular, temiz su, pis su, artıklar
1/58: Setr-i avret. Kadınların örtünmesi
1/59: İstikbâl-i kıble. Kıble ta'yîni
1/60: Nemâz vaktleri. Takvîmler. Ezân
1/61: Nemâzın vâcibleri, secde-i sehv, secde-i tilâvet ve vitr nemâzı
1/62: Ezân kelimelerinin ma'nâları
1/63: Nemâzın ehemmiyyeti. Nemâz kılmıyanlar
1/64: Nemâz nasıl kılınır? Nemâzın beş rüknü, niyyet
1/65: Yolculukda, otobüsde, gemide, tayyârede nemâz
1/66: Nemâzın vâcibleri, secde-i sehv, secde-i tilâvet ve vitr nemâzı
1/67: Nemâzı bozan şeyler. Kâfirlere teşebbüh
1/68: Nemâzın mekrûhları, nemâzı bozmak için özr
1/69: Câmi'de yapılması câiz olmıyan şeyler. Terâvih nemâzı
1/70: Cemâ'at ile nemâz kılmak. Hoparlörle, radyo ile nemâz
1/71: Cum'a nemâzı. İbâdet ne demekdir?
1/72: Bayram nemâzı. Kurban bayramı tekbîrleri
1/73: Nemâzda otururken parmak kaldırmak
1/74: Kazâ nemâzları. Nemâz kılmıyanın cezâsı
1/75: Nemâz ibâdetlerin en üstünüdür
1/76: Nemâzın ta'dîl-i erkânı. Kul hakkı
1/77: Ramezân-ı şerîfin kıymeti. Oruc nasıl tutulur?
1/78: Zekât vermek. Para, mal, hayvan ve toprak mahsûllerinin zekâtı
1/79: Ramezân-ı şerîfin kıymeti. Oruc nasıl tutulur?
1/80: Sadaka-i fıtrı kimler verir? Kimlere vermelidir?
1/81: Kurban kesmek lâzımdır. Kimler keser? Nasıl kesilir?
1/82: Adak ne demekdir? Günâh olan adaklar
1/83: Yemîn nasıl edilir? Yemînin çeşidleri. Yemîn keffâreti
1/84: Hacca gitmek. Hac nasıl yapılır?
1/85: Arabî ayların birinci gününü bulmak
1/86: Şemsî seneleri kamerî seneye çevirmek
1/87: Kamerî seneyi mîlâdî seneye çevirmek
1/88: Hicrî sene başının, hangi gün olduğunu bulmak
1/89: Arabî ayların birinci gününü bulmak
1/90: Selâmlaşmak nasıl olur? Müsâfeha nasıl yapılır?
1/91: Kur'ân-ı kerîm, Allah kelâmıdır
1/92: Kur'ân-ı kerîm, Allah kelâmıdır
1/93: Allahü teâlâ akl ile, hayâl ile anlaşılamaz. Gayba îmân etmek lâzımdır
1/94: Allahü teâlâ akl ile, hayâl ile anlaşılamaz. Gayba îmân etmek lâzımdır
1/95: Hilye-i se'âdet. Siyer kitâbları. Resûlullahın zevceleri
1/96: Muhammed aleyhisselâmın güzel ahlâkı
1/97: Resûlullahın ana, baba ve bütün dedeleri hep mü'min, sâlih idi
1/98: Unutulmuş sünnetleri meydâna çıkarmağı ve bid'atden sakınmağı teşvîk etmekdedir
2/1: Unutulmuş sünnetleri meydâna çıkarmağı ve bid'atden sakınmağı teşvîk etmekdedir
2/2: Düâ etmekdeki gizli bilgileri açıklamakdadır
2/3: Resûlullaha uymağa ve dînini öğrendiği kimseyi sevmeğe teşvik etmekdedir
2/4: Îmân, akl, zekâ, halâl, harâm, adâlet, zulm, kazâ, kader
2/5: Tefsîr, hadîs ne demekdir? Din âlimi kime denir?
2/6: Hadîs-i şerîflerin çeşidleri ve hadîs âlimleri
2/7: Derd ve belânın Allahü teâlâdan geldiğini düşünmelidir
2/8: Derd ve belânın Allahü teâlâdan geldiğini düşünmelidir
2/9: İnsanlardan gelen sıkıntılara sabretmek lâzımdır
2/10: Üzüntü ve sıkıntıları ni'met bilmelidir
2/11: Zâhir işlerin bozuk olması, kalbin dağılmasına yol açar
2/12: Derd ve belâlar, günâhlara keffâretdir
2/13: Kendi dileklerimizi bırakıp sâhibimizin arzûsuna uymalıyız
2/14: Kibr ve ucb, kalbin tehlükeli hastalığıdır
2/15: Allahü teâlânın ismleri. Yaratmak ne demekdir?
2/16: Resûlullahın vefât ederken kâğıd istemesi, Eshâb-ı kirâmın üstünlüğü
2/17: Vehhâbîler ve çeşidleri. Kıymetli din kitâblarını okumalı
2/18: Kabr ziyâreti lâzımdır. Olgun rûhlardan istifâde edilir
2/19: Kabr azâbına inanmıyanlara cevâb vermekdedir
2/20: Kabr azâbına inanmıyanlara cevâb vermekdedir
2/21: Şâmânîler, Behâîler, Ahmediyye, Dürzîler, Yezîdîler, Selefîler
2/22: Hurûfîlik
2/23: Resûlullahın vefât ederken kâğıd istemesi, Eshâb-ı kirâmın üstünlüğü
2/24: Eshâb-ı kirâm birbirini çok severdi. Şî'îlerin iftirâları
2/25: Eshâb-ı kirâmın büyüklüğü. Dostlara çok derd gelmesi
2/26: Sosyal adâlet. Sosyalizm. Kapitalizm. Komünizm
2/27: İslâmiyyet, din ve dünyâ se'âdetlerinin kaynağıdır
2/28: Nefs ve akl
2/29: Müslimânlar niçin geri kaldılar?
2/30: İslâmiyyet fenni emr etmekdedir. Fen yobazları
2/31: Madde, atom üzerinde yeni bilgiler. Radyo-aktivite. Radar
2/32: Atom kuvveti ve sulh zemânında kullanılması
2/33: İslâmiyyetde kadının kıymeti ve hakları çok büyükdür
2/34: İslâmiyyetde nikâh. Evlenmesi câiz olmıyan kadınlar
2/35: Kâfirlerin evlenmesi. Çocuğa îmânı, islâmı öğretmelidir
2/36: İslâmiyyetdeki talâk. Hul'. Zihâr. Li'ân. İddet. Hıdâne
2/37: Süt kardeşlik. Süt ile akrabâ olanlar
2/38: Nafaka nedir? Kimler verir? Kimlere verilir? Lakît, Komşu hakkı
2/39: İslâmiyyetde kadının kıymeti ve hakları çok büyükdür
2/40: Halâl, harâm ve şübheli şeyler. Vera' ve takvâ
2/41: Yimesi ve kullanması harâm olan şeyler
2/42: İçmesi harâm olan içkiler
2/43: Tütün, sigara içmek günâh mıdır?
2/44: İsrâf nedir? Tütün isrâf mıdır? Fâiz harâmdır
2/45: Yimek, içmek âdâbı
2/46: Hasta yemekleri. Ba'zı hastalıkların tedâvîsi
2/47: Tevekkül. Evlilerin tevekkülü. Bekârların tevekkülü
2/48: İrâde-i cüz'iyye. Bir ihtiyâr müslimânın kızına nasîhatı ve münâcâtı
2/49: İrâde-i cüz'iyye. Bir ihtiyâr müslimânın kızına nasîhatı ve münâcâtı
2/50: Ebüssü'ûd efendinin (Kazâ-kader) risâlesi
2/51: Sevgilinin her işi sevilir. Hamd, şükrden üstündür
2/52: Tegannî, müzik. Radyoda, teybde Kur'ân-ı kerîm okumak ve dinlemek
2/53: Cin hakkında geniş bilgi. Evliyânın rûhları
2/54: Rûhların hâzır olması. Allahü teâlânın sıfatları
2/55: Allah adamlarının gönlünde zerre kadar dünyâ düşüncesi yokdur
2/56: Rûhlar insan şeklinde görünür. Tenâsüh yokdur
2/57: İnsan medenî olmak için yaratılmışdır
2/58: Hârikaların, kerâmetlerin çok veyâ az olmasının sebebi
2/59: Seçilmişlerin ve câhillerin gaybdan îmânları
2/60: Zâhir âlimlerinin ve tesavvufcuların ve râsih ilmli seçilmişlerin hâlleri
2/61: Velî olmak için hârikalar ve kerâmetler lâzım değildir
2/62: Seçilmişlerin ve câhillerin gaybdan îmânları
2/63: Zâhir âlimlerinin ve tesavvufcuların hâlleri
2/64: İnsanın aslı ademdir. Ademde hiç iyilik yokdur
2/65: Güzel sûretlerin tatlı olmalarının sebebi nedir?
2/66: Allahü teâlâ hiçbir şeye benzemez ve akl ile anlaşılamaz
2/67: Cennetde Allahü teâlânın görüleceğine inanmıyanlara cevâbdır
2/68: Tesavvufcuların ve felsefecilerin (İlm-ül yakîn) bilgileri
2/69: Abdüllah-i Dehlevî hazretlerinin (Mekâtib-i şerîfe) kitâbından
2/70: Akla, hayâle gelen ve keşf ile, şühûd ile anlaşılan herşey mahlûkdur
2/71: İşin başı, sünnet-i seniyyeye yapışmak ve bid'atden sakınmakdır
2/72: Resûlullahın kadınlarla yapdığı sözleşme
2/73: Abdüllah-i Dehlevî hazretlerinin (Mekâtib-i şerîfe) kitâbından
3/1: İşin başı, sünnet-i seniyyeye yapışmak ve bid'atden sakınmakdır
3/2: Resûlullahın kadınlarla yapdığı sözleşme
3/3: Bey' ve şirâ. Halâl ve harâm satışları
3/4: Alış-verişde muhayyerlik
3/5: Bâtıl, fâsid, mekrûh satışlar. Sarraflık
3/6: Ölüm hastasının satış ve hediyye yapması
3/7: Ölüm hastasının satış ve hediyye yapması
3/8: Komşu, şüf'a ve diğer haklar üzerinde çeşidli bilgiler
3/9: Şart ile söylenen şeyler
3/10: Selem ile satış
3/11: Karz-ı hasen, ödünç vermek. Kim ödünç isteyebilir?
3/12: Kefâlet, havâle, bono, sened kırdırmak. Poliçe
3/13: Vekâlet. Alış-verişde, zekât vermekde vekîl tutmak
3/14: Ticâretde ihsân etmek. Borc ödemek. Din kitâbları
3/15: Ticâretde dînini kayırmak. Harâmdan sakınmak
3/16: Allahü teâlânın kullarına hizmet etmemiz lâzımdır
3/17: İslâmiyyetde fâiz, bankalar, bono kırdırmak ve vakf
3/18: Kirâ, ücret, işçilik. Sigortacılık. Emânetciye verilen para
3/19: İslâmiyyetde fâiz, bankalar, bono kırdırmak ve vakf
3/20: İslâmiyyetde şirket kurmak. Şirketler
3/21: Kirâ, ücret, işçilik. Sigortacılık. Emânetciye verilen para
3/22: Ta'zîr cezâları, fıkh kitâblarını okumak lâzımdır
3/23: Ta'zîr cezâları, fıkh kitâblarını okumak lâzımdır
3/24: Cinâyetler, katlin çeşidleri ve cezâları. Kısâs
3/25: Diyet cezâları. Katl keffâreti
3/26: İkrâh, zorla yapdırmak. Hicr, bir şeyi yasaklamak
3/27: Ahkâm-ı islâmiyyesiz evliyâlık olmaz. Kelime-i tevhîd
3/28: Kelime-i tevhîdin ma'nâsını bildirmekdedir
3/29: Kelime-i tevhîdin üstünlüklerini bildirmekdedir
3/30: Fenâ ve bekâyı bildirmekdedir. Mahlûkların aslı, hakîkatleri
3/31: Eshâb-ı yemîn, eshâb-ı şimâl ve sâbikûn
3/32: Mü'minin kalbi kıymetlidir. Hiç kimsenin kalbini kırmamalıdır
3/33: Arş ve Kürsî. Kalbin üstünlükleri
3/34: Bir tesavvuf mütehassısının mektûbu
3/35: Allahü teâlânın ihâta, kurb ve ma'iyyet sıfatları
3/36: Âlem vehm mertebesinde yaratılmışdır
3/37: Allahü teâlânın mahlûklara yakın olması. Adem. İblîs
3/38: Nihâyet, âfâk ve enfüsün dışındadır. Evliyâ kimlere denir?
3/39: Fenâ fillâh, vasl-ı uryânî. Ayn-ül-yakîn
3/40: Kâ'be-i mu'azzamanın ve nemâzın kemâlâtı
3/41: Tesavvuf yolunun başında da, sonunda da islâmiyyete uymak lâzımdır
3/42: Üçüncü cildin seksenyedinci mektûbundaki bilgileri açıklamakdadır
3/43: Nemâzda olanın, Allahü teâlâya yakınlığı. Nemâzın hakîkati
3/44: Nihâyet, âfâk ve enfüsün dışındadır. Evliyâ kimlere denir?
3/45: Fenâ fillâh, vasl-ı uryânî. Ayn-ül-yakîn
3/46: Kâ'be-i mu'azzamanın ve nemâzın kemâlâtı
3/47: Vahdet-i vücûd bilgisi. Vücûd-i vehmî
3/48: Madde, Allahü teâlâya ayna olamaz
3/49: Dünyâ görünüşdür. Âhıret, dünyânın aslıdır
3/50: Tesavvuf yolunun başında da, sonunda da islâmiyyete uymak lâzımdır
3/51: Üçüncü cildin seksenyedinci mektûbundaki bilgileri açıklamakdadır
3/52: Nemâzda olanın, Allahü teâlâya yakınlığı. Nemâzın hakîkati
3/53: Âlemin, maddenin, zât-i ilâhîden nasîbi yokdur
3/54: Madde üzerinde yeni bilgiler. Hüceyre, hayât, mikrop, zehr
3/55: Ölüm, ölüme hâzırlanmak. Şifâ âyetleri
3/56: Meyyite yapılacak dînî vazîfe, kefen
3/57: Resûlullahın yazdığı baş sağlığı mektûbu
3/58: Baş sağlığı mektûbu. Meyyite yapılacak hediyyeler
3/59: Kabr ziyâreti ve Kur'ân-ı kerîm okumak
3/60: Meyyit için iskat ve devr yapmak. Defn izni nasıl alınır?
3/61: Resûlullahın yazdığı baş sağlığı mektûbu
3/62: Dünyâ sıkıntılarının fâidesi. Tâ'ûnun sevâbı
3/63: Sevgiliden gelen sıkıntılar, iyiliklerinden dahâ tatlıdır
3/64: Ferâiz bilgisi. Mîrâs alacak kimlerdir? Vasî ta'yîni
3/65: Ferâiz hesâbları. Mîrâsı bölmek
3/66: Kabr hayâtı ve tâ'ûndan ölmenin kıymeti
3/67: Dünyâ sıkıntılarının fâidesi. Tâ'ûnun sevâbı
3/68: Kazâya râzı olmalıdır, hattâ lezzet duymalıdır
3/69: Sevgiliden gelen sıkıntılar, iyiliklerinden dahâ tatlıdır
3/70: (Se'âdet-i Ebediyye)nin son sözü ve umûmî fihristi`;

const SYSTEM_PROMPT = `Sen Se'âdet-i Ebediyye kitabının arama motorusun. Kullanıcının sorusuna veya arama ifadesine en uygun maddeleri bul.

KURALLAR:
- SADECE aşağıdaki JSON formatında cevap ver, başka hiçbir şey yazma
- En alakalı 5 maddeyi seç (daha az da olabilir)
- Her madde için kısa bir sebep yaz (Türkçe, 10 kelimeden az)
- Osmanlıca/güncel Türkçe farkını dikkate al (nemâz=namaz, oruc=oruç, gusl=gusül vb.)

FORMAT:
[{"k":1,"m":52,"s":"Abdest almak ve bozan şeyler"},{"k":1,"m":54,"s":"Gusül abdesti"}]

k = kısım numarası, m = madde numarası, s = kısa sebep

MADDE LİSTESİ:
${MADDE_LISTESI}`;

export default async function handler(req) {
  // CORS
  const origin = req.headers.get('origin') || '';
  const allowedOrigins = ['https://ilmihal.org', 'https://www.ilmihal.org', 'http://localhost'];
  const corsOrigin = allowedOrigins.find(o => origin.startsWith(o)) ? origin : allowedOrigins[0];

  const corsHeaders = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    if (!query || query.length < 3 || query.length > 500) {
      return new Response(JSON.stringify({ error: 'Invalid query' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.1,
        max_tokens: 300,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: query }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: 'API error', detail: err }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '[]';

    // JSON parse et (bazen model markdown wrapper ekliyor)
    let results;
    try {
      const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      results = JSON.parse(cleaned);
    } catch {
      results = [];
    }

    return new Response(JSON.stringify({ results, source: 'ai' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}
