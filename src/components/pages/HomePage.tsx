import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from '../common/HeroSection';
import Comparison from '../../components/common/Comparison';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import ThreeSteps from '@/components/common/ThreeSteps';
import Packages from '../common/Packages';
import Faq from '../common/Faq';
import AppointmentPicker from '../common/AppointmentPicker';
import Projects from '../common/Projects';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="relative z-0 mx-auto px-4">
      <HeroSection />
      <Projects />
      <Comparison />
      <InfiniteScroll rotate />
      <ThreeSteps />
      <Packages />
      <Faq />
      <AppointmentPicker />
     
    </div>
  );
}
