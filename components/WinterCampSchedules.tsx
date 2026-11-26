"use client";

import { useState } from "react";
import Image from "next/image";

const CLASSES = [
  {
    key: "A",
    label: "A 班",
    age: "4–7 歲",
    image: "/winter-camp/class-a.jpg",
    alt: "2027 冬令營 A 班課表（4–7 歲）",
  },
  {
    key: "B",
    label: "B 班",
    age: "7–11 歲",
    image: "/winter-camp/class-b.jpg",
    alt: "2027 冬令營 B 班課表（7–11 歲）",
  },
  {
    key: "C",
    label: "C 班",
    age: "11 歲以上・漫畫＋帶年輕人出遊",
    image: "/winter-camp/class-c.jpg",
    alt: "2027 冬令營 C 班課表（11 歲以上，漫畫＋帶年輕人出遊）",
  },
];

export default function WinterCampSchedules() {
  const [active, setActive] = useState("A");
  const current = CLASSES.find((c) => c.key === active) ?? CLASSES[0];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">各班課表</h2>
      <p className="mt-2 text-sm text-slate-500">
        依年齡分班，不開放跨班。點擊圖片可放大查看。
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {CLASSES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            aria-pressed={active === c.key}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
              active === c.key
                ? "bg-[#8B1E2D] text-white shadow-md"
                : "bg-[#FAF8F5] text-[#8B1E2D] hover:bg-[#F0E8E2]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="mt-4 font-semibold text-slate-700">
        {current.label}｜{current.age}
      </p>

      <a
        href={current.image}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block overflow-hidden rounded-2xl border border-[#EFE5DE]"
      >
        <Image
          src={current.image}
          alt={current.alt}
          width={1600}
          height={1131}
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="h-auto w-full"
        />
      </a>
    </div>
  );
}
