"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },

  {
    name: "About",
    href: "#about",
  },

  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Projects",
    href: "#projects",
  },

  {
    name: "Experience",
    href: "#experience",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 180 &&
          rect.bottom >= 180
        ) {
          setActiveSection(
            section.id
          );
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-5">
          <div className="h-[78px] rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl px-6 md:px-8 flex items-center justify-between shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
            {/* LEFT */}
            <Link
              href="/"
              className="flex items-center gap-4"
            >
              {/* LOGO */}
              <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold tracking-[0.22em]">
                MH
              </div>

              {/* TEXT */}
              <div className="hidden sm:block">
                <h2 className="text-sm font-medium tracking-wide">
                  Mohammed Haris
                </h2>

                <p className="text-xs text-white/40 mt-0.5">
                  Frontend Developer
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive =
                  activeSection ===
                  link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-5 py-3 rounded-full text-sm transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {/* ACTIVE BG */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      />
                    )}

                    <span className="relative z-10">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              {/* CONTACT BUTTON */}
              <a
                href="#contact"
                className="hidden md:flex h-[48px] px-6 rounded-full bg-white text-black items-center justify-center text-sm font-medium hover:scale-[1.03] transition duration-300"
              >
                Let’s Talk
              </a>

              {/* MOBILE BUTTON */}
              <button
                onClick={() =>
                  setMobileMenuOpen(
                    !mobileMenuOpen
                  )
                }
                className="lg:hidden w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-[100px] left-6 right-6 z-[99998] lg:hidden"
          >
            <div className="rounded-[30px] border border-white/10 bg-black/70 backdrop-blur-2xl p-5">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      setMobileMenuOpen(
                        false
                      )
                    }
                    className="h-[58px] rounded-2xl px-5 flex items-center text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* MOBILE CONTACT */}
              <a
                href="#contact"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="mt-5 h-[56px] rounded-2xl bg-white text-black flex items-center justify-center font-medium"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}