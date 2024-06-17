import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="contact" className={`mb-2 ${styles.container}`}>
      <div className={styles.contactContent}>
        <div className={styles.contactTitle}>
          <p>contact</p>
          <h3>Don't be shy! Hit me up! 👇</h3>
        </div>
        <div className={styles.contactIcons}>
          <div className={styles.contactIconBox}>
            <span>
              <img width={45} src="img/map.png" alt="map icon" />
            </span>
            <div className={styles.contactInfo}>
              <h3>Location</h3>
              <p>Aley, Lebanon</p>
            </div>
          </div>
          <div className={styles.contactIconBox}>
            <span>
              <img width={45} src="img/gmail.png" alt="gmail icon" />
            </span>
            <div className={styles.contactInfo}>
              <h3>Mail</h3>
              <a href="mailto:ramiatallah63@gmail.com">
                ramiatallah63@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
