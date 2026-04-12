
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
// layout.tsx


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full">
      <body className="flex h-full overflow-hidden">
        
        {/* 左側菜單 */}
        <aside className="hidden sm:block h-full flex-shrink-0">
          <Menu />
        </aside>

        {/* 右側內容區：統一更換背景色為 #ACD6FF */}
        <main className="flex-1 h-full overflow-y-auto" style={{ backgroundColor: '#77969A' }}>
          {children}
        </main>

      </body>
    </html>
  );
}