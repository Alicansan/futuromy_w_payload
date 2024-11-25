import React from 'react';

import { useTranslations } from 'next-intl';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';
import Comparison from '../../components/common/Comparison';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import ThreeSteps from '@/components/common/ThreeSteps';
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="w- relative z-0 mx-auto max-w-7xl px-4">
      <Header />
      <HeroSection />
      <InfiniteScroll />
      <Comparison />
      <InfiniteScroll rotate />
      <ThreeSteps />
    </div>
  );
}
