import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WinterCampSchedules from "@/components/WinterCampSchedules";

export const metadata: Metadata = {
  title: "2027 美術冬令營｜懶得畫室",
  description:
    "春節限定、節慶佈置、名畫教學。4–11 歲美術冬令營，小班精緻教學，師生比 1:6，含午餐與點心。",
};

/* =========================
    報名連結：拿到報名表單網址後貼在這裡
    （空字串時，按鈕會改成顯示聯絡電話）
========================= */
const SIGNUP_URL = "";

const PRICES = [
  { name: "三日班", dates: "1/21–1/23", early: 5980, regular: 6600 },
  { name: "五日班", dates: "1/25–1/29", early: 8980, regular: 11000 },
  { name: "八日班", dates: "1/21–1/29", early: 12980, regular: 14800 },
];

const fmt = (n: number) => `NT$ ${n.toLocaleString("zh-TW")}`;

function SignupButton({ className = "" }: { className?: string }) {
  if (SIGNUP_URL) {
    return (
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-full bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:bg-[#6f1724] ${className}`}
      >
        立即報名
      </a>
    );
  }
  return (
    <a
      href="tel:0981378370"
      className={`inline-flex items-center justify-center rounded-full bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:bg-[#6f1724] ${className}`}
    >
      電話報名 0981-378370
    </a>
  );
}

export default function WinterCampPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF8F5]">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/course-intro"
            className="mb-10 inline-flex items-center gap-2 font-semibold text-[#8B1E2D] hover:underline"
          >
            ← 返回所有課程
          </Link>

          {/* 開頭 */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#8B1E2D] px-4 py-2 text-sm font-bold text-white">
                  即日起報名
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1E2D]">
                  Winter Camp 2027
                </p>
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                2027 美術冬令營
              </h1>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                春節限定、節慶佈置、名畫教學。
                <br />
                讓孩子發揮對生活的想像，享受創作的自由自在，打造獨樹一格的美感。
                <br />
                主題多元、媒材豐富、開放式教學，帶著作品快快樂樂過個好年。
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <SignupButton />
                <a
                  href="#schedule"
                  className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-white"
                >
                  看各班課表
                </a>
              </div>
            </div>

            <Image
              src="/winter-camp/photo-2.jpg"
              alt="小朋友舉著自己的作品"
              width={1400}
              height={1050}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-[32px] object-cover shadow-2xl"
            />
          </div>

          {/* 營期與資訊 */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900">營隊資訊</h2>

              <div className="mt-6 space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true">📅</span>
                  <span>
                    1/21（四）– 1/23（六）三日
                    <br />
                    1/25（一）– 1/29（五）五日
                    <br />
                    2/1（一）– 2/3（三）三日
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true">🕒</span>
                  <span>
                    全日班 8:30 開門、17:30 休息
                    <br />
                    <span className="text-sm text-slate-500">
                      延遲接送：每 30 分鐘 NT$ 100
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true">👧</span>
                  <span>適合 4–11 歲（依年齡分 A、B、C 班）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true">🍱</span>
                  <span>學費含教具、午餐、點心</span>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true">👩‍🏫</span>
                  <span>小班精緻教學，師生比 1:6</span>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true">📍</span>
                  <span>台北市中山區龍江路 209 巷 17 號 2 樓</span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-500">
                為配合孩子的年紀規劃不同課程，彈性學習，但不開放跨時段。報名後可填寫興趣喜好調查表，有什麼想對老師分享的，都可以寫在備註。
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900">課程費用</h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-[#EFE5DE]">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-[#FAF8F5] text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">梯次</th>
                      <th className="px-4 py-3 font-semibold text-[#8B1E2D]">
                        早鳥價
                      </th>
                      <th className="px-4 py-3 font-semibold">原價</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICES.map((p) => (
                      <tr key={p.name} className="border-t border-[#EFE5DE]">
                        <td className="px-4 py-4">
                          <p className="font-bold text-slate-900">{p.name}</p>
                          <p className="text-xs text-slate-500">{p.dates}</p>
                        </td>
                        <td className="px-4 py-4 text-lg font-black text-[#8B1E2D]">
                          {fmt(p.early)}
                        </td>
                        <td className="px-4 py-4 text-slate-400 line-through">
                          {fmt(p.regular)}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t border-[#EFE5DE]">
                      <td className="px-4 py-4 font-bold text-slate-900">
                        單堂課
                      </td>
                      <td className="px-4 py-4 text-slate-500" colSpan={2}>
                        {fmt(2200)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-2 leading-8 text-slate-600">
                <p>🌟 介紹雙人報名，各折 NT$ 50</p>
                <p>🌟 舊生優惠，折 NT$ 100</p>
                <p className="text-sm text-slate-500">
                  符合任一條件即可折抵，每人限折一次。
                </p>
              </div>
            </div>
          </div>

          {/* 課表 */}
          <div id="schedule" className="mt-16">
            <WinterCampSchedules />
          </div>

          {/* 上課照片 */}
          <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
            <Image
              src="/winter-camp/photo-1.jpg"
              alt="小朋友在教室用毛筆畫水墨"
              width={1400}
              height={1050}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-[32px] object-cover shadow-xl"
            />
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900">
                為什麼選懶得畫室冬令營
              </h2>
              <ul className="mt-6 space-y-3 leading-8 text-slate-600">
                <li>✨ 春節限定主題：春聯、梅花、燈籠、舞獅，把年味畫進作品裡</li>
                <li>✨ 蠟筆、水彩、水墨、輕黏土等媒材，每天不一樣</li>
                <li>✨ 小班 1:6，老師能顧到每個孩子</li>
                <li>✨ 含午餐與點心，家長安心上班</li>
              </ul>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mt-16 rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">注意事項</h2>
            <p className="mt-6 leading-8 text-slate-600">
              由於課程皆需提前準備材料，遇不可抗之因素不退費，但可轉讓。
            </p>
          </div>

          {/* 報名 */}
          <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl bg-[#8B1E2D] p-10 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black">帶著作品，快快樂樂過個好年</h2>
              <p className="mt-3 text-white/80">
                聯絡電話：0981-378370 Abby 老師
              </p>
            </div>
            {SIGNUP_URL ? (
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#8B1E2D] transition hover:bg-[#FAF8F5]"
              >
                立即報名
              </a>
            ) : (
              <a
                href="tel:0981378370"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#8B1E2D] transition hover:bg-[#FAF8F5]"
              >
                撥打電話
              </a>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
