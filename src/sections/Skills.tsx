"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

import Reveal from "@/components/animations/Reveal";

import StaggerContainer from "@/components/animations/StaggerContainer";

import StaggerItem from "@/components/animations/StaggerItem";

const skillCategories = [
  {
    title: "Frontend Development",

    description:
      "Building scalable and modern frontend systems with responsive layouts, reusable components, and immersive user experiences.",

    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Responsive Design",
    ],

    gradient:
      "from-cyan-500/20 to-blue-500/10",
  },

  {
    title: "UI/UX Design",

    description:
      "Designing premium interfaces with strong visual hierarchy, design systems, and modern interaction-focused experiences.",

    skills: [
      "Figma",
      "Wireframing",
      "Design Systems",
      "Mobile UI",
      "Prototyping",
      "Visual Design",
    ],

    gradient:
      "from-purple-500/20 to-pink-500/10",
  },

  {
    title: "Tools & Workflow",

    description:
      "Optimized workflows and modern development tools focused on collaboration, performance, and production-ready delivery.",

    skills: [
      "Git & GitHub",
      "Vercel",
      "Framer Motion",
      "VS Code",
      "Canva",
      "Performance Optimization",
    ],

    gradient:
      "from-orange-500/20 to-yellow-500/10",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-10 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px]" />

      <Container className="relative z-10">
        {/* HEADER */}
        <Reveal className="max-w-3xl mb-14 md:mb-20 lg:mb-24">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 mb-4 md:mb-5">
            Skills & Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.04em]">
            Creating Modern
            <br />

            <span className="text-white/45">
              Digital Systems
            </span>
          </h2>

          <p className="text-white/50 text-[15px] sm:text-lg md:text-xl leading-relaxed mt-6 md:mt-8 max-w-2xl pr-1">
            A blend of frontend engineering,
            interface design, and modern digital
            workflows focused on building immersive,
            scalable, and visually refined experiences.
          </p>
        </Reveal>

        {/* GRID */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative overflow-hidden rounded-[30px] sm:rounded-[34px] lg:rounded-[38px] border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-2xl transition-all duration-700 h-full"
              >
                {/* Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-40`}
                />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[260px] bg-white/10 blur-[120px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-7 md:p-8 lg:p-9 h-full flex flex-col">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl mb-6 md:mb-8 w-fit">
                    <div className="w-2 h-2 rounded-full bg-white/70" />

                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/60">
                      Expertise
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] leading-tight mb-4 md:mb-5">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 leading-relaxed text-[14px] sm:text-[15px] mb-8 md:mb-10">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-auto">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="px-3.5 sm:px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[13px] sm:text-sm text-white/70 backdrop-blur-xl"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Blur */}
                <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}