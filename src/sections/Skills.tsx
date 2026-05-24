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
      className="relative py-32"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-10 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px]" />

      <Container className="relative z-10">
        {/* HEADER */}
        <Reveal className="max-w-3xl mb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-5">
            Skills & Expertise
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-[-0.04em]">
            Creating Modern
            <br />

            <span className="text-white/45">
              Digital Systems
            </span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
            A blend of frontend engineering,
            interface design, and modern digital
            workflows focused on building immersive,
            scalable, and visually refined experiences.
          </p>
        </Reveal>

        {/* GRID */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative overflow-hidden rounded-[38px] border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-2xl transition-all duration-700"
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
                <div className="relative z-10 p-8 md:p-9">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl mb-8">
                    <div className="w-2 h-2 rounded-full bg-white/70" />

                    <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Expertise
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] leading-tight mb-5">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 leading-relaxed text-[15px] mb-10">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/70 backdrop-blur-xl"
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