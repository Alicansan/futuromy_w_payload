import React from "react";

import { useTranslations } from "next-intl";
import Header from "../common/Header";

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <Header />
    </div>
  );
}
