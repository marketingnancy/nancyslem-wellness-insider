import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, X, Clock, TrendingUp, Award, Heart, Edit3 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeHK() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => { document.documentElement.lang = "zh-HK"; }, []);

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
    { src: "/PDP.jpg", alt: "Nancy's Lem 私密按摩器" },
    { src: "/PDP-1.jpg", alt: "Lem 融入日常生活場景" },
    { src: "/PDP-2.jpg", alt: "Lem 設計近鏡" },
    { src: "/PDP-3.jpg", alt: "Lem 產品細節" },
    { src: "/PDP-4.jpg", alt: "Lem 使用示範" },
    { src: "/PDP-5.jpg", alt: "Lem 包裝同配件" },
    { src: "/PDP-6.jpg", alt: "Lem 生活照" },
    { src: "/PDP-7.jpg", alt: "Lem 產品功能" },
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
              <p className="text-xs text-gray-500 font-medium">值得信賴嘅女性健康資訊</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#FF1493] text-white py-2 shadow-lg animate-in slide-in-from-top">
          <div className="container max-w-4xl px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">⭐ 4.7（14,907 個評價）• 賣出超過 100 萬件</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">HK$712</span>
                  <span className="text-sm line-through text-white/70">HK$1,271</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">慳HK$559</span>
                </div>
                {showTimer && (
                  <div className="flex items-center gap-1 text-xs mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>仲有 {formatTime(timeLeft)} 就完</span>
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
                  立即購買
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">健康與身心</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">產品評測</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            100 萬次高潮之後：點解 50 歲以上嘅女人放低咗震動器，轉用呢個「檸檬」
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            我哋查咗下，點解成千上萬 50 歲以上嘅女人放低用開嘅震動器，轉用呢個樣似檸檬嘅「物理治療」按摩器。以下就係我哋嘅發現。
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">作者：Jessica Martinez</p>
                <p className="text-xs sm:text-sm">資深身心健康編輯</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>最後更新：{new Date(Date.now() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('zh-HK', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="hidden sm:inline">•</span>
            <span>8 分鐘閱讀</span>
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
              <span className="font-bold text-gray-900 mr-1">編輯按：</span>
              呢篇文章含有聯盟連結。如果你透過呢啲連結購買，我哋或者會收到佣金，但你唔使俾多一蚊。我哋只會推介自己認真研究同試過嘅產品。
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img
          src="/PDP.jpg"
          alt="Nancy's Lem 私密按摩器放喺床頭櫃上"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Nancy's Lem 好低調咁放喺床頭櫃上——多數人都以為佢只係一個裝飾用嘅檸檬。相片：Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>而家有 <strong className="text-gray-900">{visitorCount.toLocaleString('zh-HK')}</strong> 位讀者正在睇緊呢篇文章</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">低調包裝</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">全球免運費</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30 日滿意保證</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12 個月保養</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">點解我哋要講呢樣嘢</h2>
          <p className="text-gray-700 leading-relaxed">
            我哋編輯部第一次聽到有一件「樣似檸檬嘅私密按摩器」喺更年期圈子掀起熱潮嗰陣，老實講——我哋係有啲懷疑嘅。但係訪問咗幾十位女士、請教過婦科醫生，仲有自己親身試過之後，我哋終於明白點解咁多人讚。
          </p>
          <p className="text-gray-700 leading-relaxed">
            呢個唔係又一個身心健康潮流咁簡單。佢正視咗一個影響緊幾百萬女人、但係好少人會拎出嚟講嘅真實醫學問題：<strong>陰蒂萎縮</strong>，同埋更年期期間慢慢流失嘅性愉悅。
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">冇人事先提醒過你嘅嗰場對話</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            潮熱我哋聽得多——凌晨 3 點熱到成身汗，連絲質床單都濕晒。腦霧我哋又聽得多——眼鏡明明戴緊喺塊面度，仲周圍揾。
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            但係從來冇人會請你飲杯紅酒，然後輕聲同你講：「呀，順帶一提，如果你下面唔保持活躍，你嘅陰蒂真係有可能會縮細。」
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            呢個叫做<strong>陰蒂萎縮</strong>，係更年期泌尿生殖系統症候群（GSM）嘅其中一部分——根據北美更年期學會嘅資料，多達 50% 嘅停經後女士都會受影響。
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">「最大嘅斷層」</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              對好多受訪嘅女士嚟講，問題唔淨止係乾澀，仲有嗰種<strong>麻木感</strong>。有位試用者形容佢攞返三十幾歲嗰陣用開嘅震動器出嚟用：「唔單止冇感覺，仲覺得……好煩躁。或者就係麻晒。好似想搔一笪起咗繭嘅皮咁，乜都冇。」
            </p>
            <p className="text-gray-700 leading-relaxed">
              醫學專家解釋，傳統震動器係靠摩擦同撞擊。當雌激素低咗、組織變薄嗰陣，直接嘅震動其實仲<em>會令神經更加遲鈍</em>，造成嗰種「麻木」嘅感覺。
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">「唔好再震。試吓吸啜。」</p>
            <p className="text-gray-700">——盆底專科</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            專攻更年期護理嘅婦科醫生咁解釋：「當雌激素下降，盆腔嘅血液循環就會減少。咁樣會令組織變薄、失去彈性、感覺都遲鈍咗。我哋醫學界叫呢個做『用得就保得住』嘅原則——你要有持續嘅血液循環，組織先至會保持健康。」
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">主角登場：Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            呢個就係呢件黃色小物件嘅用武之地。Nancy's Lem 並唔係當成情趣玩具嚟賣——佢定位係一件私密按摩器。經過我哋嘅研究之後，我哋明白點解佢會係咁。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            傳統震動器靠摩擦（可能會刺激到更年期變薄咗嘅組織），但係 Lem 用嘅係一種叫做<strong>氣流脈衝技術</strong>嘅嘢。你可以咁諗：一邊係攞砂紙喺皮膚上面磨，另一邊係一個溫柔嘅吸啜式按摩——個分別就係咁大。
          </p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">背後嘅原理：點解氣流脈衝技術有效</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ 傳統震動器：</p>
              <p className="text-red-700 text-sm">靠表面摩擦，可能刺激到敏感、變薄咗嘅組織，亦都可能造成麻木或者微細嘅損傷。</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ 氣流脈衝技術：</p>
              <p className="text-green-700 text-sm">製造出溫柔嘅吸啜波動，唔使直接接觸。將含氧豐富嘅血液帶入組織，有助保持健康同感覺。</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            原理係咁樣嘅：Lem 喺陰蒂周圍形成一個溫柔嘅密合，再用一波波嘅氣壓去刺激佢——模擬口交嗰種感覺，但係持續而且唔會攰。因為冇摩擦，所以完全唔會有刺激感。
          </p>
          <p className="text-gray-700 leading-relaxed">
            不過真正神奇嘅地方係物理原理：嗰種溫柔嘅吸啜會造成真空效應，將深層、含氧豐富嘅血液實實在在咁吸入組織，喚醒咗潛伏咗好多年嘅神經。
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              「感覺就好似將個高潮直接由身體入面抽出嚟……仲令嗰種一抽一抽嘅感覺維持得耐好多。」
            </p>
            <p className="font-semibold text-gray-700">——Alisha，Beta 試用者（來自已驗證嘅顧客評價）</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">點樣比併：我哋嘅比較</h2>
          <p className="text-center text-gray-600 mb-8">我哋將 Lem 同傳統方案，喺更年期組織健康方面做咗個比較</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">項目</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">傳統震動器</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">雌激素藥膏</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">適合敏感組織</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 適合</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 可能刺激</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 見效慢</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">促進血液循環</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 深層組織</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 只限表面</td>
                  <td className="border border-gray-300 p-4 text-center">✅ 逐漸見效</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">無摩擦、無刺激</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 零接觸</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 會有摩擦</td>
                  <td className="border border-gray-300 p-4 text-center">✅ 係</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">即時快感</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 即時</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 因人而異</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 無快感</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">低調設計</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 樣似檸檬</td>
                  <td className="border border-gray-300 p-4 text-center">❌ 一睇就知</td>
                  <td className="border border-gray-300 p-4 text-center">✅ 係</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">醫生推薦</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ 為咗血液循環</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ 間中</td>
                  <td className="border border-gray-300 p-4 text-center">✅ 係</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">價錢</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">HK$712（一次過）</td>
                  <td className="border border-gray-300 p-4 text-center">HK$400–1,200</td>
                  <td className="border border-gray-300 p-4 text-center">HK$240–400／月</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">「免於羞恥」嘅設計理念</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            我哋編輯部試用嗰陣有一樣嘢好深刻：佢嘅設計係<em>刻意</em>咁低調。鮮黃色、啱啱好揸喺手掌心，真係似足一個裝飾用嘅檸檬。
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">「床頭櫃測試」</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src="/discretion_illustration.png"
                alt="Lem 好低調咁放喺床頭櫃上"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              我哋人人都有嗰個櫃桶。嗰個<em>羞恥櫃桶</em>。我哋會將啲難睇、似條棍咁嘅塑膠物件，藏喺啲舊襪底下面。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              其中一位試用者同我哋分享過呢件事：「有次我唔記得咗將個 Lem 留咗喺浴室枱面，啱啱我家姑嚟探我。佢攞起佢就話：『咦，呢個係咪啲新出嘅聲波洗面儀呀？摸落好軟身喎！』」
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              佢通過咗床頭櫃測試。佢睇落似一件高級嘅自我護理科技產品，唔似情趣玩具。因為——佢正正就係咁。
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ 小心啲平價冒牌貨</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              我哋第一篇評測出咗之後，有讀者問點解唔好買 Amazon 上面 HK$150 嗰款。以下就係醫學專家嘅講法。
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              「平嘅玩具用嘅係多孔嘅啫喱／TPE 物料，」佢提醒，「微細嘅細菌會困喺啲孔入面，對本身已經容易有尿道感染嘅更年期女士嚟講，係一個好大嘅風險。」
            </p>
            <p className="text-red-900 font-bold mt-3">
              Hello Nancy 嘅 Lem 係 100% 醫用級、無孔矽膠。唔好為咗慳嗰一兩百蚊，去賭上自己嘅健康。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">靜到耳語咁</h3>
                <p className="text-gray-600 text-sm">
                  超靜音馬達，完全低調
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">防水（IPX7）</h3>
                <p className="text-gray-600 text-sm">
                  浸浴或者沖涼用都得
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">醫用級矽膠</h3>
                <p className="text-gray-600 text-sm">
                  親膚、無孔、易清潔
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">磁吸充電</h3>
                <p className="text-gray-600 text-sm">
                  充一次用 120 分鐘
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">產品相片集</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">開箱體驗：第一印象好重要</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/PDP-5.jpg"
                alt="Lem 開箱體驗"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                我哋啲試用者最先留意到嘅其中一樣嘢？個包裝好<em>優雅</em>。冇刺眼嘅顏色，冇令人尷尬嘅圖案。個盒係簡約嘅白色，配上細緻嘅金色點綴——好容易俾人當成一件高級護膚品。
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">盒入面有啲咩：</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Lem 按摩器（鮮黃色、手掌大小）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>磁吸 USB 充電線</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>柔軟絲絨收納袋（旅行啱晒）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>「愛自己手冊」，附使用貼士同身心健康建議</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>圖解快速入門指南</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                「我打開個盒嗰陣，真係意外咁覺得樣樣都咁<strong>高質</strong>。佢冇『情趣玩具』嗰種感覺——反而似一項身心健康嘅投資。」——試用者，54 歲
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">講吓身體結構：點解刺激陰蒂咁重要</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="陰蒂結構橫切面示意圖"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">快感背後嘅科學</h3>
                <p className="text-gray-600 text-sm">每個女人都應該了解嘅身體知識</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                有樣嘢健康教育堂從來冇教過你：陰蒂大約有 <strong>8,000 條神經末梢</strong>——比人體任何其他部位都要多，無論男女。講個對比你聽：陰莖大約得 4,000 條。
              </p>
              <p>
                但係關鍵嚟嘞：根據《Journal of Sex & Marital Therapy》刊登嘅研究，<strong>75% 嘅女人單靠插入係達唔到高潮嘅</strong>。陰蒂先係關鍵。
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">更年期期間會發生啲咩：</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="更年期前後血液循環嘅比較"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ 問題所在：</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 雌激素水平下降高達 90%</li>
                      <li>• 盆腔嘅血液循環減少</li>
                      <li>• 陰蒂組織可能萎縮 20 至 30%</li>
                      <li>• 神經敏感度下降</li>
                      <li>• 天然潤滑減少</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ 解決方法：</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 定期刺激有助維持血液循環</li>
                      <li>• 保持神經通路活躍</li>
                      <li>• 預防組織萎縮</li>
                      <li>• 維持敏感度</li>
                      <li>• 促進天然潤滑</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                婦科醫生講得好白：「你可以當佢係盆底嘅運動。如果你唔郁啲肌肉、唔維持血液循環，佢就會萎縮。同樣嘅道理都適用喺陰蒂組織度。」
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">💡 重點係：</p>
                <p className="text-gray-700">
                  定期刺激陰蒂唔淨止係為咗快感（不過咁，呢樣都係一個唔錯嘅 bonus）。佢係為咗維持組織健康、保住神經功能，同埋預防因為忽略而帶嚟嘅不可逆轉嘅變化。呢個係<em>預防性嘅健康護理</em>。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">「咁我嘅伴侶呢？」呢條問題我哋一樣問過</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">「3 分鐘奇蹟」（同埋點解伴侶都鍾意）</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              講真：對好多 50 歲以上嘅女人嚟講，可能要 20 分鐘以上（仲要做好多心理建設）先至接近得到高潮。但係用 Lem？<strong className="text-[#FF1493]">3 分鐘。</strong>
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>女人最大嘅顧慮：</strong>「我個伴侶會唔會覺得俾人取代咗？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>絕對唔會。</strong>Lem 細細粒。好多情侶都會喺<em>行房嗰陣</em>一齊用。佢就好似一道「橋」，確保你充分興奮、自然濕潤，亦都減輕咗伴侶要「交功課」嘅壓力。
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                有位試用者話俾我哋知：「佢令我哋間房，由一個緊張嘅地方，變返做一個遊樂場。」
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                我哋做研究嗰陣，收到最多嘅問題之一就係：<em>「我個伴侶會唔會覺得受到威脅？」</em>
              </p>
              <p>
                我哋嘅發現係：<strong>Lem 唔係要取代任何人——佢係一種加分。</strong>好多受訪嘅情侶都話，將 Lem 加入佢哋親密時光，其實仲<em>拉近</em>咗大家嘅關係。
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  「我老公係好奇，唔係覺得受威脅。而家前戲嗰陣，係佢親手幫我用。佢唔使再有『交功課』嘅壓力，而我又得到我想要嘅嘢。雙贏。」
                </p>
                <p className="font-semibold text-gray-700">——Valeria，55 歲，結婚 28 年</p>
              </div>
              <p>
                佢體積細細，所以兩個人一齊用嗰陣都好易配合，唔會覺得礙手礙腳。而且擺好位之後就唔使用手，兩個人可以專心享受對方。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">情侶用 Lem 嘅幾種方法：</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">前戲嗰陣</p>
                    <p className="text-sm text-gray-600">伴侶一邊錫一邊撫摸，一邊幫你揸住佢喺合適位置</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">行房嗰陣</p>
                    <p className="text-sm text-gray-600">擺好位置，可以同時刺激陰蒂同插入</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">自己用、伴侶喺旁邊睇</p>
                    <p className="text-sm text-gray-600">拉近親密感，亦都幫伴侶了解咩先啱你</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">兩次之間嘅「保養」</p>
                    <p className="text-sm text-gray-600">當兩個人嘅性生活冇咁頻密時，自己用都可以保持組織健康</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>小貼士：</strong>溝通最緊要。將佢當成一件對<em>兩個人</em>都有益嘅身心健康工具——減壓之餘，又增加快感。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">每個理由都叫你試，冇一個理由要你擔心</h2>
          <p className="text-center text-xl text-gray-600 mb-8">我哋查清楚咗 Hello Nancy 嘅各項保證。以下就係佢哋真正嘅意思。</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30 日「快感保證」</h3>
                <p className="text-sm text-gray-700 text-center">
                  唔滿意？<strong>全額退款</strong>——仲唔使俾退貨運費。佢哋相信你會誠實。佢哋就係咁有信心。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  即係話：零財務風險。試足一個月。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12 個月保養</h3>
                <p className="text-sm text-gray-700 text-center">
                  第一年內個按摩器有任何問題，佢哋都會幫你換。免費。唔問點解。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  即係話：呢個唔係用完即棄嘅小玩意，係耐用之選。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">終身支援</h3>
                <p className="text-sm text-gray-700 text-center">
                  使用上有疑問？清潔上有顧慮？佢哋嘅客戶服務團隊會喺 24 小時內回覆。
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  即係話：你買嘅唔淨止係一件產品，係加入咗一個社群。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">真正嘅問題係：你又有咩好輸？</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                科學我哋講過。評價我哋俾你睇過。各項保證我哋亦都解釋過。去到呢一步，唯一嘅風險就係<em>唔</em>試。
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">不如計條數：</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">如果你試：</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ 可能重新搵返你以為已經冇咗嘅快感</li>
                      <li>✓ 可能改善組織健康、預防萎縮</li>
                      <li>✓ 可能瞓得好啲（高潮會釋放催產素）</li>
                      <li>✓ 最壞情況：攞返你嗰 HK$712</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">如果你唔試：</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 組織繼續萎縮</li>
                      <li>• 神經敏感度繼續下降</li>
                      <li>• 性愉悅依然係一場掙扎</li>
                      <li>• 你成世都會諗「如果當初……？」</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">點解 Hello Nancy 贏得我哋嘅信任</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            我哋唔會求其推介產品。以下就係 Hello Nancy 通過我哋編輯標準嘅原因。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">屢獲殊榮</h3>
              <p className="text-sm text-gray-600">榮獲 International Wellness Institute 頒發嘅 2025 年度女性身心科技大獎</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">已驗證評價</h3>
              <p className="text-sm text-gray-600">14,907 位已驗證買家俾出 4.7★ 平均分（唔係假評價）</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">賣出超過 100 萬件</h3>
              <p className="text-sm text-gray-600">自 2023 年推出以嚟，全球賣出超過 1,000,000 件</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">醫用級</h3>
              <p className="text-sm text-gray-600">醫用級矽膠，經過嚴格安全測試</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">media 報導：</h3>
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
            已驗證買家點講
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 5 星滿分得 4.7 分（14,907 個已驗證評價）</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「好過雌激素藥膏」</p>
                <p className="text-gray-700 italic">
                  「我買呢個唔係為咗『玩』，係因為我醫生話我需要血液循環。但係——嘩。嗰種釋放令我成晚瞓得着，唔會半夜熱醒、出晒汗。佢係我嘅新維他命。」
                </p>
                <p className="font-semibold text-gray-900">- Sarah J.，58 歲</p>
                <p className="text-xs text-gray-500">✓ 已驗證購買</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「喚醒咗我個身體」</p>
                <p className="text-gray-700 italic">
                  「我之前試過 Lelo Sona，但係對我嚟講太強。Lem 夠溫柔，啱我嘅敏感度，但係又夠深入，真係有效。10 分滿分。」
                </p>
                <p className="font-semibold text-gray-900">- Carly，已驗證買家</p>
                <p className="text-xs text-gray-500">✓ 已驗證購買</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「我已經上癮」</p>
                <p className="text-gray-700 italic">
                  「我已經上癮。Lem 嗰種吸啜同牽引，正到難以形容。當你嗨嗰陣，感覺好似將個高潮直接抽出嚟，仲令嗰種一抽一抽嘅感覺維持得耐好多。正到爆！」
                </p>
                <p className="font-semibold text-gray-900">- Alisha，Beta 試用者</p>
                <p className="text-xs text-gray-500">✓ 已驗證購買</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">「玩法都唔同晒」</p>
                <p className="text-gray-700 italic">
                  「身為一個好重視私密產品低調性嘅人，再冇比佢更完美嘅選擇。佢嗰個吸啜功能，係我試過任何嘢都比唔上嘅。」
                </p>
                <p className="font-semibold text-gray-900">- Maxine，已驗證買家</p>
                <p className="text-xs text-gray-500">✓ 已驗證購買</p>
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
              我哋嘅結論：物有所值
            </h2>
            <p className="text-center text-xl text-gray-600">
              經過深入測試同研究之後，我哋編輯部強烈推薦 Nancy's Lem 俾正在經歷更年期組織變化嘅女士。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">慳HK$559</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ 限時讀者優惠 ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">優惠仲有：</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem 陰蒂按摩器</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">HK$712</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">HK$1,271</span>
                      <span className="text-sm text-green-600 font-bold">慳HK$559（低至 5.6 折）</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">每日只係 HK$1.95</strong>，用足一年咁計
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      仲平過你日日飲嗰杯咖啡。用得幾年。
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 讀者貼士：結帳時輸入優惠碼 <span className="font-bold text-[#FF1493]">TIFFANY</span> 或者 <span className="font-bold text-[#FF1493]">ISABELLA</span>，仲有額外驚喜！</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem 陰蒂按摩器（鮮黃色）</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">愛自己手冊同使用指南</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">磁吸充電線</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">絲絨旅行收納袋</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">全球免運費</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30 日「快感保證」</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12 個月保養</span>
                  </div>
                </div>

                <a href="https://hellonancy.com/products/lem"   className="w-full">
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    立即購買 - HK$712（慳HK$559）
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    零風險保證
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30 日無條件退款保證。如果你唔鍾意，全額退款——<strong>仲唔使退貨</strong>。
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>低調包裝</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>24 小時內發貨</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>安全結帳</span>
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
            Lem 啱唔啱你？
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            成千上萬 50 歲以上嘅女人都話「啱」。睇下你有冇以下任何一種情況：
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">🌸 如果你係咁，Lem 就啱你：</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>受私密處乾澀或者行房痛困擾</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>感覺冇咁敏感，或者好難達到高潮</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>正在面對陰蒂萎縮或者組織變薄</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>覺得傳統震動器太強、太刺激</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>想喺年紀漸長之際保持組織健康</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>想揾一件低調嘅私密按摩器（唔好一睇就知係「玩具」）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>想避免或者輔助荷爾蒙補充療法</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>準備好重新搵返自己嘅性愉悅同自信</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">💡 如果你係咁，你會特別鍾意 Lem：</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你睇重<strong>有科學根據嘅身心健康</strong>，多過啲噱頭</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你想要<strong>預防性護理</strong>，唔淨止係處理症狀</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你已經厭倦咗啲<strong>對成熟身體無效</strong>嘅產品</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你欣賞<strong>用心嘅設計</strong>，識得尊重你嘅私隱</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你願意<strong>投資喺自己身上</strong>（用足一年，每日只係 HK$1.95！）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你想要<strong>有效果而又冇副作用</strong>，亦都唔使醫生處方</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>你唔想再接受「<strong>而家就係咁㗎喇</strong>」呢句說話</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>如果以上有 3 項你都中咗，</strong>Lem 就係特登為你而設計嘅。
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
                  係，呢個就係我 - 立即購買
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
            你嘅問題，逐一解答
          </h2>
          <p className="text-center text-gray-600 mb-12">我哋將讀者最想知嘅問題拎咗去問 Hello Nancy</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">如果我好敏感或者有萎縮，會唔會痛？</h3>
                <p className="text-gray-700">
                  完全唔會。因為佢用嘅係氣流吸啜，而唔係直接接觸嘅震動，所以避免咗造成疼痛嘅摩擦。你可以由 12 段裡面最低嗰一段開始，慢慢咁加上去。佢就係特登設計到對嬌嫩組織咁溫柔。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">個包裝會唔會好尷尬？</h3>
                <p className="text-gray-700">
                  完全唔會。佢哋會用淨色嘅啡盒寄出，冇任何標誌。寄件地址只係寫住「Care & Bloom Ltd.」。保證百分百低調。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">如果我唔鍾意點算？</h3>
                <p className="text-gray-700">
                  Hello Nancy 提供 30 日滿意保證。如果你唔鍾意，佢哋會作一次性嘅退款——<strong>仲唔使退貨</strong>。佢哋相信你會揾到最啱自己身體嘅嘢。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">沖涼或者浸浴嗰陣用得唔得？</h3>
                <p className="text-gray-700">
                  得！佢通過咗 IPX7 防水認證，即係話可以完全浸落水。好多用家都覺得，暖水會令人更加放鬆，感覺都更加強烈。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">佢有幾大聲？</h3>
                <p className="text-gray-700">
                  靜到好似耳語咁。超靜音馬達確保完全低調——就算隔離房有人，你都可以放心用，唔使驚俾人聽到。
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
              我哋嘅最終評語
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                經過幾個星期嘅研究、專家諮詢同用家訪問之後，我哋編輯部相信，Nancy's Lem 正視咗一個被忽略咗太耐嘅真實醫學需要。
              </p>
              <p>
                呢個唔係關於愛靚或者放縱——而係關於維持組織健康、改善睡眠質素，同埋重新搵返一部分被更年期試圖奪走嘅自己。
              </p>
              <p className="text-xl font-bold">
                如果你正在經歷 GSM 嘅症狀、用開嘅方法都搞唔掂，又或者單純想喺年紀漸長之際保持性愉悅，Lem 絕對值得你認真考慮。
              </p>
              <p className="text-sm italic">
                ——Jessica Martinez，資深身心健康編輯
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
                立即入手 Nancy's Lem - HK$712
              </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30 日保證 ✓ 免運費 ✓ 低調包裝</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">聯盟披露</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider 嘅營運係靠讀者支持。當你透過我哋網站上嘅連結購買，我哋或者會賺取聯盟佣金，但你唔使俾多一蚊。呢樣幫到我哋繼續提供免費、有研究根據嘅內容。我哋只會推介經編輯部認真審核、亦都相信會幫到讀者嘅產品。所有觀點都係我哋自己嘅，唔會受任何報酬左右。
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">關於我哋</h3>
                <p className="text-gray-400 text-sm">
                  Wellness Insider 為現代女性提供有實證根據嘅健康同身心新聞報導。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">分類</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>健康</li>
                  <li>身心健康</li>
                  <li>性愛同關係</li>
                  <li>產品評測</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">關於 Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>產品詳情</li>
                  <li>顧客評價</li>
                  <li>運送同退貨</li>
                  <li>聯絡：care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">信任同安全</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ 醫用級物料</li>
                  <li>✓ 低調運送</li>
                  <li>✓ 30 日保證</li>
                  <li>✓ 12 個月保養</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider。版權所有。編輯內容獨立而客觀。</p>
              <p className="mt-2">專題產品：Hello Nancy 嘅 Nancy's Lem • 2025 年度女性身心科技大獎得主</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
