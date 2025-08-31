"use client";

import Image from "next/image";

export default function Footer() {
  const footerNavs = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="text-gray-500 bg-slate-900 px-4 py-5 md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <p className="leading-relaxed mt-2 text-[15px]">
          From frontend interfaces to backend architecture, I specialize in
          developing seamless, high-performance web applications. Whether it's
          optimizing performance, building APIs, or designing smooth user
          experiences, I turn challenges into solutions.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className=" hover:text-gray-400">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Rami Atallah. All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://github.com/RamiAtallah1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="Github"
                  width={24}
                  height={24}
                />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/rami-atallah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
