"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-cyan-500/10 blur-[130px]" />

      <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-violet-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            {/* AVAILABILITY BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-8 md:mb-10">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-xs sm:text-sm tracking-wide text-white/65">
                Available for freelance work
              </span>
            </div>

            {/* HEADING */}
            <div className="leading-[0.92] tracking-[-0.05em]">
              <h1 className="text-[48px] xs:text-[54px] sm:text-[72px] md:text-[88px] lg:text-[102px] xl:text-[112px] font-semibold text-white">
                Crafting
              </h1>

              <h1 className="text-[48px] xs:text-[54px] sm:text-[72px] md:text-[88px] lg:text-[102px] xl:text-[112px] font-semibold text-white/35">
                Premium
              </h1>

              <h1 className="text-[48px] xs:text-[54px] sm:text-[72px] md:text-[88px] lg:text-[102px] xl:text-[112px] font-semibold text-white/35">
                Digital
              </h1>

              <h1 className="text-[48px] xs:text-[54px] sm:text-[72px] md:text-[88px] lg:text-[102px] xl:text-[112px] font-semibold text-white">
                Experiences
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-7 md:mt-9 max-w-xl text-[15px] sm:text-[17px] md:text-lg leading-[1.9] text-white/55 pr-1 sm:pr-0">
              Frontend Developer & UI/UX Designer focused on
              building modern, immersive, and visually refined
              digital products with scalable frontend systems and
              premium user experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-12">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 h-[58px] sm:h-[62px] px-8 sm:px-9 rounded-full bg-white text-black text-[15px] sm:text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                View Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 h-[58px] sm:h-[62px] px-8 sm:px-9 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white text-[15px] sm:text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Me

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mt-14 md:mt-16">
              {/* CARD 1 */}
              <div className="min-h-[135px] sm:min-h-[160px] rounded-[26px] sm:rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between">
                <h3 className="text-[34px] sm:text-5xl font-semibold tracking-tight text-white">
                  10+
                </h3>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                  Projects
                </p>
              </div>

              {/* CARD 2 */}
              <div className="min-h-[135px] sm:min-h-[160px] rounded-[26px] sm:rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between">
                <h3 className="text-[34px] sm:text-5xl font-semibold tracking-tight text-white">
                  2+
                </h3>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                  Years Experience
                </p>
              </div>

              {/* CARD 3 */}
              <div className="col-span-2 sm:col-span-1 min-h-[135px] sm:min-h-[160px] rounded-[26px] sm:rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between">
                <h3 className="text-[34px] sm:text-5xl font-semibold tracking-tight text-white">
                  100%
                </h3>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative max-w-[560px] w-full mx-auto lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-7 lg:p-8">
              {/* INNER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

              <div className="relative z-10">
                {/* LABEL */}
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-7 sm:mb-8">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-white/55">
                    Currently Learning
                  </span>
                </div>

                {/* MAIN TEXT */}
                <h2 className="text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.02] tracking-[-0.04em] font-semibold text-white">
                  Full Stack
                  <br />
                  Development &
                  <br />
                  AI Architecture
                </h2>

                {/* SKILL BOXES */}
                <div className="space-y-5 mt-9 sm:mt-10">
                  {/* DESIGN */}
                  <div className="rounded-[24px] sm:rounded-[26px] border border-cyan-500/20 bg-cyan-500/10 p-5 sm:p-7">
                    <p className="text-sm text-white/45 mb-3">
                      Design
                    </p>

                    <h3 className="text-[19px] sm:text-[24px] font-semibold tracking-tight text-white">
                      UI/UX & Visual Systems
                    </h3>
                  </div>

                  {/* FRONTEND */}
                  <div className="rounded-[24px] sm:rounded-[26px] border border-violet-500/20 bg-violet-500/10 p-5 sm:p-7">
                    <p className="text-sm text-white/45 mb-3">
                      Frontend
                    </p>

                    <h3 className="text-[19px] sm:text-[24px] font-semibold tracking-tight text-white">
                      React • Next.js • Tailwind
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}