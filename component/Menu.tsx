"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

// Menu.tsx 修改重點
// component/Menu.tsx


export default function Menu() {
  return (
    <div 
      className="w-[280px] h-screen p-6 flex flex-col border-r border-blue-100" 
      style={{ backgroundColor: '#78C2C4' }}
    >
      {/* 首頁連結 */}
      <Link href="/" className="font-bold text-xl mb-8 text-blue-900 hover:text-blue-700 transition">
        HOME
      </Link>

      {/* 個人檔案區 */}
      <div className="flex flex-col items-center mb-10">
        <div className="bg-white w-24 h-24 rounded-full overflow-hidden mb-3 shadow-sm border-2 border-white flex justify-center items-center">
          <Image 
            src="/head.jpg" 
            alt="profile" 
            width={96} 
            height={96} 
            className="object-cover"
          />
        </div>
        <div className="font-bold text-xl text-blue-900">游奕萱</div>
        <div className="text-sm text-blue-700/80 mt-1">NCCU COMM + DCT</div>
      </div>

      {/* 選單導覽區 */}
      <nav className="space-y-3 flex-1">
        <MenuLink href="/about">About me</MenuLink>
        <MenuLink href="/hobby">Hobby</MenuLink>
        <MenuLink href="/experience">Experience</MenuLink>
        <MenuLink href="/project">Project</MenuLink>
      </nav>

      {/* 頁尾小字 */}
      <div className="mt-auto text-center text-xs text-blue-400">
        © 2026 Profile
      </div>
    </div>
  );
}

/**
 * 封裝 MenuLink 組件，確保樣式統一
 * 選項顏色固定為 #97CBFF
 */
function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="block text-white p-4 rounded-xl transition duration-200 font-medium text-center shadow-sm hover:brightness-105 active:scale-95"
      style={{ backgroundColor: '#6699A1' }}
    >
      {children}
    </Link>
  );
}
