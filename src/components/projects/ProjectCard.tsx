"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: any;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0F]"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          {project.category}
        </p>

        <h3 className="text-3xl font-semibold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-white/60 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tools.map((tool: string) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white">
            View Project
          </span>

          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}