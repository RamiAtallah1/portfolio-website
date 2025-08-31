"use client";

import { useState } from "react";
import { Oleo_Script } from "next/font/google";
import { useActiveSection } from "@/hooks/useActiveSection";
import HamburgerIcon from "@/components/shared/hamburger-icon";

const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oleo",
});

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "#home", id: "home" },
    { title: "About", path: "#about", id: "about" },
    { title: "Experience", path: "#experience", id: "experience" },
    { title: "Projects", path: "#projects", id: "projects" },
    { title: "Contact", path: "#contact", id: "contact" },
  ];

  const activeSection = useActiveSection(
    navigation.map((item) => item.id),
    {
      behavior: "navbar",
    }
  );

  return (
    <>
      <nav
        className={`fixed z-20 bg-slate-900 w-full md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 max-w-screen-xl mx-auto md:px-8">
          {/* Logo*/}
          <div className="py-3 md:py-5">
            <a
              href="#home"
              className={`${oleoScript.className} text-gray-200 text-xl`}
            >
              Rami Atallah
            </a>
          </div>

          {/* Links*/}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className={`block transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 font-semibold"
                        : "text-gray-200 hover:text-blue-400"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button*/}
          <div className="md:hidden py-3 md:py-5">
            <button
              className="text-gray-200 hover:text-gray-400"
              onClick={() => setState(!state)}
            >
              <HamburgerIcon isOpen={state} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu*/}
        <div
          className={`nav-menu pb-3 md:hidden ${state ? "block" : "hidden"}`}
        >
          <ul className="space-y-4 px-4">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.path}
                  className={`block transition-colors py-2 ${
                    activeSection === item.id
                      ? "text-blue-600 font-semibold"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                  onClick={() => setState(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile overlay */}
      {state && (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      )}
    </>
  );
}
