import { useTranslations } from 'next-intl'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    const t = useTranslations('Faq')
    const faq = t.raw('topics')
  return (
    <div className='py-12 md:py-20 flex flex-col items-center px-4 md:px-0'>
        <h2 className='text-base md:text-lg text-muted-foreground font-semibold mb-2 md:mb-4'>{t('faqs')}</h2>
        <h1 className='text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center'>{t('header')}</h1>
      <Accordion type="single" collapsible  className='w-full max-w-3xl'>
        {faq.map((item: {question: string, answer: string}, index: number)=>(
            <AccordionItem value={`item-${index}`} key={index}>
    <AccordionTrigger className='text-lg md:text-xl font-semibold'>{item.question}</AccordionTrigger>
    <AccordionContent className='mt-2 text-sm md:text-base text-muted-foreground'>
     {item.answer}
    </AccordionContent>
  </AccordionItem>
        ))}
</Accordion>
    </div>
  )
}

export default Faq
