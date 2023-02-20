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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199893310019553"
          crossOrigin="anonymous"
        ></script>
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
