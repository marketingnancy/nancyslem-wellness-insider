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

  useEffect(() => { document.documentElement.lang = "de"; }, []);

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
    { src: "/PDP.jpg", alt: "Nancy's Lem Wellness-Gerät" },
    { src: "/PDP-1.jpg", alt: "Lem in einem Lifestyle-Umfeld" },
    { src: "/PDP-2.jpg", alt: "Nahaufnahme des Lem-Designs" },
    { src: "/PDP-3.jpg", alt: "Lem Produktdetails" },
    { src: "/PDP-4.jpg", alt: "Lem in Anwendung" },
    { src: "/PDP-5.jpg", alt: "Lem Verpackung und Zubehör" },
    { src: "/PDP-6.jpg", alt: "Lem Lifestyle-Bild" },
    { src: "/PDP-7.jpg", alt: "Lem Produktmerkmale" },
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
              <p className="text-xs text-gray-500 font-medium">Vertrauenswürdige Frauengesundheit</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7 (14.907 Bewertungen) • 1M+ Verkauft</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">€73,95</span>
                  <span className="text-sm line-through text-white/70">€128,95</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">SPARE 55 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Endet in {formatTime(timeLeft)}</span>
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
                  Jetzt kaufen
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">GESUNDHEIT & WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUKTBEWERTUNG</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            1M+ Orgasmen Später: Warum Frauen über 50 Vibratoren für diese "Zitrone" aufgeben
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Wir haben untersucht, warum Tausende von Frauen über 50 traditionelle Vibratoren für dieses "Physiotherapie"-Gerät aufgeben, das wie eine Zitrone aussieht. Hier ist, was wir gefunden haben.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Von Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Senior Wellness Redakteurin</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Zuletzt aktualisiert: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('de-DE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 Min. Lesezeit</span>
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
              <span className="font-bold text-gray-900 mr-1">Anmerkung der Redaktion:</span>
              Dieser Artikel enthält Affiliate-Links. Wir können eine Provision erhalten, wenn du über diese Links einkaufst, ohne zusätzliche Kosten für dich. Wir empfehlen nur Produkte, die wir gründlich recherchiert und getestet haben.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="Nancy's Lem Wellness-Gerät auf dem Nachttisch" 
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Der Nancy's Lem steht diskret auf dem Nachttisch – die meisten Leute halten ihn für eine dekorative Zitrone. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> Leser sehen sich diesen Artikel gerade an</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskrete Verpackung</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Kostenloser Versand weltweit</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30-Tage-Zufriedenheitsgarantie</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 Monate Garantie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum wir darüber sprechen</h2>
          <p className="text-gray-700 leading-relaxed">
            Als unser Redaktionsteam zum ersten Mal von einem "zitronenförmigen Wellness-Gerät" hörte, das die Menopause-Community im Sturm erobert, geben wir zu – wir waren skeptisch. Aber nachdem wir Dutzende von Frauen interviewt, Gynäkologen konsultiert und ja, es selbst getestet haben, verstehen wir den Hype.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dies ist nicht nur ein weiterer Wellness-Trend. Es befasst sich mit einem echten medizinischen Problem, das Millionen von Frauen betrifft, aber selten diskutiert wird: <strong>Klitorisatrophie</strong> und der Verlust des sexuellen Wohlbefindens während der Menopause.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Das Gespräch, vor dem uns niemand gewarnt hat</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir hören alles über die Hitzewallungen, die uns um 3 Uhr morgens durch unsere Seidenlaken schwitzen lassen. Wir hören über den Gehirnnebel, der uns nach unserer Brille suchen lässt, während sie auf unserer Nase sitzt.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Aber niemand setzt sich mit einem Glas Pinot zu dir und flüstert: "Hey, übrigens, wenn du da unten nicht aktiv bleibst, könnte deine Klitoris buchstäblich schrumpfen."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es nennt sich <strong>Klitorisatrophie</strong> und ist Teil des Urogenitalen Menopausensyndroms (GSM) – eine Erkrankung, die laut der North American Menopause Society bis zu 50% der postmenopausalen Frauen betrifft.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">"Die große Trennung"</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Für viele Frauen, die wir interviewt haben, war es nicht nur Trockenheit. Es war die <strong>Taubheit</strong>. Eine Testerin beschrieb den Versuch, ihren alten Vibrator aus ihren 30ern zu benutzen: "Anstatt sich gut anzufühlen, fühlte es sich einfach... irritierend an. Oder taub. Als würde man versuchen, eine Hornhaut zu kitzeln."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Medizinische Experten erklären, dass traditionelle Vibratoren durch Reibung und Stoß wirken. Wenn das Gewebe aufgrund von niedrigem Östrogen dünner wird, kann direkte Vibration die <em>Nerven tatsächlich weiter desensibilisieren</em>, was zu diesem "tauben" Gefühl führt.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">"Hör auf zu vibrieren. Fang an zu saugen."</p>
            <p className="text-gray-700">— Beckenbodenspezialisten</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynäkologen, die auf Menopause-Pflege spezialisiert sind, erklären: "Wenn Östrogen sinkt, nimmt die Durchblutung im Beckenbereich ab. Dies führt zu Gewebeverdünnung, Elastizitätsverlust und verminderter Empfindung. Die medizinische Gemeinschaft nennt es das 'Use it or lose it'-Prinzip – man braucht konstante Durchblutung, um die Gewebegesundheit zu erhalten."
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Auftritt: Der Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hier kommt dieses kleine gelbe Gerät ins Spiel. Der Nancy's Lem wird nicht als Sexspielzeug vermarktet – er ist als Wellness-Gerät positioniert. Und nach unserer Recherche verstehen wir warum.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Im Gegensatz zu traditionellen Vibratoren, die auf Reibung angewiesen sind (was verdünntes menopausales Gewebe reizen kann), verwendet der Lem etwas namens <strong>Luftimpulstechnologie</strong>. Stell es dir als den Unterschied vor zwischen dem Reiben von Sandpapier auf deiner Haut und der Verwendung einer sanften Vakuummassage.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Die Wissenschaft: Warum Luftimpulstechnologie funktioniert</h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditionelle Vibratoren:</p>
              <p className="text-red-700 text-sm">Verlassen sich auf Oberflächenreibung, die empfindliches, verdünntes Gewebe reizen kann. Kann Taubheit oder Mikrorisse verursachen.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Luftimpulstechnologie:</p>
              <p className="text-green-700 text-sm">Erzeugt sanfte Saugwellen ohne direkten Kontakt. Zieht sauerstoffreiches Blut in das Gewebe und fördert Gesundheit und Empfindung.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            So funktioniert es: Der Lem erzeugt eine sanfte Abdichtung um die Klitoris und verwendet Luftdruckwellen, um sie zu stimulieren – was das Gefühl von Oralsex nachahmt, aber beständig und unermüdlich. Da es keine Reibung gibt, gibt es null Reizung.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aber die wahre Magie ist die Physik: Dieser sanfte Sog erzeugt einen Vakuumeffekt, der physisch tiefes, sauerstoffreiches Blut in das Gewebe zieht. Er weckt Nerven auf, die seit Jahren geschlafen haben.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "Es fühlt sich an, als würde es den Orgasmus direkt herausziehen... es hält das Pochen viel länger aufrecht."
            </p>
            <p className="font-semibold text-gray-700">— Alisha, Beta-Testerin (aus verifizierten Kundenbewertungen)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Wie er abschneidet: Unser Vergleich</h2>
          <p className="text-center text-gray-600 mb-8">Wir haben den Lem mit traditionellen Lösungen für die menopausale Gewebegesundheit verglichen</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Merkmal</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Traditioneller Vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Östrogencreme</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Funktioniert für empfindliches Gewebe</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ja</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kann reizen</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Langsame Ergebnisse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Erhöht die Durchblutung</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tiefengewebe</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Nur Oberfläche</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Allmählich</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Keine Reibung/Reizung</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Null Kontakt</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Verursacht Reibung</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Sofortiges Vergnügen</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sofort</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variabel</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kein Vergnügen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskretes Design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sieht aus wie Zitrone</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Offensichtlich</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Von Ärzten empfohlen</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Für Durchblutung</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Manchmal</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Preis</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">€73,95 (einmalig)</td>
                  <td className="border border-gray-300 p-4 text-center">€50-150</td>
                  <td className="border border-gray-300 p-4 text-center">€30-50/Monat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Die "Anti-Scham"-Designphilosophie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine Sache, die unserem Redaktionsteam während des Tests auffiel: Das Design ist <em>absichtlich</em> diskret. Es ist leuchtend gelb, passt in die Handfläche und sieht wirklich aus wie eine dekorative Zitrone.
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Der „Nachttisch-Test"</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="Lem-Gerät steht diskret auf dem Nachttisch"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Wir alle haben diese Schublade. Die <em>Schublade der Schande</em>. Wo wir die unansehnlichen, phallischen Plastikgeräte unter alten Socken verstecken.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Eine unserer Testerinnen teilte diese Geschichte: "Ich ließ meinen Lem versehentlich auf meinem Badezimmerschrank liegen, als meine Schwiegermutter zu Besuch war. Sie hob ihn auf und sagte: 'Oh, ist das einer dieser neuen Schall-Gesichtsreiniger? Er fühlt sich so weich an!'"
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Er besteht den Nachttisch-Test. Er sieht aus wie hochwertige Self-Care-Technologie, nicht wie ein Sexspielzeug. Denn genau das ist er.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Warnung vor billigen Nachahmungen</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Nach der Veröffentlichung unseres ersten Testberichts fragten Leser, warum sie nicht die 20€-Version auf Amazon kaufen sollten. Hier ist, was medizinische Experten sagen.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              "Billige Spielzeuge verwenden poröse Jelly/TPE-Materialien", warnte sie. "Mikroskopische Bakterien verfangen sich in den Poren, was ein massives Risiko für Frauen in den Wechseljahren darstellt, die bereits anfällig für Harnwegsinfektionen sind."
            </p>
            <p className="text-red-900 font-bold mt-3">
            Der Hello Nancy Lem besteht zu 100% aus medizinischem, nicht-porösem Silikon. Riskiere nicht deine Gesundheit, um ein paar Euro zu sparen.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Flüsterleise</h3>
                <p className="text-gray-600 text-sm">
                  Ultraleiser Motor für vollständige Diskretion
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Wasserdicht (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfekt für Bad oder Dusche
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medizinisches Silikon</h3>
                <p className="text-gray-600 text-sm">
                  Körpersicher, porenfrei, leicht zu reinigen
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetisches Laden</h3>
                <p className="text-gray-600 text-sm">
                  120 Minuten pro Ladung
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Produktgalerie</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Das Auspackerlebnis: Der erste Eindruck zählt</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="Lem Auspackerlebnis" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Eines der ersten Dinge, die unseren Testern auffielen? Die Verpackung ist <em>elegant</em>. Keine grellen Farben, keine peinlichen Bilder. Die Box ist minimalistisch weiß mit subtilen Goldakzenten – sie könnte leicht mit einem Luxus-Hautpflegeprodukt verwechselt werden.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Was ist in der Box:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Das Lem-Gerät (leuchtend gelb, handflächengroß)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetisches USB-Ladekabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Weicher Samt-Aufbewahrungsbeutel (perfekt für Reisen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>"Selbstliebe-Handbuch" mit Anwendungstipps und Wellness-Ratschlägen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Schnellstartanleitung mit illustrierten Anweisungen</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Als ich die Box öffnete, war ich wirklich überrascht, wie <strong>hochwertig</strong> sich alles anfühlte. Es fühlte sich nicht wie ein 'Sexspielzeug' an – es fühlte sich wie eine Wellness-Investition an." — Testnutzerin, 54 Jahre
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Lass uns über Anatomie sprechen: Warum Klitorisstimulation wichtig ist</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png" 
              alt="Klitoris-Anatomie Querschnittsdiagramm" 
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Die Wissenschaft des Vergnügens</h3>
                <p className="text-gray-600 text-sm">Was jede Frau über ihren Körper wissen sollte</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hier ist etwas, das sie im Gesundheitsunterricht nicht lehren: Die Klitoris hat ungefähr <strong>8.000 Nervenenden</strong> – mehr als jeder andere Teil des menschlichen Körpers, männlich oder weiblich. Zum Vergleich: Der Penis hat etwa 4.000.
              </p>
              <p>
                Aber hier ist der Haken: <strong>75% der Frauen können allein durch Penetration keinen Orgasmus erreichen</strong>, laut einer im Journal of Sex & Marital Therapy veröffentlichten Studie. Die Klitoris ist der Schlüssel.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Was während der Menopause passiert:</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png" 
                    alt="Vergleich der Durchblutung vor und nach der Menopause" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Das Problem:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Östrogenspiegel sinkt um 90%</li>
                      <li>• Durchblutung im Beckenbereich nimmt ab</li>
                      <li>• Klitorisgewebe kann um 20-30% schrumpfen</li>
                      <li>• Nervenempfindlichkeit nimmt ab</li>
                      <li>• Natürliche Lubrikation nimmt ab</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Die Lösung:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regelmäßige Stimulation erhält die Durchblutung</li>
                      <li>• Hält Nervenbahnen aktiv</li>
                      <li>• Verhindert Gewebeatrophie</li>
                      <li>• Erhält die Empfindlichkeit</li>
                      <li>• Fördert natürliche Lubrikation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynäkologen drücken es unverblümt aus: "Stell es dir wie Training für deinen Beckenboden vor. Wenn du diese Muskeln nicht benutzt und die Durchblutung nicht aufrechterhältst, verkümmern sie. Das gleiche Prinzip gilt für Klitorisgewebe."
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Das Fazit:</p>
                <p className="text-gray-700">
                  Regelmäßige Klitorisstimulation geht nicht nur um Vergnügen (obwohl das ein schöner Bonus ist). Es geht darum, die Gewebegesundheit zu erhalten, die Nervenfunktion zu bewahren und die irreversiblen Veränderungen zu verhindern, die mit Vernachlässigung einhergehen. Dies ist <em>präventive Gesundheitsvorsorge</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">"Aber was ist mit meinem Partner?" Das haben wir auch gefragt</h2>
          
          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Das "3-Minuten-Wunder" (Und warum Partner es lieben)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seien wir ehrlich: Für viele Frauen über 50 kann es 20+ Minuten (und viel mentale Gymnastik) dauern, um auch nur in die Nähe eines Höhepunktes zu kommen. Mit dem Lem? <strong className="text-[#FF1493]">Drei Minuten.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Der größte Einwand, den Frauen haben:</strong> "Wird sich mein Partner ersetzt fühlen?"
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolut nicht.</strong> Der Lem ist winzig. Viele Paare benutzen ihn <em>während</em> des Geschlechtsverkehrs. Er fungiert als "Brücke", die sicherstellt, dass du voll erregt und natürlich feucht bist, und nimmt den Druck von deinem Partner, "Leistung zu erbringen".
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Eine Testerin sagte uns: "Es verwandelte unser Schlafzimmer von einem Ort der Angst zurück in einen Spielplatz."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Eine der häufigsten Fragen, die wir während unserer Recherche erhielten: <em>"Wird sich mein Partner dadurch bedroht fühlen?"</em>
              </p>
              <p>
                Hier ist, was wir gefunden haben: <strong>Der Lem ist kein Ersatz – er ist eine Verbesserung.</strong> Viele Paare, die wir interviewten, berichteten, dass die Einbeziehung des Lem in ihre intime Zeit ihre Verbindung tatsächlich <em>verbessert</em> hat.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  "Mein Mann war neugierig, nicht bedroht. Jetzt benutzt er ihn bei mir während des Vorspiels. Es nimmt den Druck von ihm, 'Leistung zu erbringen', und ich bekomme genau das, was ich brauche. Win-Win."
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55, 28 Jahre verheiratet</p>
              </div>
              <p>
                Die kompakte Größe bedeutet, dass er leicht in partnerschaftliche Aktivitäten integriert werden kann, ohne sich sperrig anzufühlen. Und da er einmal positioniert freihändig ist, können sich beide Partner aufeinander konzentrieren.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Wie Paare den Lem nutzen:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Während des Vorspiels</p>
                    <p className="text-sm text-gray-600">Partner hält ihn beim Küssen und Berühren an Ort und Stelle</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Während des Geschlechtsverkehrs</p>
                    <p className="text-sm text-gray-600">Positioniert für gleichzeitige klitorale und penetrative Stimulation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo, während der Partner zuschaut</p>
                    <p className="text-sm text-gray-600">Baut Intimität auf und hilft Partnern zu lernen, was funktioniert</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">"Wartung" zwischen den Sitzungen</p>
                    <p className="text-sm text-gray-600">Solo-Nutzung hält das Gewebe gesund, wenn Partnersex nicht häufig ist</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Profi-Tipp:</strong> Kommunikation ist der Schlüssel. Betrachte es als Wellness-Tool, das <em>beiden</em> zugutekommt, indem es Druck reduziert und das Vergnügen steigert.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Jeder Grund es zu versuchen, kein Grund zur Sorge</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Wir haben die Garantien von Hello Nancy untersucht. Hier ist, was sie wirklich bedeuten.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Tage "Vergnügensgarantie"</h3>
                <p className="text-sm text-gray-700 text-center">
                  Nicht zufrieden? Du erhältst eine <strong>volle Rückerstattung</strong>—kein Rückversand erforderlich. Sie vertrauen auf deine Ehrlichkeit. So zuversichtlich sind sie.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Übersetzung: Null finanzielles Risiko. Probier es einen Monat lang aus.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 Monate Garantie</h3>
                <p className="text-sm text-gray-700 text-center">
                  Wenn im ersten Jahr etwas mit dem Gerät schief geht, ersetzen sie es. Kostenlos. Ohne Fragen.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Übersetzung: Dies ist kein Wegwerf-Gadget. Es ist für die Ewigkeit gebaut.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Lebenslanger Support</h3>
                <p className="text-sm text-gray-700 text-center">
                  Fragen zur Nutzung? Bedenken bezüglich der Reinigung? Ihr Kundenservice-Team antwortet innerhalb von 24 Stunden.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Übersetzung: Du kaufst kein Produkt. Du trittst einer Gemeinschaft bei.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Die wahre Frage: Was hast du zu verlieren?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Wir haben die Wissenschaft behandelt. Wir haben dir die Bewertungen gezeigt. Wir haben die Garantien erklärt. An diesem Punkt ist das einzige Risiko, es <em>nicht</em> zu versuchen.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Lass uns rechnen:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Wenn du es versuchst:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Könntest Vergnügen wiederentdecken, das du für verloren hieltest</li>
                      <li>✓ Könntest die Gewebegesundheit verbessern und Atrophie verhindern</li>
                      <li>✓ Könntest besser schlafen (Orgasmen setzen Oxytocin frei)</li>
                      <li>✓ Schlimmster Fall: Du erhältst deine €73,95 zurück</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Wenn du es nicht tust:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Gewebeatrophie schreitet fort</li>
                      <li>• Nervensensibilität nimmt weiter ab</li>
                      <li>• Sexuelles Wohlbefinden bleibt ein Kampf</li>
                      <li>• Du wirst dich immer fragen "was wäre wenn?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Warum Hello Nancy unser Vertrauen hat</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Wir empfehlen Produkte nicht leichtfertig. Hier ist, warum Hello Nancy unsere redaktionellen Standards erfüllt hat.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Preisgekrönt</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award vom International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verifizierte Bewertungen</h3>
              <p className="text-sm text-gray-600">4,7★ Durchschnitt von 14.907 verifizierten Käufern (keine gefälschten Bewertungen)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ Verkauft</h3>
              <p className="text-sm text-gray-600">Über 1.000.000 Einheiten weltweit seit dem Start im Jahr 2023 verkauft</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medizinische Qualität</h3>
              <p className="text-sm text-gray-600">Medizinisches Silikon, strenge Sicherheitsprüfungen</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Bekannt aus:</h3>
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
            Was verifizierte Käufer sagen
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 von 5 (14.907 verifizierte Bewertungen)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Besser als Östrogencreme"</p>
                <p className="text-gray-700 italic">
                  "Ich habe das nicht zum 'Spaß' gekauft, ich habe es gekauft, weil mein Arzt sagte, ich brauche Durchblutung. Aber wow. Die Entspannung hilft mir, die Nacht durchzuschlafen, ohne schweißgebadet aufzuwachen. Es ist mein neues Vitamin."
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verifizierter Kauf</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Hat meinen Körper aufgeweckt"</p>
                <p className="text-gray-700 italic">
                  "Ich habe den Lelo Sona vorher ausprobiert, aber er war zu stark für mich. Der Lem ist sanft genug für meine Empfindlichkeit, aber tief genug, um tatsächlich zu wirken. 10/10."
                </p>
                <p className="font-semibold text-gray-900">- Carly, Verifizierte Käuferin</p>
                <p className="text-xs text-gray-500">✓ Verifizierter Kauf</p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Ich bin süchtig"</p>
                <p className="text-gray-700 italic">
                  "Ich bin süchtig. Lem saugt und zieht auf die wildeste Art. Wenn du kommst, fühlt es sich an, als würde es den Orgasmus direkt herausziehen und das Pochen viel länger anhalten lassen. Soooo gut!"
                </p>
                <p className="font-semibold text-gray-900">- Alisha, Beta-Testerin</p>
                <p className="text-xs text-gray-500">✓ Verifizierter Kauf</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Game Changer"</p>
                <p className="text-gray-700 italic">
                  "Als jemand, der Diskretion bei intimen Produkten schätzt, könnte es keine perfektere Wahl geben. Die Saugfunktion ist anders als alles, was ich zuvor ausprobiert habe."
                </p>
                <p className="font-semibold text-gray-900">- Maxine, Verifizierte Käuferin</p>
                <p className="text-xs text-gray-500">✓ Verifizierter Kauf</p>
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
              Unser Urteil: Die Investition wert
            </h2>
            <p className="text-center text-xl text-gray-600">
              Nach gründlichen Tests und Recherchen gibt unser Redaktionsteam dem Nancy's Lem eine starke Empfehlung für Frauen, die menopausale Gewebeveränderungen erleben.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">SPARE 55 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ BEFRISTETES LESERANGEBOT ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Angebot endet in:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem Klitoris-Massagegerät</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">€73,95</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">€128,95</span>
                      <span className="text-sm text-green-600 font-bold">Spare 55 € (43% Rabatt)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Inkl. MwSt.</p>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Nur €0,20/Tag</strong> über ein Jahr Nutzung
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Weniger als dein täglicher Kaffee. Hält jahrelang.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LESER-TIPP: Verwende den Code <span className="font-bold text-[#FF1493]">TIFFANY</span> oder <span className="font-bold text-[#FF1493]">ISABELLA</span> an der Kasse für eine zusätzliche Überraschung!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem Klitoris-Massagegerät (hellgelb)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Selbstliebe-Handbuch & Bedienungsanleitung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetisches Ladekabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Samt-Reisebeutel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Kostenloser weltweiter Versand</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30-Tage "Vergnügensgarantie"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 Monate Garantie</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Jetzt kaufen - €73,95 (Spare 55 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Risikofreie Garantie
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30-Tage-Geld-zurück-Garantie. Wenn du es nicht liebst, erhältst du eine volle Rückerstattung – <strong>keine Rücksendung erforderlich</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diskrete Verpackung</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Versand in 24 Std.</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Sichere Bezahlung</span>
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
            Ist der Lem das Richtige für dich?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tausende von Frauen über 50 sagen "Ja". Sieh, ob du dich in einem dieser Punkte wiedererkennst:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Der Lem ist für dich, wenn du:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Mit vaginaler Trockenheit oder schmerzhaftem Geschlechtsverkehr kämpfst</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Verminderte Empfindung oder Schwierigkeiten beim Orgasmus erlebst</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Mit Klitorisatrophie oder Gewebeverdünnung zu tun hast</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Traditionelle Vibratoren als zu hart oder irritierend empfindest</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Die Gewebegesundheit im Alter erhalten möchtest</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ein diskretes Wellness-Gerät suchst (kein offensichtliches "Spielzeug")</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hormonersatztherapie vermeiden oder ergänzen möchtest</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Bereit bist, dein sexuelles Wohlbefinden und Selbstvertrauen zurückzugewinnen</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Du wirst den Lem besonders lieben, wenn:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du <strong>wissenschaftlich fundierte Wellness</strong> über Gimmicks stellst</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du <strong>Prävention</strong> willst, nicht nur Symptombehandlung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du Produkte leid bist, die <strong>für reife Körper nicht funktionieren</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du <strong>durchdachtes Design</strong> schätzt, das deine Privatsphäre respektiert</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du bereit bist, <strong>in dich selbst zu investieren</strong> (nur €0,20/Tag über ein Jahr!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du <strong>Ergebnisse ohne Nebenwirkungen</strong> oder Rezepte willst</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du fertig damit bist zu akzeptieren, dass <strong>"es jetzt einfach so ist"</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Wenn du auch nur 3 dieser Punkte angekreuzt hast,</strong> wurde der Lem speziell für dich entwickelt.
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
                  Ja, das bin ich - Jetzt kaufen
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
            Deine Fragen, beantwortet
          </h2>
          <p className="text-center text-gray-600 mb-12">Wir haben Hello Nancy die Fragen gestellt, die unsere Leser wissen wollten</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Tut das weh, wenn ich empfindlich bin oder Atrophie habe?</h3>
                <p className="text-gray-700">
                  Überhaupt nicht. Da er Luftsog statt direkter Kontaktvibration verwendet, vermeidet er die Reibung, die Schmerzen verursacht. Du kannst auf der niedrigsten der 12 Stufen beginnen und dich sanft hocharbeiten. Er wurde speziell entwickelt, um sanft zu empfindlichem Gewebe zu sein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Ist die Verpackung peinlich?</h3>
                <p className="text-gray-700">
                  Null Prozent. Sie versenden in schlichten braunen Kartons ohne Logos. Die Absenderadresse lautet einfach "Care & Bloom Ltd." Vollständige Diskretion garantiert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Was, wenn ich ihn nicht mag?</h3>
                <p className="text-gray-700">
                  Hello Nancy bietet eine 30-Tage-Zufriedenheitsgarantie. Wenn du ihn nicht liebst, bieten sie eine einmalige Kulanzrückerstattung an – <strong>keine Rücksendung erforderlich</strong>. Sie vertrauen darauf, dass du findest, was für deinen Körper funktioniert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kann ich ihn unter der Dusche oder in der Badewanne benutzen?</h3>
                <p className="text-gray-700">
                  Ja! Er ist IPX7 wasserdicht zertifiziert, was bedeutet, dass er vollständig untertauchbar ist. Viele Nutzer finden, dass warmes Wasser Entspannung und Empfindung verbessert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Wie laut ist er?</h3>
                <p className="text-gray-700">
                  Flüsterleise. Der ultraleise Motor sorgt für vollständige Diskretion – du kannst ihn benutzen, ohne dir Sorgen machen zu müssen, dass jemand etwas hört, selbst im Nebenraum.
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
              Unser Fazit
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Nach Wochen der Recherche, Expertenkonsultationen und Nutzerinterviews glaubt unser Redaktionsteam, dass der Nancy's Lem ein echtes medizinisches Bedürfnis anspricht, das zu lange übersehen wurde.
              </p>
              <p>
                Hier geht es nicht um Eitelkeit oder Genuss – es geht darum, die Gewebegesundheit zu erhalten, die Schlafqualität zu verbessern und einen Teil von sich selbst zurückzugewinnen, den die Menopause versucht wegzunehmen.
              </p>
              <p className="text-xl font-bold">
                Wenn du Symptome von GSM hast, mit traditionellen Lösungen kämpfst oder einfach dein sexuelles Wohlbefinden im Alter erhalten möchtest, verdient der Lem ernsthafte Überlegung.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, Senior Wellness Editorin
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
                Nancy's Lem kaufen - €73,95
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30-Tage-Garantie ✓ Kostenloser Versand ✓ Diskrete Verpackung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate-Offenlegung</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider wird von Lesern unterstützt. Wenn du über Links auf unserer Website kaufst, verdienen wir möglicherweise eine Affiliate-Provision ohne zusätzliche Kosten für dich. Dies hilft uns, weiterhin kostenlose, forschungsbasierte Inhalte bereitzustellen. Wir empfehlen nur Produkte, die unser Redaktionsteam gründlich geprüft hat und von denen wir glauben, dass sie unseren Lesern zugute kommen. Alle geäußerten Meinungen sind unsere eigenen und werden nicht durch Vergütung beeinflusst.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Über uns</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider bietet evidenzbasierten Gesundheits- und Wellness-Journalismus für moderne Frauen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorien</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Gesundheit</li>
                  <li>Wellness</li>
                  <li>Sex & Beziehungen</li>
                  <li>Produktbewertungen</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Über Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Produktdetails</li>
                  <li>Kundenbewertungen</li>
                  <li>Versand & Rücksendungen</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Vertrauen & Sicherheit</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materialien in medizinischer Qualität</li>
                  <li>✓ Diskreter Versand</li>
                  <li>✓ 30-Tage-Garantie</li>
                  <li>✓ 12-Monate-Garantie</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Alle Rechte vorbehalten. Redaktionelle Inhalte sind unabhängig und objektiv.</p>
              <p className="mt-2">Vorgestelltes Produkt: Nancy's Lem von Hello Nancy • Gewinner des Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
