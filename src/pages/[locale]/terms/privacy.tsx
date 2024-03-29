import Head from "next/head";
import { Privacy } from "../../../components/templates/terms/Privacy";
import { makeStaticProps, getStaticPaths } from "../../../utils/i18n/getStatic";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("terms");

  return (
    //className={styles.container}
    <div>
      <Head>
        <title>{t("commercialLaw.title")!}</title>
        <meta name="description" content={t("commercialLaw.body")!} />
      </Head>

      <Privacy />
    </div>
  );
}

const getStaticProps = makeStaticProps(["terms", "common"]);
export { getStaticPaths, getStaticProps };
