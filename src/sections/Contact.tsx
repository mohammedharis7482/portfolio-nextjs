"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await emailjs.send(
        process.env
          .NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env
          .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env
          .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: any) {
      console.log(err);

      setError(
        "Something went wrong. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1]">
            Let’s Build Something
            <br />
            <span className="text-white/45">
              Meaningful Together
            </span>
          </h2>

          <p className="text-white/45 text-sm md:text-base max-w-2xl mx-auto mt-8 leading-relaxed">
            Open to freelance opportunities,
            collaborations, frontend
            development projects, and modern
            digital product experiences.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-[-120px] left-[-100px] w-[260px] h-[260px] bg-cyan-500/10 blur-[120px]" />

            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-10">
                Contact Information
              </p>

              <h3 className="text-5xl font-semibold leading-[1.05] mb-14">
                Let’s create
                <br />
                premium digital
                <br />
                experiences
                <br />
                together.
              </h3>

              {/* Info */}
              <div className="space-y-10">
                <div>
                  <p className="text-white/35 text-sm mb-3">
                    Email
                  </p>

                  <p className="text-lg">
                    mohammedharisar@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-white/35 text-sm mb-3">
                    Location
                  </p>

                  <p className="text-lg">
                    Kerala, India
                  </p>
                </div>

                <div>
                  <p className="text-white/35 text-sm mb-3">
                    Availability
                  </p>

                  <p className="text-lg">
                    Available for Freelance &
                    Collaborations
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-wrap gap-4 mt-14">
                <a
                  href="https://www.linkedin.com/in/mohammed-haris-178332325/"
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.behance.net/mohdharis21"
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  Behance
                </a>

                <a
                  href="https://github.com/mohammedharis7482"
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/mhd_.haris._/"
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-purple-500/10 blur-[120px]" />

            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-10">
                Send Message
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm text-white/45 mb-3">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full h-16 px-6 rounded-2xl border border-white/10 bg-white/[0.03] outline-none focus:border-white/25 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-white/45 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full h-16 px-6 rounded-2xl border border-white/10 bg-white/[0.03] outline-none focus:border-white/25 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-white/45 mb-3">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-5 rounded-2xl border border-white/10 bg-white/[0.03] outline-none resize-none focus:border-white/25 transition"
                  />
                </div>

                {/* Success */}
                {success && (
                  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-green-400 text-sm">
                    Message sent successfully.
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-16 rounded-2xl bg-white text-black font-medium hover:scale-[1.01] transition duration-300 disabled:opacity-60"
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}