import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";
import config from "../../../package.json";

const onTheRoot = true; //if use custom domain and site is on the root. no need to for root path

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection      //en-US detected but always ja!!!
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to!.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
      return;
    }

    languageDetector.cache!(detectedLng!);
    router.replace("/" + detectedLng + to);
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
