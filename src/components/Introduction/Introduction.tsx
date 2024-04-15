import styles from "./Introduction.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Introduction() {
  return (
    <div id="home" className={`bg-light mb-4 ${styles.mainContainer}`}>
      <div className={styles.introText}>
        <TypeAnimation
          className={styles.introTitle}
          sequence={[
            "Full Stack Developer",
            1000,
            "React Developer",
            1000,
            "React Native Developer",
            1000,
            "MERN Developer",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
        />

        <p className={styles.mainIntro}>
          Hi, I'm Rami Atallah. A passionate Full Stack Developer based in Aley,
          Lebanon. 📍
        </p>
        <span>
          <a
            aria-label="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://linkedin.com/in/rami-atallah"
          >
            <img
              src={"img/linkedinIco.png"}
              className="socialIco"
              alt="linkedin icon"
            />
          </a>
          <a
            aria-label="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/RamiAtallah1"
          >
            <img
              src={"img/githubIco.png"}
              className="socialIco"
              alt="github icon"
            />
          </a>
          <a
            aria-label="github"
            rel="noreferrer"
            target="_blank"
            href="tel:+96181635360"
          >
            <img
              src={"img/telephoneIco.png"}
              className="socialIco"
              alt="telephone icon"
            />
          </a>
        </span>
        <div className={`mt-3 ${styles.cvContainer}`}>
          <a
            href="resume/Rami_Atallah_CV.pdf"
            target="_blank"
            className={styles.cvButton}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
      <div className={styles.myImg}></div>
    </div>
  );
}
