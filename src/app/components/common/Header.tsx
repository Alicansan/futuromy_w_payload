import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuLink from './MenuLink'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'

const navElements = [
  { href: "#projects", key: "projects" },
  { href: "#services", key: "services" },
  { href: "#pricing", key: "pricing" },
  { href: "#calculator", key: "calculator" },
  { href: "#blog", key: "blog" }
];

export default function Header() {

  const t = useTranslations('Header'); 

  

  return (
    <header className="py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <Link href="/">
            <Image
              alt="futuromy.com"
              title="futuromy.com"
              src="/images/logo.png"
              width={150}
              height={42}
            />
          </Link>
          <button className="md:hidden" aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
          <nav className="absolute items-center hidden space-x-8 -translate-x-1/2 tansform left-1/2 md:flex">
           {navElements.map((element) => (
              <MenuLink
                key={element.key}
                name={t(`navElements.${element.key}`)} 
                link={element.href}
              />
            ))}
           <LocaleSwitcher/>   
          </nav>
        </div>
      </div>
    </header>
  )
}
