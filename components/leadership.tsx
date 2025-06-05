"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronDown, ChevronUp, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    role: "Student Intern",
    organization: "Microsoft & SAP - AICTE Internship",
    location: "Remote",
    duration: "Jan 2025 - Feb 2025",
    description: [
      "Participating in TechSaksham program focusing on cutting-edge AI technologies",
      "Developing independent AI projects under expert mentorship from industry leaders",
      "Acquiring industry-recognized credentials through structured learning program",
      "Collaborating with peers on innovative solutions for real-world challenges",
    ],
    responsibilities:["Developig an ML based solution for the problem statement"],
    technologies: ["AI/ML", "Python", "streamlit", "Data Science", "Huggingface"],
    current: true,
  },
  // {
  //   role: "Documentation Team Head",
  //   organization: "Symbitech Techfest",
  //   duration: "Jan 2025 - Feb 2025",
  //   type: "",
  //   description:
  //     "Leading the documentation team for one of the premier technical festivals, overseeing content creation and team coordination.",
  //   responsibilities: [
  //     "Managing documentation team and workflow",
  //     "Coordinating with multiple technical teams",
  //     "Ensuring quality and consistency in documentation",
  //     "Leading content strategy and implementation",
  //   ],
  //   current: true,
  // },
  {
    role: "Technical Community Member",
    organization: "Google Developer Student Club",
    duration: "Sept 2024 - Present",
    type: "",
    description:
      "Active member of GDSC contributing to technical workshops, community events, and collaborative learning initiatives.",
    responsibilities: [
      "Participating in technical workshops and events",
      "Contributing to community projects",
      "Mentoring junior developers",
      "Organizing coding sessions and hackathons",
    ],
    current: true,
  },
  {
    role: "Events Team Member",
    organization: "Cyber Blockchain Club",
    duration: "Nov 2024 - Present",
    type: "",
    description: "Contributing to blockchain and cybersecurity events, workshops, and educational initiatives.",
    responsibilities: [
      "Organizing blockchain workshops",
      "Coordinating cybersecurity events",
      "Managing event logistics and execution",
      "Engaging with industry professionals",
    ],
    current: true,
  },
  // {
  //   role: "Documentation and Media Team Member",
  //   organization: "Symbiosis Music Society",
  //   duration: "July 2024 - Present",
  //   type: "",
  //   description:
  //     "Managing documentation and media content for cultural events, concerts, and music-related activities.",
  //   responsibilities: [
  //     "Creating and managing media content",
  //     "Documenting cultural events and performances",
  //     "Coordinating with artists and performers",
  //     "Managing social media presence",
  //   ],
  //   current: true,
  // },
]

export default function Leadership() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="leadership" className="py-12 sm:py-16 lg:py-20 relative">
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
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green animate-pulse" />
            <h2 className="responsive-heading font-cyber font-black neon-text">Experience.log</h2>
          </div>
          <p className="responsive-text text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            {"// Active involvement in technical communities, cultural organizations,"}
            <br className="hidden sm:block" />
            {"// and leadership roles, fostering collaboration and driving impact."}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-neon-cyan/30" />

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-neon-green rounded-full border-4 border-cyber-dark neon-glow" />

                  <Card className="cyber-card ml-12 sm:ml-20 hover:scale-[1.02] transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant={item.current ? "default" : "secondary"} className="text-xs">
                              {item.current ? "Current" : "Completed"}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.type}
                            </Badge>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-cyber">{item.role}</h3>
                          <p className="text-base sm:text-lg font-semibold text-neon-cyan mb-3 font-mono">
                            {item.organization}
                          </p>

                          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 font-mono">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {item.duration}
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(index)}
                          className="cyber-button self-start md:self-center"
                        >
                          {expandedItems.includes(index) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base font-mono">{item.description}</p>

                      <AnimatePresence>
                        {expandedItems.includes(index) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="bg-cyber-light/30 rounded-lg p-3 sm:p-4 border border-neon-green/20">
                              <h4 className="font-semibold text-white mb-3 text-sm sm:text-base font-cyber">
                                Key Responsibilities:
                              </h4>
                              <ul className="space-y-2">
                                {item.responsibilities.map((responsibility, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 font-mono"
                                  >
                                    <span className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                                    {responsibility}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
