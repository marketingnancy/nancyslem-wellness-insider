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
    { src: "/PDP.jpg", alt: "L'appareil de bien-être Lem de Nancy" },
    { src: "/PDP-1.jpg", alt: "Le Lem dans un cadre de vie" },
    { src: "/PDP-2.jpg", alt: "Gros plan sur le design du Lem" },
    { src: "/PDP-3.jpg", alt: "Détails du produit Lem" },
    { src: "/PDP-4_FR-FR.png", alt: "Démonstration d'utilisation du Lem" },
    { src: "/PDP-5.jpg", alt: "Emballage et accessoires du Lem" },
    { src: "/PDP-6_FR-FR.png", alt: "Image lifestyle du Lem" },
    { src: "/PDP-7_FR-FR.png", alt: "Caractéristiques du produit Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Santé Féminine de Confiance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7 (14 907 avis) • 1M+ Vendus</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">73,95 €</span>
                  <span className="text-sm line-through text-white/70">128,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">ÉCONOMISEZ 55,00 €</span>
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
                  Acheter Maintenant
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
            <span className="bg-gray-100 px-3 py-1 rounded-full">REVUE PRODUIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            1M+ Orgasmes Plus Tard : Pourquoi les Femmes de Plus de 50 Ans Abandonnent les Vibrateurs pour ce "Citron"
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Nous avons enquêté sur les raisons pour lesquelles des milliers de femmes de plus de 50 ans délaissent les vibrateurs traditionnels pour cet appareil de « physiothérapie » qui ressemble à un citron. Voici ce que nous avons découvert.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Par Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Rédactrice Bien-être Senior</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Dernière mise à jour : {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>Lecture de 8 min</span>
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
              <span className="font-bold text-gray-900 mr-1">Note de l'Éditeur :</span>
              Cet article contient des liens d'affiliation. Nous pouvons percevoir une commission si vous achetez via ces liens, sans frais supplémentaires pour vous. Nous ne recommandons que des produits que nous avons minutieusement étudiés et testés.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="L'appareil de bien-être Lem de Nancy sur une table de chevet"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Le Nancy's Lem se pose discrètement sur une table de chevet, la plupart des gens pensent que c'est un citron décoratif. Photo : Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> lecteurs consultent actuellement cet article</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Emballage discret</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Livraison Gratuite Mondiale</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantie Satisfaction 30 Jours</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantie de 12 Mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Nous En Parlons</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorsque notre équipe éditoriale a entendu parler pour la première fois d'un « appareil de bien-être en forme de citron » qui prenait d'assaut la communauté de la ménopause, nous l'admettons, nous étions sceptiques. Mais après avoir interviewé des dizaines de femmes, consulté des gynécologues et, oui, l'avoir testé nous-mêmes, nous comprenons l'engouement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ce n'est pas juste une autre tendance bien-être. Cela répond à un véritable problème médical qui touche des millions de femmes mais qui est rarement discuté : l'<strong>atrophie clitoridienne</strong> et la perte de bien-être sexuel pendant la ménopause.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La Discussion Dont Personne Ne Nous A Prévenues</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous entendons tout sur les bouffées de chaleur qui nous laissent en sueur dans nos draps en soie à 3 heures du matin. Nous entendons parler du brouillard cérébral qui nous fait chercher nos lunettes alors qu'elles sont sur notre nez.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Mais personne ne vous assoit avec un verre de Pinot pour vous chuchoter : « Hé, au fait, si tu ne gardes pas les choses actives en bas, ton clitoris pourrait carrément rétrécir. »
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cela s'appelle l'<strong>Atrophie Clitoridienne</strong>, et cela fait partie du Syndrome Génito-Urinaire de la Ménopause (SGUM), une condition affectant jusqu'à 50 % des femmes ménopausées, selon la North American Menopause Society.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">« La Grande Déconnexion »</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Pour beaucoup de femmes que nous avons interrogées, ce n'était pas seulement la sécheresse. C'était l'<strong>engourdissement</strong>. Une testeuse a décrit avoir essayé d'utiliser son vieux vibrateur de ses 30 ans : « Au lieu de faire du bien, c'était juste… irritant. Ou engourdi. Comme essayer de chatouiller un cal. »
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les experts médicaux expliquent que les vibrateurs traditionnels fonctionnent par friction et impact. Lorsque les tissus s'amincissent en raison d'un faible taux d'œstrogènes, la vibration directe peut en fait <em>désensibiliser davantage les nerfs</em>, conduisant à cette sensation d'« engourdissement ».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">« Arrêtez de vibrer. Commencez à aspirer. »</p>
            <p className="text-gray-700">— Spécialistes du Plancher Pelvien</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Les gynécologues spécialisés dans les soins de la ménopause expliquent : « Lorsque les œstrogènes chutent, le flux sanguin vers la région pelvienne diminue. Cela conduit à un amincissement des tissus, une perte d'élasticité et une sensation réduite. La communauté médicale appelle cela le principe "l'utiliser ou le perdre" : vous avez besoin d'un flux sanguin constant pour maintenir la santé des tissus. »
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entrez : Le Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C'est là qu'intervient ce petit appareil jaune. Le Nancy's Lem n'est pas commercialisé comme un sextoy, mais comme un appareil de bien-être. Et après nos recherches, nous comprenons pourquoi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contrairement aux vibrateurs traditionnels qui reposent sur la friction (ce qui peut irriter les tissus ménopausiques amincis), le Lem utilise ce qu'on appelle la <strong>Technologie à Pulsations d'Air</strong>. Pensez-y comme la différence entre frotter du papier de verre sur votre peau et utiliser un massage doux par aspiration.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">La Science : Pourquoi la Technologie à Pulsations d'Air Fonctionne</h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vibrateurs Traditionnels :</p>
              <p className="text-red-700 text-sm">Reposent sur la friction de surface qui peut irriter les tissus sensibles et amincis. Peuvent causer des engourdissements ou des micro-déchirures.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Technologie à Pulsations d'Air :</p>
              <p className="text-green-700 text-sm">Crée des ondes d'aspiration douces sans contact direct. Attire le sang riche en oxygène dans les tissus, favorisant la santé et la sensation.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Voici comment cela fonctionne : Le Lem crée un joint doux autour du clitoris et utilise des ondes de pression d'air pour le stimuler, imitant la sensation du sexe oral, mais de manière constante et inlassable. Comme il n'y a pas de frottement, il n'y a aucune irritation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mais la vraie magie réside dans la physique : cette douce aspiration crée un effet de vide, attirant physiquement le sang profond et riche en oxygène dans les tissus. Cela réveille des nerfs qui étaient dormants depuis des années.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              « On a l'impression que ça tire l'orgasme vers l'extérieur… ça fait durer les pulsations beaucoup plus longtemps. »
            </p>
            <p className="font-semibold text-gray-700">— Alisha, Testeuse Bêta (avis client vérifié)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Comment Il Se Compare : Notre Comparatif</h2>
          <p className="text-center text-gray-600 mb-8">Nous avons comparé le Lem aux solutions traditionnelles pour la santé des tissus ménopausiques</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Fonctionnalité</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibrateur Traditionnel</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Crème aux Œstrogènes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Convient aux Tissus Sensibles</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Oui</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Peut irriter</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Résultats lents</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Augmente le Flux Sanguin</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tissus profonds</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Surface seulement</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Graduel</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Pas de Friction/Irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zéro contact</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Cause de la friction</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Oui</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Plaisir Immédiat</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Instantané</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variable</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Pas de plaisir</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Design Discret</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ressemble à un citron</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Évident</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Oui</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Recommandé par les Médecins</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Pour le flux sanguin</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Parfois</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Oui</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Prix</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">73,95 € (unique)</td>
                  <td className="border border-gray-300 p-4 text-center">50-150 €</td>
                  <td className="border border-gray-300 p-4 text-center">30-50 €/mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La Philosophie de Design "Anti-Honte"</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une chose qui a frappé notre équipe éditoriale lors des tests : le design est <em>intentionnellement</em> discret. Il est jaune vif, tient dans la paume de la main et ressemble vraiment à un citron décoratif.
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Le « test de la table de chevet »</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="L'appareil Lem posé discrètement sur une table de chevet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Nous avons toutes ce tiroir. Le <em>tiroir de la honte</em>. Où nous cachons les appareils en plastique phalliques et disgracieux sous de vieilles chaussettes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              L'une de nos testeuses a partagé cette histoire : « J'ai laissé mon Lem sur le comptoir de ma salle de bain par accident quand ma belle-mère est venue. Elle l'a ramassé et a dit : "Oh, c'est un de ces nouveaux gommages soniques pour le visage ? C'est si doux !" »
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Il passe le test de la table de chevet. Il ressemble à une technologie de soins personnels haut de gamme, pas à un jouet sexuel. Parce que c'est exactement ce que c'est.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Avertissement sur les contrefaçons bon marché</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Après la publication de notre premier avis, des lectrices ont demandé pourquoi elles ne devraient pas acheter la version à 20 € sur Amazon. Voici ce que disent les experts médicaux.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              « Les jouets bon marché utilisent des matériaux poreux en gelée/TPE », a-t-elle averti. « Les bactéries microscopiques sont piégées dans les pores, ce qui est un risque énorme pour les femmes ménopausées qui sont déjà sujettes aux infections urinaires. »
            </p>
            <p className="text-red-900 font-bold mt-3">
              Le Hello Nancy Lem est 100 % silicone de qualité médicale, non poreux. Ne risquez pas votre santé pour économiser 20 €.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Silencieux comme un murmure</h3>
                <p className="text-gray-600 text-sm">
                  Moteur ultra-silencieux pour une discrétion totale
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
                  Sûr pour le corps, non poreux, facile à nettoyer
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Chargement magnétique</h3>
                <p className="text-gray-600 text-sm">
                  120 minutes par charge
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galerie de produits</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">L'Expérience de Déballage : Les Premières Impressions Comptent</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="L'expérience de déballage du Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                L'une des premières choses que nos testeuses ont remarquées ? L'emballage est <em>élégant</em>. Pas de couleurs criardes, pas d'images embarrassantes. La boîte est d'un blanc minimaliste avec de subtils accents dorés, on pourrait facilement la confondre avec un produit de soin de luxe.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Ce qu'il y a dans la boîte :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>L'appareil Lem (jaune vif, taille paume)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Câble de chargement USB magnétique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Pochette de rangement en velours doux (parfaite pour voyager)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>« Manuel d'Amour de Soi » avec conseils d'utilisation et de bien-être</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Guide de démarrage rapide avec instructions illustrées</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                « Quand j'ai ouvert la boîte, j'ai été vraiment surprise par la qualité <strong>haut de gamme</strong> de l'ensemble. Ça ne ressemblait pas à un "sextoy" : ça ressemblait à un investissement bien-être. » — Utilisatrice Test, 54 ans
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Parlons Anatomie : Pourquoi la Stimulation Clitoridienne Compte</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/anatomy_FR-FR.png" 
              alt="Schéma en coupe de l'anatomie clitoridienne"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">La Science du Plaisir</h3>
                <p className="text-gray-600 text-sm">Ce que chaque femme devrait savoir sur son corps</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Voici quelque chose qu'on n'enseigne pas en cours de santé : le clitoris possède environ <strong>8 000 terminaisons nerveuses</strong>, plus que toute autre partie du corps humain, masculin ou féminin. Pour le contexte, le pénis en a environ 4 000.
              </p>
              <p>
                Mais voici le hic : <strong>75 % des femmes ne peuvent pas atteindre l'orgasme par la seule pénétration</strong>, selon une recherche publiée dans le Journal of Sex & Marital Therapy. Le clitoris est la clé.
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Ce Qui Se Passe Pendant la Ménopause :</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/bloodflow_FR-FR.png" 
                    alt="Comparaison du flux sanguin avant et après la ménopause"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Le Problème :</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Les niveaux d'œstrogènes chutent de 90 %</li>
                      <li>• Le flux sanguin vers la zone pelvienne diminue</li>
                      <li>• Le tissu clitoridien peut rétrécir de 20 à 30 %</li>
                      <li>• La sensibilité nerveuse diminue</li>
                      <li>• La lubrification naturelle diminue</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ La Solution :</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• La stimulation régulière maintient le flux sanguin</li>
                      <li>• Garde les voies nerveuses actives</li>
                      <li>• Prévient l'atrophie tissulaire</li>
                      <li>• Maintient la sensibilité</li>
                      <li>• Favorise la lubrification naturelle</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Les gynécologues le disent sans détour : « Pensez-y comme de l'exercice pour votre plancher pelvien. Si vous n'utilisez pas ces muscles et ne maintenez pas le flux sanguin, ils s'atrophient. Le même principe s'applique au tissu clitoridien. »
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Le Résultat :</p>
                <p className="text-gray-700">
                  La stimulation clitoridienne régulière n'est pas seulement une question de plaisir (bien que ce soit un bonus agréable). Il s'agit de maintenir la santé des tissus, de préserver la fonction nerveuse et de prévenir les changements irréversibles qui viennent avec la négligence. C'est de la <em>santé préventive</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">"Mais Qu'en Est-il de Mon Partenaire ?" Nous Avons Aussi Posé la Question</h2>
          
          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Le "Miracle de 3 Minutes" (Et Pourquoi les Partenaires l'Adorent)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soyons honnêtes : pour beaucoup de femmes de plus de 50 ans, il peut falloir plus de 20 minutes (et beaucoup de gymnastique mentale) pour approcher de l'orgasme. Avec le Lem ? <strong className="text-[#FF1493]">Trois minutes.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>La plus grande objection des femmes :</strong> « Mon partenaire se sentira-t-il remplacé ? »
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolument pas.</strong> Le Lem est minuscule. De nombreux couples l'utilisent <em>pendant</em> les rapports. Il agit comme un "pont", assurant que vous êtes pleinement excitée et naturellement lubrifiée, enlevant la pression de "performance" sur votre partenaire.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Une testeuse nous a dit : « Ça a transformé notre chambre d'un lieu d'anxiété en un terrain de jeu. »
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'une des questions les plus courantes que nous avons reçues lors de nos recherches : <em>« Mon partenaire se sentira-t-il menacé par ça ? »</em>
              </p>
              <p>
                Voici ce que nous avons trouvé : <strong>Le Lem n'est pas un remplacement : c'est une amélioration.</strong> De nombreux couples que nous avons interviewés ont rapporté que l'intégration du Lem dans leur intimité a en fait <em>amélioré</em> leur connexion.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  « Mon mari était curieux, pas menacé. Maintenant, il l'utilise sur moi pendant les préliminaires. Ça lui enlève la pression de "performer" et j'obtiens exactement ce dont j'ai besoin. Tout le monde y gagne. »
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55 ans, Mariée depuis 28 ans</p>
              </div>
              <p>
                La taille compacte signifie qu'il est facile à intégrer pendant les activités en couple sans être encombrant. Et comme il est mains libres une fois positionné, les deux partenaires peuvent se concentrer l'un sur l'autre.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Façons dont les Couples Utilisent Lem :</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pendant les Préliminaires</p>
                    <p className="text-sm text-gray-600">Le partenaire le maintient en place pendant les baisers et les caresses</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pendant les Rapports</p>
                    <p className="text-sm text-gray-600">Positionné pour une stimulation clitoridienne et pénétrative simultanée</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo avec le partenaire qui regarde</p>
                    <p className="text-sm text-gray-600">Renforce l'intimité et aide les partenaires à apprendre ce qui fonctionne</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">"Entretien" entre les sessions</p>
                    <p className="text-sm text-gray-600">L'utilisation en solo maintient les tissus en bonne santé lorsque les rapports sexuels avec partenaire ne sont pas fréquents</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Conseil Pro :</strong> La communication est la clé. Présentez-le comme un outil de bien-être qui profite à <em>vous deux</em> en réduisant la pression et en augmentant le plaisir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Toutes les Raisons d'Essayer, Aucune Raison de S'inquiéter</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Nous avons enquêté sur les garanties de Hello Nancy. Voici ce qu'elles signifient vraiment.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garantie "Plaisir" de 30 Jours</h3>
                <p className="text-sm text-gray-700 text-center">
                  Pas satisfaite ? Obtenez un <strong>remboursement complet</strong>, aucun retour requis. Ils vous font confiance pour être honnête. C'est dire à quel point ils sont confiants.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Traduction : Zéro risque financier. Essayez-le pendant un mois.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garantie de 12 Mois</h3>
                <p className="text-sm text-gray-700 text-center">
                  Si quelque chose ne va pas avec l'appareil la première année, ils le remplacent. Gratuitement. Sans poser de questions.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Traduction : Ce n'est pas un gadget jetable. C'est conçu pour durer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Support à Vie</h3>
                <p className="text-sm text-gray-700 text-center">
                  Des questions sur l'utilisation ? Des inquiétudes sur le nettoyage ? Leur équipe de service client répond en moins de 24 heures.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Traduction : Vous n'achetez pas un produit. Vous rejoignez une communauté.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">La Vraie Question : Qu'avez-vous à Perdre ?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Nous avons couvert la science. Nous vous avons montré les avis. Nous avons expliqué les garanties. À ce stade, le seul risque est de <em>ne pas</em> l'essayer.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Faisons le Calcul :</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Si Vous L'essayez :</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Pourriez redécouvrir un plaisir que vous pensiez disparu</li>
                      <li>✓ Pourrait améliorer la santé des tissus et prévenir l'atrophie</li>
                      <li>✓ Pourriez mieux dormir (les orgasmes libèrent de l'ocytocine)</li>
                      <li>✓ Pire cas : Récupérez vos 73,95 €</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Si Vous Ne Le Faites Pas :</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• L'atrophie des tissus continue</li>
                      <li>• La sensibilité nerveuse continue de diminuer</li>
                      <li>• Le bien-être sexuel reste une lutte</li>
                      <li>• Vous vous demanderez toujours "et si ?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pourquoi Hello Nancy a Notre Confiance</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Nous ne recommandons pas les produits à la légère. Voici pourquoi Hello Nancy a passé nos standards éditoriaux.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Primé</h3>
              <p className="text-sm text-gray-600">Prix de la Technologie Bien-être Féminin 2025 de l'Institut International du Bien-être</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Avis Vérifiés</h3>
              <p className="text-sm text-gray-600">Moyenne de 4,7★ sur 14 907 acheteurs vérifiés (pas de faux avis)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1M+ Vendus</h3>
              <p className="text-sm text-gray-600">Plus de 1 000 000 unités vendues dans le monde depuis le lancement en 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Qualité Médicale</h3>
              <p className="text-sm text-gray-600">Silicone de qualité médicale, tests de sécurité rigoureux</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Vu Dans :</h3>
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
            Ce Que Disent les Acheteurs Vérifiés
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
                <p className="font-bold text-gray-900">"Mieux Que la Crème aux Œstrogènes"</p>
                <p className="text-gray-700 italic">
                  « Je n'ai pas acheté ça pour le "fun", je l'ai acheté parce que mon médecin a dit que j'avais besoin de flux sanguin. Mais wow. La libération m'aide à dormir toute la nuit sans me réveiller en sueur. C'est ma nouvelle vitamine. »
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58 ans</p>
                <p className="text-xs text-gray-500">✓ Achat Vérifié</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"A Réveillé Mon Corps"</p>
                <p className="text-gray-700 italic">
                  « J'avais essayé le Lelo Sona avant mais c'était trop fort pour moi. Le Lem est assez doux pour ma sensibilité mais assez profond pour vraiment fonctionner. 10/10. »
                </p>
                <p className="font-semibold text-gray-900">- Carly, Acheteuse Vérifiée</p>
                <p className="text-xs text-gray-500">✓ Achat Vérifié</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Je suis accro"</p>
                <p className="text-gray-700 italic">
                  « Je suis accro. Le Lem aspire et tire de la manière la plus folle. Quand vous jouissez, on a l'impression qu'il extrait l'orgasme et fait durer les pulsations beaucoup plus longtemps. Tellemeeeent bon ! »
                </p>
                <p className="font-semibold text-gray-900">- Alisha, Testeuse Bêta</p>
                <p className="text-xs text-gray-500">✓ Achat Vérifié</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Change la Donne"</p>
                <p className="text-gray-700 italic">
                  « En tant que personne qui valorise la discrétion dans les produits intimes, il ne pourrait y avoir de choix plus parfait. La fonction d'aspiration ne ressemble à rien de ce que j'ai essayé auparavant. »
                </p>
                <p className="font-semibold text-gray-900">- Maxine, Acheteuse Vérifiée</p>
                <p className="text-xs text-gray-500">✓ Achat Vérifié</p>
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
              Notre Verdict : Vaut l'Investissement
            </h2>
            <p className="text-center text-xl text-gray-600">
              Après des tests et des recherches approfondis, notre équipe éditoriale recommande vivement le Nancy's Lem aux femmes subissant des changements tissulaires liés à la ménopause.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">ÉCONOMISEZ 55 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFFRE LECTEUR À DURÉE LIMITÉE ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">L'offre expire dans :</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Masseur Clitoridien Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">73,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">128,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Économisez 55 € (43% de réduction)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Juste 0,20 €/jour</strong> sur un an d'utilisation
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Moins que votre café quotidien. Dure des années.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 CONSEIL LECTEUR : Utilisez le code <span className="font-bold text-[#FF1493]">TIFFANY</span> ou <span className="font-bold text-[#FF1493]">ISABELLA</span> à la caisse pour une surprise supplémentaire !</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Masseur Clitoridien Lem (jaune vif)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Manuel d'amour de soi & guide d'utilisation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Câble de chargement magnétique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Pochette de voyage en velours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Livraison mondiale gratuite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">Garantie "Plaisir" de 30 jours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Garantie de 12 mois</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Acheter Maintenant - 73,95 € (Économisez 55 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garantie sans risque
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Garantie de remboursement de 30 jours. Si vous ne l'aimez pas, obtenez un remboursement complet, <strong>aucun retour nécessaire</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Emballage discret</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Expédié en 24h</span>
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
            Le Lem Est-il Fait Pour Vous ?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Des milliers de femmes de plus de 50 ans disent "oui". Voyez si vous vous reconnaissez dans l'un de ces points :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Le Lem est pour vous si vous :</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Luttez contre la sécheresse vaginale ou les rapports douloureux</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ressentez une sensation réduite ou une difficulté à atteindre l'orgasme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Faites face à une atrophie clitoridienne ou un amincissement des tissus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Trouvez les vibrateurs traditionnels trop durs ou irritants</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Voulez maintenir la santé des tissus en vieillissant</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cherchez un appareil de bien-être discret (pas un "jouet" évident)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Évitez ou complétez un traitement hormonal substitutif</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Êtes prête à récupérer votre bien-être sexuel et votre confiance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Vous aimerez particulièrement le Lem si :</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous privilégiez le <strong>bien-être fondé sur la science</strong> aux gadgets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous voulez des <strong>soins préventifs</strong>, pas juste une gestion des symptômes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous en avez assez des produits qui <strong>ne fonctionnent pas pour les corps matures</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous appréciez un <strong>design réfléchi</strong> qui respecte votre vie privée</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous êtes prête à <strong>investir en vous-même</strong> (juste 0,20 €/jour sur un an !)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous voulez des <strong>résultats sans effets secondaires</strong> ni ordonnances</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Vous avez fini d'accepter que <strong>« c'est juste comme ça maintenant »</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Si vous avez coché ne serait-ce que 3 de ces cases,</strong> le Lem a été conçu spécifiquement pour vous.
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
                  Oui, C'est Moi - Acheter Maintenant
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
            Vos Questions, Nos Réponses
          </h2>
          <p className="text-center text-gray-600 mb-12">Nous avons posé à Hello Nancy les questions que nos lectrices voulaient savoir</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Est-ce que cela fera mal si je suis sensible ou si j'ai une atrophie ?</h3>
                <p className="text-gray-700">
                  Pas du tout. Parce qu'il utilise l'aspiration d'air plutôt que la vibration par contact direct, il évite la friction qui cause la douleur. Vous pouvez commencer par le plus bas des 12 réglages et augmenter doucement. Il est conçu spécifiquement pour être doux sur les tissus délicats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">L'emballage est-il gênant ?</h3>
                <p className="text-gray-700">
                  Zéro pour cent. Ils expédient dans des boîtes brunes simples sans logos. L'adresse de retour indique simplement « Care & Bloom Ltd. » Discrétion totale garantie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Et si je ne l'aime pas ?</h3>
                <p className="text-gray-700">
                  Hello Nancy offre une garantie de satisfaction de 30 jours. Si vous ne l'aimez pas, ils offrent un remboursement de courtoisie unique, <strong>aucun retour nécessaire</strong>. Ils vous font confiance pour trouver ce qui fonctionne pour votre corps.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Puis-je l'utiliser sous la douche ou dans le bain ?</h3>
                <p className="text-gray-700">
                  Oui ! Il est certifié étanche IPX7, ce qui signifie qu'il est entièrement submersible. De nombreuses utilisatrices trouvent que l'eau chaude améliore la relaxation et les sensations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Est-il bruyant ?</h3>
                <p className="text-gray-700">
                  Silencieux comme un murmure. Le moteur ultra-silencieux assure une discrétion totale : vous pouvez l'utiliser sans craindre que quelqu'un l'entende, même dans la pièce voisine.
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
              Notre Verdict Final
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Après des semaines de recherche, de consultations d'experts et d'entretiens avec des utilisatrices, notre équipe éditoriale estime que le Nancy's Lem répond à un véritable besoin médical qui a été négligé trop longtemps.
              </p>
              <p>
                Il ne s'agit pas de vanité ou d'indulgence : il s'agit de maintenir la santé des tissus, d'améliorer la qualité du sommeil et de récupérer une partie de vous-même que la ménopause essaie de vous enlever.
              </p>
              <p className="text-xl font-bold">
                Si vous ressentez les symptômes du SGUM, si vous luttez avec des solutions traditionnelles ou si vous voulez simplement maintenir votre bien-être sexuel en vieillissant, le Lem mérite une considération sérieuse.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, Rédactrice en Chef Bien-être
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
                Acheter Nancy's Lem - 73,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Garantie 30 jours ✓ Livraison gratuite ✓ Emballage discret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Divulgation d'Affiliation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider est soutenu par ses lecteurs. Lorsque vous achetez via des liens sur notre site, nous pouvons gagner une commission d'affiliation sans frais supplémentaires pour vous. Cela nous aide à continuer à fournir du contenu gratuit et fondé sur la recherche. Nous ne recommandons que des produits que notre équipe éditoriale a minutieusement examinés et croit bénéfiques pour nos lecteurs. Toutes les opinions exprimées sont les nôtres et ne sont pas influencées par une compensation.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">À Propos de Nous</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider fournit un journalisme de santé et de bien-être fondé sur des preuves pour les femmes modernes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Catégories</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Santé</li>
                  <li>Bien-être</li>
                  <li>Sexe & Relations</li>
                  <li>Avis Produits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">À Propos de Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Détails du Produit</li>
                  <li>Avis Clients</li>
                  <li>Expédition & Retours</li>
                  <li>Contact : care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Confiance & Sécurité</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Matériaux de qualité médicale</li>
                  <li>✓ Expédition discrète</li>
                  <li>✓ Garantie 30 jours</li>
                  <li>✓ Garantie 12 mois</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Tous droits réservés. Le contenu éditorial est indépendant et objectif.</p>
              <p className="mt-2">Produit présenté : Nancy's Lem par Hello Nancy • Gagnant du Prix de la Technologie Bien-être Féminin 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
