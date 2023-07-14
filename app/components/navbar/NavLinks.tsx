"use client";

import { useTranslations } from "next-intl";

interface Props {
  title: string;
  href: string;
  disabled?: boolean;
}

export const NavLinks = () => {
  const t = useTranslations("Navbar");

  return [
    {
      title: t("links.movies"),
      href: "/movies",
    },
    {
      title: t("links.tvShows"),
      href: "/pricing",
    },
    {
      title: t("links.people"),
      href: "/people",
    },
    {
      title: t("links.more"),
      href: "/more",
    },
  ];
};
