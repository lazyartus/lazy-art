import Image from "next/image";
import Link from "next/link";

export default function WinterCampBanner() {
  return (
    <section className="px-6 pb-4 pt-6 md:pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#8B1E2D] shadow-2xl">
        <div className="grid items-stretch lg:grid-cols-2">
          {/* 文字 */}
          <div className="flex flex-col justify-center p-8 text-white sm:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-1.5 text-sm font-black text-[#8B1E2D]">
                NEW・即日起報名
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Winter Camp 2027
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              2027 美術冬令營
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/90">
              春節限定・節慶佈置・名畫教學
              <br />
              4–11 歲　1/21 – 2/3　含午餐點心
            </p>

            <p className="mt-4 text-xl font-bold">
              早鳥三日班 NT$ 5,980 起
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/winter-camp"
                className="rounded-full bg-white px-8 py-4 font-bold text-[#8B1E2D] transition hover:bg-[#FAF8F5]"
              >
                了解冬令營 →
              </Link>
              <a
                href="https://forms.gle/UFuPXqx9SmP7qz6v6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/70 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                立即報名
              </a>
            </div>
          </div>

          {/* 照片 */}
          <Link
            href="/winter-camp"
            className="relative block min-h-[260px] lg:min-h-[420px]"
            aria-label="前往 2027 美術冬令營頁面"
          >
            <Image
              src="/winter-camp/photo-2.jpg"
              alt="小朋友舉著自己的作品"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
