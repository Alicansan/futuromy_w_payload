import { useTranslations } from 'next-intl';
import * as LucideIcons from 'lucide-react';
import { Button } from '../ui/button';
const Packages = () => {
  const t = useTranslations('Packages');
  const pack = t.raw('package');

  return (
    <section className="mx-auto my-24 max-w-7xl px-4">
      <h1 className="my-12 text-center text-5xl font-bold">{t('title')}</h1>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        {pack.map(
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
                className="boder-muted r flex h-full min-h-[830px] w-full max-w-full flex-col items-start justify-between rounded-xl border-2 p-6 shadow-inner md:max-w-[300px]"
              >
                <div className="flex flex-col">
                  <h1 className="inline-flex w-full items-start gap-3 border-b-2 pb-2 text-xl font-semibold">
                    {item.header} {IconComponent && <IconComponent />}{' '}
                  </h1>
                  <h2 className="py-2 text-3xl font-bold">{item.price}</h2>
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
                <Button className="w-full">Book a Call</Button>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Packages;
