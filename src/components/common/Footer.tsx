import { link } from 'fs';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const t = useTranslations('Footer');
  const links = t.raw('links');

  return (
    <footer className="mx-auto my-4 max-w-7xl border-y-4 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between">
        <div className="max-w-xl">
          <Link href="/">
            <Image
              alt="futuromy.com"
              title="futuromy.com"
              src="/images/logo.png"
              width={150}
              height={42}
            />
          </Link>
          <p className="text-sm">{t('paragraph')}</p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/Futuromy">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/company/futuromy/posts/?feedView=all">
            <Linkedin />
          </Link>
        </div>
      </div>
      <div className="justify- 2 my-4 flex w-full justify-start gap-6 border-b-2 py-2 text-muted-foreground">
        {links.map((item: string, index: number) => (
          <Link key={index} href="/">
            {item}
          </Link>
        ))}
      </div>
      <div className="mx-auto my-2 flex justify-center gap-4">
        <p>{t('reserved')}</p>
        <p>{t('designed')}</p>
      </div>
      <div className="mx-auto flex justify-center gap-4">
        <p>{t('terms')}</p>
        <p>{t('privacy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
