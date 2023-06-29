import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import React from "react";
import languageDetector from "../../utils/i18n/languageDetector";

type LanguageSwitchLinkProps = {
  locale: string;
  href?: any;
  children: React.ReactNode;
};

const LanguageSwitchLink = (props: LanguageSwitchLinkProps) => {
  let { locale, href, children } = props;
  const router = useRouter();
  if (href !== undefined) href = router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });
  if (locale) {
    href = href ? `/${locale}${href}` : pName;
  }

  return (
    <Link
      onClick={() => languageDetector.cache!(locale)}
      sx={{ textDecoration: "none" }}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LanguageSwitchLink;
