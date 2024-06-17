import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="bgColor">
      <img src="img/wave3.svg" alt="wave 3" />
      <footer>
        <div className={styles.container}>
          <div className={styles.footerc}>
            <h3>Copyright © 2024. All rights are reserved</h3>
            <div className={styles.footercSocials}>
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rami-atallah/"
              >
                <img width={30} src="img/linkedin.svg" alt="likedin icon" />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RamiAtallah1"
              >
                <img width={30} src="img/github.svg" alt="github icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
