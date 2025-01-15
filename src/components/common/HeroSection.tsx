"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <div className="container mx-auto flex flex-col items-center py-12 text-center">
      <h1 className="mx-auto text-2xl font-black sm:text-3xl md:w-[50vw] md:text-5xl lg:text-7xl">
        {t("title.before")}
        <span className="text-primary">{t("title.highlight1")}</span>
        {t("title.middle")}
        <span className="text-primary">{t("title.highlight2")}</span>
        {t("title.after")}
      </h1>
      <p className="mx-auto max-w-5xl py-5 text-muted-foreground md:w-[55vw] md:text-xl">
        {t("subtitle")}
      </p>
      <Button
        size="xl"
        onClick={() =>
          document.getElementById("appointment")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <p className="text-base font-semibold md:text-lg">{t("buttonText")}</p>
      </Button>
      <p className="p-3 text-sm text-muted-foreground"> {t("noCommitment")} </p>
      <p className="font-dancingScript text-5xl text-primary"> {t("launch")} </p>
    </div>
  );
};

export default HeroSection;
