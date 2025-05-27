"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Medal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    title: "Grand Finalist",
    event: "New India Vibrant Hackathon 2023",
    description:
      "Achieved grand finalist status in a national-level hackathon, showcasing innovative solutions and technical excellence among thousands of participants.",
    icon: Trophy,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    title: "Finalist",
    event: "Ideathon at BITS Pilani, Goa Campus",
    description:
      "Selected as finalist in prestigious entrepreneurial competition, demonstrating business acumen and innovative thinking in technology solutions.",
    icon: Award,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900",
  },
  {
    title: "Meritorious Scholarship",
    event: "Academic Excellence Recognition",
    description:
      "Awarded meritorious scholarship for achieving 4th rank in both Semester 1 and 2, recognizing consistent academic performance and dedication.",
    icon: Star,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in academics, innovation, and competitive programming, highlighting dedication to
            continuous learning and achievement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${achievement.bgColor} rounded-full mb-4`}
                  >
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>

                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{achievement.event}</p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Medal className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Continuous Excellence</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                These achievements reflect a commitment to excellence across academics, innovation, and competitive
                environments, driving continuous growth and learning.
              </p>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  )
}
