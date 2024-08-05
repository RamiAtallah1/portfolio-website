import { Bounce } from "react-awesome-reveal";
import Project from "../Project/Project";
import styles from "./Portfolio.module.css";

const projects = [
  {
    image: "img/projects/discord-clone.png",
    title: "Discord Clone",
    description:
      "Discord Clone is a real-time communication platform designed to facilitate text, voice, and video communication among users. It offers features similar to Discord, allowing users to create servers, join channels, engage in conversations, and manage their communities.",
    stacks: ["Next.js", "Socket.io", "Prisma", "Tailwind"],
    github: "https://github.com/RamiAtallah1/discord-clone",
  },
  {
    image: "img/projects/wordle-clone.png",
    title: "Wordle Clone",
    description:
      "Wordle is a word-guessing game where the player tries to guess a hidden word within a limited number of attempts. Each guess is scored based on how close it is to the hidden word, and the player's goal is to guess the word correctly within the given attempts.",
    stacks: ["React", "Tailwind"],
    github: "https://github.com/RamiAtallah1/wordle-clone",
  },
  {
    image: "img/projects/portfolio.png",
    title: "Portfolio",
    description:
      "A portfolio website serves as an online resume, providing visitors with information about me, my skills, and the projects I've worked on.",
    stacks: ["React", "Bootstrap"],
    github: "https://github.com/RamiAtallah1/portfolio-website",
  },
];

export default function Portfolio() {
  return (
    <div className="bgColor">
      <img src="img/wave3.svg" alt="wave 3" />
      <div id="projects" className={`bgColor pt-4 mb-2 ${styles.container}`}>
        <div className={styles.projectContent}>
          <p className={styles.projectContentTitle}>Portfolio</p>
          <h3 className={styles.projectContentSubTitle}>
            Each project is a unique piece of development 🧩
          </h3>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Bounce key={project.title} triggerOnce>
                <Project
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  stacks={project.stacks}
                  github={project.github}
                  reversed={index % 2 !== 0}
                />
              </Bounce>
            ))}
          </div>
        </div>
      </div>
      <img src="img/wave2.svg" alt="wave 2" />
    </div>
  );
}
