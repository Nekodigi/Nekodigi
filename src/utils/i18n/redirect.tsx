import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();

    //SHOULD CHANGE THIS  /Nekodigi/
    if (to!.startsWith("/Nekodigi/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/Nekodigi/" + detectedLng + router.route);
      return;
    }

    languageDetector.cache!(detectedLng!);
    router.replace("/Nekodigi/" + detectedLng + to);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: any) => () => {
  useRedirect(to);
  return <></>;
};
