"use client";

import { useState } from "react";

type Status = "idle" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(
          data?.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setErrorMessage("Could not reach the server. Please try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
          className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={254}
          className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
      {status === "success" && (
        <p role="status" className="text-green-400 text-sm">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-red-400 text-sm">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
