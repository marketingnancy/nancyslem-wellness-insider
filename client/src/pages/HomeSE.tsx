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

  useEffect(() => { document.documentElement.lang = "sv"; }, []);

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
    { src: "/PDP.jpg", alt: "Nancy's Lem wellness-enhet" },
    { src: "/PDP-1.jpg", alt: "Lem i en livsstilsmiljö" },
    { src: "/PDP-2.jpg", alt: "Närbild på Lems design" },
    { src: "/PDP-3.jpg", alt: "Produktdetaljer för Lem" },
    { src: "/PDP-4_SE.png", alt: "Demonstration av Lem i användning" },
    { src: "/PDP-5.jpg", alt: "Lems förpackning och tillbehör" },
    { src: "/PDP-6_SE.png", alt: "Livsstilsbild av Lem" },
    { src: "/PDP-7_SE.png", alt: "Produktegenskaper för Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Pålitlig Kvinnohälsa</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7 (14 907 recensioner) • 1M+ Sålda</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">775 kr</span>
                  <span className="text-sm line-through text-white/70">1 358 kr</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">SPARA 583 kr</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Slutar om {formatTime(timeLeft)}</span>
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
                  Köp Nu
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">HÄLSA & VÄLBEFINNANDE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUKTRECENSION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            1M+ Orgasmer Senare: Varför Kvinnor Över 50 Överger Vibratorer för Denna "Citron"
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Vi undersökte varför tusentals kvinnor över 50 överger traditionella vibratorer för denna "fysioterapi"-enhet som ser ut som en citron. Här är vad vi fann.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Av Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Senior wellnessredaktör</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Senast uppdaterad: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('sv-SE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min läsning</span>
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
              <span className="font-bold text-gray-900 mr-1">Redaktörens Anmärkning:</span>
              Denna artikel innehåller affiliatelänkar. Vi kan få en provision om du handlar via dessa länkar, utan extra kostnad för dig. Vi rekommenderar endast produkter vi noggrant har undersökt och testat.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="Nancy's Lem wellness-enhet på nattduksbord" 
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem sitter diskret på ett nattduksbord—de flesta tror att det är en dekorativ citron. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> läsare tittar just nu på denna artikel</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskret Förpackning</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Fri Frakt Världen Över</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30-Dagars Nöjdhetsgaranti</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12-Månaders Garanti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Varför Vi Pratar Om Detta</h2>
          <p className="text-gray-700 leading-relaxed">
            När vårt redaktionsteam först hörde talas om en "citronformad wellness-enhet" som tog klimakterie-communityt med storm, ska vi erkänna—vi var skeptiska. Men efter att ha intervjuat dussintals kvinnor, rådfrågat gynekologer, och ja, testat den själva, förstår vi hypen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Detta är inte bara ännu en wellness-trend. Det adresserar ett verkligt medicinskt problem som påverkar miljontals kvinnor men sällan diskuteras: <strong>klitorisatrofi</strong> och förlusten av sexuell hälsa under klimakteriet.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Samtalet Ingen Varnade Oss För</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vi hör allt om värmevallningarna som får oss att svettas genom våra silkeslakan klockan 3 på natten. Vi hör om hjärndimman som får oss att leta efter våra glasögon medan de sitter på näsan.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Men ingen sätter dig ner med ett glas Pinot och viskar: "Hej, förresten, om du inte håller igång saker där nere, kan din klitoris bokstavligen krympa."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det kallas <strong>Klitorisatrofi</strong>, och det är en del av Genitourinary Syndrome of Menopause (GSM)—ett tillstånd som drabbar upp till 50% av postmenopausala kvinnor, enligt North American Menopause Society.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">"Den Stora Frånkopplingen"</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              För många kvinnor vi intervjuade var det inte bara torrhet. Det var <strong>domningen</strong>. En testare beskrev hur hon försökte använda sin gamla vibrator från 30-årsåldern: "Istället för att kännas bra, kändes det bara... irriterande. Eller domnat. Som att försöka kittla en förhårdnad."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Medicinska experter förklarar att traditionella vibratorer fungerar genom friktion och stötar. När vävnader tunnas ut på grund av lågt östrogen kan direkt vibration faktiskt <em>minska känsligheten i nerverna ytterligare</em>, vilket leder till den där "domnade" känslan.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">"Sluta vibrera. Börja suga."</p>
            <p className="text-gray-700">— Bäckenbotten-specialister</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynekologer som specialiserar sig på klimakterievård förklarar: "När östrogenet sjunker minskar blodflödet till bäckenregionen. Detta leder till att vävnaden tunnas ut, förlorar elasticitet och känsel. Det medicinska samfundet kallar det 'use it or lose it'-principen—du behöver konsekvent blodflöde för att bibehålla vävnadshälsa."
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Här Kommer: Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det är där denna lilla gula enhet kommer in. Nancy's Lem marknadsförs inte som en sexleksak—den positioneras som en wellness-enhet. Och efter vår forskning förstår vi varför.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Till skillnad från traditionella vibratorer som förlitar sig på friktion (vilket kan irritera tunn menopausal vävnad), använder Lem något som kallas <strong>Luftpulsteknik</strong>. Tänk på det som skillnaden mellan att gnugga sandpapper mot huden jämfört med att använda en mild vakuummassage.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vetenskapen: Varför Luftpulsteknik Fungerar</h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditionella Vibratorer:</p>
              <p className="text-red-700 text-sm">Förlitar sig på ytfriktion som kan irritera känslig, tunn vävnad. Kan orsaka domningar eller mikrosprickor.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Luftpulsteknik:</p>
              <p className="text-green-700 text-sm">Skapar milda sugvågor utan direktkontakt. Drar syrerikt blod in i vävnaderna, vilket främjar hälsa och känsel.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Så här fungerar det: Lem skapar en mild tätning runt klitoris och använder vågor av lufttryck för att stimulera den—vilket efterliknar känslan av oralsex, men konsekvent och outtröttligt. Eftersom det inte finns någon gnidning, finns det noll irritation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Men den verkliga magin är fysiken: det milda suget skapar en vakuumeffekt som fysiskt drar djupt, syrerikt blod in i vävnaderna. Det väcker nerver som har varit vilande i åratal.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "Det känns som att den drar orgasmen rakt ut... den håller bultandet igång mycket längre."
            </p>
            <p className="font-semibold text-gray-700">— Alisha, Betatestare (från verifierade kundrecensioner)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hur Den Står Sig: Vår Jämförelse</h2>
          <p className="text-center text-gray-600 mb-8">Vi jämförde Lem med traditionella lösningar för menopausal vävnadshälsa</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Funktion</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Traditionell Vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Östrogenkräm</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Fungerar för Känslig Vävnad</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ja</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kan irritera</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Långsamma resultat</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ökar Blodflödet</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Djup vävnad</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Endast yta</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradvis</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ingen Friktion/Irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Noll kontakt</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Orsakar friktion</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Omedelbar Njutning</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Omedelbar</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Varierande</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ingen njutning</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskret Design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ser ut som citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Uppenbar</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Rekommenderad av Läkare</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ För blodflöde</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Ibland</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Pris</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">775 kr (engångs)</td>
                  <td className="border border-gray-300 p-4 text-center">500-1500 kr</td>
                  <td className="border border-gray-300 p-4 text-center">300-500 kr/månad</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">"Anti-Skam" Designfilosofin</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En sak som slog vårt redaktionsteam under testningen: designen är <em>avsiktligt</em> diskret. Den är klargul, passar i handflatan och ser verkligen ut som en dekorativ citron.
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">"Nattduksbordstestet"</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="Lem-enheten står diskret på ett nattduksbord"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Vi har alla den där lådan. <em>Skämslådan</em>. Där vi gömmer de fula, falliska plastapparaterna under gamla strumpor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              En av våra testare delade denna historia: "Jag lämnade min Lem på badrumsbänken av misstag när min svärmor var på besök. Hon plockade upp den och sa: 'Åh, är det här en av de där nya soniska ansiktsskrubbarna? Den känns så mjuk!'"
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Den klarar nattduksbordstestet. Den ser ut som exklusiv egenvårdsteknik, inte en sexleksak. För det är precis vad det är.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Varning för Billiga Kopior</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Efter att ha publicerat vår första recension frågade läsare varför de inte borde köpa 200-kronorsversionen på Amazon. Här är vad medicinska experter säger.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              "Billiga leksaker använder porösa Jelly/TPE-material," varnade hon. "Mikroskopiska bakterier fastnar i porerna, vilket är en enorm risk för kvinnor i klimakteriet som redan är benägna att få urinvägsinfektioner."
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello Nancy Lem är 100% medicinskt klassad, icke-porös silikon. Riskera inte din hälsa för att spara 200 kr.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Viskande Tyst</h3>
                <p className="text-gray-600 text-sm">
                  Ultratyst motor för fullständig diskretion
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vattentät (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfekt för bad eller dusch
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medicinskt Silikon</h3>
                <p className="text-gray-600 text-sm">
                  Kroppssäker, icke-porös, lätt att rengöra
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetisk Laddning</h3>
                <p className="text-gray-600 text-sm">
                  120 minuter per laddning
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uppackningsupplevelsen: Första Intrycket Räknas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="Lem uppackningsupplevelse" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                En av de första sakerna våra testare märkte? Förpackningen är <em>elegant</em>. Inga grälla färger, inga pinsamma bilder. Lådan är minimalistiskt vit med subtila gulddetaljer—den skulle lätt kunna misstas för en lyxig hudvårdsprodukt.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Vad som finns i lådan:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lem-enheten (klargul, handflatestorlek)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetisk USB-laddningskabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Mjuk sammetspåse (perfekt för resor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Handbok för självkärlek med användningstips och wellnessråd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Snabbstartsguide med illustrerade instruktioner</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "När jag öppnade lådan blev jag genuint överraskad av hur <strong>premium</strong> allt kändes. Det kändes inte som en 'sexleksak'—det kändes som en wellness-investering." — Testanvändare, Ålder 54
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Låt Oss Prata Anatomi: Varför Klitorisstimulering Är Viktigt</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/anatomy_SE.png" 
              alt="Klitorisanatomi tvärsnittsdiagram" 
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Vetenskapen om Njutning</h3>
                <p className="text-gray-600 text-sm">Vad varje kvinna borde veta om sin kropp</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Här är något de inte lär ut i hälsokunskapen: klitoris har ungefär <strong>8 000 nervändar</strong>—mer än någon annan del av människokroppen, manlig eller kvinnlig. För kontext har penis ungefär 4 000.
              </p>
              <p>
                Men här är haken: <strong>75% av kvinnor kan inte uppnå orgasm genom enbart penetration</strong>, enligt forskning publicerad i Journal of Sex & Marital Therapy. Klitoris är nyckeln.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Vad Som Händer Under Klimakteriet:</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/bloodflow_SE.png" 
                    alt="Blodflödesjämförelse före och efter klimakteriet" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problemet:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Östrogennivåerna sjunker med 90%</li>
                      <li>• Blodflödet till bäckenområdet minskar</li>
                      <li>• Klitorisvävnad kan krympa med 20-30%</li>
                      <li>• Nervkänsligheten minskar</li>
                      <li>• Naturlig smörjning minskar</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Lösningen:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regelbunden stimulering bibehåller blodflödet</li>
                      <li>• Håller nervbanor aktiva</li>
                      <li>• Förhindrar vävnadsatrofi</li>
                      <li>• Bibehåller känslighet</li>
                      <li>• Främjar naturlig smörjning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynekologer uttrycker det rakt på sak: "Tänk på det som träning för din bäckenbotten. Om du inte använder de musklerna och bibehåller blodflödet, förtvinar de. Samma princip gäller för klitorisvävnad."
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Slutsatsen:</p>
                <p className="text-gray-700">
                  Regelbunden klitorisstimulering handlar inte bara om njutning (även om det är en trevlig bonus). Det handlar om att bibehålla vävnadshälsa, bevara nervfunktion och förhindra de irreversibla förändringar som kommer med försummelse. Detta är <em>förebyggande hälsovård</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">"Men Hur Är Det Med Min Partner?" Vi Frågade Det Också</h2>
          
          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">"3-Minuters Miraklet" (Och Varför Partners Älskar Det)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Låt oss vara ärliga: för många kvinnor över 50 kan det ta 20+ minuter (och mycket mental gymnastik) att komma någonstans nära klimax. Med Lem? <strong className="text-[#FF1493]">Tre minuter.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Den största invändningen kvinnor har:</strong> "Kommer min partner känna sig ersatt?"
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolut inte.</strong> Lem är liten. Många par använder den <em>under</em> samlag. Den fungerar som en "brygga", som säkerställer att du är fullt upphetsad och naturligt smord, vilket tar bort pressen från din partner att "prestera".
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                En testare berättade för oss: "Det förvandlade vårt sovrum från en plats av ångest tillbaka till en lekplats."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                En av de vanligaste frågorna vi fick under vår forskning: <em>"Kommer min partner känna sig hotad av detta?"</em>
              </p>
              <p>
                Här är vad vi fann: <strong>Lem är inte en ersättning—det är en förbättring.</strong> Många par vi intervjuade rapporterade att införandet av Lem i deras intima stunder faktiskt <em>förbättrade</em> deras kontakt.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  "Min man var nyfiken, inte hotad. Nu använder han den på mig under förspelet. Det tar bort pressen från honom att 'prestera' och jag får exakt vad jag behöver. Win-win."
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55, Gift i 28 år</p>
              </div>
              <p>
                Den kompakta storleken gör den enkel att införliva under partneraktiviteter utan att kännas klumpig. Och eftersom den är handsfree när den väl är placerad, kan båda partners fokusera på varandra.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Sätt Par Använder Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under Förspel</p>
                    <p className="text-sm text-gray-600">Partnern håller den på plats under kyssar och beröring</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under Samlag</p>
                    <p className="text-sm text-gray-600">Placerad för samtidig klitoris- och penetrationsstimulering</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo med partner som tittar på</p>
                    <p className="text-sm text-gray-600">Bygger intimitet och hjälper partners att lära sig vad som fungerar</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">"Underhåll" mellan sessioner</p>
                    <p className="text-sm text-gray-600">Soloanvändning håller vävnaden frisk när partnersex inte är frekvent</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Proffstips:</strong> Kommunikation är nyckeln. Rama in det som ett wellness-verktyg som gynnar <em>er båda</em> genom att minska pressen och öka njutningen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Varje Anledning att Prova, Ingen Anledning att Oroa Sig</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Vi undersökte Hello Nancys garantier. Här är vad de faktiskt betyder.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Dagars "Njutningsgaranti"</h3>
                <p className="text-sm text-gray-700 text-center">
                  Inte nöjd? Få en <strong>full återbetalning</strong>—ingen returfrakt krävs. De litar på att du är ärlig. Så säkra är de.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Översättning: Noll finansiell risk. Prova det i en månad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 Månaders Garanti</h3>
                <p className="text-sm text-gray-700 text-center">
                  Om något går fel med enheten under det första året, ersätter de den. Gratis. Inga frågor ställda.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Översättning: Detta är ingen engångspryl. Den är byggd för att hålla.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Livstids Support</h3>
                <p className="text-sm text-gray-700 text-center">
                  Frågor om användning? Funderingar kring rengöring? Deras kundtjänst svarar inom 24 timmar.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Översättning: Du köper inte en produkt. Du går med i en gemenskap.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Den Verkliga Frågan: Vad Har Du Att Förlora?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Vi har täckt vetenskapen. Vi har visat dig recensionerna. Vi har förklarat garantierna. Vid det här laget är den enda risken att <em>inte</em> prova det.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Låt Oss Räkna På Det:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Om Du Provar Det:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Kan återupptäcka njutning du trodde var borta</li>
                      <li>✓ Kan förbättra vävnadshälsan och förhindra atrofi</li>
                      <li>✓ Kan sova bättre (orgasmer frigör oxytocin)</li>
                      <li>✓ Värsta fall: Få dina 775 kr tillbaka</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Om Du Inte Gör Det:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Vävnadsatrofi fortsätter</li>
                      <li>• Nervkänsligheten fortsätter att minska</li>
                      <li>• Sexuellt välbefinnande förblir en kamp</li>
                      <li>• Du kommer alltid att undra "tänk om?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Varför Hello Nancy Har Vårt Förtroende</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Vi rekommenderar inte produkter lättvindigt. Här är varför Hello Nancy klarade våra redaktionella standarder.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prisbelönt</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award från International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verifierade Recensioner</h3>
              <p className="text-sm text-gray-600">4.7★ genomsnitt från 14 907 verifierade köpare (inga fejkrecensioner)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ Sålda</h3>
              <p className="text-sm text-gray-600">Över 1 000 000 enheter sålda världen över sedan lanseringen 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medicinsk Kvalitet</h3>
              <p className="text-sm text-gray-600">Medicinskt silikon, rigorösa säkerhetstester</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Som Sett I:</h3>
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
            Vad Verifierade Köpare Säger
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4.7 av 5 (14 907 verifierade recensioner)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Bättre Än Östrogenkräm"</p>
                <p className="text-gray-700 italic">
                  "Jag köpte inte detta för 'skoj skull', jag köpte det för att min läkare sa att jag behövde blodflöde. Men wow. Utlösningen hjälper mig att sova hela natten utan att vakna svettig. Det är min nya vitamin."
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verifierat Köp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Väckte Min Kropp"</p>
                <p className="text-gray-700 italic">
                  "Jag provade Lelo Sona tidigare men den var för stark för mig. Lem är mild nog för min känslighet men djup nog för att faktiskt fungera. 10/10."
                </p>
                <p className="font-semibold text-gray-900">- Carly, Verifierad Köpare</p>
                <p className="text-xs text-gray-500">✓ Verifierat Köp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Jag är beroende"</p>
                <p className="text-gray-700 italic">
                  "Jag är beroende. Lem suger och drar på det vildaste sättet. När du kommer känns det som att den drar ut orgasmen och håller pulserandet igång mycket längre. Såååå bra!"
                </p>
                <p className="font-semibold text-gray-900">- Alisha, Betatestare</p>
                <p className="text-xs text-gray-500">✓ Verifierat Köp</p>
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
                  "Som någon som värdesätter diskretion i intima produkter kunde det inte finnas ett mer perfekt val. Sugfunktionen är olik allt jag har provat tidigare."
                </p>
                <p className="font-semibold text-gray-900">- Maxine, Verifierad Köpare</p>
                <p className="text-xs text-gray-500">✓ Verifierat Köp</p>
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
              Vårt Omdöme: Värt Investeringen
            </h2>
            <p className="text-center text-xl text-gray-600">
              Efter noggrann testning och forskning ger vårt redaktionella team Nancy's Lem en stark rekommendation för kvinnor som upplever vävnadsförändringar i klimakteriet.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">SPARA 583 kr</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ BEGRÄNSAT LÄSARERBJUDANDE ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <span className="font-bold">Erbjudandet går ut om:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem Klitorismassageapparat</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">775 kr</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">1 358 kr</span>
                      <span className="text-sm text-green-600 font-bold">Spara 583 kr (44% rabatt)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Bara 2,12 kr/dag</strong> under ett års användning
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Mindre än ditt dagliga kaffe. Håller i åratal.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LÄSARTIPS: Använd koden <span className="font-bold text-[#FF1493]">TIFFANY</span> eller <span className="font-bold text-[#FF1493]">ISABELLA</span> i kassan för en extra överraskning!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem Klitorismassageapparat (klargul)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Handbok för självkärlek & bruksanvisning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetisk laddkabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Resepåse i sammet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Gratis frakt över hela världen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 dagars "Njutningsgaranti"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 månaders garanti</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Köp Nu - 775 kr (Spara 583 kr)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Riskfri Garanti
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 dagars pengarna-tillbaka-garanti. Om du inte älskar den, få full återbetalning—<strong>ingen retur krävs</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diskret förpackning</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Skickas inom 24 timmar</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Säker betalning</span>
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
            Är Lem Rätt För Dig?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tusentals kvinnor över 50 säger "ja". Se om du känner igen dig i något av detta:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem är för dig om du:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Kämpar med vaginal torrhet eller smärtsamt samlag</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Upplever minskad känsel eller svårighet att nå orgasm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hanterar klitorisatrofi eller förtunning av vävnad</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Tycker att traditionella vibratorer är för hårda eller irriterande</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vill bibehålla vävnadshälsa när du åldras</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Letar efter en diskret wellness-enhet (inte en uppenbar "leksak")</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Undviker eller kompletterar hormonersättningsterapi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Är redo att återta din sexuella hälsa och självförtroende</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Du kommer särskilt älska Lem om:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du värdesätter <strong>vetenskapligt stödd wellness</strong> över jippon</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du vill ha <strong>förebyggande vård</strong>, inte bara symptomhantering</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du är trött på produkter som <strong>inte fungerar för mogna kroppar</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du uppskattar <strong>genomtänkt design</strong> som respekterar din integritet</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du är villig att <strong>investera i dig själv</strong> (bara 2,12 kr/dag över ett år!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du vill ha <strong>resultat utan biverkningar</strong> eller recept</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du är klar med att acceptera att <strong>"det är bara så här det är nu"</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Om du kryssade i ens 3 av dessa rutor,</strong> designades Lem specifikt för dig.
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
                  Ja, Detta Är Jag - Handla Nu
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
            Dina Frågor, Besvarade
          </h2>
          <p className="text-center text-gray-600 mb-12">Vi ställde frågorna våra läsare ville veta till Hello Nancy</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kommer detta göra ont om jag är känslig eller har atrofi?</h3>
                <p className="text-gray-700">
                  Inte alls. Eftersom den använder luftsug snarare än direkt kontaktvibration, undviker den friktionen som orsakar smärta. Du kan börja på den lägsta av de 12 inställningarna och försiktigt arbeta dig uppåt. Den är designad specifikt för att vara skonsam mot känslig vävnad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Är förpackningen pinsam?</h3>
                <p className="text-gray-700">
                  Noll procent. De skickar i vanliga bruna lådor utan logotyper. Returadressen säger bara "Care & Bloom Ltd." Fullständig diskretion garanterad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Vad händer om jag inte gillar den?</h3>
                <p className="text-gray-700">
                  Hello Nancy erbjuder en 30-dagars Nöjdhetsgaranti. Om du inte älskar den, erbjuder de en engångsåterbetalning—<strong>ingen retur nödvändig</strong>. De litar på att du hittar vad som fungerar för din kropp.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kan jag använda den i duschen eller badet?</h3>
                <p className="text-gray-700">
                  Ja! Den är IPX7-vattentätcertifierad, vilket innebär att den är helt nedsänkbar. Många användare tycker att varmt vatten förbättrar avslappning och känsla.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hur högljudd är den?</h3>
                <p className="text-gray-700">
                  Viskande tyst. Den ultratysta motorn säkerställer fullständig diskretion—du kan använda den utan att oroa dig för att någon hör, även i rummet bredvid.
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
              Vår Slutgiltiga Åsikt
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Efter veckor av forskning, expertkonsultationer och användarintervjuer, anser vårt redaktionella team att Nancy's Lem adresserar ett genuint medicinskt behov som har förbisetts alldeles för länge.
              </p>
              <p>
                Detta handlar inte om fåfänga eller njutning—det handlar om att bibehålla vävnadshälsa, förbättra sömnkvalitet och återta en del av dig själv som klimakteriet försöker ta ifrån dig.
              </p>
              <p className="text-xl font-bold">
                Om du upplever symptom på GSM, kämpar med traditionella lösningar, eller helt enkelt vill bibehålla din sexuella hälsa när du åldras, förtjänar Lem seriöst övervägande.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, Senior wellnessredaktör
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
                Köp Nancy's Lem - 775 kr
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30-dagars garanti ✓ Fri frakt ✓ Diskret förpackning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate-avslöjande</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider stöds av läsare. När du handlar via länkar på vår webbplats kan vi tjäna en affiliate-provision utan extra kostnad för dig. Detta hjälper oss att fortsätta tillhandahålla gratis, forskningsbaserat innehåll. Vi rekommenderar endast produkter som vårt redaktionella team har noggrant granskat och tror kommer att gynna våra läsare. Alla åsikter som uttrycks är våra egna och påverkas inte av ersättning.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Om Oss</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider tillhandahåller evidensbaserad hälso- och wellnessjournalistik för moderna kvinnor.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorier</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Hälsa</li>
                  <li>Wellness</li>
                  <li>Sex & Relationer</li>
                  <li>Produktrecensioner</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Om Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Produktdetaljer</li>
                  <li>Kundrecensioner</li>
                  <li>Frakt & Returer</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Förtroende & Säkerhet</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Material av medicinsk kvalitet</li>
                  <li>✓ Diskret frakt</li>
                  <li>✓ 30-dagars garanti</li>
                  <li>✓ 12-månaders garanti</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Alla rättigheter förbehållna. Redaktionellt innehåll är oberoende och objektivt.</p>
              <p className="mt-2">Produkt presenterad: Nancy's Lem av Hello Nancy • 2025 Women's Wellness Tech Award Winner</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
