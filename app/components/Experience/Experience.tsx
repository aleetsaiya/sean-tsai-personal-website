import styles from "./Experience.module.scss";
import data from "@/setting.json";
import Badge from "@/app/components/Badge/Badge";
import { GoArrowUpRight } from "react-icons/go";

export default function Experience() {
  return (
    <section className={styles.container}>
      <h2>Experience</h2>
      <div className={styles.timeline}>
        {data.experience.map((e, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.date}>
              <span>{e.from}</span>
              <span className={styles.dateSeparator}>—</span>
              <span>{e.to}</span>
            </div>
            <div className={styles.details}>
              {e.link ? (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.position}
                >
                  {e.position} – {e.company}
                  <GoArrowUpRight className={styles.arrow} />
                </a>
              ) : (
                <span className={styles.position}>
                  {e.position} – {e.company}
                </span>
              )}
              <p className={styles.intro}>{e.intro}</p>
              <div className={styles.skills}>
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
