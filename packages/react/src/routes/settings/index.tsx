import {
  InlayContainer,
  InlayContainerRoutes,
} from "@/components/layout/InlayContainer";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();

  const routes: InlayContainerRoutes[] = useMemo(
    () => [
      {
        icon: "i-heroicons:language",
        href: "/settings/lang",
        label: t("views.settings.languageSettings"),
      },
      {
        icon: "i-heroicons:moon",
        href: "/settings/themes",
        label: t("views.settings.theme"),
      },
      {
        icon: "i-heroicons:user",
        href: "/settings/user",
        label: t("views.settings.user"),
      },
      {
        icon: "i-heroicons:funnel",
        href: "/settings/homepage",
        label: t("views.settings.homepage"),
      },
      {
        icon: "i-heroicons:eye-slash",
        href: "/settings/blocked",
        label: t("views.settings.blockedChannels"),
      },
    ],
    [t],
  );

  return (
    <>
      <Helmet>
        <title>{t("component.mainNav.settings")} - Holodex</title>
      </Helmet>
      <InlayContainer routes={routes} />
    </>
  );
}