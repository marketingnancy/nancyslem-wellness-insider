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
    { src: "/PDP.jpg", alt: "Nancys Lem-apparat" },
    { src: "/PDP-1.jpg", alt: "Lem i en vardagsmiljö" },
    { src: "/PDP-2.jpg", alt: "Närbild på Lems design" },
    { src: "/PDP-3.jpg", alt: "Produktdetaljer för Lem" },
    { src: "/PDP-4_SE.png", alt: "Lem visas i användning" },
    { src: "/PDP-5.jpg", alt: "Lems förpackning och tillbehör" },
    { src: "/PDP-6_SE.png", alt: "Vardagsbild av Lem" },
    { src: "/PDP-7_SE.png", alt: "Lems egenskaper" },
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
              <p className="text-xs text-gray-500 font-medium">Pålitlig kvinnohälsa</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 recensioner) • 1 miljon+ sålda</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">883 kr</span>
                  <span className="text-sm line-through text-white/70">1 576 kr</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Spara 693 kr</span>
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
                  Köp nu
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">Hälsa & välbefinnande</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Produktrecension</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            En miljon orgasmer senare: därför väljer kvinnor över 50 bort vibratorn för den här "citronen"
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Vi tog reda på varför tusentals kvinnor över 50 lägger den vanliga vibratorn åt sidan till förmån för den här "sjukgymnastik"-apparaten som ser ut som en citron. Här är vad vi kom fram till.
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
              <span className="font-bold text-gray-900 mr-1">Redaktörens anmärkning:</span>
              Den här artikeln innehåller affiliatelänkar. Handlar du via dem kan vi få en provision, utan extra kostnad för dig. Vi rekommenderar bara produkter som vi själva har granskat noga och testat.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="Nancys Lem-apparat på ett nattygsbord"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancys Lem står diskret på nattygsbordet – de flesta tror att det är en dekorativ citron. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> läsare tittar på artikeln just nu</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskret förpackning</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Fri frakt över hela världen</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 dagars nöjdhetsgaranti</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 månaders garanti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Varför vi tar upp det här</h2>
          <p className="text-gray-700 leading-relaxed">
            När vår redaktion först hörde talas om en "citronformad apparat" som tog klimakteriegrupperna med storm ska vi erkänna en sak – vi var skeptiska. Men efter att ha intervjuat dussintals kvinnor, rådfrågat gynekologer och, ja, testat den själva, förstår vi nog vad alla pratar om.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Det här är inte bara ännu en wellnesstrend. Den tar tag i ett verkligt medicinskt problem som drabbar miljontals kvinnor men som sällan kommer på tal: <strong>klitorisatrofi</strong> och den intima hälsa som går förlorad under klimakteriet.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Samtalet ingen förberedde oss på</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vi hör allt om värmevallningarna som får oss att svettas genom silkeslakanen klockan tre på natten. Vi hör om hjärndimman som får oss att leta efter glasögonen fast de sitter på näsan.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Men ingen sätter sig ner med ett glas vin och viskar: "Förresten, håller du inte igång det där nere kan klitoris faktiskt krympa."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det kallas <strong>klitorisatrofi</strong> och är en del av det som kallas Genitourinary Syndrome of Menopause (GSM) – ett tillstånd som drabbar upp till 50 % av kvinnor efter klimakteriet, enligt North American Menopause Society.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">"Den stora bortkopplingen"</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              För många av kvinnorna vi intervjuade handlade det inte bara om torrhet. Det handlade om <strong>domningen</strong>. En testare berättade hur hon försökte använda sin gamla vibrator från trettioårsåldern: "I stället för att kännas skönt kändes det bara … irriterande. Eller bedövat. Som att försöka kittla en valk."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Experter förklarar att vanliga vibratorer bygger på friktion och stötar. När vävnaden tunnas ut av lågt östrogen kan direkt vibration faktiskt <em>dämpa nervkänsligheten ytterligare</em>, och då uppstår den där bedövade känslan.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">"Sluta vibrera. Börja suga."</p>
            <p className="text-gray-700">– Bäckenbottenspecialister</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynekologer som är inriktade på klimakterievård förklarar: "När östrogenet sjunker minskar blodflödet till bäckenområdet. Vävnaden tunnas ut och förlorar både elasticitet och känsel. Inom vården brukar man säga 'använd den eller mista den' – du behöver ett jämnt blodflöde för att hålla vävnaden frisk."
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Här kommer Nancys Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det är här den lilla gula apparaten kommer in. Nancys Lem säljs inte som en sexleksak – den beskrivs som en intim wellnessapparat. Och efter vår research förstår vi varför.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Till skillnad från vanliga vibratorer som bygger på friktion (vilket kan irritera tunn vävnad i klimakteriet) använder Lem så kallad <strong>tryckvågsteknik</strong>. Tänk dig skillnaden mellan att gnugga sandpapper mot huden och en mild vakuummassage.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vetenskapen: därför fungerar tryckvågsteknik</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vanliga vibratorer:</p>
              <p className="text-red-700 text-sm">Bygger på ytlig friktion som kan irritera känslig, tunn vävnad. Kan ge domningar eller små sprickor.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Tryckvågsteknik:</p>
              <p className="text-green-700 text-sm">Skapar milda sugvågor utan direkt kontakt. Drar syrerikt blod in i vävnaden och främjar både hälsa och känsel.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Så här fungerar det: Lem bildar en mjuk tätning runt klitoris och stimulerar den med vågor av lufttryck – ungefär som känslan av oralsex, fast jämn och outtröttlig. Eftersom inget gnids mot huden uppstår ingen irritation alls.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Men det verkligt fina är fysiken: det milda suget skapar en vakuumeffekt som drar djupt, syrerikt blod in i vävnaden. Det väcker nerver som legat i dvala i åratal.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "Det känns som att den drar ut orgasmen … pulserandet håller i sig mycket längre."
            </p>
            <p className="font-semibold text-gray-700">– Alisha, betatestare (från verifierade kundrecensioner)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Så står den sig: vår jämförelse</h2>
          <p className="text-center text-gray-600 mb-8">Vi jämförde Lem med vanliga lösningar för vävnadshälsa i klimakteriet</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Egenskap</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancys Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vanlig vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Östrogenkräm</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Fungerar för känslig vävnad</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ja</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Kan irritera</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Långsamma resultat</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ökar blodflödet</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Djup vävnad</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Bara ytan</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradvis</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ingen friktion eller irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ingen kontakt</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ger friktion</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Njutning direkt</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Direkt</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Varierar</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ingen njutning</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskret design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ser ut som en citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Uppenbar</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Rekommenderas av läkare</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ För blodflödet</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Ibland</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ja</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Pris</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">883 kr (engångsköp)</td>
                  <td className="border border-gray-300 p-4 text-center">500–1 500 kr</td>
                  <td className="border border-gray-300 p-4 text-center">300–500 kr/månad</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designfilosofin utan skam</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En sak som verkligen slog vår redaktion under testet: designen är <em>medvetet</em> diskret. Den är klargul, ryms i handflatan och ser faktiskt ut som en dekorativ citron.
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">"Nattygsbordstestet"</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="Lem-apparaten står diskret på ett nattygsbord"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Vi har alla den där lådan. <em>Skamlådan</em>. Där vi gömmer de fula plastpryttlarna under gamla strumpor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              En av våra testare berättade: "Jag råkade lämna min Lem på badrumshyllan när svärmor var på besök. Hon plockade upp den och sa: 'Åh, är det här en av de där nya ansiktsborstarna? Vad mjuk den känns!'"
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Den klarar nattygsbordstestet. Den ser ut som exklusiv egenvård, inte som en sexleksak. För det är precis vad den är.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Varning för billiga kopior</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              När vi hade publicerat vår första recension undrade flera läsare varför de inte borde köpa 200-kronorsvarianten på Amazon. Här är vad experterna säger.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              "Billiga leksaker görs av porösa jelly- och TPE-material", varnade hon. "Små bakterier fastnar i porerna, och det är en stor risk för kvinnor i klimakteriet som redan lätt får urinvägsinfektioner."
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello Nancy Lem är gjord av 100 % medicinsk, porfri silikon. Riskera inte hälsan för att spara 200 kr.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Viskande tyst</h3>
                <p className="text-gray-600 text-sm">
                  Ultratyst motor för full diskretion
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vattentät (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfekt i badet eller duschen
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medicinsk silikon</h3>
                <p className="text-gray-600 text-sm">
                  Kroppsvänlig, porfri och lätt att rengöra
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetisk laddning</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Att öppna paketet: första intrycket räknas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="Att öppna paketet med Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                En av de första sakerna våra testare la märke till? Förpackningen är <em>snygg</em>. Inga skrikiga färger, inga pinsamma bilder. Lådan är stramt vit med diskreta gulddetaljer – den skulle lätt kunna tas för en lyxig hudvårdsprodukt.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Det här finns i lådan:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lem-apparaten (klargul, ryms i handflatan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetisk USB-laddningskabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Mjuk sammetspåse (perfekt på resan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Liten guide för egenkärlek med tips på användning och wellnessråd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Snabbguide med illustrerade instruktioner</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "När jag öppnade lådan blev jag verkligt överraskad av hur <strong>premium</strong> allt kändes. Det kändes inte som en 'sexleksak' – det kändes som en investering i mig själv." – Testare, 54 år
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Lite anatomi: därför är klitorisstimulering viktig</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/anatomy_SE.png" 
              alt="Genomskärning som visar klitoris anatomi"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Vetenskapen om njutning</h3>
                <p className="text-gray-600 text-sm">Det här borde varje kvinna veta om sin kropp</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Här är något man aldrig lärde ut i skolans sexualkunskap: klitoris har omkring <strong>8 000 nervändar</strong> – fler än någon annan del av kroppen, hos kvinnor som hos män. Som jämförelse har penis ungefär 4 000.
              </p>
              <p>
                Men så kommer haken: <strong>75 % av alla kvinnor kan inte få orgasm enbart genom penetration</strong>, enligt forskning i Journal of Sex & Marital Therapy. Klitoris är nyckeln.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Det här händer under klimakteriet:</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/bloodflow_SE.png" 
                    alt="Blodflödet jämfört före och efter klimakteriet"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problemet:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Östrogennivåerna sjunker med 90 %</li>
                      <li>• Blodflödet till bäckenområdet minskar</li>
                      <li>• Klitorisvävnaden kan krympa med 20–30 %</li>
                      <li>• Nervkänsligheten avtar</li>
                      <li>• Den naturliga vätskan minskar</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Lösningen:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regelbunden stimulering håller igång blodflödet</li>
                      <li>• Håller nervbanorna aktiva</li>
                      <li>• Motverkar vävnadsatrofi</li>
                      <li>• Bevarar känsligheten</li>
                      <li>• Främjar den naturliga vätskan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynekologer säger det rakt ut: "Tänk på det som träning för bäckenbotten. Använder du inte musklerna och håller igång blodflödet, så förtvinar de. Samma sak gäller för klitorisvävnaden."
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Slutsatsen:</p>
                <p className="text-gray-700">
                  Regelbunden klitorisstimulering handlar inte bara om njutning (även om det är en fin bonus). Det handlar om att hålla vävnaden frisk, bevara nervfunktionen och undvika de bestående förändringar som kommer om man låter bli. Det här är <em>förebyggande hälsovård</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">"Men hur blir det med min partner?" Det frågade vi också</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">"Tremminutersmiraklet" (och därför älskar partnern det)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ärligt talat: för många kvinnor över 50 kan det ta 20 minuter eller mer (och en hel del mental ansträngning) att komma i närheten av klimax. Med Lem? <strong className="text-[#FF1493]">Tre minuter.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Den vanligaste invändningen från kvinnor:</strong> "Kommer min partner att känna sig ersatt?"
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolut inte.</strong> Lem är liten. Många par använder den <em>under</em> samlag. Den fungerar som en brygga som ser till att du är riktigt upphetsad och naturligt våt, och tar bort pressen på partnern att "prestera".
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                En testare berättade: "Det förvandlade vårt sovrum från en plats för ångest tillbaka till en lekplats."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                En av de vanligaste frågorna vi fick under vår research: <em>"Kommer min partner att känna sig hotad av det här?"</em>
              </p>
              <p>
                Så här ligger det till: <strong>Lem är ingen ersättning – den är ett plus.</strong> Många av paren vi intervjuade berättade att Lem i de intima stunderna faktiskt <em>förbättrade</em> närheten mellan dem.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  "Min man var nyfiken, inte hotad. Nu använder han den på mig under förspelet. Det tar bort pressen på honom att 'prestera', och jag får precis det jag behöver. Alla vinner."
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, gift i 28 år</p>
              </div>
              <p>
                Den lilla storleken gör den lätt att få med i samvaron utan att det känns klumpigt. Och eftersom den är handsfree när den väl sitter på plats kan ni båda fokusera på varandra.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Så använder par Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under förspelet</p>
                    <p className="text-sm text-gray-600">Partnern håller den på plats under kyssar och smek</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Under samlaget</p>
                    <p className="text-sm text-gray-600">Placerad för stimulering av klitoris och penetration samtidigt</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">På egen hand medan partnern ser på</p>
                    <p className="text-sm text-gray-600">Bygger närhet och hjälper partnern att lära sig vad som funkar</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">"Underhåll" mellan gångerna</p>
                    <p className="text-sm text-gray-600">På egen hand håller du vävnaden frisk när sex med partner är glesare</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tips:</strong> Prata med varandra – det är A och O. Se det som ett wellnessverktyg som gynnar <em>er båda</em> genom att minska pressen och öka njutningen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Alla skäl att prova, inga skäl att oroa dig</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Vi gick igenom Hello Nancys garantier. Här är vad de faktiskt betyder.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 dagars "njutningsgaranti"</h3>
                <p className="text-sm text-gray-700 text-center">
                  Inte nöjd? Få <strong>hela summan tillbaka</strong> – ingen retur behövs. De litar på att du är ärlig. Så säkra är de på sin sak.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Med andra ord: ingen ekonomisk risk alls. Prova den i en månad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 månaders garanti</h3>
                <p className="text-sm text-gray-700 text-center">
                  Om något går fel med apparaten under första året byter de ut den. Gratis. Utan krångel.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Med andra ord: det här är ingen engångspryl. Den är byggd för att hålla.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Support på livstid</h3>
                <p className="text-sm text-gray-700 text-center">
                  Frågor om användningen? Funderingar kring rengöring? Deras kundtjänst svarar inom 24 timmar.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Med andra ord: du köper inte bara en produkt. Du blir en del av en gemenskap.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Den verkliga frågan: vad har du att förlora?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Vi har gått igenom vetenskapen. Vi har visat dig recensionerna. Vi har förklarat garantierna. Vid det här laget är den enda risken att <em>inte</em> prova den.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Vi räknar lite:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Om du provar den:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Du kan återupptäcka njutning du trodde var borta</li>
                      <li>✓ Du kan förbättra vävnadshälsan och motverka atrofi</li>
                      <li>✓ Du kan sova bättre (orgasmer frigör oxytocin)</li>
                      <li>✓ I värsta fall får du dina 883 kr tillbaka</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Om du låter bli:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Vävnadsatrofin fortsätter</li>
                      <li>• Nervkänsligheten fortsätter att avta</li>
                      <li>• Det intima välbefinnandet förblir en kamp</li>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Därför har Hello Nancy vårt förtroende</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Vi rekommenderar inte produkter lättvindigt. Så här klarade Hello Nancy våra redaktionella krav.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prisbelönt</h3>
              <p className="text-sm text-gray-600">Women's Wellness Tech Award 2025 från International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verifierade recensioner</h3>
              <p className="text-sm text-gray-600">4,7★ i snitt från 14 907 verifierade köpare (inga falska recensioner)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Över 1 miljon sålda</h3>
              <p className="text-sm text-gray-600">Mer än 1 000 000 apparater sålda världen över sedan lanseringen 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medicinsk kvalitet</h3>
              <p className="text-sm text-gray-600">Medicinsk silikon och noggranna säkerhetstester</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Omskriven i:</h3>
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
            Vad verifierade köpare säger
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 av 5 (14 907 verifierade recensioner)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Bättre än östrogenkräm"</p>
                <p className="text-gray-700 italic">
                  "Jag köpte den inte för skojs skull, jag köpte den för att min läkare sa att jag behövde blodflöde. Men oj. Orgasmen hjälper mig att sova hela natten utan att vakna svettig. Det är mitt nya vitamin."
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verifierat köp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Väckte min kropp"</p>
                <p className="text-gray-700 italic">
                  "Jag testade Lelo Sona tidigare men den var för stark för mig. Lem är mild nog för min känslighet men ändå tillräckligt kraftfull för att faktiskt fungera. 10/10."
                </p>
                <p className="font-semibold text-gray-900">– Carly, verifierad köpare</p>
                <p className="text-xs text-gray-500">✓ Verifierat köp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Jag är helt fast"</p>
                <p className="text-gray-700 italic">
                  "Jag är helt fast. Lem suger och drar på det härligaste sätt. När du kommer känns det som att den drar ut orgasmen och håller pulserandet igång mycket längre. Såååå skönt!"
                </p>
                <p className="font-semibold text-gray-900">– Alisha, betatestare</p>
                <p className="text-xs text-gray-500">✓ Verifierat köp</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Förändrade allt"</p>
                <p className="text-gray-700 italic">
                  "För mig som verkligen värdesätter diskretion i intima produkter går det inte att tänka sig ett bättre val. Suget är olikt allt annat jag provat."
                </p>
                <p className="font-semibold text-gray-900">– Maxine, verifierad köpare</p>
                <p className="text-xs text-gray-500">✓ Verifierat köp</p>
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
              Vårt omdöme: värt pengarna
            </h2>
            <p className="text-center text-xl text-gray-600">
              Efter noggranna tester och research ger vår redaktion Nancys Lem en stark rekommendation till kvinnor som märker av vävnadsförändringar i klimakteriet.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">Spara 693 kr</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ Exklusivt läsarerbjudande ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <span className="font-bold">Erbjudandet går ut om:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancys Lem klitorisstimulator</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">883 kr</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">1 576 kr</span>
                      <span className="text-sm text-green-600 font-bold">Spara 693 kr (44 % rabatt)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Bara 2,42 kr/dag</strong> sett över ett år
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Mindre än din dagliga kaffe. Håller i åratal.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 Läsartips: ange koden <span className="font-bold text-[#FF1493]">TIFFANY</span> eller <span className="font-bold text-[#FF1493]">ISABELLA</span> i kassan för en extra överraskning!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem klitorisstimulator (klargul)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Liten guide för egenkärlek och bruksanvisning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetisk laddkabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Sammetspåse för resan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Fri frakt över hela världen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 dagars "njutningsgaranti"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 månaders garanti</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Köp nu – 883 kr (spara 693 kr)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Riskfri garanti
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 dagars pengarna-tillbaka-garanti. Om du inte älskar den får du hela summan tillbaka – <strong>ingen retur krävs</strong>.
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
            Är Lem rätt för dig?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tusentals kvinnor över 50 säger "ja". Se om du känner igen dig i något av det här:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem är för dig om du:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Har besvär med torrhet i underlivet eller smärtsamt samlag</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Känner mindre än förr eller har svårt att nå orgasm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lever med klitorisatrofi eller tunnare vävnad</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Tycker att vanliga vibratorer är för hårda eller irriterande</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vill hålla vävnaden frisk när du blir äldre</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Söker en diskret wellnessapparat (inte en uppenbar "leksak")</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Undviker eller kompletterar hormonbehandling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Är redo att ta tillbaka din intima hälsa och ditt självförtroende</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Du kommer särskilt att gilla Lem om:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du sätter <strong>vetenskapligt grundad wellness</strong> före jippon</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du vill ha <strong>förebyggande vård</strong>, inte bara dämpa symtom</span>
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
                    <span>Du är beredd att <strong>investera i dig själv</strong> (bara 2,42 kr/dag sett över ett år!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du vill ha <strong>resultat utan biverkningar</strong> eller recept</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Du är trött på att acceptera att <strong>"det är väl bara så här det är nu"</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Kryssade du i bara tre av rutorna</strong> är Lem gjord just för dig.
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
                  Ja, det här är jag – handla nu
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
            Dina frågor, besvarade
          </h2>
          <p className="text-center text-gray-600 mb-12">Vi ställde läsarnas frågor till Hello Nancy</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Gör det ont om jag är känslig eller har atrofi?</h3>
                <p className="text-gray-700">
                  Inte alls. Eftersom den bygger på sug i stället för direkt vibration mot huden slipper du friktionen som ger smärta. Du börjar på det lägsta av de 12 lägena och ökar försiktigt. Den är gjord just för att vara skonsam mot känslig vävnad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Är förpackningen pinsam?</h3>
                <p className="text-gray-700">
                  Inte alls. De skickar i vanliga bruna lådor utan logotyper. På returadressen står bara "Care & Bloom Ltd." Full diskretion, garanterat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Vad händer om jag inte gillar den?</h3>
                <p className="text-gray-700">
                  Hello Nancy ger 30 dagars nöjdhetsgaranti. Om du inte älskar den får du pengarna tillbaka – <strong>ingen retur behövs</strong>. De litar på att du hittar det som fungerar för din kropp.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kan jag använda den i duschen eller badet?</h3>
                <p className="text-gray-700">
                  Ja! Den är vattentät enligt IPX7, vilket betyder att den tål att sänkas ner helt i vatten. Många tycker att det varma vattnet gör det lättare att slappna av och förstärker känslan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hur mycket låter den?</h3>
                <p className="text-gray-700">
                  Viskande tyst. Den ultratysta motorn ger full diskretion – du kan använda den utan att oroa dig för att någon hör, inte ens i rummet intill.
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
              Vårt slutomdöme
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Efter veckor av research, samtal med experter och intervjuer med användare anser vår redaktion att Nancys Lem svarar mot ett verkligt medicinskt behov som har förbisetts alldeles för länge.
              </p>
              <p>
                Det här handlar inte om fåfänga eller njutning – det handlar om att hålla vävnaden frisk, sova bättre och ta tillbaka en del av dig själv som klimakteriet försöker ta ifrån dig.
              </p>
              <p className="text-xl font-bold">
                Har du symtom på GSM, kämpar med vanliga lösningar eller vill helt enkelt värna din intima hälsa när du blir äldre, så är Lem värd att överväga på allvar.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, senior wellnessredaktör
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
                Köp Nancys Lem – 883 kr
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 dagars garanti ✓ Fri frakt ✓ Diskret förpackning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Om affiliatelänkar</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider finansieras av sina läsare. När du handlar via länkar på vår sajt kan vi få en affiliateprovision, utan extra kostnad för dig. Det hjälper oss att fortsätta erbjuda gratis, forskningsbaserat innehåll. Vi rekommenderar bara produkter som vår redaktion har granskat noga och tror gynnar våra läsare. Alla åsikter är våra egna och påverkas inte av ersättning.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Om oss</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider erbjuder evidensbaserad hälso- och wellnessjournalistik för moderna kvinnor.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorier</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Hälsa</li>
                  <li>Wellness</li>
                  <li>Sex & relationer</li>
                  <li>Produktrecensioner</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Om Nancys Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Produktinformation</li>
                  <li>Kundrecensioner</li>
                  <li>Frakt & returer</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Trygghet & säkerhet</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Material av medicinsk kvalitet</li>
                  <li>✓ Diskret frakt</li>
                  <li>✓ 30 dagars garanti</li>
                  <li>✓ 12 månaders garanti</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Med ensamrätt. Det redaktionella innehållet är oberoende och objektivt.</p>
              <p className="mt-2">Produkt i fokus: Nancys Lem av Hello Nancy • Vinnare av Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
