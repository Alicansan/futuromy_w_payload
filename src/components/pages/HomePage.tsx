import React from 'react';

import { useTranslations } from 'next-intl';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="relative z-0 mx-auto max-w-7xl px-4">
      <Header />
      <HeroSection />
    </div>
  );
}
