export default function About() {
  return (
    <section id="about" className="pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:flex justify-center">
          <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/profile.png"
              alt="Rami Atallah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-blue-600 text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m a Full Stack Developer with 3+ years of experience building
            user-friendly, scalable web applications. My work blends clean code,
            responsive design, and seamless functionality to create products
            that feel intuitive and reliable. I specialize in JavaScript,
            TypeScript, and modern frameworks to deliver solutions that delight
            users and drive business impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Beyond coding, I love solving complex problems and continuously
            learning new technologies.{" "}
            <span className="selection:text-purple-400">I’m passionate</span>{" "}
            about crafting applications that not only perform efficiently but
            also enhance the user experience, making life faster, easier, and
            more enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}
