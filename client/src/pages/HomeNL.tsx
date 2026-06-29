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

  useEffect(() => { document.documentElement.lang = "nl"; }, []);

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
    { src: "/PDP.jpg", alt: "Het Nancy's Lem wellnessapparaat" },
    { src: "/PDP-1.jpg", alt: "De Lem in een huiselijke setting" },
    { src: "/PDP-2.jpg", alt: "Close-up van het ontwerp van de Lem" },
    { src: "/PDP-3.jpg", alt: "Detailfoto van de Lem" },
    { src: "/PDP-4_NL.png", alt: "De Lem in gebruik" },
    { src: "/PDP-5.jpg", alt: "De verpakking en toebehoren van de Lem" },
    { src: "/PDP-6_NL.png", alt: "Sfeerbeeld van de Lem" },
    { src: "/PDP-7_NL.png", alt: "De kenmerken van de Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Vrouwengezondheid waar je op kunt bouwen</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14.907 reviews) • 1M+ verkocht</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">€ 77,95</span>
                  <span className="text-sm line-through text-white/70">€ 138,95</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">BESPAAR € 61,00</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Eindigt in {formatTime(timeLeft)}</span>
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
                  Nu kopen
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">GEZONDHEID & WELZIJN</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUCTREVIEW</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            1M+ orgasmes later: waarom vrouwen boven de 50 hun vibrator inruilen voor deze ‘citroen’
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            We onderzochten waarom duizenden vrouwen boven de 50 hun traditionele vibrator inruilen voor dit ‘fysiotherapie’-apparaatje dat eruitziet als een citroen. En dit is wat we ontdekten.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Door Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Senior wellnessredacteur</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Laatst bijgewerkt: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('nl-NL', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min leestijd</span>
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
              <span className="font-bold text-gray-900 mr-1">Noot van de redactie:</span>
              Dit artikel bevat affiliatelinks. We kunnen een commissie verdienen als je via deze links koopt, zonder extra kosten voor jou. We raden alleen producten aan die we grondig hebben onderzocht en getest.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="Het Nancy's Lem wellnessapparaat op een nachtkastje"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">De Nancy's Lem staat discreet op een nachtkastje – de meeste mensen denken dat het een decoratieve citroen is. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> lezers bekijken momenteel dit artikel</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Discrete verpakking</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Gratis wereldwijde verzending</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 dagen tevredenheidsgarantie</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 maanden garantie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom we hierover schrijven</h2>
          <p className="text-gray-700 leading-relaxed">
            Toen we voor het eerst hoorden over een ‘citroenvormig wellnessapparaat’ dat in de menopauzewereld als een storm rondging, waren we eerlijk gezegd sceptisch. Maar na gesprekken met tientallen vrouwen, overleg met gynaecologen en, ja, het zelf uitproberen, snappen we de hype wel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dit is niet zomaar een wellnesstrend. Het pakt een echt medisch probleem aan dat miljoenen vrouwen treft, maar waar bijna nooit over wordt gepraat: <strong>clitorale atrofie</strong> en het verlies van seksueel welzijn tijdens de overgang.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Het gesprek waar niemand je voor waarschuwt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over de opvliegers die je om 3 uur ’s nachts badend in het zweet wakker maken, hoor je alles. Over de hersenmist waardoor je naar je bril zoekt terwijl die gewoon op je neus staat, ook.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Maar niemand schenkt je een glas wijn in en fluistert: “Hé, trouwens, als je het daar beneden niet actief houdt, kan je clitoris echt krimpen.”
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het heet <strong>clitorale atrofie</strong> en het hoort bij het genito-urinair syndroom van de menopauze (GSM) – een aandoening die volgens de North American Menopause Society tot 50% van de vrouwen ná de overgang treft.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">‘De grote verwijdering’</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Voor veel vrouwen die we spraken, ging het niet alleen om droogheid. Het was vooral die <strong>gevoelloosheid</strong>. Een tester vertelde hoe ze haar oude vibrator van vroeger weer eens probeerde: “In plaats van fijn voelde het gewoon… irritant. Of dof. Alsof je eelt probeert te kietelen.”
            </p>
            <p className="text-gray-700 leading-relaxed">
              Medische experts leggen uit dat traditionele vibrators het van wrijving en kracht moeten hebben. Als het weefsel dunner wordt door een laag oestrogeengehalte, kan directe trilling de zenuwen juist <em>verder verdoven</em> – en dat geeft precies dat ‘doffe’ gevoel.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">“Stop met trillen. Begin met zuigen.”</p>
            <p className="text-gray-700">– Bekkenbodemspecialisten</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynaecologen die gespecialiseerd zijn in overgangszorg leggen het zo uit: “Als het oestrogeen daalt, gaat er minder bloed naar het bekkengebied. Daardoor wordt het weefsel dunner, verliest het zijn elasticiteit en neemt het gevoel af. In de medische wereld noemen we dat het use-it-or-lose-it-principe: je hebt een constante bloedtoevoer nodig om het weefsel gezond te houden.”
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maak kennis met de Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En dan komt dit kleine gele apparaatje in beeld. De Nancy's Lem wordt niet neergezet als seksspeeltje, maar als wellnessapparaat. En na ons onderzoek snappen we waarom.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anders dan traditionele vibrators, die het van wrijving moeten hebben (en dat kan dunner geworden weefsel juist irriteren), werkt de Lem met <strong>luchtdruktechnologie</strong>. Zie het als het verschil tussen schuurpapier over je huid halen en een zachte vacuümmassage.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De wetenschap: waarom luchtdruktechnologie werkt</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditionele vibrators:</p>
              <p className="text-red-700 text-sm">Werken met wrijving aan de oppervlakte, en dat kan gevoelig, dunner geworden weefsel irriteren. Kan zorgen voor een dof gevoel of kleine scheurtjes.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Luchtdruktechnologie:</p>
              <p className="text-green-700 text-sm">Maakt zachte zuiggolven, zonder direct contact. Trekt zuurstofrijk bloed naar het weefsel en dat is goed voor de gezondheid én het gevoel.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Zo werkt het: de Lem sluit zich zacht rond de clitoris en stimuleert die met golven van luchtdruk. Het bootst het gevoel van orale seks na, maar dan constant en onvermoeibaar. En omdat er geen wrijving is, is er ook geen irritatie.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Maar het echte trucje zit ’m in de natuurkunde: die zachte zuigkracht zorgt voor een vacuümeffect dat zuurstofrijk bloed diep in het weefsel trekt. Zo worden zenuwen wakker gemaakt die jarenlang hebben geslapen.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              “Het voelt alsof het het orgasme er gewoon uit trekt… en het blijft daarna veel langer nakloppen.”
            </p>
            <p className="font-semibold text-gray-700">– Alisha, bètatester (uit geverifieerde klantreviews)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hoe houdt de Lem zich staande? Onze vergelijking</h2>
          <p className="text-center text-gray-600 mb-8">We legden de Lem naast de vertrouwde oplossingen voor weefselgezondheid in de overgang</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Kenmerk</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Traditionele vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Oestrogeencrème</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Werkt bij gevoelig weefsel</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ja</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kan irriteren</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Trage resultaten</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Verhoogt bloedstroom</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Diep weefsel</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Alleen oppervlakte</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Geleidelijk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Geen wrijving of irritatie</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Geen contact</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Veroorzaakt wrijving</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Direct genot</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Direct</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Wisselend</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Geen genot</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Discreet ontwerp</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Lijkt op een citroen</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Overduidelijk</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Aanbevolen door artsen</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Voor bloedstroom</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Soms</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Prijs</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">€ 77,95 (eenmalig)</td>
                  <td className="border border-gray-300 p-4 text-center">€ 50–150</td>
                  <td className="border border-gray-300 p-4 text-center">€ 30–50/maand</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ontworpen zonder schaamte</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eén ding viel ons tijdens het testen meteen op: het ontwerp is <em>bewust</em> discreet. Felgeel, past in je handpalm en het lijkt echt op een decoratieve citroen.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">De ‘nachtkastjetest’</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="Lem-apparaat dat discreet op een nachtkastje staat"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              We hebben allemaal zo’n lade. De <em>schaamlade</em>. Waar de lelijke, fallische plastic apparaten onder een stapel oude sokken verdwijnen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Een van onze testers vertelde: “Ik had mijn Lem per ongeluk op de badkamerplank laten liggen toen mijn schoonmoeder langskwam. Ze pakte ’m op en zei: ‘O, is dit zo’n nieuwe sonische gezichtsreiniger? Wat voelt-ie zacht!’”
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Hij doorstaat de nachtkastjetest met vlag en wimpel. Hij ziet eruit als luxe zelfzorgtechnologie, niet als een seksspeeltje. En dat is precies wat het ook is.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Pas op voor goedkope namaak</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Na onze eerste review vroegen lezers waarom ze niet gewoon de versie van € 20 op Amazon konden bestellen. Dit is wat medische experts daarover zeggen.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              “Goedkope speeltjes zijn gemaakt van poreus jelly- of TPE-materiaal,” waarschuwde ze. “In die piepkleine poriën blijven bacteriën hangen, en dat is een groot risico voor vrouwen in de overgang, die toch al gevoeliger zijn voor blaasontstekingen.”
            </p>
            <p className="text-red-900 font-bold mt-3">
              De Hello Nancy Lem is van 100% niet-poreus siliconen van medische kwaliteit. Neem geen risico met je gezondheid om € 20 te besparen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Fluisterstil</h3>
                <p className="text-gray-600 text-sm">
                  Ultrastille motor, dus volledig discreet
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterdicht (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Ideaal voor in bad of onder de douche
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Siliconen van medische kwaliteit</h3>
                <p className="text-gray-600 text-sm">
                  Lichaamsveilig, niet-poreus en zo schoongemaakt
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetisch opladen</h3>
                <p className="text-gray-600 text-sm">
                  120 minuten per oplaadbeurt
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Productgalerij</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De unboxing: die eerste indruk telt</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="De Lem uit de verpakking"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Wat onze testers meteen opviel? De verpakking is <em>elegant</em>. Geen schreeuwerige kleuren, geen gênante plaatjes. De doos is strak wit met subtiele gouden accenten – je zou ’m zo aanzien voor een luxe huidverzorgingsmerk.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Wat zit er in de doos:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Het Lem-apparaatje (felgeel, handpalmformaat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetische USB-oplaadkabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Zacht fluwelen opbergzakje (ideaal voor onderweg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>‘Zelfliefdehandleiding’ met gebruikstips en wellnessadvies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Snelstartgids met geïllustreerde instructies</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                “Toen ik de doos opende, was ik echt verrast door hoe <strong>luxe</strong> alles aanvoelde. Het voelde niet als een seksspeeltje – het voelde als investeren in mezelf.” – Testgebruiker, 54 jaar
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Even over anatomie: waarom clitorale stimulatie zo belangrijk is</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/anatomy_NL.png" 
              alt="Dwarsdoorsnede-diagram van de clitorale anatomie"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">De wetenschap van genot</h3>
                <p className="text-gray-600 text-sm">Wat elke vrouw over haar lichaam zou moeten weten</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Iets wat ze je tijdens biologie nooit vertelden: de clitoris heeft zo’n <strong>8.000 zenuwuiteinden</strong> – meer dan welk ander lichaamsdeel ook, bij man of vrouw. Ter vergelijking: de penis heeft er ongeveer 4.000.
              </p>
              <p>
                En dan nu het addertje onder het gras: <strong>75% van de vrouwen komt niet klaar door penetratie alleen</strong>, blijkt uit onderzoek in het Journal of Sex & Marital Therapy. De clitoris is dus de sleutel.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Wat er gebeurt tijdens de menopauze</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/bloodflow_NL.png" 
                    alt="Vergelijking van de bloedstroom voor en na de menopauze"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Het probleem:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Oestrogeenniveaus dalen met 90%</li>
                      <li>• Bloedstroom naar het bekkengebied neemt af</li>
                      <li>• Clitoraal weefsel kan 20–30% krimpen</li>
                      <li>• Zenuwgevoeligheid neemt af</li>
                      <li>• Natuurlijke smering neemt af</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ De oplossing:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regelmatige stimulatie behoudt bloedstroom</li>
                      <li>• Houdt zenuwbanen actief</li>
                      <li>• Voorkomt weefselatrofie</li>
                      <li>• Behoudt gevoeligheid</li>
                      <li>• Bevordert natuurlijke smering</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynaecologen zeggen het onomwonden: “Zie het als training voor je bekkenbodem. Gebruik je die spieren niet en houd je de bloedtoevoer niet op peil, dan verzwakken ze. En met clitoraal weefsel is het precies zo.”
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 De conclusie:</p>
                <p className="text-gray-700">
                  Regelmatige clitorale stimulatie draait niet alleen om genot (al is dat een mooie bijvangst). Het houdt je weefsel gezond, houdt je zenuwen aan het werk en voorkomt onomkeerbare schade door verwaarlozing. Dit is gewoon <em>preventieve gezondheidszorg</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">“Maar hoe zit het dan met mijn partner?” Dat vroegen wij ons ook af</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Het ‘drieminutenwonder’ (en waarom partners er dol op zijn)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even eerlijk: bij veel vrouwen boven de 50 duurt het zo 20 minuten of langer (plus de nodige mentale toeren) voor ze in de buurt van een hoogtepunt komen. Met de Lem? <strong className="text-[#FF1493]">Drie minuten.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Het grootste bezwaar dat vrouwen noemen:</strong> “Voelt mijn partner zich straks niet vervangen?”
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absoluut niet.</strong> De Lem is klein. Veel stellen gebruiken ’m <em>tijdens</em> het vrijen. Hij werkt als een brug: je bent helemaal opgewonden en natuurlijk vochtig, en je partner voelt geen druk meer om te ‘presteren’.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Een tester vertelde ons: “Onze slaapkamer voelt weer als een speeltuin in plaats van een plek vol spanning.”
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Een van de vragen die we tijdens ons onderzoek het vaakst hoorden: <em>“Voelt mijn partner zich hierdoor bedreigd?”</em>
              </p>
              <p>
                Wat we ontdekten: <strong>de Lem is geen vervanging, maar een aanvulling.</strong> Veel stellen die we spraken, vertelden dat de Lem hun intieme momenten en hun band juist <em>beter</em> maakte.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  “Mijn man was nieuwsgierig, niet bedreigd. Nu gebruikt hij ’m bij mij tijdens het voorspel. Hij voelt geen druk meer om te ‘presteren’ en ik krijg precies wat ik nodig heb. Win-winsituatie.”
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, 28 jaar getrouwd</p>
              </div>
              <p>
                Door zijn compacte formaat past hij moeiteloos in het spel met je partner, zonder dat het in de weg zit. En omdat hij handsfree is zodra hij op z’n plek zit, kunnen jullie je allebei op elkaar richten.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Zo gebruiken stellen de Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Tijdens het voorspel</p>
                    <p className="text-sm text-gray-600">Je partner houdt ’m op z’n plek terwijl jullie zoenen en elkaar aanraken</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Tijdens het vrijen</p>
                    <p className="text-sm text-gray-600">Op z’n plek voor clitorale én penetratieve stimulatie tegelijk</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo terwijl je partner toekijkt</p>
                    <p className="text-sm text-gray-600">Goed voor de intimiteit, en je partner ontdekt wat bij jou werkt</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">‘Onderhoud’ tussendoor</p>
                    <p className="text-sm text-gray-600">In je eentje houd je het weefsel gezond, ook als seks met je partner er even minder vaak van komt</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> praten erover is alles. Zie het als een wellnesstool waar <em>jullie allebei</em> iets aan hebben: minder druk, meer genot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Alle reden om het te proberen, geen reden om te twijfelen</h2>
          <p className="text-center text-xl text-gray-600 mb-8">We namen de garanties van Hello Nancy onder de loep. Dit is wat ze in de praktijk betekenen.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 dagen ‘pleziergarantie’</h3>
                <p className="text-sm text-gray-700 text-center">
                  Niet tevreden? Dan krijg je je <strong>geld volledig terug</strong> – zonder iets terug te sturen. Ze vertrouwen erop dat je eerlijk bent. Zó zeker zijn ze van hun zaak.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oftewel: je loopt geen enkel financieel risico. Probeer het gewoon een maandje.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 maanden garantie</h3>
                <p className="text-sm text-gray-700 text-center">
                  Gaat er in het eerste jaar iets mis met het apparaatje? Dan vervangen ze ’m. Gratis. Zonder gedoe.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oftewel: dit is geen wegwerpgadget. Het is gemaakt om lang mee te gaan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Levenslange ondersteuning</h3>
                <p className="text-sm text-gray-700 text-center">
                  Vragen over het gebruik? Twijfels over het schoonmaken? De klantenservice reageert binnen 24 uur.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oftewel: je koopt niet zomaar een product. Je hoort er voortaan gewoon bij.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">De echte vraag: wat heb je te verliezen?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                De wetenschap hebben we behandeld. De reviews heb je gezien. De garanties hebben we uitgelegd. Het enige risico dat nog overblijft, is het <em>niet</em> proberen.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Even rekenen:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Als je het probeert:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Misschien herontdek je genot waarvan je dacht dat het voorbij was</li>
                      <li>✓ Misschien houd je je weefsel gezonder en voorkom je atrofie</li>
                      <li>✓ Misschien slaap je beter (bij een orgasme komt oxytocine vrij)</li>
                      <li>✓ En in het slechtste geval krijg je je € 77,95 gewoon terug</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Als je het niet doet:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• De atrofie van het weefsel zet gewoon door</li>
                      <li>• Je gevoeligheid blijft afnemen</li>
                      <li>• Je seksueel welzijn blijft een gevecht</li>
                      <li>• En je blijft je afvragen: ‘wat als?’</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Waarom Hello Nancy ons vertrouwen won</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We raden niet zomaar iets aan. Dit is waarom Hello Nancy onze redactionele lat haalde.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prijswinnend</h3>
              <p className="text-sm text-gray-600">Women's Wellness Tech Award 2025 van het International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Geverifieerde reviews</h3>
              <p className="text-sm text-gray-600">Gemiddeld 4,7★ van 14.907 geverifieerde kopers (echt, geen nepreviews)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ verkocht</h3>
              <p className="text-sm text-gray-600">Meer dan 1.000.000 stuks wereldwijd verkocht sinds de lancering in 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medische kwaliteit</h3>
              <p className="text-sm text-gray-600">Siliconen van medische kwaliteit, streng getest op veiligheid</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Gezien in:</h3>
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
            Wat geverifieerde kopers zeggen
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 van 5 (14.907 geverifieerde reviews)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">“Beter dan oestrogeencrème”</p>
                <p className="text-gray-700 italic">
                  “Ik kocht ’m niet voor de lol, maar omdat mijn huisarts zei dat ik bloedtoevoer nodig had. Maar wauw. Door die ontlading slaap ik nu de hele nacht door, zonder badend in het zweet wakker te worden. Het is mijn nieuwe vitaminepil.”
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Geverifieerde aankoop</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">“Maakte mijn lichaam wakker”</p>
                <p className="text-gray-700 italic">
                  “Ik had eerder de Lelo Sona geprobeerd, maar die was me te heftig. De Lem is zacht genoeg voor mijn gevoeligheid, maar diep genoeg om echt iets te doen. 10/10.”
                </p>
                <p className="font-semibold text-gray-900">– Carly, geverifieerde koper</p>
                <p className="text-xs text-gray-500">✓ Geverifieerde aankoop</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">“Ik ben helemaal verslaafd”</p>
                <p className="text-gray-700 italic">
                  “Ik ben helemaal verslaafd. De Lem zuigt en trekt op de wildste manier. Als je klaarkomt, voelt het alsof het orgasme er gewoon uit getrokken wordt, en daarna blijft het veel langer nakloppen. Zóóó goed!”
                </p>
                <p className="font-semibold text-gray-900">– Alisha, bètatester</p>
                <p className="text-xs text-gray-500">✓ Geverifieerde aankoop</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">“Dit verandert alles”</p>
                <p className="text-gray-700 italic">
                  “Voor wie discretie belangrijk vindt bij intieme producten, is er geen betere keuze. Die zuigkracht is anders dan alles wat ik eerder heb geprobeerd.”
                </p>
                <p className="font-semibold text-gray-900">– Maxine, geverifieerde koper</p>
                <p className="text-xs text-gray-500">✓ Geverifieerde aankoop</p>
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
              Ons oordeel: elke cent waard
            </h2>
            <p className="text-center text-xl text-gray-600">
              Na grondig testen en onderzoek raadt onze redactie de Nancy's Lem van harte aan aan vrouwen die in de overgang weefselveranderingen merken.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">BESPAAR € 61</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ TIJDELIJKE AANBIEDING VOOR LEZERS ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Aanbieding eindigt over:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem clitorisstimulator</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">€ 77,95</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">€ 138,95</span>
                      <span className="text-sm text-green-600 font-bold">Bespaar € 61 (44% korting)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Inclusief btw</p>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Slechts € 0,21 per dag</strong> bij een jaar gebruik
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Minder dan je koffie ’s ochtends. En hij gaat jaren mee.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LEZERSTIP: vul bij het afrekenen code <span className="font-bold text-[#FF1493]">TIFFANY</span> of <span className="font-bold text-[#FF1493]">ISABELLA</span> in voor een extra verrassing!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem-clitorisstimulator (helder geel)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Zelfliefdehandleiding & gebruiksgids</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetische oplaadkabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Fluwelen reistasje</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Gratis wereldwijde verzending</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 dagen ‘pleziergarantie’</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 maanden garantie</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Nu kopen – € 77,95 (bespaar € 61)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garantie zonder risico
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 dagen niet-goed-geld-terug. Bevalt het je niet? Dan krijg je je geld volledig terug – <strong>zonder iets terug te sturen</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Discrete verpakking</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Verzonden binnen 24 uur</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Veilig afrekenen</span>
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
            Is de Lem iets voor jou?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Duizenden vrouwen boven de 50 zeggen volmondig ‘ja’. Kijk eens of je je in een van deze punten herkent:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 De Lem is iets voor jou als je:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Worstelt met vaginale droogheid of pijn bij het vrijen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Minder voelt of moeilijker klaarkomt dan vroeger</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Te maken hebt met clitorale atrofie of weefselverdunning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Traditionele vibrators te hard of irriterend vindt</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je weefselgezondheid wilt behouden naarmate je ouder wordt</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Op zoek bent naar een discreet wellnessapparaat (geen overduidelijk ‘speeltje’)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hormoonvervangingstherapie vermijdt of aanvult</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Klaar bent om je seksueel welzijn en je zelfvertrouwen terug te pakken</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Je bent vooral weg van de Lem als:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je <strong>wetenschappelijk onderbouwd welzijn</strong> verkiest boven gimmicks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je <strong>preventieve zorg</strong> wilt, niet alleen symptoombestrijding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je klaar bent met producten die <strong>niet zijn gemaakt voor een ouder wordend lichaam</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je <strong>doordacht ontwerp</strong> waardeert dat je privacy respecteert</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je bereid bent om <strong>in jezelf te investeren</strong> (slechts € 0,21 per dag over een jaar!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je <strong>resultaten wilt zonder bijwerkingen</strong> of recepten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je er niet langer genoegen mee neemt dat <strong>‘het nu eenmaal zo is’</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Herken je jezelf in zelfs maar 3 van deze punten?</strong> Dan is de Lem precies voor jou bedacht.
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
                  Ja, dit ben ik – nu kopen
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
            Jouw vragen, beantwoord
          </h2>
          <p className="text-center text-gray-600 mb-12">We legden Hello Nancy de vragen voor waar onze lezers mee zaten</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Doet het pijn als ik gevoelig ben of atrofie heb?</h3>
                <p className="text-gray-700">
                  Helemaal niet. Omdat de Lem met luchtdruk werkt in plaats van directe trilling, is er geen wrijving die pijn doet. Je begint op de laagste van de 12 standen en bouwt rustig op. Hij is speciaal gemaakt om zacht te zijn voor kwetsbaar weefsel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is de verpakking gênant?</h3>
                <p className="text-gray-700">
                  Totaal niet. Ze verzenden in een neutrale bruine doos zonder logo’s. Op het retouradres staat alleen ‘Care & Bloom Ltd.’ Volledig discreet, gegarandeerd.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">En als ik het niks vind?</h3>
                <p className="text-gray-700">
                  Hello Nancy geeft je 30 dagen tevredenheidsgarantie. Bevalt het je niet? Dan krijg je eenmalig en uit coulance je geld terug – <strong>zonder iets terug te sturen</strong>. Ze vertrouwen erop dat jij zelf ontdekt wat bij jouw lichaam past.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kan ik ’m onder de douche of in bad gebruiken?</h3>
                <p className="text-gray-700">
                  Ja! Hij is waterdicht volgens IPX7, dus je mag ’m helemaal onderdompelen. Veel vrouwen merken dat warm water de ontspanning en het gevoel nog versterkt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hoeveel geluid maakt hij?</h3>
                <p className="text-gray-700">
                  Fluisterstil. Dankzij de ultrastille motor is hij volledig discreet – je gebruikt ’m zonder bang te zijn dat iemand het hoort, zelfs niet in de kamer ernaast.
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
              Onze eindconclusie
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Na weken onderzoek, gesprekken met experts en interviews met gebruikers is onze redactie ervan overtuigd: de Nancy's Lem pakt een echte medische behoefte aan die veel te lang over het hoofd is gezien.
              </p>
              <p>
                Dit gaat niet om ijdelheid of een stiekeme verwennerij – het gaat om je weefsel gezond houden, beter slapen en een stukje van jezelf terugpakken dat de overgang je probeert af te nemen.
              </p>
              <p className="text-xl font-bold">
                Heb je last van GSM-klachten, loop je vast op de gewone oplossingen, of wil je gewoon je seksueel welzijn behouden nu je ouder wordt? Dan verdient de Lem een eerlijke kans.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, senior wellnessredacteur
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
                Koop de Nancy's Lem – € 77,95
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 dagen garantie ✓ Gratis verzending ✓ Discrete verpakking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate-disclaimer</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider draait op steun van lezers. Koop je iets via een link op onze site, dan kunnen wij een affiliatecommissie ontvangen, zonder extra kosten voor jou. Zo kunnen we onze artikelen op basis van onderzoek gratis blijven aanbieden. We raden alleen producten aan die onze redactie grondig heeft gecontroleerd en waarvan we geloven dat onze lezers er echt iets aan hebben. Alle meningen zijn die van onszelf en worden niet beïnvloed door vergoedingen.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Over ons</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider maakt onderbouwde gezondheids- en wellnessjournalistiek voor de vrouw van nu.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categorieën</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Gezondheid</li>
                  <li>Wellness</li>
                  <li>Seks & relaties</li>
                  <li>Productreviews</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Over de Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Productdetails</li>
                  <li>Klantreviews</li>
                  <li>Verzending & retourneren</li>
                  <li>Contact: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Vertrouwen & veiligheid</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materialen van medische kwaliteit</li>
                  <li>✓ Discrete verzending</li>
                  <li>✓ 30 dagen garantie</li>
                  <li>✓ 12 maanden garantie</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Alle rechten voorbehouden. Onze redactie is onafhankelijk en objectief.</p>
              <p className="mt-2">Uitgelicht product: Nancy's Lem van Hello Nancy • winnaar van de Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
