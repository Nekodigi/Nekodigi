//for faster switching

import React from "react";
import Link_ from "@mui/material/Link";
import { useRouter } from "next/router";

type LinkProps = {
  href: string;
  underline?: "none" | "hover" | "always";
  locale?: string;
  skipLocaleHandling?: boolean; //for external link.
  children: React.ReactNode;
};
const Link = (props: LinkProps) => {
  let { href, underline, locale, skipLocaleHandling, children } = props;

  const router = useRouter();

  if (underline === undefined) underline = "always";

  if (!locale) {
    if (router.query.locale) {
      locale = router.query.locale as string;
    } else {
      locale = "";
    }
  }

  if (href === undefined) href = router.asPath;
  if (href.indexOf("http") === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace("[locale]", locale);
  }

  return (
    <>
      <Link_ href={href} underline={underline}>
        <a>{children}</a>
      </Link_>
    </>
  );
};

export default Link;
