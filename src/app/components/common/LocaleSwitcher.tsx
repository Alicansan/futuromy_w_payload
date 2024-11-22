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
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <label className="flex items-center focus:outline-none">
      <Select>
        <SelectTrigger
          className="border-none bg-transparent font-mono text-sm"
          defaultValue={localeActive}
          disabled={isPending}
        >
          <SelectValue
            placeholder={
              languages.find((lang) => lang.code === localeActive)?.label
            }
            onChange={onSelectChange}
          />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="px-0 font-mono text-sm"
            >
              {lang.label}
            </SelectItem>
          ))}{' '}
        </SelectContent>
      </Select>
    </label>
  );
};

export default LocaleSwitcher;
