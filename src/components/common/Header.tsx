"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";

const navElements = [
  { href: "/#projects", key: "projects" },
  { href: "/#services", key: "services" },
  { href: "/#pricing", key: "pricing" },
  { href: "/costcalculator", key: "calculator" },
  { href: "/blog", key: "blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [previousScroll, setPreviousScroll] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    if (current > previousScroll && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setPreviousScroll(current);
  });

  // Rest of the component remains the same...
  const t = useTranslations("Header");

  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      setIsOpen(false);
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-nav");
      const menuButton = document.getElementById("menu-button");

      if (
        isOpen &&
        nav &&
        !nav.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.header
      className="sticky top-0 z-40 bg-background py-2"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="container sticky top-0 z-20 mx-auto flex h-12 flex-wrap justify-between px-4 sm:px-6 lg:px-8">
        <NavigationLink href={"/"}>
          <Image
            alt="futuromy.com"
            title="futuromy.com"
            src="/images/logo.png"
            width={150}
            height={42}
          />
        </NavigationLink>

        <div className="flex flex-col items-center md:hidden">
          <button id="menu-button" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <Menu /> : <X />}
          </button>
        </div>

        <nav className="z-20 hidden items-center space-x-8 md:flex">
          {navElements.map((element) => (
            <NavigationLink
              className="text-nowrap font-medium hover:text-muted-foreground"
              key={element.key}
              href={element.href.startsWith("/") ? element.href : `/#${element.href}`}
              onClick={element.href.startsWith("#") ? handleScrollToSection : undefined}
            >
              {t(`navElements.${element.key}`)}
            </NavigationLink>
          ))}
        </nav>

        <div
          id="mobile-nav"
          className={`absolute left-0 right-0 top-14 z-20 bg-background transition-all duration-300 md:hidden ${
            isOpen ? "flex flex-col items-center opacity-100" : "invisible h-0 opacity-0"
          }`}
        >
          <div className="absolute right-0 top-0 mt-2 flex md:hidden">
            <LocaleSwitcher />
          </div>
          {navElements.map((element) => (
            <NavigationLink
              className="py-2 text-sm font-medium focus:text-muted-foreground"
              key={element.key}
              href={element.href.startsWith("/") ? element.href : `/#${element.href}`}
              onClick={(e) => {
                if (element.href.startsWith("#")) {
                  handleScrollToSection(e);
                } else {
                  setIsOpen(false);
                }
              }}
            >
              {t(`navElements.${element.key}`)}
            </NavigationLink>
          ))}
        </div>

        <div className="hidden md:flex">
          <LocaleSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
