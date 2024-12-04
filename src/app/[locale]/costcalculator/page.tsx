'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { RotateCw } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import PopupAppointment from '@/components/common/PopupAppointment';

interface PackItem {
  icon: string;
  header: string;
  price: string;
  paragraph: string;
  list: string[];
}

const QuestionPanel = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);
  const [newPack, setNewPack] = useState<PackItem[]>([]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const determinePackage = (sum: number) => {
    if (sum <= 1) return 0;
    if (sum <= 3) return 1;
    if (sum > 3) return 2;
    return 2; // default fallback
  };

  const getProgressWidth = (index: number) => {
    switch (index) {
      case 0:
        return 'w-1/4';
      case 1:
        return 'w-1/2';
      case 2:
        return 'w-3/4';
      case 3:
        return 'w-full';
      default:
        return 'w-0';
    }
  };

  const t = useTranslations('QuestionPanel');
  const quiz = t.raw('questions');

  const q = useTranslations('Packages');
  const pack = q.raw('package');

  useEffect(() => {
    setNewPack([pack[determinePackage(selectedAnswer)]]);
  }, [selectedAnswer]);
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12 sm:px-6 md:py-20 lg:px-14">
      <h2 className="mb-4 text-lg font-semibold text-primary">
        {t('header1')}
      </h2>
      <h1 className="mb-6 text-center text-3xl font-bold sm:text-5xl md:mb-8">
        {' '}
        {t('header2')}
      </h1>
      <div className="mb-12 w-full rounded-3xl bg-muted p-8 shadow-inner">
        {!showResult ? (
          <div className="flex flex-col items-center">
            <h1 className="mb-6 text-center text-xl">
              {quiz[currentQuestionIndex].question}
            </h1>
            <div className="grid w-full max-w-md grid-cols-2 gap-4">
              {quiz[currentQuestionIndex].answers.map(
                (answer: string, index: number) => (
                  <Button
                    key={index}
                    onClick={() => {
                      handleNextQuestion();
                      if (currentQuestionIndex > 0) {
                        setSelectedAnswer((prev) => prev + index);
                      }
                    }}
                    className="border-2 border-primary bg-background text-foreground hover:text-primary-foreground"
                  >
                    {answer}
                  </Button>
                ),
              )}
            </div>
            <div className="mt-6 w-full rounded-full bg-background">
              <div
                className={cn(
                  'h-2 rounded-full bg-chart-4 transition-all duration-300 ease-out',
                  getProgressWidth(currentQuestionIndex),
                )}
              ></div>
            </div>
          </div>
        ) : (
          <div className="mx-auto my-2 flex max-w-7xl flex-col items-center px-4">
            <h1 className="my-12 text-center text-3xl">{t('resultheader')}</h1>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              {newPack.map(
                (
                  item: {
                    icon: string;
                    header: string;
                    price: string;
                    paragraph: string;
                    list: string[];
                  },
                  index: number,
                ) => {
                  const IconComponent = LucideIcons[
                    item.icon as keyof typeof LucideIcons
                  ] as React.ComponentType;
                  return (
                    <div
                      key={index}
                      className="r min-h-auto flex h-full w-full max-w-full flex-col items-start justify-between rounded-xl border-[1px] border-muted-foreground bg-background p-6 shadow-inner md:max-w-[300px]"
                    >
                      <div className="flex flex-col">
                        <h1 className="inline-flex w-full items-start gap-3 border-b-2 pb-2 text-xl font-semibold">
                          {item.header} {IconComponent && <IconComponent />}{' '}
                        </h1>
                        <h2 className="py-2 text-3xl font-bold">
                          {item.price}
                        </h2>
                        <p className="pb-3 text-sm text-muted-foreground">
                          {item.paragraph}{' '}
                        </p>
                        <ul className="flex flex-col">
                          {item.list.map((listItem: string, index: number) => (
                            <li key={index} className="inline-flex py-2">
                              <LucideIcons.Check className="mr-2 text-primary" />{' '}
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <PopupAppointment />
                    </div>
                  );
                },
              )}
            </div>

            <Button
              className="mx-auto my-9 border-2 border-popover bg-background text-primary hover:text-background"
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedAnswer(0);
                setShowResult(false);
              }}
            >
              {t('recalculate')} <RotateCw />{' '}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionPanel;
