import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeNO() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "nb"; }, []);

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
    { src: "/PDP.jpg", alt: "Velværeapparatet Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "Lem i et hverdagslig miljø" },
    { src: "/PDP-2.jpg", alt: "Nærbilde av designet på Lem" },
    { src: "/PDP-3.jpg", alt: "Detaljer på Lem" },
    { src: "/PDP-4.jpg", alt: "Lem i bruk" },
    { src: "/PDP-5.jpg", alt: "Emballasje og tilbehør til Lem" },
    { src: "/PDP-6.jpg", alt: "Lem i et hverdagsbilde" },
    { src: "/PDP-7.jpg", alt: "Egenskapene til Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Kvinnehelse du kan stole på</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 anmeldelser) • 1 mill.+ solgt</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">SPAR 61 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Slutter om {formatTime(timeLeft)}</span>
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
                  Kjøp nå
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">HELSE OG VELVÆRE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUKTTEST</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Over en million orgasmer senere: derfor dropper kvinner over 50 vibratoren til fordel for denne «sitronen»
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Vi undersøkte hvorfor tusenvis av kvinner over 50 dropper den vanlige vibratoren til fordel for dette «fysioterapi»-apparatet som ser ut som en sitron. Her er det vi fant.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Av Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Seniorredaktør for velvære</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Sist oppdatert: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('nb-NO', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min lesetid</span>
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
              <span className="font-bold text-gray-900 mr-1">Fra redaksjonen:</span>
              Denne artikkelen inneholder affiliatelenker. Vi kan tjene en provisjon hvis du kjøper via dem, uten at det koster deg noe ekstra. Vi anbefaler bare produkter vi har undersøkt og testet grundig.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Velværeapparatet Nancy's Lem på nattbordet"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem står diskré på nattbordet – de fleste tror det er en pyntesitron. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('nb-NO')}</strong> lesere ser på denne artikkelen akkurat nå</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskré emballasje</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Gratis frakt over hele verden</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 dagers fornøydhetsgaranti</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 måneders garanti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hvorfor vi snakker om dette</h2>
          <p className="text-gray-700 leading-relaxed">
            Da redaksjonen vår først hørte om et «velværeapparat formet som en sitron» som tok overgangsalder-miljøet med storm, må vi innrømme at vi var skeptiske. Men etter å ha intervjuet dusinvis av kvinner, snakket med gynekologer og, jo da, testet det selv, skjønner vi hypen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dette er ikke bare nok en velværetrend. Det handler om et reelt medisinsk problem som rammer millioner av kvinner, men som det sjelden snakkes om: <strong>klitorisatrofi</strong> og tap av seksuell velvære i overgangsalderen.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Praten ingen advarte oss om</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vi får høre alt om hetetoktene som gjør at vi svetter gjennom silkelakenet klokka tre om natta. Vi får høre om hjernetåka som får oss til å lete etter brillene mens de sitter på nesa.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Men ingen setter seg ned med et glass pinot og hvisker: «Forresten, du – holder du ikke litt liv der nede, kan klitoris faktisk krympe.»
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det kalles <strong>klitorisatrofi</strong>, og er en del av det som heter genitourinært syndrom i overgangsalderen (GSM) – en tilstand som rammer opptil 50 % av kvinner etter overgangsalderen, ifølge North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«Den store frakoblingen»</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For mange av kvinnene vi intervjuet, var det ikke bare tørrheten. Det var <strong>nummenheten</strong>. En av testpersonene beskrev hvordan det var å prøve den gamle vibratoren fra trettiåra: «I stedet for å føles godt, føltes det bare … irriterende. Eller numment. Som å prøve å kile en hard hud.»
            </p>
            <p className="text-gray-700 leading-relaxed">
              Medisinske eksperter forklarer at vanlige vibratorer virker gjennom friksjon og trykk. Når vevet blir tynnere på grunn av lavt østrogen, kan direkte vibrasjon faktisk <em>gjøre nervene enda mindre følsomme</em>, og dermed forsterke den «nummen» følelsen.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">«Slutt å vibrere. Begynn å suge.»</p>
            <p className="text-gray-700">– Spesialister på bekkenbunn</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynekologer som er spesialister på overgangsalderen, forklarer det slik: «Når østrogenet synker, blir blodtilførselen til underlivet dårligere. Det fører til tynnere vev, mindre elastisitet og redusert følsomhet. I medisinen kaller vi det «bruk det eller mist det»-prinsippet – du trenger jevn blodtilførsel for å holde vevet sunt.»
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Her kommer Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det er her dette lille gule apparatet kommer inn. Nancy's Lem markedsføres ikke som et sexleketøy – det presenteres som et velværeapparat. Og etter undersøkelsene våre skjønner vi hvorfor.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I motsetning til vanlige vibratorer, som er avhengige av friksjon (som kan irritere tynt vev i overgangsalderen), bruker Lem noe som heter <strong>lufttrykksteknologi</strong>. Tenk på det som forskjellen mellom å gni sandpapir mot huden og å få en mild sugemassasje.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Forskningen: derfor virker lufttrykksteknologi</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vanlige vibratorer:</p>
              <p className="text-red-700 text-sm">Er avhengige av overflatefriksjon som kan irritere sensitivt, tynt vev. Kan gi nummenhet eller små rifter.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Lufttrykksteknologi:</p>
              <p className="text-green-700 text-sm">Lager milde sugebølger uten direkte kontakt. Trekker oksygenrikt blod inn i vevet og fremmer både helse og følsomhet.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Slik virker det: Lem lager en mild forsegling rundt klitoris og bruker bølger av lufttrykk til å stimulere den – den etterligner følelsen av oralsex, men jevnt og utrettelig. Siden det ikke er noe gnissing, er det null irritasjon.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Men den virkelige magien ligger i fysikken: den milde sugingen skaper en vakuumeffekt som fysisk trekker dypt, oksygenrikt blod inn i vevet. Den vekker nerver som har ligget i dvale i årevis.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              «Det føles som om den trekker orgasmen rett ut av deg … og holder bankingen i gang mye lenger.»
            </p>
            <p className="font-semibold text-gray-700">– Alisha, betatester (fra verifiserte kundeanmeldelser)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Slik måler det seg: vår sammenligning</h2>
          <p className="text-center text-gray-600 mb-8">Vi sammenlignet Lem med tradisjonelle løsninger for vevshelse i overgangsalderen</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Egenskap</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vanlig vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Østrogenkrem</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Egnet for sensitivt vev</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ja</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kan irritere</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Trege resultater</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Øker blodtilførselen</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Dypt i vevet</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Bare på overflaten</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradvis</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ingen friksjon eller irritasjon</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Null kontakt</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Gir friksjon</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Nytelse med en gang</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Umiddelbart</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Varierende</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ingen nytelse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskré design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ser ut som en sitron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Åpenbart</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Anbefalt av leger</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ For blodtilførselen</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Av og til</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Pris</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (engangskjøp)</td>
                  <td className="border border-gray-300 p-4 text-center">45–135 €</td>
                  <td className="border border-gray-300 p-4 text-center">28–45 € i måneden</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designfilosofien «uten skam»</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Én ting slo redaksjonen vår under testingen: designet er <em>bevisst</em> diskré. Det er knallgult, får plass i håndflaten og ser faktisk ut som en pyntesitron.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«Nattbordtesten»</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Lem-apparatet står diskré på nattbordet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Vi har alle den skuffen. <em>Skamskuffen</em>. Der vi gjemmer de stygge, fallosformede plastapparatene under gamle sokker.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              En av testpersonene våre fortalte oss dette: «Jeg glemte igjen Lem på baderomsbenken da svigermor var på besøk. Hun plukket den opp og sa: ‘Å, er dette en av de nye soniske ansiktsbørstene? Den er jo så myk!’»
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Den består nattbordtesten. Den ser ut som eksklusiv velværeteknologi, ikke et sexleketøy. For det er akkurat det den er.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Advarsel mot billige kopier</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Etter at vi publiserte den første testen vår, spurte lesere hvorfor de ikke bare burde kjøpe versjonen til noen euro på Amazon. Her er hva de medisinske ekspertene sier.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              «Billige leketøy bruker porøse materialer av gelé eller TPE», advarte hun. «Mikroskopiske bakterier setter seg fast i porene, og det er en stor risiko for kvinner i overgangsalderen, som allerede er mer utsatt for urinveisinfeksjoner.»
            </p>
            <p className="text-red-900 font-bold mt-3">
              Lem fra Hello Nancy er 100 % porefri silikon av medisinsk kvalitet. Ikke sett helsa på spill for å spare noen euro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Hviskestille</h3>
                <p className="text-gray-600 text-sm">
                  Ekstra stillegående motor for full diskresjon
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vanntett (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfekt til bruk i badekaret eller dusjen
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medisinsk silikon</h3>
                <p className="text-gray-600 text-sm">
                  Kroppsvennlig, porefri og lett å rengjøre
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetisk lading</h3>
                <p className="text-gray-600 text-sm">
                  120 minutter på én lading
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Produktgalleri</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Å åpne pakken: førsteinntrykket teller</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Å pakke opp Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                En av de første tingene testpersonene våre la merke til? Emballasjen er <em>elegant</em>. Ingen skrikende farger, ingen pinlige bilder. Esken er minimalistisk og hvit med diskré gulldetaljer – den kunne lett blitt forvekslet med et eksklusivt hudpleieprodukt.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Dette ligger i esken:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Selve Lem-apparatet (knallgult, på størrelse med en håndflate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetisk USB-ladekabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Myk oppbevaringspose i fløyel (perfekt på reise)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>«Egenkjærlighetsguide» med brukstips og velværeråd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hurtigstartguide med illustrerte instruksjoner</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                «Da jeg åpnet esken, ble jeg oppriktig overrasket over hvor <strong>eksklusivt</strong> alt føltes. Det føltes ikke som et ‘sexleketøy’ – det føltes som en investering i velvære.» – Testbruker, 54 år
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">La oss snakke anatomi: hvorfor klitorisstimulering betyr noe</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Tverrsnittdiagram av klitoris-anatomien"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Nytelsens vitenskap</h3>
                <p className="text-gray-600 text-sm">Det enhver kvinne bør vite om kroppen sin</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Her er noe de ikke lærte oss på skolen: klitoris har rundt <strong>8000 nerveender</strong> – flere enn noen annen del av menneskekroppen, hos kvinner og menn. Til sammenligning har penis omtrent 4000.
              </p>
              <p>
                Men her er haken: <strong>75 % av kvinner får ikke orgasme av penetrering alene</strong>, ifølge forskning publisert i Journal of Sex & Marital Therapy. Klitoris er nøkkelen.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Hva som skjer i overgangsalderen:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Sammenligning av blodtilførselen før og etter overgangsalderen"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problemet:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Østrogennivået faller med 90 %</li>
                      <li>• Blodtilførselen til underlivet blir dårligere</li>
                      <li>• Klitorisvevet kan krympe med 20–30 %</li>
                      <li>• Nervefølsomheten avtar</li>
                      <li>• Den naturlige fuktigheten minker</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Løsningen:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Jevnlig stimulering opprettholder blodtilførselen</li>
                      <li>• Holder nervebanene aktive</li>
                      <li>• Forebygger atrofi i vevet</li>
                      <li>• Bevarer følsomheten</li>
                      <li>• Fremmer naturlig fuktighet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynekologer sier det rett ut: «Tenk på det som trening for bekkenbunnen. Bruker du ikke de musklene og holder blodtilførselen oppe, svinner de hen. Det samme prinsippet gjelder klitorisvevet.»
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Kort sagt:</p>
                <p className="text-gray-700">
                  Jevnlig klitorisstimulering handler ikke bare om nytelse (selv om det er en fin bonus). Det handler om å holde vevet sunt, bevare nervefunksjonen og forebygge de uopprettelige endringene som kommer av å la det ligge brakk. Dette er <em>forebyggende helse</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">«Men hva med partneren min?» Det lurte vi også på</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">«3-minuttersmirakelet» (og hvorfor partnere elsker det)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La oss være ærlige: for mange kvinner over 50 kan det ta over 20 minutter (og mye mental gymnastikk) bare å nærme seg klimaks. Med Lem? <strong className="text-[#FF1493]">Tre minutter.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Den største innvendingen kvinner har:</strong> «Vil partneren min føle seg erstattet?»
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolutt ikke.</strong> Lem er bitteliten. Mange par bruker den <em>under</em> samleiet. Den fungerer som en «bro» som sørger for at du blir skikkelig tent og naturlig fuktig, og tar bort presset partneren din kjenner på å «prestere».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                En testperson fortalte oss: «Den gjorde soverommet vårt om fra et sted med angst til en lekeplass igjen.»
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Et av de vanligste spørsmålene vi fikk under undersøkelsene: <em>«Vil partneren min føle seg truet av dette?»</em>
              </p>
              <p>
                Her er det vi fant: <strong>Lem er ingen erstatning – den er et tillegg.</strong> Mange av parene vi intervjuet, fortalte at det å ta Lem inn i samlivet faktisk <em>styrket</em> forbindelsen dem imellom.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  «Mannen min var nysgjerrig, ikke truet. Nå bruker han den på meg i forspillet. Det tar bort presset for ham om å ‘prestere’, og jeg får akkurat det jeg trenger. Vinn-vinn.»
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, gift i 28 år</p>
              </div>
              <p>
                Den kompakte størrelsen gjør den enkel å ta med i samspillet uten at den er i veien. Og siden den er håndfri når den først er på plass, kan begge konsentrere seg om hverandre.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Slik bruker par Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">I forspillet</p>
                    <p className="text-sm text-gray-600">Partneren holder den på plass mens dere kysser og tar på hverandre</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under samleiet</p>
                    <p className="text-sm text-gray-600">Plassert for samtidig stimulering av klitoris og ved penetrering</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Alene mens partneren ser på</p>
                    <p className="text-sm text-gray-600">Skaper nærhet og hjelper partneren å lære hva som funker for deg</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">«Vedlikehold» mellom øktene</p>
                    <p className="text-sm text-gray-600">Bruk alene holder vevet sunt når sex med partner ikke er så hyppig</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tips:</strong> God kommunikasjon er nøkkelen. Se på den som et velværeverktøy som er bra for <em>begge</em>, fordi den tar bort presset og øker nytelsen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Alle grunner til å prøve, ingen til å bekymre deg</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Vi gikk garantiene til Hello Nancy etter i sømmene. Her er hva de faktisk betyr.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 dagers «nytelsesgaranti»</h3>
                <p className="text-sm text-gray-700 text-center">
                  Ikke fornøyd? Du får <strong>pengene tilbake</strong> – uten å måtte sende noe i retur. De stoler på at du er ærlig. Så trygge er de.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Med andre ord: null økonomisk risiko. Prøv den i en måned.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 måneders garanti</h3>
                <p className="text-sm text-gray-700 text-center">
                  Skjer det noe med apparatet det første året, bytter de det. Gratis. Uten spørsmål.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Med andre ord: dette er ingen engangsdings. Den er laget for å vare.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Støtte for alltid</h3>
                <p className="text-sm text-gray-700 text-center">
                  Spørsmål om bruk? Lurer du på rengjøring? Kundeteamet deres svarer innen 24 timer.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Med andre ord: du kjøper ikke et produkt. Du blir en del av et fellesskap.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Det egentlige spørsmålet: hva har du å tape?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Vi har gått gjennom forskningen. Vi har vist deg anmeldelsene. Vi har forklart garantiene. På dette punktet er den eneste risikoen å <em>ikke</em> prøve den.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">La oss regne litt:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Hvis du prøver den:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Kanskje gjenoppdager du en nytelse du trodde var borte</li>
                      <li>✓ Kan bedre vevshelsen og forebygge atrofi</li>
                      <li>✓ Kanskje du sover bedre (orgasmer frigjør oksytocin)</li>
                      <li>✓ I verste fall: du får tilbake de 77,95 €</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Hvis du lar være:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Atrofien i vevet fortsetter</li>
                      <li>• Nervefølsomheten avtar videre</li>
                      <li>• Den seksuelle velværen forblir en kamp</li>
                      <li>• Du vil alltid lure på «hva om?»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Derfor stoler vi på Hello Nancy</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Vi anbefaler ikke produkter i hytt og vær. Her er hvorfor Hello Nancy besto de redaksjonelle kravene våre.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prisbelønt</h3>
              <p className="text-sm text-gray-600">Women's Wellness Tech Award 2025 fra International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verifiserte anmeldelser</h3>
              <p className="text-sm text-gray-600">4,7★ i snitt fra 14 907 verifiserte kjøpere (ingen falske anmeldelser)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1 mill.+ solgt</h3>
              <p className="text-sm text-gray-600">Over 1 000 000 solgte enheter verden over siden lanseringen i 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medisinsk kvalitet</h3>
              <p className="text-sm text-gray-600">Silikon av medisinsk kvalitet og grundig sikkerhetstesting</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Omtalt i:</h3>
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
            Hva verifiserte kjøpere sier
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 av 5 (14 907 verifiserte anmeldelser)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Bedre enn østrogenkrem»</p>
                <p className="text-gray-700 italic">
                  «Jeg kjøpte den ikke for ‘moro skyld’, jeg kjøpte den fordi legen min sa jeg trengte blodtilførsel. Men jøss. Utløsningen hjelper meg å sove gjennom natta uten å våkne svett. Den er min nye vitamin.»
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verifisert kjøp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Vekket kroppen min»</p>
                <p className="text-gray-700 italic">
                  «Jeg prøvde Lelo Sona før, men den var for sterk for meg. Lem er mild nok for min følsomhet, men kraftig nok til faktisk å virke. 10 av 10.»
                </p>
                <p className="font-semibold text-gray-900">- Carly, verifisert kjøper</p>
                <p className="text-xs text-gray-500">✓ Verifisert kjøp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Jeg er helt hekta»</p>
                <p className="text-gray-700 italic">
                  «Jeg er helt hekta. Lem suger og trekker på den villeste måten. Når du kommer, føles det som om den trekker orgasmen rett ut, og holder bankingen i gang mye lenger. Skikkelig deilig!»
                </p>
                <p className="font-semibold text-gray-900">- Alisha, betatester</p>
                <p className="text-xs text-gray-500">✓ Verifisert kjøp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Forandret alt»</p>
                <p className="text-gray-700 italic">
                  «Som en som setter diskresjon høyt i intime produkter, kunne ikke valget vært mer perfekt. Sugefunksjonen er ulik alt jeg har prøvd før.»
                </p>
                <p className="font-semibold text-gray-900">- Maxine, verifisert kjøper</p>
                <p className="text-xs text-gray-500">✓ Verifisert kjøp</p>
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
              Vår dom: verdt investeringen
            </h2>
            <p className="text-center text-xl text-gray-600">
              Etter grundig testing og research gir redaksjonen vår Nancy's Lem en klar anbefaling til kvinner som opplever vevsendringene som følger med overgangsalderen.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">SPAR 61 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ TIDSBEGRENSET LESERTILBUD ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Tilbudet utløper om:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem klitorisstimulator</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Spar 61 € (44 % rabatt)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Bare 0,21 € dagen</strong> gjennom ett års bruk
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Mindre enn den daglige kaffen din. Varer i årevis.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LESERTIPS: bruk koden <span className="font-bold text-[#FF1493]">TIFFANY</span> eller <span className="font-bold text-[#FF1493]">ISABELLA</span> i kassen for en ekstra overraskelse!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem klitorisstimulator (knallgul)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Egenkjærlighetsguide og bruksanvisning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetisk ladekabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Reisepose i fløyel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Gratis frakt over hele verden</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 dagers «nytelsesgaranti»</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 måneders garanti</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Kjøp nå - 77,95 € (Spar 61 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garanti uten risiko
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 dagers pengene-tilbake-garanti. Hvis du ikke faller for den, får du alle pengene tilbake –<strong>uten å sende noe i retur</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diskré emballasje</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Sendes innen 24 t</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Trygg betaling</span>
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
            Er Lem noe for deg?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tusenvis av kvinner over 50 sier «ja». Se om du kjenner deg igjen i noe av dette:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem er for deg hvis du:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Sliter med tørrhet i underlivet eller smerter ved samleie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Merker mindre følelse eller har vanskelig for å få orgasme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Sliter med klitorisatrofi eller tynnere vev</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Synes vanlige vibratorer er for harde eller irriterende</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vil holde vevet sunt etter hvert som du blir eldre</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ser etter et diskré velværeapparat (ikke et åpenbart «leketøy»)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vil unngå eller supplere hormonbehandling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Er klar for å ta tilbake den seksuelle velværen og selvtilliten din</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Du kommer til å elske Lem spesielt hvis du:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Setter <strong>velvære med forskning bak</strong> høyere enn billige knep</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vil ha <strong>forebyggende pleie</strong>, ikke bare lindring av symptomer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Er lei av produkter som <strong>ikke virker på modne kropper</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Setter pris på <strong>gjennomtenkt design</strong> som respekterer privatlivet ditt</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Er villig til å <strong>investere i deg selv</strong> (bare 0,21 € dagen gjennom et år!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vil ha <strong>resultater uten bivirkninger</strong> eller resepter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Er ferdig med å godta at <strong>«sånn er det bare nå»</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Hvis du kjente deg igjen i bare 3 av disse,</strong> er Lem laget nettopp for deg.
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
                  Ja, dette er meg - Kjøp nå
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
            Spørsmålene dine, besvart
          </h2>
          <p className="text-center text-gray-600 mb-12">Vi stilte Hello Nancy spørsmålene leserne våre lurte på</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Gjør det vondt hvis jeg er sensitiv eller har atrofi?</h3>
                <p className="text-gray-700">
                  Slett ikke. Fordi den bruker luftsug i stedet for vibrasjon ved direkte kontakt, unngår den friksjonen som gir smerte. Du kan starte på den laveste av de 12 innstillingene og øke forsiktig oppover. Den er laget nettopp for å være skånsom mot sart vev.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Er emballasjen pinlig?</h3>
                <p className="text-gray-700">
                  Null. De sender i nøytrale, brune esker uten logoer. Avsenderadressen sier bare «Care & Bloom Ltd.». Full diskresjon garantert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hva om jeg ikke liker den?</h3>
                <p className="text-gray-700">
                  Hello Nancy gir 30 dagers fornøydhetsgaranti. Hvis du ikke faller for den, gir de deg en engangs kulanserefusjon –<strong>uten at du må sende noe i retur</strong>. De stoler på at du finner det som funker for kroppen din.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kan jeg bruke den i dusjen eller badekaret?</h3>
                <p className="text-gray-700">
                  Ja! Den er vanntett-sertifisert etter IPX7, noe som betyr at den kan være helt under vann. Mange opplever at varmt vann gir mer avslapning og bedre følelse.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hvor høylytt er den?</h3>
                <p className="text-gray-700">
                  Hviskestille. Den ekstra stillegående motoren sikrer full diskresjon – du kan bruke den uten å bekymre deg for at noen hører deg, selv i naborommet.
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
              Vår endelige vurdering
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Etter ukevis med research, ekspertsamtaler og brukerintervjuer mener redaksjonen vår at Nancy's Lem svarer på et reelt medisinsk behov som er blitt oversett altfor lenge.
              </p>
              <p>
                Dette handler ikke om forfengelighet eller luksus – det handler om å holde vevet sunt, sove bedre og ta tilbake en del av deg selv som overgangsalderen prøver å ta fra deg.
              </p>
              <p className="text-xl font-bold">
                Hvis du har symptomer på GSM, sliter med de vanlige løsningene eller rett og slett vil ta vare på den seksuelle velværen din når du blir eldre, fortjener Lem en skikkelig vurdering.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, seniorredaktør for velvære
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
                Kjøp Nancy's Lem - 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 dagers garanti ✓ Gratis frakt ✓ Diskré emballasje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Om affiliatelenker</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider er finansiert av leserne. Når du handler via lenker på siden vår, kan vi tjene en affiliateprovisjon uten at det koster deg noe ekstra. Det hjelper oss å fortsette å tilby gratis, forskningsbasert innhold. Vi anbefaler bare produkter redaksjonen vår har gått grundig etter i sømmene og tror leserne våre vil ha nytte av. Alle meninger er våre egne og er ikke påvirket av betaling.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Om oss</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider lager kunnskapsbasert helse- og velværejournalistikk for kvinner i dag.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorier</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Helse</li>
                  <li>Velvære</li>
                  <li>Sex og samliv</li>
                  <li>Produkttester</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Om Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Produktdetaljer</li>
                  <li>Kundeanmeldelser</li>
                  <li>Frakt og retur</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Trygghet og sikkerhet</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materialer av medisinsk kvalitet</li>
                  <li>✓ Diskré frakt</li>
                  <li>✓ 30 dagers garanti</li>
                  <li>✓ 12 måneders garanti</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Med enerett. Det redaksjonelle innholdet er uavhengig og objektivt.</p>
              <p className="mt-2">Omtalt produkt: Nancy's Lem fra Hello Nancy • Vinner av Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
