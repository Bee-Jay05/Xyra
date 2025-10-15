"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    // Send form data to Formspree (replace with your endpoint)
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/your-endpoint", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent ✅");
      form.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  }

  return (
    <section id="contact" className="w-full !py-24">
      <div className={`max-w-6xl !mx-auto flex flex-col md:flex-row gap-12 md:gap-24 !px-6 ${poppins.className}`}>
        <div className="w-1/2">
            {/* CTA */}
            <h2 className="text-4xl md:text-7xl font-normal !mb-6">
                Get In Touch With Us
            </h2>
            <p className="text-lg text-gray-700 !mb-12 max-w-2xl mx-auto">
                Have an idea, a project, or just want to say hi? Drop me a message and
                I’ll get back to you as soon as I can.
            </p>
            <h5 className="text-lg">
              Email: <br /><a href="mailto: abiolaabeeola159@gmail.com" className="text-[#6b7fff] text-2xl !mt-4">Xyra@gmail.com </a>
            </h5>
            <h5 className="text-lg !mt-6">
              Phone: <br /><a href="tel:+2349063360393" className="text-[#6b7fff] text-2xl !mt-4">+234 906 336 0393</a>
            </h5>
        </div>
        <div className="w-1/2 bg-gray-200/50 !p-8 rounded-3xl">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid gap-6 text-left">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full !px-4 !py-3 rounded-xl bg-white border border-gray-500/20 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full !px-4 !py-3 rounded-xl bg-white border border-gray-500/20 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full !px-4 !py-3 rounded-xl bg-white border border-gray-500/20 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-fuchsia-600 hover:bg-fuchsia-800 text-white font-semibold !py-3 !px-6 rounded-xl hover:scale-102 transition"
          >
            Send Message
          </button>
        </form>
        </div>

        

        {/* Status message */}
        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </section>
  );
}