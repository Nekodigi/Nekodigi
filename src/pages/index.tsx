import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Contact } from "../components/organisms/top/contact";
import { Intro } from "../components/organisms/top/intro";
import { Projects } from "../components/organisms/top/projects";
import { Skill } from "../components/organisms/top/skill";
import { SocialMeadia } from "../components/organisms/top/socialMedia";

export default function Home() {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Nekodigi Portfolio</title>
        <meta name="description" content="Programmer / Designer / Student" />
        <link rel="icon" href="/icons/nekodigi/dark.ico" />
      </Head>

      <Intro />
      <Projects />
      <SocialMeadia />
      <Skill />
      <Contact />
    </div>
  );
}
