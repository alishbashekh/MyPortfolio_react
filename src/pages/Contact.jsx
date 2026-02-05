import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = ({ dark }) => {
  const primaryColor = dark ? "#22C55E" : "#2563EB";
  const cardBg = dark ? "#1E293B" : "#E5E7EB";
  const inputBg = dark ? "#020617" : "#F8FAFC";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can integrate email sending later)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`min-h-screen px-6 py-16 ${dark ? "bg-[#020617] text-slate-200" : "bg-[#F8FAFC] text-slate-800"}`}>
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Contact Form Card */}
        <section className={`p-8 rounded-2xl shadow-lg border`} style={{ backgroundColor: cardBg }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: primaryColor }}>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${dark ? "bg-[#020617] border-slate-700" : "bg-white border-slate-300"} focus:outline-none`}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${dark ? "bg-[#020617] border-slate-700" : "bg-white border-slate-300"} focus:outline-none`}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${dark ? "bg-[#020617] border-slate-700" : "bg-white border-slate-300"} focus:outline-none`}
              rows={5}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: primaryColor, color: "#fff" }}
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Email / Links Card */}
        <section className={`p-8 rounded-2xl shadow-lg border flex flex-col items-center space-y-4`} style={{ backgroundColor: cardBg }}>
          <h3 className="text-2xl font-semibold" style={{ color: primaryColor }}>Contact Info</h3>
          <p>Email: <a href="mailto:your.email@example.com" className="underline">{`your.email@example.com`}</a></p>
          <div className="flex gap-6 mt-2 text-3xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className={`${dark ? "text-green-400" : "text-blue-600"} hover:scale-110 transition-transform`}><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className={`${dark ? "text-green-400" : "text-blue-600"} hover:scale-110 transition-transform`}><FaLinkedin /></a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
