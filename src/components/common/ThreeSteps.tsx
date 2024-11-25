import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Button } from '../ui/button';

const ThreeSteps = () => {
  const t = useTranslations('ThreeSteps');
  const steps = t.raw('steps');
  return (
    <section className="mx-auto my-44 flex max-w-7xl flex-col items-center justify-center px-12">
      <h1 className="py-7 text-3xl font-bold md:text-4xl">{t('header')}</h1>
      <div className="mb-8 grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step: { head: string; parag: string }, index: number) => (
          <div
            key={index}
            className="flex h-full w-full flex-col items-center rounded-3xl bg-muted p-8 py-12 text-center shadow-inner"
          >
            <div className="flex h-full w-full flex-col">
              <h1 className="mb-4 text-nowrap text-xl font-bold md:text-2xl">
                {step.head}
              </h1>
              <p className="text-start text-sm text-muted-foreground md:text-base">
                {step.parag}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button>
        Estimate your MVP <ArrowRight />
      </Button>
    </section>
  );
};

export default ThreeSteps;
