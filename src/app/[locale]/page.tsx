import { useTranslations } from 'next-intl';
import HomePage from '../components/pages/HomePage';

export default function page() {
  return (
    <div>
      {/* <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link> */}
      <HomePage />
    </div>
  );
}
