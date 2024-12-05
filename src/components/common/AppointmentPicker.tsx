'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const AppointmentPicker = () => {
  const t = useTranslations('AppointmentPicker');
  return (
    <div className="container mx-auto" id="appointment">
      <div>
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          {t('header')}{' '}
        </h1>
        <p className="text-balance p-3 text-center text-xl text-muted-foreground">
          {t('paragraph')}
        </p>
      </div>
      <div className="calendly-inline-widget relative h-[600px] w-full md:h-[700px] lg:h-[800px]">
        <InlineWidget
          url="https://calendly.com/101202011skatik"
          styles={{
            height: '100%',
            width: '100%',
            minWidth: '320px',
          }}
        />
      </div>
    </div>
  );
};

export default AppointmentPicker;
