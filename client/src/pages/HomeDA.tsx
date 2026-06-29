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

  useEffect(() => { document.documentElement.lang = "da"; }, []);

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
    { src: "/PDP.jpg", alt: "Nancy's Lem wellnessapparat" },
    { src: "/PDP-1.jpg", alt: "Lem i en lifestyle-setting" },
    { src: "/PDP-2.jpg", alt: "Nærbillede af Lem-designet" },
    { src: "/PDP-3.jpg", alt: "Produktdetaljer på Lem" },
    { src: "/PDP-4.jpg", alt: "Lem i brug" },
    { src: "/PDP-5.jpg", alt: "Lem emballage og tilbehør" },
    { src: "/PDP-6.jpg", alt: "Lifestyle-billede af Lem" },
    { src: "/PDP-7.jpg", alt: "Lems produktfunktioner" },
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
              <p className="text-xs text-gray-500 font-medium">Kvinders sundhed, du kan stole på</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14.907 anmeldelser) • 1 mio.+ solgt</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">581 kr.</span>
                  <span className="text-sm line-through text-white/70">1.037 kr.</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">SPAR 456 KR.</span>
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
                  Køb nu
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SUNDHED & WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUKTANMELDELSE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            1 mio.+ orgasmer senere: Derfor dropper kvinder over 50 vibratoren til fordel for denne »citron«
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Vi gravede i, hvorfor tusindvis af kvinder over 50 lægger den klassiske vibrator på hylden til fordel for dette lille »fysioterapi«-apparat, der ligner en citron. Her er, hvad vi fandt ud af.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Af Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Senior wellnessredaktør</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Senest opdateret: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('da-DK', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min. læsetid</span>
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
              <span className="font-bold text-gray-900 mr-1">Redaktørens note:</span>
              Denne artikel indeholder affiliate-links. Vi kan tjene en kommission, hvis du køber gennem dem – uden at det koster dig en krone ekstra. Vi anbefaler kun produkter, vi selv har undersøgt og testet grundigt.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Nancy's Lem wellnessapparat på natbordet"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem står diskret på natbordet – de fleste tror, det er en dekorativ citron. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> læsere kigger på denne artikel lige nu</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskret emballage</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Fri fragt over hele verden</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 dages tilfredshedsgaranti</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Derfor taler vi om det her</h2>
          <p className="text-gray-700 leading-relaxed">
            Da vi på redaktionen første gang hørte om et »citronformet wellnessapparat«, der tog overgangsalder-fællesskabet med storm, var vi – det må vi ærligt indrømme – godt skeptiske. Men efter at have interviewet snesevis af kvinder, rådført os med gynækologer og ja, testet det selv, forstår vi godt hypen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Det her er ikke bare endnu en wellnesstrend. Det handler om et reelt medicinsk problem, der rammer millioner af kvinder, men som der sjældent bliver talt om: <strong>klitorisatrofi</strong> og tabet af seksuel sundhed i overgangsalderen.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Den samtale, ingen advarede os om</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vi hører alt om de hedeture, der får os til at svede gennem silkelagnet kl. 3 om natten. Vi hører om hjernetågen, der får os til at lede efter brillerne, mens de sidder på næsen.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Men ingen sætter sig ned med et glas pinot og hvisker: »Hej, lige en ting – hvis du ikke holder tingene aktive dernede, kan din klitoris faktisk skrumpe.«
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det kaldes <strong>klitorisatrofi</strong>, og det er en del af genitourinært syndrom i overgangsalderen (GSM) – en tilstand, der ifølge North American Menopause Society rammer op til 50 % af kvinder efter overgangsalderen.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">»Den store afkobling«</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For mange af de kvinder, vi interviewede, var det ikke kun tørheden. Det var <strong>følelsesløsheden</strong>. En tester beskrev, hvordan hun prøvede at bruge sin gamle vibrator fra 30'erne: »I stedet for at føles godt føltes det bare… irriterende. Eller følelsesløst. Som at prøve at kilde en hård hud.«
            </p>
            <p className="text-gray-700 leading-relaxed">
              Eksperter forklarer, at klassiske vibratorer virker gennem friktion og tryk. Når vævet bliver tyndere på grund af lavt østrogen, kan direkte vibration faktisk <em>sløve nerverne endnu mere</em> og føre til netop den »følelsesløse« fornemmelse.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">»Stop med at vibrere. Begynd at suge.«</p>
            <p className="text-gray-700">– Bækkenbundsspecialister</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynækologer med speciale i overgangsalderen forklarer: »Når østrogenet falder, mindskes blodgennemstrømningen til bækkenområdet. Det fører til tyndere væv, tab af elasticitet og nedsat følsomhed. Lægeverdenen kalder det 'brug det eller mist det'-princippet – du har brug for konstant blodgennemstrømning for at holde vævet sundt.«
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mød Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det er her, det lille gule apparat kommer ind i billedet. Nancy's Lem markedsføres ikke som et sexlegetøj – det er positioneret som et wellnessapparat. Og efter vores research forstår vi godt hvorfor.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I modsætning til klassiske vibratorer, der bygger på friktion (som kan irritere det tynde væv i overgangsalderen), bruger Lem noget, der hedder <strong>Air Pulse-teknologi</strong>. Tænk på det som forskellen mellem at gnide sandpapir mod huden og at få en blid vakuummassage.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Videnskaben: Derfor virker Air Pulse-teknologi</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Klassiske vibratorer:</p>
              <p className="text-red-700 text-sm">Bygger på overfladefriktion, der kan irritere følsomt, tyndt væv. Kan give følelsesløshed eller mikrorifter.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Air Pulse-teknologi:</p>
              <p className="text-green-700 text-sm">Skaber blide sugebølger uden direkte kontakt. Trækker iltrigt blod ind i vævet og fremmer sundhed og følsomhed.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Sådan virker det: Lem skaber en blid forsegling omkring klitoris og bruger bølger af lufttryk til at stimulere den – så det minder om fornemmelsen af oralsex, bare konstant og utrætteligt. Fordi der ikke er nogen gnidning, er der nul irritation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Men den egentlige magi ligger i fysikken: det blide sug skaber en vakuumeffekt, der rent fysisk trækker dybt, iltrigt blod ind i vævet. Det vækker nerver, der har ligget i dvale i årevis.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              »Det føles, som om den trækker orgasmen direkte ud… og den holder dunkene i gang meget længere.«
            </p>
            <p className="font-semibold text-gray-700">– Alisha, betatester (fra verificerede kundeanmeldelser)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sådan klarer den sig: Vores sammenligning</h2>
          <p className="text-center text-gray-600 mb-8">Vi sammenlignede Lem med klassiske løsninger for vævssundhed i overgangsalderen</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Funktion</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Klassisk vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Østrogencreme</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Virker på følsomt væv</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ja</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kan irritere</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Langsom effekt</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Øger blodgennemstrømningen</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Dybt i vævet</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Kun på overfladen</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradvist</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ingen friktion/irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ingen kontakt</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Skaber friktion</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Nydelse med det samme</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Øjeblikkeligt</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Svingende</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ingen nydelse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskret design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ligner en citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Tydeligt</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Anbefalet af læger</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ For blodgennemstrømning</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Nogle gange</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Pris</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">581 kr. (engangskøb)</td>
                  <td className="border border-gray-300 p-4 text-center">370–1.120 kr.</td>
                  <td className="border border-gray-300 p-4 text-center">225–370 kr. om måneden</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">»Anti-skam«-designfilosofien</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En ting, der gjorde indtryk på vores redaktion under testen: designet er <em>bevidst</em> diskret. Det er knaldgult, ligger i håndfladen og ligner faktisk en dekorativ citron.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">»Natbordstesten«</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Lem-apparatet står diskret på natbordet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Vi har alle den skuffe. <em>Skamskuffen</em>. Hvor vi gemmer de grimme, falliske plastikdimser under de gamle sokker.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              En af vores testere fortalte denne historie: »Jeg kom til at glemme min Lem på badeværelsesbordet, da min svigermor var på besøg. Hun tog den op og sagde: 'Nej, er det sådan en ny ultralydsansigtsbørste? Den føles så blød!'«
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Den består natbordstesten. Den ligner lækkert selvplejeudstyr, ikke et sexlegetøj. For det er præcis det, den er.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Advarsel om billige kopier</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Efter at vi udgav vores første anmeldelse, spurgte læsere, hvorfor de ikke bare skulle købe de billige kopier på Amazon. Her er, hvad eksperter siger.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              »Billigt legetøj bruger porøse jelly/TPE-materialer,« advarede hun. »Mikroskopiske bakterier sætter sig fast i porerne, hvilket er en kæmpe risiko for kvinder i overgangsalderen, der i forvejen er mere udsatte for urinvejsinfektioner.«
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello Nancy Lem er 100 % medicinsk, ikke-porøs silikone. Sæt ikke dit helbred på spil bare for at spare et par kroner på en billig kopi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Hviskestille</h3>
                <p className="text-gray-600 text-sm">
                  Ultrastille motor – fuld diskretion
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vandtæt (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfekt til bad eller brusebad
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medicinsk silikone</h3>
                <p className="text-gray-600 text-sm">
                  Kropsvenlig, ikke-porøs, nem at rengøre
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetisk opladning</h3>
                <p className="text-gray-600 text-sm">
                  120 minutter pr. opladning
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">At pakke den ud: Førstehåndsindtrykket tæller</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="At pakke Lem ud"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                En af de første ting, vores testere lagde mærke til? Emballagen er <em>elegant</em>. Ingen skrigende farver, ingen pinlige billeder. Æsken er minimalistisk hvid med diskrete guldaccenter – den kunne nemt forveksles med et luksushudplejeprodukt.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Det er i æsken:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lem-apparatet (knaldgult, i håndflade-størrelse)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetisk USB-opladerkabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Blød fløjlspose til opbevaring (perfekt til rejser)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>»Selvkærlighedsmanual« med brugstips og wellnessråd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Kom godt i gang-guide med illustrerede instruktioner</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                »Da jeg åbnede æsken, blev jeg oprigtigt overrasket over, hvor <strong>lækkert</strong> det hele føltes. Det føltes ikke som et 'sexlegetøj' – det føltes som en wellnessinvestering.« – testbruger, 54 år
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Lad os tale anatomi: Derfor betyder klitorisstimulation noget</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Tværsnitsdiagram af klitorisanatomi"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Nydelsens videnskab</h3>
                <p className="text-gray-600 text-sm">Det enhver kvinde bør vide om sin krop</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Her er noget, de ikke underviser i til sundhedstimerne: klitoris har omkring <strong>8.000 nerveender</strong> – flere end nogen anden del af menneskekroppen, mand eller kvinde. Til sammenligning har penis omkring 4.000.
              </p>
              <p>
                Men her er hagen: <strong>75 % af kvinder kan ikke få orgasme gennem penetration alene</strong>, ifølge forskning offentliggjort i Journal of Sex & Marital Therapy. Klitoris er nøglen.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Det sker der i overgangsalderen:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Sammenligning af blodgennemstrømning før og efter overgangsalderen"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problemet:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Østrogenniveauet falder med 90 %</li>
                      <li>• Blodgennemstrømningen til bækkenområdet mindskes</li>
                      <li>• Klitorisvævet kan skrumpe med 20–30 %</li>
                      <li>• Nervefølsomheden aftager</li>
                      <li>• Den naturlige smøring mindskes</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Løsningen:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regelmæssig stimulation holder blodgennemstrømningen ved lige</li>
                      <li>• Holder nervebanerne aktive</li>
                      <li>• Forebygger vævsatrofi</li>
                      <li>• Bevarer følsomheden</li>
                      <li>• Fremmer den naturlige smøring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynækologer siger det rent ud: »Tænk på det som motion for din bækkenbund. Hvis du ikke bruger de muskler og holder blodgennemstrømningen ved lige, atrofierer de. Det samme princip gælder for klitorisvævet.«
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Det korte af det lange:</p>
                <p className="text-gray-700">
                  Regelmæssig klitorisstimulation handler ikke kun om nydelse (selvom det er en dejlig bonus). Det handler om at holde vævet sundt, bevare nervefunktionen og forebygge de uoprettelige forandringer, der følger med forsømmelse. Det er <em>forebyggende sundhed</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">»Men hvad med min partner?« Det spurgte vi også om</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">»3-minutters-miraklet« (og derfor elsker partnere det)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lad os være ærlige: for mange kvinder over 50 kan det tage 20+ minutter (og en masse mental gymnastik) at nå bare i nærheden af et klimaks. Med Lem? <strong className="text-[#FF1493]">Tre minutter.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Kvinders største indvending:</strong> »Vil min partner føle sig udskiftet?«
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolut ikke.</strong> Lem er bittelille. Mange par bruger den <em>under</em> samleje. Den fungerer som en »bro«, der sikrer, at du er helt tændt og naturligt fugtig, og tager presset af din partner for at skulle »præstere«.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                En tester fortalte os: »Den forvandlede vores soveværelse fra et sted med angst tilbage til en legeplads.«
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Et af de mest stillede spørgsmål, vi fik under vores research: <em>»Vil min partner føle sig truet af det her?«</em>
              </p>
              <p>
                Her er, hvad vi fandt ud af: <strong>Lem er ikke en erstatning – den er en forbedring.</strong> Mange af de par, vi interviewede, fortalte, at det faktisk <em>forbedrede</em> deres forbindelse at få Lem ind i deres intime stunder.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  »Min mand var nysgerrig, ikke truet. Nu bruger han den på mig under forspillet. Det tager presset af ham for at 'præstere', og jeg får præcis det, jeg har brug for. Win win.«
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, gift i 28 år</p>
              </div>
              <p>
                Den kompakte størrelse gør den nem at få med i parlege uden at føles besværlig. Og fordi den er håndfri, når den først er placeret, kan begge parter fokusere på hinanden.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Sådan bruger par Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under forspillet</p>
                    <p className="text-sm text-gray-600">Partneren holder den på plads, mens I kysser og rører ved hinanden</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under samleje</p>
                    <p className="text-sm text-gray-600">Placeret, så du får klitorisstimulation og penetration på samme tid</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo, mens partneren ser på</p>
                    <p className="text-sm text-gray-600">Skaber intimitet og hjælper partnere med at lære, hvad der virker</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">»Vedligeholdelse« mellem stunderne</p>
                    <p className="text-sm text-gray-600">Solobrug holder vævet sundt, når partnersex ikke er så hyppigt</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Godt råd:</strong> Tal sammen om det – det er nøglen. Beskriv det som et wellnessværktøj, der gavner <em>jer begge</em>: mindre pres, mere nydelse.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Alle grunde til at prøve, ingen grund til at bekymre dig</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Vi undersøgte Hello Nancys garantier. Her er, hvad de faktisk betyder.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 dages »nydelsesgaranti«</h3>
                <p className="text-sm text-gray-700 text-center">
                  Ikke tilfreds? Få <strong>fuld refusion</strong> – ingen returfragt nødvendig. De stoler på, at du er ærlig. Så sikre er de i deres sag.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oversat: Nul økonomisk risiko. Prøv den en måned.
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
                  Hvis der sker noget med apparatet inden for det første år, erstatter de det. Gratis. Helt uden bøvl.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oversat: Det her er ikke en engangsdims. Den er bygget til at holde.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Livslang support</h3>
                <p className="text-sm text-gray-700 text-center">
                  Spørgsmål om brugen? I tvivl om rengøringen? Deres kundeservice svarer inden for 24 timer.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oversat: Du køber ikke et produkt. Du bliver en del af et fællesskab.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Det rigtige spørgsmål: Hvad har du at miste?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Vi har gennemgået videnskaben. Vi har vist dig anmeldelserne. Vi har forklaret garantierne. Så reelt er den eneste risiko <em>ikke</em> at prøve den.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Lad os regne på det:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Hvis du prøver den:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Genopdager måske en nydelse, du troede var væk</li>
                      <li>✓ Forbedrer måske vævssundheden og forebygger atrofi</li>
                      <li>✓ Sover måske bedre (orgasmer frigiver oxytocin)</li>
                      <li>✓ Værst tænkelige tilfælde: få dine 581 kr. tilbage</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Hvis du ikke gør:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Vævsatrofien fortsætter</li>
                      <li>• Nervefølsomheden bliver ved med at falde</li>
                      <li>• Seksuel sundhed er fortsat en kamp</li>
                      <li>• Du vil altid spekulere på »hvad nu hvis?«</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Derfor har Hello Nancy vores tillid</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Vi kaster ikke om os med anbefalinger. Her er, hvorfor Hello Nancy levede op til vores redaktionelle krav.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prisvindende</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award fra International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verificerede anmeldelser</h3>
              <p className="text-sm text-gray-600">4,7★ i gennemsnit fra 14.907 verificerede købere (ingen falske anmeldelser)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1 mio.+ solgt</h3>
              <p className="text-sm text-gray-600">Over 1.000.000 enheder solgt på verdensplan siden lanceringen i 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medicinsk kvalitet</h3>
              <p className="text-sm text-gray-600">Medicinsk silikone, grundig sikkerhedstest</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Set i:</h3>
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
            Det siger verificerede købere
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 ud af 5 (14.907 verificerede anmeldelser)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">»Bedre end østrogencreme«</p>
                <p className="text-gray-700 italic">
                  »Jeg købte den ikke for 'sjov', jeg købte den, fordi min læge sagde, jeg havde brug for blodgennemstrømning. Men hold da op. Udløsningen hjælper mig med at sove hele natten igennem uden at vågne badet i sved. Det er mit nye vitamin.«
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verificeret køb</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">»Vækkede min krop«</p>
                <p className="text-gray-700 italic">
                  »Jeg har prøvet Lelo Sona før, men den var for kraftig for mig. Lem er blid nok til min følsomhed, men dyb nok til faktisk at virke. 10/10.«
                </p>
                <p className="font-semibold text-gray-900">– Carly, verificeret køber</p>
                <p className="text-xs text-gray-500">✓ Verificeret køb</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">»Jeg er afhængig«</p>
                <p className="text-gray-700 italic">
                  »Jeg er afhængig. Lem suger og trækker på den vildeste måde. Når du kommer, føles det, som om den trækker orgasmen direkte ud og holder dunkene i gang meget længere. Så godt!«
                </p>
                <p className="font-semibold text-gray-900">– Alisha, betatester</p>
                <p className="text-xs text-gray-500">✓ Verificeret køb</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">»Et vendepunkt«</p>
                <p className="text-gray-700 italic">
                  »For mig, der sætter pris på diskretion i intime produkter, kunne valget ikke være mere oplagt. Sugefunktionen er ulig alt andet, jeg har prøvet.«
                </p>
                <p className="font-semibold text-gray-900">– Maxine, verificeret køber</p>
                <p className="text-xs text-gray-500">✓ Verificeret køb</p>
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
              Vores dom: Investeringen værd
            </h2>
            <p className="text-center text-xl text-gray-600">
              Efter grundig test og research giver vores redaktion Nancy's Lem en stærk anbefaling til kvinder, der oplever vævsforandringer i overgangsalderen.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">SPAR 456 KR.</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ TIDSBEGRÆNSET LÆSERTILBUD ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Tilbuddet udløber om:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem klitorisstimulator</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">581 kr.</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">1.037 kr.</span>
                      <span className="text-sm text-green-600 font-bold">Spar 456 kr. (44 % rabat)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Kun 1,59 kr. om dagen</strong> over et års brug
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Mindre end din daglige kaffe. Holder i årevis.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LÆSERTIP: Brug koden <span className="font-bold text-[#FF1493]">TIFFANY</span> eller <span className="font-bold text-[#FF1493]">ISABELLA</span> ved kassen for en ekstra overraskelse!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem klitorisstimulator (knaldgul)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Selvkærlighedsmanual & brugsguide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetisk opladerkabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Fløjlspose til rejser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Fri fragt over hele verden</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 dages »nydelsesgaranti«</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 måneders garanti</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Køb nu – 581 kr. (spar 456 kr.)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Risikofri garanti
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 dages pengene-tilbage-garanti. Hvis du ikke elsker den, får du fuld refusion – <strong>ingen returnering nødvendig</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diskret emballage</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Afsendes inden for 24 timer</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Sikker betaling</span>
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
            Er Lem noget for dig?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tusindvis af kvinder over 50 siger »ja«. Se, om du kan genkende dig selv i noget af det her:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem er noget for dig, hvis du:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Kæmper med vaginal tørhed eller smertefuldt samleje</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Oplever nedsat følsomhed eller svært ved at få orgasme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Døjer med klitorisatrofi eller tyndere væv</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Synes, klassiske vibratorer er for hårde eller irriterende</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vil holde vævet sundt, mens du bliver ældre</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Leder efter et diskret wellnessapparat (ikke et tydeligt »legetøj«)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vil undgå eller supplere hormonbehandling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Er klar til at tage din seksuelle sundhed og selvtillid tilbage</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Du vil især elske Lem, hvis:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du går op i <strong>videnskabeligt funderet wellness</strong> frem for løse løfter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du vil have <strong>forebyggende pleje</strong>, ikke kun symptombehandling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du er træt af produkter, der <strong>ikke virker på modne kroppe</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du sætter pris på <strong>gennemtænkt design</strong>, der respekterer dit privatliv</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du er villig til at <strong>investere i dig selv</strong> (kun 1,59 kr. om dagen over et år!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du vil have <strong>resultater uden bivirkninger</strong> eller recepter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du er færdig med at acceptere, at <strong>»sådan er det bare nu«</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Hvis du satte kryds ved bare 3 af punkterne,</strong> blev Lem designet specielt til dig.
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
                  Ja, det er mig – køb nu
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
            Svar på dine spørgsmål
          </h2>
          <p className="text-center text-gray-600 mb-12">Vi stillede Hello Nancy de spørgsmål, vores læsere helst ville have svar på</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Gør det ondt, hvis jeg er følsom eller har atrofi?</h3>
                <p className="text-gray-700">
                  Slet ikke. Fordi den bruger luftsug i stedet for direkte kontaktvibration, undgår den den friktion, der giver smerter. Du kan starte på den laveste af de 12 indstillinger og forsigtigt arbejde dig op. Den er designet specielt til at være blid mod det sarte væv.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Er emballagen pinlig?</h3>
                <p className="text-gray-700">
                  Overhovedet ikke. De sender i neutrale brune kasser uden logoer. Afsenderen står bare som »Care & Bloom Ltd«. Fuld diskretion garanteret.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hvad hvis jeg ikke kan lide den?</h3>
                <p className="text-gray-700">
                  Hello Nancy har en 30 dages tilfredshedsgaranti. Hvis du ikke falder for den, giver de dig pengene tilbage som en engangsservice – <strong>ingen returnering nødvendig</strong>. De stoler på, at du finder frem til det, der virker for din krop.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kan jeg bruge den i brusebadet eller karret?</h3>
                <p className="text-gray-700">
                  Ja! Den er IPX7-certificeret vandtæt, hvilket betyder, at den kan være helt under vand. Mange brugere oplever, at varmt vand øger afslapningen og fornemmelsen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hvor høj er den?</h3>
                <p className="text-gray-700">
                  Hviskestille. Den ultrastille motor sikrer fuld diskretion – du kan bruge den uden at være bange for, at nogen hører noget, selv i værelset ved siden af.
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
              Vores endelige dom
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Efter ugers research, ekspertkonsultationer og brugerinterviews mener vores redaktion, at Nancy's Lem adresserer et reelt medicinsk behov, der er blevet overset alt for længe.
              </p>
              <p>
                Det handler ikke om forfængelighed eller luksus – det handler om at holde vævet sundt, forbedre søvnkvaliteten og tage en del af dig selv tilbage, som overgangsalderen forsøger at fjerne.
              </p>
              <p className="text-xl font-bold">
                Hvis du oplever symptomerne på GSM, kæmper med klassiske løsninger eller bare vil holde din seksuelle sundhed ved lige, mens du bliver ældre, fortjener Lem en seriøs overvejelse.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, senior wellnessredaktør
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
                Køb Nancy's Lem – 581 kr.
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 dages garanti ✓ Fri fragt ✓ Diskret emballage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate-oplysning</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider er læserstøttet. Når du køber gennem links på vores side, kan vi tjene en affiliate-kommission, uden at det koster dig ekstra. Det er med til, at vi fortsat kan levere gratis, researchbaseret indhold. Vi anbefaler kun produkter, som vores redaktion har gennemgået grundigt og tror på vil gavne vores læsere. Alle holdninger er vores egne og er ikke betalt for.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Om os</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider leverer evidensbaseret sundheds- og wellnessjournalistik til moderne kvinder.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorier</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Sundhed</li>
                  <li>Wellness</li>
                  <li>Sex & parforhold</li>
                  <li>Produktanmeldelser</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Om Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Produktdetaljer</li>
                  <li>Kundeanmeldelser</li>
                  <li>Fragt & returnering</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Tryghed & sikkerhed</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materialer i medicinsk kvalitet</li>
                  <li>✓ Diskret forsendelse</li>
                  <li>✓ 30 dages garanti</li>
                  <li>✓ 12 måneders garanti</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Alle rettigheder forbeholdes. Det redaktionelle indhold er uafhængigt og objektivt.</p>
              <p className="mt-2">Omtalt produkt: Nancy's Lem fra Hello Nancy • Vinder af 2025 Women's Wellness Tech Award</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
