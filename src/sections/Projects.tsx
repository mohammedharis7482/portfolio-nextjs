"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import ProjectModal from "@/components/projects/ProjectModal";

import Reveal from "@/components/animations/Reveal";

import StaggerContainer from "@/components/animations/StaggerContainer";

import StaggerItem from "@/components/animations/StaggerItem";

const projects = [
  {
    title: "Sports Booking Dashboard",

    category: "UI/UX + FRONTEND",

    image: "/projects/sports-dashboard.jpg",

    imagePosition: "center",

    description:
      "Modern sports booking dashboard designed and developed with analytics systems, scheduling management, and premium SaaS-style experiences.",

    role:
      "UI/UX Designer & Frontend Developer",

    timeline: "3 Weeks",

    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Figma",
    ],

    challenge:
      "Creating a scalable sports management dashboard with modern SaaS aesthetics while maintaining usability and responsive architecture.",

    solution:
      "Designed and developed a premium dashboard experience with reusable UI systems and modern frontend interactions.",

    outcome:
      "Delivered a modern sports booking dashboard with premium user experience and scalable frontend structure.",
  },

  {
    title: "Turf Booking Application",

    category: "MOBILE APP UI/UX",

    image: "/projects/turf-booking.jpg",

    imagePosition: "top",

    description:
      "Sports turf booking mobile application designed for seamless reservations and premium mobile experiences.",

    role: "UI/UX Designer",

    timeline: "2 Weeks",

    tools: [
      "Figma",
      "Prototype",
      "UI Design",
      "Design Systems",
    ],

    challenge:
      "Simplifying the turf reservation process while creating an intuitive and visually premium mobile experience.",

    solution:
      "Created a clean booking flow with modern UI systems and user-focused mobile interaction patterns.",

    outcome:
      "Built a polished real-world mobile application case study with premium interface presentation.",

    behance:
      "https://www.behance.net/gallery/241703089/PlaySphere-Turf-Booking-App",
  },

  {
    title: "Baladna Offer Mart",

    category: "COMMERCIAL APP UI/UX",

    image: "/projects/baladna-app.jpg",

    imagePosition: "top",

    description:
      "Qatar-based supermarket mobile application focused on product discovery, offers, and seamless shopping experiences.",

    role: "UI/UX Designer",

    timeline: "3 Weeks",

    tools: [
      "Figma",
      "Branding",
      "Mobile UI",
      "Prototype",
    ],

    challenge:
      "Designing a visually organized shopping experience that improves product discovery and promotional visibility.",

    solution:
      "Developed a modern supermarket application interface with strong hierarchy and customer-friendly interaction flows.",

    outcome:
      "Created a polished mobile shopping application optimized for usability and engagement.",

    behance:
      "https://www.behance.net/gallery/245109953/baladna-Mobile-App",
  },

  {
    title: "Ecommerce Frontend Website",

    category: "FRONTEND DEVELOPMENT",

    image: "/projects/ecommerce.jpg",

    imagePosition: "center",

    description:
      "Responsive ecommerce frontend focused on premium product presentation and smooth shopping interactions.",

    role: "Frontend Developer",

    timeline: "2 Weeks",

    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],

    challenge:
      "Building a scalable ecommerce frontend with modern layouts and responsive architecture.",

    solution:
      "Developed reusable frontend components with premium UI interactions and responsive design systems.",

    outcome:
      "Delivered a polished ecommerce frontend with strong visual consistency across devices.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <div className="absolute top-32 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <Reveal className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-5">
            Selected Projects
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-[-0.04em]">
            Real Projects &
            <br />

            <span className="text-white/45">
              Digital Experiences
            </span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
            A curated collection of real-world UI/UX,
            frontend development, and digital product
            experiences crafted with modern visual
            systems and premium interaction design.
          </p>
        </Reveal>

        {/* Grid */}
        <StaggerContainer className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.button
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.45,
                }}
                onClick={() =>
                  setSelectedProject(project)
                }
                className="group relative overflow-hidden rounded-[40px] border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-2xl text-left w-full transition-all duration-700"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[420px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={false}
                    className={`object-cover transition duration-700 group-hover:scale-105 ${
                      project.imagePosition === "top"
                        ? "object-top"
                        : "object-center"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-[11px] uppercase tracking-[0.22em] text-white/70">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.03em] mb-5">
                    {project.title}
                  </h3>

                  <p className="text-white/55 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tools
                      .slice(0, 3)
                      .map((tool) => (
                        <div
                          key={tool}
                          className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/70"
                        >
                          {tool}
                        </div>
                      ))}
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/75 text-sm tracking-wide">
                      View Project Details
                    </span>

                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/[0.03] group-hover:bg-white group-hover:text-black transition-all duration-500">
                      ↗
                    </div>
                  </div>
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <ProjectModal
  project={selectedProject}
  isOpen={!!selectedProject}
  onClose={() =>
    setSelectedProject(null)
  }
/>
    </section>
  );
}