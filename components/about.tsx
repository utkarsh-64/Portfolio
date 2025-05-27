"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Cpu, GraduationCapIcon } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in AI/ML",
    institution: "Symbiosis Institute of Technology, Pune",
    gpa: "8.70",
    status: "Third Year",
    icon: GraduationCap,
    color: "neon-cyan",
  },
  {
    degree: "Diploma in Data Science",
    institution: "IIT Chennai",
    gpa: "7.55",
    status: "ongoing",
    icon: GraduationCap,
    color: "neon-magenta",
  },
]

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-cyber-darker relative">
      <div className="scanlines" />
      <div className="container mx-auto responsive-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center responsive-margin"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green animate-pulse" />
            <h2 className="responsive-heading font-cyber font-black neon-text">About.exe</h2>
          </div>
          <p className="responsive-text text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            {"// A passionate AI/ML student developer pursuing dual degrees"}
            <br className="hidden sm:block" />
            {"// with a focus on building intelligent solutions"}
          </p>
        </motion.div>

        <div className="responsive-grid max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="cyber-card h-full p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className={`p-3 sm:p-4 bg-${edu.color}/10 border border-${edu.color}/30 rounded-lg neon-glow`}>
                    <edu.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${edu.color}`} />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-cyber">{edu.degree}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base font-mono">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span
                        className={`text-xs sm:text-sm px-2 py-1 bg-${edu.color}/20 text-${edu.color} rounded font-mono`}
                      >
                        {edu.status}
                      </span>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xs sm:text-sm text-gray-400 font-mono">GPA:</span>
                        <div className="flex-1 sm:w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(Number.parseFloat(edu.gpa) / 10) * 100}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className={`h-full bg-${edu.color} rounded-full neon-glow`}
                          />
                        </div>
                        <span className={`text-xs sm:text-sm font-bold text-${edu.color} font-mono min-w-[2rem]`}>
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
