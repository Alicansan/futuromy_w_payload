'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import React, { useState } from 'react';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ClientLinkWithRef from 'node_modules/next-intl/dist/types/src/navigation/react-client/ClientLink';
import LocaleSwitcher from './LocaleSwitcher';
const navElements = [
  { href: '/#projects', key: 'projects' },
  { href: '/#services', key: 'services' },
  { href: '/#pricing', key: 'pricing' },
  { href: '/costcalculator', key: 'calculator', isHash: false },
  { href: '/blog', key: 'blog', isHash: false },
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

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Close mobile menu if open
      setIsOpen(false);

      // Get the header height for offset
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;

      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      // Add current scroll position to get absolute position
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-40 bg-background py-2"
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

        <div className="flex flex-col items-center md:hidden">
          <button aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <Menu /> : <X />}
          </button>
        </div>

        <nav className="z-20 hidden items-center space-x-8 md:flex">
          {navElements.map((element) => (
            <Link
              className="text-nowrap font-medium hover:text-muted-foreground"
              key={element.key}
              href={element.href}
              onClick={
                element.href.startsWith('#') ? handleScrollToSection : undefined
              }
            >
              {t(`navElements.${element.key}`)}
            </Link>
          ))}
        </nav>
        {isOpen && (
          <nav className="z-20 flex basis-full flex-col items-center bg-background transition-all md:hidden">
            <div className="absolute right-0 top-0 mt-12 flex md:hidden">
              <LocaleSwitcher />
            </div>
            {navElements.map((element) => (
              <Link
                className="py-2 text-sm font-medium focus:text-muted-foreground"
                key={element.key}
                href={element.href}
                onClick={
                  element.href.startsWith('#')
                    ? handleScrollToSection
                    : undefined
                }
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
