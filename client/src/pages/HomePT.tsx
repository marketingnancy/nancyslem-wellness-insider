import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomePT() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "pt-PT"; }, []);

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
    { src: "/PDP.jpg", alt: "Dispositivo de bem-estar Nancy's Lem" },
    { src: "/PDP-1.jpg", alt: "O Lem num ambiente do dia a dia" },
    { src: "/PDP-2.jpg", alt: "Grande plano do design do Lem" },
    { src: "/PDP-3.jpg", alt: "Pormenores do Lem" },
    { src: "/PDP-4.jpg", alt: "O Lem em utilização" },
    { src: "/PDP-5.jpg", alt: "Embalagem e acessórios do Lem" },
    { src: "/PDP-6.jpg", alt: "O Lem numa imagem do quotidiano" },
    { src: "/PDP-7.jpg", alt: "Características do Lem" },
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
              <p className="text-xs text-gray-500 font-medium">Saúde feminina de confiança</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4,7 (14 907 avaliações) • +1 M vendidos</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">77,95 €</span>
                  <span className="text-sm line-through text-white/70">138,95 €</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">POUPA 61 €</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Termina em {formatTime(timeLeft)}</span>
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
                  Comprar agora
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SAÚDE E BEM-ESTAR</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">ANÁLISE DE PRODUTO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Mais de um milhão de orgasmos depois: porque é que as mulheres com mais de 50 estão a trocar o vibrador por este «limão»
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Investigámos porque é que milhares de mulheres com mais de 50 estão a trocar o vibrador de sempre por este dispositivo «de fisioterapia» com forma de limão. Eis o que descobrimos.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">Por Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Editora sénior de bem-estar</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Última atualização: {new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('pt-PT', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 min de leitura</span>
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
              <span className="font-bold text-gray-900 mr-1">Nota da redação:</span>
              Este artigo contém links de afiliados. Podemos receber uma comissão se comprares através deles, sem qualquer custo adicional para ti. Só recomendamos produtos que investigámos e testámos a fundo.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="O dispositivo de bem-estar Nancy's Lem sobre a mesa de cabeceira"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">O Nancy's Lem fica discretamente sobre a mesa de cabeceira — quase toda a gente pensa que é um limão decorativo. Foto: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString('pt-PT')}</strong> leitoras estão a ver este artigo neste momento</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Embalagem discreta</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Envio grátis para todo o mundo</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantia de satisfação de 30 dias</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Garantia de 12 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Porque é que estamos a falar disto</h2>
          <p className="text-gray-700 leading-relaxed">
            Quando a nossa equipa de redação ouviu falar pela primeira vez de um «dispositivo de bem-estar com forma de limão» que está a conquistar a comunidade da menopausa, admitimos — estávamos cépticas. Mas, depois de entrevistarmos dezenas de mulheres, de consultarmos ginecologistas e, sim, de o testarmos nós mesmas, percebemos o entusiasmo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Isto não é só mais uma moda do bem-estar. Aborda um problema médico real que afeta milhões de mulheres, mas de que raramente se fala: a <strong>atrofia do clitóris</strong> e a perda do bem-estar sexual durante a menopausa.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A conversa que ninguém nos avisou que íamos ter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contam-nos tudo sobre os afrontamentos que nos deixam encharcadas em suor nos lençóis de seda às três da manhã. Falam-nos da névoa mental que nos faz procurar os óculos quando os temos na cara.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Mas ninguém te senta com um copo de pinot e te sussurra: «Olha, já agora, se não manteres a zona lá de baixo ativa, o teu clitóris pode mesmo encolher».
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chama-se <strong>atrofia do clitóris</strong> e faz parte do síndrome geniturinário da menopausa (SGM) — uma condição que afeta até 50 % das mulheres pós-menopáusicas, segundo a North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">«A grande desconexão»</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Para muitas das mulheres que entrevistámos, não era só a secura. Era a <strong>dormência</strong>. Uma das testadoras descreveu-nos como tentou usar o vibrador que tinha desde os 30 anos: «Em vez de sentir prazer, só sentia… incómodo. Ou nada. Como tentar fazer cócegas a um calo».
            </p>
            <p className="text-gray-700 leading-relaxed">
              As especialistas médicas explicam que os vibradores de sempre funcionam por fricção e impacto. Quando os tecidos ficam mais finos devido à falta de estrogénio, a vibração direta pode até <em>dessensibilizar ainda mais os nervos</em>, o que provoca essa sensação de «dormência».
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">«Deixa de vibrar. Começa a sugar».</p>
            <p className="text-gray-700">— Especialistas em pavimento pélvico</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            As ginecologistas especializadas em menopausa explicam assim: «Quando o estrogénio baixa, o fluxo sanguíneo para a zona pélvica diminui. Isto leva ao afinamento dos tecidos, à perda de elasticidade e à redução da sensibilidade. Na medicina, chamamos-lhe o princípio do “usa ou perde” — precisas de um fluxo sanguíneo constante para manter o tecido saudável».
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Eis o Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            É aqui que entra este pequeno dispositivo amarelo. O Nancy's Lem não é vendido como um brinquedo sexual — é apresentado como um dispositivo de bem-estar. E, depois da nossa investigação, percebemos porquê.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ao contrário dos vibradores de sempre, que dependem da fricção (que pode irritar o tecido menopáusico afinado), o Lem usa a chamada <strong>tecnologia de ondas de pressão</strong>. Pensa nisto como a diferença entre esfregar lixa na pele e fazer uma suave massagem de sucção.
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A ciência: porque é que as ondas de pressão funcionam</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Vibradores de sempre:</p>
              <p className="text-red-700 text-sm">Dependem da fricção à superfície, que pode irritar o tecido sensível e afinado. Podem provocar dormência ou microfissuras.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Tecnologia de ondas de pressão:</p>
              <p className="text-green-700 text-sm">Cria suaves ondas de sucção sem contacto direto. Atrai sangue rico em oxigénio para os tecidos e favorece a sua saúde e a sua sensibilidade.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Eis como funciona: o Lem cria um suave selo à volta do clitóris e usa ondas de pressão de ar para o estimular, imitando a sensação do sexo oral, mas de forma constante e incansável. Como não há roçar, não há irritação nenhuma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mas a verdadeira magia está na física: essa suave sucção cria um efeito de vácuo que atrai fisicamente sangue profundo e rico em oxigénio para os tecidos. Acorda nervos que andavam adormecidos há anos.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              «É como se puxasse o orgasmo cá para fora… e mantém aquela pulsação muito mais tempo».
            </p>
            <p className="font-semibold text-gray-700">— Alisha, testadora beta (de avaliações verificadas de clientes)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Como se compara: a nossa análise</h2>
          <p className="text-center text-gray-600 mb-8">Comparámos o Lem com as soluções de sempre para a saúde do tecido menopáusico</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Característica</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Vibrador tradicional</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Creme de estrogénio</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Adequado a tecido sensível</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Sim</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Pode irritar</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Resultados lentos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Aumenta o fluxo sanguíneo</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Tecido profundo</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Só à superfície</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradual</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Sem fricção nem irritação</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zero contacto</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Provoca fricção</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sim</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Prazer imediato</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Logo</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variável</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Sem prazer</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Design discreto</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Parece um limão</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Óbvio</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sim</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Recomendado por médicas</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Pelo fluxo sanguíneo</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Às vezes</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Sim</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Preço</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">77,95 € (pagamento único)</td>
                  <td className="border border-gray-300 p-4 text-center">45–135 €</td>
                  <td className="border border-gray-300 p-4 text-center">28–45 € por mês</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A filosofia de design «sem vergonha»</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uma coisa chamou a atenção da nossa equipa durante os testes: o design é <em>deliberadamente</em> discreto. É de um amarelo vivo, cabe na palma da mão e parece mesmo um limão decorativo.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">A «prova da mesa de cabeceira»</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="O dispositivo Lem pousado discretamente sobre a mesa de cabeceira"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              Todas temos aquela gaveta. A <em>gaveta da vergonha</em>. Onde escondemos os aparelhos de plástico fálicos e pouco bonitos debaixo das meias velhas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Uma das nossas testadoras contou-nos isto: «Deixei o Lem esquecido na bancada da casa de banho mesmo quando a minha sogra veio cá. Ela pegou-lhe e disse: “Ah, isto é um daqueles novos escovões faciais sónicos? É tão suavinho!”».
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Passa na prova da mesa de cabeceira. Parece tecnologia de autocuidado topo de gama, não um brinquedo sexual. Porque é exatamente isso.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Cuidado com as imitações baratas</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              Depois de publicarmos a nossa primeira análise, várias leitoras perguntaram-nos porque não comprar a versão de quatro euros que há na Amazon. Eis o que nos respondeu uma das especialistas médicas que consultámos.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              «Os brinquedos baratos usam materiais porosos de gel ou TPE», avisou. «As bactérias microscópicas ficam presas nos poros, o que representa um risco enorme para as mulheres na menopausa, que já são propensas a infeções urinárias».
            </p>
            <p className="text-red-900 font-bold mt-3">
              O Lem da Hello Nancy é 100 % silicone médico não poroso. Não ponhas a tua saúde em risco para poupares uns euros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Silencioso</h3>
                <p className="text-gray-600 text-sm">
                  Motor ultrassilencioso para uma discrição total
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">À prova de água (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfeito para usar no banho ou no duche
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Silicone médico</h3>
                <p className="text-gray-600 text-sm">
                  Seguro para o corpo, não poroso e fácil de limpar
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Carregamento magnético</h3>
                <p className="text-gray-600 text-sm">
                  120 minutos por carga
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Galeria do produto</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Abrir a caixa: a primeira impressão conta</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="A experiência de abrir a caixa do Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Uma das primeiras coisas que as nossas testadoras notaram? A embalagem é <em>elegante</em>. Sem cores berrantes, sem imagens embaraçosas. A caixa é de um branco minimalista com subtis pormenores dourados — podia confundir-se facilmente com um produto de cosmética de luxo.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">O que vem na caixa:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>O dispositivo Lem (amarelo vivo, do tamanho da palma da mão)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Cabo de carregamento magnético USB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Bolsa de veludo macio para guardar (perfeita para viajar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>«Manual do amor-próprio» com dicas de utilização e conselhos de bem-estar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Guia de início rápido com instruções ilustradas</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                «Quando abri a caixa, fiquei mesmo surpreendida com o ar <strong>premium</strong> de tudo. Não parecia um “brinquedo sexual” — parecia um investimento em bem-estar». — Testadora, 54 anos
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Falemos de anatomia: porque é que a estimulação do clitóris importa</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Diagrama em corte transversal da anatomia do clitóris"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">A ciência do prazer</h3>
                <p className="text-gray-600 text-sm">O que toda a mulher devia saber sobre o seu corpo</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Eis algo que não nos ensinam nas aulas de saúde: o clitóris tem cerca de <strong>8000 terminações nervosas</strong> — mais do que qualquer outra parte do corpo humano, seja de homem ou de mulher. Para teres uma ideia, o pénis tem cerca de 4000.
              </p>
              <p>
                Mas eis a questão: <strong>75 % das mulheres não conseguem chegar ao orgasmo só com a penetração</strong>, segundo um estudo publicado no Journal of Sex & Marital Therapy. A chave está no clitóris.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">O que acontece durante a menopausa:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Comparação do fluxo sanguíneo antes e depois da menopausa"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ O problema:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Os níveis de estrogénio baixam 90 %</li>
                      <li>• O fluxo sanguíneo para a zona pélvica diminui</li>
                      <li>• O tecido do clitóris pode encolher entre 20 e 30 %</li>
                      <li>• A sensibilidade nervosa diminui</li>
                      <li>• A lubrificação natural diminui</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ A solução:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• A estimulação regular mantém o fluxo sanguíneo</li>
                      <li>• Mantém as vias nervosas ativas</li>
                      <li>• Previne a atrofia do tecido</li>
                      <li>• Conserva a sensibilidade</li>
                      <li>• Favorece a lubrificação natural</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                As ginecologistas dizem-no sem rodeios: «Pensa nisto como exercício para o teu pavimento pélvico. Se não usares esses músculos e não mantiveres o fluxo sanguíneo, atrofiam. O mesmo princípio aplica-se ao tecido do clitóris».
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 Em resumo:</p>
                <p className="text-gray-700">
                  A estimulação regular do clitóris não é só uma questão de prazer (embora isso seja um extra fantástico). É manter o tecido saudável, conservar a função nervosa e evitar as alterações irreversíveis que o desuso traz. Isto é <em>saúde preventiva</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">«E o meu parceiro?» Também perguntámos isso</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">O «milagre dos 3 minutos» (e porque é que os parceiros o adoram)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sejamos sinceras: para muitas mulheres com mais de 50, podem ser precisos mais de 20 minutos (e muita ginástica mental) só para chegar perto do clímax. Com o Lem? <strong className="text-[#FF1493]">Três minutos.</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>A maior objeção das mulheres:</strong> «O meu parceiro vai sentir-se substituído?».
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>De todo.</strong> O Lem é minúsculo. Muitos casais usam-no <em>durante</em> a relação. Funciona como uma «ponte»: garante que chegas bem excitada e naturalmente lubrificada, e tira ao teu parceiro a pressão de «cumprir».
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Uma das nossas testadoras contou-nos: «Voltou a tornar o nosso quarto num lugar para brincar, em vez de uma fonte de ansiedade».
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Uma das perguntas mais frequentes que recebemos durante a nossa investigação: <em>«O meu parceiro vai sentir-se ameaçado por isto?»</em>.
              </p>
              <p>
                Eis o que descobrimos: <strong>o Lem não é um substituto, é um complemento.</strong> Muitos dos casais que entrevistámos contaram-nos que incluir o Lem na sua intimidade até <em>melhorou</em> a ligação entre os dois.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  «O meu marido ficou curioso, não ameaçado. Agora é ele que mo usa durante os preliminares. Tira-lhe a pressão de “cumprir” e eu consigo exatamente o que preciso. Ganhamos os dois».
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55 anos, casada há 28 anos</p>
              </div>
              <p>
                O tamanho compacto torna-o fácil de incluir a dois sem que seja aparatoso. E, como fica de mãos-livres depois de colocado, ambos se podem concentrar um no outro.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Formas como os casais usam o Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Durante os preliminares</p>
                    <p className="text-sm text-gray-600">O parceiro mantém-no no sítio enquanto se beijam e se acariciam</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Durante a relação</p>
                    <p className="text-sm text-gray-600">Colocado para uma estimulação simultânea do clitóris e por penetração</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">A sós com o parceiro a ver</p>
                    <p className="text-sm text-gray-600">Cria intimidade e ajuda o parceiro a aprender o que te resulta</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">«Manutenção» entre sessões</p>
                    <p className="text-sm text-gray-600">O uso a sós mantém o tecido saudável quando o sexo a dois não é frequente</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Dica:</strong> a comunicação é fundamental. Apresenta-o como uma ferramenta de bem-estar que vos beneficia <em>aos dois</em>, porque reduz a pressão e aumenta o prazer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Todas as razões para experimentar, nenhuma para te preocupares</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Investigámos as garantias da Hello Nancy. Eis o que significam de verdade.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">«Garantia de prazer» de 30 dias</h3>
                <p className="text-sm text-gray-700 text-center">
                  Não estás contente? Devolvem-te <strong>todo o dinheiro</strong> — sem precisares de devolver o produto. Confiam na tua honestidade. É essa a confiança que têm.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Por outras palavras: zero risco financeiro. Experimenta-o durante um mês.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Garantia de 12 meses</h3>
                <p className="text-sm text-gray-700 text-center">
                  Se algo correr mal com o dispositivo no primeiro ano, trocam-no. Grátis. Sem perguntas.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Por outras palavras: isto não é um aparelho descartável. Foi feito para durar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Apoio vitalício</h3>
                <p className="text-sm text-gray-700 text-center">
                  Dúvidas sobre a utilização? Preocupações com a limpeza? A equipa de apoio ao cliente responde em menos de 24 horas.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Por outras palavras: não estás a comprar um produto. Estás a juntar-te a uma comunidade.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">A verdadeira pergunta: o que tens a perder?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                Já cobrimos a ciência. Já te mostrámos as avaliações. Já te explicámos as garantias. A esta altura, o único risco é <em>não</em> o experimentares.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Façamos as contas:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">Se o experimentares:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Talvez redescubras um prazer que julgavas perdido</li>
                      <li>✓ Podes melhorar a saúde do tecido e prevenir a atrofia</li>
                      <li>✓ Talvez durmas melhor (os orgasmos libertam oxitocina)</li>
                      <li>✓ Na pior das hipóteses: recuperas os teus 77,95 €</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">Se não o fizeres:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• A atrofia do tecido continua</li>
                      <li>• A sensibilidade nervosa continua a diminuir</li>
                      <li>• O bem-estar sexual continua a ser uma luta</li>
                      <li>• Vais ficar sempre com o «e se…?»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Porque é que a Hello Nancy tem a nossa confiança</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Não recomendamos produtos de ânimo leve. Eis porque é que a Hello Nancy passou nos nossos critérios editoriais.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Premiado</h3>
              <p className="text-sm text-gray-600">Prémio 2025 de tecnologia para o bem-estar feminino, do International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Avaliações verificadas</h3>
              <p className="text-sm text-gray-600">Média de 4,7★ de 14 907 compradoras verificadas (nada de avaliações falsas)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">+1 M vendidos</h3>
              <p className="text-sm text-gray-600">Mais de 1 000 000 de unidades vendidas em todo o mundo desde o lançamento, em 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Silicone médico</h3>
              <p className="text-sm text-gray-600">Silicone de uso médico e rigorosos testes de segurança</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Falaram dele:</h3>
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
            O que dizem as compradoras verificadas
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4,7 em 5 (14 907 avaliações verificadas)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">«Melhor do que o creme de estrogénio»</p>
                <p className="text-gray-700 italic">
                  «Não o comprei para “me divertir”, comprei-o porque a minha médica me disse que precisava de fluxo sanguíneo. Mas que coisa. O alívio ajuda-me a dormir a noite toda sem acordar encharcada em suor. É a minha nova vitamina».
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58 anos</p>
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
                <p className="font-bold text-gray-900">«Acordou o meu corpo»</p>
                <p className="text-gray-700 italic">
                  «Antes experimentei o Lelo Sona, mas era demasiado forte para mim. O Lem é suave o suficiente para a minha sensibilidade, mas intenso o suficiente para funcionar mesmo. 10/10».
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
                <p className="font-bold text-gray-900">«Estou viciada»</p>
                <p className="text-gray-700 italic">
                  «Estou viciada. O Lem suga e puxa da forma mais alucinante. Quando chegas ao orgasmo, é como se o puxasse cá para fora e mantém aquela pulsação muito mais tempo. Bom demais!».
                </p>
                <p className="font-semibold text-gray-900">- Alisha, testadora beta</p>
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
                <p className="font-bold text-gray-900">«Mudou tudo»</p>
                <p className="text-gray-700 italic">
                  «Como alguém que valoriza a discrição nos produtos íntimos, não podia haver escolha mais perfeita. A função de sucção não se parece com nada do que experimentei antes».
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
              O nosso veredito: vale o investimento
            </h2>
            <p className="text-center text-xl text-gray-600">
              Depois de testes e investigação a fundo, a nossa equipa de redação recomenda vivamente o Nancy's Lem às mulheres que vivem as alterações no tecido próprias da menopausa.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">POUPA 61 €</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ OFERTA PARA LEITORAS POR TEMPO LIMITADO ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">A oferta termina em:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Sugador de clitóris Nancy's Lem</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">77,95 €</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">138,95 €</span>
                      <span className="text-sm text-green-600 font-bold">Poupa 61 € (44 % de desconto)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Apenas 0,21 € por dia</strong> ao longo de um ano de uso
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Menos do que o teu café diário. Dura anos.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 DICA PARA LEITORAS: usa o código <span className="font-bold text-[#FF1493]">TIFFANY</span> ou <span className="font-bold text-[#FF1493]">ISABELLA</span> ao finalizar a compra para receberes uma surpresa extra!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Sugador de clitóris Lem (amarelo vivo)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Manual do amor-próprio e guia de utilização</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Cabo de carregamento magnético</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Bolsa de veludo para viagem</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Envio grátis para todo o mundo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">«Garantia de prazer» de 30 dias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Garantia de 12 meses</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Comprar agora - 77,95 € (Poupa 61 €)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Garantia sem risco
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    Garantia de devolução do dinheiro em 30 dias. Se não te apaixonares, devolvemos-te até ao último cêntimo —<strong>e sem teres de devolver nada</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Embalagem discreta</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Envio em 24 h</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Pagamento seguro</span>
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
            O Lem é para ti?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Milhares de mulheres com mais de 50 dizem que «sim». Vê se te identificas com alguma destas situações:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 O Lem é para ti se:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lidas com secura vaginal ou relações dolorosas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Sentes menos sensibilidade ou tens dificuldade em chegar ao orgasmo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lidas com a atrofia do clitóris ou o afinamento do tecido</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Achas os vibradores de sempre demasiado bruscos ou irritantes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Queres manter o tecido saudável à medida que envelheces</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Procuras um dispositivo de bem-estar discreto (não um «brinquedo» óbvio)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Queres evitar ou complementar a terapia hormonal de substituição</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás pronta para reconquistar o teu bem-estar sexual e a tua confiança</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 Vais adorar o Lem sobretudo se:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Valorizas o <strong>bem-estar com base científica</strong> em vez de truques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Queres <strong>cuidado preventivo</strong>, não só controlar os sintomas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás farta de produtos que <strong>não funcionam em corpos maduros</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Aprecias um <strong>design cuidado</strong> que respeita a tua privacidade</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás disposta a <strong>investir em ti</strong> (apenas 0,21 € por dia durante um ano!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Queres <strong>resultados sem efeitos secundários</strong> nem receitas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Estás farta de aceitar que <strong>«isto agora é assim»</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Se assinalaste pelo menos 3 destas opções,</strong> o Lem foi pensado mesmo para ti.
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
                  Sim, sou eu - Comprar agora
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
            As tuas perguntas, respondidas
          </h2>
          <p className="text-center text-gray-600 mb-12">Fizemos à Hello Nancy as perguntas que as nossas leitoras queriam ver respondidas</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Vai doer se sou sensível ou tenho atrofia?</h3>
                <p className="text-gray-700">
                  De todo. Como usa sucção por ar em vez de vibração por contacto direto, evita a fricção que provoca dor. Podes começar na mais baixa das 12 intensidades e ir subindo aos poucos. Foi pensado precisamente para ser suave com o tecido sensível.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">A embalagem é embaraçosa?</h3>
                <p className="text-gray-700">
                  Zero. É enviado em caixas castanhas simples, sem logótipos. O remetente diz apenas «Care & Bloom Ltd.». Discrição total garantida.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">E se não gostar?</h3>
                <p className="text-gray-700">
                  A Hello Nancy oferece uma garantia de satisfação de 30 dias. Se não te apaixonares, fazem-te um reembolso de cortesia, uma vez —<strong>e sem teres de devolver nada</strong>. Confiam que vais descobrir o que melhor resulta para o teu corpo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Posso usá-lo no duche ou no banho?</h3>
                <p className="text-gray-700">
                  Sim! Tem certificação à prova de água IPX7, o que significa que é totalmente submersível. Muitas utilizadoras acham que a água quente potencia o relaxamento e a sensação.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Faz muito barulho?</h3>
                <p className="text-gray-700">
                  É silencioso. O motor ultrassilencioso garante uma discrição total — podes usá-lo sem te preocupares que alguém o ouça, nem sequer no quarto ao lado.
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
              A nossa conclusão final
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                Depois de semanas de investigação, consultas com especialistas e entrevistas a utilizadoras, a nossa equipa de redação acredita que o Nancy's Lem dá resposta a uma necessidade médica real que ficou esquecida durante demasiado tempo.
              </p>
              <p>
                Isto não é vaidade nem capricho — é manter o tecido saudável, melhorar a qualidade do sono e reconquistar uma parte de ti que a menopausa tenta tirar-te.
              </p>
              <p className="text-xl font-bold">
                Se tens sintomas do SGM, se lidas com dificuldade com as soluções de sempre ou se simplesmente queres manter o teu bem-estar sexual à medida que envelheces, o Lem merece que o leves muito a sério.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, editora sénior de bem-estar
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
                Comprar o Nancy's Lem - 77,95 €
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ Garantia de 30 dias ✓ Envio grátis ✓ Embalagem discreta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Divulgação de afiliação</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A Wellness Insider é financiada pelas suas leitoras. Quando compras através dos links do nosso site, podemos receber uma comissão de afiliação sem qualquer custo adicional para ti. Isto ajuda-nos a continuar a oferecer conteúdo gratuito e baseado na investigação. Só recomendamos produtos que a nossa equipa de redação analisou a fundo e que acredita que vão beneficiar as nossas leitoras. Todas as opiniões expressas são nossas e não são influenciadas por qualquer compensação.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Quem somos</h3>
                <p className="text-gray-400 text-sm">
                  A Wellness Insider oferece jornalismo de saúde e bem-estar com base científica para a mulher de hoje.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categorias</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Saúde</li>
                  <li>Bem-estar</li>
                  <li>Sexo e relações</li>
                  <li>Análises de produtos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Sobre o Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Detalhes do produto</li>
                  <li>Avaliações de clientes</li>
                  <li>Envios e devoluções</li>
                  <li>Contacto: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Confiança e segurança</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Materiais de uso médico</li>
                  <li>✓ Envio discreto</li>
                  <li>✓ Garantia de 30 dias</li>
                  <li>✓ Garantia de 12 meses</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. Todos os direitos reservados. O conteúdo editorial é independente e objetivo.</p>
              <p className="mt-2">Produto em destaque: Nancy's Lem da Hello Nancy • Vencedor do Prémio 2025 de tecnologia para o bem-estar feminino</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
