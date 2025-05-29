"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Zap, Lightbulb, Ghost, Bug, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Writings", href: "#research"},
  { name: "Achievements", href: "#achievements"},
  { name: "Experience", href: "#leadership"},
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const FunnyIconSwitcher = () => {
  const icons = [Lightbulb, Ghost, Bug, Rocket];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); // Change icon every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const Icon = icons[index];

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-neon-cyan/30"
    >
      <div className="scanlines" />
      <nav className="container mx-auto responsive-padding py-3 sm:py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-neon-cyan animate-pulse" />
          <span className="text-xl sm:text-2xl font-cyber font-bold neon-text">URL</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "text-neon-cyan neon-glow"
                  : "text-gray-300 hover:text-neon-cyan"
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan neon-glow"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 sm:w-9 sm:h-9 cyber-button"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 cyber-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden glass-morphism border-t border-neon-cyan/30"
      >
        <div className="container mx-auto responsive-padding py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors rounded ${
                activeSection === item.href.substring(1)
                  ? "text-neon-cyan bg-neon-cyan/10 neon-border"
                  : "text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/5"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
}
