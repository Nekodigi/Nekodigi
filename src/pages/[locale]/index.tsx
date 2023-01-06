import Head from "next/head";
import { Contact } from "../../components/templates/top/Contact";
import { Intro } from "../../components/templates/top/Intro";
import { Projects } from "../../components/templates/top/Projects";
import { Skill } from "../../components/templates/top/Skill";
import { SocialMedia } from "../../components/templates/top/SocialMedia";
import { getStaticPaths, makeStaticProps } from "../../utils/i18n/getStatic";

export default function Home() {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Nekodigi Portfolio</title>
        <meta name="description" content="Programmer / Designer / Student" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Intro />
      <Projects />
      <SocialMedia />
      <Skill />
      <Contact />
    </div>
  );
}

const getStaticProps = makeStaticProps(["top"]);
export { getStaticPaths, getStaticProps };
