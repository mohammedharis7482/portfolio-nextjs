"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",

    title:
      "UI/UX Designer & Frontend Developer",

    description:
      "Worked on real-world UI/UX projects, frontend experiences, and premium digital product interfaces.",
  },

  {
    year: "2024",

    title:
      "Frontend Development Journey",

    description:
      "Started building responsive websites and modern frontend interfaces using React and Next.js.",
  },

  {
    year: "2023",

    title:
      "Started UI/UX & Digital Design",

    description:
      "Began exploring interface design, branding, visual hierarchy, and modern digital experiences.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 md:px-10 "
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-5">
            Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95]">
            Experience &
            <br />
            <span className="text-white/45">
              Growth
            </span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mt-8 leading-relaxed">
            A journey through UI/UX design,
            frontend development, and building
            premium digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-[22px] top-0 w-px h-full bg-white/10" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-11 h-11 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="group rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/20 transition duration-500">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-5">
                    {item.year}
                  </p>

                  <h3 className="text-3xl font-semibold mb-5 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/55 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}