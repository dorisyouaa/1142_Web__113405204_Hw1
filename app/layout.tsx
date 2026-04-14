
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "../component/Menu"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "游奕萱的個人履歷",
  description: "游奕萱的個人履歷",
};

 // layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full">
      <body className="flex h-full overflow-hidden" style={{ backgroundColor: '	#ECECFF' }}>
        
        {/* 左側選單：手機版滿版，電腦版固定寬度 */}
        <aside className="w-full sm:w-[320px] h-full p-4 flex-shrink-0 z-10">
           <div className="h-full rounded-[20px] overflow-hidden shadow-sm">
              <Menu />
           </div>
        </aside>

        {/* 右側內容區：
            手機版使用 static，讓它不佔據空間，直到子頁面自己決定要如何顯示。
            電腦版使用 sm:flex 並排。
        */}
        <main className="static sm:relative sm:flex sm:flex-1 h-full sm:p-4 sm:pl-0"> 
          {children}
        </main>

      </body>
    </html>
  );
}