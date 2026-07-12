import { Work } from "@/types/work";

export const works: Work[] = [
  {
    jobTitle: "Full Stack Developer",
    company: "Jadded",
    duration: "Jan 2023 – Present",
    responsibilities: [
      "Architected and deployed production full-stack applications on Next.js, Node.js, and MongoDB serving real-user traffic in production.",
      "Optimized RESTful APIs and database queries to reduce inter-service latency and measurably improve platform stability under load.",
      "Built real-time features — live chat, live auctions, and instant notifications — using WebSockets, driving higher user engagement and session length.",
      "Engineered an automated monitoring and alerting system that surfaces incidents proactively, shortening detection time and easing platform maintenance.",
    ],
  },
  {
    jobTitle: "IOT Developer",
    company: "Webased",
    duration: "Aug 2022 – Oct 2022",
    responsibilities: [
      "Designed an automated irrigation system in Python that triggers watering based on sensor thresholds, reducing manual intervention and water waste.",
      "Built a cross-platform monitoring dashboard with Ionic, enabling real-time remote configuration and oversight of field hardware.",
      "Developed a Node.js backend to ingest and persist high-frequency sensor data into MySQL, powering threshold-based automation logic.",
    ],
  },
];
