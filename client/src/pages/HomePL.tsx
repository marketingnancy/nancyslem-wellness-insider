import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomePL() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "pl"; }, []);

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
    { src: "/PDP.jpg", alt: "Urządzenie do dobrostanu Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "Lem w codziennym otoczeniu" },
    { src: "/PDP-2.jpg", alt: "Zbliżenie na design Lema" },
    { src: "/PDP-3.jpg", alt: "Szczegóły Lema" },
    { src: "/PDP-4.jpg", alt: "Lem w użyciu" },
    { src: "/PDP-5.jpg", alt: "Opakowanie i akcesoria Lema" },
    { src: "/PDP-6.jpg", alt: "Lem na zdjęciu z życia codziennego" },
    { src: "/PDP-7.jpg", alt: "Cechy Lema" },
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
              <p className="text-xs text-gray-500 font-medium">Zaufane źródło o zdrowiu kobiet</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 opinii) • ponad 1 mln sprzedanych</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">342 zł</span>
                  <span className="text-sm line-through text-white/70">611 zł</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">OSZCZĘDZASZ 269 zł</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Kończy się za {formatTime(timeLeft)}</span>
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
                  Kup teraz
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">ZDROWIE I DOBROSTAN</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">RECENZJA PRODUKTU</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Ponad milion orgazmów później: dlaczego kobiety po pięćdziesiątce porzucają wibratory na rzecz tej „cytryny”
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Sprawdziłyśmy, dlaczego tysiące kobiet po pięćdziesiątce porzuca klasyczne wibratory na rzecz tego „fizjoterapeutycznego” urządzenia w kształcie cytryny. Oto, co odkryłyśmy.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Autorka: Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Starsza redaktorka działu dobrostanu</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Ostatnia aktualizacja: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('pl-PL', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min czytania</span>
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
              <span className="font-bold text-gray-900 mr-1">Od redakcji:</span>
              Ten artykuł zawiera linki afiliacyjne. Jeśli dokonasz zakupu za ich pośrednictwem, możemy otrzymać prowizję bez żadnych dodatkowych kosztów dla ciebie. Polecamy wyłącznie produkty, które dokładnie sprawdziłyśmy i przetestowałyśmy.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Urządzenie do dobrostanu Nancy's Lem na szafce nocnej"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem leży dyskretnie na szafce nocnej – prawie każdy bierze je za dekoracyjną cytrynę. Zdjęcie: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('pl-PL')}</strong> czytelniczek właśnie czyta ten artykuł</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Dyskretne opakowanie</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Darmowa wysyłka na cały świat</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 dni gwarancji satysfakcji</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 miesięcy gwarancji</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dlaczego o tym piszemy</h2>
          <p className="text-gray-700 leading-relaxed">
            Kiedy nasz zespół redakcyjny po raz pierwszy usłyszał o „urządzeniu do dobrostanu w kształcie cytryny”, które podbija środowisko kobiet w okresie menopauzy, przyznajemy szczerze – byłyśmy sceptyczne. Ale po rozmowach z dziesiątkami kobiet, konsultacjach z ginekolożkami i, owszem, samodzielnych testach rozumiemy ten zachwyt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To nie jest kolejna moda na dobre samopoczucie. To odpowiedź na prawdziwy problem zdrowotny, który dotyka miliony kobiet, a o którym prawie się nie mówi: <strong>zanik łechtaczki</strong> i utrata dobrostanu seksualnego w czasie menopauzy.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rozmowa, przed którą nikt nas nie ostrzegł</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Słyszymy wszystko o uderzeniach gorąca, przez które o trzeciej nad ranem budzimy się mokre od potu. Słyszymy o mgle umysłowej, przez którą szukamy okularów, choć mamy je na nosie.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Ale nikt nie usiądzie z tobą przy kieliszku wina i nie szepnie: „A tak przy okazji – jeśli nie zadbasz o aktywność tam na dole, twoja łechtaczka może się dosłownie skurczyć”.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nazywa się to <strong>zanikiem łechtaczki</strong> i jest częścią menopauzalnego zespołu moczowo-płciowego (GSM) – schorzenia, które według North American Menopause Society dotyczy nawet 50% kobiet po menopauzie.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„Wielkie rozłączenie”</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Dla wielu kobiet, z którymi rozmawiałyśmy, nie chodziło tylko o suchość. Chodziło o <strong>odrętwienie</strong>. Jedna z testerek opisała, jak próbowała użyć starego wibratora, który miała jeszcze z czasów trzydziestki: „Zamiast przyjemności czułam tylko… podrażnienie. Albo nic. Jakbym próbowała połaskotać odcisk”.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Specjalistki tłumaczą, że klasyczne wibratory działają przez tarcie i nacisk. Gdy tkanki stają się cieńsze z powodu niskiego poziomu estrogenu, bezpośrednia wibracja może wręcz <em>jeszcze bardziej znieczulać nerwy</em>, co prowadzi do tego uczucia „odrętwienia”.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">„Przestań wibrować. Zacznij zasysać”.</p>
            <p className="text-gray-700">– Specjalistki od dna miednicy</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Ginekolożki specjalizujące się w opiece menopauzalnej tłumaczą to tak: „Kiedy spada poziom estrogenu, zmniejsza się ukrwienie okolic miednicy. Tkanki stają się cieńsze, tracą elastyczność, a czucie słabnie. W medycynie nazywamy to zasadą «używaj albo trać» – żeby tkanka pozostała zdrowa, potrzebny jest stały dopływ krwi”.
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Poznaj Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I tu właśnie pojawia się to małe, żółte urządzenie. Nancy's Lem nie jest reklamowane jako gadżet erotyczny – to urządzenie do dobrostanu. A po naszych testach rozumiemy, dlaczego.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            W przeciwieństwie do klasycznych wibratorów, które bazują na tarciu (a to potrafi podrażnić cieńszą, menopauzalną tkankę), Lem wykorzystuje tak zwaną <strong>technologię fal ciśnieniowych</strong>. Wyobraź sobie różnicę między pocieraniem skóry papierem ściernym a delikatnym masażem podciśnieniowym.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nauka: dlaczego technologia fal ciśnieniowych działa</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Klasyczne wibratory:</p>
              <p className="text-red-700 text-sm">Bazują na tarciu powierzchniowym, które może podrażnić wrażliwą, cieńszą tkankę. Mogą powodować odrętwienie lub mikrouszkodzenia.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Technologia fal ciśnieniowych:</p>
              <p className="text-green-700 text-sm">Tworzy delikatne fale zasysania bez bezpośredniego kontaktu. Przyciąga do tkanek krew bogatą w tlen, wspierając ich zdrowie i czucie.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Tak to działa: Lem tworzy delikatne uszczelnienie wokół łechtaczki i stymuluje ją falami ciśnienia powietrza, naśladując odczucia seksu oralnego, ale w sposób stały i niestrudzony. Skoro nie ma tarcia, nie ma żadnego podrażnienia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ale prawdziwa magia tkwi w fizyce: to delikatne zasysanie tworzy efekt podciśnienia, który fizycznie przyciąga do tkanek głęboką, bogatą w tlen krew. Budzi nerwy, które od lat były uśpione.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              „To tak, jakby wyciągało orgazm prosto ze środka… pulsowanie trzyma się o wiele dłużej”.
            </p>
            <p className="font-semibold text-gray-700">– Alisha, testerka beta (z potwierdzonych opinii klientek)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Jak wypada na tle innych: nasze porównanie</h2>
          <p className="text-center text-gray-600 mb-8">Porównałyśmy Lem z dotychczasowymi rozwiązaniami dla zdrowia menopauzalnej tkanki</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Cecha</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Klasyczny wibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Krem estrogenowy</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Odpowiedni dla wrażliwej tkanki</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tak</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Może podrażniać</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Powolne efekty</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Poprawia ukrwienie</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Głęboka tkanka</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Tylko powierzchnia</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Stopniowo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Bez tarcia i podrażnień</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zero kontaktu</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Powoduje tarcie</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Tak</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Przyjemność od razu</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Natychmiast</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Różnie</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Bez przyjemności</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Dyskretny design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Wygląda jak cytryna</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Rzuca się w oczy</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Tak</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Polecany przez lekarki</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Dla ukrwienia</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Czasami</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Tak</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Cena</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">342 zł (jednorazowo)</td>
                  <td className="border border-gray-300 p-4 text-center">200–650 zł</td>
                  <td className="border border-gray-300 p-4 text-center">120–200 zł miesięcznie</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Filozofia projektowa „bez wstydu”</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jedno zwróciło uwagę naszego zespołu podczas testów: design jest <em>celowo</em> dyskretny. Lem ma żywy, żółty kolor, mieści się w dłoni i naprawdę wygląda jak dekoracyjna cytryna.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„Test szafki nocnej”</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Urządzenie Lem leżące dyskretnie na szafce nocnej"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Każda z nas ma taką szufladę. <em>Szufladę wstydu</em>. Tę, w której pod starymi skarpetkami chowamy te nieładne, falliczne plastikowe gadżety.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Jedna z naszych testerek opowiedziała nam taką historię: „Zostawiłam Lem na blacie w łazience akurat wtedy, gdy odwiedziła nas teściowa. Wzięła je do ręki i mówi: «Oj, czy to jeden z tych nowych sonicznych szczoteczek do twarzy? Jaki on miękki!»”.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Lem przechodzi test szafki nocnej. Wygląda jak luksusowa technologia do troski o siebie, a nie jak gadżet erotyczny. Bo właśnie tym jest.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Uwaga na tanie podróbki</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Po opublikowaniu naszej pierwszej recenzji czytelniczki pytały, dlaczego nie kupić wersji za 80 zł z Allegro. Oto, co mówią na to specjalistki.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              „Tanie gadżety robi się z porowatych materiałów typu żelu czy TPE” – ostrzegała. „W porach zostają mikroskopijne bakterie, a to ogromne ryzyko dla kobiet w okresie menopauzy, które i tak są bardziej podatne na infekcje dróg moczowych”.
            </p>
            <p className="text-red-900 font-bold mt-3">
              Lem od Hello Nancy jest w 100% z nieporowatego silikonu medycznego. Nie ryzykuj zdrowia, żeby zaoszczędzić kilkadziesiąt złotych.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Cichutki</h3>
                <p className="text-gray-600 text-sm">
                  Wyjątkowo cichy silnik dla pełnej dyskrecji
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Wodoodporny (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Idealny do kąpieli i pod prysznic
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silikon medyczny</h3>
                <p className="text-gray-600 text-sm">
                  Bezpieczny dla ciała, nieporowaty, łatwy do czyszczenia
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Ładowanie magnetyczne</h3>
                <p className="text-gray-600 text-sm">
                  120 minut na jednym ładowaniu
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galeria produktu</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rozpakowanie: pierwsze wrażenie ma znaczenie</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Rozpakowanie Lema"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Co nasze testerki zauważyły jako jedną z pierwszych rzeczy? Opakowanie jest <em>eleganckie</em>. Żadnych krzykliwych kolorów, żadnych krępujących obrazków. Pudełko jest minimalistyczne, białe, z subtelnymi złotymi akcentami – łatwo wziąć je za luksusowy kosmetyk.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Co znajdziesz w pudełku:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Urządzenie Lem (żywy żółty kolor, mieści się w dłoni)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetyczny kabel USB do ładowania</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Miękki, aksamitny woreczek do przechowywania (idealny w podróży)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>„Poradnik miłości do siebie” z radami dotyczącymi użycia i dobrostanu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Skrócona instrukcja z ilustrowanymi wskazówkami</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                „Kiedy otworzyłam pudełko, naprawdę zaskoczyło mnie, jak <strong>luksusowo</strong> wszystko wyglądało. Nie sprawiało wrażenia «gadżetu erotycznego» – raczej inwestycji w siebie”. – Testerka, 54 lata
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Porozmawiajmy o anatomii: dlaczego stymulacja łechtaczki ma znaczenie</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Schemat przekroju anatomii łechtaczki"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Nauka o przyjemności</h3>
                <p className="text-gray-600 text-sm">Co każda kobieta powinna wiedzieć o swoim ciele</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tego nie uczą na lekcjach o zdrowiu: łechtaczka ma około <strong>8000 zakończeń nerwowych</strong> – więcej niż jakakolwiek inna część ludzkiego ciała, kobiecego czy męskiego. Dla porównania, penis ma ich około 4000.
              </p>
              <p>
                Ale jest pewien haczyk: <strong>75% kobiet nie osiąga orgazmu samą penetracją</strong>, jak wynika z badań opublikowanych w „Journal of Sex & Marital Therapy”. Klucz to łechtaczka.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Co dzieje się w czasie menopauzy:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Porównanie ukrwienia przed menopauzą i po niej"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problem:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Poziom estrogenu spada o 90%</li>
                      <li>• Ukrwienie okolic miednicy słabnie</li>
                      <li>• Tkanka łechtaczki może skurczyć się o 20–30%</li>
                      <li>• Wrażliwość nerwów maleje</li>
                      <li>• Naturalne nawilżenie się zmniejsza</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Rozwiązanie:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regularna stymulacja podtrzymuje ukrwienie</li>
                      <li>• Utrzymuje aktywne ścieżki nerwowe</li>
                      <li>• Zapobiega zanikowi tkanki</li>
                      <li>• Zachowuje wrażliwość</li>
                      <li>• Wspiera naturalne nawilżenie</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Ginekolożki mówią to wprost: „Pomyśl o tym jak o ćwiczeniach dla dna miednicy. Jeśli nie używasz tych mięśni i nie podtrzymujesz ukrwienia, zanikają. Ta sama zasada dotyczy tkanki łechtaczki”.
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 W skrócie:</p>
                <p className="text-gray-700">
                  Regularna stymulacja łechtaczki to nie tylko przyjemność (choć to miły dodatek). To kwestia utrzymania zdrowia tkanki, zachowania funkcji nerwów i zapobiegania nieodwracalnym zmianom, które przynosi zaniedbanie. To <em>profilaktyka zdrowotna</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">„A co z moim partnerem?” – też o to zapytałyśmy</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">„Cud w 3 minuty” (i dlaczego partnerzy to uwielbiają)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bądźmy szczere: wielu kobietom po pięćdziesiątce dojście choćby blisko szczytu potrafi zająć ponad 20 minut (i sporo gimnastyki umysłowej). A z Lem? <strong className="text-[#FF1493]">Trzy minuty.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Największa obawa kobiet:</strong> „Czy mój partner poczuje się zastąpiony?”.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Zdecydowanie nie.</strong> Lem jest malutki. Wiele par używa go <em>w trakcie</em> stosunku. Pełni rolę „mostka”: dba o to, żebyś była w pełni podniecona i naturalnie nawilżona, a partnerowi zdejmuje presję, że ma „dać radę”.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Jedna z testerek powiedziała nam: „Nasza sypialnia z miejsca pełnego napięcia znów stała się przestrzenią zabawy”.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Jedno z najczęstszych pytań, które otrzymywałyśmy podczas naszych poszukiwań: <em>„Czy mój partner poczuje się zagrożony?”</em>.
              </p>
              <p>
                Oto, co odkryłyśmy: <strong>Lem nie jest zamiennikiem – jest dopełnieniem.</strong> Wiele par, z którymi rozmawiałyśmy, przyznało, że włączenie Lema do wspólnych chwil wręcz <em>poprawiło</em> ich bliskość.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  „Mój mąż był ciekawy, a nie zagrożony. Teraz to on używa go na mnie podczas gry wstępnej. Jemu zdejmuje to presję «dawania rady», a ja dostaję dokładnie to, czego potrzebuję. Oboje na tym wygrywamy”.
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55 lat, w małżeństwie od 28 lat</p>
              </div>
              <p>
                Niewielki rozmiar sprawia, że łatwo włączyć go do wspólnych chwil bez poczucia, że zawadza. A skoro po ustawieniu działa bez użycia rąk, oboje możecie skupić się na sobie nawzajem.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Jak pary używają Lema:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Podczas gry wstępnej</p>
                    <p className="text-sm text-gray-600">Partner przytrzymuje go na miejscu, gdy się całujecie i pieścicie</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Podczas stosunku</p>
                    <p className="text-sm text-gray-600">Ustawiony tak, by jednocześnie stymulować łechtaczkę i działać przy penetracji</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo, gdy partner patrzy</p>
                    <p className="text-sm text-gray-600">Buduje bliskość i pomaga partnerowi nauczyć się, co ci sprawia przyjemność</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">„Konserwacja” między zbliżeniami</p>
                    <p className="text-sm text-gray-600">Używanie solo utrzymuje tkankę w zdrowiu, gdy seksu we dwoje jest mniej</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Wskazówka:</strong> komunikacja jest kluczowa. Przedstaw to jako narzędzie dobrostanu, które wychodzi na dobre <em>wam obojgu</em>, bo zmniejsza presję i zwiększa przyjemność.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Same powody, by spróbować, żadnego, by się martwić</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Sprawdziłyśmy gwarancje Hello Nancy. Oto, co naprawdę oznaczają.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-dniowa „gwarancja przyjemności”</h3>
                <p className="text-sm text-gray-700 text-center">
                  Niezadowolona? Dostajesz <strong>pełny zwrot pieniędzy</strong> – bez konieczności odsyłania produktu. Ufają twojej szczerości. Tak bardzo są pewni.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  W praktyce: zero ryzyka finansowego. Testuj przez miesiąc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 miesięcy gwarancji</h3>
                <p className="text-sm text-gray-700 text-center">
                  Jeśli w pierwszym roku coś się zepsuje, wymienią urządzenie. Za darmo. Bez zbędnych pytań.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  W praktyce: to nie jednorazowy gadżet. Powstał, by służyć latami.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Wsparcie na zawsze</h3>
                <p className="text-sm text-gray-700 text-center">
                  Masz pytania o użycie? Wątpliwości co do czyszczenia? Zespół obsługi klienta odpowiada w niecałe 24 godziny.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  W praktyce: nie kupujesz produktu. Dołączasz do społeczności.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Prawdziwe pytanie: co masz do stracenia?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Omówiłyśmy naukę. Pokazałyśmy opinie. Wyjaśniłyśmy gwarancje. Na tym etapie jedyne ryzyko to <em>nie</em> spróbować.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Policzmy to:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Jeśli spróbujesz:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Może odkryjesz na nowo przyjemność, którą uznałaś za straconą</li>
                      <li>✓ Możesz poprawić zdrowie tkanki i zapobiec zanikowi</li>
                      <li>✓ Być może lepiej zaśniesz (orgazmy uwalniają oksytocynę)</li>
                      <li>✓ W najgorszym razie: odzyskasz swoje 342 zł</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Jeśli nie spróbujesz:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Zanik tkanki postępuje</li>
                      <li>• Wrażliwość nerwów wciąż maleje</li>
                      <li>• Dobrostan seksualny pozostaje wyzwaniem</li>
                      <li>• Na zawsze zostanie ci pytanie „a gdyby…?”</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Dlaczego ufamy marce Hello Nancy</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Nie polecamy produktów pochopnie. Oto, dlaczego Hello Nancy przeszło nasze redakcyjne kryteria.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Nagradzane</h3>
              <p className="text-sm text-gray-600">Nagroda 2025 w dziedzinie technologii dla dobrostanu kobiet, przyznana przez International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Potwierdzone opinie</h3>
              <p className="text-sm text-gray-600">Średnia 4,7★ od 14 907 zweryfikowanych kupujących (żadnych fałszywych opinii)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ponad 1 mln sprzedanych</h3>
              <p className="text-sm text-gray-600">Ponad 1 000 000 sztuk sprzedanych na całym świecie od premiery w 2023 roku</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Klasa medyczna</h3>
              <p className="text-sm text-gray-600">Silikon medyczny i rygorystyczne testy bezpieczeństwa</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Pisali o nas:</h3>
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
            Co mówią zweryfikowane kupujące
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 na 5 (14 907 zweryfikowanych opinii)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Lepsze niż krem estrogenowy”</p>
                <p className="text-gray-700 italic">
                  „Nie kupiłam go «dla zabawy», kupiłam, bo lekarka powiedziała, że potrzebuję ukrwienia. Ale rany. To odprężenie pomaga mi przespać całą noc i nie budzić się zlaną potem. To moja nowa witamina”.
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58 lat</p>
                <p className="text-xs text-gray-500">✓ Zakup potwierdzony</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Obudziło moje ciało”</p>
                <p className="text-gray-700 italic">
                  „Wcześniej próbowałam Lelo Sona, ale było dla mnie za mocne. Lem jest na tyle delikatny, żeby pasował do mojej wrażliwości, a jednocześnie na tyle intensywny, żeby naprawdę działać. 10/10”.
                </p>
                <p className="font-semibold text-gray-900">– Carly, zweryfikowana kupująca</p>
                <p className="text-xs text-gray-500">✓ Zakup potwierdzony</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Nie mogę się oderwać”</p>
                <p className="text-gray-700 italic">
                  „Nie mogę się oderwać. Lem zasysa i przyciąga w najszaleńszy sposób. Kiedy szczytujesz, to tak, jakby wyciągało orgazm prosto ze środka i trzymało pulsowanie o wiele dłużej. Mega dobre!”.
                </p>
                <p className="font-semibold text-gray-900">– Alisha, testerka beta</p>
                <p className="text-xs text-gray-500">✓ Zakup potwierdzony</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Zmieniło wszystko”</p>
                <p className="text-gray-700 italic">
                  „Jako ktoś, kto ceni dyskrecję w produktach intymnych, nie mogłam trafić lepiej. Funkcja zasysania nie przypomina niczego, czego próbowałam wcześniej”.
                </p>
                <p className="font-semibold text-gray-900">– Maxine, zweryfikowana kupująca</p>
                <p className="text-xs text-gray-500">✓ Zakup potwierdzony</p>
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
              Nasz werdykt: warte tej inwestycji
            </h2>
            <p className="text-center text-xl text-gray-600">
              Po dokładnych testach i analizie nasz zespół redakcyjny zdecydowanie poleca Nancy's Lem kobietom, które doświadczają menopauzalnych zmian w tkance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">OSZCZĘDZASZ 269 zł</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFERTA DLA CZYTELNICZEK NA OGRANICZONY CZAS ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Oferta wygasa za:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Stymulator łechtaczki Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">342 zł</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">611 zł</span>
                      <span className="text-sm text-green-600 font-bold">Oszczędzasz 269 zł (44% taniej)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Tylko 0,94 zł dziennie</strong> przez rok użytkowania
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Mniej niż twoja poranna kawa. A starcza na lata.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 WSKAZÓWKA DLA CZYTELNICZEK: wpisz kod <span className="font-bold text-[#FF1493]">TIFFANY</span> lub <span className="font-bold text-[#FF1493]">ISABELLA</span> przy finalizacji zamówienia, by dostać dodatkową niespodziankę!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Stymulator łechtaczki Lem (żywy żółty kolor)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Poradnik miłości do siebie i instrukcja użycia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetyczny kabel do ładowania</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Aksamitny woreczek na podróże</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Darmowa wysyłka na cały świat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30-dniowa „gwarancja przyjemności”</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 miesięcy gwarancji</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Kup teraz – 342 zł (oszczędzasz 269 zł)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Gwarancja bez ryzyka
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30-dniowa gwarancja zwrotu pieniędzy. Jeśli się nie zakochasz, oddamy ci całą kwotę – <strong>i nic nie musisz odsyłać</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Dyskretne opakowanie</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Wysyłka w 24 h</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Bezpieczna płatność</span>
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
            Czy Lem jest dla ciebie?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tysiące kobiet po pięćdziesiątce mówi „tak”. Sprawdź, czy któraś z tych sytuacji brzmi znajomo:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem jest dla ciebie, jeśli:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Zmagasz się z suchością pochwy lub bólem podczas zbliżenia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Czujesz mniejszą wrażliwość albo trudniej ci osiągnąć orgazm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Mierzysz się z zanikiem łechtaczki lub ścieńczeniem tkanki</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Klasyczne wibratory są dla ciebie zbyt mocne lub drażniące</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chcesz utrzymać tkankę w zdrowiu z biegiem lat</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Szukasz dyskretnego urządzenia do dobrostanu (a nie oczywistego „gadżetu”)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chcesz uniknąć terapii hormonalnej lub ją uzupełnić</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Jesteś gotowa odzyskać swój dobrostan seksualny i pewność siebie</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Lem szczególnie cię zachwyci, jeśli:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cenisz <strong>dobrostan oparty na nauce</strong> ponad chwytami marketingowymi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chcesz <strong>profilaktyki</strong>, a nie tylko łagodzenia objawów</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Masz dość produktów, które <strong>nie działają na dojrzałe ciało</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Doceniasz <strong>przemyślany design</strong>, który szanuje twoją prywatność</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Jesteś gotowa <strong>zainwestować w siebie</strong> (to tylko 0,94 zł dziennie przez rok!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Chcesz <strong>efektów bez skutków ubocznych</strong> i bez recept</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Masz dość godzenia się z tym, że <strong>„teraz już tak po prostu jest”</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Jeśli odhaczyłaś choćby 3 z tych punktów,</strong> Lem powstał z myślą właśnie o tobie.
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
                  Tak, to ja – kup teraz
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
            Twoje pytania, nasze odpowiedzi
          </h2>
          <p className="text-center text-gray-600 mb-12">Zapytałyśmy Hello Nancy o to, co najbardziej ciekawiło nasze czytelniczki</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Czy zaboli, jeśli jestem wrażliwa lub mam zanik?</h3>
                <p className="text-gray-700">
                  Wcale nie. Ponieważ Lem działa zasysaniem powietrza, a nie wibracją przez bezpośredni kontakt, omija tarcie, które wywołuje ból. Możesz zacząć od najniższej z 12 intensywności i delikatnie zwiększać ją w swoim tempie. Został zaprojektowany właśnie tak, by był łagodny dla delikatnej tkanki.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Czy opakowanie jest krępujące?</h3>
                <p className="text-gray-700">
                  Ani trochę. Wysyłka jest w zwykłych brązowych pudełkach, bez żadnych logo. W polu nadawcy widnieje tylko „Care & Bloom Ltd.”. Pełna dyskrecja gwarantowana.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">A jeśli mi się nie spodoba?</h3>
                <p className="text-gray-700">
                  Hello Nancy daje 30 dni gwarancji satysfakcji. Jeśli się nie zakochasz, oddadzą ci pieniądze jednorazowo, w geście dobrej woli – <strong>i nic nie musisz odsyłać</strong>. Ufają, że znajdziesz to, co najlepiej służy twojemu ciału.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Czy mogę go używać pod prysznicem lub w wannie?</h3>
                <p className="text-gray-700">
                  Tak! Ma certyfikat wodoodporności IPX7, co oznacza, że można go całkowicie zanurzyć. Wiele kobiet uważa, że ciepła woda pogłębia odprężenie i potęguje doznania.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Jak głośno pracuje?</h3>
                <p className="text-gray-700">
                  Cichutko. Wyjątkowo cichy silnik zapewnia pełną dyskrecję – możesz go używać bez obaw, że ktoś usłyszy, nawet w sąsiednim pokoju.
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
              Nasze ostateczne zdanie
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Po tygodniach analiz, konsultacji ze specjalistkami i rozmów z użytkowniczkami nasz zespół redakcyjny jest przekonany, że Nancy's Lem odpowiada na prawdziwą potrzebę zdrowotną, którą zbyt długo pomijano.
              </p>
              <p>
                Nie chodzi tu o próżność ani o zachciankę – chodzi o utrzymanie tkanki w zdrowiu, lepszą jakość snu i odzyskanie tej części siebie, którą menopauza próbuje ci odebrać.
              </p>
              <p className="text-xl font-bold">
                Jeśli masz objawy GSM, mierzysz się z dotychczasowymi rozwiązaniami albo po prostu chcesz zadbać o dobrostan seksualny z biegiem lat, Lem naprawdę zasługuje na twoją uwagę.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, starsza redaktorka działu dobrostanu
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
                Kup Nancy's Lem – 342 zł
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 dni gwarancji ✓ Darmowa wysyłka ✓ Dyskretne opakowanie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Informacja o afiliacji</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider utrzymuje się dzięki swoim czytelniczkom. Gdy kupujesz przez linki na naszej stronie, możemy otrzymać prowizję afiliacyjną bez żadnych dodatkowych kosztów dla ciebie. To pozwala nam dalej tworzyć bezpłatne treści oparte na rzetelnych badaniach. Polecamy wyłącznie produkty, które nasz zespół redakcyjny dokładnie sprawdził i co do których wierzy, że przyniosą korzyść naszym czytelniczkom. Wszystkie wyrażone opinie są nasze własne i nie mają na nie wpływu żadne wynagrodzenia.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">O nas</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider tworzy oparte na faktach dziennikarstwo o zdrowiu i dobrostanie dla współczesnych kobiet.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategorie</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Zdrowie</li>
                  <li>Dobrostan</li>
                  <li>Seks i relacje</li>
                  <li>Recenzje produktów</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">O Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Szczegóły produktu</li>
                  <li>Opinie klientek</li>
                  <li>Wysyłka i zwroty</li>
                  <li>Kontakt: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Zaufanie i bezpieczeństwo</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materiały klasy medycznej</li>
                  <li>✓ Dyskretna wysyłka</li>
                  <li>✓ 30 dni gwarancji</li>
                  <li>✓ 12 miesięcy gwarancji</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Wszelkie prawa zastrzeżone. Treści redakcyjne są niezależne i obiektywne.</p>
              <p className="mt-2">Opisywany produkt: Nancy's Lem od Hello Nancy • zdobywca Nagrody 2025 w dziedzinie technologii dla dobrostanu kobiet</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
