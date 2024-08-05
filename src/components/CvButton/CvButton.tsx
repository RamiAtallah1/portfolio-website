import styles from "./CvButton.module.css";

export default function CvButton() {
  return (
    <a href="resume/Rami_Atallah_CV.pdf" target="_blank" className={styles.btn}>
      <strong>DOWNLOAD CV</strong>
      <div className={styles.containerStars}>
        <div className={styles.stars}></div>
      </div>
      <div className={styles.glow}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </a>
  );
}
