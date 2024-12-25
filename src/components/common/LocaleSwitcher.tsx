"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.split("/").slice(2).join("/");
      router.replace(`/${nextLocale}/${pathWithoutLocale}`);
    });
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "tr", label: "Türkçe" },
  ];

  return (
    <Select defaultValue={localeActive} onValueChange={onSelectChange}>
      <SelectTrigger
        className="border-none bg-transparent p-0 text-sm md:mt-1.5"
        disabled={isPending}
      >
        <SelectValue placeholder={languages.find((lang) => lang.code === localeActive)?.label} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="text-sm">
            {lang.label}
          </SelectItem>
        ))}{" "}
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
