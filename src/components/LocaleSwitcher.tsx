'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
  ];

  return (
    <Select defaultValue={localeActive} onValueChange={onSelectChange}>
      <SelectTrigger
        className="border-none bg-transparent p-0 font-mono text-sm md:mt-1.5"
        disabled={isPending}
      >
        <SelectValue
          placeholder={
            languages.find((lang) => lang.code === localeActive)?.label
          }
        />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="font-mono text-sm"
          >
            {lang.label}
          </SelectItem>
        ))}{' '}
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
