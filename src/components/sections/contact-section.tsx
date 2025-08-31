"use client";

import ContactForm from "@/components/shared/contact-form";
import Image from "next/image";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: "/icons/mail.svg",
      contact: "ramiatallah63@gmail.com",
      href: "mailto:ramiatallah63@gmail.com",
    },
    {
      icon: "/icons/phone.svg",
      contact: "+961 81 635 360",
      href: "tel:+96181635360",
    },
    {
      icon: "/icons/location.svg",
      contact: "Aley, Lebanon",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <h2 className="text-blue-600 text-3xl text-center font-bold mb-4">
        Contact Me
      </h2>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between items-center lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <p className="text-purple-400 text-3xl font-semibold">
              Get in Touch
            </p>
            <p>
              Whether you’re looking to collaborate on a project or have a
              question, I’d love to hear from you. Feel free to reach out and
              I’ll get back to you as soon as possible.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none">
                      <Image
                        src={item.icon}
                        alt={item.contact}
                        width={24}
                        height={24}
                      />
                    </div>
                    <a className="text-gray-300" href={item.href}>
                      {item.contact}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
