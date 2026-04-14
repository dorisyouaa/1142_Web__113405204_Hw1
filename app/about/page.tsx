"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";




export default function About() {
  const educationData = [
    { school: "師大附中", period: "2021～2024" },
    { school: "政治大學傳播學院大一大二不分系", period: "2024～" },
    { school: "政治大學數位內容與科技雙主修", period: "2025～" }
  ];

  return (
    <div className="fixed inset-0 z-[100] sm:relative sm:inset-auto w-full h-full p-4 sm:p-0">
      <div 
        className="h-full w-full rounded-[20px] shadow-lg p-6 flex flex-col gap-4 overflow-hidden"
        style={{ backgroundColor: '#DDDDFF' }}
      >
        <Link href="/" className="sm:hidden inline-block bg-white/50 px-4 py-2 rounded-lg text-blue-900 font-bold w-fit">
          ← Back to Menu
        </Link>
        
        {/* 上方：ME 區塊 */}
        <div 
          className="flex-[1.5] rounded-[15px] p-8 flex flex-col justify-start shadow-sm overflow-y-auto"
          style={{ backgroundColor: '#CECEFF' }}
        >
          <h2 className="text-2xl font-black tracking-wider mb-5" style={{ color: '#4E4F97' }}>
            ME
          </h2>
          <div className="flex flex-col gap-4">
            <div className="text-lg font-medium leading-relaxed" style={{ color: '#4E4F97' }}>
              <p>政大傳院二年級學生，應該算臺北人但出生在新北邊疆。</p>
              <p className="mt-2">被每週的基礎創意寫作課作業痛擊中，每天都在糾結要吃什麼最後都吃一樣的，喜歡的東西很多。</p>
              <p className="mt-2 text-base italic opacity-90">最近的感想是熱到快融化請文山區善待我。</p>
            </div>
            <p className="text-base font-bold tracking-wide opacity-80 mt-2" style={{ color: '#4E4F97' }}>
              #拖延症十級患者 #能躺著就不坐著 #分系焦慮中
            </p>
          </div>
        </div>

        {/* 下方：EDUCATION 區塊 */}
        <div 
          className="flex-[1.5] rounded-[15px] p-8 flex flex-col shadow-sm overflow-y-auto"
          style={{ backgroundColor: '#CECEFF' }}
        >
          <h2 className="text-2xl font-black tracking-wider mb-5" style={{ color: '#4E4F97' }}>
            EDUCATION
          </h2>
          
          <div className="flex flex-col gap-6">
            {educationData.map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                {/* 校系名稱 */}
                <span className="text-lg font-bold" style={{ color: '#4E4F97' }}>
                  {edu.school}
                </span>
                
                {/* 年份橢圓形標籤 */}
                <span 
                  className="px-3 py-1 rounded-full text-xs font-semibold w-fit"
                  style={{ 
                    backgroundColor: '#DDDDFF', 
                    color: '#4E4F97',
                    border: '1px solid #4E4F97' 
                  }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}