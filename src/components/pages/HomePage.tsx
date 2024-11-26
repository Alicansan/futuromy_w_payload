import React from 'react';

import { useTranslations } from 'next-intl';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';
import Comparison from '../../components/common/Comparison';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import ThreeSteps from '@/components/common/ThreeSteps';
import Packages from '../common/Packages';
import Faq from '../common/Faq';
import AppointmentPicker from '../AppointmentPicker';
import Footer from '../common/Footer';
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="relative z-0 mx-auto px-4">
      <Header />
      <HeroSection />
      <InfiniteScroll />
      <Comparison />
      <InfiniteScroll rotate />
      <ThreeSteps />
      <Packages />
      <Faq />
      <AppointmentPicker />
      <Footer />
    </div>
  );
}
