'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const placeholdup = [
  { id: 1, color: '#3e4f6a' },
  { id: 2, color: '#f2a3bc' },
  { id: 3, color: '#67d89f' },
  { id: 4, color: '#abc123' },
  { id: 5, color: '#5b6a7f' },
  { id: 6, color: '#ff5733' },
];
const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <div className="container mx-auto flex flex-col items-center py-12 text-center">
      <h1 className="mx-auto text-2xl font-black uppercase md:w-[40vw] md:text-4xl">
        {t('title.before')}
        <span className="text-primary">{t('title.highlight1')}</span>
        {t('title.middle')}
        <span className="text-primary">{t('title.highlight2')}</span>
        {t('title.after')}
      </h1>
      <p className="font- mx-auto py-5 font-mono md:w-[55vw] md:text-xl">
        {t('subtitle')}
      </p>
      <Button className="">{t('buttonText')}</Button>

      <div className="mx-auto grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-3">
        {placeholdup.map((item, index) => (
          <div
            key={index}
            className={`m-3 h-[240px] w-[330px] rounded-lg shadow-lg`}
            style={{ backgroundColor: item.color }}
          >
            {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
