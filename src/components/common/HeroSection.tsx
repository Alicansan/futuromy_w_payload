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
    <div className="container mx-auto flex max-w-7xl flex-col items-center py-12 text-center">
      <h1 className="mx-auto text-2xl font-black sm:text-3xl md:w-[50vw] md:text-5xl lg:text-7xl">
        {t('title.before')}
        <span className="text-primary">{t('title.highlight1')}</span>
        {t('title.middle')}
        <span className="text-primary">{t('title.highlight2')}</span>
        {t('title.after')}
      </h1>
      <p className="mx-auto max-w-5xl py-5 text-muted-foreground md:w-[55vw] md:text-xl">
        {t('subtitle')}
      </p>
      <Button
        size="xl"
        onClick={() =>
          document.getElementById('appointment')?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        <p className="text-base font-semibold md:text-lg">{t('buttonText')}</p>
      </Button>
      <p className="p-3 text-sm text-muted-foreground"> {t('noCommitment')} </p>
      <p className="font-dancingScript text-5xl text-popover">
        {' '}
        {t('launch')}{' '}
      </p>

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
