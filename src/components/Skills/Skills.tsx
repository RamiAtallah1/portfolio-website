import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={`mb-4 ${styles.skills}`}>
      <p>Tech Stack</p>
      <div className="logos">
        <ul>
          <li>
            <img src="img/skills/react.svg" title="React" alt="skill-icon" />
          </li>
          <li>
            <img
              src="img/skills/javascript.svg"
              title="JavaScript"
              alt="skill-icon"
            />
          </li>
          <li>
            <img
              src="img/skills/typescript.svg"
              title="Typescript"
              alt="skill-icon"
            />
          </li>
          <li>
            <img src="img/skills/python.svg" title="Python" alt="skill-icon" />
          </li>
          <li>
            <img
              src="img/skills/express.svg"
              title="Express"
              alt="skill-icon"
            />
          </li>
          <li>
            <img src="img/skills/django.svg" title="Django" alt="skill-icon" />
          </li>
          <li>
            <img
              src="img/skills/mongodb.svg"
              title="Mongodb"
              alt="skill-icon"
            />
          </li>
          <li>
            <img src="img/skills/mysql.svg" title="MySQL" alt="skill-icon" />
          </li>
          <li>
            <img src="img/skills/html.svg" title="HTML5" alt="skill-icon" />
          </li>
          <li>
            <img src="img/skills/css.svg" title="CSS" alt="skill-icon" />
          </li>
          <li>
            <img
              src="img/skills/bootstrap.svg"
              title="Bootstrap"
              alt="skill-icon"
            />
          </li>
          <li>
            <img
              src="img/skills/tailwind.svg"
              title="Tailwind CSS"
              alt="skill-icon"
            />
          </li>
          <li>
            <img src="img/skills/scss.svg" title="SCSS" alt="skill-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
