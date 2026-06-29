import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeGR() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "el"; }, []);

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
    { src: "/PDP.jpg", alt: "Η συσκευή ευεξίας Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "Το Lem σε καθημερινό περιβάλλον" },
    { src: "/PDP-2.jpg", alt: "Κοντινό πλάνο του σχεδιασμού του Lem" },
    { src: "/PDP-3.jpg", alt: "Λεπτομέρειες του Lem" },
    { src: "/PDP-4.jpg", alt: "Το Lem σε χρήση" },
    { src: "/PDP-5.jpg", alt: "Συσκευασία και αξεσουάρ του Lem" },
    { src: "/PDP-6.jpg", alt: "Το Lem σε εικόνα της καθημερινότητας" },
    { src: "/PDP-7.jpg", alt: "Χαρακτηριστικά του Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Αξιόπιστη γυναικεία υγεία</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14.907 κριτικές) • 1.000.000+ πωλήσεις</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">ΚΕΡΔΙΖΕΙΣ 61 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Λήγει σε {formatTime(timeLeft)}</span>
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
                  Αγόρασέ το τώρα
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">ΥΓΕΙΑ &amp; ΕΥΕΞΙΑ</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">ΚΡΙΤΙΚΗ ΠΡΟΪΟΝΤΟΣ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Πάνω από ένα εκατομμύριο οργασμοί μετά: γιατί οι γυναίκες άνω των 50 παρατούν τον δονητή για αυτό το «λεμόνι»
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Ερευνήσαμε γιατί χιλιάδες γυναίκες άνω των 50 παρατούν τον κλασικό δονητή για αυτή τη συσκευή «φυσικοθεραπείας» που μοιάζει με λεμόνι. Να τι ανακαλύψαμε.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Από την Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Αρχισυντάκτρια ευεξίας</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Τελευταία ενημέρωση: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('el-GR', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 λεπτά ανάγνωση</span>
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
              <span className="font-bold text-gray-900 mr-1">Σημείωση της σύνταξης:</span>
              Αυτό το άρθρο περιέχει συνδέσμους συνεργατών. Μπορεί να κερδίσουμε προμήθεια αν αγοράσεις μέσω αυτών, χωρίς κανένα επιπλέον κόστος για σένα. Προτείνουμε μόνο προϊόντα που έχουμε ερευνήσει και δοκιμάσει σχολαστικά.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Η συσκευή ευεξίας Nancy's Lem πάνω στο κομοδίνο"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Το Nancy's Lem στέκεται διακριτικά πάνω στο κομοδίνο – σχεδόν όλοι νομίζουν πως είναι ένα διακοσμητικό λεμόνι. Φωτογραφία: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('el-GR')}</strong> αναγνώστριες διαβάζουν αυτό το άρθρο αυτή τη στιγμή</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Διακριτική συσκευασία</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Δωρεάν αποστολή παγκοσμίως</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Εγγύηση ικανοποίησης 30 ημερών</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Εγγύηση 12 μηνών</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Γιατί μιλάμε γι' αυτό</h2>
          <p className="text-gray-700 leading-relaxed">
            Όταν η ομάδα σύνταξής μας άκουσε για πρώτη φορά για μια «συσκευή ευεξίας σε σχήμα λεμονιού» που σαρώνει στην κοινότητα της εμμηνόπαυσης, το παραδεχόμαστε: ήμασταν δύσπιστες. Όμως, αφού πήραμε συνέντευξη από δεκάδες γυναίκες, συμβουλευτήκαμε γυναικολόγους και, ναι, το δοκιμάσαμε κι εμείς οι ίδιες, καταλαβαίνουμε τον ντόρο.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Δεν είναι άλλη μια μόδα της ευεξίας. Απαντά σε ένα πραγματικό ιατρικό ζήτημα που αφορά εκατομμύρια γυναίκες, αλλά για το οποίο σχεδόν ποτέ δεν συζητάμε: την <strong>ατροφία της κλειτορίδας</strong> και την απώλεια της σεξουαλικής ευεξίας κατά την εμμηνόπαυση.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Η κουβέντα που κανείς δεν μας προειδοποίησε ότι θα κάνουμε</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Μας τα λένε όλα για τις εξάψεις που μας αφήνουν μούσκεμα στον ιδρώτα στις τρεις τα ξημερώματα. Μας μιλάνε για τη θολούρα στο μυαλό που μας κάνει να ψάχνουμε τα γυαλιά μας ενώ τα φοράμε.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Όμως κανείς δεν σε βάζει να καθίσεις μ' ένα ποτήρι κρασί στο χέρι και να σου ψιθυρίσει: «Άκου, παρεμπιπτόντως, αν δεν κρατήσεις ζωντανή τη ζώνη εκεί κάτω, η κλειτορίδα σου μπορεί να συρρικνωθεί στ' αλήθεια».
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Λέγεται <strong>ατροφία της κλειτορίδας</strong> και αποτελεί μέρος του ουρογεννητικού συνδρόμου της εμμηνόπαυσης (GSM) – μια πάθηση που αφορά έως και το 50% των γυναικών στη μετεμμηνόπαυση, σύμφωνα με τη North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«Η μεγάλη αποσύνδεση»</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Για πολλές από τις γυναίκες που ρωτήσαμε, δεν ήταν μόνο η ξηρότητα. Ήταν το <strong>μούδιασμα</strong>. Μία από αυτές, περιγράφοντάς μας πώς προσπάθησε να χρησιμοποιήσει τον δονητή που είχε από τα τριάντα της, το συνόψισε έτσι: «Αντί για ευχαρίστηση, το μόνο που ένιωθα ήταν… ενόχληση. Ή τίποτα απολύτως. Σαν να προσπαθείς να γαργαλήσεις έναν κάλο».
            </p>
            <p className="text-gray-700 leading-relaxed">
              Οι ειδικοί ιατροί εξηγούν ότι οι κλασικοί δονητές λειτουργούν με τριβή και κρούση. Όταν οι ιστοί λεπταίνουν λόγω της έλλειψης οιστρογόνων, η άμεση δόνηση μπορεί στην πραγματικότητα να <em>απευαισθητοποιήσει ακόμη περισσότερο τα νεύρα</em>, προκαλώντας εκείνη την αίσθηση του «μουδιάσματος».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">«Σταμάτα να δονείς. Ξεκίνα να ρουφάς».</p>
            <p className="text-gray-700">– Ειδικοί στο πυελικό έδαφος</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Οι γυναικολόγοι που ειδικεύονται στην εμμηνόπαυση το εξηγούν έτσι: «Όταν πέφτουν τα οιστρογόνα, η αιμάτωση στην πυελική περιοχή μειώνεται. Αυτό λεπταίνει τους ιστούς, τους στερεί την ελαστικότητα και μειώνει την ευαισθησία. Στην ιατρική το λέμε αρχή του “το χρησιμοποιείς ή το χάνεις” – χρειάζεται σταθερή αιμάτωση για να μένει υγιής ο ιστός».
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Εδώ μπαίνει το Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Εκεί ακριβώς εμφανίζεται αυτή η μικρή κίτρινη συσκευή. Το Nancy's Lem δεν πωλείται ως ερωτικό παιχνίδι – παρουσιάζεται ως συσκευή ευεξίας. Και, μετά την έρευνά μας, καταλαβαίνουμε γιατί.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Σε αντίθεση με τους κλασικούς δονητές, που βασίζονται στην τριβή (η οποία μπορεί να ερεθίσει τον λεπτό ιστό της εμμηνόπαυσης), το Lem χρησιμοποιεί την αποκαλούμενη <strong>τεχνολογία παλμικού αέρα</strong>. Σκέψου το σαν τη διαφορά ανάμεσα στο να τρίβεις γυαλόχαρτο πάνω στο δέρμα σου και στο να κάνεις ένα απαλό μασάζ αναρρόφησης.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Η επιστήμη: γιατί λειτουργεί η τεχνολογία παλμικού αέρα</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Κλασικοί δονητές:</p>
              <p className="text-red-700 text-sm">Βασίζονται στην επιφανειακή τριβή, που μπορεί να ερεθίσει τον ευαίσθητο και λεπτό ιστό. Μπορεί να προκαλέσουν μούδιασμα ή μικρορωγμές.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Τεχνολογία παλμικού αέρα:</p>
              <p className="text-green-700 text-sm">Δημιουργεί απαλά κύματα αναρρόφησης χωρίς άμεση επαφή. Τραβά πλούσιο σε οξυγόνο αίμα στους ιστούς και ενισχύει την υγεία και την ευαισθησία τους.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Να πώς λειτουργεί: το Lem δημιουργεί ένα απαλό σφράγισμα γύρω από την κλειτορίδα και χρησιμοποιεί κύματα πίεσης αέρα για να τη διεγείρει, μιμούμενο την αίσθηση του στοματικού σεξ, αλλά σταθερά κι ακούραστα. Επειδή δεν υπάρχει τρίψιμο, δεν υπάρχει κανένας απολύτως ερεθισμός.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Η πραγματική μαγεία, όμως, βρίσκεται στη φυσική: αυτή η απαλή αναρρόφηση δημιουργεί ένα φαινόμενο κενού που τραβά κυριολεκτικά βαθύ, πλούσιο σε οξυγόνο αίμα στους ιστούς. Ξυπνά νεύρα που κοιμόνταν για χρόνια.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              «Είναι σαν να σου τραβάει τον οργασμό από μέσα… κρατάει το ρίγος πολύ περισσότερη ώρα».
            </p>
            <p className="font-semibold text-gray-700">– Alisha, δοκιμάστρια beta (από επαληθευμένες κριτικές πελατισσών)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Πώς συγκρίνεται: η ανάλυσή μας</h2>
          <p className="text-center text-gray-600 mb-8">Συγκρίναμε το Lem με τις παραδοσιακές λύσεις για την υγεία του ιστού στην εμμηνόπαυση</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Χαρακτηριστικό</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Παραδοσιακός δονητής</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Κρέμα οιστρογόνων</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Κατάλληλο για ευαίσθητο ιστό</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Ναι</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Μπορεί να ερεθίσει</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Αργά αποτελέσματα</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Αυξάνει την αιμάτωση</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Σε βάθος ιστού</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Μόνο επιφανειακά</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Σταδιακά</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Χωρίς τριβή ή ερεθισμό</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Μηδενική επαφή</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Προκαλεί τριβή</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ναι</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Άμεση απόλαυση</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Στη στιγμή</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Μεταβλητή</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Καμία απόλαυση</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Διακριτικός σχεδιασμός</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Μοιάζει με λεμόνι</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Ολοφάνερο</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ναι</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Συνιστάται από γιατρούς</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Για την αιμάτωση</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Κάποιες φορές</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Ναι</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Τιμή</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (εφάπαξ)</td>
                  <td className="border border-gray-300 p-4 text-center">45–135 €</td>
                  <td className="border border-gray-300 p-4 text-center">28–45 € τον μήνα</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Η φιλοσοφία σχεδιασμού «χωρίς ντροπή»</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Κάτι που τράβηξε την προσοχή της ομάδας μας κατά τις δοκιμές: ο σχεδιασμός είναι <em>σκόπιμα</em> διακριτικός. Είναι έντονα κίτρινο, χωράει στην παλάμη του χεριού σου και μοιάζει στ' αλήθεια με διακοσμητικό λεμόνι.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Η «δοκιμή του κομοδίνου»</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Η συσκευή Lem που στέκεται διακριτικά πάνω στο κομοδίνο"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Όλες έχουμε εκείνο το συρτάρι. Το <em>συρτάρι της ντροπής</em>. Εκεί που κρύβουμε τα άσχημα, φαλλικά πλαστικά αντικείμενα κάτω από τις παλιές κάλτσες.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Μία από τις δοκιμάστριές μας μάς είπε αυτή την ιστορία: «Ξέχασα το Lem στον πάγκο του μπάνιου ακριβώς όταν ήρθε η πεθερά μου επίσκεψη. Το πήρε στα χέρια της και λέει: “Α, αυτό είναι κανένα από εκείνα τα καινούργια ηχητικά βουρτσάκια προσώπου; Τι απαλό που είναι!”».
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Περνάει τη δοκιμή του κομοδίνου. Μοιάζει με τεχνολογία αυτοφροντίδας υψηλής ποιότητας, όχι με ερωτικό παιχνίδι. Γιατί ακριβώς αυτό είναι.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Προσοχή στις φθηνές απομιμήσεις</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Αφού δημοσιεύσαμε την πρώτη μας κριτική, πολλές αναγνώστριες μάς ρώτησαν γιατί να μην πάρουν την έκδοση των μερικών ευρώ που κυκλοφορεί στο Amazon. Να τι μας απάντησε μία από τις ειδικούς ιατρούς που συμβουλευτήκαμε.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              «Τα φθηνά παιχνίδια χρησιμοποιούν πορώδη υλικά τύπου ζελέ ή TPE», προειδοποίησε. «Τα μικροσκοπικά βακτήρια παγιδεύονται στους πόρους, κάτι που αποτελεί τεράστιο κίνδυνο για τις γυναίκες στην εμμηνόπαυση, που είναι ήδη επιρρεπείς στις ουρολοιμώξεις».
            </p>
            <p className="text-red-900 font-bold mt-3">
              Το Lem της Hello Nancy είναι 100% μη πορώδης ιατρική σιλικόνη. Μη βάζεις σε κίνδυνο την υγεία σου για να γλιτώσεις λίγα ευρώ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Αθόρυβο</h3>
                <p className="text-gray-600 text-sm">
                  Εξαιρετικά αθόρυβο μοτέρ για απόλυτη διακριτικότητα
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Αδιάβροχο (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Ιδανικό για χρήση στην μπανιέρα ή στο ντους
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Ιατρική σιλικόνη</h3>
                <p className="text-gray-600 text-sm">
                  Ασφαλής για το σώμα, μη πορώδης και εύκολη στον καθαρισμό
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Μαγνητική φόρτιση</h3>
                <p className="text-gray-600 text-sm">
                  120 λεπτά ανά φόρτιση
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Γκαλερί προϊόντος</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Το άνοιγμα της συσκευασίας: η πρώτη εντύπωση μετράει</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Η εμπειρία ανοίγματος της συσκευασίας του Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Ένα από τα πρώτα πράγματα που πρόσεξαν οι δοκιμάστριές μας; Η συσκευασία είναι <em>κομψή</em>. Χωρίς χτυπητά χρώματα, χωρίς ντροπιαστικές εικόνες. Το κουτί είναι μινιμαλιστικό λευκό με διακριτικές χρυσές πινελιές – εύκολα θα μπορούσε να περάσει για προϊόν περιποίησης πολυτελείας.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Τι περιέχει το κουτί:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Τη συσκευή Lem (έντονο κίτρινο, σε μέγεθος παλάμης)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Μαγνητικό καλώδιο φόρτισης USB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Απαλό βελούδινο πουγκί φύλαξης (ιδανικό για ταξίδια)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>«Εγχειρίδιο αυταγάπης» με συμβουλές χρήσης και προτάσεις ευεξίας</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Οδηγό γρήγορης εκκίνησης με εικονογραφημένες οδηγίες</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                «Όταν άνοιξα το κουτί, με εξέπληξε στ' αλήθεια το πόσο <strong>premium</strong> έμοιαζαν όλα. Δεν είχε την αίσθηση “ερωτικού παιχνιδιού”, αλλά μιας επένδυσης στην ευεξία». – Δοκιμάστρια, 54 ετών
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ας μιλήσουμε για ανατομία: γιατί έχει σημασία η διέγερση της κλειτορίδας</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Διάγραμμα σε εγκάρσια τομή της ανατομίας της κλειτορίδας"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Η επιστήμη της απόλαυσης</h3>
                <p className="text-gray-600 text-sm">Αυτό που κάθε γυναίκα θα έπρεπε να ξέρει για το σώμα της</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Να κάτι που δεν μας έμαθαν στο μάθημα της σεξουαλικής διαπαιδαγώγησης: η κλειτορίδα έχει περίπου <strong>8.000 νευρικές απολήξεις</strong> – περισσότερες από οποιοδήποτε άλλο σημείο του ανθρώπινου σώματος, ανδρικού ή γυναικείου. Για να πάρεις μια ιδέα, το πέος έχει περίπου 4.000.
              </p>
              <p>
                Όμως εδώ είναι το κλειδί: <strong>το 75% των γυναικών δεν φτάνει σε οργασμό μόνο με τη διείσδυση</strong>, σύμφωνα με μελέτη που δημοσιεύτηκε στο Journal of Sex &amp; Marital Therapy. Το κλειδί είναι η κλειτορίδα.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Τι συμβαίνει κατά την εμμηνόπαυση:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Σύγκριση της αιμάτωσης πριν και μετά την εμμηνόπαυση"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ Το πρόβλημα:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Τα επίπεδα οιστρογόνων πέφτουν κατά 90%</li>
                      <li>• Η αιμάτωση της πυελικής περιοχής μειώνεται</li>
                      <li>• Ο ιστός της κλειτορίδας μπορεί να συρρικνωθεί κατά 20-30%</li>
                      <li>• Η νευρική ευαισθησία μειώνεται</li>
                      <li>• Η φυσική λίπανση μειώνεται</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ Η λύση:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Η τακτική διέγερση διατηρεί την αιμάτωση</li>
                      <li>• Κρατά ενεργές τις νευρικές οδούς</li>
                      <li>• Προλαμβάνει την ατροφία του ιστού</li>
                      <li>• Διατηρεί την ευαισθησία</li>
                      <li>• Ενισχύει τη φυσική λίπανση</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Οι γυναικολόγοι το λένε ξεκάθαρα: «Σκέψου το σαν γυμναστική για το πυελικό σου έδαφος. Αν δεν χρησιμοποιείς αυτούς τους μυς και δεν διατηρείς την αιμάτωση, ατροφούν. Η ίδια αρχή ισχύει και για τον ιστό της κλειτορίδας».
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Με δυο λόγια:</p>
                <p className="text-gray-700">
                  Η τακτική διέγερση της κλειτορίδας δεν αφορά μόνο την απόλαυση (αν και αυτό είναι ένα υπέροχο μπόνους). Αφορά τη διατήρηση της υγείας του ιστού, τη διαφύλαξη της νευρικής λειτουργίας και την αποφυγή των μη αναστρέψιμων αλλαγών που φέρνει η αδράνεια. Αυτό είναι <em>προληπτική φροντίδα υγείας</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">«Κι ο σύντροφός μου;» Το αναρωτηθήκαμε κι εμείς</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Το «θαύμα των 3 λεπτών» (και γιατί τα ζευγάρια το λατρεύουν)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ας είμαστε ειλικρινείς: για πολλές γυναίκες άνω των 50, μπορεί να χρειαστούν πάνω από 20 λεπτά (και πολλή νοητική προσπάθεια) για να πλησιάσουν έστω την κορύφωση. Με το Lem; <strong className="text-[#FF1493]">Τρία λεπτά.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>Η μεγαλύτερη ένσταση των γυναικών:</strong> «Θα νιώσει ο σύντροφός μου ότι τον αντικαθιστώ;».
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Καθόλου.</strong> Το Lem είναι μικροσκοπικό. Πολλά ζευγάρια το χρησιμοποιούν <em>κατά τη διάρκεια</em> της επαφής. Λειτουργεί σαν «γέφυρα»: φροντίζει να φτάσεις απόλυτα ερεθισμένη και λιπασμένη με φυσικό τρόπο, και απαλλάσσει τον σύντροφό σου από την πίεση να «αποδώσει».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Μία από τις δοκιμάστριές μας μάς είπε: «Ξανάκανε την κρεβατοκάμαρά μας έναν χώρο για παιχνίδι, κι όχι μια πηγή άγχους».
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Μία από τις πιο συχνές ερωτήσεις που λάβαμε κατά την έρευνά μας: <em>«Θα νιώσει ο σύντροφός μου ότι απειλείται απ' αυτό;»</em>.
              </p>
              <p>
                Να τι ανακαλύψαμε: <strong>το Lem δεν είναι υποκατάστατο, είναι συμπλήρωμα.</strong> Πολλά από τα ζευγάρια που ρωτήσαμε μάς είπαν ότι το να εντάξουν το Lem στην οικειότητά τους βελτίωσε στην πραγματικότητα τη σύνδεσή τους.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  «Ο άντρας μου ένιωθε περιέργεια, όχι απειλή. Τώρα είναι εκείνος που μου το βάζει στα προκαταρκτικά. Του φεύγει η πίεση να “αποδώσει” κι εγώ παίρνω ακριβώς αυτό που χρειάζομαι. Κερδίζουμε και οι δύο».
                </p>
                <p className="font-semibold text-gray-700">– Valeria, 55, παντρεμένη 28 χρόνια</p>
              </div>
              <p>
                Το συμπαγές μέγεθός του το κάνει εύκολο να ενταχθεί στο σεξ με τον σύντροφό σου χωρίς να γίνεται δύσχρηστο. Και, επειδή είναι ελεύθερα χεριών μόλις τοποθετηθεί, μπορείτε και οι δύο να εστιάσετε ο ένας στον άλλον.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Τρόποι που τα ζευγάρια χρησιμοποιούν το Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Στα προκαταρκτικά</p>
                    <p className="text-sm text-gray-600">Ο σύντροφος το κρατά στη θέση του ενώ φιλιέστε και χαϊδεύεστε</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Κατά την επαφή</p>
                    <p className="text-sm text-gray-600">Τοποθετημένο για ταυτόχρονη διέγερση της κλειτορίδας και με διείσδυση</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Μόνη σου, με τον σύντροφο να κοιτά</p>
                    <p className="text-sm text-gray-600">Χτίζει οικειότητα και βοηθά τον σύντροφο να μάθει τι σου αρέσει</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">«Συντήρηση» ανάμεσα στις φορές</p>
                    <p className="text-sm text-gray-600">Η χρήση μόνη σου κρατά τον ιστό υγιή όταν το σεξ με τον σύντροφο δεν είναι συχνό</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Συμβουλή:</strong> η επικοινωνία είναι το κλειδί. Παρουσίασέ το ως ένα εργαλείο ευεξίας που ωφελεί και τους <em>δυο σας</em>, γιατί μειώνει την πίεση και αυξάνει την απόλαυση.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Κάθε λόγος να το δοκιμάσεις, κανένας λόγος να ανησυχείς</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Ερευνήσαμε τις εγγυήσεις της Hello Nancy. Να τι σημαίνουν στ' αλήθεια.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">«Εγγύηση απόλαυσης» 30 ημερών</h3>
                <p className="text-sm text-gray-700 text-center">
                  Δεν είσαι ευχαριστημένη; Σου επιστρέφουν <strong>όλα τα χρήματα</strong>, χωρίς να χρειάζεται να στείλεις πίσω το προϊόν. Εμπιστεύονται την ειλικρίνειά σου. Τόσο σίγουροι είναι.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Μετάφραση: μηδενικό οικονομικό ρίσκο. Δοκίμασέ το για έναν μήνα.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Εγγύηση 12 μηνών</h3>
                <p className="text-sm text-gray-700 text-center">
                  Αν κάτι πάει στραβά με τη συσκευή μέσα στον πρώτο χρόνο, σου την αντικαθιστούν. Δωρεάν. Χωρίς ερωτήσεις.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Μετάφραση: αυτό δεν είναι ένα μαραφέτι μιας χρήσης. Είναι φτιαγμένο για να διαρκεί.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Υποστήριξη εφ' όρου ζωής</h3>
                <p className="text-sm text-gray-700 text-center">
                  Απορίες για τη χρήση; Ανησυχίες για τον καθαρισμό; Η ομάδα εξυπηρέτησης πελατών απαντά σε λιγότερο από 24 ώρες.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Μετάφραση: δεν αγοράζεις ένα προϊόν. Γίνεσαι μέλος μιας κοινότητας.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">Το πραγματικό ερώτημα: τι έχεις να χάσεις;</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Καλύψαμε την επιστήμη. Σου δείξαμε τις κριτικές. Σου εξηγήσαμε τις εγγυήσεις. Σ' αυτό το σημείο, το μόνο ρίσκο είναι να <em>μην</em> το δοκιμάσεις.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Ας κάνουμε τους λογαριασμούς:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Αν το δοκιμάσεις:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Ίσως ανακαλύψεις ξανά μια απόλαυση που θεωρούσες χαμένη</li>
                      <li>✓ Μπορεί να βελτιώσεις την υγεία του ιστού και να προλάβεις την ατροφία</li>
                      <li>✓ Ίσως κοιμάσαι καλύτερα (οι οργασμοί απελευθερώνουν ωκυτοκίνη)</li>
                      <li>✓ Στη χειρότερη περίπτωση: παίρνεις πίσω τα 77,95 € σου</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Αν δεν το δοκιμάσεις:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Η ατροφία του ιστού συνεχίζεται</li>
                      <li>• Η νευρική ευαισθησία μειώνεται όλο και πιο πολύ</li>
                      <li>• Η σεξουαλική ευεξία παραμένει αγώνας</li>
                      <li>• Πάντα θα αναρωτιέσαι «κι αν…;»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Γιατί η Hello Nancy κέρδισε την εμπιστοσύνη μας</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Δεν προτείνουμε προϊόντα στην τύχη. Να γιατί η Hello Nancy πέρασε τα συντακτικά μας κριτήρια.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Βραβευμένο</h3>
              <p className="text-sm text-gray-600">Βραβείο 2025 τεχνολογίας για τη γυναικεία ευεξία, από το International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Επαληθευμένες κριτικές</h3>
              <p className="text-sm text-gray-600">4,7★ μέσος όρος από 14.907 επαληθευμένες αγοράστριες (όχι ψεύτικες κριτικές)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1.000.000+ πωλήσεις</h3>
              <p className="text-sm text-gray-600">Πάνω από 1.000.000 τεμάχια πουλήθηκαν παγκοσμίως από την κυκλοφορία του το 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ιατρική σιλικόνη</h3>
              <p className="text-sm text-gray-600">Ιατρική σιλικόνη και αυστηροί έλεγχοι ασφάλειας</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Έχει προβληθεί σε:</h3>
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
            Τι λένε οι επαληθευμένες αγοράστριες
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 στα 5 (14.907 επαληθευμένες κριτικές)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Καλύτερο από την κρέμα οιστρογόνων»</p>
                <p className="text-gray-700 italic">
                  «Δεν το αγόρασα για να “περάσω καλά”, το αγόρασα επειδή η γιατρός μου είπε ότι χρειαζόμουν αιμάτωση. Αλλά, Θεέ μου. Η εκτόνωση με βοηθά να κοιμάμαι όλη τη νύχτα χωρίς να ξυπνώ μούσκεμα στον ιδρώτα. Είναι η νέα μου βιταμίνη».
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Επαληθευμένη αγορά</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Ξύπνησε το σώμα μου»</p>
                <p className="text-gray-700 italic">
                  «Είχα δοκιμάσει πριν το Lelo Sona, αλλά ήταν πολύ δυνατό για μένα. Το Lem είναι αρκετά απαλό για την ευαισθησία μου, αλλά αρκετά έντονο για να δουλέψει στ' αλήθεια. 10 στα 10».
                </p>
                <p className="font-semibold text-gray-900">- Carly, επαληθευμένη αγοράστρια</p>
                <p className="text-xs text-gray-500">✓ Επαληθευμένη αγορά</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Έχω εθιστεί»</p>
                <p className="text-gray-700 italic">
                  «Έχω εθιστεί. Το Lem ρουφάει και τραβάει με τον πιο τρελό τρόπο. Όταν φτάνεις, είναι σαν να σου τραβάει τον οργασμό από μέσα και κρατάει το ρίγος πολύ περισσότερη ώρα. Φοβερόοο!».
                </p>
                <p className="font-semibold text-gray-900">- Alisha, δοκιμάστρια beta</p>
                <p className="text-xs text-gray-500">✓ Επαληθευμένη αγορά</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Άλλαξε τα πάντα»</p>
                <p className="text-gray-700 italic">
                  «Ως κάποια που εκτιμά τη διακριτικότητα στα προϊόντα οικειότητας, δεν θα μπορούσε να υπάρξει πιο τέλεια επιλογή. Η λειτουργία αναρρόφησης δεν μοιάζει με τίποτα από όσα έχω δοκιμάσει ως τώρα».
                </p>
                <p className="font-semibold text-gray-900">- Maxine, επαληθευμένη αγοράστρια</p>
                <p className="text-xs text-gray-500">✓ Επαληθευμένη αγορά</p>
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
              Η ετυμηγορία μας: αξίζει την επένδυση
            </h2>
            <p className="text-center text-xl text-gray-600">
              Μετά από σχολαστικές δοκιμές και έρευνα, η ομάδα σύνταξής μας προτείνει ανεπιφύλακτα το Nancy's Lem στις γυναίκες που βιώνουν τις αλλαγές του ιστού κατά την εμμηνόπαυση.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">ΚΕΡΔΙΖΕΙΣ 61 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ ΠΡΟΣΦΟΡΑ ΓΙΑ ΑΝΑΓΝΩΣΤΡΙΕΣ ΓΙΑ ΠΕΡΙΟΡΙΣΜΕΝΟ ΧΡΟΝΟ ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Η προσφορά λήγει σε:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Διεγέρτης κλειτορίδας Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Κερδίζεις 61 € (έκπτωση 44%)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Μόλις 0,21 € την ημέρα</strong> για έναν ολόκληρο χρόνο χρήσης
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Λιγότερο από τον καθημερινό σου καφέ. Διαρκεί χρόνια.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 ΣΥΜΒΟΥΛΗ ΓΙΑ ΑΝΑΓΝΩΣΤΡΙΕΣ: χρησιμοποίησε τον κωδικό <span className="font-bold text-[#FF1493]">TIFFANY</span> ή <span className="font-bold text-[#FF1493]">ISABELLA</span> στο ταμείο για μια έξτρα έκπληξη!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Διεγέρτης κλειτορίδας Lem (έντονο κίτρινο)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Εγχειρίδιο αυταγάπης και οδηγός χρήσης</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Μαγνητικό καλώδιο φόρτισης</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Βελούδινο πουγκί για ταξίδια</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Δωρεάν αποστολή παγκοσμίως</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">«Εγγύηση απόλαυσης» 30 ημερών</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Εγγύηση 12 μηνών</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Αγόρασέ το τώρα - 77,95 € (Κερδίζεις 61 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Εγγύηση χωρίς ρίσκο
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Εγγύηση επιστροφής χρημάτων 30 ημερών. Αν δεν το λατρέψεις, σου επιστρέφουμε ως κι το τελευταίο ευρώ – <strong>χωρίς να χρειάζεται να επιστρέψεις τίποτα</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Διακριτική συσκευασία</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Αποστολή σε 24 ώρες</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Ασφαλής ολοκλήρωση αγοράς</span>
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
            Είναι το Lem για σένα;
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Χιλιάδες γυναίκες άνω των 50 λένε «ναι». Δες αν αναγνωρίζεις τον εαυτό σου σε κάποια από αυτά:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 Το Lem είναι για σένα αν:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Παλεύεις με την κολπική ξηρότητα ή με την επώδυνη επαφή</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Νιώθεις μειωμένη ευαισθησία ή δυσκολεύεσαι να φτάσεις σε οργασμό</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Αντιμετωπίζεις ατροφία της κλειτορίδας ή λέπτυνση του ιστού</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Οι κλασικοί δονητές σού φαίνονται πολύ έντονοι ή ερεθιστικοί</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Θέλεις να κρατήσεις υγιή τον ιστό καθώς μεγαλώνεις</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ψάχνεις μια διακριτική συσκευή ευεξίας (όχι ένα ολοφάνερο «παιχνίδι»)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Θέλεις να αποφύγεις ή να συμπληρώσεις τη θεραπεία ορμονικής υποκατάστασης</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Είσαι έτοιμη να ξανακερδίσεις τη σεξουαλική σου ευεξία και την αυτοπεποίθησή σου</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Θα λατρέψεις το Lem ιδιαίτερα αν:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Εκτιμάς την <strong>ευεξία με επιστημονική βάση</strong> πάνω από τα κόλπα</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Θέλεις <strong>προληπτική φροντίδα</strong>, όχι απλώς διαχείριση των συμπτωμάτων</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Έχεις κουραστεί από προϊόντα που <strong>δεν δουλεύουν σε ώριμα σώματα</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Εκτιμάς έναν <strong>προσεγμένο σχεδιασμό</strong> που σέβεται την ιδιωτικότητά σου</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Είσαι πρόθυμη να <strong>επενδύσεις στον εαυτό σου</strong> (μόλις 0,21 € την ημέρα για έναν χρόνο!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Θέλεις <strong>αποτελέσματα χωρίς παρενέργειες</strong> ή συνταγές</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Έχεις βαρεθεί να δέχεσαι ότι <strong>«έτσι είναι τα πράγματα τώρα»</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Αν τσέκαρες έστω και 3 από αυτά τα κουτάκια,</strong> το Lem σχεδιάστηκε ειδικά για σένα.
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
                  Ναι, αυτή είμαι εγώ - Αγόρασέ το τώρα
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
            Οι ερωτήσεις σου, απαντημένες
          </h2>
          <p className="text-center text-gray-600 mb-12">Ρωτήσαμε τη Hello Nancy ό,τι ήθελαν να μάθουν οι αναγνώστριές μας</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Θα με πονέσει αν είμαι ευαίσθητη ή έχω ατροφία;</h3>
                <p className="text-gray-700">
                  Καθόλου. Επειδή χρησιμοποιεί αναρρόφηση αέρα αντί για δόνηση με άμεση επαφή, αποφεύγει την τριβή που προκαλεί πόνο. Μπορείς να ξεκινήσεις από τη χαμηλότερη από τις 12 εντάσεις και να ανεβαίνεις σιγά σιγά. Είναι σχεδιασμένο ειδικά για να είναι απαλό με τον ευαίσθητο ιστό.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Είναι ντροπιαστική η συσκευασία;</h3>
                <p className="text-gray-700">
                  Καθόλου. Αποστέλλεται σε απλά καφέ κουτιά, χωρίς λογότυπα. Στη διεύθυνση αποστολέα γράφει μόνο «Care &amp; Bloom Ltd.». Απόλυτη διακριτικότητα, εγγυημένα.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Κι αν δεν μου αρέσει;</h3>
                <p className="text-gray-700">
                  Η Hello Nancy προσφέρει εγγύηση ικανοποίησης 30 ημερών. Αν δεν το λατρέψεις, σου κάνουν μια επιστροφή χρημάτων κατ' εξαίρεση, για μία φορά – <strong>χωρίς να χρειάζεται να επιστρέψεις τίποτα</strong>. Εμπιστεύονται ότι θα βρεις αυτό που ταιριάζει στο σώμα σου.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Μπορώ να το χρησιμοποιήσω στο ντους ή στην μπανιέρα;</h3>
                <p className="text-gray-700">
                  Ναι! Έχει πιστοποίηση αδιαβροχότητας IPX7, που σημαίνει ότι είναι πλήρως βυθιζόμενο. Πολλές χρήστριες διαπιστώνουν ότι το ζεστό νερό ενισχύει τη χαλάρωση και την αίσθηση.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Πόσο θόρυβο κάνει;</h3>
                <p className="text-gray-700">
                  Είναι αθόρυβο. Το εξαιρετικά αθόρυβο μοτέρ εξασφαλίζει απόλυτη διακριτικότητα: μπορείς να το χρησιμοποιείς χωρίς να ανησυχείς μήπως σε ακούσει κανείς, ακόμη και στο διπλανό δωμάτιο.
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
              Η τελική μας άποψη
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Μετά από εβδομάδες έρευνας, συμβουλές από ειδικούς και συνεντεύξεις με χρήστριες, η ομάδα σύνταξής μας πιστεύει ότι το Nancy's Lem απαντά σε μια πραγματική ιατρική ανάγκη που αγνοήθηκε για πάρα πολύ καιρό.
              </p>
              <p>
                Δεν πρόκειται για ματαιοδοξία ή καπρίτσιο – πρόκειται για τη διατήρηση της υγείας του ιστού, τη βελτίωση της ποιότητας του ύπνου και την ανάκτηση ενός κομματιού του εαυτού σου που η εμμηνόπαυση προσπαθεί να σου πάρει.
              </p>
              <p className="text-xl font-bold">
                Αν βιώνεις τα συμπτώματα του GSM, παλεύεις με τις κλασικές λύσεις ή απλώς θέλεις να διατηρήσεις τη σεξουαλική σου ευεξία καθώς μεγαλώνεις, το Lem αξίζει να το σκεφτείς σοβαρά.
              </p>
              <p className="text-sm italic">
                – Jessica Martinez, αρχισυντάκτρια ευεξίας
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
                Αγόρασε το Nancy's Lem - 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Εγγύηση 30 ημερών ✓ Δωρεάν αποστολή ✓ Διακριτική συσκευασία</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Γνωστοποίηση συνεργασίας</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Το Wellness Insider στηρίζεται στις αναγνώστριές του. Όταν αγοράζεις μέσω των συνδέσμων στην ιστοσελίδα μας, μπορεί να κερδίσουμε προμήθεια συνεργασίας χωρίς κανένα επιπλέον κόστος για σένα. Αυτό μας βοηθά να συνεχίζουμε να προσφέρουμε δωρεάν περιεχόμενο με επιστημονική βάση. Προτείνουμε μόνο προϊόντα που η ομάδα σύνταξής μας έχει ελέγξει σχολαστικά και πιστεύει ότι θα ωφελήσουν τις αναγνώστριές μας. Όλες οι απόψεις που εκφράζονται είναι δικές μας και δεν επηρεάζονται από καμία αμοιβή.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Ποιοι είμαστε</h3>
                <p className="text-gray-400 text-sm">
                  Το Wellness Insider προσφέρει δημοσιογραφία υγείας και ευεξίας με επιστημονική βάση για τη σύγχρονη γυναίκα.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Κατηγορίες</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Υγεία</li>
                  <li>Ευεξία</li>
                  <li>Σεξ και σχέσεις</li>
                  <li>Κριτικές προϊόντων</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Σχετικά με το Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Λεπτομέρειες προϊόντος</li>
                  <li>Κριτικές πελατισσών</li>
                  <li>Αποστολές και επιστροφές</li>
                  <li>Επικοινωνία: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Εμπιστοσύνη και ασφάλεια</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Υλικά ιατρικού τύπου</li>
                  <li>✓ Διακριτική αποστολή</li>
                  <li>✓ Εγγύηση 30 ημερών</li>
                  <li>✓ Εγγύηση 12 μηνών</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Με την επιφύλαξη παντός δικαιώματος. Το συντακτικό περιεχόμενο είναι ανεξάρτητο και αντικειμενικό.</p>
              <p className="mt-2">Προβαλλόμενο προϊόν: Nancy's Lem της Hello Nancy • Νικητής του Βραβείου 2025 τεχνολογίας για τη γυναικεία ευεξία</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
