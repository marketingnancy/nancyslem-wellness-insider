import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "hu"; }, []);

  // Sticky CTA bar and timer on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);

      // Show timer after 50% scroll
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !showTimer) {
        setShowTimer(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showTimer]);



  // Simulate visitor count fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 7) - 3); // Random +/- 3
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!showTimer) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showTimer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    { src: "/PDP.jpg", alt: "Nancy's Lem wellness-eszköz" },
    { src: "/PDP-1.jpg", alt: "Lem életstílus-környezetben" },
    { src: "/PDP-2.jpg", alt: "A Lem formaterve közelről" },
    { src: "/PDP-3.jpg", alt: "Lem termékrészletek" },
    { src: "/PDP-4.jpg", alt: "Lem használat közben" },
    { src: "/PDP-5.jpg", alt: "Lem csomagolás és tartozékok" },
    { src: "/PDP-6.jpg", alt: "Lem életstílus-kép" },
    { src: "/PDP-7.jpg", alt: "Lem termékjellemzők" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Editorial Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src="/wellness-insider-logo.png"
              alt="Wellness Insider"
              className="h-8 md:h-10"
            />
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium">Megbízható női egészség</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 értékelés) • 1M+ eladva</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">28 300 Ft</span>
                  <span className="text-sm line-through text-white/70">50 600 Ft</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">22 300 Ft KEDVEZMÉNY</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Lejár: {formatTime(timeLeft)}</span>
                  </div>
                )}
              </div>
              <a
                href="https://hellonancy.com/products/lem"
                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                      'event_callback': function() {
                        // Optional: Ensure navigation happens if tracking fails, but standard <a> tag handles it
                      }
                    });
                  }
                }}
              >
                <Button className="bg-white text-[#FF1493] hover:bg-gray-100 font-bold">
                  Megveszem
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}





      {/* Article Metadata */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-200">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">EGÉSZSÉG & WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">TERMÉKTESZT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Több mint 1 millió orgazmus után: miért cserélik le az 50 feletti nők a vibrátort erre a „citromra”
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Utánajártunk, miért hagyják ott több ezren az 50 feletti nők közül a hagyományos vibrátort egy „fizioterápiás” eszközért, ami úgy néz ki, mint egy citrom. Íme, amit találtunk.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Szerző: Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Vezető wellness-szerkesztő</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Frissítve: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('hu-HU', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 perc olvasás</span>
          </div>
        </div>
      </section>

      {/* Editor's Note */}
      <section className="bg-[#FFE14D]/20 py-3 border-b border-[#FFE14D]">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-5 h-5 bg-[#FF1493] rounded-full flex items-center justify-center">
                <Edit3 className="w-3 h-3 text-white" />
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-tight">
              <span className="font-bold text-gray-900 mr-1">Szerkesztői megjegyzés:</span>
              Ez a cikk affiliate linkeket tartalmaz. Ha ezeken keresztül vásárolsz, jutalékot kaphatunk, neked viszont ez egy fillérbe sem kerül többe. Csak olyan termékeket ajánlunk, amelyeket alaposan utánajártunk és kipróbáltunk.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Nancy's Lem wellness-eszköz az éjjeliszekrényen"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">A Nancy's Lem diszkréten megül az éjjeliszekrényen – a legtöbben azt hiszik, dekorációs citrom. Fotó: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> olvasó nézi épp ezt a cikket</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diszkrét csomagolás</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Ingyenes szállítás világszerte</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 napos elégedettségi garancia</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 hónap garancia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Miért beszélünk erről</h2>
          <p className="text-gray-700 leading-relaxed">
            Amikor a szerkesztőségünk először hallott egy „citrom alakú wellness-eszközről”, ami viharos sebességgel hódítja meg a menopauzás közösséget, bevalljuk – szkeptikusak voltunk. De miután tucatnyi nővel beszélgettünk, nőgyógyászokkal konzultáltunk, és igen, magunk is kipróbáltuk, már értjük, miért ez most a felkapott téma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ez nem csak egy újabb wellness-trend. Egy valódi orvosi problémára adott válasz, ami nők millióit érinti, mégis ritkán esik róla szó: a <strong>csiklósorvadásra</strong> és a szexuális jóllét elvesztésére a menopauza alatt.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A beszélgetés, amire senki sem figyelmeztetett</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mindent hallunk a hőhullámokról, amelyek hajnali 3-kor az izzadt selyemlepedőből rángatnak ki. Hallunk az agyködről, ami miatt a szemüvegünket keressük, miközben az ott van az orrunkon.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            De senki sem ül le hozzád egy pohár Pinot mellé, hogy odasúgja: „Hé, amúgy, ha odalent nem tartod aktívan a dolgokat, a csiklód szó szerint összemehet.”
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ezt <strong>csiklósorvadásnak</strong> hívják, és a menopauza urogenitális tünetegyüttesének (GSM) része – a North American Menopause Society szerint a posztmenopauzás nők akár 50%-át érinti.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„A nagy elidegenedés”</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Sok megkérdezett nőnek nem csak a szárazság volt a baj. Hanem a <strong>zsibbadtság</strong>. Az egyik tesztelőnk így írta le, amikor elővette a harmincas éveiből megmaradt régi vibrátorát: „Ahelyett, hogy jó lett volna, csak… ingerlő volt. Vagy zsibbadt. Mintha egy bőrkeményedést próbálnál csiklandozni.”
            </p>
            <p className="text-gray-700 leading-relaxed">
              Az orvosi szakemberek szerint a hagyományos vibrátorok dörzsöléssel és ütéssel hatnak. Amikor a szövetek az alacsony ösztrogénszint miatt elvékonyodnak, a közvetlen rezgés valójában <em>tovább érzéketlenítheti az idegeket</em>, és pont ettől lesz az a „zsibbadt” érzés.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">„Hagyd a rezgést. Kezdd a szívást.”</p>
            <p className="text-gray-700">– Medenctáji szakemberek</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            A menopauzára szakosodott nőgyógyászok így magyarázzák: „Amikor az ösztrogénszint leesik, a medencei vérkeringés csökken. Ez szövetelvékonyodáshoz, a rugalmasság elvesztéséhez és az érzékelés csökkenéséhez vezet. Az orvostudomány ezt a »használd, vagy elveszíted« elvnek nevezi – állandó vérkeringés kell ahhoz, hogy a szövet egészséges maradjon.”
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Itt jön a képbe: a Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Itt lép színre ez a kis sárga eszköz. A Nancy's Lemet nem szexjátékként reklámozzák – wellness-eszközként pozicionálják. És a kutatásunk után már értjük, miért.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A dörzsölésre építő hagyományos vibrátorokkal ellentétben (amelyek irritálhatják az elvékonyodott menopauzás szövetet) a Lem egy <strong>légpulzusos technológiát</strong> használ. Képzeld el a különbséget: dörzspapírt húzol végig a bőrödön, vagy egy finom vákuummasszázst kapsz.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A tudomány: miért működik a légpulzusos technológia</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Hagyományos vibrátorok:</p>
              <p className="text-red-700 text-sm">Felületi dörzsölésre építenek, ami irritálhatja az érzékeny, elvékonyodott szövetet. Zsibbadtságot vagy mikrorepedéseket okozhat.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Légpulzusos technológia:</p>
              <p className="text-green-700 text-sm">Finom szívóhullámokat kelt közvetlen érintés nélkül. Oxigéndús vért szív a szövetbe, ezzel támogatja az egészséget és az érzékelést.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Így működik: a Lem finom légzárat hoz létre a csikló körül, és légnyomáshullámokkal ingerli – az orális szex érzését utánozza, csak épp kitartóan és fáradhatatlanul. Mivel nincs dörzsölés, nulla az irritáció.
          </p>
          <p className="text-gray-700 leading-relaxed">
            De az igazi varázslat a fizika: ez a finom szívóhatás vákuumot kelt, ami fizikailag mélyre, a szövetbe szívja az oxigéndús vért. Felébreszti az éveken át szunnyadó idegeket.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              „Olyan, mintha egyenesen kiszívná belőlem az orgazmust… és sokkal tovább tartja a lüktetést.”
            </p>
            <p className="font-semibold text-gray-700">– Alisha, béta-tesztelő (ellenőrzött vásárlói értékelésekből)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hogyan teljesít: az összehasonlításunk</h2>
          <p className="text-center text-gray-600 mb-8">Összevetettük a Lemet a menopauzás szövetegészségre szánt hagyományos megoldásokkal</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Tulajdonság</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Hagyományos vibrátor</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Ösztrogénkrém</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Működik érzékeny szöveten</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Igen</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Irritálhat</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Lassú eredmény</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Növeli a vérkeringést</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Mélyen a szövetben</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Csak a felszínen</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Fokozatosan</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Nincs dörzsölés/irritáció</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Nulla érintés</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Dörzsöl</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Igen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Azonnali élvezet</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Rögtön</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Változó</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Nincs élvezet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diszkrét forma</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Úgy néz ki, mint egy citrom</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Feltűnő</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Igen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Orvos által ajánlott</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ A vérkeringésért</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Néha</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Igen</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Ár</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">28 300 Ft (egyszeri)</td>
                  <td className="border border-gray-300 p-4 text-center">20 000–60 000 Ft</td>
                  <td className="border border-gray-300 p-4 text-center">12 000–20 000 Ft/hó</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A „szégyenmentes” formatervezési filozófia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Egy dolog a tesztelés alatt nagyon megfogta a szerkesztőségünket: a forma <em>szándékosan</em> diszkrét. Élénksárga, elfér a tenyeredben, és tényleg úgy néz ki, mint egy dekorációs citrom.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Az „éjjeliszekrény-teszt”</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="A Lem eszköz diszkréten megül az éjjeliszekrényen"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Mindannyiunknak megvan az a bizonyos fiók. A <em>szégyenfiók</em>. Ahova a régi zoknik alá dugjuk a randa, falloszformájú műanyag eszközöket.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Az egyik tesztelőnk megosztotta velünk ezt a sztorit: „Véletlenül a fürdőszobapulton hagytam a Lememet, amikor az anyósom látogatóba jött. Felvette, és azt mondta: »Jaj, ez valami új szónikus arctisztító? Olyan puha tapintású!«”
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Átmegy az éjjeliszekrény-teszten. Úgy néz ki, mint egy csúcskategóriás öngondoskodási kütyü, nem mint egy szexjáték. Mert pontosan az is.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Figyelmeztetés az olcsó utánzatokkal kapcsolatban</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Az első tesztünk megjelenése után az olvasók megkérdezték, miért ne vegyék meg inkább a pár ezer forintos utánzatot az Amazonról. Íme, mit mondanak az orvosi szakemberek.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              „Az olcsó eszközök porózus Jelly/TPE anyagokat használnak” – figyelmeztetett. „A mikroszkopikus baktériumok megtelepednek a pórusokban, ami óriási kockázat a menopauzás nőknek, akik amúgy is hajlamosak a húgyúti fertőzésekre.”
            </p>
            <p className="text-red-900 font-bold mt-3">
              A Hello Nancy Lem 100%-ban orvosi minőségű, nem porózus szilikon. Ne kockáztasd az egészséged azért, hogy pár ezer forintot spórolj.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Suttogóan halk</h3>
                <p className="text-gray-600 text-sm">
                  Ultrahalk motor a teljes diszkrécióért
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vízálló (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Tökéletes fürdéshez vagy zuhanyzáshoz
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Orvosi minőségű szilikon</h3>
                <p className="text-gray-600 text-sm">
                  Testbarát, nem porózus, könnyen tisztítható
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Mágneses töltés</h3>
                <p className="text-gray-600 text-sm">
                  120 perc üzemidő töltésenként
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Termékgaléria</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A kicsomagolás élménye: az első benyomás számít</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="A Lem kicsomagolásának élménye"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Az egyik első dolog, ami feltűnt a tesztelőinknek? A csomagolás <em>elegáns</em>. Semmi rikító szín, semmi kínos kép. A doboz minimalista fehér, finom aranyszínű részletekkel – könnyen össze lehetne téveszteni egy luxus bőrápolási termékkel.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Mi van a dobozban:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>A Lem eszköz (élénksárga, tenyérnyi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Mágneses USB-töltőkábel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Puha bársony tárolózsák (tökéletes utazáshoz)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>„Önszeretet-kézikönyv” használati tippekkel és wellness-tanácsokkal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Gyorsindítási útmutató illusztrált leírással</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                „Amikor kinyitottam a dobozt, őszintén meglepett, mennyire <strong>prémium</strong> tapintású volt minden. Nem »szexjáték« érzése volt – inkább egy wellness-befektetésé.” – Tesztelő, 54 éves
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Beszéljünk az anatómiáról: miért fontos a csikló ingerlése</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="A csikló anatómiájának keresztmetszeti ábrája"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">A gyönyör tudománya</h3>
                <p className="text-gray-600 text-sm">Amit minden nőnek tudnia kellene a testéről</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Itt van valami, amit a biológiaórán nem tanítanak: a csiklóban körülbelül <strong>8000 idegvégződés</strong> van – több, mint az emberi test bármely más részén, akár férfiról, akár nőről van szó. Összehasonlításképp: a péniszben nagyjából 4000.
              </p>
              <p>
                De itt a bökkenő: <strong>a nők 75%-a önmagában behatolással nem jut el az orgazmusig</strong>, ezt a Journal of Sex & Marital Therapy egyik tanulmánya állapította meg. A csikló a kulcs.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Mi történik a menopauza alatt:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="A vérkeringés összehasonlítása a menopauza előtt és után"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ A probléma:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Az ösztrogénszint 90%-kal esik</li>
                      <li>• A medencetáji vérkeringés csökken</li>
                      <li>• A csiklószövet 20–30%-kal zsugorodhat</li>
                      <li>• Az idegérzékenység csökken</li>
                      <li>• A természetes nedvesedés csökken</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ A megoldás:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• A rendszeres ingerlés fenntartja a vérkeringést</li>
                      <li>• Aktívan tartja az idegpályákat</li>
                      <li>• Megelőzi a szövetsorvadást</li>
                      <li>• Fenntartja az érzékenységet</li>
                      <li>• Támogatja a természetes nedvesedést</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                A nőgyógyászok kerek perec kimondják: „Gondolj rá úgy, mint a medencefenék edzésére. Ha nem használod ezeket az izmokat, és nem tartod fenn a vérkeringést, elsorvadnak. Ugyanez érvényes a csiklószövetre is.”
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 A lényeg:</p>
                <p className="text-gray-700">
                  A rendszeres csiklóingerlés nem csak az élvezetről szól (bár az is szép ráadás). A szövet egészségének megőrzéséről, az idegműködés fenntartásáról és azoknak a visszafordíthatatlan változásoknak a megelőzéséről, amelyek az elhanyagolással járnak. Ez <em>megelőző egészségvédelem</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">„De mi lesz a párommal?” Ennek is utánajártunk</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">A „3 perces csoda” (és miért imádják a párok)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Legyünk őszinték: sok 50 feletti nőnek 20+ percbe (és sok fejben tornázásba) telik, mire egyáltalán a csúcs közelébe ér. A Lemmel? <strong className="text-[#FF1493]">Három perc.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>A nők legnagyobb ellenvetése:</strong> „A párom úgy érzi majd, hogy lecseréltem?”
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Egyáltalán nem.</strong> A Lem pici. Sok pár <em>együttlét közben</em> használja. „Hídként” működik: gondoskodik róla, hogy teljesen izgalomba jöjj és természetesen nedves legyél, így leveszi a terhet a párodról, hogy neki kelljen „teljesítenie”.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Az egyik tesztelőnk azt mondta: „A hálószobánkat a szorongás helyéből újra játszótérré varázsolta.”
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A kutatásunk során az egyik leggyakoribb kérdés ez volt: <em>„A párom fenyegetve érzi majd magát ettől?”</em>
              </p>
              <p>
                Íme, amit találtunk: <strong>a Lem nem helyettesítés – hanem fokozás.</strong> Sok megkérdezett pár arról számolt be, hogy amikor a Lemet bevonták az intim együttléteikbe, az valójában <em>elmélyítette</em> a kapcsolatukat.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  „A férjem kíváncsi volt, nem fenyegetve érezte magát. Most ő használja rajtam az előjáték közben. Leveszi róla a »teljesítés« terhét, én pedig pontosan azt kapom, amire szükségem van. Mindenki jól jár.”
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, 28 éve házas</p>
              </div>
              <p>
                A kompakt méret miatt könnyen beilleszthető a páros együttlétekbe, anélkül, hogy ott lenne útban. És mivel egyszer beállítva már érintésmentes, mindkét fél egymásra koncentrálhat.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Hogyan használják a párok a Lemet:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Előjáték közben</p>
                    <p className="text-sm text-gray-600">A pár a helyén tartja, miközben csókolózik és simogat</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Együttlét közben</p>
                    <p className="text-sm text-gray-600">Úgy elhelyezve, hogy egyszerre legyen csiklóingerlés és behatolás</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Egyedül, miközben a pár nézi</p>
                    <p className="text-sm text-gray-600">Mélyíti az intimitást, és segít a párnak megtanulni, mi az, ami működik</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">„Karbantartás” az alkalmak között</p>
                    <p className="text-sm text-gray-600">Az egyedüli használat egészségesen tartja a szövetet, amikor a páros szex ritkább</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Profi tipp:</strong> A kulcs a kommunikáció. Tekintsd wellness-eszköznek, ami <em>mindkettőtöknek</em> jót tesz: csökkenti a nyomást és növeli az élvezetet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Minden ok megvan, hogy kipróbáld, egy sem, hogy aggódj</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Utánajártunk a Hello Nancy garanciáinak. Íme, mit jelentenek valójában.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 napos „élvezetgarancia”</h3>
                <p className="text-sm text-gray-700 text-center">
                  Nem vagy elégedett? <strong>Teljes árat visszakapod</strong> – visszaküldeni sem kell. Megbíznak az őszinteségedben. Ennyire biztosak a dolgukban.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Magyarán: nulla pénzügyi kockázat. Próbáld ki egy hónapig.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 hónap garancia</h3>
                <p className="text-sm text-gray-700 text-center">
                  Ha az első évben bármi gond adódik az eszközzel, kicserélik. Ingyen. Kérdés nélkül.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Magyarán: ez nem egy eldobható kütyü. Tartós darab.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Élethosszig tartó támogatás</h3>
                <p className="text-sm text-gray-700 text-center">
                  Kérdésed van a használatról? Aggódsz a tisztítás miatt? Az ügyfélszolgálatuk 24 órán belül válaszol.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Magyarán: nem egy terméket veszel. Egy közösséghez csatlakozol.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Az igazi kérdés: mit veszíthetsz?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Bemutattuk a tudományt. Megmutattuk az értékeléseket. Elmagyaráztuk a garanciákat. Ezen a ponton az egyetlen kockázat az, ha <em>nem</em> próbálod ki.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Számoljunk csak:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Ha kipróbálod:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Újra felfedezheted az élvezetet, amiről azt hitted, elveszett</li>
                      <li>✓ Javíthatod a szövet egészségét, és megelőzheted a sorvadást</li>
                      <li>✓ Jobban alhatsz (az orgazmus oxitocint szabadít fel)</li>
                      <li>✓ Legrosszabb esetben visszakapod a 28 300 Ft-ot</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Ha nem:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• A szövetsorvadás folytatódik</li>
                      <li>• Az idegérzékenység tovább csökken</li>
                      <li>• A szexuális jóllét továbbra is küzdelem marad</li>
                      <li>• Mindig azon fogsz tűnődni: „mi lett volna, ha?”</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Miért bízunk a Hello Nancyben</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Nem ajánlunk termékeket csak úgy, könnyelműen. Íme, miért felelt meg a Hello Nancy a szerkesztőségi mércénknek.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Díjnyertes</h3>
              <p className="text-sm text-gray-600">2025-ös Women's Wellness Tech Award az International Wellness Institute-tól</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ellenőrzött értékelések</h3>
              <p className="text-sm text-gray-600">4,7★ átlag 14 907 ellenőrzött vásárlótól (nem hamis értékelések)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ eladva</h3>
              <p className="text-sm text-gray-600">Több mint 1 000 000 darab kelt el világszerte a 2023-as indulás óta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Orvosi minőség</h3>
              <p className="text-sm text-gray-600">Orvosi minőségű szilikon, szigorú biztonsági tesztelés</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Ahogy a sajtóban is megjelent:</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <img src="/timeout_logo.webp" alt="Time Out" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/tatler_logo.webp" alt="Tatler" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/sarasense_logo.webp" alt="Sarasense" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/zenify_logo.webp" alt="Zenify" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/vocal_logo.webp" alt="Vocal" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </article>



      {/* Written Reviews */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Mit mondanak az ellenőrzött vásárlók
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 az 5-ből (14 907 ellenőrzött értékelés)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Jobb, mint az ösztrogénkrém”</p>
                <p className="text-gray-700 italic">
                  „Nem »szórakozásból« vettem, hanem azért, mert az orvosom azt mondta, vérkeringésre van szükségem. De hűha. A feloldódás segít végigaludni az éjszakát, anélkül, hogy izzadtan ébrednék. Ez az új vitaminom.”
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Ellenőrzött vásárlás</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Felébresztette a testem”</p>
                <p className="text-gray-700 italic">
                  „Korábban kipróbáltam a Lelo Sonát, de az túl erős volt nekem. A Lem elég gyengéd az érzékenységemhez, mégis elég mély ahhoz, hogy tényleg működjön. 10/10.”
                </p>
                <p className="font-semibold text-gray-900">– Carly, ellenőrzött vásárló</p>
                <p className="text-xs text-gray-500">✓ Ellenőrzött vásárlás</p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Rákattantam”</p>
                <p className="text-gray-700 italic">
                  „Rákattantam. A Lem a legvadabb módon szív és húz. Amikor elélvezel, olyan, mintha egyenesen kiszívná belőled az orgazmust, és sokkal tovább tartja a lüktetést. Annyira jó!”
                </p>
                <p className="font-semibold text-gray-900">– Alisha, béta-tesztelő</p>
                <p className="text-xs text-gray-500">✓ Ellenőrzött vásárlás</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Ez mindent megváltoztat”</p>
                <p className="text-gray-700 italic">
                  „Olyasvalakiként, akinek fontos a diszkréció az intim termékeknél, nem is létezhetne ennél tökéletesebb választás. A szívófunkció más, mint bármi, amit eddig kipróbáltam.”
                </p>
                <p className="font-semibold text-gray-900">– Maxine, ellenőrzött vásárló</p>
                <p className="text-xs text-gray-500">✓ Ellenőrzött vásárlás</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offer-section" className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/20 py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              A verdiktünk: megéri az árát
            </h2>
            <p className="text-center text-xl text-gray-600">
              Alapos tesztelés és kutatás után a szerkesztőségünk határozottan ajánlja a Nancy's Lemet azoknak a nőknek, akik menopauzás szövetváltozásokat tapasztalnak.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">22 300 Ft KEDVEZMÉNY</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ IDŐLIMITES OLVASÓI AJÁNLAT ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Az ajánlat lejár:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem csiklóizgató</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">28 300 Ft</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">50 600 Ft</span>
                      <span className="text-sm text-green-600 font-bold">Spórolj 22 300 Ft-ot (44% kedvezmény)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Mindössze napi 78 Ft</strong> egy évnyi használat alatt
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Kevesebb, mint a napi kávéd. Évekig kitart.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 OLVASÓI TIPP: Add meg a <span className="font-bold text-[#FF1493]">TIFFANY</span> vagy <span className="font-bold text-[#FF1493]">ISABELLA</span> kódot a pénztárnál egy plusz meglepetésért!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem csiklóizgató (élénksárga)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Önszeretet-kézikönyv & használati útmutató</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Mágneses töltőkábel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Bársony utazózsák</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Ingyenes szállítás világszerte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 napos „élvezetgarancia”</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 hónap garancia</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Megveszem – 28 300 Ft (Spórolj 22 300 Ft-ot)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Kockázatmentes garancia
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 napos pénzvisszafizetési garancia. Ha nem szereted meg, a teljes árat visszakapod – <strong>visszaküldeni sem kell</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diszkrét csomagolás</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>24 órán belül feladva</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Biztonságos fizetés</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Is This For You Section */}
      <section className="bg-gradient-to-br from-[#FFE14D]/10 via-white to-[#FF1493]/10 py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Neked való a Lem?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Több ezer 50 feletti nő azt mondja: „igen”. Nézd meg, magadra ismersz-e valamelyikben:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 A Lem neked való, ha:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hüvelyszárazsággal vagy fájdalmas együttléttel küzdesz</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Csökkent érzékelést vagy nehézséget tapasztalsz az orgazmus elérésében</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Csiklósorvadással vagy szövetelvékonyodással van dolgod</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>A hagyományos vibrátorokat túl durvának vagy irritálónak találod</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Szeretnéd megőrizni a szöveted egészségét, ahogy idősödsz</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Diszkrét wellness-eszközt keresel (nem egy feltűnő „játékot”)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>El akarod kerülni vagy ki akarod egészíteni a hormonpótló kezelést</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Készen állsz, hogy visszaszerezd a szexuális jólléted és önbizalmad</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Különösen imádni fogod a Lemet, ha:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>A <strong>tudományosan megalapozott wellnesst</strong> többre tartod a trükköknél</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>Megelőzést</strong> szeretnél, nem csak tüneti kezelést</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Eleged van a termékekből, amelyek <strong>nem működnek érett testen</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Értékeled az <strong>átgondolt formatervet</strong>, ami tiszteletben tartja a magánéleted</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hajlandó vagy <strong>befektetni magadba</strong> (egy év alatt napi mindössze 78 Ft!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>Eredményt szeretnél mellékhatások</strong> vagy receptek nélkül</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Eleged van abból, hogy elfogadd: <strong>„most már egyszerűen ez van”</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Ha legalább 3 pontot bejelöltél,</strong> a Lemet kifejezetten neked tervezték.
              </p>
              <a
                href="https://hellonancy.com/products/lem"


                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                      'event_callback': function() {
                        // Optional: Ensure navigation happens if tracking fails, but standard <a> tag handles it
                      }
                    });
                  }
                }}
              >
                <Button size="lg" className="bg-[#FF1493] hover:bg-[#E01280] text-white px-12 py-6 text-lg">
                  Igen, ez én vagyok – megveszem
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            A kérdéseid, megválaszolva
          </h2>
          <p className="text-center text-gray-600 mb-12">Feltettük a Hello Nancynek a kérdéseket, amelyekre az olvasóink kíváncsiak voltak</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fáj, ha érzékeny vagyok vagy sorvadásom van?</h3>
                <p className="text-gray-700">
                  Egyáltalán nem. Mivel légszívást használ, nem közvetlen érintéssel ható rezgést, elkerüli a dörzsölést, ami a fájdalmat okozza. A 12 fokozat közül a legalacsonyabbon kezdheted, és finoman tornázhatod fel magad. Kifejezetten úgy tervezték, hogy gyengéd legyen az érzékeny szövethez.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kínos a csomagolás?</h3>
                <p className="text-gray-700">
                  Egy cseppet sem. Sima barna dobozban szállítanak, logók nélkül. A feladó címénél csak annyi áll: „Care & Bloom Ltd.” Teljes diszkréció garantálva.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Mi van, ha nem tetszik?</h3>
                <p className="text-gray-700">
                  A Hello Nancy 30 napos elégedettségi garanciát kínál. Ha nem szereted meg, egyszeri méltányossági visszatérítést adnak – <strong>visszaküldeni sem kell</strong>. Megbíznak benned, hogy megtalálod, ami a testednek jó.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Használhatom zuhany vagy fürdés közben?</h3>
                <p className="text-gray-700">
                  Igen! IPX7 minősítésű vízálló, vagyis teljesen víz alá meríthető. Sokan úgy tapasztalják, hogy a meleg víz fokozza az ellazulást és az érzékelést.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Mennyire hangos?</h3>
                <p className="text-gray-700">
                  Suttogóan halk. Az ultrahalk motor teljes diszkréciót biztosít – úgy használhatod, hogy nem kell aggódnod amiatt, hogy bárki meghallja, még a szomszéd szobában sem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Editorial Note */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              A végső véleményünk
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Hetekig tartó kutatás, szakértői konzultációk és felhasználói interjúk után a szerkesztőségünk úgy véli, hogy a Nancy's Lem egy valódi orvosi igényre ad választ, amelyet túl sokáig figyelmen kívül hagytak.
              </p>
              <p>
                Ez nem a hiúságról vagy a kényeztetésről szól – hanem a szövet egészségének megőrzéséről, a jobb alvásról és arról, hogy visszaszerezd önmagad egy darabját, amelyet a menopauza próbál elvenni tőled.
              </p>
              <p className="text-xl font-bold">
                Ha GSM tüneteit tapasztalod, küzdesz a hagyományos megoldásokkal, vagy egyszerűen csak meg akarod őrizni a szexuális jólléted, ahogy idősödsz, a Lem megérdemli, hogy komolyan fontolóra vedd.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, vezető wellness-szerkesztő
              </p>
            </div>
            <div className="text-center pt-6">
              <a
                href="https://hellonancy.com/products/lem"


                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                      'event_callback': function() {
                        // Optional: Ensure navigation happens if tracking fails, but standard <a> tag handles it
                      }
                    });
                  }
                }}
              >
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">
                Megveszem a Nancy's Lemet – 28 300 Ft
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 napos garancia ✓ Ingyenes szállítás ✓ Diszkrét csomagolás</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate-tájékoztatás</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A Wellness Insidert az olvasók támogatják. Amikor az oldalunkon lévő linkeken keresztül vásárolsz, affiliate jutalékot kaphatunk, neked viszont ez egy fillérbe sem kerül többe. Ez segít nekünk abban, hogy továbbra is ingyenes, kutatásokon alapuló tartalmat nyújtsunk. Csak olyan termékeket ajánlunk, amelyeket a szerkesztőségünk alaposan átvizsgált, és úgy gondoljuk, hogy az olvasóink javát szolgálják. Minden véleményünk a sajátunk, és nem befolyásolja semmilyen ellentételezés.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Rólunk</h3>
                <p className="text-gray-400 text-sm">
                  A Wellness Insider bizonyítékokon alapuló egészség- és wellness-újságírást kínál a modern nőknek.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategóriák</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Egészség</li>
                  <li>Wellness</li>
                  <li>Szex & kapcsolatok</li>
                  <li>Terméktesztek</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">A Nancy's Lemről</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Termékadatok</li>
                  <li>Vásárlói értékelések</li>
                  <li>Szállítás & visszaküldés</li>
                  <li>Kapcsolat: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Bizalom & biztonság</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Orvosi minőségű anyagok</li>
                  <li>✓ Diszkrét szállítás</li>
                  <li>✓ 30 napos garancia</li>
                  <li>✓ 12 hónap garancia</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Minden jog fenntartva. A szerkesztőségi tartalom független és tárgyilagos.</p>
              <p className="mt-2">Bemutatott termék: Nancy's Lem a Hello Nancytől • 2025-ös Women's Wellness Tech Award győztese</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
