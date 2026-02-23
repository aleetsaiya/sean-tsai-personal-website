import styles from "./page.module.scss";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggler/ThemeToggler";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import { SiGithub, SiLinkedin } from "react-icons/si";
import data from "@/setting.json";

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <Image
          src={data.avatarSrc}
          alt="avatar"
          width={80}
          height={80}
          priority
          className={styles.avatar}
        />
        <div className={styles.infoContent}>
          <div className={styles.name}>
            <h1>{data.name}</h1>
            <ThemeToggle />
          </div>
          <p className={styles.position}>{data.intro}</p>
          <div className={styles.social}>
            <a
              href={data.social.github}
              className={styles.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={"18"} />
            </a>
            <a
              href={data.social.linkedin}
              className={styles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <h2>About</h2>
        <div className={styles.aboutContent}>
          {data.about.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>
      </section>
      <Experience />
      <Projects />
    </div>
  );
}
