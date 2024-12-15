import { useTranslations } from 'next-intl';
import React from 'react';

const Privacy = () => {
  const t = useTranslations('privacyPolicy');
  return (
    <div className="container mx-auto my-4 px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          {t('title')}
        </h1>

        <p>{t('introduction.p1')}</p>
        <p>{t('introduction.p2')}</p>
        <p>{t('introduction.p3')}</p>

        <h2 className="py-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          {t('consent.title')}
        </h2>
        <p>{t('consent.p1')}</p>

        <h2 className="py-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          {t('informationCollection.title')}
        </h2>
        <p>{t('informationCollection.p1')}</p>
        <p>{t('informationCollection.p2')}</p>
        <p>{t('informationCollection.p3')}</p>

        <h2 className="py-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          {t('informationUsage.title')}
        </h2>
        <p>{t('informationUsage.intro')}</p>
        <ul>
          {t.raw('informationUsage.uses').map((use: string, index: number) => (
            <li key={index}>{use}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Privacy;
