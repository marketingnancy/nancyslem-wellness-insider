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
    { src: "/PDP.jpg", alt: "NancyのLemウェルネスデバイス" },
    { src: "/PDP-1.jpg", alt: "ライフスタイルシーンの中のLem" },
    { src: "/PDP-2.jpg", alt: "Lemのデザインのクローズアップ" },
    { src: "/PDP-3.jpg", alt: "Lemの製品詳細" },
    { src: "/PDP-4_JP.png", alt: "Lemの使用イメージ" },
    { src: "/PDP-5.jpg", alt: "Lemのパッケージと付属品" },
    { src: "/PDP-6_JP.png", alt: "Lemのライフスタイルイメージ" },
    { src: "/PDP-7_JP.png", alt: "Lemの製品特長" },
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
              <p className="text-xs text-gray-500 font-medium">信頼できる女性の健康情報</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7 (14,907件のレビュー) • 100万個突破</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">¥13,500</span>
                  <span className="text-sm line-through text-white/70">¥23,700</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">¥10,200 OFF</span>
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
            100万回以上のオーガズム：なぜ50代以上の女性がバイブレーターをやめて、この「レモン」を選ぶのか
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            50代以上の何千人もの女性が、従来のバイブレーターから、レモンのような形をしたこの「フィジオセラピー（理学療法）」デバイスに乗り換えている理由を調査しました。その結果をご報告します。
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">ジェシカ・マルティネス著</p>
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
              <span className="font-bold text-gray-900 mr-1">編集部注：</span>
              この記事にはアフィリエイトリンクが含まれています。リンク経由での購入により手数料を受け取る場合がありますが、追加費用はかかりません。徹底的に調査・テストした製品のみを推奨しています。
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img 
          src="/PDP.jpg" 
          alt="ナイトスタンドに置かれたNancyのLemウェルネスデバイス"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">NancyのLemはナイトスタンドに置いても目立ちません。ほとんどの人は装飾用のレモンだと思うでしょう。写真：Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>現在<strong className="text-gray-900">{visitorCount.toLocaleString()}</strong>人がこの記事を読んでいます</span>
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
              <p className="font-medium text-gray-900">30日間満足保証</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">なぜ今、話題なのか</h2>
          <p className="text-gray-700 leading-relaxed">
            「レモン型のウェルネスデバイス」が更年期コミュニティで旋風を巻き起こしていると聞いたとき、正直に言うと、私たち編集部は懐疑的でした。しかし、何十人もの女性へのインタビュー、婦人科医への相談、そして実際に自分たちでテストを行った結果、その理由がわかりました。
          </p>
          <p className="text-gray-700 leading-relaxed">
            これは単なるウェルネスの流行ではありません。何百万人もの女性が影響を受けているにもかかわらず、ほとんど議論されることのない現実的な医学的問題、すなわち<strong>クリトリスの萎縮</strong>と更年期における性的ウェルネスの喪失に取り組んでいるのです。
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">誰も教えてくれなかった更年期のこと</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            午前3時に汗だくで目覚めるホットフラッシュについてはよく耳にします。メガネをかけたままメガネを探してしまうようなブレインフォグ（脳の霧）についても聞きます。
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            しかし、誰もワイングラスを片手にささやいてはくれませんでした。「ねえ、ところで、下のほうも活発にしておかないと、クリトリスが文字通り縮んでしまうかもしれないわよ」と。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            これは<strong>クリトリス萎縮</strong>と呼ばれ、北米閉経学会によると、閉経後女性の最大50%が影響を受けるGSM（閉経関連尿路生殖器症候群）の一部です。
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">「大きな断絶」</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              インタビューした多くの女性にとって、それは単なる乾燥ではありませんでした。それは<strong>麻痺</strong>でした。あるテスターは、30代の頃に使っていた古いバイブレーターを使おうとした時のことをこう表現しました。「気持ちいいどころか、ただ...イライラするような、あるいは麻痺したような感じでした。タコをくすぐろうとしているような。」
            </p>
            <p className="text-gray-700 leading-relaxed">
              医療専門家は、従来のバイブレーターは摩擦と衝撃によって機能すると説明しています。エストロゲン不足で組織が薄くなっている場合、直接的な振動は実際に<em>神経をさらに鈍感にさせ</em>、その「麻痺」した感覚につながる可能性があります。
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">「振動はやめて、吸引を始めましょう。」</p>
            <p className="text-gray-700">— 骨盤底筋専門家</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            更年期ケアを専門とする婦人科医はこう説明します。「エストロゲンが減少すると、骨盤領域への血流が減少します。これにより、組織の菲薄化、弾力性の喪失、感覚の低下が起こります。医学界ではこれを『使わなければ失う（use it or lose it）』原則と呼んでいます。組織の健康を維持するには、継続的な血流が必要です。」
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">NancyのLemの登場</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            そこで、この小さな黄色いデバイスの出番です。NancyのLemは大人のおもちゃとして販売されているわけではありません。ウェルネスデバイスとして位置付けられています。そして調査の結果、その理由がわかりました。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            摩擦に頼る従来のバイブレーター（薄くなった更年期の組織を刺激する可能性があります）とは異なり、Lemは<strong>エアパルス技術</strong>と呼ばれるものを使用しています。サンドペーパーで肌をこするのと、優しい真空マッサージを使うのとの違いのようなものだと考えてください。
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">科学的根拠：なぜエアパルス技術が効果的なのか</h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ 従来のバイブレーター：</p>
              <p className="text-red-700 text-sm">表面の摩擦に頼るため、敏感で薄くなった組織を刺激する可能性があります。麻痺や微細な裂傷を引き起こす可能性があります。</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ エアパルス技術：</p>
              <p className="text-green-700 text-sm">直接接触することなく、穏やかな吸引波を作り出します。酸素を豊富に含んだ血液を組織に引き込み、健康と感覚を促進します。</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            仕組みはこうです：Lemはクリトリスの周りに穏やかなシールを作り、空気圧の波を使って刺激します。オーラルセックスの感覚を模倣していますが、一貫性があり、疲れることがありません。こすらないので、刺激はゼロです。
          </p>
          <p className="text-gray-700 leading-relaxed">
            しかし、本当の魔法は物理学にあります。その穏やかな吸引が真空効果を生み出し、物理的に深く、酸素を豊富に含んだ血液を組織に引き込みます。何年も休眠していた神経を目覚めさせるのです。
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              「オーガズムをそのまま引き出してくれるような感じで...脈打つ感覚がずっと長く続きます。」
            </p>
            <p className="font-semibold text-gray-700">— アリシャ、ベータテスター（検証済みカスタマーレビューより）</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">比較結果：私たちの評価</h2>
          <p className="text-center text-gray-600 mb-8">Lemと更年期の組織の健康のための従来の解決策を比較しました</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">特徴</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">NancyのLem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">従来のバイブレーター</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">エストロゲンクリーム</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">敏感な組織に使える</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ はい</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 刺激になる可能性</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 効果が遅い</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">血流を増加させる</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 深部組織</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 表面のみ</td>
                  <td className="border border-gray-300 p-4 text-center">✅ 徐々に</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">摩擦/刺激がない</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 接触ゼロ</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 摩擦が生じる</td>
                  <td className="border border-gray-300 p-4 text-center">✅ はい</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">即時の快感</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 即時</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 個人差あり</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 快感なし</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">目立たないデザイン</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ レモンのよう</td>
                  <td className="border border-gray-300 p-4 text-center">❌ あからさま</td>
                  <td className="border border-gray-300 p-4 text-center">✅ はい</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">医師の推奨</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 血流のために</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 時々</td>
                  <td className="border border-gray-300 p-4 text-center">✅ はい</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">価格</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">¥13,500 (1回限り)</td>
                  <td className="border border-gray-300 p-4 text-center">¥5,000-15,000</td>
                  <td className="border border-gray-300 p-4 text-center">月額¥3,000-5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">「恥ずかしくない」デザイン哲学</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            テスト中に編集チームが感銘を受けたことの一つは、デザインが<em>意図的に</em>目立たないようになっていることです。明るい黄色で、手のひらに収まり、本当に装飾用のレモンのように見えます。
          </p>
          
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">「ナイトスタンド・テスト」</h3>
            
            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img 
                src="/discretion_illustration.png" 
                alt="ナイトスタンドにさりげなく置かれたLemデバイス"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              私たち全員に、あの引き出しがあります。「恥ずかしい引き出し」です。古い靴下の下に、見苦しい男根状のプラスチック製デバイスを隠している場所です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              テスターの一人がこんな話をしてくれました。「義母が遊びに来た時、うっかり洗面台にLemを置きっぱなしにしてしまったんです。彼女はそれを手に取って言いました。『あら、これ新しい音波洗顔ブラシ？ すごく柔らかいわね！』」
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              ナイトスタンド・テスト合格です。大人のおもちゃではなく、高級なセルフケア技術のように見えます。なぜなら、まさにその通りだからです。
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ 安価な模倣品にご注意ください</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              最初のレビューを公開した後、読者から「なぜAmazonの2,000円のバージョンを買ってはいけないのか」という質問がありました。医療専門家の意見はこちらです。
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              「安価なおもちゃは多孔質のゼリー/TPE素材を使用しています」と彼女は警告しました。「微細なバクテリアが気孔に閉じ込められ、すでに尿路感染症にかかりやすい更年期の女性にとって大きなリスクとなります。」
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello NancyのLemは100%医療グレードの非多孔質シリコンです。2,000円を節約するために健康を危険にさらさないでください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">ささやき声のように静か</h3>
                <p className="text-gray-600 text-sm">
                  完全なプライバシーのための超静音モーター
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">防水 (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  お風呂やシャワーでの使用に最適
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">医療グレードシリコン</h3>
                <p className="text-gray-600 text-sm">
                  身体に安全、非多孔質、お手入れ簡単
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">磁気充電</h3>
                <p className="text-gray-600 text-sm">
                  1回の充電で120分使用可能
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">製品ギャラリー</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">開封体験：第一印象が重要</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/PDP-5.jpg" 
                alt="Lemの開封体験"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                テスターが最初に気づいたことの一つは？ パッケージが<em>エレガント</em>だということです。派手な色も、恥ずかしい画像もありません。箱はミニマルな白に控えめなゴールドのアクセントがあり、高級スキンケア製品と間違えられてもおかしくありません。
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">箱の中身：</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lemデバイス（ブライトイエロー、手のひらサイズ）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>磁気USB充電ケーブル</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>ソフトベルベット製収納ポーチ（旅行に最適）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>使用上のヒントとウェルネスアドバイスが記載された「セルフラブマニュアル」</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>イラスト付きのクイックスタートガイド</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                「箱を開けたとき、すべてがどれほど<strong>プレミアム</strong>に感じられるかに本当に驚きました。『大人のおもちゃ』のようには感じられず、ウェルネスへの投資のように感じられました。」 — テストユーザー、54歳
              </p>
            </div>
          </div>
        </div>

        {/* Science Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">解剖学の話：なぜクリトリスの刺激が重要なのか</h2>
          
          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/anatomy_JP.png" 
              alt="クリトリスの解剖学的断面図"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">快感の科学</h3>
                <p className="text-gray-600 text-sm">すべての女性が自分の体について知っておくべきこと</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                保健の授業では教えてくれないことですが、クリトリスには約<strong>8,000個の神経終末</strong>があります。これは、男性、女性を問わず、人体の他のどの部分よりも多い数です。ちなみに、ペニスには約4,000個しかありません。
              </p>
              <p>
                しかし、ここからが重要です。『Journal of Sex & Marital Therapy』に掲載された研究によると、<strong>75%の女性は挿入だけではオーガズムに達することができません</strong>。クリトリスが鍵なのです。
              </p>
              
              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">更年期に起こること：</h4>
                
                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img 
                    src="/bloodflow_JP.png" 
                    alt="更年期前後の血流の比較"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ 問題点：</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• エストロゲンレベルが90%低下</li>
                      <li>• 骨盤内への血流が減少</li>
                      <li>• クリトリス組織が20〜30%縮小する可能性</li>
                      <li>• 神経の感度が低下</li>
                      <li>• 自然な潤滑が減少</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ 解決策：</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 定期的な刺激で血流を維持</li>
                      <li>• 神経経路を活性化</li>
                      <li>• 組織の萎縮を予防</li>
                      <li>• 感度を維持</li>
                      <li>• 自然な潤滑を促進</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                婦人科医は率直にこう言います。「骨盤底筋の運動のようなものだと考えてください。筋肉を使わず、血流を維持しなければ、筋肉は萎縮します。同じ原理がクリトリスの組織にも当てはまります。」
              </p>
              
              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 結論：</p>
                <p className="text-gray-700">
                  定期的なクリトリスの刺激は、単なる快感のためだけではありません（もちろん、それは素晴らしいおまけですが）。それは組織の健康を維持し、神経機能を保ち、放置することで起こる不可逆的な変化を防ぐことなのです。これは<em>予防医療</em>です。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">「でも、パートナーはどう思う？」私たちもそう思いました</h2>
          
          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">「3分間の奇跡」（そしてパートナーがそれを気に入る理由）</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              正直に言いましょう。50代以上の多くの女性にとって、絶頂に近づくまでに20分以上かかる（そして多くの精神的な集中力を要する）ことがあります。Lemを使えば？ <strong className="text-[#FF1493]">たったの3分です。</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>女性が抱く最大の懸念：</strong>「パートナーは自分が不要になったと感じるのでは？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>絶対にそんなことはありません。</strong> Lemはとても小さいです。多くのカップルが性行為<em>中</em>に使用しています。それは「架け橋」として機能し、あなたが十分に興奮し、自然に潤うことを確実にし、パートナーの「パフォーマンス」へのプレッシャーを取り除きます。
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                あるテスターはこう言いました。「寝室が不安な場所から、再び遊び場に変わりました。」
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                調査中に最も多く寄せられた質問の一つがこれです：<em>「パートナーはこれに脅威を感じないでしょうか？」</em>
              </p>
              <p>
                私たちが発見したことはこうです：<strong>Lemは代用品ではなく、強化品です。</strong> インタビューした多くのカップルが、Lemを親密な時間に取り入れることで、実際につながりが<em>深まった</em>と報告しています。
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  「夫は興味津々で、脅威には感じていませんでした。今では前戯の時に彼が私に使ってくれます。彼にとっては『パフォーマンス』のプレッシャーがなくなり、私は必要なものを得られます。ウィンウィンです。」
                </p>
                <p className="font-semibold text-gray-700">— ヴァレリア、55歳、結婚28年目</p>
              </div>
              <p>
                コンパクトなサイズなので、邪魔に感じることなくパートナーとの行為に取り入れやすいです。また、一度位置を決めればハンズフリーになるので、お互いに集中することができます。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">カップルでのLemの使い方：</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">前戯中に</p>
                    <p className="text-sm text-gray-600">キスや愛撫をしながら、パートナーがそれを保持します</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">性行為中に</p>
                    <p className="text-sm text-gray-600">クリトリスへの刺激と挿入の刺激を同時に得られる位置に配置します</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">パートナーが見ている前でのソロプレイ</p>
                    <p className="text-sm text-gray-600">親密さを高め、パートナーが何が効果的かを学ぶのに役立ちます</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">セッション間の「メンテナンス」</p>
                    <p className="text-sm text-gray-600">パートナーとの性行為が頻繁でない場合でも、ソロでの使用で組織の健康を保ちます</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg border border-[#FF1493]/20">
                <p className="text-sm text-gray-700">
                  <strong>プロのヒント：</strong> コミュニケーションが鍵です。プレッシャーを減らし、快感を高めることで、<em>二人にとって</em>メリットのあるウェルネスツールとして提案しましょう。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">試すべき理由はあっても、心配する理由はゼロ</h2>
          <p className="text-center text-xl text-gray-600 mb-8">Hello Nancyの保証について調査しました。その本当の意味をご紹介します。</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30日間「プレジャー保証」</h3>
                <p className="text-sm text-gray-700 text-center">
                  満足できませんでしたか？ <strong>全額返金</strong>いたします。返品の必要はありません。彼らはあなたの正直さを信頼しています。それほど自信があるのです。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  つまり：金銭的なリスクはゼロです。1ヶ月試してみてください。
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
                  最初の1年間にデバイスに不具合が生じた場合、交換いたします。無料です。質問は一切なし。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  つまり：これは使い捨てのガジェットではありません。長く使えるように作られています。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">生涯サポート</h3>
                <p className="text-sm text-gray-700 text-center">
                  使い方について質問がありますか？ お手入れについて心配ですか？ カスタマーケアチームが24時間以内に回答します。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  つまり：製品を買うだけではありません。コミュニティに参加するのです。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">本当の疑問：失うものはありますか？</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                科学的な根拠も説明しました。レビューもお見せしました。保証についても説明しました。現時点で唯一のリスクは、試さ<em>ない</em>ことです。
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">計算してみましょう：</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">試してみた場合：</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ 失われたと思っていた快感を再発見できるかも</li>
                      <li>✓ 組織の健康を改善し、萎縮を防げるかも</li>
                      <li>✓ よく眠れるようになるかも（オーガズムはオキシトシンを放出します）</li>
                      <li>✓ 最悪の場合：¥13,500が戻ってきます</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">試さない場合：</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 組織の萎縮が続く</li>
                      <li>• 神経の感度が低下し続ける</li>
                      <li>• 性的ウェルネスが悩みの種のまま</li>
                      <li>• 「もし試していたら？」とずっと考え続けることになる</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hello Nancyが信頼される理由</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            私たちは安易に製品を推奨しません。Hello Nancyが私たちの編集基準をクリアした理由はこちらです。
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">受賞歴あり</h3>
              <p className="text-sm text-gray-600">国際ウェルネス研究所による2025年女性ウェルネステック賞受賞</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">検証済みレビュー</h3>
              <p className="text-sm text-gray-600">14,907件の検証済み購入者による平均4.7★（サクラレビューではありません）</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100万個以上販売</h3>
              <p className="text-sm text-gray-600">2023年の発売以来、世界中で100万個以上を販売</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">医療グレード</h3>
              <p className="text-sm text-gray-600">医療グレードのシリコン、厳格な安全性試験</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">掲載メディア：</h3>
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
            検証済み購入者の声
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 5点満点中4.7点 (14,907件の検証済みレビュー)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「エストロゲンクリームより良い」</p>
                <p className="text-gray-700 italic">
                  「『楽しみ』のために買ったのではありません。医者に血流が必要だと言われたから買ったのです。でも、すごい。解放感のおかげで、汗だくで目覚めることなく一晩中眠れます。私の新しいビタミン剤です。」
                </p>
                <p className="font-semibold text-gray-900">- サラ J.、58歳</p>
                <p className="text-xs text-gray-500">✓ 検証済み購入</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「もっと早く知りたかった」</p>
                <p className="text-gray-700 italic">
                  「以前Lelo Sonaを試しましたが、私には強すぎました。Lemは私の敏感な部分にも十分優しいですが、実際に効果があるほど深いです。10点満点です。」
                </p>
                <p className="font-semibold text-gray-900">- カーリー、検証済み購入者</p>
                <p className="text-xs text-gray-500">✓ 検証済み購入</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「夢中です」</p>
                <p className="text-gray-700 italic">
                  「夢中です。Lemは最高にワイルドな方法で吸い付き、引っ張ってくれます。イくとき、オーガズムをそのまま引き出してくれるような感じで、脈打つ感覚がずっと長く続きます。すっごく良い！」
                </p>
                <p className="font-semibold text-gray-900">- アリシャ、ベータテスター</p>
                <p className="text-xs text-gray-500">✓ 検証済み購入</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「ゲームチェンジャー」</p>
                <p className="text-gray-700 italic">
                  「親密な製品には慎重さを求める私にとって、これ以上完璧な選択肢はありませんでした。吸引機能は、これまで試したどの製品とも違います。」
                </p>
                <p className="font-semibold text-gray-900">- マキシン、検証済み購入者</p>
                <p className="text-xs text-gray-500">✓ 検証済み購入</p>
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
              私たちの結論：投資する価値あり
            </h2>
            <p className="text-center text-xl text-gray-600">
              徹底的なテストと調査の結果、私たちの編集チームは、更年期の組織変化を経験している女性にNancyのLemを強く推奨します。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">¥10,200 OFF</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ 期間限定 読者限定オファー ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">オファー終了まで：</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem クリトリスマッサージャー</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">¥13,500</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">¥23,700</span>
                      <span className="text-sm text-green-600 font-bold">¥10,200 お得 (44% OFF)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">税込価格</p>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      1年間使用した場合、<strong className="text-2xl text-[#FF1493]">1日あたりわずか¥37</strong>
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      毎日のコーヒーよりも安いです。何年も使えます。
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 読者へのヒント：チェックアウト時にコード <span className="font-bold text-[#FF1493]">TIFFANY</span> または <span className="font-bold text-[#FF1493]">ISABELLA</span> を使用すると、さらにサプライズが！</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem クリトリスマッサージャー（ブライトイエロー）</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">セルフラブマニュアル＆使用ガイド</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">磁気充電ケーブル</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">ベルベット製トラベルポーチ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">送料無料</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30日間「プレジャー保証」</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12ヶ月保証</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/en-jp/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    今すぐ購入 - ¥13,500 (¥10,200 OFF)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    リスクフリー保証
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30日間返金保証。気に入らなければ全額返金いたします—<strong>返品は不要です</strong>。
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>中身のわからない梱包</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>24時間以内発送</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>安全な決済</span>
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
            Lemはあなたに合っていますか？
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            50代以上の何千人もの女性が「イエス」と答えています。これらに当てはまるかチェックしてみてください：
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 こんな方にLemはおすすめです：</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>膣の乾燥や性交痛に悩んでいる</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>感覚の鈍化やオーガズムに達しにくいと感じている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>クリトリスの萎縮や組織の菲薄化に対処している</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>従来のバイブレーターは強すぎたり刺激が強すぎると感じる</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>年齢を重ねても組織の健康を維持したい</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>目立たないウェルネスデバイスを探している（あからさまな「おもちゃ」ではないもの）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>性的ウェルネスと自信を取り戻したい</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 特にLemを気に入っていただける方：</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>ギミックよりも<strong>科学的根拠のあるウェルネス</strong>を重視する</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>単なる対症療法ではなく、<strong>予防ケア</strong>を求めている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>成熟した体に合わない</strong>製品にはうんざりしている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>プライバシーを尊重した<strong>思慮深いデザイン</strong>を評価する</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>自分への投資</strong>を惜しまない（1年間で1日わずか¥37！）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>副作用や処方箋なしで<strong>結果</strong>を求めている</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span><strong>「もう歳だから仕方ない」</strong>と諦めるのはやめたい</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>これらの中で3つでも当てはまるなら、</strong>Lemはあなたのために特別に設計されました。
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
                  はい、これは私のことです - 今すぐ購入
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
            よくある質問
          </h2>
          <p className="text-center text-gray-600 mb-12">読者の皆様が知りたい質問をHello Nancyにぶつけました</p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">敏感肌や萎縮がある場合、痛くないですか？</h3>
                <p className="text-gray-700">
                  全く痛くありません。直接接触する振動ではなく、空気吸引を使用するため、痛みの原因となる摩擦を避けることができます。12段階の設定のうち最も弱い設定から始めて、徐々に強めていくことができます。デリケートな組織に優しく作用するように特別に設計されています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">梱包は恥ずかしくないですか？</h3>
                <p className="text-gray-700">
                  全く心配ありません。ロゴのない無地の茶色の箱で発送されます。差出人は「Care & Bloom Ltd.」とのみ記載されています。完全なプライバシーが保証されています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">気に入らなかったらどうなりますか？</h3>
                <p className="text-gray-700">
                  Hello Nancyは30日間の満足保証を提供しています。気に入らない場合は、1回限りの特別返金を提供しています—<strong>返品は不要です</strong>。彼らはあなたが自分の体に合うものを見つけることを信頼しています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">シャワーやお風呂で使えますか？</h3>
                <p className="text-gray-700">
                  はい！ IPX7防水認定を受けており、完全に水没させても大丈夫です。多くのユーザーが、温かいお湯がリラックス効果と感覚を高めると感じています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">音はうるさいですか？</h3>
                <p className="text-gray-700">
                  ささやき声のように静かです。超静音モーターにより、隣の部屋にいても誰かに聞かれる心配なく使用できます。
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
              私たちの最終結論
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                数週間の調査、専門家への相談、ユーザーインタビューを経て、私たち編集チームは、NancyのLemがあまりにも長い間見過ごされてきた真の医療ニーズに応えていると確信しています。
              </p>
              <p>
                これは虚栄心や道楽のためではありません。組織の健康を維持し、睡眠の質を向上させ、更年期が奪おうとする自分の一部を取り戻すためのものです。
              </p>
              <p className="text-xl font-bold">
                GSMの症状を経験している方、従来の解決策に苦労している方、あるいは単に年齢を重ねても性的ウェルネスを維持したい方にとって、Lemは真剣に検討する価値があります。
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
                Nancy's Lemを購入する - ¥13,500
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
              <h3 className="font-bold text-lg mb-3">アフィリエイト開示</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insiderは読者の皆様に支えられています。当サイトのリンクを通じて購入された場合、追加費用なしでアフィリエイト報酬を得ることがあります。これにより、無料の調査に基づいたコンテンツを提供し続けることができます。私たちは編集部が徹底的に検証し、読者の皆様に有益であると確信した製品のみを推奨しています。表明されたすべての意見は私たち自身のものであり、報酬によって影響を受けることはありません。
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">私たちについて</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insiderは、現代女性のための科学的根拠に基づいたヘルス＆ウェルネスジャーナリズムを提供しています。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">カテゴリー</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>ヘルス</li>
                  <li>ウェルネス</li>
                  <li>セックス＆リレーションシップ</li>
                  <li>製品レビュー</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Nancy's Lemについて</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>製品詳細</li>
                  <li>カスタマーレビュー</li>
                  <li>配送＆返品</li>
                  <li>お問い合わせ：care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">信頼と安全性</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ 医療グレードの素材</li>
                  <li>✓ 中身のわからない配送</li>
                  <li>✓ 30日間保証</li>
                  <li>✓ 12ヶ月保証</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. All rights reserved. 編集コンテンツは独立しており、客観的です。</p>
              <p className="mt-2">特集製品：Nancy's Lem by Hello Nancy • 2025年女性ウェルネステック賞受賞</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
