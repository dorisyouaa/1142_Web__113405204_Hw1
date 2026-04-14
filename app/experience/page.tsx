"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";


export default function Experience() {
  const hsncData = [
    { title: "第三十六屆暑期公演 霏", tag: null },
    { title: "第三十八屆暑期公演 碎浪", tag: "票務" },
    { title: "第三十九屆暑期公演 離", tag: "行政執秘" },
    { title: "第四十屆暑期公演", status: "Coming Soon" },
  ];

  const nccuData = [
    { title: "113學年度冬季公演 雲湧樂尋" },
    { title: "113學年度全國學生音樂比賽 團體項目北區決賽絲竹室內樂" },
    { title: "113學年度夏季公演 竹風幻語" },
    { title: "114學年度冬季公演 無界樂途" },
    { title: "114學年度全國學生音樂比賽 團體項目北區決賽國樂合奏" },
    { title: "114學年度夏季公演", status: "Coming Soon" },
  ];

  return (
    <div className="fixed inset-0 z-[100] sm:relative sm:inset-auto w-full h-full p-4 sm:p-0">
      <div 
        className="h-full w-full rounded-[20px] shadow-lg p-6 flex flex-col gap-4 overflow-hidden"
        style={{ backgroundColor: '#DDDDFF' }}
      >
        <Link href="/" className="sm:hidden inline-block bg-white/50 px-4 py-2 rounded-lg text-blue-900 font-bold w-fit z-10">
          ← Back to Menu
        </Link>

        <div className="flex-1 flex flex-col sm:flex-row gap-4 overflow-hidden">
          
          {/* 左邊：師大附中校友國樂團 */}
          <div 
            className="flex-1 rounded-[15px] p-6 flex flex-col shadow-sm overflow-y-auto"
            style={{ backgroundColor: '#CECEFF' }}
          >
            <h2 className="text-xl sm:text-2xl font-black mb-6" style={{ color: '#4E4F97' }}>
              師大附中校友國樂團
            </h2>
            
            <div className="flex flex-col gap-4 mb-6">
              {hsncData.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-2 border-b border-[#4E4F97]/10 pb-2">
                  <span className="text-sm sm:text-base font-medium" style={{ color: '#4E4F97' }}>
                    {item.title}
                  </span>
                  {item.tag && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap" 
                          style={{ backgroundColor: '#DDDDFF', color: '#4E4F97' }}>
                      {item.tag}
                    </span>
                  )}
                  {item.status && (
                    <span className="text-xs font-bold italic opacity-60" style={{ color: '#4E4F97' }}>
                      {item.status}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Post 1 圖片 */}
            <div className="mt-auto pt-4">
              <img 
                src="/images/post1.jpg" 
                alt="HSNC Performance" 
                className="w-full h-auto rounded-[10px] border-2 border-[#DDDDFF] shadow-sm object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* 右邊：政大華夏國樂社 */}
          <div 
            className="flex-1 rounded-[15px] p-6 flex flex-col shadow-sm overflow-y-auto"
            style={{ backgroundColor: '#CECEFF' }}
          >
            <h2 className="text-xl sm:text-2xl font-black mb-6" style={{ color: '#4E4F97' }}>
              政大華夏國樂社
            </h2>
            
            <div className="flex flex-col gap-4 mb-6">
              {nccuData.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-2 border-b border-[#4E4F97]/10 pb-2">
                  <span className="text-sm sm:text-base font-medium leading-tight" style={{ color: '#4E4F97' }}>
                    {item.title}
                  </span>
                  {item.status && (
                    <span className="text-xs font-bold italic opacity-60 whitespace-nowrap" style={{ color: '#4E4F97' }}>
                      {item.status}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Post 2 圖片 */}
            <div className="mt-auto pt-4">
              <img 
                src="/images/post2.jpg" 
                alt="NCCU Performance" 
                className="w-full h-auto rounded-[10px] border-2 border-[#DDDDFF] shadow-sm object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}