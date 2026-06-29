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

  useEffect(() => { document.documentElement.lang = "cs"; }, []);

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
    { src: "/PDP.jpg", alt: "Nancy's Lem wellness přístroj" },
    { src: "/PDP-1.jpg", alt: "Lem v každodenním prostředí" },
    { src: "/PDP-2.jpg", alt: "Detail designu Lemu" },
    { src: "/PDP-3.jpg", alt: "Detaily produktu Lem" },
    { src: "/PDP-4.jpg", alt: "Ukázka použití Lemu" },
    { src: "/PDP-5.jpg", alt: "Balení a příslušenství Lemu" },
    { src: "/PDP-6.jpg", alt: "Lem v každodenním životě" },
    { src: "/PDP-7.jpg", alt: "Funkce produktu Lem" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Editorial Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src="/wellness-insider-logo.png"
              alt="Wellness Insider"
              className="h-8 md:h-10"
            />
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium">Zdraví žen, kterému můžeš věřit</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 recenzí) • 1M+ prodaných</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">1 888 Kč</span>
                  <span className="text-sm line-through text-white/70">3 372 Kč</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Ušetři 1 484 Kč</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Končí za {formatTime(timeLeft)}</span>
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
                  Koupit teď
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">ZDRAVÍ A WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">RECENZE PRODUKTU</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Milion orgasmů později: proč ženy po padesátce vyměňují vibrátory za tenhle „citron“
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Zjišťovaly jsme, proč tisíce žen po padesátce mění klasické vibrátory za tenhle „fyzioterapeutický“ přístroj, který vypadá jako citron. A na co jsme přišly?
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Hlavní redaktorka wellness</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Naposledy aktualizováno: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('cs-CZ', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min čtení</span>
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
              <span className="font-bold text-gray-900 mr-1">Poznámka redakce:</span>
              Tento článek obsahuje affiliate odkazy. Pokud přes ně nakoupíš, můžeme získat provizi – pro tebe bez jakéhokoli příplatku. Doporučujeme jen produkty, které jsme důkladně prozkoumaly a otestovaly.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Nancy's Lem wellness přístroj na nočním stolku"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem leží diskrétně na nočním stolku – většina lidí si myslí, že je to dekorativní citron. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> čtenářek si právě teď čte tento článek</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskrétní balení</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Doprava zdarma po celém světě</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Záruka spokojenosti 30 dní</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Záruka 12 měsíců</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proč o tom mluvíme</h2>
          <p className="text-gray-700 leading-relaxed">
            Když naše redakce poprvé zaslechla o „wellness přístroji ve tvaru citronu“, kterým žije celá komunita žen v menopauze, přiznáme se – byly jsme skeptické. Jenže po desítkách rozhovorů se ženami, konzultacích s gynekoložkami a ano, po vlastním testování tomu povyku rozumíme.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tohle není jen další wellness trend. Řeší skutečný zdravotní problém, který se týká milionů žen, ale málokdy se o něm mluví: <strong>atrofii klitorisu</strong> a ztrátu sexuálního zdraví během menopauzy.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Téma, na které nás nikdo nepřipravil</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Slyšíme všechno o návalech horka, kvůli kterým se ve tři ráno potíme do hedvábného povlečení. Slyšíme o mozkové mlze, kvůli které hledáme brýle, zatímco je máme na nose.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Ale nikdo si tě neposadí ke sklence Pinotu a nešeptne ti: „Mimochodem, jestli to tam dole nebudeš udržovat aktivní, tvůj klitoris se může fakt zmenšit.“
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Říká se tomu <strong>atrofie klitorisu</strong> a je součástí genitourinárního syndromu menopauzy (GSM) – stavu, který podle North American Menopause Society postihuje až 50 % žen po menopauze.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„Velké odpojení“</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Pro mnoho žen, se kterými jsme mluvily, nešlo jen o suchost. Šlo o <strong>necitlivost</strong>. Jedna testerka popsala, jak zkoušela svůj starý vibrátor z dob, kdy jí bylo třicet: „Místo příjemného pocitu mě to jen… dráždilo. Nebo bylo necitlivé. Jako kdybych se snažila polechtat mozol.“
            </p>
            <p className="text-gray-700 leading-relaxed">
              Odborníci vysvětlují, že klasické vibrátory fungují na principu tření a tlaku. Když tkáně kvůli nízké hladině estrogenu řídnou, přímé vibrace můžou nervy ve skutečnosti <em>ještě víc otupit</em> – a právě odtud ten „necitlivý“ pocit.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">„Přestaň vibrovat. Začni sát.“</p>
            <p className="text-gray-700">– specialistky na pánevní dno</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynekoložky specializované na péči o ženy v menopauze to vysvětlují: „Když klesne estrogen, sníží se prokrvení pánevní oblasti. To vede k řídnutí tkání, ztrátě pružnosti a snížené citlivosti. Lékaři tomu říkají princip ‚používej, nebo o to přijdeš’ – pro udržení zdraví tkáně potřebuješ stálé prokrvení.“
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A je tu Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A přesně tady přichází na řadu tenhle malý žlutý přístroj. Nancy's Lem se neprodává jako erotická pomůcka – prezentuje se jako wellness přístroj. A po našem průzkumu chápeme proč.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Na rozdíl od klasických vibrátorů, které spoléhají na tření (a to může podrážděnou menopauzální tkáň dráždit), Lem využívá takzvanou <strong>technologii Air Pulse</strong>. Představ si to jako rozdíl mezi třením smirkového papíru o pokožku a jemnou podtlakovou masáží.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Věda: proč technologie Air Pulse funguje</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Klasické vibrátory:</p>
              <p className="text-red-700 text-sm">Spoléhají na povrchové tření, které může podráždit citlivou, ztenčenou tkáň. Mohou způsobit necitlivost nebo mikrotrhliny.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Technologie Air Pulse:</p>
              <p className="text-green-700 text-sm">Vytváří jemné tlakové vlny bez přímého kontaktu. Vtahuje do tkání krev bohatou na kyslík, čímž podporuje zdraví a citlivost.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Funguje to takhle: Lem vytvoří kolem klitorisu jemné těsnění a tlakovými vlnami vzduchu ho stimuluje – napodobuje pocit orálního sexu, ale stálý a neúnavný. Protože nedochází ke tření, není tu ani špetka podráždění.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ale to pravé kouzlo je ve fyzice: ten jemný podtlak vytváří vakuový efekt, který fyzicky vtahuje do tkání hlubokou, na kyslík bohatou krev. Probouzí nervy, které léta spaly.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              „Mám pocit, jako by to ten orgasmus přímo vytahovalo ven… a to pulzování pak drží mnohem dýl.“
            </p>
            <p className="font-semibold text-gray-700">– Alisha, beta testerka (z ověřených zákaznických recenzí)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Jak si vede: naše srovnání</h2>
          <p className="text-center text-gray-600 mb-8">Porovnaly jsme Lem s klasickými řešeními pro zdraví menopauzální tkáně</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Vlastnost</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Klasický vibrátor</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Estrogenový krém</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Vhodný pro citlivou tkáň</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ano</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Může dráždit</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Pomalé výsledky</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Zvyšuje prokrvení</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Hluboká tkáň</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Jen povrchově</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Postupně</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Bez tření a podráždění</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Bez kontaktu</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Způsobuje tření</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Okamžitá slast</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Hned</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Proměnlivá</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Žádná slast</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskrétní design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Vypadá jako citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Nápadný</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Doporučují lékaři</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Pro prokrvení</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Občas</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ano</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Cena</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">1 888 Kč (jednorázově)</td>
                  <td className="border border-gray-300 p-4 text-center">1 200–3 600 Kč</td>
                  <td className="border border-gray-300 p-4 text-center">720–1 200 Kč měsíčně</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design, který říká studu sbohem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jedna věc naši redakci při testování zaujala: design je <em>záměrně</em> diskrétní. Je jasně žlutý, vejde se do dlaně a opravdu vypadá jako dekorativní citron.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„Test nočního stolku“</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Přístroj Lem leží diskrétně na nočním stolku"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Všechny ji známe. Tu <em>zásuvku studu</em>. Tu, kam pod staré ponožky schováváme ty nevzhledné plastové hračky ve tvaru penisu.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Jedna z našich testerek se s námi podělila o tenhle příběh: „Omylem jsem nechala Lem na desce v koupelně, když přijela tchyně na návštěvu. Vzala ho do ruky a povídá: ‚Jé, to je některý z těch nových sonických čističů obličeje? Je tak jemný!’“
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Testem nočního stolku projde bez problémů. Vypadá jako špičková technologie pro péči o sebe, ne jako erotická pomůcka. Protože přesně to je.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Varování před levnými napodobeninami</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Po zveřejnění naší první recenze se čtenářky ptaly, proč si radši nepořídit některou z těch „levných napodobenin“ z Amazonu. Tady je, co na to říkají lékaři.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              „Levné hračky používají porézní materiály typu jelly nebo TPE,“ varovala. „V pórech se zachytávají mikroskopické bakterie, což je obrovské riziko pro ženy v menopauze, které už tak bývají náchylné k zánětům močových cest.“
            </p>
            <p className="text-red-900 font-bold mt-3">
              Lem od Hello Nancy je ze 100 % zdravotnického, neporézního silikonu. Neriskuj své zdraví kvůli pár ušetřeným korunám.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Tichý jako šepot</h3>
                <p className="text-gray-600 text-sm">
                  Ultra tichý motorek pro naprostou diskrétnost
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vodotěsný (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Ideální do vany i do sprchy
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Zdravotnický silikon</h3>
                <p className="text-gray-600 text-sm">
                  Zdravotně nezávadný, neporézní, snadno se čistí
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetické nabíjení</h3>
                <p className="text-gray-600 text-sm">
                  120 minut na jedno nabití
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galerie produktu</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rozbalování: první dojem rozhoduje</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Zážitek z rozbalování Lemu"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jedna z prvních věcí, kterých si naše testerky všimly? Balení je <em>elegantní</em>. Žádné křiklavé barvy, žádné trapné obrázky. Krabička je minimalisticky bílá s jemnými zlatými detaily – klidně by se dala splést s luxusním produktem péče o pleť.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Co je uvnitř krabičky:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Přístroj Lem (jasně žlutý, do dlaně)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetický nabíjecí USB kabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Měkký sametový sáček na uložení (ideální na cesty)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>„Manuál sebelásky“ s tipy na použití a wellness radami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Stručný návod s ilustrovanými pokyny</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                „Když jsem krabičku otevřela, byla jsem fakt překvapená, jak <strong>prémiově</strong> všechno působilo. Nepřišlo mi to jako ‚erotická pomůcka’ – přišlo mi to jako investice do wellness.“ – testerka, 54 let
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Trocha anatomie: proč na stimulaci klitorisu záleží</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Anatomický průřez klitorisu"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Věda o slasti</h3>
                <p className="text-gray-600 text-sm">Co by každá žena měla o svém těle vědět</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tohle ve škole na výchově ke zdraví neučí: klitoris má přibližně <strong>8 000 nervových zakončení</strong> – víc než kterákoli jiná část lidského těla, mužského i ženského. Pro srovnání, penis jich má kolem 4 000.
              </p>
              <p>
                Ale je tu háček: <strong>75 % žen nedokáže dosáhnout orgasmu jen pomocí penetrace</strong>, jak uvádí výzkum publikovaný v Journal of Sex & Marital Therapy. Klíčem je klitoris.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Co se děje během menopauzy:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Srovnání prokrvení před menopauzou a po ní"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problém:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Hladina estrogenu klesne o 90 %</li>
                      <li>• Sníží se prokrvení pánevní oblasti</li>
                      <li>• Tkáň klitorisu se může zmenšit o 20–30 %</li>
                      <li>• Sníží se citlivost nervů</li>
                      <li>• Sníží se přirozená lubrikace</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Řešení:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Pravidelná stimulace udržuje prokrvení</li>
                      <li>• Drží nervové dráhy aktivní</li>
                      <li>• Předchází atrofii tkáně</li>
                      <li>• Udržuje citlivost</li>
                      <li>• Podporuje přirozenou lubrikaci</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynekoložky to říkají bez obalu: „Ber to jako cvičení pro pánevní dno. Když ty svaly nepoužíváš a neudržuješ prokrvení, atrofují. Stejný princip platí pro tkáň klitorisu.“
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Závěr:</p>
                <p className="text-gray-700">
                  Pravidelná stimulace klitorisu není jen o slasti (i když ta je příjemný bonus). Jde o udržení zdraví tkáně, zachování funkce nervů a předcházení nevratným změnám, které přicházejí se zanedbáním. Tohle je <em>preventivní péče o zdraví</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">„A co můj partner?“ Na to jsme se taky ptaly</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">„Tříminutový zázrak“ (a proč ho partneři milují)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buďme upřímné: spoustě žen po padesátce může trvat 20 minut i víc (a pořádnou porci soustředění), než se vůbec přiblíží vyvrcholení. S Lemem? <strong className="text-[#FF1493]">Tři minuty.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Největší námitka, kterou ženy mají:</strong> „Nebude se můj partner cítit nahrazený?“
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Vůbec ne.</strong> Lem je maličký. Spousta párů ho používá <em>během</em> milování. Funguje jako „most“, který zajistí, že jsi plně vzrušená a přirozeně zvlhčená, a sundá z partnera tlak, že musí „podávat výkon“.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Jedna testerka nám řekla: „Proměnilo to naši ložnici z místa úzkosti zpátky v hřiště.“
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Jedna z nejčastějších otázek, které jsme během průzkumu dostávaly: <em>„Nebude se kvůli tomu můj partner cítit ohrožený?“</em>
              </p>
              <p>
                Tady je, co jsme zjistily: <strong>Lem není náhrada – je to obohacení.</strong> Spousta párů, se kterými jsme mluvily, uvedla, že zapojení Lemu do jejich intimních chvil ve skutečnosti <em>zlepšilo</em> jejich blízkost.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  „Můj manžel byl zvědavý, ne ohrožený. Teď ho na mně používá při předehře. Sundá to z něj tlak, že musí ‚podávat výkon’, a já dostanu přesně to, co potřebuju. Vyhrávají oba.“
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, 28 let vdaná</p>
              </div>
              <p>
                Díky kompaktní velikosti se snadno zapojí do společných chvil, aniž by překážel. A protože po nasazení drží sám, s volnýma rukama, oba se můžete plně soustředit jeden na druhého.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Jak páry Lem používají:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Při předehře</p>
                    <p className="text-sm text-gray-600">Partner ho drží na místě, zatímco líbá a hladí</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Při milování</p>
                    <p className="text-sm text-gray-600">Umístěný pro současnou stimulaci klitorisu i penetraci</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Sama, zatímco se partner dívá</p>
                    <p className="text-sm text-gray-600">Buduje blízkost a pomáhá partnerovi zjistit, co ti dělá dobře</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">„Údržba“ mezi milováním</p>
                    <p className="text-sm text-gray-600">Použití o samotě udržuje tkáň zdravou, když společný sex není tak častý</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Komunikace je klíčová. Vnímej ho jako wellness pomůcku, ze které těží <em>oba</em> – snižuje tlak a zvyšuje slast.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tisíc důvodů to zkusit a ani jeden se bát</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Prozkoumaly jsme záruky Hello Nancy. Tady je, co skutečně znamenají.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">„Záruka slasti“ na 30 dní</h3>
                <p className="text-sm text-gray-700 text-center">
                  Nejsi spokojená? Dostaneš <strong>plnou náhradu</strong> – bez nutnosti cokoli posílat zpět. Věří ti, že budeš upřímná. Tak moc jsou si jistí.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Jinými slovy: nulové finanční riziko. Zkus to na měsíc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Záruka 12 měsíců</h3>
                <p className="text-sm text-gray-700 text-center">
                  Pokud se s přístrojem během prvního roku cokoli pokazí, vymění ho. Zdarma. Bez ptaní.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Jinými slovy: tohle není jednorázový gadget. Je stavěný na dlouho.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Podpora napořád</h3>
                <p className="text-sm text-gray-700 text-center">
                  Otázky k použití? Nejistota ohledně čištění? Jejich zákaznická péče odpovídá do 24 hodin.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Jinými slovy: nekupuješ si produkt. Stáváš se součástí komunity.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Skutečná otázka: co můžeš ztratit?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Probraly jsme vědu. Ukázaly jsme ti recenze. Vysvětlily jsme záruky. V tuhle chvíli je jediné riziko to <em>nezkusit</em>.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Pojďme to spočítat:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Když to zkusíš:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Možná znovu objevíš slast, o které sis myslela, že je pryč</li>
                      <li>✓ Můžeš zlepšit zdraví tkáně a předejít atrofii</li>
                      <li>✓ Můžeš líp spát (orgasmus uvolňuje oxytocin)</li>
                      <li>✓ V nejhorším případě: dostaneš zpět svých 1 888 Kč</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Když to nezkusíš:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Atrofie tkáně pokračuje</li>
                      <li>• Citlivost nervů dál klesá</li>
                      <li>• Sexuální zdraví zůstává trápením</li>
                      <li>• Vždycky budeš přemýšlet „co kdyby?“</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Proč Hello Nancy má naši důvěru</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Produkty nedoporučujeme jen tak. Tady je, proč Hello Nancy prošlo našimi redakčními standardy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Oceněný</h3>
              <p className="text-sm text-gray-600">Cena Women's Wellness Tech Award 2025 od International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ověřené recenze</h3>
              <p className="text-sm text-gray-600">Průměr 4,7★ od 14 907 ověřených zákaznic (žádné falešné recenze)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ prodaných</h3>
              <p className="text-sm text-gray-600">Přes 1 000 000 prodaných kusů po celém světě od uvedení na trh v roce 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Zdravotnická kvalita</h3>
              <p className="text-sm text-gray-600">Zdravotnický silikon, přísné bezpečnostní testování</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Psali o nás:</h3>
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
            Co říkají ověřené zákaznice
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 z 5 (14 907 ověřených recenzí)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Lepší než estrogenový krém“</p>
                <p className="text-gray-700 italic">
                  „Nekoupila jsem si to pro ‚zábavu’, koupila jsem si to, protože doktorka říkala, že potřebuju prokrvení. Ale teda. Díky tomu uvolnění prospím celou noc, aniž bych se budila zpocená. Je to můj nový vitamín.“
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Ověřený nákup</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Probudilo to mé tělo“</p>
                <p className="text-gray-700 italic">
                  „Předtím jsem zkoušela Lelo Sona, ale na mě byl moc silný. Lem je dost jemný na mou citlivost, ale dost hluboký na to, aby fakt fungoval. 10/10.“
                </p>
                <p className="font-semibold text-gray-900">– Carly, ověřená zákaznice</p>
                <p className="text-xs text-gray-500">✓ Ověřený nákup</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Úplně jsem propadla“</p>
                <p className="text-gray-700 italic">
                  „Úplně jsem propadla. Lem saje a vtahuje tím nejdivočejším způsobem. Když vyvrcholíš, máš pocit, jako by to ten orgasmus přímo vytahovalo ven, a to pulzování pak drží mnohem dýl. Tak strašně dobrý!“
                </p>
                <p className="font-semibold text-gray-900">– Alisha, beta testerka</p>
                <p className="text-xs text-gray-500">✓ Ověřený nákup</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Mění to všechno“</p>
                <p className="text-gray-700 italic">
                  „Jako někdo, kdo si u intimních produktů zakládá na diskrétnosti, nemohla jsem si vybrat líp. Funkce sání je úplně jiná než cokoli, co jsem zkoušela předtím.“
                </p>
                <p className="font-semibold text-gray-900">– Maxine, ověřená zákaznice</p>
                <p className="text-xs text-gray-500">✓ Ověřený nákup</p>
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
              Náš verdikt: stojí to za tu investici
            </h2>
            <p className="text-center text-xl text-gray-600">
              Po důkladném testování a průzkumu naše redakce Nancy's Lem vřele doporučuje ženám, které procházejí menopauzálními změnami tkáně.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">Ušetři 1 484 Kč</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ ČASOVĚ OMEZENÁ NABÍDKA PRO ČTENÁŘKY ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Nabídka vyprší za:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem stimulátor klitorisu</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">1 888 Kč</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">3 372 Kč</span>
                      <span className="text-sm text-green-600 font-bold">Ušetři 1 484 Kč (sleva 44 %)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Jen 5 Kč denně</strong> při ročním používání
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Méně než tvoje denní kafe. Vydrží roky.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 TIP PRO ČTENÁŘKY: Zadej u pokladny kód <span className="font-bold text-[#FF1493]">TIFFANY</span> nebo <span className="font-bold text-[#FF1493]">ISABELLA</span> a čeká tě překvapení navíc!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem stimulátor klitorisu (jasně žlutý)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Manuál sebelásky a návod k použití</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetický nabíjecí kabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Sametový sáček na cesty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Doprava zdarma po celém světě</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">„Záruka slasti“ na 30 dní</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Záruka 12 měsíců</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Koupit teď – 1 888 Kč (ušetři 1 484 Kč)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Záruka bez rizika
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30denní záruka vrácení peněz. Pokud si to nezamiluješ, dostaneš plnou náhradu – <strong>bez nutnosti cokoli vracet</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diskrétní balení</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Odesíláme do 24 h</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Bezpečná pokladna</span>
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
            Je Lem ten pravý pro tebe?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tisíce žen po padesátce říkají „ano“. Podívej se, jestli se v něčem z toho nepoznáváš:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem je pro tebe, pokud:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Bojuješ s vaginální suchostí nebo bolestivým milováním</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Zažíváš sníženou citlivost nebo máš potíže dosáhnout orgasmu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Řešíš atrofii klitorisu nebo řídnutí tkáně</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Klasické vibrátory ti přijdou moc tvrdé nebo dráždivé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chceš si s přibývajícím věkem udržet zdraví tkáně</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hledáš diskrétní wellness přístroj (ne nápadnou „hračku“)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vyhýbáš se hormonální substituční terapii nebo ji chceš doplnit</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Jsi připravená získat zpět své sexuální zdraví a sebevědomí</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Lem si obzvlášť zamiluješ, pokud:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Dáváš přednost <strong>wellness podloženému vědou</strong> před trikem</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chceš <strong>preventivní péči</strong>, ne jen řešení příznaků</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Už máš dost produktů, které <strong>na zralé tělo nefungují</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Oceníš <strong>promyšlený design</strong>, který respektuje tvé soukromí</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Jsi ochotná <strong>investovat do sebe</strong> (jen 5 Kč denně při ročním používání!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chceš <strong>výsledky bez vedlejších účinků</strong> a bez receptu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Už nehodláš dál přijímat, že <strong>„prostě to tak teď je“</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Pokud jsi zaškrtla aspoň 3 z těchto bodů,</strong> Lem byl navržený přesně pro tebe.
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
                  Ano, to jsem já – koupit teď
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
            Tvé otázky, naše odpovědi
          </h2>
          <p className="text-center text-gray-600 mb-12">Zeptaly jsme se Hello Nancy na to, co naše čtenářky chtěly vědět</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Bude to bolet, když jsem citlivá nebo mám atrofii?</h3>
                <p className="text-gray-700">
                  Vůbec ne. Protože využívá podtlak vzduchu místo přímé kontaktní vibrace, vyhýbá se tření, které způsobuje bolest. Můžeš začít na nejnižším z 12 stupňů a jemně se propracovat výš. Je navržený přímo tak, aby byl šetrný k jemné tkáni.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Není balení trapné?</h3>
                <p className="text-gray-700">
                  Ani trochu. Posílají ho v obyčejných hnědých krabicích bez log. Jako adresa odesílatele je uvedeno jen „Care & Bloom Ltd.“. Naprostá diskrétnost zaručena.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Co když mi to nebude vyhovovat?</h3>
                <p className="text-gray-700">
                  Hello Nancy nabízí záruku spokojenosti na 30 dní. Pokud si to nezamiluješ, vrátí ti peníze – <strong>bez nutnosti cokoli posílat zpátky</strong>. Věří ti, že najdeš to, co tvému tělu sedí.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Můžu ho používat ve sprše nebo ve vaně?</h3>
                <p className="text-gray-700">
                  Ano! Má certifikaci vodotěsnosti IPX7, takže ho můžeš celý ponořit. Spousta žen si pochvaluje, že teplá voda celý zážitek i uvolnění ještě umocní.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Jak je hlučný?</h3>
                <p className="text-gray-700">
                  Tichý jako šepot. Ultra tichý motorek zajišťuje naprostou diskrétnost – můžeš ho používat, aniž by ses bála, že tě někdo uslyší, i ve vedlejší místnosti.
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
              Naše finální slovo
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Po týdnech průzkumu, konzultacích s odbornicemi a rozhovorech s uživatelkami naše redakce věří, že Nancy's Lem řeší skutečnou zdravotní potřebu, kterou jsme příliš dlouho přehlížely.
              </p>
              <p>
                Tohle není o marnivosti ani o rozmazlování – jde o udržení zdraví tkáně, zlepšení kvality spánku a znovuzískání části sebe, kterou se ti menopauza snaží vzít.
              </p>
              <p className="text-xl font-bold">
                Pokud zažíváš příznaky GSM, trápíš se s klasickými řešeními nebo si prostě chceš udržet sexuální zdraví i s přibývajícím věkem, Lem rozhodně stojí za vyzkoušení.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, hlavní redaktorka wellness
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
                Koupit Nancy's Lem – 1 888 Kč
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ záruka 30 dní ✓ doprava zdarma ✓ diskrétní balení</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate prohlášení</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider funguje díky podpoře svých čtenářek. Když nakoupíš přes odkazy na našem webu, můžeme získat affiliate provizi – pro tebe bez jakéhokoli příplatku. Díky tomu pro vás můžeme dál tvořit bezplatný obsah podložený výzkumem. Doporučujeme jen produkty, které naše redakce důkladně prověřila a věří, že našim čtenářkám prospějí. Všechny názory jsou naše vlastní a žádná odměna je neovlivnila.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">O nás</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider přináší moderním ženám zdravotní a wellness žurnalistiku podloženou důkazy.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorie</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Zdraví</li>
                  <li>Wellness</li>
                  <li>Sex a vztahy</li>
                  <li>Recenze produktů</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">O Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Detaily produktu</li>
                  <li>Zákaznické recenze</li>
                  <li>Doprava a vrácení</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Důvěra a bezpečí</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materiály zdravotnické kvality</li>
                  <li>✓ Diskrétní doprava</li>
                  <li>✓ Záruka 30 dní</li>
                  <li>✓ Záruka 12 měsíců</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Všechna práva vyhrazena. Redakční obsah je nezávislý a objektivní.</p>
              <p className="mt-2">Představený produkt: Nancy's Lem od Hello Nancy • Vítěz Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
