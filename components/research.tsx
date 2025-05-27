"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const research = [
  {
    title: "Probability and Decision-Making in Self-Driving Cars",
    date: "October 2024",
    status: "Completed",
    description:
      "Comprehensive research on probabilistic models and decision-making algorithms in autonomous vehicle systems.",
    abstract:
      "This research explores the critical role of probability theory in autonomous vehicle decision-making systems. We investigate various probabilistic models used for sensor fusion, path planning, and risk assessment in self-driving cars. The study presents novel approaches to uncertainty quantification and decision optimization under dynamic traffic conditions.",
    keywords: ["Autonomous Vehicles", "Probability Theory", "Decision Making", "Machine Learning", "Safety Systems"],
    type: "Research Article",
  },
  {
    title: "Material Science & Aerospace Engineering Research",
    date: "Ongoing",
    status: "In Progress",
    description:
      "Interdisciplinary research project exploring advanced materials and their applications in aerospace engineering.",
    abstract:
      "This ongoing research investigates the intersection of material science and aerospace engineering, focusing on the development and analysis of advanced composite materials for aerospace applications. The study employs computational modeling techniques to predict material behavior under extreme conditions.",
    keywords: [
      "Material Science",
      "Aerospace Engineering",
      "Computational Modeling",
      "Composite Materials",
      "Performance Analysis",
    ],
    type: "Review Paper",
  },
]

export default function Research() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="research" className="py-12 sm:py-16 lg:py-20 bg-cyber-darker relative">
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
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-neon-magenta animate-pulse" />
            <h2 className="responsive-heading font-cyber font-black neon-text">Writings.md</h2>
          </div>
          <p className="responsive-text text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            {"// Contributing to academic knowledge through research in"}
            <br className="hidden sm:block" />
            {"// autonomous systems and interdisciplinary engineering applications."}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="cyber-card hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-neon-magenta/10 border border-neon-magenta/30 rounded-lg neon-glow">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-neon-magenta" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-cyber">{item.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 font-mono">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {item.date}
                          </div>
                          <Badge variant={item.status === "Published" ? "default" : "secondary"} className="text-xs">
                            {item.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
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
                        className="space-y-4"
                      >
                        <div className="bg-cyber-light/30 rounded-lg p-3 sm:p-4 border border-neon-cyan/20">
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base font-cyber">Abstract</h4>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-mono">{item.abstract}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base font-cyber">Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.keywords.map((keyword, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {item.status === "Published" && (
                          <Button variant="outline" className="cyber-button text-xs sm:text-sm">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            View Publication
                          </Button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
