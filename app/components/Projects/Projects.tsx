"use client";

import Badge from "@/app/components/Badge/Badge";
import styles from "./Projects.module.scss";
import data from "@/setting.json";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Projects() {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.list}>
        {data.projects.map((e, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.imageWrapper}>
              <Image
                src={e.imgSrc}
                className={styles.image}
                alt={e.title}
                fill
              />
            </div>
            <div className={styles.content}>
              {e.link ? (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.title}
                >
                  <h4>{e.title}</h4>
                  <GoArrowUpRight className={styles.arrow} />
                </a>
              ) : (
                <span className={styles.title}>
                  <h4>{e.title}</h4>
                </span>
              )}
              {e.intro.split('\n').map((text, i) => (
                <p key={i} className={styles.intro}>
                  {text}
                </p>
              ))}
              <div className={styles.skillsWrapper}>
                {e.skills.map((sk, i) => (
                  <Badge key={i}>{sk}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
