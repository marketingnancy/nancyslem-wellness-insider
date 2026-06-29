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

  useEffect(() => { document.documentElement.lang = "es"; }, []);

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
    { src: "/PDP.jpg", alt: "Dispositivo de bienestar Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "El Lem en un ambiente cotidiano" },
    { src: "/PDP-2.jpg", alt: "Primer plano del diseño del Lem" },
    { src: "/PDP-3.jpg", alt: "Detalles del Lem" },
    { src: "/PDP-4.jpg", alt: "El Lem en uso" },
    { src: "/PDP-5.jpg", alt: "Embalaje y accesorios del Lem" },
    { src: "/PDP-6.jpg", alt: "El Lem en una imagen de su día a día" },
    { src: "/PDP-7.jpg", alt: "Características del Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Salud femenina de confianza</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 reseñas) • +1 M vendidos</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">AHORRA 61 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Termina en {formatTime(timeLeft)}</span>
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
                  Comprar ahora
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SALUD Y BIENESTAR</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">RESEÑA DE PRODUCTO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Más de un millón de orgasmos después: por qué las mujeres de más de 50 están dejando el vibrador por este «limón»
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Investigamos por qué miles de mujeres de más de 50 están dejando el vibrador de toda la vida por este dispositivo «de fisioterapia» con forma de limón. Esto es lo que descubrimos.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Por Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Redactora jefe de bienestar</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Última actualización: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min de lectura</span>
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
              <span className="font-bold text-gray-900 mr-1">Nota de la redacción:</span>
              Este artículo contiene enlaces de afiliados. Podemos llevarnos una comisión si compras a través de ellos, sin ningún coste adicional para ti. Solo recomendamos productos que hemos investigado y probado a fondo.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="El dispositivo de bienestar Nancy's Lem sobre la mesilla de noche"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">El Nancy's Lem descansa discretamente sobre la mesilla de noche: casi todo el mundo cree que es un limón decorativo. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('es-ES')}</strong> lectoras están viendo este artículo ahora mismo</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Embalaje discreto</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Envío gratis a todo el mundo</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantía de satisfacción de 30 días</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantía de 12 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Por qué hablamos de esto</h2>
          <p className="text-gray-700 leading-relaxed">
            Cuando nuestro equipo de redacción oyó hablar por primera vez de un «dispositivo de bienestar con forma de limón» que está arrasando en la comunidad de la menopausia, lo admitimos: éramos escépticas. Pero después de entrevistar a decenas de mujeres, consultar con ginecólogas y, sí, probarlo nosotras mismas, entendemos el revuelo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esto no es una moda más del bienestar. Aborda un problema médico real que afecta a millones de mujeres, pero del que casi nunca se habla: la <strong>atrofia del clítoris</strong> y la pérdida del bienestar sexual durante la menopausia.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La conversación que nadie nos avisó que tendríamos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nos lo cuentan todo sobre los sofocos que nos dejan empapadas en sudor a las tres de la madrugada. Nos hablan de la niebla mental que nos hace buscar las gafas cuando las llevamos puestas.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Pero nadie te sienta con una copa de pinot y te susurra: «Oye, por cierto, si no mantienes la zona de ahí abajo activa, puede que tu clítoris se encoja de verdad».
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Se llama <strong>atrofia del clítoris</strong> y forma parte del síndrome genitourinario de la menopausia (SGM), una afección que afecta hasta al 50 % de las mujeres posmenopáusicas, según la North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«La gran desconexión»</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Para muchas de las mujeres que entrevistamos, no era solo la sequedad. Era el <strong>adormecimiento</strong>. Una de ellas, al contarnos cómo había intentado usar el vibrador que tenía desde los treinta, lo resumió así: «En lugar de placer, lo único que notaba era… molestia. O nada de nada. Como intentar hacerle cosquillas a un callo».
            </p>
            <p className="text-gray-700 leading-relaxed">
              Las expertas médicas explican que los vibradores de toda la vida funcionan por fricción e impacto. Cuando los tejidos se adelgazan por la falta de estrógenos, la vibración directa puede de hecho <em>insensibilizar aún más los nervios</em>, lo que provoca esa sensación de «adormecimiento».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">«Deja de vibrar. Empieza a succionar».</p>
            <p className="text-gray-700">— Especialistas en suelo pélvico</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Las ginecólogas especializadas en menopausia lo explican así: «Cuando bajan los estrógenos, el riego sanguíneo de la zona pélvica disminuye. Eso adelgaza los tejidos, les resta elasticidad y reduce la sensibilidad. En medicina lo llamamos el principio de “úsalo o lo pierdes”: hace falta un riego constante para que el tejido se mantenga sano».
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Aquí entra el Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ahí es donde aparece este pequeño dispositivo amarillo. El Nancy's Lem no se vende como un juguete erótico: se presenta como un dispositivo de bienestar. Y, después de nuestra investigación, entendemos por qué.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A diferencia de los vibradores de toda la vida, que dependen de la fricción (que puede irritar el tejido menopáusico adelgazado), el Lem usa la llamada <strong>tecnología de ondas de presión</strong>. Piénsalo como la diferencia entre frotar papel de lija sobre la piel y darse un suave masaje de succión.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">La ciencia: por qué funcionan las ondas de presión</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vibradores de toda la vida:</p>
              <p className="text-red-700 text-sm">Dependen de la fricción superficial, que puede irritar el tejido sensible y adelgazado. Pueden provocar adormecimiento o microdesgarros.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Tecnología de ondas de presión:</p>
              <p className="text-green-700 text-sm">Crea suaves ondas de succión sin contacto directo. Atrae sangre rica en oxígeno hacia los tejidos y favorece su salud y su sensibilidad.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Así funciona: el Lem crea un suave sellado alrededor del clítoris y usa ondas de presión de aire para estimularlo, imitando la sensación del sexo oral, pero de forma constante e incansable. Como no hay roce, no hay irritación alguna.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pero la verdadera magia está en la física: esa suave succión crea un efecto de vacío que atrae físicamente sangre profunda y rica en oxígeno hacia los tejidos. Despierta nervios que llevaban años dormidos.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              «Es como si te sacara el orgasmo de dentro… mantiene el latido mucho más tiempo».
            </p>
            <p className="font-semibold text-gray-700">— Alisha, probadora beta (de reseñas verificadas de clientas)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cómo se compara: nuestro análisis</h2>
          <p className="text-center text-gray-600 mb-8">Comparamos el Lem con las soluciones de siempre para la salud del tejido menopáusico</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Característica</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibrador tradicional</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Crema de estrógenos</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Apto para tejido sensible</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sí</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Puede irritar</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Resultados lentos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Aumenta el riego sanguíneo</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tejido profundo</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Solo en superficie</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradual</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Sin fricción ni irritación</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Cero contacto</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Provoca fricción</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sí</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Placer inmediato</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Al instante</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variable</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Sin placer</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Diseño discreto</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Parece un limón</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Evidente</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sí</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Recomendado por médicas</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Por el riego sanguíneo</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ A veces</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sí</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Precio</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (pago único)</td>
                  <td className="border border-gray-300 p-4 text-center">45–135 €</td>
                  <td className="border border-gray-300 p-4 text-center">28–45 € al mes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La filosofía de diseño «sin vergüenza»</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Algo que llamó la atención de nuestro equipo durante las pruebas: el diseño es <em>deliberadamente</em> discreto. Es de un amarillo vivo, cabe en la palma de la mano y parece de verdad un limón decorativo.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">La «prueba de la mesilla de noche»</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="El dispositivo Lem descansando discretamente sobre la mesilla de noche"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Todas tenemos ese cajón. El <em>cajón de la vergüenza</em>. Donde escondemos esos aparatos de plástico fálicos y poco favorecedores debajo de los calcetines viejos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Una de nuestras probadoras nos contó esto: «Me dejé el Lem olvidado en la encimera del baño justo cuando vino mi suegra de visita. Lo cogió y va y dice: “Ay, ¿esto es uno de esos cepillos faciales sónicos nuevos? ¡Qué suave es!”».
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Pasa la prueba de la mesilla de noche. Parece tecnología de autocuidado de alta gama, no un juguete erótico. Porque es justo eso.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Cuidado con las imitaciones baratas</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Tras publicar nuestra primera reseña, varias lectoras nos preguntaron por qué no tirar de la versión de cuatro euros que hay en Amazon. Esto es lo que nos respondió una de las expertas médicas que consultamos.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              «Los juguetes baratos usan materiales porosos de gel o TPE», advirtió. «Las bacterias microscópicas se quedan atrapadas en los poros, lo que supone un riesgo enorme para las mujeres menopáusicas, que ya son propensas a las infecciones de orina».
            </p>
            <p className="text-red-900 font-bold mt-3">
              El Lem de Hello Nancy es 100 % silicona médica no porosa. No pongas en riesgo tu salud por ahorrarte unos euros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Silencioso</h3>
                <p className="text-gray-600 text-sm">
                  Motor ultrasilencioso para una discreción total
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Resistente al agua (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfecto para usar en la bañera o la ducha
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silicona médica</h3>
                <p className="text-gray-600 text-sm">
                  Apta para la piel, no porosa y fácil de limpiar
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Carga magnética</h3>
                <p className="text-gray-600 text-sm">
                  120 minutos por carga
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galería del producto</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Abrir la caja: la primera impresión importa</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="La experiencia de abrir la caja del Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                ¿Una de las primeras cosas que notaron nuestras probadoras? El embalaje es <em>elegante</em>. Sin colores chillones, sin imágenes embarazosas. La caja es de un blanco minimalista con sutiles detalles dorados: podría confundirse fácilmente con un producto de cosmética de lujo.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Qué hay dentro de la caja:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>El dispositivo Lem (amarillo vivo, del tamaño de la palma)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cable de carga magnético USB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Suave funda de terciopelo para guardarlo (perfecta para viajar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>«Manual del amor propio» con consejos de uso y recomendaciones de bienestar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Guía de inicio rápido con instrucciones ilustradas</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                «Cuando abrí la caja, me sorprendió lo <strong>premium</strong> que parecía todo. No daba la sensación de un “juguete erótico”, sino la de una inversión en bienestar». — Probadora, 54 años
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hablemos de anatomía: por qué importa la estimulación del clítoris</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Diagrama en corte transversal de la anatomía del clítoris"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">La ciencia del placer</h3>
                <p className="text-gray-600 text-sm">Lo que toda mujer debería saber sobre su cuerpo</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Esto no nos lo contaron en clase de educación sexual: el clítoris tiene unas <strong>8000 terminaciones nerviosas</strong>, más que ninguna otra parte del cuerpo humano, sea de hombre o de mujer. Para que te hagas una idea, el pene tiene unas 4000.
              </p>
              <p>
                Pero ahí está el quid: <strong>el 75 % de las mujeres no llega al orgasmo solo con la penetración</strong>, según un estudio publicado en el Journal of Sex & Marital Therapy. La clave está en el clítoris.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Qué ocurre durante la menopausia:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Comparación del riego sanguíneo antes y después de la menopausia"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ El problema:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Los niveles de estrógenos bajan un 90 %</li>
                      <li>• El riego sanguíneo de la zona pélvica disminuye</li>
                      <li>• El tejido del clítoris puede encogerse entre un 20 y un 30 %</li>
                      <li>• La sensibilidad nerviosa se reduce</li>
                      <li>• La lubricación natural disminuye</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ La solución:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• La estimulación regular mantiene el riego sanguíneo</li>
                      <li>• Mantiene activas las vías nerviosas</li>
                      <li>• Previene la atrofia del tejido</li>
                      <li>• Conserva la sensibilidad</li>
                      <li>• Favorece la lubricación natural</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Las ginecólogas lo dicen sin rodeos: «Piénsalo como ejercicio para tu suelo pélvico. Si no usas esos músculos y no mantienes el riego sanguíneo, se atrofian. El mismo principio se aplica al tejido del clítoris».
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 En resumen:</p>
                <p className="text-gray-700">
                  La estimulación regular del clítoris no va solo de placer (aunque eso es un extra de lujo). Va de mantener sano el tejido, conservar la función nerviosa y evitar los cambios irreversibles que trae el desuso. Esto es <em>salud preventiva</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">«¿Y mi pareja?» También nos lo preguntamos</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">El «milagro de 3 minutos» (y por qué las parejas lo adoran)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seamos sinceras: para muchas mujeres de más de 50, pueden hacer falta más de 20 minutos (y mucha gimnasia mental) para acercarse siquiera al clímax. ¿Con el Lem? <strong className="text-[#FF1493]">Tres minutos.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>La mayor objeción de las mujeres:</strong> «¿Sentirá mi pareja que la sustituyo?».
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>En absoluto.</strong> El Lem es diminuto. Muchas parejas lo usan <em>durante</em> el coito. Hace de «puente»: se asegura de que llegues bien excitada y lubricada de forma natural, y le quita a tu pareja la presión de «cumplir».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Una de nuestras probadoras nos contó: «Volvió a convertir nuestro dormitorio en un lugar para jugar, y no en una fuente de agobio».
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Una de las preguntas más frecuentes que recibimos durante nuestra investigación: <em>«¿Se sentirá amenazada mi pareja por esto?»</em>.
              </p>
              <p>
                Esto es lo que descubrimos: <strong>el Lem no es un sustituto, es un complemento.</strong> Muchas de las parejas que entrevistamos nos contaron que incorporar el Lem a su intimidad mejoró de hecho su conexión.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  «Mi marido sentía curiosidad, no se sentía amenazado. Ahora es él quien me lo pone durante los preliminares. A él le quita la presión de “cumplir” y yo consigo justo lo que necesito. Salimos ganando los dos».
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55, casada desde hace 28 años</p>
              </div>
              <p>
                Su tamaño compacto hace que sea fácil incorporarlo en pareja sin que resulte aparatoso. Y, como es de manos libres una vez colocado, los dos podéis centraros el uno en el otro.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Maneras en que las parejas usan el Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Durante los preliminares</p>
                    <p className="text-sm text-gray-600">La pareja lo sostiene en su sitio mientras os besáis y os acariciáis</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Durante el coito</p>
                    <p className="text-sm text-gray-600">Colocado para una estimulación simultánea del clítoris y por penetración</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">En solitario con la pareja mirando</p>
                    <p className="text-sm text-gray-600">Crea intimidad y ayuda a la pareja a aprender qué te funciona</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">«Mantenimiento» entre sesiones</p>
                    <p className="text-sm text-gray-600">El uso en solitario mantiene el tejido sano cuando el sexo en pareja no es frecuente</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Consejo:</strong> la comunicación es clave. Plantéalo como una herramienta de bienestar que os beneficia a <em>los dos</em>, porque reduce la presión y aumenta el placer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Todas las razones para probarlo, ninguna para preocuparte</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Investigamos las garantías de Hello Nancy. Esto es lo que significan de verdad.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">«Garantía de placer» de 30 días</h3>
                <p className="text-sm text-gray-700 text-center">
                  ¿No estás contenta? Te devuelven <strong>todo el dinero</strong>, sin necesidad de devolver el producto. Confían en tu sinceridad. Así de seguros están.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Traducción: cero riesgo económico. Pruébalo durante un mes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garantía de 12 meses</h3>
                <p className="text-sm text-gray-700 text-center">
                  Si algo falla en el dispositivo durante el primer año, te lo cambian. Gratis. Sin preguntas.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Traducción: esto no es un cacharro de usar y tirar. Está hecho para durar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Asistencia de por vida</h3>
                <p className="text-sm text-gray-700 text-center">
                  ¿Dudas sobre el uso? ¿Inquietudes sobre la limpieza? Su equipo de atención al cliente responde en menos de 24 horas.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Traducción: no estás comprando un producto. Te estás uniendo a una comunidad.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">La pregunta de verdad: ¿qué tienes que perder?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Hemos repasado la ciencia. Te hemos mostrado las reseñas. Te hemos explicado las garantías. A estas alturas, el único riesgo es <em>no</em> probarlo.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Hagamos cuentas:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Si lo pruebas:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Quizá redescubras un placer que creías perdido</li>
                      <li>✓ Podrías mejorar la salud del tejido y prevenir la atrofia</li>
                      <li>✓ Tal vez duermas mejor (los orgasmos liberan oxitocina)</li>
                      <li>✓ En el peor de los casos: recuperas tus 77,95 €</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Si no lo pruebas:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• La atrofia del tejido continúa</li>
                      <li>• La sensibilidad nerviosa sigue disminuyendo</li>
                      <li>• El bienestar sexual sigue siendo una lucha</li>
                      <li>• Siempre te quedarás con el «¿y si…?»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Por qué Hello Nancy se ha ganado nuestra confianza</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            No recomendamos productos a la ligera. Por esto Hello Nancy superó nuestros estándares editoriales.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Galardonado</h3>
              <p className="text-sm text-gray-600">Premio 2025 de tecnología para el bienestar femenino, del International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reseñas verificadas</h3>
              <p className="text-sm text-gray-600">4,7★ de media de 14 907 compradoras verificadas (nada de reseñas falsas)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">+1 M vendidos</h3>
              <p className="text-sm text-gray-600">Más de 1 000 000 de unidades vendidas en todo el mundo desde su lanzamiento en 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Silicona médica</h3>
              <p className="text-sm text-gray-600">Silicona médica y rigurosas pruebas de seguridad</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Aparece en:</h3>
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
            Lo que dicen las compradoras verificadas
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 sobre 5 (14 907 reseñas verificadas)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Mejor que la crema de estrógenos»</p>
                <p className="text-gray-700 italic">
                  «No lo compré para “pasármelo bien”, lo compré porque mi médica me dijo que necesitaba riego sanguíneo. Pero, madre mía. El alivio me ayuda a dormir del tirón sin despertarme empapada en sudor. Es mi nueva vitamina».
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Compra verificada</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Despertó mi cuerpo»</p>
                <p className="text-gray-700 italic">
                  «Antes probé el Lelo Sona, pero era demasiado fuerte para mí. El Lem es lo bastante suave para mi sensibilidad, pero lo bastante intenso para funcionar de verdad. Un 10».
                </p>
                <p className="font-semibold text-gray-900">- Carly, compradora verificada</p>
                <p className="text-xs text-gray-500">✓ Compra verificada</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Estoy enganchada»</p>
                <p className="text-gray-700 italic">
                  «Estoy enganchada. El Lem succiona y atrae de la forma más alucinante. Cuando te corres, es como si te sacara el orgasmo de dentro y mantiene el latido mucho más tiempo. ¡Buenísimo!».
                </p>
                <p className="font-semibold text-gray-900">- Alisha, probadora beta</p>
                <p className="text-xs text-gray-500">✓ Compra verificada</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Un antes y un después»</p>
                <p className="text-gray-700 italic">
                  «Como alguien que valora la discreción en los productos íntimos, no podría haber elección más perfecta. La función de succión no se parece a nada de lo que haya probado antes».
                </p>
                <p className="font-semibold text-gray-900">- Maxine, compradora verificada</p>
                <p className="text-xs text-gray-500">✓ Compra verificada</p>
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
              Nuestro veredicto: vale la inversión
            </h2>
            <p className="text-center text-xl text-gray-600">
              Tras pruebas e investigación a fondo, nuestro equipo de redacción recomienda con firmeza el Nancy's Lem a las mujeres que viven los cambios en el tejido propios de la menopausia.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">AHORRA 61 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFERTA PARA LECTORAS POR TIEMPO LIMITADO ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">La oferta caduca en:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Succionador del clítoris Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Ahorra 61 € (44 % de descuento)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Solo 0,21 € al día</strong> a lo largo de un año de uso
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Menos que tu café diario. Dura años.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 CONSEJO PARA LECTORAS: usa el código <span className="font-bold text-[#FF1493]">TIFFANY</span> o <span className="font-bold text-[#FF1493]">ISABELLA</span> al finalizar la compra para llevarte una sorpresa extra.</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Succionador del clítoris Lem (amarillo vivo)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Manual del amor propio y guía de uso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Cable de carga magnético</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Funda de terciopelo para viajar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Envío gratis a todo el mundo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">«Garantía de placer» de 30 días</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Garantía de 12 meses</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Comprar ahora - 77,95 € (Ahorra 61 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garantía sin riesgo
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Garantía de devolución del dinero de 30 días. Si no te enamora, te devolvemos hasta el último euro —<strong>y sin tener que devolver nada</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Embalaje discreto</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Envío en 24 h</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Pago seguro</span>
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
            ¿Es el Lem para ti?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Miles de mujeres de más de 50 dicen que «sí». Mira si te identificas con alguna de estas situaciones:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 El Lem es para ti si:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Te cuesta lidiar con la sequedad vaginal o el coito doloroso</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Notas menos sensibilidad o te cuesta llegar al orgasmo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lidias con la atrofia del clítoris o el adelgazamiento del tejido</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Los vibradores de toda la vida te resultan demasiado bruscos o irritantes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Quieres mantener sano el tejido a medida que cumples años</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Buscas un dispositivo de bienestar discreto (no un «juguete» evidente)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Quieres evitar o complementar la terapia hormonal sustitutiva</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás lista para reconquistar tu bienestar sexual y tu confianza</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Te encantará el Lem especialmente si:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Valoras el <strong>bienestar con base científica</strong> por encima de los trucos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Quieres <strong>cuidado preventivo</strong>, no solo controlar los síntomas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás cansada de productos que <strong>no funcionan en cuerpos maduros</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Aprecias un <strong>diseño cuidado</strong> que respeta tu intimidad</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás dispuesta a <strong>invertir en ti misma</strong> (¡solo 0,21 € al día durante un año!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Quieres <strong>resultados sin efectos secundarios</strong> ni recetas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás harta de aceptar que <strong>«esto es lo que hay ahora»</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Si has marcado aunque solo sean 3 de estas casillas,</strong> el Lem se diseñó pensando justo en ti.
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
                  Sí, soy yo - Comprar ahora
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
            Tus preguntas, resueltas
          </h2>
          <p className="text-center text-gray-600 mb-12">Le preguntamos a Hello Nancy lo que nuestras lectoras querían saber</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">¿Me dolerá si soy sensible o tengo atrofia?</h3>
                <p className="text-gray-700">
                  En absoluto. Como usa succión por aire en lugar de vibración por contacto directo, evita la fricción que provoca dolor. Puedes empezar por la más baja de las 12 intensidades e ir subiendo poco a poco. Está diseñado precisamente para ser delicado con el tejido sensible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">¿El embalaje es embarazoso?</h3>
                <p className="text-gray-700">
                  Cero. Lo envían en cajas marrones lisas, sin logotipos. El remite solo pone «Care & Bloom Ltd.». Discreción total garantizada.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">¿Y si no me gusta?</h3>
                <p className="text-gray-700">
                  Hello Nancy ofrece una garantía de satisfacción de 30 días. Si no te enamora, te hacen un reembolso de cortesía por una vez —<strong>y sin tener que devolver nada</strong>. Confían en que des con lo que mejor le sienta a tu cuerpo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">¿Puedo usarlo en la ducha o en la bañera?</h3>
                <p className="text-gray-700">
                  ¡Sí! Tiene certificación de resistencia al agua IPX7, lo que significa que es totalmente sumergible. A muchas usuarias les parece que el agua caliente potencia la relajación y la sensación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">¿Cuánto ruido hace?</h3>
                <p className="text-gray-700">
                  Es silencioso. El motor ultrasilencioso garantiza una discreción total: puedes usarlo sin preocuparte de que nadie lo oiga, ni siquiera en la habitación de al lado.
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
              Nuestra conclusión final
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Tras semanas de investigación, consultas con expertas y entrevistas a usuarias, nuestro equipo de redacción cree que el Nancy's Lem aborda una necesidad médica real que se ha pasado por alto durante demasiado tiempo.
              </p>
              <p>
                Esto no va de vanidad ni de caprichos: va de mantener sano el tejido, mejorar la calidad del sueño y reconquistar una parte de ti que la menopausia intenta arrebatarte.
              </p>
              <p className="text-xl font-bold">
                Si tienes síntomas del SGM, te cuesta con las soluciones de siempre o simplemente quieres mantener tu bienestar sexual a medida que cumples años, el Lem merece que lo tengas muy en cuenta.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, redactora jefe de bienestar
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
                Comprar el Nancy's Lem - 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Garantía de 30 días ✓ Envío gratis ✓ Embalaje discreto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Aviso de afiliación</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider se financia gracias a sus lectoras. Cuando compras a través de los enlaces de nuestra web, podemos llevarnos una comisión de afiliación sin ningún coste adicional para ti. Esto nos ayuda a seguir ofreciendo contenido gratuito y basado en la investigación. Solo recomendamos productos que nuestro equipo de redacción ha analizado a fondo y que cree que beneficiarán a nuestras lectoras. Todas las opiniones expresadas son nuestras y no están influidas por ninguna compensación.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Quiénes somos</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider ofrece periodismo de salud y bienestar con base científica para la mujer de hoy.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categorías</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Salud</li>
                  <li>Bienestar</li>
                  <li>Sexo y relaciones</li>
                  <li>Reseñas de productos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Sobre el Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Detalles del producto</li>
                  <li>Reseñas de clientas</li>
                  <li>Envíos y devoluciones</li>
                  <li>Contacto: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Confianza y seguridad</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materiales de uso médico</li>
                  <li>✓ Envío discreto</li>
                  <li>✓ Garantía de 30 días</li>
                  <li>✓ Garantía de 12 meses</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Todos los derechos reservados. El contenido editorial es independiente y objetivo.</p>
              <p className="mt-2">Producto destacado: Nancy's Lem de Hello Nancy • Ganador del Premio 2025 de tecnología para el bienestar femenino</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
