'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="container mx-auto items-center py-12 text-center">
      <h1 className="mx-auto text-2xl font-black uppercase md:w-[40vw] md:text-4xl">
        Effortlessly bring your ideas to life with our expertise in{' '}
        <span className="text-red-400">web, mobile, UI/UX,</span> and{' '}
        <span className="text-red-400">backend</span> development.
      </h1>
      <p className="font- mx-auto py-5 font-mono md:w-[55vw] md:text-xl">
        We create futuristic software solutions for you. Prepare best solutions
        for your requirements. Contact our experts in developing Mobile/Web
        Apps.
      </p>
      <Button className="">Contact Us</Button>
    </div>
  );
};

export default HeroSection;
