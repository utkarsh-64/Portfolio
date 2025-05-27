"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Research from "@/components/research"
import Achievements from "@/components/achievements"
import Leadership from "@/components/leadership"
import Contact from "@/components/contact"
import ParticlesBackground from "@/components/particles-background"
import ScrollProgress from "@/components/scroll-progress"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ParticlesBackground />
        <ScrollProgress />
        <Header />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Research />
          <Achievements />
          <Leadership />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
