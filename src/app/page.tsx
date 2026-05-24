"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/navbar/Navbar";

import Hero from "@/sections/Hero";

import About from "@/sections/About";

import Experience from "@/sections/Experience";

import Projects from "@/sections/Projects";

import Skills from "@/sections/Skills";

import Contact from "@/sections/Contact";

import PageLoader from "@/components/loaders/PageLoader";

export default function Home() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <PageLoader isLoading={loading} />
    );
  }

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>
    </>
  );
}