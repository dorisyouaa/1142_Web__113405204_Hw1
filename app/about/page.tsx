"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";

export default function About() {
  return (
    <div className="p-10 bg-white min-h-full">
      {/* 手機版才需要的返回鍵 */}
      <Link href="/" className="sm:hidden block mb-4 text-blue-500">
        ← 返回
      </Link>
      
      <h1 className="text-3xl font-bold">About me</h1>
      <div className="mt-6 text-lg">
        這裡寫你的詳細自我介紹內容...
      </div>
    </div>
  );
}
