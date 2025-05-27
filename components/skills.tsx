"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Brain, Wrench, Users, Filter, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    name: "Programming",
    icon: Code,
    color: "neon-cyan",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "Java", level: 50 },
      { name: "C", level: 70 },
      { name: "HTML", level: 65 },
    ],
  },
  {
    name: "ML/AI Frameworks",
    icon: Brain,
    color: "neon-magenta",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 60 },
      { name: "NLTK", level: 60 },
      { name: "PySpark", level: 75 },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: Wrench,
    color: "neon-green",
    skills: [
      { name: "GitHub", level: 80 },
      { name: "PowerBI", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "GCP", level: 75 },
      { name: "Streamlit", level: 70 }
    ],
  },
  // {
  //   name: "Databases",
  //   icon: Database,
  //   color: "neon-blue",
  //   skills: [
  //     { name: "PostgreSQL", level: 85 },
  //     { name: "MySQL", level: 90 },
  //     { name: "SQLite", level: 85 },
  //   ],
  // },
  {
    name: "Soft Skills",
    icon: Users,
    color: "neon-yellow",
    skills: [
      // { name: "Leadership", level: 90 },
      // { name: "Public Speaking", level: 85 },
      { name: "Event Management", level: 88 },
      { name: "Time Management", level: 85 },
      { name: "Writing", level: 80 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.name.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
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
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-neon-magenta animate-pulse" />
            <h2 className="responsive-heading font-cyber font-black neon-text">Skills.json</h2>
          </div>
          <p className="responsive-text text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            {"// A comprehensive toolkit spanning programming languages,"}
            <br className="hidden sm:block" />
            {"// ML frameworks, and essential soft skills for modern tech leadership."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12"
        >
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="cyber-button text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            All Skills
          </Button>
          {skillCategories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name.toLowerCase() ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name.toLowerCase())}
              className="cyber-button text-xs sm:text-sm px-2 sm:px-3 py-2"
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(" ")[0]}</span>
            </Button>
          ))}
        </motion.div>

        <div className="responsive-grid">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="cyber-card h-full p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div
                    className={`p-2 sm:p-3 bg-${category.color}/10 border border-${category.color}/30 rounded-lg neon-glow`}
                  >
                    <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-cyber">{category.name}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-300 font-mono">{skill.name}</span>
                        <span className={`text-xs sm:text-sm text-${category.color} font-mono`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-${category.color} h-full rounded-full neon-glow relative`}
                        >
                          <div className={`absolute inset-0 bg-${category.color} opacity-50 animate-pulse`} />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
