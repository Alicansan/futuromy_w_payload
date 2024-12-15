import { useTranslations } from 'next-intl';

export default function TermsAndConditions() {
  const t = useTranslations('termsAndConditions');

  return (
    <div className="container mx-auto my-4 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        {t('title')}
      </h1>

      {/* Introduction */}
      <p>{t('introduction.p1')}</p>
      <p>{t('introduction.p2')}</p>
      <p>{t('introduction.p3')}</p>
      <p>{t('introduction.p4')}</p>

      {/* Cookies */}
      <h3 className="py-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        {t('cookies.title')}
      </h3>
      <p>{t('cookies.p1')}</p>
      <p>{t('cookies.p2')}</p>

      {/* License */}
      <h3 className="py-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        {t('license.title')}
      </h3>
      <p>{t('license.p1')}</p>
      <p>{t('license.p2')}</p>
      <ul>
        {t
          .raw('license.restrictions')
          .map((restriction: string, index: string) => (
            <li key={index}>{restriction}</li>
          ))}
      </ul>

      {/* Continue with other sections... */}
    </div>
  );
}
