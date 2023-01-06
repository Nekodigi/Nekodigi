import Head from "next/head";
import { Privacy } from "../../../components/templates/terms/Privacy";
import { Contact } from "../../../components/templates/top/Contact";
import { makeStaticProps, getStaticPaths } from "../../../utils/i18n/getStatic";

export default function Home() {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Nekodigi Portfolio</title>
        <meta name="description" content="Programmer / Designer / Student" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Privacy />
    </div>
  );
}

const getStaticProps = makeStaticProps(["terms"]);
export { getStaticPaths, getStaticProps };
