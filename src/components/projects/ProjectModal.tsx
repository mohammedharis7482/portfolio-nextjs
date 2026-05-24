"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: any) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* MODAL */}
          <motion.div
            onClick={(e) =>
              e.stopPropagation()
            }
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[40px] border border-white/10 bg-[#070707] shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-6 right-6 z-[99999] w-12 h-12 rounded-full border border-white/10 bg-black/70 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition duration-300 cursor-pointer"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative h-[340px] md:h-[480px] overflow-hidden rounded-t-[40px]">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover ${
                  project.imagePosition ===
                  "top"
                    ? "object-top"
                    : "object-center"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/20 to-transparent" />

              {/* CATEGORY */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-white/70">
                {project.category}
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-6 md:px-12 py-10 md:py-14">
              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] mb-8">
                {project.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-14">
                {project.description}
              </p>

              {/* INFO GRID */}
              <div className="grid md:grid-cols-2 gap-6 mb-14">
                {/* ROLE */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                    Role
                  </p>

                  <h3 className="text-2xl font-medium">
                    {project.role}
                  </h3>
                </div>

                {/* TIMELINE */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                    Timeline
                  </p>

                  <h3 className="text-2xl font-medium">
                    {project.timeline}
                  </h3>
                </div>
              </div>

              {/* TOOLS */}
              <div className="mb-14">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">
                  Tools & Technologies
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.tools.map(
                    (tool: string) => (
                      <span
                        key={tool}
                        className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/70"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* CHALLENGE */}
              <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-5">
                  Challenge
                </p>

                <p className="text-white/65 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* SOLUTION */}
              <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-5">
                  Solution
                </p>

                <p className="text-white/65 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>

              {/* OUTCOME */}
              <div className="mb-14">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-5">
                  Outcome
                </p>

                <p className="text-white/65 leading-relaxed text-lg">
                  {project.outcome}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                {project.behance && (
                  <a
                    href={project.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[58px] px-8 rounded-full bg-white text-black flex items-center justify-center font-medium hover:scale-[1.03] transition duration-300"
                  >
                    View Case Study ↗
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="h-[58px] px-8 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/10 hover:text-white transition duration-300"
                >
                  Close Project
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}