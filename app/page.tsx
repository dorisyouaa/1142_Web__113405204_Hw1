"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

// app/page.tsx




// app/page.tsx


export default function Home() {
  const text = "Welcome！";

  return (
    <div className="h-full w-full flex items-center justify-center">
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-welcome {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <h1 className="text-6xl sm:text-[120px] font-black tracking-tighter text-white drop-shadow-md">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="animate-welcome"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}