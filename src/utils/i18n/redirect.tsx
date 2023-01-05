import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";
import config from "../../../package.json";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;
  let rootPath = "";

  if (process.env.NODE_ENV === "production") {
    if (!config.homepage.includes(".github.io")) {
      console.error("homepage is not valid github.io link");
    }
    rootPath = config.homepage.split(".github.io")[1];
    to = to.replace(rootPath, "");
  }

  // language detection      //en-US detected but always ja!!!
  useEffect(() => {
    const detectedLng = languageDetector.detect();

    if (process.env.NODE_ENV !== "production") {
      console.log(detectedLng, to);
    }

    //SHOULD CHANGE THIS  /Nekodigi/
    if (
      to!.startsWith("/" + detectedLng) &&
      router.route === rootPath + "/404"
    ) {
      // prevent endless loop
      router.replace(rootPath + "/" + detectedLng + router.route);
      return;
    }

    languageDetector.cache!(detectedLng!);
    router.replace(rootPath + "/" + detectedLng + to);
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
