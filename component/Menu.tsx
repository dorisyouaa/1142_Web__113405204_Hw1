// component/Menu.tsx
"use client"
import Image from "next/image"
import Link from "next/link";

export default function Menu() {
  return (
    <div 
      className="w-full sm:w-[280px] h-full p-6 flex flex-col" 
      style={{ backgroundColor: '#70649A' }}
    >
      <Link href="/" className="font-bold text-xl mb-8 text-white">
        HOME
      </Link>

      <div className="flex flex-col items-center mb-10">
        <div className="bg-white w-24 h-24 rounded-full overflow-hidden mb-3 shadow-sm flex justify-center items-center">
          <Image src="/head.jpg" alt="profile" width={96} height={96} className="object-cover" />
        </div>
        <div className="font-bold text-xl text-white">游奕萱</div>
        <div className="text-sm text-white mt-1">NCCU COMM + DCT</div>
      </div>

      <nav className="space-y-3 flex-1">
        <MenuLink href="/about">About me</MenuLink>
        <MenuLink href="/hobby">Hobby</MenuLink>
        <MenuLink href="/experience">Experience</MenuLink>
        <MenuLink href="/project">Project</MenuLink>
      </nav>

      <div className="mt-auto text-center text-xs text-white">
        © 2026 Profile
      </div>
    </div>
  );
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="block text-white p-4 rounded-xl transition duration-200 font-medium text-center shadow-sm hover:brightness-105"
      style={{ backgroundColor: '#8B81C3' }}
    >
      {children}
    </Link>
  );
}
