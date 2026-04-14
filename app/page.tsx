"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

// app/page.tsx


export default function Home() {
  // 定義要顯示的文字
  const welcomeText = "Welcome！";
  const subtitleText = "歡迎來到我的小天地";

  return (
    /* 這裡保留段一的佈局設定：hidden sm:flex */
    <div className="hidden sm:flex h-full w-full flex-col items-center justify-center p-12 text-center">
      
      {/* 插入原生 CSS 動畫 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* 1. 上方的 Welcome (延用段一的 9B90C2 顏色與字體大小) */}
      <h1 className="text-6xl sm:text-[120px] font-black tracking-tighter mb-4">
        {welcomeText.split("").map((char, index) => (
          <span
            key={`w-${index}`}
            className="animate-fade"
            style={{
              animationDelay: `${index * 0.1}s`,
              color: '#4E4F97' 
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* 2. 下方的中文字 */}
      <p className="text-xl sm:text-2xl font-medium tracking-wide">
        {subtitleText.split("").map((char, index) => (
          <span
            key={`s-${index}`}
            className="animate-fade"
            style={{
              // 設定在 Welcome 跑完後開始 (約 1.2s)
              animationDelay: `${1.2 + index * 0.1}s`,
              color: '#9B90C2', // 也可以依需求調整顏色深度
              opacity: 0.8
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

    </div>
  );
}