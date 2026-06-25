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
    { src: "/PDP.jpg", alt: "Nancy's Lem wellnessapparaat" },
    { src: "/PDP-1.jpg", alt: "Lem in een lifestyle-omgeving" },
    { src: "/PDP-2.jpg", alt: "Close-up van het ontwerp van de Lem" },
    { src: "/PDP-3.jpg", alt: "Productdetails van de Lem" },
    { src: "/PDP-4.jpg", alt: "Demonstratie van de Lem in gebruik" },
    { src: "/PDP-5.jpg", alt: "Verpakking en accessoires van de Lem" },
    { src: "/PDP-6.jpg", alt: "Lifestyle-afbeelding van de Lem" },
    { src: "/PDP-7.jpg", alt: "Productkenmerken van de Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Vertrouwde vrouwengezondheid</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7 (14.907 reviews) • 1M+ Verkocht</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">€ 73,95</span>
                  <span className="text-sm line-through text-white/70">€ 128,95</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">BESPAAR € 55,00</span>
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
                  Nu Kopen
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
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUCT REVIEW</span>
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
          alt="Nancy's Lem wellnessapparaat op een nachtkastje"
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
              <p className="font-medium text-gray-900">Gratis verzending wereldwijd</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom we het hierover hebben</h2>
          <p className="text-gray-700 leading-relaxed">
            Toen ons redactieteam voor het eerst hoorde over een ‘citroenvormig wellnessapparaat’ dat de menopauzegemeenschap stormenderhand veroverde, waren we eerlijk gezegd sceptisch. Maar na tientallen vrouwen te hebben gesproken, overleg met gynaecologen en, ja, het zelf te hebben getest, snappen we de hype.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dit is niet zomaar een wellnesstrend. Het pakt een echt medisch probleem aan dat miljoenen vrouwen treft, maar zelden wordt besproken: <strong>clitorale atrofie</strong> en het verlies van seksueel welzijn tijdens de menopauze.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Het gesprek waar niemand ons voor waarschuwde</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We horen alles over de opvliegers die ons om 3 uur 's nachts door onze zijden lakens laten zweten. We horen over de hersenmist waardoor we onze bril zoeken terwijl die op onze neus staat.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Maar niemand zet je neer met een glas pinot en fluistert: “Hé, trouwens, als je de boel daar beneden niet actief houdt, kan je clitoris echt krimpen.”
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het heet <strong>clitorale atrofie</strong> en het is onderdeel van het genito-urinair syndroom van de menopauze (GSM) – een aandoening die tot 50% van de postmenopauzale vrouwen treft, volgens de North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">‘De grote ontkoppeling’</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Voor veel vrouwen die we spraken, was het niet alleen droogheid. Het was de <strong>gevoelloosheid</strong>. Een tester beschreef hoe ze haar oude vibrator uit haar dertiger jaren probeerde te gebruiken: “In plaats van goed te voelen, voelde het gewoon… irritant. Of gevoelloos. Alsof je eelt probeert te kietelen.”
            </p>
            <p className="text-gray-700 leading-relaxed">
              Medische experts leggen uit dat traditionele vibrators werken op wrijving en impact. Wanneer het weefsel dunner wordt door een laag oestrogeengehalte, kan directe vibratie de zenuwen juist <em>verder verdoven</em>, wat leidt tot dat ‘gevoelloze’ gevoel.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">“Stop met vibreren. Begin met zuigen.”</p>
            <p className="text-gray-700">– Bekkenbodemspecialisten</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynaecologen die gespecialiseerd zijn in menopauzezorg leggen uit: “Wanneer oestrogeen daalt, neemt de bloedtoevoer naar het bekkengebied af. Dit leidt tot weefselverdunning, verlies van elasticiteit en verminderde sensatie. De medische wereld noemt het het use-it-or-lose-it-principe: je hebt een constante bloedtoevoer nodig om de weefselgezondheid te behouden.”
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maak kennis met de Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En daar komt dit kleine gele apparaatje om de hoek kijken. De Nancy's Lem wordt niet in de markt gezet als seksspeeltje, maar als wellnessapparaat. En na ons onderzoek snappen we waarom.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anders dan traditionele vibrators, die afhankelijk zijn van wrijving (wat verdund menopauzaal weefsel kan irriteren), gebruikt de Lem iets dat <strong>luchtdruktechnologie</strong> heet. Zie het als het verschil tussen schuurpapier over je huid wrijven en een zachte vacuümmassage.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De wetenschap: waarom luchtdruktechnologie werkt</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditionele vibrators:</p>
              <p className="text-red-700 text-sm">Werken op oppervlaktewrijving die gevoelig, verdund weefsel kan irriteren. Kan gevoelloosheid of microscheurtjes veroorzaken.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Luchtdruktechnologie:</p>
              <p className="text-green-700 text-sm">Maakt zachte zuiggolven zonder direct contact. Trekt zuurstofrijk bloed naar de weefsels, wat de gezondheid en het gevoel bevordert.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Zo werkt het: de Lem maakt een zachte afsluiting rond de clitoris en gebruikt golven van luchtdruk om deze te stimuleren. Het bootst het gevoel van orale seks na, maar dan constant en onvermoeibaar. Omdat er geen wrijving is, is er ook geen irritatie.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Maar de echte magie zit in de natuurkunde: die zachte zuigkracht zorgt voor een vacuümeffect dat diep, zuurstofrijk bloed naar de weefsels trekt. Het maakt zenuwen wakker die jarenlang hebben geslapen.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              “Het voelt alsof het het orgasme er recht uit trekt… het houdt het kloppen veel langer gaande.”
            </p>
            <p className="font-semibold text-gray-700">– Alisha, bètatester (uit geverifieerde klantreviews)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hoe verhoudt het zich? Onze vergelijking</h2>
          <p className="text-center text-gray-600 mb-8">We vergeleken de Lem met traditionele oplossingen voor menopauzale weefselgezondheid</p>
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
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">€ 73,95 (eenmalig)</td>
                  <td className="border border-gray-300 p-4 text-center">€ 50–150</td>
                  <td className="border border-gray-300 p-4 text-center">€ 30–50/maand</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">De anti-schaamte-ontwerpfilosofie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eén ding dat ons redactieteam opviel tijdens het testen: het ontwerp is <em>bewust</em> discreet. Het is felgeel, past in je handpalm en ziet er echt uit als een decoratieve citroen.
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
              We hebben allemaal die lade. De <em>schaamlade</em>. Waar we de lelijke, fallische plastic apparaten onder oude sokken verstoppen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Een van onze testers vertelde dit: “Ik liet mijn Lem per ongeluk op mijn badkamermeubel liggen toen mijn schoonmoeder op bezoek kwam. Ze pakte het op en zei: ‘O, is dit zo'n nieuwe sonische gezichtsreiniger? Hij voelt zo zacht!’”
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Het doorstaat de nachtkastjetest. Het ziet eruit als luxe zelfzorgtechnologie, niet als een seksspeeltje. En dat is precies wat het is.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Waarschuwing voor goedkope namaak</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Na het verschijnen van onze eerste recensie vroegen lezers waarom ze niet gewoon de versie van € 20 op Amazon konden kopen. Dit is wat medische experts zeggen.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              “Goedkope speeltjes gebruiken poreuze jelly- of TPE-materialen,” waarschuwde ze. “Microscopische bacteriën raken gevangen in de poriën, en dat is een enorm risico voor vrouwen in de menopauze die toch al vatbaar zijn voor urineweginfecties.”
            </p>
            <p className="text-red-900 font-bold mt-3">
              De Hello Nancy Lem is 100% niet-poreus siliconen van medische kwaliteit. Riskeer je gezondheid niet om € 20 te besparen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Fluisterstil</h3>
                <p className="text-gray-600 text-sm">
                  Ultra-stille motor voor volledige discretie
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterdicht (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfect voor gebruik in bad of douche
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Siliconen van medische kwaliteit</h3>
                <p className="text-gray-600 text-sm">
                  Lichaamsveilig, niet-poreus en makkelijk schoon te maken
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De unboxing: de eerste indruk telt</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="Unboxing-ervaring van de Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Een van de eerste dingen die onze testers opviel? De verpakking is <em>elegant</em>. Geen schreeuwerige kleuren, geen gênante afbeeldingen. De doos is minimalistisch wit met subtiele gouden accenten – je zou hem zo aanzien voor een luxe huidverzorgingsproduct.
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
                    <span>Zacht fluwelen opbergzakje (perfect voor onderweg)</span>
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
                “Toen ik de doos opende, was ik oprecht verrast door hoe <strong>premium</strong> alles aanvoelde. Het voelde niet als een seksspeeltje – het voelde als een investering in mezelf.” – Testgebruiker, 54 jaar
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Even over anatomie: waarom clitorale stimulatie ertoe doet</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/clitoral_anatomy_illustration.png" 
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
                Iets wat je niet leert tijdens de biologieles: de clitoris heeft ongeveer <strong>8.000 zenuwuiteinden</strong> – meer dan welk ander deel van het menselijk lichaam ook, man of vrouw. Ter vergelijking: de penis heeft er ongeveer 4.000.
              </p>
              <p>
                Maar nu het addertje onder het gras: <strong>75% van de vrouwen kan niet klaarkomen door penetratie alleen</strong>, volgens onderzoek in het Journal of Sex & Marital Therapy. De clitoris is de sleutel.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Wat er gebeurt tijdens de menopauze</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/menopause_science_illustration.png" 
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
                Gynaecologen zeggen het botweg: “Zie het als training voor je bekkenbodem. Als je die spieren niet gebruikt en de bloedstroom niet op peil houdt, verzwakken ze. Hetzelfde geldt voor clitoraal weefsel.”
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 De conclusie:</p>
                <p className="text-gray-700">
                  Regelmatige clitorale stimulatie gaat niet alleen om genot (al is dat een mooie bonus). Het gaat om het behouden van je weefselgezondheid en je zenuwfunctie, en om het voorkomen van onomkeerbare veranderingen door verwaarlozing. Dit is <em>preventieve gezondheidszorg</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">“Maar hoe zit het met mijn partner?” Dat vroegen wij ons ook af</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Het ‘drieminutenwonder’ (en waarom partners er dol op zijn)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even eerlijk: voor veel vrouwen boven de 50 kan het 20 minuten of meer duren (plus de nodige mentale gymnastiek) om in de buurt van een hoogtepunt te komen. Met de Lem? <strong className="text-[#FF1493]">Drie minuten.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Het grootste bezwaar dat vrouwen hebben:</strong> “Voelt mijn partner zich straks vervangen?”
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absoluut niet.</strong> De Lem is klein. Veel stellen gebruiken hem <em>tijdens</em> het vrijen. Hij werkt als een brug die ervoor zorgt dat je volledig opgewonden en natuurlijk vochtig bent, waardoor je partner geen druk voelt om te ‘presteren’.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Een tester vertelde ons: “Het maakte van onze slaapkamer weer een speeltuin in plaats van een plek vol spanning.”
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Een van de vragen die we tijdens ons onderzoek het vaakst hoorden: <em>“Voelt mijn partner zich hierdoor bedreigd?”</em>
              </p>
              <p>
                Dit is wat we ontdekten: <strong>de Lem is geen vervanging, maar een verrijking.</strong> Veel stellen die we spraken, vertelden dat de Lem hun intieme momenten en hun verbinding juist <em>verbeterde</em>.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  “Mijn man was nieuwsgierig, niet bedreigd. Nu gebruikt hij hem bij mij tijdens het voorspel. Het haalt de druk bij hem weg om te ‘presteren’ en ik krijg precies wat ik nodig heb. Iedereen wint.”
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, 28 jaar getrouwd</p>
              </div>
              <p>
                Door zijn compacte formaat past hij moeiteloos in het samenspel met je partner, zonder dat het omslachtig aanvoelt. En omdat hij handsfree is zodra hij op zijn plek zit, kunnen jullie je allebei op elkaar concentreren.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Manieren waarop stellen de Lem gebruiken:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Tijdens het voorspel</p>
                    <p className="text-sm text-gray-600">Je partner houdt hem op zijn plek tijdens het kussen en aanraken</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Tijdens het vrijen</p>
                    <p className="text-sm text-gray-600">Geplaatst voor gelijktijdige clitorale en penetratieve stimulatie</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo terwijl je partner kijkt</p>
                    <p className="text-sm text-gray-600">Bouwt intimiteit op en helpt je partner te ontdekken wat werkt</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">‘Onderhoud’ tussen de sessies door</p>
                    <p className="text-sm text-gray-600">Solo gebruik houdt het weefsel gezond als seks met je partner minder vaak voorkomt</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Communicatie is alles. Zie het als een wellnesstool waar <em>jullie allebei</em> baat bij hebben: minder druk, meer genot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Alle reden om het te proberen, geen reden tot zorg</h2>
          <p className="text-center text-xl text-gray-600 mb-8">We hebben de garanties van Hello Nancy onder de loep genomen. Dit is wat ze echt betekenen.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 dagen ‘pleziergarantie’</h3>
                <p className="text-sm text-gray-700 text-center">
                  Niet tevreden? Dan krijg je je <strong>geld volledig terug</strong> – zonder iets terug te sturen. Ze vertrouwen erop dat je eerlijk bent. Zo zeker zijn ze van hun zaak.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oftewel: geen enkel financieel risico. Probeer het gewoon een maand.
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
                  Gaat er in het eerste jaar iets mis met het apparaatje, dan vervangen ze het. Gratis. Zonder gedoe.
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
                  Vragen over het gebruik? Twijfels over het schoonmaken? Het klantenserviceteam reageert binnen 24 uur.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Oftewel: je koopt geen product. Je wordt onderdeel van een community.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">De echte vraag: wat heb je te verliezen?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                We hebben de wetenschap behandeld. We hebben je de reviews laten zien. We hebben de garanties uitgelegd. Op dit punt is het enige risico om het <em>niet</em> te proberen.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Even rekenen:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Als je het probeert:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Je herontdekt misschien genot waarvan je dacht dat het weg was</li>
                      <li>✓ Je verbetert misschien je weefselgezondheid en voorkomt atrofie</li>
                      <li>✓ Je slaapt misschien beter (orgasmes maken oxytocine vrij)</li>
                      <li>✓ In het slechtste geval krijg je je € 73,95 terug</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Als je het niet doet:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• De weefselatrofie gaat door</li>
                      <li>• Je zenuwgevoeligheid blijft afnemen</li>
                      <li>• Je seksueel welzijn blijft een worsteling</li>
                      <li>• Je blijft je afvragen: ‘wat als?’</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Waarom Hello Nancy ons vertrouwen heeft gewonnen</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We raden producten niet zomaar aan. Dit is waarom Hello Nancy onze redactionele lat haalde.
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
              <p className="text-sm text-gray-600">Gemiddeld 4,7★ van 14.907 geverifieerde kopers (geen nepreviews)</p>
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
                  “Ik kocht dit niet voor de lol, maar omdat mijn dokter zei dat ik bloedstroom nodig had. Maar wauw. De ontlading helpt me de nacht door te slapen zonder zwetend wakker te worden. Het is mijn nieuwe vitamine.”
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
                  “Ik had eerder de Lelo Sona geprobeerd, maar die was te sterk voor mij. De Lem is zacht genoeg voor mijn gevoeligheid, maar diep genoeg om echt te werken. 10/10.”
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
                <p className="font-bold text-gray-900">“Ik ben verslaafd”</p>
                <p className="text-gray-700 italic">
                  “Ik ben verslaafd. De Lem zuigt en trekt op de wildste manier. Als je klaarkomt, voelt het alsof het het orgasme eruit trekt en gaat het kloppen veel langer door. Zóóó goed!”
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
                  “Voor iemand die discretie in intieme producten belangrijk vindt, bestaat er geen betere keuze. De zuigkracht is anders dan alles wat ik eerder heb geprobeerd.”
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
              Na grondig testen en onderzoek beveelt ons redactieteam de Nancy's Lem van harte aan voor vrouwen die menopauzale weefselveranderingen ervaren.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">BESPAAR € 55</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ TIJDELIJKE LEZERSAANBIEDING ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Aanbieding verloopt in:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem clitorisstimulator</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">€ 73,95</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">€ 128,95</span>
                      <span className="text-sm text-green-600 font-bold">Bespaar € 55 (43% korting)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Inclusief btw</p>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Slechts € 0,20 per dag</strong> over een jaar gebruik
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Minder dan je dagelijkse koffie. En het gaat jaren mee.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LEZERSTIP: gebruik code <span className="font-bold text-[#FF1493]">TIFFANY</span> of <span className="font-bold text-[#FF1493]">ISABELLA</span> bij het afrekenen voor een extra verrassing!</p>
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
                    Nu kopen – € 73,95 (bespaar € 55)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Risicovrije garantie
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 dagen niet-goed-geld-terug. Bevalt het je niet, dan krijg je je geld volledig terug – <strong>zonder iets terug te sturen</strong>.
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
            Duizenden vrouwen boven de 50 zeggen ‘ja’. Kijk of je je in een van deze punten herkent:
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
                    <span>Minder gevoel ervaart of moeite hebt om klaar te komen</span>
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
                    <span>Klaar bent om je seksueel welzijn en zelfvertrouwen terug te winnen</span>
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
                    <span>Je moe bent van producten die <strong>niet werken voor volwassen lichamen</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je <strong>doordacht ontwerp</strong> waardeert dat je privacy respecteert</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je bereid bent om <strong>in jezelf te investeren</strong> (slechts € 0,20 per dag over een jaar!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je <strong>resultaten wilt zonder bijwerkingen</strong> of recepten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Je er klaar mee bent om te accepteren dat <strong>‘het nu eenmaal zo is’</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Herken je je in zelfs maar 3 van deze punten?</strong> Dan is de Lem speciaal voor jou ontworpen.
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
          <p className="text-center text-gray-600 mb-12">We legden Hello Nancy de vragen voor die onze lezers wilden stellen</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Doet dit pijn als ik gevoelig ben of atrofie heb?</h3>
                <p className="text-gray-700">
                  Helemaal niet. Omdat het luchtdruk gebruikt in plaats van directe contactvibratie, vermijdt het de wrijving die pijn veroorzaakt. Je begint op de laagste van de 12 standen en bouwt rustig op. Het is speciaal ontworpen om zacht te zijn voor delicaat weefsel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is de verpakking gênant?</h3>
                <p className="text-gray-700">
                  Totaal niet. Ze verzenden in gewone bruine dozen zonder logo's. Op het retouradres staat alleen ‘Care & Bloom Ltd.’ Volledige discretie gegarandeerd.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">En als ik het niks vind?</h3>
                <p className="text-gray-700">
                  Hello Nancy biedt 30 dagen tevredenheidsgarantie. Bevalt het je niet, dan krijg je eenmalig je geld terug uit coulance – <strong>zonder iets terug te sturen</strong>. Ze vertrouwen erop dat jij ontdekt wat voor jouw lichaam werkt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kan ik het onder de douche of in bad gebruiken?</h3>
                <p className="text-gray-700">
                  Ja! Het is waterdicht volgens IPX7, wat betekent dat je het volledig kunt onderdompelen. Veel gebruikers merken dat warm water de ontspanning en het gevoel versterkt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hoeveel geluid maakt het?</h3>
                <p className="text-gray-700">
                  Fluisterstil. De ultrastille motor zorgt voor volledige discretie – je gebruikt het zonder bang te zijn dat iemand het hoort, zelfs niet in de kamer ernaast.
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
                Na weken van onderzoek, gesprekken met experts en interviews met gebruikers gelooft ons redactieteam dat de Nancy's Lem een echte medische behoefte aanpakt die te lang over het hoofd is gezien.
              </p>
              <p>
                Dit gaat niet om ijdelheid of een stiekeme verwennerij – het gaat om het behouden van je weefselgezondheid, het verbeteren van je nachtrust en het terugwinnen van een deel van jezelf dat de menopauze je probeert af te nemen.
              </p>
              <p className="text-xl font-bold">
                Heb je last van GSM-symptomen, worstel je met traditionele oplossingen, of wil je gewoon je seksueel welzijn behouden naarmate je ouder wordt? Dan verdient de Lem een serieuze kans.
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
                Koop de Nancy's Lem – € 73,95
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30-dagen garantie ✓ Gratis verzending ✓ Discrete verpakking</p>
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
                Wellness Insider wordt ondersteund door lezers. Wanneer je via links op onze site koopt, kunnen we een affiliatecommissie verdienen, zonder extra kosten voor jou. Zo kunnen we gratis, op onderzoek gebaseerde inhoud blijven bieden. We raden alleen producten aan die ons redactieteam grondig heeft gecontroleerd en waarvan we geloven dat ze onze lezers ten goede komen. Alle geuite meningen zijn van onszelf en worden niet beïnvloed door vergoedingen.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Over ons</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider biedt gezondheids- en wellnessjournalistiek op basis van bewijs, voor moderne vrouwen.
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
              <p>© 2025 Wellness Insider. Alle rechten voorbehouden. Onze redactionele inhoud is onafhankelijk en objectief.</p>
              <p className="mt-2">Uitgelicht product: Nancy's Lem van Hello Nancy • winnaar Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
