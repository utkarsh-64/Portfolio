"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Filter, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Data2Model - No code ML Model Training Platform",
    description:
      "A comprehensive ML platform for training various machine learning models with just one click.",
    date: "May 2024",
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Streamlit", "Scikit-learn"],
    features: [
      "No-code model training interface",
      "Support for multiple ML algorithms",
      "User-friendly Streamlit UI",
      "Automated preprocessing and evaluation",
    ],
    status: "Completed",
    // link: "#",
    github: "https://github.com/utkarsh-64/Data2Model",
  },
  {
    title: "Vizquery - Data Explanation Model",
    description:
      "An application for data understanding and visualization with zero coding.",
    date: "April 2024",
    category: "Machine Learning",
    technologies: ["Python", "Flask", "React", "PostegreSQL", "MySQL", "Langchain", "TensorFlow"],
    features: [
      "Text preprocessing and tokenization",
      "Transformer-based deep learning architecture",
      "REST API integration with Flask",
    ],
    status: "Completed",
    link: "https://vizquery.vercel.app",
    github: "https://github.com/utkarsh-64/SQL-And-Data-Visualisation-Agent",
  },
  {
    title: "Axion AI",
    description:
      "An application to Summarize documents, schedule interviews and resume filtering.",
    date: "March 2024",
    category: "Vision",
    technologies: ["React", "PostgreSQL", "TensorFlow", "Python", "Flask", "Groq"],
    features: [
      "Document reader",
      "Interview Scheduler",
      "Resume Filtering"
    ],
    status: "Completed",
    link: "https://axion-ai-ten.vercel.app/",
    github: "https://github.com/utkarsh-64/Axion.AI",
  },
  {
    title: "Hindustani vs Carnatic Audio Classification",
    description:
      "Machine learning model for classifying Indian classical music styles using advanced audio processing techniques.",
    date: "November 2024",
    category: "Machine Learning",
    technologies: ["Python", "Librosa", "Scikit-learn", "Pandas", "Numpy"],
    features: [
      "Audio feature extraction and analysis",
      "Deep learning classification model",
      "High accuracy music style detection",
      "Real-time audio processing",
    ],
    status: "Completed",
    github: "https://github.com/utkarsh-64/Indian-vs.-Carnatic-music-Classification",
  },
  {
    title: "Loan Management System",
    description:
      "Full-stack web application for managing loan applications, approvals, and tracking with intuitive user interface.",
    date: "October 2024",
    category: "Web Development",
    technologies: ["MySQL", "Python", "Streamlit"],
    features: [
      "User authentication and authorization",
      "Loan application processing",
      "Payment tracking and management",
      "Administrative dashboard",
    ],
    status: "Completed",
    github:"https://github.com/utkarsh-64/Loan-Management-System",
    link:"https://loan-management-system.streamlit.app/"
  },
  {
    title: "BDM Capstone - Coffee Shop Data Analysis",
    description:
      "Comprehensive business data analysis project focusing on coffee shop operations, customer behavior, and revenue optimization.",
    date: "Ongoing",
    category: "Data Analysis",
    technologies: ["Python", "MySQL", "Tableau", "Pandas"],
    features: [
      "Customer behavior analysis",
      "Sales trend identification",
      "Revenue optimization strategies",
      "Interactive business dashboards",
    ],
    status: "In Progress",
  },
  // {
  //   title: "Life Expectancy Prediction Using ML",
  //   description:
  //     "Predictive analytics model for estimating life expectancy based on various socio-economic and health factors.",
  //   date: "May 2024",
  //   category: "Predictive Analytics",
  //   technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  //   features: ["Multi-factor analysis", "Regression modeling", "Data visualization", "Statistical insights"],
  //   status: "Completed",
  //   github:"",
  //   link:""
  // },
  {
    title: "Sportans - Sports Analytics Platform",
    description:
      "A sports analytics platform providing data-driven insights for performance optimization and strategic decision making.",
    date: "July 2024",
    category: "Data Science",
    technologies: ["Python", "MySQL", "Streamlit", "PowerBI"],
    features: [
      "Real-time sports data analysis",
      "Interactive dashboards and visualizations",
      "Performance metrics tracking",
      "Strategic insights generation",
    ],
    status: "Completed",
    github:"https://github.com/utkarsh-64/Sportans",
    link:"https://sportans.streamlit.app/"
  },
  {
    title: "Kyphosis Disease Prediction",
    description:
      "Medical AI application for predicting kyphosis disease occurrence using machine learning classification techniques.",
    date: "May 2024",
    category: "Medical AI",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Matplotlib"],
    features: [
      "Medical data preprocessing",
      "Ensemble learning methods",
      "High-accuracy predictions",
      "Clinical decision support",
    ],
    status: "Completed",
    github:"https://github.com/utkarsh-64/Kyphosis-Disease-Prediction",
    //link:""
  },
  {
    title: "Customer Churn Analysis using PySpark",
    description:
      "Automated big data processing pipeline for churn prediction and large-scale ETL operations.",
    date: "February 2024",
    category: "Data",
    technologies: ["Apache Spark", "Airflow", "PostgreSQL", "Docker"],
    features: [
      "Distributed data handling with PySpark",
      "Scheduled ETL tasks using Airflow",
      "Relational data storage with PostgreSQL",
      "Containerized deployment using Docker",
    ],
    status: "Completed",
    //link: "#",
    github: "https://github.com/utkarsh-64/Customer-churn-analysis-using-PySpark",
  },
  {
    title: "Health Insurance Amount Prediction",
    description:
      "A predictive model to estimate the health insurance claim amount based on user inputs and historical data.",
    date: "January 2024",
    category: "Machine Learning",
    technologies: ["Python", "Streamlit", "PowerBI", "Kaggle"],
    features: [
      "Regression-based prediction model",
      "Interactive Streamlit dashboard",
      "Data visualization with PowerBI",
      "Cleaned and processed dataset from Kaggle",
    ],
    status: "Completed",
    link: "https://insurance-prediction-model.streamlit.app/",
    github: "https://github.com/utkarsh-64/Health-Insurance-Prediction-Model",
  }
]

const categories = [
  "All",
  "Data Science",
  "Machine Learning",
  "Web Development",
  "Data Analysis",
  "Predictive Analytics",
  "Medical AI",
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI/ML, data science, and web development, demonstrating practical
            application of cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                    <AnimatePresence>
                      {selectedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
