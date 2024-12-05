import { useTranslations } from 'next-intl';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => {
  const t = useTranslations('Faq');
  const faq = t.raw('topics');
  return (
    <div
      className="flex flex-col items-center px-4 py-12 md:px-0 md:py-20"
      id="faqs"
    >
      <h2 className="mb-2 text-base font-semibold text-muted-foreground md:mb-4 md:text-lg">
        {t('faqs')}
      </h2>
      <h1 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl">
        {t('header')}
      </h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {faq.map(
          (item: { question: string; answer: string }, index: number) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold md:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-sm text-muted-foreground md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ),
        )}
      </Accordion>
    </div>
  );
};

export default Faq;
