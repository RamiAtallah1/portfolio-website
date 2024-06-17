import ReactCardFlip from "react-card-flip";
import styles from "./About.module.css";
import { useState } from "react";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipImage = () => {
    setIsFlipped((previous) => !previous);
  };

  return (
    <div id="about" className={`mb-2 ${styles.container}`}>
      <div className={styles.aboutContent}>
        <div className={styles.imgSide}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div onClick={flipImage}>
              <img
                src="img/about-night.png"
                alt="coding night"
                className={styles.mainImgSide}
              />
            </div>
            <div onClick={flipImage}>
              <img
                src="img/about-day.png"
                alt="coding day"
                className={styles.mainImgSide}
              />
            </div>
          </ReactCardFlip>
        </div>

        <div className={styles.textSide}>
          <h3>About me</h3>
          <h4>
            A dedicated Full Stack Developer <br /> based in Aley, Lebanon 📍
          </h4>
          <p>
            I'm a Full Stack Developer with a passion for creating user-friendly
            web applications. With expertise in JavaScript and the MERN stack, I
            enjoy building seamless and efficient solutions for the web. I'm
            committed to delivering exceptional user experiences and thrive on
            solving challenges collaboratively. Let's build something amazing
            together.
          </p>
        </div>
      </div>
    </div>
  );
}
