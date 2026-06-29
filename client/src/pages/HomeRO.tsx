import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeRO() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "ro"; }, []);

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
    { src: "/PDP.jpg", alt: "Aparatul de wellness Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "Lem într-un cadru de zi cu zi" },
    { src: "/PDP-2.jpg", alt: "Prim-plan cu designul aparatului Lem" },
    { src: "/PDP-3.jpg", alt: "Detalii ale aparatului Lem" },
    { src: "/PDP-4.jpg", alt: "Lem în timpul folosirii" },
    { src: "/PDP-5.jpg", alt: "Ambalajul și accesoriile Lem" },
    { src: "/PDP-6.jpg", alt: "Lem într-o imagine din viața de zi cu zi" },
    { src: "/PDP-7.jpg", alt: "Caracteristicile aparatului Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Sănătatea femeii, în care ai încredere</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14.907 recenzii) • peste 1 mil. vândute</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">ECONOMISEȘTI 61 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Se termină în {formatTime(timeLeft)}</span>
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
                  Cumpără acum
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SĂNĂTATE ȘI WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">RECENZIE DE PRODUS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Peste un milion de orgasme mai târziu: de ce femeile trecute de 50 de ani renunță la vibrator pentru această „lămâie”
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Am cercetat de ce mii de femei trecute de 50 de ani renunță la vibratorul clasic pentru acest aparat „de fizioterapie” în formă de lămâie. Iată ce am descoperit.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">De Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Redactor-șef wellness</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Ultima actualizare: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min de citit</span>
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
              <span className="font-bold text-gray-900 mr-1">Nota redacției:</span>
              Acest articol conține linkuri de afiliere. Putem primi un comision dacă cumperi prin ele, fără niciun cost suplimentar pentru tine. Recomandăm doar produse pe care le-am cercetat și testat temeinic.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Aparatul de wellness Nancy's Lem pe noptieră"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem stă discret pe noptieră — aproape toată lumea crede că e o lămâie decorativă. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('ro-RO')}</strong> cititoare citesc acest articol chiar acum</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Ambalaj discret</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Livrare gratuită în toată lumea</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garanție de satisfacție 30 de zile</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garanție de 12 luni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">De ce vorbim despre asta</h2>
          <p className="text-gray-700 leading-relaxed">
            Când echipa noastră de redacție a auzit prima dată de un „aparat de wellness în formă de lămâie” care face furori în comunitatea menopauzei, recunoaștem — am fost sceptice. Dar, după ce am stat de vorbă cu zeci de femei, ne-am consultat cu medici ginecologi și, da, l-am testat noi înșine, am înțeles entuziasmul.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nu e doar un alt trend din lumea wellness-ului. Răspunde unei probleme medicale reale, care afectează milioane de femei, dar despre care aproape nu se vorbește: <strong>atrofia clitoridiană</strong> și pierderea sănătății sexuale în timpul menopauzei.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Discuția despre care nimeni nu ne-a avertizat</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Auzim tot ce e de auzit despre bufeurile care ne lasă transpirate prin așternuturile de mătase la trei dimineața. Auzim despre ceața mentală care ne pune să ne căutăm ochelarii pe care îi avem chiar pe nas.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Dar nimeni nu te ia deoparte, cu un pahar de vin în mână, ca să-ți șoptească: „Apropo, dacă nu păstrezi activă zona de jos, clitorisul chiar se poate micșora”.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Se numește <strong>atrofie clitoridiană</strong> și face parte din sindromul genito-urinar al menopauzei (SGM) — o afecțiune care apare la până la 50% dintre femeile aflate la postmenopauză, potrivit North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„Marea deconectare”</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Pentru multe dintre femeile cu care am vorbit, nu era doar uscăciunea. Era <strong>amorțeala</strong>. O femeie ne-a povestit cum a încercat să folosească vibratorul pe care îl avea de pe la 30 de ani: „În loc să simt plăcere, simțeam doar… iritație. Sau nimic. Ca și cum aș fi încercat să gâdil un bătătură”.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Specialistele explică faptul că vibratoarele clasice funcționează prin frecare și impact. Când țesuturile se subțiază din cauza nivelului scăzut de estrogen, vibrația directă poate, de fapt, <em>să amorțească și mai mult nervii</em>, ducând la acea senzație de „amorțeală”.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">„Nu mai vibra. Începe să aspiri.”</p>
            <p className="text-gray-700">— Specialiste în planșeul pelvin</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Ginecologele specializate în îngrijirea la menopauză explică: „Când scade estrogenul, fluxul de sânge către zona pelvină se reduce. Asta duce la subțierea țesuturilor, la pierderea elasticității și la diminuarea sensibilității. În medicină vorbim despre principiul «folosește-l sau îl pierzi» — ai nevoie de un flux constant de sânge ca să-ți menții țesutul sănătos”.
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Aici intră în scenă Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aici intervine acest mic aparat galben. Nancy's Lem nu este promovat ca o jucărie erotică — este prezentat ca un aparat de wellness. Și, după ce l-am cercetat, înțelegem de ce.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spre deosebire de vibratoarele clasice, care se bazează pe frecare (ce poate irita țesutul menopauzal subțiat), Lem folosește o așa-numită <strong>tehnologie cu unde de presiune</strong>. Gândește-te la diferența dintre a freca șmirghel pe piele și un masaj blând prin aspirație.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Știința: de ce funcționează tehnologia cu unde de presiune</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vibratoarele clasice:</p>
              <p className="text-red-700 text-sm">Se bazează pe frecarea de la suprafață, care poate irita țesutul sensibil și subțiat. Pot provoca amorțeală sau microfisuri.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Tehnologia cu unde de presiune:</p>
              <p className="text-green-700 text-sm">Creează unde blânde de aspirație, fără contact direct. Atrage sângele bogat în oxigen în țesuturi și le îmbunătățește sănătatea și sensibilitatea.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Iată cum funcționează: Lem creează o etanșare blândă în jurul clitorisului și folosește unde de presiune a aerului ca să-l stimuleze, imitând senzația sexului oral, dar într-un mod constant și neobosit. Pentru că nu există frecare, nu există nici cea mai mică iritație.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dar adevărata magie stă în fizică: acea aspirație blândă creează un efect de vid care atrage la propriu sângele profund, bogat în oxigen, în țesuturi. Trezește nervi care au fost adormiți ani la rând.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              „E ca și cum ar scoate orgasmul afară din tine… ține pulsațiile mult mai mult timp.”
            </p>
            <p className="font-semibold text-gray-700">— Alisha, testeră beta (din recenzii verificate ale clientelor)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cum se compară: analiza noastră</h2>
          <p className="text-center text-gray-600 mb-8">Am comparat Lem cu soluțiile clasice pentru sănătatea țesutului menopauzal</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Caracteristică</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibrator clasic</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Cremă cu estrogen</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Potrivit pentru țesut sensibil</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Da</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Poate irita</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Rezultate lente</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Crește fluxul de sânge</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Țesut profund</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Doar la suprafață</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Treptat</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Fără frecare/iritație</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zero contact</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Provoacă frecare</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Da</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Plăcere imediată</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Instant</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variabilă</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Fără plăcere</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Design discret</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Arată ca o lămâie</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Evident</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Da</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Recomandat de medic</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Pentru fluxul de sânge</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Uneori</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Da</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Preț</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (plată unică)</td>
                  <td className="border border-gray-300 p-4 text-center">45–135 €</td>
                  <td className="border border-gray-300 p-4 text-center">28–45 €/lună</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Filosofia de design „fără rușine”</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Un lucru care a atras atenția echipei noastre în timpul testării: designul este <em>intenționat</em> discret. E galben aprins, încape în palmă și chiar arată ca o lămâie decorativă.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">„Testul noptierei”</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Aparatul Lem stând discret pe noptieră"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Toate avem sertarul acela. <em>Sertarul rușinii</em>. Acolo unde ascundem, sub șosetele vechi, aparatele de plastic falice și deloc atrăgătoare.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Una dintre testerele noastre ne-a povestit asta: „Am uitat Lem pe blatul din baie tocmai când venise soacra în vizită. L-a luat în mână și mi-a zis: «Vai, ăsta e unul dintre noile aparate sonice de curățare a feței? Ce moale e!»”.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Trece testul noptierei. Arată ca o tehnologie premium de îngrijire de sine, nu ca o jucărie erotică. Pentru că exact asta și este.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Atenție la imitațiile ieftine</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              După ce am publicat prima recenzie, cititoarele ne-au întrebat de ce n-ar lua versiunea de câțiva euro de pe Amazon. Iată ce spun specialistele.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              „Jucăriile ieftine folosesc materiale poroase de tip gel sau TPE”, a avertizat ea. „Bacteriile microscopice rămân prinse în pori, ceea ce reprezintă un risc uriaș pentru femeile la menopauză, deja predispuse la infecții urinare.”
            </p>
            <p className="text-red-900 font-bold mt-3">
              Lem de la Hello Nancy este 100% silicon medical, neporos. Nu-ți pune sănătatea în pericol ca să economisești câțiva euro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Silențios</h3>
                <p className="text-gray-600 text-sm">
                  Motor ultrasilențios, pentru o discreție totală
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Rezistent la apă (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfect pentru folosirea în baie sau la duș
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silicon medical</h3>
                <p className="text-gray-600 text-sm">
                  Sigur pentru piele, neporos și ușor de curățat
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Încărcare magnetică</h3>
                <p className="text-gray-600 text-sm">
                  120 de minute la o încărcare
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galeria produsului</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Despachetarea: prima impresie contează</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Experiența despachetării aparatului Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Unul dintre primele lucruri pe care le-au observat testerele noastre? Ambalajul este <em>elegant</em>. Fără culori țipătoare, fără imagini jenante. Cutia e albă, minimalistă, cu accente subtile aurii — ar putea fi ușor confundată cu un produs de cosmetică de lux.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Ce găsești în cutie:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Aparatul Lem (galben aprins, cât palma)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cablu de încărcare magnetic USB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Husă moale de catifea pentru depozitare (perfectă la drum)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>„Manual al iubirii de sine”, cu sfaturi de folosire și recomandări de wellness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ghid de pornire rapidă, cu instrucțiuni ilustrate</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                „Când am deschis cutia, m-a surprins cât de <strong>premium</strong> părea totul. Nu dădea senzația de «jucărie erotică», ci de investiție în propriul wellness.” — Testeră, 54 de ani
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hai să vorbim despre anatomie: de ce contează stimularea clitoridiană</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Diagramă în secțiune a anatomiei clitorisului"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Știința plăcerii</h3>
                <p className="text-gray-600 text-sm">Ce ar trebui să știe orice femeie despre corpul ei</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Iată ceva ce nu se predă la ora de educație pentru sănătate: clitorisul are aproximativ <strong>8.000 de terminații nervoase</strong> — mai multe decât orice altă parte a corpului uman, fie el bărbat sau femeie. Ca să-ți faci o idee, penisul are în jur de 4.000.
              </p>
              <p>
                Dar aici e nuanța: <strong>75% dintre femei nu pot ajunge la orgasm doar prin penetrare</strong>, potrivit unui studiu publicat în Journal of Sex & Marital Therapy. Cheia este clitorisul.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Ce se întâmplă în timpul menopauzei:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Comparație a fluxului de sânge înainte și după menopauză"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Problema:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Nivelul de estrogen scade cu 90%</li>
                      <li>• Fluxul de sânge către zona pelvină se reduce</li>
                      <li>• Țesutul clitoridian se poate micșora cu 20–30%</li>
                      <li>• Sensibilitatea nervoasă scade</li>
                      <li>• Lubrifierea naturală se reduce</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Soluția:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Stimularea regulată menține fluxul de sânge</li>
                      <li>• Păstrează active căile nervoase</li>
                      <li>• Previne atrofia țesutului</li>
                      <li>• Menține sensibilitatea</li>
                      <li>• Favorizează lubrifierea naturală</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Ginecologele o spun fără ocolișuri: „Gândește-te la asta ca la un exercițiu pentru planșeul pelvin. Dacă nu folosești acei mușchi și nu menții fluxul de sânge, se atrofiază. Același principiu se aplică și țesutului clitoridian”.
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Concluzia:</p>
                <p className="text-gray-700">
                  Stimularea regulată a clitorisului nu ține doar de plăcere (deși și asta e un bonus plăcut). Ține de menținerea sănătății țesutului, de păstrarea funcției nervoase și de prevenirea schimbărilor ireversibile pe care le aduce neglijarea. Aceasta este <em>îngrijire preventivă</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">„Și partenerul meu?” Ne-am pus și noi întrebarea</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">„Miracolul de 3 minute” (și de ce îl adoră partenerii)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Să fim sincere: pentru multe femei trecute de 50 de ani, pot trece peste 20 de minute (și multă gimnastică mentală) ca să se apropie măcar de orgasm. Cu Lem? <strong className="text-[#FF1493]">Trei minute.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Cea mai mare reținere a femeilor:</strong> „Oare partenerul meu se va simți înlocuit?”.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Nicidecum.</strong> Lem este minuscul. Multe cupluri îl folosesc <em>în timpul</em> actului sexual. Funcționează ca o „punte”: te ajută să fii pe deplin excitată și lubrifiată în mod natural și îi ia partenerului presiunea de a „performa”.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Una dintre testerele noastre ne-a spus: „A transformat dormitorul nostru dintr-un loc al anxietății înapoi într-un loc de joacă”.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Una dintre cele mai frecvente întrebări pe care le-am primit în timpul cercetării: <em>„Se va simți partenerul meu amenințat de asta?”</em>.
              </p>
              <p>
                Iată ce am descoperit: <strong>Lem nu e un înlocuitor — e un plus.</strong> Multe dintre cuplurile cu care am vorbit ne-au spus că, după ce au integrat Lem în momentele lor de intimitate, conexiunea dintre ei chiar s-a îmbunătățit.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  „Soțul meu era curios, nu amenințat. Acum el mi-l ține în timpul preludiului. Lui îi ia presiunea de a «performa», iar eu primesc exact ce am nevoie. Câștigăm amândoi.”
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55 de ani, căsătorită de 28 de ani</p>
              </div>
              <p>
                Dimensiunea compactă îl face ușor de folosit în cuplu, fără să fie incomod. Și, pentru că rămâne fără mâini odată poziționat, amândoi vă puteți concentra unul pe celălalt.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Cum folosesc cuplurile aparatul Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">În timpul preludiului</p>
                    <p className="text-sm text-gray-600">Partenerul îl ține pe loc în timp ce vă sărutați și vă mângâiați</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">În timpul actului sexual</p>
                    <p className="text-sm text-gray-600">Poziționat pentru o stimulare simultană, clitoridiană și prin penetrare</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Singură, cu partenerul privind</p>
                    <p className="text-sm text-gray-600">Construiește intimitate și îl ajută pe partener să învețe ce îți place</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">„Întreținere” între reprize</p>
                    <p className="text-sm text-gray-600">Folosirea în solo menține țesutul sănătos atunci când sexul în cuplu nu e frecvent</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Pont:</strong> comunicarea e esențială. Prezintă-l ca pe un instrument de wellness care vă aduce beneficii <em>amândurora</em>, fiindcă reduce presiunea și sporește plăcerea.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Toate motivele să încerci, niciunul să-ți faci griji</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Am cercetat garanțiile oferite de Hello Nancy. Iată ce înseamnă, de fapt.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">„Garanția plăcerii” de 30 de zile</h3>
                <p className="text-sm text-gray-700 text-center">
                  Nu ești mulțumită? Primești <strong>banii înapoi integral</strong> — fără să trebuiască să returnezi produsul. Au încredere că ești sinceră. Atât de siguri sunt.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Pe scurt: zero risc financiar. Încearcă-l o lună.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garanție de 12 luni</h3>
                <p className="text-sm text-gray-700 text-center">
                  Dacă apare vreo problemă la aparat în primul an, ți-l înlocuiesc. Gratuit. Fără întrebări.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Pe scurt: nu e un gadget de unică folosință. E făcut să dureze.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Asistență pe viață</h3>
                <p className="text-sm text-gray-700 text-center">
                  Întrebări despre folosire? Nelămuriri legate de curățare? Echipa lor de relații cu clienții îți răspunde în mai puțin de 24 de ore.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Pe scurt: nu cumperi doar un produs. Te alături unei comunități.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Adevărata întrebare: ce ai de pierdut?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Am trecut prin știință. Ți-am arătat recenziile. Ți-am explicat garanțiile. În acest punct, singurul risc este să <em>nu</em>-l încerci.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Hai să facem calculul:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Dacă îl încerci:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Poate redescoperi o plăcere pe care o credeai pierdută</li>
                      <li>✓ Poate îmbunătăți sănătatea țesutului și preveni atrofia</li>
                      <li>✓ Poate dormi mai bine (orgasmele eliberează oxitocină)</li>
                      <li>✓ În cel mai rău caz: îți primești cei 77,95 € înapoi</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Dacă nu-l încerci:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Atrofia țesutului continuă</li>
                      <li>• Sensibilitatea nervoasă scade în continuare</li>
                      <li>• Sănătatea sexuală rămâne o luptă</li>
                      <li>• Vei rămâne mereu cu întrebarea „dacă…?”</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">De ce are Hello Nancy încrederea noastră</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Nu recomandăm produse cu ușurință. Iată de ce Hello Nancy a trecut de standardele noastre editoriale.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Premiat</h3>
              <p className="text-sm text-gray-600">Premiul 2025 pentru tehnologie dedicată wellness-ului feminin, acordat de International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Recenzii verificate</h3>
              <p className="text-sm text-gray-600">4,7★ în medie, din partea a 14.907 cumpărătoare verificate (nicio recenzie falsă)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Peste 1 mil. vândute</h3>
              <p className="text-sm text-gray-600">Peste 1.000.000 de unități vândute în toată lumea de la lansarea din 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Silicon medical</h3>
              <p className="text-sm text-gray-600">Silicon medical și teste de siguranță riguroase</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">A apărut în:</h3>
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
            Ce spun cumpărătoarele verificate
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 din 5 (14.907 recenzii verificate)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Mai bun decât crema cu estrogen”</p>
                <p className="text-gray-700 italic">
                  „Nu l-am cumpărat «de plăcere», l-am cumpărat fiindcă doctorița mi-a spus că am nevoie de flux de sânge. Dar, uau. Eliberarea mă ajută să dorm toată noaptea, fără să mă trezesc lac de transpirație. E noua mea vitamină.”
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58 de ani</p>
                <p className="text-xs text-gray-500">✓ Achiziție verificată</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Mi-a trezit corpul”</p>
                <p className="text-gray-700 italic">
                  „Am încercat înainte Lelo Sona, dar era prea puternic pentru mine. Lem e suficient de blând pentru sensibilitatea mea, dar suficient de intens cât să funcționeze cu adevărat. 10 din 10.”
                </p>
                <p className="font-semibold text-gray-900">- Carly, cumpărătoare verificată</p>
                <p className="text-xs text-gray-500">✓ Achiziție verificată</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Nu-l mai las din mână”</p>
                <p className="text-gray-700 italic">
                  „Nu-l mai las din mână. Lem aspiră și trage în cel mai nebunesc mod. Când ajungi la orgasm, parcă ți-l scoate afară din tine și ține pulsațiile mult mai mult timp. Atât de bine!”
                </p>
                <p className="font-semibold text-gray-900">- Alisha, testeră beta</p>
                <p className="text-xs text-gray-500">✓ Achiziție verificată</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">„Schimbă totul”</p>
                <p className="text-gray-700 italic">
                  „Ca cineva care pune mare preț pe discreție la produsele intime, nu putea exista o alegere mai potrivită. Funcția de aspirație nu seamănă cu nimic din ce am încercat până acum.”
                </p>
                <p className="font-semibold text-gray-900">- Maxine, cumpărătoare verificată</p>
                <p className="text-xs text-gray-500">✓ Achiziție verificată</p>
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
              Verdictul nostru: merită investiția
            </h2>
            <p className="text-center text-xl text-gray-600">
              După teste și cercetare temeinică, echipa noastră de redacție recomandă cu tărie Nancy's Lem femeilor care trec prin schimbările de țesut specifice menopauzei.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">ECONOMISEȘTI 61 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFERTĂ PENTRU CITITOARE, PE TIMP LIMITAT ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Oferta expiră în:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Stimulator clitoridian Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Economisești 61 € (44% reducere)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Doar 0,21 € pe zi</strong> pe parcursul unui an de folosire
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Mai puțin decât cafeaua ta zilnică. Ține ani de zile.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 PONT PENTRU CITITOARE: folosește codul <span className="font-bold text-[#FF1493]">TIFFANY</span> sau <span className="font-bold text-[#FF1493]">ISABELLA</span> la finalizarea comenzii, pentru o surpriză în plus!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Stimulator clitoridian Lem (galben aprins)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Manual al iubirii de sine și ghid de folosire</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Cablu de încărcare magnetic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Husă de catifea pentru călătorii</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Livrare gratuită în toată lumea</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">„Garanția plăcerii” de 30 de zile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Garanție de 12 luni</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Cumpără acum - 77,95 € (economisești 61 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garanție fără riscuri
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Garanția returnării banilor în 30 de zile. Dacă nu te îndrăgostești de el, îți primești toți banii înapoi — <strong>fără să trebuiască să returnezi nimic</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Ambalaj discret</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Se expediază în 24 h</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Plată securizată</span>
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
            Este Lem potrivit pentru tine?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Mii de femei trecute de 50 de ani spun „da”. Vezi dacă te regăsești în vreuna dintre aceste situații:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem e pentru tine dacă:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Te confrunți cu uscăciune vaginală sau cu durere la actul sexual</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Simți mai puțin sau îți e greu să ajungi la orgasm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Te confrunți cu atrofie clitoridiană sau cu subțierea țesutului</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vibratoarele clasice ți se par prea dure sau iritante</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vrei să-ți menții țesutul sănătos pe măsură ce înaintezi în vârstă</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cauți un aparat de wellness discret (nu o „jucărie” evidentă)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vrei să eviți sau să completezi terapia de substituție hormonală</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ești gata să-ți recucerești sănătatea sexuală și încrederea</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Lem îți va plăcea mai ales dacă:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Pui preț pe <strong>wellness cu bază științifică</strong>, nu pe trucuri ieftine</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vrei <strong>îngrijire preventivă</strong>, nu doar să gestionezi simptomele</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Te-ai săturat de produse care <strong>nu funcționează pe corpuri mature</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Apreciezi un <strong>design bine gândit</strong>, care îți respectă intimitatea</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ești dispusă să <strong>investești în tine</strong> (doar 0,21 € pe zi, timp de un an!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vrei <strong>rezultate fără efecte secundare</strong> și fără rețete</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Nu mai vrei să accepți că <strong>„așa e de-acum și gata”</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Dacă ai bifat măcar 3 dintre aceste situații,</strong> Lem a fost gândit special pentru tine.
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
                  Da, despre mine e vorba - cumpără acum
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
            Întrebările tale, cu răspuns
          </h2>
          <p className="text-center text-gray-600 mb-12">Am întrebat Hello Nancy ce voiau să afle cititoarele noastre</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Mă va durea dacă sunt sensibilă sau am atrofie?</h3>
                <p className="text-gray-700">
                  Deloc. Fiindcă folosește aspirația aerului în loc de vibrația prin contact direct, evită frecarea care provoacă durere. Poți începe de la cea mai joasă dintre cele 12 intensități și să urci treptat, ușor-ușor. Este conceput special ca să fie blând cu țesutul delicat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Ambalajul e jenant?</h3>
                <p className="text-gray-700">
                  Câtuși de puțin. Se livrează în cutii maro simple, fără logouri. Adresa expeditorului scrie doar „Care & Bloom Ltd.”. Discreție totală garantată.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Și dacă nu-mi place?</h3>
                <p className="text-gray-700">
                  Hello Nancy oferă o garanție de satisfacție de 30 de zile. Dacă nu te îndrăgostești de el, îți fac, o singură dată, o rambursare de curtoazie — <strong>fără să trebuiască să returnezi nimic</strong>. Au încredere că vei găsi ce i se potrivește corpului tău.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Îl pot folosi la duș sau în baie?</h3>
                <p className="text-gray-700">
                  Da! Are certificare de rezistență la apă IPX7, ceea ce înseamnă că poate fi scufundat complet. Multe utilizatoare descoperă că apa caldă sporește relaxarea și senzația.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Cât de zgomotos e?</h3>
                <p className="text-gray-700">
                  E silențios. Motorul ultrasilențios asigură o discreție totală — îl poți folosi fără să-ți faci griji că te aude cineva, nici măcar din camera de alături.
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
              Concluzia noastră finală
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                După săptămâni de cercetare, consultări cu specialiste și interviuri cu utilizatoare, echipa noastră de redacție crede că Nancy's Lem răspunde unei nevoi medicale reale, trecută cu vederea de prea mult timp.
              </p>
              <p>
                Nu e vorba de vanitate sau de răsfăț — e vorba de menținerea sănătății țesutului, de îmbunătățirea calității somnului și de recucerirea unei părți din tine pe care menopauza încearcă să ți-o ia.
              </p>
              <p className="text-xl font-bold">
                Dacă ai simptome de SGM, te lupți cu soluțiile clasice sau pur și simplu vrei să-ți menții sănătatea sexuală pe măsură ce înaintezi în vârstă, Lem merită luat serios în calcul.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, redactor-șef wellness
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
                Cumpără Nancy's Lem - 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Garanție de 30 de zile ✓ Livrare gratuită ✓ Ambalaj discret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Dezvăluire privind afilierea</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider se susține datorită cititoarelor sale. Când cumperi prin linkurile de pe site-ul nostru, putem primi un comision de afiliere, fără niciun cost suplimentar pentru tine. Asta ne ajută să oferim în continuare conținut gratuit și bazat pe cercetare. Recomandăm doar produse pe care echipa noastră de redacție le-a analizat temeinic și despre care crede că vor fi de folos cititoarelor noastre. Toate opiniile exprimate ne aparțin și nu sunt influențate de vreo compensație.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Despre noi</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider oferă jurnalism de sănătate și wellness cu bază științifică, pentru femeia de azi.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categorii</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Sănătate</li>
                  <li>Wellness</li>
                  <li>Sex și relații</li>
                  <li>Recenzii de produse</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Despre Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Detalii despre produs</li>
                  <li>Recenzii ale clientelor</li>
                  <li>Livrare și retururi</li>
                  <li>Contact: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Încredere și siguranță</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materiale de uz medical</li>
                  <li>✓ Livrare discretă</li>
                  <li>✓ Garanție de 30 de zile</li>
                  <li>✓ Garanție de 12 luni</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Toate drepturile rezervate. Conținutul editorial este independent și obiectiv.</p>
              <p className="mt-2">Produs prezentat: Nancy's Lem de la Hello Nancy • Câștigător al Premiului 2025 pentru tehnologie dedicată wellness-ului feminin</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
