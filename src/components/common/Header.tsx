'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
const navElements = [
  { href: '#projects', key: 'projects' },
  { href: '#services', key: 'services' },
  { href: '#pricing', key: 'pricing' },
  { href: '#calculator', key: 'calculator' },
  { href: '#blog', key: 'blog' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const t = useTranslations('Header');

  return (
    <motion.header
      className="sticky top-0 bg-background py-2"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className="sticky top-0 z-20 mx-auto flex h-12 max-w-7xl flex-wrap justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            alt="futuromy.com"
            title="futuromy.com"
            src="/images/logo.png"
            width={150}
            height={42}
          />
        </Link>

        <div className="flex flex-col items-center">
          <button
            className="md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <Menu /> : <X />}
          </button>
        </div>

        <nav className="z-20 hidden items-center space-x-8 md:flex">
          {navElements.map((element) => (
            <Link
              className="text-nowrap font-mono font-medium hover:text-gray-500"
              key={element.key}
              href={element.href}
            >
              {t(`navElements.${element.key}`)}
            </Link>
          ))}
        </nav>
        {isOpen && (
          <nav className="z-20 flex basis-full flex-col items-center bg-background transition-all md:hidden">
            <div className="absolute right-0 top-0 mt-2 flex md:hidden">
              <LocaleSwitcher />
            </div>
            {navElements.map((element) => (
              <Link
                className="py-2 font-mono text-sm font-medium focus:text-gray-500"
                key={element.key}
                href={element.href}
              >
                {t(`navElements.${element.key}`)}
              </Link>
            ))}
          </nav>
        )}
        <div className="hidden md:flex">
          <LocaleSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
