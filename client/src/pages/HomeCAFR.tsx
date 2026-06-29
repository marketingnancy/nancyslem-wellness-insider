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

  useEffect(() => { document.documentElement.lang = "fr-CA"; }, []);

  // Sticky CTA bar and timer on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
      
      // Show timer after 50% scroll
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !showTimer) {
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
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    { src: "/PDP.jpg", alt: "Appareil de bien-être Lem de Nancy" },
    { src: "/PDP-1.jpg", alt: "Le Lem dans une mise en scène du quotidien" },
    { src: "/PDP-2.jpg", alt: "Gros plan sur le design du Lem" },
    { src: "/PDP-3.jpg", alt: "Détails du produit Lem" },
    { src: "/PDP-4_CA-FR.png", alt: "Le Lem en cours d'utilisation" },
    { src: "/PDP-5.jpg", alt: "Emballage et accessoires du Lem" },
    { src: "/PDP-6_CA-FR.png", alt: "Le Lem dans une ambiance du quotidien" },
    { src: "/PDP-7_CA-FR.png", alt: "Caractéristiques du produit Lem" },
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
              <p className="text-xs text-gray-500 font-medium">La santé des femmes en qui vous avez confiance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 avis) • 1 M+ vendus</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">125,00 $</span>
                  <span className="text-sm line-through text-white/70">222,00 $</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">ÉCONOMISEZ 97 $</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Se termine dans {formatTime(timeLeft)}</span>
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
                  Acheter maintenant
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SANTÉ ET BIEN-ÊTRE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">REVUE DE PRODUIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Plus d'un million d'orgasmes plus tard : pourquoi les femmes de plus de 50 ans délaissent les vibrateurs pour ce « citron »
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Nous avons cherché à comprendre pourquoi des milliers de femmes de plus de 50 ans délaissent les vibrateurs classiques au profit de cet appareil de « physiothérapie » qui a tout d'un citron. Voici ce que nous avons découvert.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Par Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Rédactrice en chef, section bien-être</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Dernière mise à jour : {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('fr-CA', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
              <span className="font-bold text-gray-900 mr-1">Note de la rédaction :</span>
              Cet article contient des liens d'affiliation. Nous touchons parfois une commission lorsque vous achetez par leur entremise, sans aucun frais supplémentaire pour vous. Nous ne recommandons que des produits que nous avons étudiés et mis à l'essai avec soin.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="Appareil de bien-être Lem de Nancy sur une table de chevet"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Le Lem de Nancy trône discrètement sur une table de chevet : la plupart des gens le prennent pour un citron décoratif. Photo : Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> lectrices lisent cet article en ce moment</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Emballage discret</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Livraison gratuite partout dans le monde</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantie de satisfaction 30 jours</p>
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
            La première fois que notre équipe a entendu parler d'un « appareil de bien-être en forme de citron » qui faisait fureur dans les groupes de femmes ménopausées, nous l'avouons, nous étions sceptiques. Mais après avoir rencontré des dizaines de femmes, consulté des gynécologues et, oui, l'avoir essayé nous-mêmes, nous comprenons l'engouement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ce n'est pas qu'une tendance bien-être de plus. Il répond à un véritable problème médical qui touche des millions de femmes, mais dont on parle rarement : <strong>l'atrophie clitoridienne</strong> et la perte de bien-être sexuel à la ménopause.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Le sujet dont personne ne nous avait prévenues</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            On nous parle de tout : des bouffées de chaleur qui nous laissent en nage entre nos draps à 3 h du matin, du brouillard mental qui nous fait chercher nos lunettes alors qu'on les a sur le nez.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Mais personne ne nous assoit devant un verre de vin pour nous glisser à l'oreille : « Au fait, si tu ne gardes pas les choses actives là, en bas, ton clitoris pourrait carrément rapetisser. »
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ça porte un nom : l'<strong>atrophie clitoridienne</strong>. Elle fait partie du syndrome génito-urinaire de la ménopause (SGUM), un trouble qui touche jusqu'à 50 % des femmes ménopausées, selon la North American Menopause Society.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">« La grande déconnexion »</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Pour bien des femmes que nous avons rencontrées, ce n'était pas qu'une histoire de sécheresse. C'était l'<strong>engourdissement</strong>. Une testeuse nous a raconté avoir ressorti le vieux vibrateur de ses 30 ans : « Au lieu de faire du bien, c'était juste… irritant. Ou engourdi. Comme essayer de chatouiller une callosité. »
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les spécialistes l'expliquent ainsi : les vibrateurs classiques agissent par friction et par impact. Quand les tissus s'amincissent à cause d'un faible taux d'œstrogènes, la vibration directe peut en fait <em>désensibiliser encore plus les nerfs</em>, d'où cette sensation d'« engourdissement ».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">« Arrêtez de vibrer. Commencez à aspirer. »</p>
            <p className="text-gray-700">— Des spécialistes du plancher pelvien</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Les gynécologues spécialisées en ménopause l'expliquent : « Quand les œstrogènes chutent, l'afflux sanguin vers la région pelvienne diminue. Les tissus s'amincissent, perdent de leur élasticité, et les sensations s'émoussent. En médecine, on parle du principe “on l'utilise ou on le perd” : il faut un afflux sanguin constant pour garder les tissus en santé. »
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Voici le Lem de Nancy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C'est là qu'entre en scène ce petit appareil jaune. Le Lem de Nancy n'est pas présenté comme un sextoy : on le positionne comme un appareil de bien-être. Et après nos recherches, on comprend pourquoi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contrairement aux vibrateurs classiques, qui misent sur la friction (au risque d'irriter des tissus déjà fragilisés par la ménopause), le Lem fait appel à ce qu'on appelle la <strong>technologie à air pulsé</strong>. Imaginez la différence entre frotter du papier sablé sur votre peau et savourer un doux massage par aspiration.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">La science : pourquoi l'air pulsé fonctionne</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vibrateurs classiques :</p>
              <p className="text-red-700 text-sm">Ils misent sur la friction en surface, qui peut irriter des tissus sensibles et amincis. Risque d'engourdissement ou de microdéchirures.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Technologie à air pulsé :</p>
              <p className="text-green-700 text-sm">Elle crée de douces ondes d'aspiration, sans contact direct. Elle attire vers les tissus un sang riche en oxygène, ce qui favorise leur santé et la sensation.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Voici comment ça marche : le Lem épouse délicatement le contour du clitoris et le stimule par de petites ondes de pression d'air, imitant la sensation du sexe oral, mais en continu et sans jamais se fatiguer. Comme il n'y a aucun frottement, il n'y a aucune irritation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mais la vraie magie tient à la physique : cette douce aspiration crée un effet de vide qui attire littéralement vers les tissus un sang profond, riche en oxygène. De quoi réveiller des nerfs endormis depuis des années.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              « On dirait qu'il aspire l'orgasme… il fait durer les vagues de plaisir bien plus longtemps. »
            </p>
            <p className="font-semibold text-gray-700">— Alisha, testeuse (d'après des avis clientes vérifiés)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre comparatif</h2>
          <p className="text-center text-gray-600 mb-8">Nous avons comparé le Lem aux solutions classiques pour la santé des tissus à la ménopause.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Critère</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Lem de Nancy</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibrateur classique</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Crème aux œstrogènes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Fonctionne pour les tissus sensibles</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Oui</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Peut irriter</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Résultats lents</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Stimule l'afflux sanguin</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tissus profonds</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ En surface seulement</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Graduel</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Pas de friction/irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zéro contact</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Crée de la friction</td>
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
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ressemble à un citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Évident</td>
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
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">125,00 $ (achat unique)</td>
                  <td className="border border-gray-300 p-4 text-center">50 à 150 $</td>
                  <td className="border border-gray-300 p-4 text-center">30 à 50 $/mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Un design pensé « sans gêne »</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une chose nous a frappées pendant les tests : le design est <em>volontairement</em> discret. Jaune vif, il tient dans le creux de la main et ressemble vraiment à un citron décoratif.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Le « test de la table de chevet »</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="Appareil Lem posé discrètement sur une table de chevet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              On a toutes ce tiroir. Le <em>tiroir de la honte</em>. Celui où on cache, sous de vieilles paires de bas, ces appareils de plastique phalliques et peu ragoûtants.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Une de nos testeuses nous a confié : « J'avais oublié mon Lem sur le comptoir de la salle de bain quand ma belle-mère est passée. Elle l'a pris dans ses mains et m'a dit : “Oh, c'est un de ces nouveaux nettoyants soniques pour le visage ? Comme c'est doux !” »
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Il réussit le test de la table de chevet haut la main. On dirait un appareil de soins haut de gamme, pas un sextoy. Et c'est exactement ce qu'il est.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Méfiez-vous des imitations à bas prix</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Après la parution de notre premier article, des lectrices nous ont demandé pourquoi ne pas plutôt acheter la version à 20 $ sur Amazon. Voici ce qu'en disent les spécialistes.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              « Les jouets bon marché sont faits de matières poreuses, en gelée ou en TPE, prévient-elle. Des bactéries microscopiques se logent dans les pores, ce qui représente un risque énorme pour les femmes ménopausées, déjà sujettes aux infections urinaires. »
            </p>
            <p className="text-red-900 font-bold mt-3">
              Le Lem de Hello Nancy est en silicone de qualité médicale 100 % non poreux. Ne mettez pas votre santé en jeu pour économiser 20 $.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Silencieux</h3>
                <p className="text-gray-600 text-sm">
                  Un moteur ultrasilencieux pour une discrétion totale
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Étanche (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Parfait sous la douche ou dans le bain
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silicone de qualité médicale</h3>
                <p className="text-gray-600 text-sm">
                  Sans danger pour le corps, non poreux et facile à nettoyer
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
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galerie du produit</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Le déballage : la première impression compte</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="Déballage du Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Une des premières choses que nos testeuses ont remarquées ? L'emballage est <em>élégant</em>. Pas de couleurs criardes, aucune image gênante. La boîte, d'un blanc épuré rehaussé de subtils accents dorés, pourrait facilement passer pour un produit de soin de luxe.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Ce que contient la boîte :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>L'appareil Lem (jaune vif, format de poche)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Un câble de charge USB magnétique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Une pochette de rangement en velours tout doux (idéale pour voyager)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Un « guide du plaisir en solo » avec des conseils d'utilisation et de bien-être</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Un guide de démarrage rapide avec des instructions illustrées</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                « En ouvrant la boîte, j'ai été sincèrement étonnée par la qualité <strong>haut de gamme</strong> de l'ensemble. Ça ne faisait pas “sextoy”, ça faisait investissement bien-être. » — Testeuse, 54 ans
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Parlons anatomie : pourquoi la stimulation du clitoris compte</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/anatomy_CA-FR.png" 
              alt="Diagramme en coupe de l'anatomie du clitoris"
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
                Voici une chose qu'on n'apprend pas dans les cours de santé : le clitoris compte environ <strong>8 000 terminaisons nerveuses</strong>, plus que toute autre partie du corps humain, chez l'homme comme chez la femme. À titre de comparaison, le pénis en compte environ 4 000.
              </p>
              <p>
                Mais voici le hic : <strong>75 % des femmes n'arrivent pas à atteindre l'orgasme par la seule pénétration</strong>, selon une étude parue dans le Journal of Sex & Marital Therapy. Le clitoris, voilà la clé.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Ce qui se passe à la ménopause :</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/bloodflow_CA-FR.png" 
                    alt="Comparaison de l'afflux sanguin avant et après la ménopause"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Le problème :</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Le taux d'œstrogènes chute de 90 %</li>
                      <li>• L'afflux sanguin vers la zone pelvienne diminue</li>
                      <li>• Le tissu clitoridien peut rétrécir de 20 à 30 %</li>
                      <li>• La sensibilité nerveuse s'amenuise</li>
                      <li>• La lubrification naturelle diminue</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ La solution :</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Une stimulation régulière entretient l'afflux sanguin</li>
                      <li>• Elle garde les voies nerveuses actives</li>
                      <li>• Elle prévient l'atrophie des tissus</li>
                      <li>• Elle préserve la sensibilité</li>
                      <li>• Elle favorise la lubrification naturelle</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Les gynécologues le disent sans détour : « Voyez ça comme de l'exercice pour votre plancher pelvien. Si vous ne sollicitez pas ces muscles et que vous n'entretenez pas l'afflux sanguin, ils s'atrophient. C'est exactement pareil pour le tissu clitoridien. »
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 En résumé :</p>
                <p className="text-gray-700">
                  La stimulation régulière du clitoris n'est pas qu'une question de plaisir (même si c'est un bel à-côté). Elle sert à garder les tissus en santé, à préserver la fonction nerveuse et à prévenir des changements irréversibles si on laisse les choses aller. C'est de la <em>santé préventive</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">« Et mon partenaire dans tout ça ? » On a aussi posé la question</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Le « miracle de 3 minutes » (et pourquoi les partenaires l'adorent)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soyons honnêtes : pour bien des femmes de plus de 50 ans, il peut falloir plus de 20 minutes (et pas mal de gymnastique mentale) avant de s'approcher de l'orgasme. Avec le Lem ? <strong className="text-[#FF1493]">Trois minutes.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>La grande inquiétude des femmes :</strong> « Mon partenaire va-t-il se sentir remplacé ? »
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolument pas.</strong> Le Lem est tout petit. Beaucoup de couples l'utilisent <em>pendant</em> les rapports. Il fait office de « pont » : il s'assure que vous êtes pleinement excitée et naturellement lubrifiée, ce qui retire à votre partenaire toute pression de « performance ».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Une testeuse nous a confié : « Notre chambre est passée d'un lieu d'angoisse à un véritable terrain de jeu. »
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Une des questions qui revenaient le plus souvent au fil de nos recherches : <em>« Mon partenaire va-t-il se sentir menacé ? »</em>
              </p>
              <p>
                Voici ce que nous avons constaté : <strong>le Lem ne remplace personne, il bonifie l'expérience.</strong> Beaucoup des couples que nous avons rencontrés nous ont dit qu'intégrer le Lem à leur intimité avait en fait <em>resserré</em> leur complicité.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  « Mon mari était curieux, pas menacé. Maintenant, c'est lui qui s'en sert sur moi pendant les préliminaires. Ça lui enlève la pression de “performer”, et moi, j'obtiens exactement ce dont j'ai besoin. Tout le monde y gagne. »
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55 ans, mariée depuis 28 ans</p>
              </div>
              <p>
                Comme il est compact, il s'intègre facilement aux ébats du couple sans être encombrant. Et puisqu'il tient en place tout seul une fois bien placé, les deux partenaires peuvent rester pleinement à l'écoute l'un de l'autre.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Comment les couples utilisent le Lem :</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pendant les préliminaires</p>
                    <p className="text-sm text-gray-600">Le partenaire le tient en place tout en embrassant et en caressant</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pendant les rapports</p>
                    <p className="text-sm text-gray-600">Placé pour une stimulation clitoridienne et une pénétration en même temps</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">En solo, sous le regard du partenaire</p>
                    <p className="text-sm text-gray-600">Renforce l'intimité et aide le partenaire à découvrir ce qui vous plaît</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">« Entretien » entre deux fois</p>
                    <p className="text-sm text-gray-600">En solo, il garde les tissus en santé quand les rapports se font plus rares</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Petit conseil :</strong> tout est dans la communication. Présentez-le comme un outil de bien-être qui profite à <em>vous deux</em>, en allégeant la pression et en décuplant le plaisir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Toutes les raisons d'essayer, aucune de s'inquiéter</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Nous nous sommes penchées sur les garanties de Hello Nancy. Voici ce qu'elles veulent vraiment dire.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garantie « plaisir » de 30 jours</h3>
                <p className="text-sm text-gray-700 text-center">
                  Pas satisfaite ? On vous rembourse <strong>au complet</strong>, sans même exiger de retour. On vous fait confiance pour jouer franc jeu. C'est dire à quel point on croit au produit.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Autrement dit : aucun risque financier. Essayez-le pendant un mois.
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
                  Si l'appareil flanche durant la première année, on le remplace. Gratuitement. Sans poser de questions.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Autrement dit : ce n'est pas un gadget jetable. C'est fait pour durer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Soutien à vie</h3>
                <p className="text-sm text-gray-700 text-center">
                  Des questions sur l'utilisation ? Une hésitation sur le nettoyage ? Leur service à la clientèle répond en moins de 24 heures.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Autrement dit : vous n'achetez pas un produit, vous entrez dans une communauté.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">La vraie question : qu'avez-vous à perdre ?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Nous avons fait le tour de la science. Nous vous avons montré les avis. Nous avons décortiqué les garanties. À ce stade, le seul risque, c'est de <em>ne pas</em> l'essayer.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Faisons le calcul :</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Si vous l'essayez :</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Vous pourriez redécouvrir un plaisir que vous croyiez perdu</li>
                      <li>✓ Vous pourriez améliorer la santé des tissus et prévenir l'atrophie</li>
                      <li>✓ Vous pourriez mieux dormir (l'orgasme libère de l'ocytocine)</li>
                      <li>✓ Au pire : vous récupérez vos 125 $</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Si vous ne faites rien :</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• L'atrophie des tissus se poursuit</li>
                      <li>• La sensibilité nerveuse continue de s'amenuiser</li>
                      <li>• Le bien-être sexuel reste un combat</li>
                      <li>• Vous resterez avec le « et si ? » en tête</li>
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
            Nous ne recommandons pas un produit à la légère. Voici pourquoi Hello Nancy a satisfait à nos critères éditoriaux.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Primé</h3>
              <p className="text-sm text-gray-600">Lauréat du prix 2025 de la technologie du bien-être féminin, décerné par l'Institut international du bien-être</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Avis vérifiés</h3>
              <p className="text-sm text-gray-600">Moyenne de 4,7★ sur 14 907 acheteuses vérifiées (aucun faux avis)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Plus d'un million de vendus</h3>
              <p className="text-sm text-gray-600">Plus de 1 000 000 d'unités vendues dans le monde depuis le lancement en 2023</p>
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
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Vu dans :</h3>
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
                <p className="font-bold text-gray-900">« Mieux que la crème aux œstrogènes »</p>
                <p className="text-gray-700 italic">
                  « Je ne l'ai pas acheté pour le “plaisir”, je l'ai acheté parce que mon médecin m'avait dit qu'il me fallait stimuler l'afflux sanguin. Mais wow. Cette détente m'aide à dormir d'une traite, sans me réveiller en sueur. C'est ma nouvelle vitamine. »
                </p>
                <p className="font-semibold text-gray-900">— Sarah J., 58 ans</p>
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
                <p className="font-bold text-gray-900">« Il a réveillé mon corps »</p>
                <p className="text-gray-700 italic">
                  « J'avais essayé le Lelo Sona avant, mais c'était trop intense pour moi. Le Lem est assez doux pour ma sensibilité, et assez puissant pour vraiment faire effet. 10 sur 10. »
                </p>
                <p className="font-semibold text-gray-900">— Carly, acheteuse vérifiée</p>
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
                <p className="font-bold text-gray-900">« J'suis complètement accro »</p>
                <p className="text-gray-700 italic">
                  « J'suis complètement accro. Le Lem aspire et tire d'une façon incroyable. Au moment de jouir, on dirait qu'il aspire l'orgasme et fait durer les vagues de plaisir bien plus longtemps. Tellement bon ! »
                </p>
                <p className="font-semibold text-gray-900">— Alisha, testeuse</p>
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
                <p className="font-bold text-gray-900">« Ça change tout »</p>
                <p className="text-gray-700 italic">
                  « Moi qui tiens à la discrétion quand il s'agit de produits intimes, je ne pouvais pas mieux tomber. La fonction d'aspiration ne ressemble à rien de ce que j'avais essayé jusqu'ici. »
                </p>
                <p className="font-semibold text-gray-900">— Maxine, acheteuse vérifiée</p>
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
              Notre verdict : un investissement qui en vaut la peine
            </h2>
            <p className="text-center text-xl text-gray-600">
              Au terme de tests et de recherches approfondis, notre équipe recommande vivement le Lem de Nancy aux femmes qui vivent des changements tissulaires liés à la ménopause.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">ÉCONOMISEZ 97 $</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFFRE LECTRICES À DURÉE LIMITÉE ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">L'offre prend fin dans :</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Stimulateur clitoridien Lem de Nancy</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">125,00 $</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">222,00 $</span>
                      <span className="text-sm text-green-600 font-bold">Économisez 97 $ (44 % de rabais)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Aucuns frais de douane ni taxes cachés</p>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">À peine 0,34 $/jour</strong> sur un an d'utilisation
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Moins cher que votre café du matin. Et ça dure des années.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 CONSEIL AUX LECTRICES : entrez le code <span className="font-bold text-[#FF1493]">TIFFANY</span> ou <span className="font-bold text-[#FF1493]">ISABELLA</span> à la caisse pour une belle surprise !</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Le stimulateur clitoridien Lem (jaune vif)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Le guide du plaisir en solo et le mode d'emploi</span>
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
                    <span className="text-gray-700 font-bold">La garantie « plaisir » de 30 jours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">La garantie de 12 mois</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Acheter maintenant à 125,00 $ (économisez 97 $)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Aucun risque pour vous
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Garantie de remboursement de 30 jours. S'il ne vous plaît pas, on vous rembourse au complet : <strong>aucun retour nécessaire</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Emballage discret</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Expédié en 24 h</span>
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
            Le Lem est-il fait pour vous ?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Des milliers de femmes de plus de 50 ans répondent « oui ». Voyez si vous vous reconnaissez dans ces situations :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Le Lem est pour vous si vous :</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Composez avec la sécheresse vaginale ou des rapports douloureux</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ressentez moins de sensations ou avez du mal à atteindre l'orgasme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Faites face à une atrophie clitoridienne ou à un amincissement des tissus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Trouvez les vibrateurs classiques trop intenses ou irritants</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Souhaitez garder vos tissus en santé en vieillissant</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cherchez un appareil de bien-être discret (pas un « jouet » trop évident)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Évitez l'hormonothérapie substitutive ou souhaitez la compléter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Êtes prête à retrouver votre bien-être sexuel et votre confiance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Vous aimerez particulièrement le Lem si :</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous préférez le <strong>bien-être fondé sur la science</strong> aux gadgets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous voulez de la <strong>prévention</strong>, pas seulement gérer les symptômes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous en avez assez des produits qui <strong>ne conviennent pas aux corps plus mûrs</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous appréciez un <strong>design réfléchi</strong> qui respecte votre intimité</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous êtes prête à <strong>investir sur vous-même</strong> (à peine 0,34 $/jour sur un an !)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous voulez des <strong>résultats sans effets secondaires</strong> ni ordonnance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous en avez fini d'accepter que <strong>« c'est juste de même maintenant »</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Si ne serait-ce que 3 de ces énoncés vous ressemblent,</strong> le Lem a été conçu spécialement pour vous.
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
                  Oui, c'est tout à fait moi : je l'achète
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
          <p className="text-center text-gray-600 mb-12">Nous avons posé à Hello Nancy les questions que nos lectrices se posaient.</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Est-ce que ça fait mal si je suis sensible ou si j'ai une atrophie ?</h3>
                <p className="text-gray-700">
                  Pas du tout. Comme il fonctionne par aspiration d'air plutôt que par vibration au contact direct, il évite la friction qui cause la douleur. Vous pouvez commencer au plus bas des 12 réglages, puis monter en douceur. Il est conçu tout exprès pour rester doux sur les tissus délicats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">L'emballage est-il gênant ?</h3>
                <p className="text-gray-700">
                  Pas le moins du monde. La livraison se fait dans de simples boîtes brunes, sans aucun logo. L'adresse de retour indique seulement « Care & Bloom Ltd. ». Discrétion totale garantie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Et s'il ne me plaît pas ?</h3>
                <p className="text-gray-700">
                  Hello Nancy offre une garantie de satisfaction de 30 jours. S'il ne vous plaît pas, l'entreprise vous accorde, une fois, un remboursement de courtoisie : <strong>aucun retour nécessaire</strong>. On vous fait confiance pour trouver ce qui convient à votre corps.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Puis-je l'utiliser sous la douche ou dans le bain ?</h3>
                <p className="text-gray-700">
                  Oui ! Il est certifié étanche IPX7, donc entièrement submersible. Beaucoup d'utilisatrices trouvent que l'eau chaude accentue la détente et les sensations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Est-il bruyant ?</h3>
                <p className="text-gray-700">
                  Discret comme un murmure. Son moteur ultrasilencieux garantit une discrétion totale : vous pouvez l'utiliser sans craindre qu'on l'entende, même dans la pièce d'à côté.
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
              Notre avis final
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Au terme de plusieurs semaines de recherche, de consultations auprès de spécialistes et d'entretiens avec des utilisatrices, notre équipe estime que le Lem de Nancy répond à un véritable besoin médical trop longtemps laissé de côté.
              </p>
              <p>
                Il n'est pas question de coquetterie ni de petit plaisir, mais de garder les tissus en santé, de mieux dormir et de récupérer une part de vous-même que la ménopause cherche à vous prendre.
              </p>
              <p className="text-xl font-bold">
                Si vous avez les symptômes du SGUM, si les solutions classiques vous laissent sur votre faim ou si vous voulez simplement préserver votre bien-être sexuel en vieillissant, le Lem mérite vraiment qu'on s'y attarde.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, rédactrice en chef, section bien-être
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
                Acheter le Lem de Nancy à 125,00 $
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Garantie de 30 jours ✓ Livraison gratuite ✓ Emballage discret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Divulgation des liens d'affiliation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider est financé par ses lectrices. Lorsque vous achetez par l'entremise des liens présents sur notre site, nous touchons parfois une commission d'affiliation, sans aucun frais supplémentaire pour vous. C'est ce qui nous permet de continuer à offrir du contenu gratuit et fondé sur la recherche. Nous ne recommandons que des produits que notre équipe a examinés avec soin et qui, selon nous, profiteront à nos lectrices. Toutes les opinions exprimées sont les nôtres et ne sont influencées par aucune rémunération.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">À propos de nous</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider propose aux femmes d'aujourd'hui un journalisme de santé et de bien-être fondé sur des données probantes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Catégories</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Santé</li>
                  <li>Bien-être</li>
                  <li>Sexe et relations</li>
                  <li>Avis produits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">À propos du Lem de Nancy</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Détails du produit</li>
                  <li>Avis des clientes</li>
                  <li>Livraison et retours</li>
                  <li>Contact : care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Confiance et sécurité</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Matériaux de qualité médicale</li>
                  <li>✓ Expédition discrète</li>
                  <li>✓ Garantie de 30 jours</li>
                  <li>✓ Garantie de 12 mois</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Tous droits réservés. Le contenu éditorial est indépendant et objectif.</p>
              <p className="mt-2">Produit présenté : le Lem de Nancy, par Hello Nancy • Lauréat du prix 2025 de la technologie du bien-être féminin</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
