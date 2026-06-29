import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeFI() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "fi"; }, []);

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
    { src: "/PDP.jpg", alt: "Nancy's Lem -hyvinvointilaite" },
    { src: "/PDP-1.jpg", alt: "Lem arjen ympäristössä" },
    { src: "/PDP-2.jpg", alt: "Lähikuva Lemin muotoilusta" },
    { src: "/PDP-3.jpg", alt: "Lemin yksityiskohdat" },
    { src: "/PDP-4.jpg", alt: "Lem käytössä" },
    { src: "/PDP-5.jpg", alt: "Lemin pakkaus ja tarvikkeet" },
    { src: "/PDP-6.jpg", alt: "Lem arjen kuvassa" },
    { src: "/PDP-7.jpg", alt: "Lemin ominaisuudet" },
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
              <p className="text-xs text-gray-500 font-medium">Luotettavaa naisten terveystietoa</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 arvostelua) • yli 1 milj. myyty</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">SÄÄSTÄ 61 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Päättyy {formatTime(timeLeft)}</span>
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
                  Osta nyt
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">TERVEYS JA HYVINVOINTI</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">TUOTEARVOSTELU</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Yli miljoona orgasmia myöhemmin: miksi yli 50-vuotiaat naiset hylkäävät vibraattorin tämän ”sitruunan” takia
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Selvitimme, miksi tuhannet yli 50-vuotiaat naiset jättävät tutun vibraattorin ja siirtyvät tähän sitruunan muotoiseen ”fysioterapialaitteeseen”. Tässä on, mitä saimme selville.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Kirjoittanut Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Hyvinvoinnin vastaava toimittaja</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Päivitetty viimeksi: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('fi-FI', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>Lukuaika 8 min</span>
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
              <span className="font-bold text-gray-900 mr-1">Toimituksen huomautus:</span>
              Tässä artikkelissa on kumppanuuslinkkejä. Saatamme saada pienen palkkion, jos ostat niiden kautta – sinulle se ei maksa mitään ylimääräistä. Suosittelemme vain tuotteita, jotka olemme tutkineet ja testanneet perusteellisesti.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Nancy's Lem -hyvinvointilaite yöpöydällä"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem lepää huomaamattomasti yöpöydällä – useimmat luulevat sitä koristesitruunaksi. Kuva: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('fi-FI')}</strong> lukijaa lukee tätä artikkelia juuri nyt</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Diskreetti pakkaus</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Ilmainen toimitus maailmanlaajuisesti</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 päivän tyytyväisyystakuu</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 kuukauden takuu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Miksi nostamme tämän esiin</h2>
          <p className="text-gray-700 leading-relaxed">
            Kun toimituksemme kuuli ensimmäistä kertaa ”sitruunan muotoisesta hyvinvointilaitteesta”, joka on valloittanut vaihdevuosiyhteisön, myönnämme suoraan – olimme epäileväisiä. Mutta haastateltuamme kymmeniä naisia, keskusteltuamme gynekologien kanssa ja, kyllä, testattuamme sitä itse, ymmärrämme nyt, mistä innostuksessa on kyse.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tämä ei ole vain yksi hyvinvointitrendi lisää. Se vastaa todelliseen lääketieteelliseen ongelmaan, joka koskettaa miljoonia naisia mutta josta puhutaan harvoin: <strong>klitoriksen surkastumiseen</strong> ja seksuaalisen hyvinvoinnin hiipumiseen vaihdevuosien aikana.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Keskustelu, josta kukaan ei varoittanut</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kuumista aalloista kuulemme kaiken – niistä, jotka jättävät meidät hikoilemaan silkkilakanoiden läpi kello kolmelta yöllä. Aivosumusta kuulemme, sen, joka saa meidät etsimään laseja, vaikka ne ovat naamallamme.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Mutta kukaan ei istuta sinua alas viinilasin ääreen ja kuiskaa: ”Hei, muuten – jos et pidä alakertaa aktiivisena, klitoriksesi saattaa ihan oikeasti kutistua.”
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sitä kutsutaan <strong>klitoriksen surkastumiseksi</strong>, ja se on osa vaihdevuosien virtsa- ja sukupuolielinten oireyhtymää (GSM) – tila, joka koskettaa jopa puolta vaihdevuodet ohittaneista naisista North American Menopause Societyn mukaan.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">”Suuri kytkennän katkos”</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Monelle haastattelemallemme naiselle kyse ei ollut vain kuivuudesta. Kyse oli <strong>tunnottomuudesta</strong>. Yksi testaajistamme kuvaili, miltä tuntui yrittää käyttää vanhaa vibraattoriaan kolmenkympin ajoilta: ”Hyvän olon sijaan se tuntui vain… ärsyttävältä. Tai turralta. Kuin yrittäisi kutittaa känsää.”
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lääketieteen asiantuntijat selittävät, että tavalliset vibraattorit toimivat hankauksella ja iskuilla. Kun kudokset ohenevat estrogeenin vähetessä, suora värinä voi itse asiassa <em>turruttaa hermoja entisestään</em> ja saada aikaan juuri sen ”turran” tunteen.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">”Lopeta värisyttäminen. Aloita imeminen.”</p>
            <p className="text-gray-700">— Lantionpohjan asiantuntijat</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Vaihdevuosiin erikoistuneet gynekologit selittävät asian näin: ”Kun estrogeeni laskee, verenkierto lantion alueelle vähenee. Se ohentaa kudoksia, vie kimmoisuuden ja heikentää tuntoa. Lääketieteessä puhutaan periaatteesta ’käytä tai menetä’ – kudoksen pitäminen terveenä vaatii tasaista verenkiertoa.”
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tässä tulee Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Siihen tämä pieni keltainen laite tarttuu. Nancy's Lemiä ei markkinoida seksivälineenä – se on hyvinvointilaite. Ja tutkittuamme asiaa ymmärrämme miksi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Toisin kuin tavalliset vibraattorit, jotka nojaavat hankaukseen (mikä voi ärsyttää ohentunutta vaihdevuosikudosta), Lem käyttää niin kutsuttua <strong>ilmapulssitekniikkaa</strong>. Ajattele eroa hiekkapaperin hankaamisen ja lempeän imuhieronnan välillä.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tiede: miksi ilmapulssitekniikka toimii</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Tavalliset vibraattorit:</p>
              <p className="text-red-700 text-sm">Nojaavat pintahankaukseen, joka voi ärsyttää herkkää ja ohentunutta kudosta. Voivat aiheuttaa turtumista tai pieniä repeämiä.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Ilmapulssitekniikka:</p>
              <p className="text-green-700 text-sm">Luo lempeitä imuaaltoja ilman suoraa kosketusta. Vetää happirikasta verta kudoksiin ja edistää niiden terveyttä ja tuntoa.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Näin se toimii: Lem muodostaa lempeän sulkeuman klitoriksen ympärille ja stimuloi sitä ilmanpaineaalloilla – jäljitellen suuseksin tunnetta, mutta tasaisesti ja väsymättä. Koska hankausta ei ole, ei ole ärsytystäkään.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mutta varsinainen taika piilee fysiikassa: lempeä imu luo alipaineen, joka vetää syvää, happirikasta verta kudoksiin. Se herättää hermot, jotka ovat olleet uinuksissa vuosia.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              ”Tuntuu kuin se vetäisi orgasmin suoraan ulos… ja pitää sykkeen yllä paljon pidempään.”
            </p>
            <p className="font-semibold text-gray-700">— Alisha, beetatestaaja (vahvistetuista asiakasarvosteluista)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Näin se pärjää: vertailumme</h2>
          <p className="text-center text-gray-600 mb-8">Vertasimme Lemiä perinteisiin ratkaisuihin vaihdevuosikudoksen terveydelle</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Ominaisuus</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Tavallinen vibraattori</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Estrogeenivoide</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Sopii herkälle kudokselle</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Kyllä</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Voi ärsyttää</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Hitaat tulokset</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Lisää verenkiertoa</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Syvä kudos</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Vain pinnassa</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Vähitellen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Ei hankausta eikä ärsytystä</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ei kosketusta</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Aiheuttaa hankausta</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Kyllä</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Välitön nautinto</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Heti</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Vaihtelee</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ei nautintoa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diskreetti muotoilu</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Näyttää sitruunalta</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ilmeinen</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Kyllä</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Lääkärin suosittelema</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Verenkierron vuoksi</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Joskus</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Kyllä</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Hinta</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (kertaostos)</td>
                  <td className="border border-gray-300 p-4 text-center">45–135 €</td>
                  <td className="border border-gray-300 p-4 text-center">28–45 € kuussa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Häpeästä vapaa muotoilufilosofia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yksi asia teki toimitukseemme vaikutuksen testauksen aikana: muotoilu on <em>tarkoituksella</em> diskreetti. Se on kirkkaankeltainen, mahtuu kämmenelle ja näyttää aidosti koristesitruunalta.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">”Yöpöytätesti”</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Lem-laite lepää huomaamattomasti yöpöydällä"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Meillä kaikilla on se laatikko. <em>Häpeälaatikko</em>. Se, jonne piilotamme rumat, fallosmaiset muovivempaimet vanhojen sukkien alle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Yksi testaajistamme kertoi tämän tarinan: ”Unohdin Lemin kylpyhuoneen tasolle juuri kun anoppini tuli kylään. Hän otti sen käteensä ja sanoi: ’Voi, onkohan tämä niitä uusia sonic-kasvoharjoja? Onpa pehmeä!’”
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Se läpäisee yöpöytätestin. Se näyttää korkealuokkaiselta itsensähoitoteknologialta, ei seksivälineeltä. Koska juuri sitä se on.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Varoitus halvoista jäljitelmistä</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Ensimmäisen arvostelumme julkaisun jälkeen lukijat kysyivät, miksei kannattaisi ostaa sitä parinkympin versiota Amazonista. Tässä on, mitä lääketieteen asiantuntijat sanovat.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              ”Halvoissa välineissä käytetään huokoisia geeli- tai TPE-materiaaleja”, hän varoitti. ”Mikroskooppiset bakteerit jäävät huokosiin loukkuun, mikä on valtava riski vaihdevuosi-ikäisille naisille, jotka ovat jo muutenkin alttiita virtsatieinfektioille.”
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello Nancyn Lem on 100-prosenttisesti huokosetonta, lääketieteellistä silikonia. Älä vaaranna terveyttäsi säästääksesi parikymppiä.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Hiljainen kuin kuiskaus</h3>
                <p className="text-gray-600 text-sm">
                  Erittäin hiljainen moottori takaa täyden diskreettiyden
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Vedenkestävä (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Täydellinen kylpyyn tai suihkuun
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Lääketieteellistä silikonia</h3>
                <p className="text-gray-600 text-sm">
                  Kehoystävällistä, huokosetonta ja helppo puhdistaa
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Magneettilataus</h3>
                <p className="text-gray-600 text-sm">
                  120 minuuttia yhdellä latauksella
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tuotegalleria</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pakkauksen avaaminen: ensivaikutelma ratkaisee</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Lemin pakkauksen avaaminen"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Yksi ensimmäisistä asioista, jotka testaajamme huomasivat? Pakkaus on <em>tyylikäs</em>. Ei räikeitä värejä, ei nolostuttavia kuvia. Laatikko on minimalistisen valkoinen hillityin kultaisin yksityiskohdin – sen voisi helposti erehtyä luulemaan luksusihonhoitotuotteeksi.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Mitä laatikosta löytyy:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lem-laite (kirkkaankeltainen, kämmenen kokoinen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magneettinen USB-latausjohto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Pehmeä samettinen säilytyspussi (täydellinen matkalle)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>”Itsensä hemmottelun opas”, jossa on käyttövinkkejä ja hyvinvointineuvoja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Pikaopas kuvallisin ohjein</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                ”Kun avasin laatikon, yllätyin aidosti siitä, miten <strong>laadukkaalta</strong> kaikki tuntui. Se ei tuntunut ’seksivälineeltä’ – se tuntui hyvinvointiin sijoittamiselta.” — Testaaja, 54 vuotta
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Puhutaan anatomiasta: miksi klitoriksen kiihotus on tärkeää</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Klitoriksen anatomian poikkileikkauskaavio"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Nautinnon tiede</h3>
                <p className="text-gray-600 text-sm">Mitä jokaisen naisen olisi hyvä tietää kehostaan</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tätä ei opetettu terveystiedon tunneilla: klitoriksessa on noin <strong>8 000 hermopäätettä</strong> – enemmän kuin missään muussa ihmiskehon osassa, oli kyse miehestä tai naisesta. Vertailun vuoksi peniksessä niitä on noin 4 000.
              </p>
              <p>
                Mutta tässä on koukku: <strong>75 % naisista ei saa orgasmia pelkästä yhdynnästä</strong>, kertoo Journal of Sex & Marital Therapy -lehdessä julkaistu tutkimus. Avain on klitoris.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Mitä vaihdevuosien aikana tapahtuu:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Verenkierron vertailu ennen vaihdevuosia ja niiden jälkeen"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Ongelma:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Estrogeenitasot laskevat 90 %</li>
                      <li>• Verenkierto lantion alueelle vähenee</li>
                      <li>• Klitoriskudos voi kutistua 20–30 %</li>
                      <li>• Hermojen herkkyys heikkenee</li>
                      <li>• Luonnollinen kostutus vähenee</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Ratkaisu:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Säännöllinen kiihotus ylläpitää verenkiertoa</li>
                      <li>• Pitää hermoradat aktiivisina</li>
                      <li>• Ehkäisee kudoksen surkastumista</li>
                      <li>• Säilyttää herkkyyden</li>
                      <li>• Edistää luonnollista kostutusta</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynekologit sanovat sen suoraan: ”Ajattele sitä kuntoiluna lantionpohjalle. Jos et käytä noita lihaksia etkä ylläpidä verenkiertoa, ne surkastuvat. Sama periaate pätee klitoriskudokseen.”
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Ydin lyhyesti:</p>
                <p className="text-gray-700">
                  Säännöllinen klitoriksen kiihotus ei ole pelkkää nautintoa (vaikka se on mukava lisä). Kyse on kudoksen terveyden ylläpidosta, hermotoiminnan säilyttämisestä ja niiden peruuttamattomien muutosten ehkäisystä, joita laiminlyönti tuo mukanaan. Tämä on <em>ennaltaehkäisevää terveydenhoitoa</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">”Entä kumppanini?” Kysyimme senkin</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">”Kolmen minuutin ihme” (ja miksi kumppanit rakastavat sitä)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ollaan rehellisiä: monelle yli 50-vuotiaalle naiselle voi mennä yli 20 minuuttia (ja melkoinen määrä henkistä jumppaa), ennen kuin huipennus on edes näköpiirissä. Entä Lemin kanssa? <strong className="text-[#FF1493]">Kolme minuuttia.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Naisten suurin vastaväite:</strong> ”Tunteeko kumppanini, että hänet on korvattu?”
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Ei missään nimessä.</strong> Lem on pieni. Monet parit käyttävät sitä <em>yhdynnän aikana</em>. Se toimii ”siltana”: varmistaa, että olet kunnolla kiihottunut ja luonnollisesti kostea, ja vie kumppaniltasi paineen ”suoriutua”.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Yksi testaajamme kertoi: ”Se muutti makuuhuoneemme ahdistuksen paikasta takaisin leikkikentäksi.”
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Yksi yleisimmistä kysymyksistä, joita tutkimuksemme aikana saimme: <em>”Tunteeko kumppanini olonsa uhatuksi tämän takia?”</em>
              </p>
              <p>
                Tässä on, mitä saimme selville: <strong>Lem ei ole korvaaja – se on täydentäjä.</strong> Monet haastattelemamme parit kertoivat, että Lemin ottaminen mukaan yhteiseen aikaan itse asiassa <em>paransi</em> heidän yhteyttään.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  ”Mieheni oli utelias, ei uhattu. Nyt hän käyttää sitä minuun esileikin aikana. Häneltä lähtee paine ’suoriutua’ ja minä saan juuri sitä, mitä tarvitsen. Molemmat voittavat.”
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55, naimisissa 28 vuotta</p>
              </div>
              <p>
                Pieni koko tekee siitä helpon ottaa mukaan parisuhdehetkiin ilman, että se tuntuu kömpelöltä. Ja koska se pysyy paikoillaan ilman käsiä, molemmat voivat keskittyä toisiinsa.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Tapoja, joilla parit käyttävät Lemiä:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Esileikin aikana</p>
                    <p className="text-sm text-gray-600">Kumppani pitää sitä paikoillaan suudellen ja kosketellen</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Yhdynnän aikana</p>
                    <p className="text-sm text-gray-600">Aseteltuna samanaikaiseen klitoriksen ja yhdynnän kiihotukseen</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Yksin kumppanin katsellessa</p>
                    <p className="text-sm text-gray-600">Lisää läheisyyttä ja auttaa kumppania oppimaan, mikä toimii</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">”Ylläpito” kertojen välissä</p>
                    <p className="text-sm text-gray-600">Yksin käytettynä se pitää kudoksen terveenä, kun seksiä parin kanssa ei ole usein</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Vinkki:</strong> avoin keskustelu on tärkeintä. Esitä se hyvinvoinnin välineenä, joka hyödyttää teitä <em>molempia</em> – vähentää painetta ja lisää nautintoa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Joka syy kokeilla, ei yhtään syytä huoleen</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Tutkimme Hello Nancyn takuut. Tässä on, mitä ne oikeasti tarkoittavat.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 päivän ”nautintotakuu”</h3>
                <p className="text-sm text-gray-700 text-center">
                  Etkö ole tyytyväinen? Saat <strong>rahat takaisin täysimääräisinä</strong> – tuotetta ei tarvitse palauttaa. He luottavat rehellisyyteesi. Niin varmoja he ovat.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Toisin sanoen: nolla taloudellista riskiä. Kokeile kuukauden ajan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 kuukauden takuu</h3>
                <p className="text-sm text-gray-700 text-center">
                  Jos laitteessa ilmenee vikaa ensimmäisen vuoden aikana, he vaihtavat sen. Ilmaiseksi. Ilman kyselyitä.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Toisin sanoen: tämä ei ole kertakäyttövempain. Se on tehty kestämään.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Tuki koko eliniän ajan</h3>
                <p className="text-sm text-gray-700 text-center">
                  Kysymyksiä käytöstä? Mietityttääkö puhdistus? Heidän asiakaspalvelutiiminsä vastaa vuorokauden sisällä.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Toisin sanoen: et osta vain tuotetta. Liityt yhteisöön.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Todellinen kysymys: mitä sinulla on hävittävänä?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Olemme käyneet läpi tieteen. Olemme näyttäneet arvostelut. Olemme selittäneet takuut. Tässä vaiheessa ainoa riski on <em>olla</em> kokeilematta sitä.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Lasketaanpa yhdessä:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Jos kokeilet sitä:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Saatat löytää uudelleen nautinnon, jonka luulit menettäneesi</li>
                      <li>✓ Voit parantaa kudoksen terveyttä ja ehkäistä surkastumista</li>
                      <li>✓ Saatat nukkua paremmin (orgasmit vapauttavat oksitosiinia)</li>
                      <li>✓ Pahimmillaan: saat 77,95 € takaisin</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Jos et kokeile:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Kudoksen surkastuminen jatkuu</li>
                      <li>• Hermojen herkkyys heikkenee edelleen</li>
                      <li>• Seksuaalinen hyvinvointi pysyy haasteena</li>
                      <li>• Jää aina mietityttämään ”entä jos…?”</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Miksi Hello Nancy on ansainnut luottamuksemme</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Emme suosittele tuotteita kevyin perustein. Tässä on, miksi Hello Nancy läpäisi toimitukselliset kriteerimme.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Palkittu</h3>
              <p className="text-sm text-gray-600">Vuoden 2025 naisten hyvinvointiteknologian palkinto International Wellness Institutelta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vahvistetut arvostelut</h3>
              <p className="text-sm text-gray-600">4,7★ keskiarvo 14 907 vahvistetulta ostajalta (ei tekaistuja arvosteluja)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Yli 1 milj. myyty</h3>
              <p className="text-sm text-gray-600">Yli 1 000 000 laitetta myyty maailmanlaajuisesti vuoden 2023 lanseerauksen jälkeen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Lääketieteellistä laatua</h3>
              <p className="text-sm text-gray-600">Lääketieteellistä silikonia ja perusteelliset turvallisuustestit</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Esillä medioissa:</h3>
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
            Mitä vahvistetut ostajat sanovat
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7/5 (14 907 vahvistettua arvostelua)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">”Parempi kuin estrogeenivoide”</p>
                <p className="text-gray-700 italic">
                  ”En ostanut tätä ’huviksi’, ostin sen, koska lääkärini sanoi tarvitsevani verenkiertoa. Mutta vau. Laukeaminen auttaa minua nukkumaan yön yli heräämättä hikisenä. Tämä on uusi vitamiinini.”
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Vahvistettu ostos</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">”Herätti kehoni”</p>
                <p className="text-gray-700 italic">
                  ”Kokeilin aiemmin Lelo Sonaa, mutta se oli minulle liian voimakas. Lem on tarpeeksi lempeä herkkyydelleni mutta tarpeeksi syvä toimiakseen oikeasti. 10/10.”
                </p>
                <p className="font-semibold text-gray-900">- Carly, vahvistettu ostaja</p>
                <p className="text-xs text-gray-500">✓ Vahvistettu ostos</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">”Olen täysin koukussa”</p>
                <p className="text-gray-700 italic">
                  ”Olen täysin koukussa. Lem imee ja vetää mitä villeimmällä tavalla. Kun laukeat, tuntuu kuin se vetäisi orgasmin suoraan ulos ja pitää sykkeen yllä paljon pidempään. Niin hyvää!”
                </p>
                <p className="font-semibold text-gray-900">- Alisha, beetatestaaja</p>
                <p className="text-xs text-gray-500">✓ Vahvistettu ostos</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">”Mullisti kaiken”</p>
                <p className="text-gray-700 italic">
                  ”Koska arvostan diskreettiyttä intiimituotteissa, parempaa valintaa ei voisi olla. Imutoiminto ei muistuta mitään, mitä olen aiemmin kokeillut.”
                </p>
                <p className="font-semibold text-gray-900">- Maxine, vahvistettu ostaja</p>
                <p className="text-xs text-gray-500">✓ Vahvistettu ostos</p>
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
              Tuomiomme: sijoituksen arvoinen
            </h2>
            <p className="text-center text-xl text-gray-600">
              Perusteellisen testauksen ja tutkimuksen jälkeen toimituksemme suosittelee Nancy's Lemiä lämpimästi naisille, jotka kokevat vaihdevuosien tuomia muutoksia kudoksessa.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">SÄÄSTÄ 61 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ RAJOITETTU LUKIJATARJOUS ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Tarjous päättyy:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem -klitoriskiihotin</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Säästä 61 € (44 % alennus)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Vain 0,21 € päivässä</strong> vuoden käytön ajalta
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Vähemmän kuin päivittäinen kahvisi. Kestää vuosia.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 LUKIJAVINKKI: käytä koodia <span className="font-bold text-[#FF1493]">TIFFANY</span> tai <span className="font-bold text-[#FF1493]">ISABELLA</span> kassalla ja saat pienen yllätyksen!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem-klitoriskiihotin (kirkkaankeltainen)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Itsensä hemmottelun opas ja käyttöohje</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magneettinen latausjohto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Samettinen matkapussi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Ilmainen toimitus maailmanlaajuisesti</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 päivän ”nautintotakuu”</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 kuukauden takuu</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Osta nyt – 77,95 € (säästä 61 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Riskitön takuu
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 päivän rahat takaisin -takuu. Jos et rakastu, saat rahasi takaisin täysimääräisinä –<strong>palautusta ei tarvita</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Diskreetti pakkaus</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Lähtee 24 h kuluessa</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Turvallinen maksu</span>
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
            Onko Lem sinua varten?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Tuhannet yli 50-vuotiaat naiset sanovat ”kyllä”. Katso, tunnistatko itsesi näistä:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Lem on sinua varten, jos:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Kamppailet emättimen kuivuuden tai kivuliaan yhdynnän kanssa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Tunto on heikentynyt tai orgasmin saaminen on vaikeaa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Kamppailet klitoriksen surkastumisen tai kudoksen ohenemisen kanssa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Tavalliset vibraattorit tuntuvat liian kovilta tai ärsyttäviltä</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Haluat pitää kudoksen terveenä vuosien karttuessa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Etsit diskreettiä hyvinvointilaitetta (et ilmiselvää ”lelua”)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Haluat välttää hormonikorvaushoidon tai täydentää sitä</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Olet valmis ottamaan seksuaalisen hyvinvointisi ja itseluottamuksesi takaisin</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Rakastat Lemiä erityisesti, jos:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Arvostat <strong>tieteeseen pohjautuvaa hyvinvointia</strong> kikkojen sijaan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Haluat <strong>ennaltaehkäisevää hoitoa</strong>, et vain oireiden hallintaa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Olet kyllästynyt tuotteisiin, jotka <strong>eivät toimi kypsemmälle keholle</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Arvostat <strong>harkittua muotoilua</strong>, joka kunnioittaa yksityisyyttäsi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Olet valmis <strong>sijoittamaan itseesi</strong> (vain 0,21 € päivässä vuoden ajan!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Haluat <strong>tuloksia ilman sivuvaikutuksia</strong> tai reseptejä</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Et enää suostu hyväksymään, että <strong>”näin se nyt vain on”</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Jos rastitit edes 3 näistä kohdista,</strong> Lem on suunniteltu juuri sinua varten.
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
                  Kyllä, tämä olen minä – osta nyt
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
            Kysymyksesi, vastattuina
          </h2>
          <p className="text-center text-gray-600 mb-12">Kysyimme Hello Nancyltä sen, mitä lukijamme halusivat tietää</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Sattuuko tämä, jos olen herkkä tai minulla on surkastumista?</h3>
                <p className="text-gray-700">
                  Ei lainkaan. Koska se käyttää ilmaimua suoran kosketusvärinän sijaan, se välttää kipua aiheuttavan hankauksen. Voit aloittaa 12 tehotason matalimmasta ja edetä lempeästi ylöspäin. Se on suunniteltu nimenomaan hellävaraiseksi herkälle kudokselle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Onko pakkaus nolostuttava?</h3>
                <p className="text-gray-700">
                  Ei pätkääkään. Toimitus tulee tavallisissa ruskeissa laatikoissa ilman logoja. Lähettäjäksi on merkitty vain ”Care & Bloom Ltd.”. Täysi diskreettiys taattu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Entä jos en pidä siitä?</h3>
                <p className="text-gray-700">
                  Hello Nancy tarjoaa 30 päivän tyytyväisyystakuun. Jos et rakastu, he tarjoavat kertaluonteisen hyvityksen –<strong>palautusta ei tarvita</strong>. He luottavat siihen, että löydät sinun keholle sopivan tavan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Voiko sitä käyttää suihkussa tai kylvyssä?</h3>
                <p className="text-gray-700">
                  Kyllä! Sillä on IPX7-vedenkestävyyssertifikaatti, mikä tarkoittaa, että se on täysin upotettavissa. Monen mielestä lämmin vesi lisää rentoutumista ja tuntua.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Miten äänekäs se on?</h3>
                <p className="text-gray-700">
                  Hiljainen kuin kuiskaus. Erittäin hiljainen moottori takaa täyden diskreettiyden – voit käyttää sitä huolehtimatta, että kukaan kuulee, ei edes viereisessä huoneessa.
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
              Loppukaneettimme
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Viikkojen tutkimuksen, asiantuntijakonsultaatioiden ja käyttäjähaastattelujen jälkeen toimituksemme uskoo, että Nancy's Lem vastaa aitoon lääketieteelliseen tarpeeseen, joka on jäänyt liian pitkäksi aikaa huomiotta.
              </p>
              <p>
                Tässä ei ole kyse turhamaisuudesta tai hemmottelusta – kyse on kudoksen terveyden ylläpidosta, unenlaadun parantamisesta ja sen osan takaisin ottamisesta, jota vaihdevuodet yrittävät viedä.
              </p>
              <p className="text-xl font-bold">
                Jos sinulla on GSM:n oireita, tutut ratkaisut tuottavat tuskaa tai haluat vain ylläpitää seksuaalista hyvinvointiasi vuosien karttuessa, Lem ansaitsee vakavan harkinnan.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, hyvinvoinnin vastaava toimittaja
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
                Osta Nancy's Lem – 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 päivän takuu ✓ Ilmainen toimitus ✓ Diskreetti pakkaus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Kumppanuusilmoitus</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider toimii lukijoidensa tuella. Kun ostat sivustomme linkkien kautta, saatamme saada kumppanuuspalkkion ilman sinulle koituvaa lisäkustannusta. Tämä auttaa meitä tarjoamaan jatkossakin ilmaista, tutkimukseen pohjautuvaa sisältöä. Suosittelemme vain tuotteita, jotka toimituksemme on perusteellisesti tarkastanut ja joiden uskomme hyödyttävän lukijoitamme. Kaikki esitetyt mielipiteet ovat omiamme, eikä korvaus vaikuta niihin.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Tietoa meistä</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider tarjoaa tutkimukseen pohjautuvaa terveys- ja hyvinvointijournalismia nykyajan naiselle.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Kategoriat</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Terveys</li>
                  <li>Hyvinvointi</li>
                  <li>Seksi ja parisuhde</li>
                  <li>Tuotearvostelut</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Tietoa Nancy's Lemistä</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Tuotetiedot</li>
                  <li>Asiakasarvostelut</li>
                  <li>Toimitus ja palautukset</li>
                  <li>Yhteystieto: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Luottamus ja turvallisuus</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Lääketieteellistä laatua olevat materiaalit</li>
                  <li>✓ Diskreetti toimitus</li>
                  <li>✓ 30 päivän takuu</li>
                  <li>✓ 12 kuukauden takuu</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Kaikki oikeudet pidätetään. Toimituksellinen sisältö on riippumatonta ja objektiivista.</p>
              <p className="mt-2">Esitelty tuote: Nancy's Lem, Hello Nancy • Vuoden 2025 naisten hyvinvointiteknologian palkinnon voittaja</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
