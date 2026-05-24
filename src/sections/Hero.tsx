"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-28"
    >
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px]" />

      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

      <Container className="relative z-10">
        {/* Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-16">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />

            <span className="text-sm text-white/70">
              Available for freelance work
            </span>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Heading */}
            <Reveal>
              <h1 className="text-[72px] sm:text-[86px] md:text-[110px] lg:text-[118px] font-semibold leading-[0.88] tracking-[-0.07em]">
                <span className="text-white">
                  Crafting
                </span>

                <br />

                <span className="text-white/45">
                  Premium
                </span>

                <br />

                <span className="text-white/45">
                  Digital
                </span>

                <br />

                <span className="text-white">
                  Experiences
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg md:text-[20px] leading-[1.8] text-white/55">
                Frontend Developer & UI/UX Designer
                focused on building modern,
                immersive, and visually refined
                digital products with scalable
                frontend systems and premium user
                experiences.
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-5 mt-12">
                <a
                  href="#projects"
                  className="h-[60px] px-9 rounded-full bg-white text-black flex items-center justify-center gap-3 text-[16px] font-medium transition hover:scale-[1.02]"
                >
                  View Projects

                  <span className="text-lg">
                    ↗
                  </span>
                </a>

                <a
                  href="#contact"
                  className="h-[60px] px-9 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white flex items-center justify-center gap-3 text-[16px] font-medium hover:bg-white/10 transition"
                >
                  Contact Me

                  <span className="text-lg">
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-5 mt-16 max-w-[540px]">
                {[
                  {
                    value: "10+",
                    label: "Projects",
                  },

                  {
                    value: "2+",
                    label: "Years Experience",
                  },

                  {
                    value: "100%",
                    label: "Client Satisfaction",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-7 hover:border-white/20 transition-all duration-500"
                  >
                    <h3 className="text-5xl font-semibold tracking-[-0.05em]">
                      {item.value}
                    </h3>

                    <p className="text-sm text-white/45 mt-3 leading-relaxed">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT CARD */}
          <Reveal delay={0.25}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/20 blur-[80px]" />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10 hover:border-white/20 transition-all duration-700"
              >
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/20 opacity-70" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl mb-8">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />

                    <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Currently Learning
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[42px] md:text-[52px] font-semibold leading-[1.02] tracking-[-0.05em] mb-10">
                    Full Stack
                    <br />
                    Development &
                    <br />
                    AI Architecture
                  </h2>

                  {/* Cards */}
                  <div className="space-y-5">
                    {/* Design */}
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="rounded-[28px] border border-cyan-500/20 bg-cyan-500/10 p-6 backdrop-blur-xl"
                    >
                      <p className="text-sm text-white/45 mb-3">
                        Design
                      </p>

                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                        UI/UX & Visual Systems
                      </h3>
                    </motion.div>

                    {/* Frontend */}
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="rounded-[28px] border border-purple-500/20 bg-purple-500/10 p-6 backdrop-blur-xl"
                    >
                      <p className="text-sm text-white/45 mb-3">
                        Frontend
                      </p>

                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                        React • Next.js • Tailwind
                      </h3>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}