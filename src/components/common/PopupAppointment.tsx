'use client';
import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { useTranslations } from 'next-intl';

const PopupAppointment = () => {
  const t = useTranslations('AppointmentPicker');
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const rootElement = document.getElementById('__next') || document.body;
    setRoot(rootElement);
  }, []);

  if (!root) return null;

  return (
    <PopupButton
      url="https://calendly.com/101202011skatik"
      rootElement={root}
      text={t('appointmentButton')}
      className="my-2 inline-flex h-10 items-center justify-center gap-2 self-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    />
  );
};

export default PopupAppointment;
