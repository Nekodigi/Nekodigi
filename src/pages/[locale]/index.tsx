import Head from "next/head";
import { Contact } from "../../components/templates/top/contact";
import { Intro } from "../../components/templates/top/intro";
import { Projects } from "../../components/templates/top/projects";
import { Skill } from "../../components/templates/top/skill";
import { SocialMedia } from "../../components/templates/top/socialMedia";
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
