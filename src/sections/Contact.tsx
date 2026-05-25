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
      // ENV VARIABLES
      const serviceId =
        process.env
          .NEXT_PUBLIC_EMAILJS_SERVICE_ID;

      const templateId =
        process.env
          .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      const publicKey =
        process.env
          .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // CHECK VARIABLES
      if (
        !serviceId ||
        !templateId ||
        !publicKey
      ) {
        throw new Error(
          "EmailJS environment variables are missing."
        );
      }

      // SEND EMAIL
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // SUCCESS
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setError(
        "Message failed to send. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 lg:py-32 px-5 sm:px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-4">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1] tracking-[-0.03em]">
            Let’s Build Something
            <br />

            <span className="text-white/45">
              Meaningful Together
            </span>
          </h2>

          <p className="text-white/45 text-[15px] sm:text-base max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-2 sm:px-0">
            Open to freelance opportunities,
            collaborations, frontend
            development projects, and modern
            digital product experiences.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Card */}
          <div className="rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-[-120px] left-[-100px] w-[260px] h-[260px] bg-cyan-500/10 blur-[120px]" />

            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8 md:mb-10">
                Contact Information
              </p>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.03em] mb-10 md:mb-14">
                Let’s create
                <br />
                premium digital
                <br />
                experiences
                <br />
                together.
              </h3>

              {/* Info */}
              <div className="space-y-8 md:space-y-10">
                <div>
                  <p className="text-white/35 text-sm mb-2 md:mb-3">
                    Email
                  </p>

                  <p className="text-[15px] sm:text-lg break-words">
                    mohammedharisar@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-white/35 text-sm mb-2 md:mb-3">
                    Location
                  </p>

                  <p className="text-[15px] sm:text-lg">
                    Kerala, India
                  </p>
                </div>

                <div>
                  <p className="text-white/35 text-sm mb-2 md:mb-3">
                    Availability
                  </p>

                  <p className="text-[15px] sm:text-lg leading-relaxed">
                    Available for Freelance &
                    Collaborations
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-10 md:mt-14">
                <a
                  href="https://www.linkedin.com/in/mohammed-haris-178332325/"
                  target="_blank"
                  className="px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.behance.net/mohdharis21"
                  target="_blank"
                  className="px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm"
                >
                  Behance
                </a>

                <a
                  href="https://github.com/mohammedharis7482"
                  target="_blank"
                  className="px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/mhd_.haris._/"
                  target="_blank"
                  className="px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-purple-500/10 blur-[120px]" />

            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8 md:mb-10">
                Send Message
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-7"
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
                    className="w-full h-14 sm:h-16 px-5 sm:px-6 rounded-2xl border border-white/10 bg-white/[0.03] outline-none focus:border-white/25 transition text-[15px] sm:text-base"
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
                    className="w-full h-14 sm:h-16 px-5 sm:px-6 rounded-2xl border border-white/10 bg-white/[0.03] outline-none focus:border-white/25 transition text-[15px] sm:text-base"
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
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-2xl border border-white/10 bg-white/[0.03] outline-none resize-none focus:border-white/25 transition text-[15px] sm:text-base"
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
                  className="w-full h-14 sm:h-16 rounded-2xl bg-white text-black font-medium text-[15px] sm:text-base hover:scale-[1.01] transition duration-300 disabled:opacity-60"
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