import { Check, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const bulletElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Comparison = () => {
  const t = useTranslations('Comparison');
  return (
    <section className="mx-auto items-center px-4" id="services">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
        <h2 className="py-4 text-center font-semibold text-primary">
          {t('miniTitle')}{' '}
        </h2>
        <h1 className="text-center text-5xl font-bold">{t('bigTitle')} </h1>
      </div>
      <Tabs
        defaultValue="withFuturomy"
        className="mx-auto my-12 flex max-w-[560px] flex-col min-[770px]:hidden"
      >
        <TabsList className="mx-auto rounded-xl border-[1px] shadow-inner">
          <TabsTrigger
            value="traditional"
            className="rounded-l-xl text-foreground data-[state=active]:bg-primary data-[state=active]:text-background"
          >
            {t('contitle')}{' '}
          </TabsTrigger>
          <TabsTrigger
            value="withFuturomy"
            className="rounded-r-xl text-foreground data-[state=active]:bg-primary data-[state=active]:text-background"
          >
            {t('title')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="traditional">
          <div className="mx-auto flex flex-col items-center rounded-2xl border-2 border-b-0 bg-background p-4 text-start shadow-inner">
            <div className="mb-4 w-full flex-grow space-y-4">
              {bulletElements.map((element) => (
                <div
                  key={element}
                  className="flex w-full gap-2 border-b-[1px] py-2"
                >
                  <X className="text-primary" width={18} />{' '}
                  <p className="flex text-wrap text-sm md:text-base">
                    {t(`cons.${element}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="withFuturomy">
          <div className="mx-auto flex flex-col items-center rounded-2xl border-2 border-b-0 bg-background p-4 text-start shadow-inner">
            <div className="mb-4 w-full flex-grow space-y-4">
              {bulletElements.map((element) => (
                <div
                  key={element}
                  className="flex w-full gap-2 border-b-[1px] py-2"
                >
                  <Check className="text-primary" width={18} />{' '}
                  <p className="flex text-wrap text-sm md:text-base">
                    {t(`bullets.${element}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="mx-auto hidden w-full max-w-6xl gap-4 px-8 min-[770px]:flex lg:flex-row">
        <div className="mx-auto my-12 flex flex-col items-center rounded-2xl border-2 border-b-0 bg-background p-4 px-[4vw] py-6 text-center shadow-inner">
          <h1 className="mx-auto max-w-min text-nowrap border-b-2 pb-2 font-bold md:w-[90vw] md:text-xl">
            {t('contitle')}
          </h1>

          <div className="mx-auto mb-4 flex flex-col align-middle">
            {bulletElements.map((element) => (
              <div
                key={element}
                className="flex h-[4rem] w-full items-center gap-2 border-b-[1px]"
              >
                <p className="flex text-start text-sm md:text-base">
                  <X className="mr-2 text-primary" width={18} height={18} />{' '}
                  {t(`cons.${element}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto my-12 flex flex-col items-center rounded-2xl border-2 border-b-0 bg-background p-4 px-[4vw] py-6 text-center shadow-inner">
          <h1 className="mx-auto max-w-min text-nowrap border-b-2 pb-2 font-bold md:w-[90vw] md:text-xl">
            {t('title')}
          </h1>

          <div className="mx-auto mb-4 flex flex-col align-middle">
            {bulletElements.map((element) => (
              <div
                key={element}
                className="flex h-[4rem] w-full items-center gap-2 border-b-[1px]"
              >
                <p className="flex text-start text-sm md:text-base">
                  <Check className="mr-2 text-primary" width={18} height={18} />{' '}
                  {t(`bullets.${element}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
