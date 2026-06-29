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

  useEffect(() => { document.documentElement.lang = "fr"; }, []);

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
    { src: "/PDP.jpg", alt: "L'appareil de bien-être Lem de Hello Nancy" },
    { src: "/PDP-1.jpg", alt: "Le Lem dans son décor du quotidien" },
    { src: "/PDP-2.jpg", alt: "Gros plan sur le design du Lem" },
    { src: "/PDP-3.jpg", alt: "Les détails du Lem" },
    { src: "/PDP-4_FR-FR.png", alt: "Comment utiliser le Lem" },
    { src: "/PDP-5.jpg", alt: "L'emballage et les accessoires du Lem" },
    { src: "/PDP-6_FR-FR.png", alt: "Le Lem en situation, scène de vie" },
    { src: "/PDP-7_FR-FR.png", alt: "Les caractéristiques du Lem" },
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
              <p className="text-xs text-gray-500 font-medium">La santé des femmes, en confiance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 avis) • 1M+ vendus</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">61,00 € D'ÉCONOMIE</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Se termine dans&nbsp;: {formatTime(timeLeft)}</span>
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
                  J'en profite
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SANTÉ & BIEN-ÊTRE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">TEST PRODUIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
Un million d'orgasmes plus tard&nbsp;: pourquoi les femmes de plus de 50 ans délaissent le vibromasseur pour ce «&nbsp;citron&nbsp;»
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
Nous avons cherché à comprendre pourquoi des milliers de femmes de plus de 50 ans abandonnent le vibromasseur classique au profit de cet appareil de «&nbsp;physiothérapie&nbsp;» en forme de citron. Voici ce que nous avons découvert.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Par Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Rédactrice bien-être senior</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Dernière mise à jour&nbsp;: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min de lecture</span>
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
              <span className="font-bold text-gray-900 mr-1">Note de la rédaction&nbsp;:</span>
              Cet article contient des liens affiliés. Si vous passez commande via l'un d'eux, nous pouvons toucher une commission, sans que cela change quoi que ce soit au prix pour vous. Nous ne recommandons que des produits que nous avons soigneusement étudiés et testés.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="L'appareil de bien-être Lem de Hello Nancy sur une table de chevet"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Posé sur une table de chevet, le Lem passe totalement inaperçu&nbsp;: la plupart des gens y voient un citron décoratif. Photo&nbsp;: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> personnes lisent cet article en ce moment</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Emballage discret</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Livraison gratuite partout</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Satisfait ou remboursé sous 30 jours</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantie 12 mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi nous en parlons</h2>
          <p className="text-gray-700 leading-relaxed">
            Quand notre rédaction a entendu parler pour la première fois de cet «&nbsp;appareil de bien-être en forme de citron&nbsp;» qui faisait fureur dans la communauté ménopause, nous étions sceptiques, autant l'avouer. Mais après avoir interrogé des dizaines de femmes, consulté des gynécologues et, oui, l'avoir essayé nous-mêmes, nous comprenons l'engouement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ce n'est pas une énième tendance bien-être. Le Lem répond à un vrai problème médical, qui touche des millions de femmes mais dont on parle rarement&nbsp;: l'<strong>atrophie clitoridienne</strong> et la perte de bien-être sexuel à la ménopause.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce dont personne ne nous avait prévenues</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            On nous parle de tout&nbsp;: des bouffées de chaleur qui nous laissent en nage entre nos draps à 3 h du matin, du brouillard mental qui nous fait chercher nos lunettes alors qu'on les a sur le nez.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Mais personne ne s'assoit avec vous, un verre de pinot à la main, pour vous glisser&nbsp;: «&nbsp;Au fait, si tu ne gardes pas les choses actives là en bas, ton clitoris peut littéralement rétrécir.&nbsp;»
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cela porte un nom&nbsp;: l'<strong>atrophie clitoridienne</strong>. Elle fait partie du syndrome génito-urinaire de la ménopause (SGUM), un trouble qui touche jusqu'à 50&nbsp;% des femmes ménopausées, selon la North American Menopause Society.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«&nbsp;La grande déconnexion&nbsp;»</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Pour beaucoup des femmes que nous avons interrogées, le problème n'était pas seulement la sécheresse. C'était l'<strong>engourdissement</strong>. Une testeuse a raconté avoir ressorti le vieux vibromasseur de ses 30 ans&nbsp;: «&nbsp;Au lieu de faire du bien, c'était juste… irritant. Ou alors je ne sentais rien. Comme essayer de chatouiller une corne sous le pied.&nbsp;»
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les médecins l'expliquent&nbsp;: le vibromasseur classique agit par friction et par à-coups. Quand les tissus s'amincissent à cause de la chute des œstrogènes, la vibration directe peut au contraire <em>désensibiliser encore plus les terminaisons nerveuses</em>, d'où cette sensation d'«&nbsp;engourdissement&nbsp;».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">«&nbsp;Arrêtez de vibrer. Passez à la succion.&nbsp;»</p>
            <p className="text-gray-700">Les spécialistes du plancher pelvien</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Les gynécologues spécialistes de la ménopause l'expliquent&nbsp;: «&nbsp;Quand les œstrogènes chutent, l'afflux sanguin vers la zone pelvienne diminue. Les tissus s'amincissent, perdent en élasticité et en sensibilité. On parle du principe du tout ou rien&nbsp;: sans un afflux de sang régulier, impossible de garder ces tissus en bonne santé.&nbsp;»
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Et voici le Lem de Hello Nancy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C'est là qu'entre en scène ce petit appareil jaune. Le Lem n'est pas présenté comme un sextoy, mais comme un appareil de bien-être. Et après nos recherches, on comprend pourquoi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contrairement au vibromasseur classique, qui repose sur la friction (de quoi irriter des tissus déjà fragilisés par la ménopause), le Lem mise sur la <strong>technologie à air pulsé</strong>. Imaginez la différence entre du papier de verre passé sur la peau et un massage tout en douceur par succion.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">La science&nbsp;: pourquoi l'air pulsé fonctionne</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Le vibromasseur classique&nbsp;:</p>
              <p className="text-red-700 text-sm">Il agit par friction en surface, ce qui peut irriter des tissus sensibles et amincis, et provoquer engourdissement ou microlésions.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ La technologie à air pulsé&nbsp;:</p>
              <p className="text-green-700 text-sm">Elle crée de douces ondes de succion sans contact direct. Elle attire dans les tissus un sang riche en oxygène, pour préserver leur santé et raviver les sensations.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Concrètement&nbsp;: le Lem forme un léger joint autour du clitoris et le stimule par ondes de pression d'air, imitant la sensation du sexe oral, mais sans relâche et toujours à la même intensité. Aucun frottement, donc aucune irritation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mais toute la magie tient à la physique&nbsp;: cette douce succion crée un effet de vide qui attire en profondeur un sang riche en oxygène jusque dans les tissus. De quoi réveiller des terminaisons nerveuses endormies depuis des années.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              «&nbsp;On a l'impression que ça aspire l'orgasme vers l'extérieur… et que les vagues de plaisir durent bien plus longtemps.&nbsp;»
            </p>
            <p className="font-semibold text-gray-700">Alisha, testeuse de la première heure (avis client vérifié)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre comparatif&nbsp;: où se situe le Lem</h2>
          <p className="text-center text-gray-600 mb-8">Nous avons comparé le Lem aux solutions classiques pour la santé des tissus à la ménopause.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Critère</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Le Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibromasseur classique</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Crème aux œstrogènes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Adapté aux tissus sensibles</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Oui</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Risque d'irritation</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Résultats lents</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Stimule l'afflux sanguin</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Jusqu'en profondeur</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ En surface seulement</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Progressivement</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Sans friction ni irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sans contact</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Provoque des frottements</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Oui</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Plaisir immédiat</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Instantané</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variable</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Aucun plaisir</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Design discret</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ On dirait un citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Sans équivoque</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Oui</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Recommandé par les médecins</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Pour l'afflux sanguin</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Parfois</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Oui</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Prix</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (une seule fois)</td>
                  <td className="border border-gray-300 p-4 text-center">50 à 150 €</td>
                  <td className="border border-gray-300 p-4 text-center">30 à 50 €/mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Un design pensé pour en finir avec la gêne</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une chose nous a frappées pendant les tests&nbsp;: la discrétion du Lem est <em>voulue</em>. Jaune vif, il tient dans la paume de la main et ressemble vraiment à un citron décoratif.
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Le «&nbsp;test de la table de chevet&nbsp;»</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="Le Lem posé discrètement sur une table de chevet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Nous avons toutes ce tiroir. Le <em>tiroir de la honte</em>. Celui où l'on planque, sous de vieilles chaussettes, ces appareils en plastique phalliques et peu ragoûtants.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              L'une de nos testeuses nous a raconté&nbsp;: «&nbsp;J'avais oublié mon Lem sur le plan de la salle de bains le jour où ma belle-mère est passée. Elle l'a pris dans la main et m'a dit&nbsp;: “Oh, c'est un de ces nouveaux appareils soniques pour le visage&nbsp;? Comme c'est doux&nbsp;!”&nbsp;»
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Il passe le test de la table de chevet haut la main. Il a tout d'un appareil de soin haut de gamme, rien d'un sextoy. Parce que c'est précisément ce qu'il est.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Attention aux contrefaçons bon marché</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Après la publication de notre premier test, des lectrices nous ont demandé pourquoi ne pas se rabattre sur la version à 20 € qu'on trouve sur Amazon. Voici la réponse des médecins.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              «&nbsp;Les jouets bas de gamme sont faits de matériaux poreux, en gel ou en TPE&nbsp;», prévient-elle. «&nbsp;Des bactéries microscopiques se logent dans les pores&nbsp;: un vrai danger pour les femmes ménopausées, déjà sujettes aux infections urinaires.&nbsp;»
            </p>
            <p className="text-red-900 font-bold mt-3">
              Le Lem de Hello Nancy est en silicone 100&nbsp;% de qualité médicale, non poreux. Ne jouez pas avec votre santé pour économiser 20 €.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Discret comme un murmure</h3>
                <p className="text-gray-600 text-sm">
                  Un moteur ultra-silencieux pour une discrétion totale
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Étanche (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Parfait pour le bain ou la douche
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silicone de qualité médicale</h3>
                <p className="text-gray-600 text-sm">
                  Sans danger pour le corps, non poreux, facile à nettoyer
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Charge magnétique</h3>
                <p className="text-gray-600 text-sm">
                  120 minutes d'autonomie par charge
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">La galerie produit</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Le déballage&nbsp;: la première impression compte</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Le déballage du Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                La première chose qui a marqué nos testeuses&nbsp;? L'emballage est <em>élégant</em>. Pas de couleurs criardes, pas d'images gênantes. Une boîte d'un blanc épuré, rehaussée de discrètes touches dorées, qu'on confondrait sans peine avec un soin de luxe.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Ce que contient la boîte&nbsp;:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Le Lem (jaune vif, tient dans la paume)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Un câble de charge USB magnétique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Une pochette de rangement en velours tout doux (idéale en voyage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Un «&nbsp;guide du plaisir solo&nbsp;» rempli de conseils d'utilisation et de bien-être</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Un guide de prise en main, avec instructions illustrées</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                «&nbsp;En ouvrant la boîte, j'ai vraiment été surprise par la qualité <strong>haut de gamme</strong> de l'ensemble. On était loin du sextoy&nbsp;: on aurait dit un vrai investissement bien-être.&nbsp;» Testeuse, 54 ans
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Parlons anatomie&nbsp;: pourquoi la stimulation clitoridienne compte</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="/anatomy_FR-FR.png"
              alt="Schéma en coupe de l'anatomie du clitoris"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">La science du plaisir</h3>
                <p className="text-gray-600 text-sm">Ce que chaque femme devrait savoir sur son corps</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Voilà ce qu'on n'apprend pas en cours de SVT&nbsp;: le clitoris compte environ <strong>8 000 terminaisons nerveuses</strong>, plus que toute autre partie du corps humain, masculin ou féminin. À titre de comparaison, le pénis en compte environ 4 000.
              </p>
              <p>
                Mais voici le hic&nbsp;: <strong>75&nbsp;% des femmes n'atteignent pas l'orgasme par la seule pénétration</strong>, selon une étude parue dans le Journal of Sex & Marital Therapy. Le clitoris, voilà la clé.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Ce qui se passe à la ménopause&nbsp;:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="/bloodflow_FR-FR.png"
                    alt="Comparaison de l'afflux sanguin avant et après la ménopause"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Le problème&nbsp;:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Le taux d'œstrogènes chute de 90&nbsp;%</li>
                      <li>• L'afflux sanguin vers la zone pelvienne diminue</li>
                      <li>• Le tissu clitoridien peut rétrécir de 20 à 30&nbsp;%</li>
                      <li>• La sensibilité nerveuse baisse</li>
                      <li>• La lubrification naturelle se raréfie</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ La solution&nbsp;:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Une stimulation régulière entretient l'afflux sanguin</li>
                      <li>• Elle garde les circuits nerveux actifs</li>
                      <li>• Elle prévient l'atrophie des tissus</li>
                      <li>• Elle préserve la sensibilité</li>
                      <li>• Elle favorise la lubrification naturelle</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Les gynécologues le disent sans détour&nbsp;: «&nbsp;Voyez ça comme de la gym pour votre plancher pelvien. Si vous ne faites pas travailler ces muscles et que l'afflux sanguin se tarit, ils s'atrophient. C'est exactement la même chose pour le tissu clitoridien.&nbsp;»
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 En résumé&nbsp;:</p>
                <p className="text-gray-700">
                  La stimulation clitoridienne régulière, ce n'est pas qu'une histoire de plaisir (même si c'est un agréable bonus). C'est aussi entretenir la santé des tissus, préserver la fonction nerveuse et éviter les dégâts irréversibles que laisse le manque d'attention. Bref, de la <em>prévention</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">«&nbsp;Et mon partenaire dans tout ça&nbsp;?&nbsp;» Nous avons aussi posé la question</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Le «&nbsp;miracle des 3 minutes&nbsp;» (et pourquoi les partenaires adorent)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soyons honnêtes&nbsp;: pour beaucoup de femmes de plus de 50 ans, il faut parfois plus de 20 minutes (et pas mal de concentration) pour approcher de l'orgasme. Avec le Lem&nbsp;? <strong className="text-[#FF1493]">Trois minutes.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>La crainte qui revient le plus souvent&nbsp;:</strong> «&nbsp;Est-ce que mon partenaire va se sentir remplacé&nbsp;?&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolument pas.</strong> Le Lem est minuscule. De nombreux couples l'utilisent <em>pendant</em> les rapports. Il joue le rôle de «&nbsp;tremplin&nbsp;»&nbsp;: il vous assure d'être pleinement excitée et naturellement lubrifiée, et soulage votre partenaire de toute pression de «&nbsp;performance&nbsp;».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Une testeuse nous a confié&nbsp;: «&nbsp;Notre chambre est passée d'un lieu d'angoisse à un véritable terrain de jeu.&nbsp;»
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'une des questions qui revenaient le plus souvent au fil de nos recherches&nbsp;: <em>«&nbsp;Est-ce que mon partenaire va se sentir menacé&nbsp;?&nbsp;»</em>
              </p>
              <p>
                Voici ce que nous avons constaté&nbsp;: <strong>le Lem ne remplace rien, il enrichit.</strong> De nombreux couples interrogés nous ont raconté qu'inviter le Lem dans leur intimité avait en réalité <em>renforcé</em> leur complicité.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  «&nbsp;Mon mari était curieux, pas menacé. Aujourd'hui, c'est lui qui l'utilise sur moi pendant les préliminaires. Ça lui retire toute la pression de la “performance”, et moi, j'ai exactement ce dont j'ai besoin. On y gagne tous les deux.&nbsp;»
                </p>
                <p className="font-semibold text-gray-700">Valeria, 55 ans, mariée depuis 28 ans</p>
              </div>
              <p>
                Grâce à sa taille compacte, il se glisse facilement dans les ébats sans jamais gêner. Et comme il reste en place tout seul, mains libres, les deux partenaires peuvent se concentrer l'un sur l'autre.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Comment les couples utilisent le Lem&nbsp;:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pendant les préliminaires</p>
                    <p className="text-sm text-gray-600">Le partenaire le maintient en place au fil des baisers et des caresses</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pendant les rapports</p>
                    <p className="text-sm text-gray-600">Bien placé, pour une stimulation à la fois clitoridienne et pénétrative</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">En solo, sous le regard du partenaire</p>
                    <p className="text-sm text-gray-600">De quoi renforcer la complicité et l'aider à comprendre ce qui vous fait du bien</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">«&nbsp;Entretien&nbsp;» entre deux fois</p>
                    <p className="text-sm text-gray-600">En solo, il garde les tissus en bonne santé quand les rapports à deux se font rares</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Le bon réflexe&nbsp;:</strong> tout est dans le dialogue. Présentez-le comme un outil de bien-être qui profite à <em>vous deux</em>, en allégeant la pression et en décuplant le plaisir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Toutes les raisons d'essayer, aucune de s'inquiéter</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Nous avons passé au crible les garanties de Hello Nancy. Voici ce qu'elles veulent vraiment dire.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Satisfaite ou remboursée sous 30 jours</h3>
                <p className="text-sm text-gray-700 text-center">
                  Pas convaincue&nbsp;? Vous êtes <strong>intégralement remboursée</strong>, sans même avoir à renvoyer l'appareil. La marque vous fait confiance&nbsp;: difficile d'être plus sûr de son produit.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  En clair&nbsp;: aucun risque financier. Essayez-le un mois.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garantie de 12 mois</h3>
                <p className="text-sm text-gray-700 text-center">
                  Le moindre souci avec l'appareil pendant la première année&nbsp;? La marque le remplace. Gratuitement. Sans poser de questions.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  En clair&nbsp;: ce n'est pas un gadget jetable. C'est fait pour durer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Une assistance à vie</h3>
                <p className="text-sm text-gray-700 text-center">
                  Une question sur l'utilisation&nbsp;? Un doute sur le nettoyage&nbsp;? Le service client répond en moins de 24 heures.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  En clair&nbsp;: vous n'achetez pas un produit, vous rejoignez une communauté.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">La vraie question&nbsp;: qu'avez-vous à perdre&nbsp;?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Nous avons passé en revue la science. Nous vous avons montré les avis. Nous avons décrypté les garanties. À ce stade, le seul vrai risque, c'est de <em>ne pas</em> l'essayer.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Faisons le calcul&nbsp;:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Si vous l'essayez&nbsp;:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Vous pourriez redécouvrir un plaisir que vous croyiez perdu</li>
                      <li>✓ Vous pourriez préserver la santé des tissus et prévenir l'atrophie</li>
                      <li>✓ Vous pourriez mieux dormir (l'orgasme libère de l'ocytocine)</li>
                      <li>✓ Au pire&nbsp;: vous récupérez vos 77,95 €</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Si vous laissez passer&nbsp;:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• L'atrophie des tissus se poursuit</li>
                      <li>• La sensibilité nerveuse continue de baisser</li>
                      <li>• Le bien-être sexuel reste un combat</li>
                      <li>• Vous vous demanderez toujours «&nbsp;et si&nbsp;?&nbsp;»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pourquoi nous faisons confiance à Hello Nancy</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Nous ne recommandons pas un produit à la légère. Voici pourquoi Hello Nancy a passé nos exigences éditoriales.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Primé</h3>
              <p className="text-sm text-gray-600">Prix 2025 de la technologie bien-être féminin, décerné par l'Institut international du bien-être</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Avis vérifiés</h3>
              <p className="text-sm text-gray-600">4,7★ de moyenne sur 14 907 acheteuses vérifiées (aucun faux avis)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Plus d'1M vendus</h3>
              <p className="text-sm text-gray-600">Plus de 1 000 000 d'exemplaires écoulés dans le monde depuis son lancement en 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Qualité médicale</h3>
              <p className="text-sm text-gray-600">Silicone de qualité médicale, soumis à des tests de sécurité rigoureux</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Ils en ont parlé&nbsp;:</h3>
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
            Ce qu'en disent les acheteuses vérifiées
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 sur 5 (14 907 avis vérifiés)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«&nbsp;Mieux que la crème aux œstrogènes&nbsp;»</p>
                <p className="text-gray-700 italic">
                  «&nbsp;Je ne l'ai pas acheté pour m'amuser, mais parce que mon médecin m'avait dit qu'il me fallait relancer l'afflux sanguin. Eh bien&nbsp;: waouh. Le relâchement m'aide à dormir d'une traite, sans me réveiller en sueur. C'est ma nouvelle dose de vitamines.&nbsp;»
                </p>
                <p className="font-semibold text-gray-900">Sarah J., 58 ans</p>
                <p className="text-xs text-gray-500">✓ Achat vérifié</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«&nbsp;Il a réveillé mon corps&nbsp;»</p>
                <p className="text-gray-700 italic">
                  «&nbsp;J'avais déjà essayé le Lelo Sona, mais c'était trop fort pour moi. Le Lem est assez doux pour ma sensibilité, et assez puissant pour vraiment faire effet. 10/10.&nbsp;»
                </p>
                <p className="font-semibold text-gray-900">Carly, acheteuse vérifiée</p>
                <p className="text-xs text-gray-500">✓ Achat vérifié</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«&nbsp;Je suis accro&nbsp;»</p>
                <p className="text-gray-700 italic">
                  «&nbsp;Je suis accro. Le Lem aspire et tire d'une façon complètement folle. Au moment de jouir, on a l'impression qu'il aspire l'orgasme et fait durer les vagues de plaisir bien plus longtemps. Trooop boooon&nbsp;!&nbsp;»
                </p>
                <p className="font-semibold text-gray-900">Alisha, testeuse de la première heure</p>
                <p className="text-xs text-gray-500">✓ Achat vérifié</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«&nbsp;Ça change tout&nbsp;»</p>
                <p className="text-gray-700 italic">
                  «&nbsp;Moi qui tiens à la discrétion pour les produits intimes, je ne pouvais pas mieux tomber. La succion ne ressemble à rien de ce que j'avais essayé jusqu'ici.&nbsp;»
                </p>
                <p className="font-semibold text-gray-900">Maxine, acheteuse vérifiée</p>
                <p className="text-xs text-gray-500">✓ Achat vérifié</p>
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
              Notre verdict&nbsp;: il vaut l'investissement
            </h2>
            <p className="text-center text-xl text-gray-600">
              Après des tests et des recherches approfondis, notre rédaction recommande chaudement le Lem aux femmes confrontées aux changements tissulaires de la ménopause.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">61 € D'ÉCONOMIE</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFFRE LECTRICES, DURÉE LIMITÉE ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">L'offre expire dans&nbsp;:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Lem, le stimulateur clitoridien de Hello Nancy</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">61 € d'économie (-44&nbsp;%)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">À peine 0,21 €/jour</strong> sur un an d'utilisation
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Moins que votre café du matin. Et il vous suivra des années.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 NOTRE ASTUCE&nbsp;: saisissez le code <span className="font-bold text-[#FF1493]">TIFFANY</span> ou <span className="font-bold text-[#FF1493]">ISABELLA</span> au paiement pour une petite surprise en plus&nbsp;!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Le Lem, stimulateur clitoridien (jaune vif)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Le guide du plaisir solo et le mode d'emploi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Le câble de charge magnétique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">La pochette de voyage en velours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">La livraison gratuite partout dans le monde</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">Satisfaite ou remboursée sous 30 jours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">La garantie de 12 mois</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Je commande le mien - 77,95 € (61 € d'économie)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Sans aucun risque
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Satisfaite ou remboursée sous 30 jours. S'il ne vous convient pas, vous êtes intégralement remboursée, <strong>sans même avoir à le renvoyer</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Emballage discret</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Expédié sous 24 h</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Paiement sécurisé</span>
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
            Le Lem est-il fait pour vous&nbsp;?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Des milliers de femmes de plus de 50 ans disent oui. Voyez si vous vous reconnaissez dans l'un de ces points&nbsp;:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Le Lem est fait pour vous si&nbsp;:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous composez avec la sécheresse vaginale ou des rapports douloureux</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous ressentez moins de sensations ou peinez à atteindre l'orgasme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous faites face à une atrophie clitoridienne ou à un amincissement des tissus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous trouvez le vibromasseur classique trop fort ou irritant</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous voulez préserver la santé de vos tissus en avançant en âge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous cherchez un appareil de bien-être discret (rien d'un sextoy affiché)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous évitez le traitement hormonal substitutif, ou souhaitez le compléter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous êtes prête à retrouver votre bien-être sexuel et votre confiance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Vous l'adorerez tout particulièrement si&nbsp;:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous préférez le <strong>bien-être fondé sur la science</strong> aux gadgets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous misez sur la <strong>prévention</strong>, pas seulement sur la gestion des symptômes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous en avez assez des produits <strong>inadaptés aux corps qui changent</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous appréciez un <strong>design soigné</strong> qui respecte votre intimité</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous êtes prête à <strong>investir sur vous</strong> (à peine 0,21 €/jour sur un an&nbsp;!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous voulez des <strong>résultats sans effets indésirables</strong> ni ordonnance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous refusez de vous résigner à un «&nbsp;<strong>c'est comme ça, désormais</strong>&nbsp;»</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Si vous avez coché ne serait-ce que 3 de ces cases,</strong> le Lem a été pensé pour vous.
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
                  Oui, c'est moi - je commande
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
            Vos questions, nos réponses
          </h2>
          <p className="text-center text-gray-600 mb-12">Nous avons posé à Hello Nancy les questions que se posaient nos lectrices.</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Est-ce que ça fait mal si je suis sensible ou si j'ai une atrophie&nbsp;?</h3>
                <p className="text-gray-700">
                  Pas du tout. Comme il fonctionne par succion plutôt que par vibration au contact direct, il évite la friction responsable de la douleur. Vous pouvez démarrer au plus bas des 12 réglages, puis monter en douceur. Il est justement conçu pour respecter les tissus délicats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">L'emballage est-il gênant&nbsp;?</h3>
                <p className="text-gray-700">
                  Pas le moins du monde. L'envoi se fait dans un simple carton brun, sans aucun logo. L'adresse de l'expéditeur indique seulement «&nbsp;Care & Bloom Ltd.&nbsp;». Discrétion totale, garantie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Et s'il ne me convient pas&nbsp;?</h3>
                <p className="text-gray-700">
                  Hello Nancy applique une garantie satisfait ou remboursé de 30 jours. S'il ne vous convient pas, la marque vous rembourse une fois, à titre commercial, <strong>sans même avoir à le renvoyer</strong>. Elle vous fait confiance pour trouver ce qui convient à votre corps.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Puis-je l'utiliser sous la douche ou dans le bain&nbsp;?</h3>
                <p className="text-gray-700">
                  Oui&nbsp;! Il est certifié étanche IPX7, c'est-à-dire totalement immergeable. Beaucoup d'utilisatrices trouvent que l'eau chaude favorise la détente et décuple les sensations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fait-il du bruit&nbsp;?</h3>
                <p className="text-gray-700">
                  Discret comme un murmure. Son moteur ultra-silencieux garantit une discrétion totale&nbsp;: vous pouvez l'utiliser sans craindre qu'on vous entende, même dans la pièce d'à côté.
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
              Notre verdict final
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Après des semaines de recherche, des consultations d'experts et des entretiens avec des utilisatrices, notre rédaction est convaincue que le Lem répond à un vrai besoin médical, négligé depuis bien trop longtemps.
              </p>
              <p>
                Il n'est pas question de coquetterie ni de petit plaisir&nbsp;: il s'agit de préserver la santé des tissus, de mieux dormir et de retrouver une part de vous-même que la ménopause tente de vous reprendre.
              </p>
              <p className="text-xl font-bold">
                Si vous ressentez les symptômes du SGUM, si les solutions classiques vous laissent sur votre faim ou si vous voulez simplement préserver votre bien-être sexuel en avançant en âge, le Lem mérite vraiment qu'on s'y attarde.
              </p>
              <p className="text-sm italic">
                Jessica Martinez, rédactrice en chef bien-être
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
                Je commande le Lem - 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Satisfait ou remboursé sous 30 jours ✓ Livraison gratuite ✓ Emballage discret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Transparence sur l'affiliation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider vit grâce à ses lectrices. Lorsque vous achetez via les liens présents sur notre site, nous pouvons toucher une commission d'affiliation, sans que cela change quoi que ce soit au prix pour vous. C'est ce qui nous permet de continuer à proposer des contenus gratuits, fondés sur la recherche. Nous ne recommandons que des produits que notre rédaction a soigneusement examinés et qu'elle juge réellement bénéfiques pour vous. Tous les avis exprimés sont les nôtres et ne sont influencés par aucune contrepartie.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">À propos de nous</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider propose un journalisme de santé et de bien-être fondé sur les faits, pensé pour les femmes d'aujourd'hui.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Rubriques</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Santé</li>
                  <li>Bien-être</li>
                  <li>Sexe & couple</li>
                  <li>Tests produits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">À propos du Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Fiche produit</li>
                  <li>Avis clients</li>
                  <li>Livraison & retours</li>
                  <li>Contact&nbsp;: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Confiance & sécurité</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Matériaux de qualité médicale</li>
                  <li>✓ Expédition discrète</li>
                  <li>✓ Satisfait ou remboursé sous 30 jours</li>
                  <li>✓ Garantie 12 mois</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Tous droits réservés. Notre contenu éditorial est indépendant et impartial.</p>
              <p className="mt-2">Produit présenté&nbsp;: le Lem de Hello Nancy • Lauréat du Prix 2025 de la technologie bien-être féminin</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
