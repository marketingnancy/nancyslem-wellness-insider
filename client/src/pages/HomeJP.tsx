import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeJP() {
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

  useEffect(() => { document.documentElement.lang = "ja"; }, []);

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
    { src: "/PDP.jpg", alt: "Hello Nancy の Lem ウェルネスアイテム" },
    { src: "/PDP-1.jpg", alt: "暮らしのなかに溶けこむ Lem" },
    { src: "/PDP-2.jpg", alt: "Lem のデザインを近くで" },
    { src: "/PDP-3.jpg", alt: "Lem の細部" },
    { src: "/PDP-4_JP.png", alt: "Lem を使うイメージ" },
    { src: "/PDP-5.jpg", alt: "Lem のパッケージと付属品" },
    { src: "/PDP-6_JP.png", alt: "Lem のある暮らしのイメージ" },
    { src: "/PDP-7_JP.png", alt: "Lem の特長" },
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
              <p className="text-xs text-gray-500 font-medium">女性の健康に、まっすぐ寄り添うメディア</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7（14,907件のレビュー）・販売100万個突破</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">¥14,700</span>
                  <span className="text-sm line-through text-white/70">¥26,300</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">¥11,600 OFF</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>終了まで {formatTime(timeLeft)}</span>
                  </div>
                )}
              </div>
              <a 
                href="https://hellonancy.com/en-jp/products/lem" 
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
                  今すぐ購入
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">ヘルス＆ウェルネス</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">製品レビュー</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            100万回を超える「心地よさ」。50代からの女性が、バイブレーターを手放して「レモン」を選ぶわけ
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            50代を過ぎた何千人もの女性が、これまでのバイブレーターから、レモンのかたちをした「理学療法」発想のこのアイテムへ。なぜ乗り換えるのか、じっくり取材しました。わかったことを、ありのままにお伝えします。
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">文・ジェシカ・マルティネス</p>
                <p className="text-xs sm:text-sm">シニア・ウェルネス・エディター</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>最終更新日：{new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>読了時間：約8分</span>
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
              <span className="font-bold text-gray-900 mr-1">編集部より：</span>
              この記事にはアフィリエイトリンクが含まれます。リンク経由でご購入いただくと手数料をいただくことがありますが、みなさまの負担が増えることはありません。じっくり調べ、実際に試したアイテムだけをご紹介しています。
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="ベッドサイドに置かれた Hello Nancy の Lem ウェルネスアイテム"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Hello Nancy の Lem は、ベッドサイドに置いてもさりげなく。たいていは、飾りのレモンだと思われます。写真：Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>いま<strong className="text-gray-900">{visitorCount.toLocaleString()}</strong>人がこの記事を読んでいます</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">中身のわからない梱包</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">送料無料</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30日間の満足保証</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12ヶ月保証</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">なぜ今、こんなに話題なのでしょう</h2>
          <p className="text-gray-700 leading-relaxed">
            「レモンのかたちをしたウェルネスアイテム」が、更年期世代のあいだで静かなブームになっている。そう聞いたとき、正直、半信半疑でした。でも、何十人もの女性に話を聞き、婦人科医にたずね、編集部で実際に試してみて——その理由が、ようやく腑に落ちたのです。
          </p>
          <p className="text-gray-700 leading-relaxed">
            これは、ただの流行りものではありません。何百万人もの女性が経験しているのに、ほとんど語られてこなかった、れっきとしたからだの悩み。つまり<strong>クリトリスの萎縮</strong>と、更年期に置き去りにされがちな性のウェルネスに、まっすぐ向き合っているのです。
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">誰も教えてくれなかった、更年期のこと</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            夜中の3時、汗びっしょりで目が覚めるホットフラッシュ。その話なら、よく耳にします。メガネをかけたままメガネを探してしまう、あの「ブレインフォグ（頭のもや）」も、しょっちゅう話題にのぼります。
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            でも、ワイングラスを片手に、こっそり教えてくれる人はいませんでした。「ねえ、ところで——下のほうもちゃんと使っておかないと、クリトリスって、ほんとに縮んでいっちゃうのよ」なんて。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            これは<strong>クリトリス萎縮</strong>と呼ばれるもの。北米閉経学会によれば、閉経後の女性の最大50%が経験するGSM（閉経関連尿路生殖器症候群）の、ひとつの症状です。
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">「届かない」もどかしさ</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              取材した多くの女性にとって、それは単なる乾燥ではありませんでした。むしろ<strong>感覚が消えていく</strong>こと。あるテスターは、30代のころに使っていた古いバイブレーターをひさしぶりに手に取ったときのことを、こう話してくれました。「気持ちいいどころか、ただ……もどかしいというか、なんだか麻痺したみたいで。タコをくすぐろうとしているような感じでした」
            </p>
            <p className="text-gray-700 leading-relaxed">
              専門家いわく、これまでのバイブレーターは摩擦と振動で働きかけるしくみ。エストロゲンが減って組織が薄くなっていると、ダイレクトな振動はかえって<em>神経をさらに鈍らせて</em>しまい、あの「麻痺したような」感覚につながることがあるそうです。
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">「振動ではなく、これからは吸引を」</p>
            <p className="text-gray-700">— 骨盤底筋の専門家</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            更年期ケアにくわしい婦人科医は、こう教えてくれました。「エストロゲンが減ると、骨盤まわりへの血のめぐりが落ちます。すると組織が薄くなり、弾力が失われ、感覚も鈍くなっていく。医学の世界では『使わなければ失う（use it or lose it）』と言われていて、組織の健康を保つには、めぐりを絶やさないことが大切なんです」
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ここで、Hello Nancy の Lem の出番です</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            そこで登場するのが、この小さな黄色いアイテム。Hello Nancy の Lem は、いわゆる大人のおもちゃとして売られているわけではありません。あくまでウェルネスアイテム。取材を重ねるうちに、その意味がよくわかりました。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            摩擦で働きかけるこれまでのバイブレーター（薄くなった更年期の組織には刺激になりがちです）とちがって、Lem が使うのは<strong>エア・パルス技術</strong>。サンドペーパーで肌をこするのと、やさしい真空マッサージにそっと包まれるのと——その違いを思い浮かべてみてください。
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">エア・パルス技術が心地よい、その理由</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ これまでのバイブレーター</p>
              <p className="text-red-700 text-sm">表面の摩擦に頼るぶん、敏感で薄くなった組織には刺激になりがち。麻痺や、ごく小さな傷につながることもあります。</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ エア・パルス技術</p>
              <p className="text-green-700 text-sm">じかに触れずに、やわらかな吸引の波をつくります。酸素をたっぷり含んだ血液を組織へ呼びこんで、健やかさと感覚を引き出します。</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            しくみは、こうです。Lem はクリトリスのまわりにふんわりと密着し、空気の波でやさしく刺激します。オーラルセックスのような感覚を思わせながら、むらがなく、途中で疲れてしまうこともありません。こすらないから、刺激はほとんどゼロ。
          </p>
          <p className="text-gray-700 leading-relaxed">
            でも、本当のすごさは物理のしくみにあります。やわらかな吸引が真空のような効果を生み、酸素をたっぷり含んだ血液を、奥のほうまでぐっと呼びこむ。何年も眠っていた神経を、そっと目覚めさせてくれるのです。
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              「オーガズムを、そのまますくい上げてくれるみたいで……脈打つような感覚が、ずっと長く続くんです」
            </p>
            <p className="font-semibold text-gray-700">— アリシャさん、ベータテスター（検証済みのレビューより）</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">編集部が比べてみました</h2>
          <p className="text-center text-gray-600 mb-8">更年期の組織の健康を支える従来の方法と、Lem を並べて見比べてみます</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">くらべるポイント</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Hello Nancy の Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">これまでのバイブレーター</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">エストロゲンクリーム</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">敏感な組織にも使える</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 使えます</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 刺激になることも</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 効きはゆっくり</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">血のめぐりを促す</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 奥の組織まで</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 表面だけ</td>
                  <td className="border border-gray-300 p-4 text-center">✅ じわじわと</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">摩擦や刺激がない</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 接触ゼロ</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 摩擦あり</td>
                  <td className="border border-gray-300 p-4 text-center">✅ ありません</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">すぐに心地よさを感じる</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ すぐに</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 人それぞれ</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 感じにくい</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">目立たないデザイン</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ レモンみたい</td>
                  <td className="border border-gray-300 p-4 text-center">❌ ひと目でわかる</td>
                  <td className="border border-gray-300 p-4 text-center">✅ さりげない</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">医師がすすめている</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ めぐりのために</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ ときどき</td>
                  <td className="border border-gray-300 p-4 text-center">✅ すすめます</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">価格</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">14,700円（買い切り）</td>
                  <td className="border border-gray-300 p-4 text-center">5,000〜15,000円</td>
                  <td className="border border-gray-300 p-4 text-center">月々3,000〜5,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">「隠さなくていい」というデザインの発想</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            試してみて編集部が感心したことのひとつが、<em>あえて</em>目立たないようにつくられていること。明るい黄色で、手のひらにすっと収まって、本当に飾りのレモンにしか見えないのです。
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">「ベッドサイドに置けるか」テスト</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="ベッドサイドにさりげなく置かれた Lem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              誰にでも、あの引き出しがありますよね。いわゆる「見られたくない引き出し」。古い靴下の下に、ちょっと目を背けたくなるプラスチックのアイテムをしまっておく、あの場所です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              あるテスターが、こんな話をしてくれました。「義母が遊びに来たとき、うっかり Lem を洗面台に置きっぱなしにしてしまって。手に取ってこう言ったんです。『あら、これ新しい音波洗顔ブラシ？ ずいぶんやわらかいのねえ』って」
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              「ベッドサイドに置けるか」テスト、合格です。大人のおもちゃというより、上質なセルフケアの道具に見える。だって、まさにその通りなのですから。
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ 安価な模倣品には、どうかご注意を</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              最初のレビューを公開したあと、読者の方から「Amazon の2,000円のものではダメなの？」という声をいただきました。専門家の答えを、ご紹介します。
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              「安価なアイテムは、多孔質のゼリーやTPE素材を使っていることが多いんです」と、彼女は注意をうながします。「目に見えない孔に雑菌が入りこんでしまう。もともと尿路感染症になりやすい更年期の女性にとっては、見過ごせないリスクです」
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello Nancy の Lem は、100%医療グレードの非多孔質シリコン。2,000円を浮かせるために、からだの健康を危険にさらすことはありません。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">ささやくほど静か</h3>
                <p className="text-gray-600 text-sm">
                  まわりを気にせず使える、超静音モーター
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">防水（IPX7）</h3>
                <p className="text-gray-600 text-sm">
                  お風呂やシャワーでも、心おきなく
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">医療グレードのシリコン</h3>
                <p className="text-gray-600 text-sm">
                  肌にやさしく、非多孔質。お手入れも簡単
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">マグネット充電</h3>
                <p className="text-gray-600 text-sm">
                  1回の充電で、120分使えます
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">フォトギャラリー</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">開けた瞬間が、いちばん大事</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Lem を開けるところ"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                テスターが、まず最初に気づいたこと。それは、パッケージが<em>とても上品</em>だということでした。派手な色も、見て恥ずかしくなるような写真もありません。白を基調にしたミニマルな箱に、控えめなゴールドのアクセント。上質なスキンケアと見まちがえても、おかしくないほどです。
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">箱の中身は</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lem 本体（ブライトイエロー、手のひらサイズ）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>マグネット式 USB 充電ケーブル</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>やわらかなベルベットの収納ポーチ（旅のおともに）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>使い方のコツと、ウェルネスのヒントをまとめた「セルフラブ・ブック」</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>イラスト付きの、はじめてガイド</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                「箱を開けたとき、ぜんぶがこんなに<strong>上質</strong>なんだ、って本当に驚きました。『大人のおもちゃ』というより、自分のウェルネスへのちょっとした投資みたいで」 — テストユーザー、54歳
              </p>
            </div>
          </div>
        </div>

        {/* Science Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">からだの話。クリトリスへの刺激が、なぜ大切なのか</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="/anatomy_JP.png"
              alt="クリトリスのしくみを示した断面図"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">心地よさの、しくみ</h3>
                <p className="text-gray-600 text-sm">すべての女性に、自分のからだについて知っておいてほしいこと</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                保健の授業では教わらないことですが、クリトリスには約<strong>8,000本の神経の末端</strong>が集まっています。これは、男女を問わず、からだのどの部分よりも多い数。ちなみに、ペニスは約4,000本ほどなのだそうです。
              </p>
              <p>
                でも、大切なのはここから。『Journal of Sex & Marital Therapy』に載った研究によると、<strong>女性のおよそ75%は、挿入だけではオーガズムに届きにくい</strong>のだとか。やっぱり、鍵を握るのはクリトリスなのです。
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">更年期に、起きていること</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="/bloodflow_JP.png"
                    alt="更年期の前と後で、血のめぐりを見くらべた図"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ 起こりやすいこと</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• エストロゲンが90%も減ってしまう</li>
                      <li>• 骨盤まわりの血のめぐりが落ちる</li>
                      <li>• クリトリスの組織が20〜30%縮むことも</li>
                      <li>• 神経の感度が鈍くなる</li>
                      <li>• 自然なうるおいが減っていく</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ できること</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 続けて刺激することで、めぐりをキープ</li>
                      <li>• 神経の通り道を呼びさます</li>
                      <li>• 組織の萎縮を防ぐ</li>
                      <li>• 感度を保つ</li>
                      <li>• 自然なうるおいを引き出す</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                婦人科医は、ストレートにこう言います。「骨盤底筋のトレーニングと同じだと思ってください。筋肉だって、使わずにめぐりを保たなければ衰えていく。クリトリスの組織にも、まったく同じことが言えるんです」
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 つまり</p>
                <p className="text-gray-700">
                  クリトリスを定期的に刺激することは、心地よさのためだけではありません（もちろん、それも素敵なおまけですが）。組織を健やかに保ち、神経のはたらきを守り、放っておくと戻りにくくなる変化を防ぐこと。いわば、<em>未来の自分のためのケア</em>なのです。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">「でも、パートナーはどう思うかしら」——編集部も、そう思いました</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">「3分の奇跡」。そして、パートナーまでうれしくなる理由</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              正直に言いますね。50代を過ぎた多くの女性にとって、絶頂までに20分以上かかることは珍しくありません（しかも、けっこうな集中力が要ります）。それが、Lem を使うと——<strong className="text-[#FF1493]">たったの3分。</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>女性がいちばん気にすること</strong>「パートナーが、自分はもう要らないと感じてしまわないかしら？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>そんなこと、まったくありません。</strong>Lem はとても小さいので、多くのカップルが行為の<em>さなか</em>に使っています。ふたりをつなぐ「橋わたし」になってくれて、しっかり高まり、自然にうるおうのを助けてくれる。パートナーの「うまくやらなきゃ」というプレッシャーも、そっとほどいてくれます。
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                あるテスターは、こう話してくれました。「寝室が、不安な場所から、また楽しい場所に戻ったんです」
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                取材のなかで、いちばん多く寄せられた質問のひとつが、これでした。<em>「パートナーが、引け目を感じたりしないかしら？」</em>
              </p>
              <p>
                わかったのは、こういうことです。<strong>Lem は、代わりではなく、ふたりの時間をもっと豊かにしてくれるもの。</strong>話を聞いた多くのカップルが、Lem を親密なひとときに取り入れたことで、むしろつながりが<em>深まった</em>と教えてくれました。
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  「夫はむしろ興味しんしんで、引け目なんて全然。今では前戯のときに、彼が使ってくれるんです。彼は『うまくやらなきゃ』というプレッシャーから解放されて、わたしは欲しいものが手に入る。お互いにうれしい、ですね」
                </p>
                <p className="font-semibold text-gray-700">— ヴァレリアさん、55歳、結婚28年目</p>
              </div>
              <p>
                コンパクトなサイズだから、じゃまにならず、ふたりの時間にもすっとなじみます。いちど位置を決めれば手を使わずに済むので、おたがいに集中できるのもうれしいところ。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">ふたりで楽しむ、Lem の使い方</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">前戯のときに</p>
                    <p className="text-sm text-gray-600">キスや愛撫を交わしながら、パートナーにそっと持ってもらいます</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">行為のさなかに</p>
                    <p className="text-sm text-gray-600">クリトリスへの刺激と、挿入の感覚を同時に味わえる位置に添えて</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">パートナーに見守られながら、ひとりで</p>
                    <p className="text-sm text-gray-600">親密さがぐっと深まり、何が心地いいかをふたりで知るきっかけにも</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">あいだの時期の「お手入れ」に</p>
                    <p className="text-sm text-gray-600">ふたりの時間が少ない時期も、ひとりで使えば組織を健やかに保てます</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg border border-[#FF1493]/20">
                <p className="text-sm text-gray-700">
                  <strong>ちょっとしたコツ</strong>大切なのは、やっぱり会話。プレッシャーを減らして心地よさを高める、<em>ふたりのための</em>ウェルネスアイテムとして、そっと提案してみてください。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">試す理由はたくさん、心配する理由はゼロ</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Hello Nancy の保証を、編集部でくわしく調べました。その中身を、ご紹介します。</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30日間の「心地よさ保証」</h3>
                <p className="text-sm text-gray-700 text-center">
                  もし満足できなかったら、<strong>全額返金</strong>します。返品も要りません。正直な声を信じてくれている——それくらい、自信があるということです。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  つまり、お金のリスクはゼロ。まずは1ヶ月、試してみてください。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12ヶ月保証</h3>
                <p className="text-sm text-gray-700 text-center">
                  最初の1年のあいだに不具合が起きたら、無料で交換します。こまかい質問もなしで。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  つまり、使い捨てのガジェットではありません。長く付き合えるよう、つくられています。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">ずっと続くサポート</h3>
                <p className="text-sm text-gray-700 text-center">
                  使い方に迷ったときも、お手入れが心配なときも。カスタマーケアチームが、24時間以内にお返事します。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  つまり、ただアイテムを買うだけではありません。あたたかなコミュニティに加わるということです。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">いちばん大事な問い。失うものは、ありますか？</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                科学的な根拠も、レビューも、保証も、ぜんぶお伝えしました。今いちばんのリスクは——試さ<em>ない</em>こと、なのかもしれません。
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">ちょっと、くらべてみましょう</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">試してみたら</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ 失くしたと思っていた心地よさに、もう一度出会えるかも</li>
                      <li>✓ 組織が健やかになり、萎縮を防げるかも</li>
                      <li>✓ よく眠れるようになるかも（オーガズムでオキシトシンが出ます）</li>
                      <li>✓ もし合わなくても、14,700円は戻ってきます</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">試さなかったら</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 組織の萎縮は、そのまま進んでいく</li>
                      <li>• 神経の感度も、少しずつ鈍っていく</li>
                      <li>• 性のウェルネスは、悩みの種のまま</li>
                      <li>• 「あのとき試していたら……」と、ずっと思い続けることに</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hello Nancy が信頼される、わけ</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            編集部は、かんたんにはおすすめしません。Hello Nancy が、わたしたちの基準をクリアした理由をお伝えします。
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">受賞歴も</h3>
              <p className="text-sm text-gray-600">国際ウェルネス研究所による「2025年 女性ウェルネステック賞」を受賞</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">確かなレビュー</h3>
              <p className="text-sm text-gray-600">購入が確認できた14,907件の声で、平均4.7★（サクラはいません）</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100万個を突破</h3>
              <p className="text-sm text-gray-600">2023年の発売から、世界じゅうで100万個以上が選ばれています</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">医療グレード</h3>
              <p className="text-sm text-gray-600">医療グレードのシリコンを使用し、厳しい安全試験もクリア</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">メディア掲載</h3>
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
            使った方からの、本音の声
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 5点満点中4.7点（購入が確認できた14,907件のレビュー）</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「エストロゲンクリームより、ずっといい」</p>
                <p className="text-gray-700 italic">
                  「『楽しみ』のために買ったわけじゃないんです。お医者さんに、めぐりが大事だと言われて。でも、これがすごくて。すっと力が抜けるおかげで、汗だくで目覚めることもなく、朝までぐっすり。わたしの新しいビタミン剤、ですね」
                </p>
                <p className="font-semibold text-gray-900">— サラ J. さん、58歳</p>
                <p className="text-xs text-gray-500">✓ 購入確認済み</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「もっと早く出会いたかった」</p>
                <p className="text-gray-700 italic">
                  「前に Lelo Sona を試したんですが、わたしには強すぎて。Lem は敏感なところにもじゅうぶんやさしいのに、ちゃんと届く深さがあるんです。文句なしの満点です」
                </p>
                <p className="font-semibold text-gray-900">— カーリーさん、購入確認済み</p>
                <p className="text-xs text-gray-500">✓ 購入確認済み</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「もう夢中です」</p>
                <p className="text-gray-700 italic">
                  「すっかり夢中です。Lem の吸い付くような感覚が、もう最高で。達するときには、オーガズムをそのまますくい上げてくれるみたいで、脈打つ感覚がずっと長く続くんです。本当に、すごくいい」
                </p>
                <p className="font-semibold text-gray-900">— アリシャさん、ベータテスター</p>
                <p className="text-xs text-gray-500">✓ 購入確認済み</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「これまでの常識が変わりました」</p>
                <p className="text-gray-700 italic">
                  「デリケートなアイテムには、さりげなさを求めるタイプ。そんなわたしにとって、これ以上ない選びでした。吸引の感覚は、これまで試したどれとも、まるで違います」
                </p>
                <p className="font-semibold text-gray-900">— マキシンさん、購入確認済み</p>
                <p className="text-xs text-gray-500">✓ 購入確認済み</p>
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
              編集部の結論。自分に投資する価値があります
            </h2>
            <p className="text-center text-xl text-gray-600">
              じっくり試して、しっかり調べたうえで。編集部は、更年期にからだの変化を感じている女性に、Hello Nancy の Lem を心からおすすめします。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">¥11,600 OFF</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ 期間限定・読者だけの特別価格 ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">終了まで</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem クリトリスマッサージャー</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">¥14,700</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">¥26,300</span>
                      <span className="text-sm text-green-600 font-bold">¥11,600 お得（44% OFF）</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">税込価格</p>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      1年間使うとしたら、<strong className="text-2xl text-[#FF1493]">1日あたり、たったの40円</strong>
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      毎日のコーヒーより、ずっと手ごろ。しかも、何年も使えます。
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 読者の方へ：お会計のとき、コード <span className="font-bold text-[#FF1493]">TIFFANY</span> または <span className="font-bold text-[#FF1493]">ISABELLA</span> を入れると、うれしいサプライズが。</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem クリトリスマッサージャー（ブライトイエロー）</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">セルフラブ・ブック＆使い方ガイド</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">マグネット充電ケーブル</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">ベルベットのトラベルポーチ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">送料無料</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30日間の「心地よさ保証」</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12ヶ月保証</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/en-jp/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    今すぐ購入 ¥14,700（¥11,600 OFF）
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    安心の返金保証
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30日間の返金保証つき。もし合わなければ、全額お返しします——<strong>返品も要りません</strong>。
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>中身のわからない梱包</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>24時間以内に発送</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>安心のお支払い</span>
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
            Lem は、わたしに合うかしら？
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            50代を過ぎた何千人もの女性が「合っていた」と答えています。あてはまるものがないか、そっとチェックしてみてください。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 こんな方に、Lem はおすすめです</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>膣の乾燥や、性交時の痛みに悩んでいる</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>感覚が鈍くなった、オーガズムに届きにくいと感じている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>クリトリスの萎縮や、組織が薄くなることに向き合っている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>これまでのバイブレーターは、強すぎる・刺激が強いと感じる</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>年齢を重ねても、組織の健やかさを保ちたい</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>目立たないウェルネスアイテムを探している（いかにもな「おもちゃ」ではなく）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>性のウェルネスと、自分への自信を取り戻したい</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 とくに気に入っていただけそうな方</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>小手先の工夫より、<strong>科学に裏打ちされたウェルネス</strong>を大切にしたい</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>その場しのぎではなく、<strong>これからのためのケア</strong>を求めている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>大人のからだに合わない</strong>アイテムには、もう疲れてしまった</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>プライバシーに配慮した、<strong>気の利いたデザイン</strong>が好き</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>自分への投資</strong>を、ためらわない（1年で、1日たったの40円）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>副作用や処方箋なしで、<strong>ちゃんとした手ごたえ</strong>がほしい</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>「もう歳だから」</strong>と、あきらめるのはやめたい</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>もし3つでも当てはまったなら、</strong>Lem は、まさにあなたのために生まれたアイテムです。
              </p>
              <a 
                href="https://hellonancy.com/en-jp/products/lem" 
                 
                
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
                  はい、わたしのことです。今すぐ購入
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
            よくあるご質問
          </h2>
          <p className="text-center text-gray-600 mb-12">読者のみなさまが気になることを、Hello Nancy に直接たずねてみました</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">敏感だったり萎縮があったりすると、痛くないですか？</h3>
                <p className="text-gray-700">
                  痛みは、まずありません。じかに触れる振動ではなく、空気の吸引を使うので、痛みのもとになる摩擦を避けられるんです。12段階のうち、いちばん弱い設定からスタートして、少しずつ強めていけます。デリケートな組織にやさしく届くよう、丁寧に設計されています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">梱包で、中身がわかってしまいませんか？</h3>
                <p className="text-gray-700">
                  ご心配いりません。ロゴのない、無地の茶色い箱でお届けします。差出人は「Care & Bloom Ltd.」とだけ。プライバシーは、しっかり守られます。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">もし気に入らなかったら、どうなりますか？</h3>
                <p className="text-gray-700">
                  Hello Nancy には、30日間の満足保証があります。もし合わなかったら、特別に全額返金——<strong>返品も要りません</strong>。自分のからだに合うものを、きっと見つけられる。そう信じてくれているからです。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">シャワーやお風呂でも使えますか？</h3>
                <p className="text-gray-700">
                  はい、使えます。IPX7 の防水認証つきで、水にすっかり沈めても大丈夫。あたたかいお湯のなかだと、より深くリラックスできて感覚も高まる、という声をたくさんいただいています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">音は、うるさくありませんか？</h3>
                <p className="text-gray-700">
                  ささやくほど静かです。超静音モーターのおかげで、隣の部屋に人がいても、聞かれる心配なく使えます。
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
              編集部からの、最後の言葉
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                数週間にわたる取材、専門家への相談、そして使った方へのインタビュー。それらを重ねて、編集部はこう確信しています。Hello Nancy の Lem は、あまりにも長いあいだ見過ごされてきた、本当のからだの悩みに応えてくれる、と。
              </p>
              <p>
                これは、見栄や気晴らしのためではありません。組織を健やかに保ち、眠りの質を整え、更年期が奪っていこうとする「自分らしさ」を、もういちど取り戻すため。そのためのアイテムです。
              </p>
              <p className="text-xl font-bold">
                GSM の症状に悩む方、これまでの方法ではうまくいかなかった方、あるいは年齢を重ねても性のウェルネスを大切にしたい方へ。Lem は、じっくり検討する価値があります。
              </p>
              <p className="text-sm italic">
                — ジェシカ・マルティネス、シニア・ウェルネス・エディター
              </p>
            </div>
            <div className="text-center pt-6">
              <a 
                href="https://hellonancy.com/en-jp/products/lem" 
                 
                
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
                Nancy's Lem を購入する ¥14,700
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30日間保証 ✓ 送料無料 ✓ 中身のわからない梱包</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">アフィリエイトについて</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider は、読者のみなさまに支えられています。当サイトのリンクからご購入いただくと、みなさまの負担を増やすことなく、アフィリエイト報酬をいただくことがあります。そのおかげで、無料の取材にもとづいた記事をお届けし続けられるのです。ご紹介するのは、編集部がじっくり検証し、読者のみなさまの役に立つと確信したアイテムだけ。記事で述べている意見は、すべて編集部自身のものであり、報酬によって左右されることはありません。
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">わたしたちについて</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider は、いまを生きる女性のために、科学にもとづいたヘルス＆ウェルネスの記事をお届けしています。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">カテゴリー</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>ヘルス</li>
                  <li>ウェルネス</li>
                  <li>性と、パートナーシップ</li>
                  <li>レビュー</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Nancy's Lem について</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>製品の詳細</li>
                  <li>お客さまの声</li>
                  <li>配送と返品</li>
                  <li>お問い合わせ：care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">安心と、安全</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ 医療グレードの素材</li>
                  <li>✓ 中身のわからない配送</li>
                  <li>✓ 30日間保証</li>
                  <li>✓ 12ヶ月保証</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. All rights reserved. 記事は独立した立場で、公正に制作しています。</p>
              <p className="mt-2">特集アイテム：Nancy's Lem by Hello Nancy ・ 2025年 女性ウェルネステック賞 受賞</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
