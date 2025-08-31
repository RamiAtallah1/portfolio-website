import CodeBlock from "@/components/ui/code-block";
import TypeAnimation from "@/components/ui/type-animation";
import WavingHand from "@/components/shared/waving-hand";
import GradientText from "@/components/ui/gradient-text";
import BackgroundBoxes from "@/components/ui/background-boxes";

export default () => {
  const words = [
    {
      text: "Full Stack Developer",
    },
    {
      text: "React Developer",
    },
    {
      text: "Laravel Developer",
    },
    {
      text: "React Native Developer",
    },
    {
      text: "MERN Developer",
    },
  ];

  const profileCode = `
    const profile = {
      name: 'Rami Atallah',
      title: 'Full-Stack Developer',
      skills: [
        'React', 'NextJS',  'React Native',
        'MySQL', 'MongoDB', 'Docker',
        'Express', 'NestJS', 'Laravel',
        'Javascript', 'Python', 'PHP'
      ],
      problemSolver: true,
      hardWorker: true,
      quickLearner: true,
      hireable: function() {
        return (
          this.problemSolver &&
          this.hardWorker &&
          this.quickLearner &&
          this.skills.length >= 5 
        );
      }
    };
    `;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Boxes */}
      <BackgroundBoxes className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto text-gray-200 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12 pointer-events-none">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start space-y-5 w-full md:max-w-xl text-center md:text-left">
          <h2 className="text-4xl text-white font-extrabold md:text-5xl">
            Hello <WavingHand />
          </h2>
          <h2 className="text-4xl text-white font-extrabold md:text-5xl">
            I'm <GradientText text="Rami Atallah" />
          </h2>
          <TypeAnimation words={words} />
          <p className="text-center md:text-left">
            From frontend interfaces to backend architecture, I specialize in
            developing seamless, high-performance web applications. Whether it's
            optimizing performance, building APIs, or designing smooth user
            experiences, I turn challenges into solutions.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pointer-events-auto">
            <a
              href="cv/Rami_Atallah_CV.pdf"
              target="_blank"
              className="block py-2 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-400 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Code Block */}
        <div className="w-full flex justify-center md:justify-start md:mt-0">
          <CodeBlock fileName="developer.js" code={profileCode} />
        </div>
      </div>
    </section>
  );
};
