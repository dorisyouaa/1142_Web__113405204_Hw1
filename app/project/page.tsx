"use client"

import Menu from "@/component/Menu";
import Link from "next/link";



export default function Project() {
  const projects = {
    podcast: [
      { img: 'podcast1.jpg', title: '戀愛聊天室' },
      { img: 'podcast2.jpg', title: '破牆' }
    ],
    design: [
      { img: 'design.jpg', title: '圖書館座位查詢系統' }
    ],
    others: [
      { img: 'other.png', title: 'NCCU DCT HUB discord頻道架設' }
    ]
  };

  // 封裝一個帶有毛玻璃標題的圖片組件
  const ProjectCard = ({ img, title }) => (
    <div className="relative group overflow-hidden rounded-[12px] shadow-sm bg-white/10 mb-4">
      <img 
        src={`/images/${img}`} 
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Project+Image"; }}
      />
      {/* 毛玻璃效果底條 */}
      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/30 py-3 px-4 border-t border-white/20">
        <p className="text-[#4E4F97] font-bold text-sm sm:text-base tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] sm:relative sm:inset-auto w-full h-full p-4 sm:p-0">
      {/* 大圓角背景容器 (#DDDDFF) */}
      <div 
        className="h-full w-full rounded-[20px] shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
        style={{ backgroundColor: '#DDDDFF' }}
      >
        {/* 手機版返回按鈕 */}
        <Link href="/" className="sm:hidden inline-block bg-white/50 px-4 py-2 rounded-lg text-blue-900 font-bold w-fit z-10">
          ← Back to Menu
        </Link>

        {/* 內容區塊佈局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Podcast 區塊 */}
          <div className="flex flex-col">
            <h2 className="text-xl font-black mb-4 pl-1" style={{ color: '#4E4F97' }}>PODCAST</h2>
            {projects.podcast.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>

          {/* 設計實作 區塊 */}
          <div className="flex flex-col">
            <h2 className="text-xl font-black mb-4 pl-1" style={{ color: '#4E4F97' }}>設計實作</h2>
            {projects.design.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>

          {/* 其他 區塊 */}
          <div className="flex flex-col">
            <h2 className="text-xl font-black mb-4 pl-1" style={{ color: '#4E4F97' }}>其他</h2>
            {projects.others.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>

        </div>
      </div>
    </div>
  );
}