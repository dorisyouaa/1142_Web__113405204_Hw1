"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";


import { useState } from 'react';

export default function Hobby() {
  // 定义六个区域的数据：图片名称、大文字、小文字
  const hobbyItems = [
    { img: 'food.jpg', title: '美食', desc: '永支拔絲地瓜' },
    { img: 'manga.jpg', title: '漫畫', desc: '求你們都去看朱音落語' },
    { img: 'cafe.jpg', title: '跑咖啡廳', desc: '拍照不好看還是要拍' },
    { img: 'cute.jpg', title: '買可愛東西', desc: '毛茸茸我摸摸摸' },
    { img: 'star.jpg', title: '追星兼演唱會', desc: '沒有人不會愛上' },
    { img: 'vt.jpg', title: '看YouTube', desc: '沈迷YT導致作業寫不完' },
  ];

  return (
    /* 1. 外部定位容器 (与 About me 相同) */
    <div className="fixed inset-0 z-[100] sm:relative sm:inset-auto w-full h-full p-4 sm:p-0">
      
      {/* 2. 大圆角背景容器 (#DDDDFF) - 与 About me 相同 */}
      <div 
        className="h-full w-full rounded-[20px] shadow-lg p-6 flex flex-col gap-4 overflow-hidden"
        style={{ backgroundColor: '#DDDDFF' }}
      >
        {/* 手机版返回按钮 */}
        <Link href="/" className="sm:hidden inline-block bg-white/50 px-4 py-2 rounded-lg text-blue-900 font-bold w-fit z-10">
          ← Back to Menu
        </Link>
        
        {/* 页面标题 (可选) */}
        <h1 className="text-3xl font-black mb-2 sm:hidden" style={{ color: '#4E4F97' }}>Hobbies</h1>

        {/* 3. Hobby 六格网格容器 */}
        {/* sm:grid-cols-3 (电脑版3栏), grid-cols-2 (手机版2栏) */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto pr-2">
          {hobbyItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative aspect-square rounded-[15px] overflow-hidden shadow-sm cursor-pointer"
            >
              {/* --- 图片层 --- */}
              <img 
                src={`/images/${item.img}`} // 请确保图片存放在 public/images/ 文件夹中
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />

              {/* --- 黑色遮罩层 (Hover 时加深) --- */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300" />

              {/* --- 文字层 (Hover 时浮现) --- */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {/* 上面一行：大一点，font-bold */}
                <p className="text-xl sm:text-2xl font-bold mb-2 tracking-wider">
                  {item.title}
                </p>
                {/* 下面一行：小一点 */}
                <p className="text-sm sm:text-base opacity-90 font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}