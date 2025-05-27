"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = [
  "AI/ML Student",
  "Data Science Enthusiast",
  "",
  "",
]

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const title = titles[currentTitle]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < title.length) {
            setDisplayText(title.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTitle((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitle])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 border border-neon-magenta/30 rotate-45 animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 border border-neon-green/30 rotate-12 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 sm:w-28 sm:h-28 border border-neon-blue/30 -rotate-12 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto responsive-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4 sm:mb-6"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green" />
            <span className="text-xs sm:text-sm font-mono text-neon-green">{"> initialized_portfolio.exe..."}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="responsive-heading font-cyber font-black mb-4 sm:mb-6"
          >
            <span className="neon-text animate-text-glow">Utkarsh</span>
            <br className="sm:hidden" />
            <span className="text-neon-magenta animate-text-glow"> Lakhani</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neon-cyan mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center font-mono"
          >
            <span className="mr-1">{">"}</span>
            <span>{displayText}</span>
            <span className="animate-pulse ml-1 text-neon-green">█</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="cyber-card p-4 sm:p-6 mb-6 sm:mb-8 max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-mono">
              {"// Coding intelligent solutions through code and creativity"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2 text-gray-300 font-mono">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-neon-cyan" />
              <span className="break-all">utkarshlj264@gmail.com</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neon-cyan/30" />
            <div className="flex items-center gap-2 text-gray-300 font-mono">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-neon-magenta" />
              <span>+91-9998908345</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            <a
              href="https://github.com/utkarsh-64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14 cyber-button">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/utkarsh-lakhani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14 cyber-button">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </a>

            <a
              href="/Resume_Utkarsh_Lakhani.pdf"
              download
            >
              <Button className="cyber-button px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>


          {/* Scroll indicator - removed text, only arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={scrollToAbout}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-neon-cyan hover:text-neon-magenta transition-colors"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex flex-col items-center"
            >
              <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-neon-cyan/30 animate-scanline" />
      </div>
    </section>
  )
}
