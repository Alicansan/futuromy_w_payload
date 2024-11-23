import { Check, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const bulletElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Comparison = () => {
  const t = useTranslations('Comparison');
  return (
    <section className="mx-auto max-w-6xl px-4">
      <Tabs
        defaultValue="withFuturomy"
        className="my-12 flex max-w-6xl flex-col min-[1000px]:hidden"
      >
        <TabsList className="mx-auto max-w-6xl rounded-xl border-[1px] shadow-inner">
          <TabsTrigger
            value="traditional"
            className="rounded-l-xl text-foreground data-[state=active]:bg-primary data-[state=active]:text-secondary"
          >
            {t('contitle')}{' '}
          </TabsTrigger>
          <TabsTrigger
            value="withFuturomy"
            className="rounded-r-xl text-foreground data-[state=active]:bg-primary data-[state=active]:text-secondary"
          >
            {t('title')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="traditional">
          <div className="mx-auto flex w-min max-w-[580px] flex-col items-center text-nowrap rounded-2xl border-2 bg-secondary p-4 text-center shadow-inner">
            <h1 className="mx-auto max-w-min text-nowrap text-base font-black md:w-[90vw] md:text-2xl">
              {t('contitle')}
            </h1>

            <div className="mx-auto flex max-w-min flex-col items-start align-middle">
              {bulletElements.map((element) => (
                <div
                  key={element}
                  className="flex w-full gap-2 border-b-[1px] py-2"
                >
                  <X className="text-primary" width={18} />{' '}
                  <p className="flex max-w-min text-nowrap font-mono text-sm md:text-base">
                    {t(`cons.${element}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="withFuturomy">
          <div className="mx-auto flex w-min max-w-[580px] flex-col items-center text-nowrap rounded-2xl border-2 bg-secondary p-4 text-center shadow-inner">
            <h1 className="mx-auto max-w-min text-nowrap text-base font-black md:w-[90vw] md:text-2xl">
              {t('title')}
            </h1>

            <div className="mx-auto flex max-w-min flex-col items-start align-middle">
              {bulletElements.map((element) => (
                <div
                  key={element}
                  className="flex w-full gap-2 border-b-[1px] py-2"
                >
                  <Check className="text-primary" width={18} />{' '}
                  <p className="flex max-w-min text-nowrap font-mono text-sm md:text-base">
                    {t(`bullets.${element}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="mx-auto hidden w-full max-w-7xl px-8 min-[1000px]:flex lg:flex-row">
        <div className="mx-auto my-12 flex w-min max-w-[580px] flex-col items-center text-nowrap rounded-2xl border-2 bg-secondary p-4 text-center shadow-inner">
          <h1 className="mx-auto max-w-min text-nowrap text-base font-black md:w-[90vw] md:text-2xl">
            {t('contitle')}
          </h1>

          <div className="mx-auto flex max-w-min flex-col items-start align-middle">
            {bulletElements.map((element) => (
              <div
                key={element}
                className="flex w-full gap-2 border-b-[1px] py-2"
              >
                <X className="text-primary" width={18} />{' '}
                <p className="flex max-w-min text-nowrap font-mono text-sm md:text-base">
                  {t(`cons.${element}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto my-12 flex w-min max-w-[580px] flex-col items-center text-nowrap rounded-2xl border-2 bg-secondary p-4 text-center shadow-inner">
          <h1 className="mx-auto max-w-min text-nowrap text-base font-black md:w-[90vw] md:text-2xl">
            {t('title')}
          </h1>

          <div className="mx-auto flex max-w-min flex-col items-start align-middle">
            {bulletElements.map((element) => (
              <div
                key={element}
                className="flex w-full gap-2 border-b-[1px] py-2"
              >
                <Check className="text-primary" width={18} />{' '}
                <p className="flex max-w-min text-nowrap font-mono text-sm md:text-base">
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
