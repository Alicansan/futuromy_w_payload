import { link } from 'fs';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import React from 'react';

const Footer = () => {
  const t = useTranslations('Footer');
  const links = t.raw('links');

  return (
    <footer className="mx-auto my-4 max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <Link href="/">
            <Image
              alt="futuromy.com"
              title="futuromy.com"
              src="/images/logo.png"
              width={150}
              height={42}
            />
          </Link>
          <p className="my-4 text-sm">{t('paragraph')}</p>
          <div className="flex gap-4">
            <Link href="https://github.com/Futuromy">
              <Github />
            </Link>
            <Link href="https://www.linkedin.com/company/futuromy/posts/?feedView=all">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="2 mx-auto my-4 flex w-full flex-col items-center justify-center gap-6 border-b-2 py-2 text-muted-foreground sm:flex-row">
        {links.map(
          (
            item: {
              Link: string;
              name: string;
            },
            index: number,
          ) => (
            <Link
              key={index}
              href={item.Link}
              className="hover:text-foreground"
            >
              {item.name}
            </Link>
          ),
        )}
      </div>
      <div className="mx-auto my-2 flex justify-center gap-4">
        <p>{t('reserved')}</p>
        <p>{t('designed')}</p>
      </div>
      <div className="mx-auto flex justify-center gap-4">
        <Link href="/terms" className="hover:text-muted-foreground">
          {t('terms')}
        </Link>
        <Link href={'/privacy'} className="hover:text-muted-foreground">
          <p>{t('privacy')}</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
