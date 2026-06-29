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

  useEffect(() => { document.documentElement.lang = "it"; }, []);

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
    { src: "/PDP.jpg", alt: "Dispositivo wellness Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "Lem in un contesto lifestyle" },
    { src: "/PDP-2.jpg", alt: "Primo piano del design del Lem" },
    { src: "/PDP-3.jpg", alt: "Dettagli del prodotto Lem" },
    { src: "/PDP-4_IT.png", alt: "Lem in uso" },
    { src: "/PDP-5.jpg", alt: "Confezione e accessori del Lem" },
    { src: "/PDP-6_IT.png", alt: "Immagine lifestyle del Lem" },
    { src: "/PDP-7_IT.png", alt: "Caratteristiche del prodotto Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Salute femminile di cui fidarsi</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14.907 recensioni) • 1M+ venduti</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">€ 77,95</span>
                  <span className="text-sm line-through text-white/70">€ 138,95</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">RISPARMIA € 61</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Finisce tra {formatTime(timeLeft)}</span>
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
                  Acquista ora
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SALUTE & BENESSERE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">RECENSIONE PRODOTTO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            1M+ orgasmi dopo: perché le donne over 50 stanno mollando i vibratori per questo «limone»
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Abbiamo indagato sul perché migliaia di donne over 50 stiano mollando i vibratori tradizionali per questo dispositivo «di fisioterapia» a forma di limone. Ecco cosa abbiamo scoperto.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Di Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Caporedattrice Wellness</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Ultimo aggiornamento: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('it-IT', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min di lettura</span>
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
              <span className="font-bold text-gray-900 mr-1">Nota della redazione:</span>
              Questo articolo contiene link di affiliazione. Potremmo guadagnare una commissione se acquisti tramite questi link, senza costi aggiuntivi per te. Consigliamo solo prodotti che abbiamo studiato e testato a fondo.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Dispositivo wellness Nancy's Lem sul comodino"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Il Nancy's Lem se ne sta discreto sul comodino – la maggior parte delle persone lo scambia per un limone decorativo. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> lettrici stanno leggendo questo articolo in questo momento</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Confezione discreta</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Spedizione gratuita in tutto il mondo</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Soddisfatta o rimborsata in 30 giorni</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garanzia di 12 mesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perché ne stiamo parlando</h2>
          <p className="text-gray-700 leading-relaxed">
            Quando la nostra redazione ha sentito parlare per la prima volta di un «dispositivo wellness a forma di limone» che stava conquistando la community della menopausa, lo ammettiamo: eravamo scettiche. Ma dopo aver intervistato decine di donne, consultato dei ginecologi e sì, averlo provato in prima persona, capiamo l'entusiasmo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Non è l'ennesima moda del benessere. Affronta un problema medico reale che riguarda milioni di donne ma di cui quasi nessuno parla: l'<strong>atrofia clitoridea</strong> e la perdita del benessere sessuale durante la menopausa.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Il discorso di cui nessuno ci ha avvertite</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ci raccontano tutto sulle vampate che alle 3 del mattino ci lasciano sudate fra le lenzuola di seta. Ci parlano della nebbia mentale che ci fa cercare gli occhiali mentre li abbiamo sul naso.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Ma nessuno ti fa sedere con un calice di Pinot e ti sussurra: «Ehi, tra l'altro, se non tieni le cose attive là sotto, il clitoride può davvero rimpicciolirsi.»
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si chiama <strong>atrofia clitoridea</strong> e fa parte della sindrome genito-urinaria della menopausa (GSM) – una condizione che, secondo la North American Menopause Society, colpisce fino al 50% delle donne in post-menopausa.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«Il grande distacco»</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Per molte donne che abbiamo intervistato non era solo secchezza. Era l'<strong>insensibilità</strong>. Una tester ha raccontato di aver provato a usare il suo vecchio vibratore dei trent'anni: «Invece di farmi sentire bene, era solo… fastidioso. O insensibile. Come provare a fare il solletico a un callo.»
            </p>
            <p className="text-gray-700 leading-relaxed">
              Gli esperti spiegano che i vibratori tradizionali agiscono per attrito e pressione. Quando i tessuti si assottigliano per via dei bassi livelli di estrogeni, la vibrazione diretta può addirittura <em>desensibilizzare ulteriormente i nervi</em>, portando proprio a quella sensazione di «insensibilità».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">«Smetti di vibrare. Comincia ad aspirare.»</p>
            <p className="text-gray-700">– Specialisti del pavimento pelvico</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            I ginecologi specializzati nella cura della menopausa spiegano: «Quando gli estrogeni calano, diminuisce l'afflusso di sangue alla zona pelvica. Questo porta all'assottigliamento dei tessuti, alla perdita di elasticità e a una sensibilità ridotta. In medicina lo chiamiamo il principio del "usa o perdi": serve un afflusso di sangue costante per mantenere i tessuti in salute.»
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ecco a te: il Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ed è qui che entra in gioco questo piccolo dispositivo giallo. Il Nancy's Lem non viene presentato come un sex toy, ma come un dispositivo wellness. E dopo la nostra ricerca, capiamo anche perché.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A differenza dei vibratori tradizionali, che si basano sull'attrito (e possono irritare i tessuti assottigliati dalla menopausa), il Lem usa la cosiddetta <strong>tecnologia a onde di pressione</strong>. Immagina la differenza tra strofinare carta vetrata sulla pelle e lasciarsi avvolgere da un delicato massaggio sottovuoto.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">La scienza: perché la tecnologia a onde di pressione funziona</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vibratori tradizionali:</p>
              <p className="text-red-700 text-sm">Si basano sull'attrito di superficie, che può irritare i tessuti sensibili e assottigliati. Può causare insensibilità o micro-lacerazioni.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Tecnologia a onde di pressione:</p>
              <p className="text-green-700 text-sm">Crea delicate onde di aspirazione senza contatto diretto. Richiama nei tessuti sangue ricco di ossigeno, favorendo salute e sensibilità.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ecco come funziona: il Lem crea una delicata aderenza attorno al clitoride e lo stimola con onde di pressione – una sensazione simile al sesso orale, ma costante e instancabile. E poiché non c'è alcuno sfregamento, non c'è la minima irritazione.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ma la vera magia sta nella fisica: quella delicata aspirazione crea un effetto sottovuoto che richiama fisicamente sangue profondo e ricco di ossigeno nei tessuti. Risveglia nervi rimasti dormienti per anni.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              «Sembra che tiri fuori l'orgasmo direttamente… e fa durare la pulsazione molto più a lungo.»
            </p>
            <p className="font-semibold text-gray-700">– Alisha, beta tester (da recensioni clienti verificate)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Come se la cava: il nostro confronto</h2>
          <p className="text-center text-gray-600 mb-8">Abbiamo confrontato il Lem con le soluzioni tradizionali per la salute dei tessuti in menopausa</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Caratteristica</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibratore tradizionale</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Crema agli estrogeni</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Funziona sui tessuti sensibili</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sì</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Può irritare</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Risultati lenti</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Aumenta l'afflusso di sangue</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tessuti profondi</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Solo in superficie</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Graduale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Niente attrito/irritazione</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zero contatto</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Provoca attrito</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sì</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Piacere immediato</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Istantaneo</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variabile</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Nessun piacere</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Design discreto</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sembra un limone</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Evidente</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sì</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Consigliato dai medici</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Per l'afflusso di sangue</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ A volte</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sì</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Prezzo</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">€ 77,95 (una tantum)</td>
                  <td className="border border-gray-300 p-4 text-center">€ 45–135</td>
                  <td className="border border-gray-300 p-4 text-center">€ 28–45 al mese</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La filosofia di design «anti-vergogna»</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Una cosa ha colpito la nostra redazione durante i test: il design è <em>volutamente</em> discreto. È giallo acceso, sta nel palmo della mano e sembra davvero un limone decorativo.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Il «test del comodino»</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Il dispositivo Lem se ne sta discreto sul comodino"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Tutte abbiamo quel cassetto. Il <em>cassetto della vergogna</em>. Dove nascondiamo, sotto i calzini vecchi, quei dispositivi di plastica antiestetici e fallici.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Una delle nostre tester ci ha raccontato questo episodio: «Avevo dimenticato il Lem sul mobile del bagno proprio mentre era da noi mia suocera. Lo ha preso in mano e ha detto: "Oh, è uno di quei nuovi spazzolini sonici per il viso? Com'è morbido!"»
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Supera il test del comodino. Sembra tecnologia di self-care di fascia alta, non un sex toy. Perché è esattamente quello che è.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Attenzione alle imitazioni economiche</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Dopo aver pubblicato la nostra prima recensione, le lettrici ci hanno chiesto perché non comprare la versione da pochi euro su Amazon. Ecco cosa dicono gli esperti.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              «I toy economici usano materiali porosi in Jelly o TPE», ha avvertito. «Batteri microscopici restano intrappolati nei pori, un rischio enorme proprio per le donne in menopausa, già più soggette alle infezioni delle vie urinarie.»
            </p>
            <p className="text-red-900 font-bold mt-3">
              Il Lem di Hello Nancy è in silicone medicale al 100%, non poroso. Non rischiare la tua salute per risparmiare pochi euro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Silenziosissimo</h3>
                <p className="text-gray-600 text-sm">
                  Motore ultrasilenzioso per la massima discrezione
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Impermeabile (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfetto da usare nella vasca o sotto la doccia
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silicone medicale</h3>
                <p className="text-gray-600 text-sm">
                  Sicuro per la pelle, non poroso, facile da pulire
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Ricarica magnetica</h3>
                <p className="text-gray-600 text-sm">
                  120 minuti per ogni ricarica
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galleria prodotto</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">L'unboxing: la prima impressione conta</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Esperienza di unboxing del Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Una delle prime cose che le nostre tester hanno notato? La confezione è <em>elegante</em>. Niente colori sgargianti, nessuna immagine imbarazzante. La scatola è di un bianco minimal con discreti dettagli dorati – la si potrebbe tranquillamente scambiare per un prodotto skincare di lusso.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cosa c'è nella scatola:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Il dispositivo Lem (giallo acceso, grande quanto il palmo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cavo di ricarica USB magnetico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Morbida custodia in velluto (perfetta per viaggiare)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>«Manuale dell'amore per sé» con consigli d'uso e suggerimenti di benessere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Guida rapida con istruzioni illustrate</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                «Quando ho aperto la scatola, mi ha davvero sorpresa quanto tutto sembrasse <strong>premium</strong>. Non sembrava un sex toy: sembrava un investimento nel benessere.» – Tester, 54 anni
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Parliamo di anatomia: perché la stimolazione clitoridea conta</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="/anatomy_IT.png"
              alt="Diagramma in sezione dell'anatomia clitoridea"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">La scienza del piacere</h3>
                <p className="text-gray-600 text-sm">Quello che ogni donna dovrebbe sapere del proprio corpo</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ecco una cosa che a scuola non insegnano: il clitoride ha circa <strong>8.000 terminazioni nervose</strong> – più di qualsiasi altra parte del corpo umano, sia femminile che maschile. Per dare un'idea: il pene ne ha circa 4.000.
              </p>
              <p>
                Ma c'è un però: <strong>il 75% delle donne non riesce a raggiungere l'orgasmo con la sola penetrazione</strong>, secondo una ricerca pubblicata sul Journal of Sex & Marital Therapy. La chiave è il clitoride.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Cosa succede durante la menopausa:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="/bloodflow_IT.png"
                    alt="Confronto dell'afflusso di sangue prima e dopo la menopausa"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Il problema:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• I livelli di estrogeni calano del 90%</li>
                      <li>• L'afflusso di sangue alla zona pelvica diminuisce</li>
                      <li>• Il tessuto clitorideo può ridursi del 20–30%</li>
                      <li>• La sensibilità nervosa si attenua</li>
                      <li>• La lubrificazione naturale diminuisce</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ La soluzione:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Una stimolazione regolare mantiene l'afflusso di sangue</li>
                      <li>• Tiene attive le vie nervose</li>
                      <li>• Previene l'atrofia dei tessuti</li>
                      <li>• Mantiene la sensibilità</li>
                      <li>• Favorisce la lubrificazione naturale</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                I ginecologi lo dicono senza giri di parole: «Pensalo come un allenamento per il pavimento pelvico. Se non usi quei muscoli e non mantieni l'afflusso di sangue, si atrofizzano. Per il tessuto clitorideo vale esattamente lo stesso principio.»
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 In sintesi:</p>
                <p className="text-gray-700">
                  Una stimolazione clitoridea regolare non riguarda solo il piacere (anche se è un bel bonus). Riguarda mantenere i tessuti in salute, preservare la funzione nervosa e prevenire i cambiamenti irreversibili che arrivano con la trascuratezza. È <em>vera prevenzione</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">«Ma il mio partner?» Ce lo siamo chieste anche noi</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Il «miracolo in 3 minuti» (e perché i partner lo adorano)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diciamocelo: per molte donne over 50 possono volerci anche 20 minuti (e parecchie acrobazie mentali) per arrivare anche solo vicino all'orgasmo. Con il Lem? <strong className="text-[#FF1493]">Tre minuti.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>L'obiezione più grande che hanno le donne:</strong> «Il mio partner si sentirà sostituito?»
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Assolutamente no.</strong> Il Lem è piccolissimo. Molte coppie lo usano persino <em>durante</em> il rapporto. Fa da «ponte»: ti assicura di essere pienamente eccitata e naturalmente lubrificata, e toglie al partner l'ansia di dover «essere all'altezza».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Una tester ci ha detto: «Ha trasformato la nostra camera da letto da un luogo di ansia di nuovo in un parco giochi.»
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Una delle domande più frequenti che abbiamo ricevuto durante la nostra ricerca: <em>«Il mio partner si sentirà minacciato?»</em>
              </p>
              <p>
                Ecco cosa abbiamo scoperto: <strong>il Lem non è un sostituto, è un di più.</strong> Molte coppie che abbiamo intervistato hanno riferito che integrare il Lem nei loro momenti intimi ha addirittura <em>migliorato</em> il loro legame.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  «Mio marito era curioso, non si è sentito minacciato. Ora durante i preliminari lo usa lui su di me. A lui toglie l'ansia di dover "essere all'altezza" e io ricevo esattamente quello di cui ho bisogno. Ci guadagniamo entrambi.»
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55 anni, sposata da 28 anni</p>
              </div>
              <p>
                Le dimensioni compatte lo rendono facile da integrare nei momenti di coppia, senza risultare ingombrante. E poiché, una volta posizionato, funziona a mani libere, entrambi potete concentrarvi l'uno sull'altra.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Come le coppie usano il Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Durante i preliminari</p>
                    <p className="text-sm text-gray-600">Il partner lo tiene in posizione mentre bacia e accarezza</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Durante il rapporto</p>
                    <p className="text-sm text-gray-600">Posizionato per una stimolazione clitoridea e penetrativa simultanea</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">In solitaria, con il partner che guarda</p>
                    <p className="text-sm text-gray-600">Crea intimità e aiuta i partner a capire cosa funziona</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">«Manutenzione» tra una volta e l'altra</p>
                    <p className="text-sm text-gray-600">L'uso in solitaria mantiene i tessuti in salute quando il sesso di coppia non è frequente</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Consiglio extra:</strong> la comunicazione è tutto. Presentalo come uno strumento di benessere che fa bene a <em>entrambi</em>, perché riduce la pressione e aumenta il piacere.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ogni motivo per provarci, nessuno per preoccuparti</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Abbiamo esaminato le garanzie di Hello Nancy. Ecco cosa significano davvero.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">«Garanzia di piacere» di 30 giorni</h3>
                <p className="text-sm text-gray-700 text-center">
                  Non sei soddisfatta? Ti rimborsano <strong>l'intero importo</strong> – senza neanche dover restituire il prodotto. Si fidano della tua onestà. Tanto sono sicuri.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  In pratica: zero rischio economico. Provalo per un mese.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garanzia di 12 mesi</h3>
                <p className="text-sm text-gray-700 text-center">
                  Se nel primo anno qualcosa non va con il dispositivo, te lo sostituiscono. Gratis. Senza fare domande.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  In pratica: non è un gadget usa e getta. È fatto per durare.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Assistenza a vita</h3>
                <p className="text-sm text-gray-700 text-center">
                  Domande sull'uso? Dubbi sulla pulizia? Il team di assistenza clienti risponde entro 24 ore.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  In pratica: non stai comprando un prodotto. Stai entrando in una community.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">La vera domanda: cos'hai da perdere?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Ti abbiamo spiegato la scienza. Ti abbiamo mostrato le recensioni. Ti abbiamo illustrato le garanzie. A questo punto, l'unico rischio è <em>non</em> provarlo.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Facciamo due conti:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Se lo provi:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Potresti riscoprire un piacere che credevi perduto</li>
                      <li>✓ Potresti migliorare la salute dei tessuti e prevenire l'atrofia</li>
                      <li>✓ Potresti dormire meglio (gli orgasmi rilasciano ossitocina)</li>
                      <li>✓ Nel peggiore dei casi: riavrai i tuoi € 77,95</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Se non lo fai:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• L'atrofia dei tessuti continua</li>
                      <li>• La sensibilità nervosa continua a calare</li>
                      <li>• Il benessere sessuale resta una lotta</li>
                      <li>• Ti chiederai sempre «e se…?»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Perché Hello Nancy ha la nostra fiducia</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Non consigliamo prodotti alla leggera. Ecco perché Hello Nancy ha superato i nostri standard editoriali.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Premiato</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award dell'International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Recensioni verificate</h3>
              <p className="text-sm text-gray-600">4,7★ di media da 14.907 acquirenti verificate (niente recensioni false)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ venduti</h3>
              <p className="text-sm text-gray-600">Oltre 1.000.000 di unità vendute in tutto il mondo dal lancio nel 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Silicone medicale</h3>
              <p className="text-sm text-gray-600">Silicone medicale, rigorosi test di sicurezza</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Visto su:</h3>
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
            Cosa dicono le acquirenti verificate
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 su 5 (14.907 recensioni verificate)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Meglio della crema agli estrogeni»</p>
                <p className="text-gray-700 italic">
                  «Non l'ho comprato per "divertimento", l'ho comprato perché la mia dottoressa mi aveva detto che mi serviva afflusso di sangue. E invece, wow. Quel rilascio mi aiuta a dormire tutta la notte senza svegliarmi in un bagno di sudore. È la mia nuova vitamina.»
                </p>
                <p className="font-semibold text-gray-900">– Sarah J., 58 anni</p>
                <p className="text-xs text-gray-500">✓ Acquisto verificato</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Ha risvegliato il mio corpo»</p>
                <p className="text-gray-700 italic">
                  «Avevo provato il Lelo Sona prima, ma era troppo forte per me. Il Lem è abbastanza delicato per la mia sensibilità ma abbastanza intenso da funzionare davvero. 10/10.»
                </p>
                <p className="font-semibold text-gray-900">– Carly, acquirente verificata</p>
                <p className="text-xs text-gray-500">✓ Acquisto verificato</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Non posso più farne a meno»</p>
                <p className="text-gray-700 italic">
                  «Non posso più farne a meno. Il Lem aspira e tira nel modo più pazzesco. Quando vieni, sembra che ti tiri fuori l'orgasmo direttamente e fa durare la pulsazione molto più a lungo. Da impazzire!»
                </p>
                <p className="font-semibold text-gray-900">– Alisha, beta tester</p>
                <p className="text-xs text-gray-500">✓ Acquisto verificato</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Una svolta»</p>
                <p className="text-gray-700 italic">
                  «Per una come me, che con i prodotti intimi tiene alla discrezione, non poteva esserci scelta migliore. La funzione di aspirazione è diversa da tutto ciò che ho provato prima.»
                </p>
                <p className="font-semibold text-gray-900">– Maxine, acquirente verificata</p>
                <p className="text-xs text-gray-500">✓ Acquisto verificato</p>
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
              Il nostro verdetto: vale l'investimento
            </h2>
            <p className="text-center text-xl text-gray-600">
              Dopo test e ricerche approfonditi, la nostra redazione consiglia vivamente il Nancy's Lem alle donne che vivono i cambiamenti dei tessuti legati alla menopausa.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">RISPARMIA € 61</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFFERTA LETTRICI A TEMPO LIMITATO ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">L'offerta scade tra:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Stimolatore clitorideo Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">€ 77,95</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">€ 138,95</span>
                      <span className="text-sm text-green-600 font-bold">Risparmia € 61 (44% di sconto)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Solo € 0,21 al giorno</strong> per un anno di utilizzo
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Meno di un cappuccino al giorno. Dura per anni.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 CONSIGLIO PER LE LETTRICI: usa il codice <span className="font-bold text-[#FF1493]">TIFFANY</span> o <span className="font-bold text-[#FF1493]">ISABELLA</span> alla cassa per una piccola sorpresa in più!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Stimolatore clitorideo Lem (giallo acceso)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Manuale dell'amore per sé e guida all'uso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Cavo di ricarica magnetico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Custodia da viaggio in velluto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Spedizione gratuita in tutto il mondo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">«Garanzia di piacere» di 30 giorni</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Garanzia di 12 mesi</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Acquista ora – € 77,95 (Risparmia € 61)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garanzia senza rischi
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Garanzia soddisfatti o rimborsati di 30 giorni. Se non lo ami, ti rimborsano l'intero importo – <strong>senza necessità di restituirlo</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Confezione discreta</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Spedito in 24 ore</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Pagamento sicuro</span>
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
            Il Lem è giusto per te?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Migliaia di donne over 50 dicono «sì». Vedi se ti riconosci in qualcuno di questi punti:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Il Lem è per te se:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Fai i conti con secchezza vaginale o rapporti dolorosi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Provi una sensibilità ridotta o difficoltà a raggiungere l'orgasmo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hai a che fare con atrofia clitoridea o assottigliamento dei tessuti</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Trovi i vibratori tradizionali troppo forti o irritanti</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vuoi mantenere i tessuti in salute con l'avanzare dell'età</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cerchi un dispositivo wellness discreto (non un «toy» evidente)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vuoi evitare o integrare la terapia ormonale sostitutiva</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Sei pronta a riprenderti il tuo benessere sessuale e la tua sicurezza</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Amerai il Lem in particolare se:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Preferisci un <strong>benessere con basi scientifiche</strong> rispetto agli espedienti</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vuoi la <strong>prevenzione</strong>, non solo la gestione dei sintomi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Sei stanca di prodotti che <strong>non funzionano sui corpi maturi</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Apprezzi un <strong>design ben studiato</strong> che rispetta la tua privacy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Sei disposta a <strong>investire su te stessa</strong> (solo € 0,21 al giorno per un anno!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vuoi <strong>risultati senza effetti collaterali</strong> né ricette mediche</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Hai smesso di accettare che <strong>«ormai è così e basta»</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Se hai spuntato anche solo 3 di questi punti,</strong> il Lem è stato pensato proprio per te.
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
                  Sì, sono io – acquista ora
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
            Le tue domande, le nostre risposte
          </h2>
          <p className="text-center text-gray-600 mb-12">Abbiamo posto a Hello Nancy le domande che le nostre lettrici volevano fare</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fa male se sono sensibile o ho l'atrofia?</h3>
                <p className="text-gray-700">
                  Per niente. Poiché usa l'aspirazione ad aria invece della vibrazione a contatto diretto, evita l'attrito che causa dolore. Puoi partire dalla più bassa delle 12 modalità e salire piano piano. È progettato apposta per essere delicato sui tessuti più sensibili.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">La confezione è imbarazzante?</h3>
                <p className="text-gray-700">
                  Per niente. Spediscono in scatole di cartone marrone semplici, senza loghi. Come mittente c'è scritto solo «Care & Bloom Ltd.». Discrezione totale garantita.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">E se non mi piace?</h3>
                <p className="text-gray-700">
                  Hello Nancy offre una garanzia soddisfatti o rimborsati di 30 giorni. Se non lo ami, ti offrono un rimborso di cortesia una tantum – <strong>senza necessità di restituirlo</strong>. Si fidano del fatto che troverai ciò che funziona per il tuo corpo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Posso usarlo sotto la doccia o nella vasca?</h3>
                <p className="text-gray-700">
                  Sì! È certificato impermeabile IPX7, quindi è completamente immergibile. Molte scoprono che l'acqua calda intensifica il relax e la sensibilità.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Quanto è rumoroso?</h3>
                <p className="text-gray-700">
                  Silenziosissimo. Il motore ultrasilenzioso assicura la massima discrezione – puoi usarlo senza preoccuparti che qualcuno ti senta, anche nella stanza accanto.
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
              Il nostro parere finale
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Dopo settimane di ricerca, consulti con esperti e interviste alle utenti, la nostra redazione crede che il Nancy's Lem risponda a un bisogno medico reale, trascurato per troppo tempo.
              </p>
              <p>
                Non è una questione di vanità o di sfizio – si tratta di mantenere i tessuti in salute, dormire meglio e riprenderti una parte di te che la menopausa cerca di portarti via.
              </p>
              <p className="text-xl font-bold">
                Se hai i sintomi della GSM, fai i conti con le soluzioni tradizionali o vuoi semplicemente preservare il tuo benessere sessuale con l'avanzare dell'età, il Lem merita una seria considerazione.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, caporedattrice Wellness
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
                Acquista il Nancy's Lem – € 77,95
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Garanzia di 30 giorni ✓ Spedizione gratuita ✓ Confezione discreta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Informativa sull'affiliazione</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider è sostenuto dalle lettrici. Quando acquisti tramite i link sul nostro sito, potremmo guadagnare una commissione di affiliazione senza costi aggiuntivi per te. Questo ci aiuta a continuare a offrire contenuti gratuiti e basati sulla ricerca. Consigliamo solo prodotti che la nostra redazione ha esaminato a fondo e che riteniamo utili per le nostre lettrici. Tutte le opinioni espresse sono nostre e non sono influenzate da alcun compenso.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Chi siamo</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider offre un giornalismo di salute e benessere basato sull'evidenza, pensato per le donne di oggi.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categorie</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Salute</li>
                  <li>Benessere</li>
                  <li>Sesso & relazioni</li>
                  <li>Recensioni prodotti</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Sul Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Dettagli prodotto</li>
                  <li>Recensioni clienti</li>
                  <li>Spedizioni & resi</li>
                  <li>Contatto: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Fiducia & sicurezza</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materiali di grado medicale</li>
                  <li>✓ Spedizione discreta</li>
                  <li>✓ Garanzia di 30 giorni</li>
                  <li>✓ Garanzia di 12 mesi</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Tutti i diritti riservati. I contenuti editoriali sono indipendenti e obiettivi.</p>
              <p className="mt-2">Prodotto in evidenza: Nancy's Lem di Hello Nancy • Vincitore del Women's Wellness Tech Award 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
