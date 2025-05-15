import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Predictive Analytics Dashboard",
    description: "A comprehensive analytics platform using machine learning for predictive insights and data visualization.",
    image: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "TensorFlow", "Streamlit", "Scikit-learn"],
    link: "#",
    github: "#",
    category: "ml"
  },
  {
    id: 2,
    title: "Natural Language Processing Tool",
    description: "An NLP application for sentiment analysis and text classification using deep learning.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["BERT", "PyTorch", "Transformers", "Flask"],
    link: "#",
    github: "#",
    category: "ml"
  },
  {
    id: 3,
    title: "Computer Vision System",
    description: "Real-time object detection and image classification system using deep learning.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["OpenCV", "YOLO", "TensorFlow", "Python"],
    link: "#",
    github: "#",
    category: "vision"
  },
  {
    id: 4,
    title: "Data Pipeline Architecture",
    description: "Automated data processing pipeline for large-scale data analysis and ETL operations.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Apache Spark", "Airflow", "PostgreSQL", "Docker"],
    link: "#",
    github: "#",
    category: "data"
  },
  {
    id: 5,
    title: "Hindustani vs Carnatic Audio Classification",
    description: "Developed an ML model to classify Hindustani and Carnatic music using audio features. Deployed via Streamlit.",
    image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Librosa", "Scikit-learn", "TensorFlow"],
    link: "#",
    github: "#",
    category: "ml"
  },
  {
    id: 6,
    title: "Loan Management System",
    description: "Designed and implemented a complete loan management system with ER diagrams and relational schema.",
    image: "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["MySQL", "Python", "Streamlit"],
    link: "#",
    github: "#",
    category: "data"
  },
  {
    id: 7,
    title: "BDM Capstone - Coffee Shop Analysis",
    description: "Analyzed customer behavior and sales trends using analytics techniques and dashboards for insights.",
    image: "https://images.pexels.com/photos/5857509/pexels-photo-5857509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "MySQL", "Tableau", "Pandas"],
    link: "#",
    github: "#",
    category: "data"
  },
  {
    id: 8,
    title: "Life Expectancy Prediction",
    description: "Built a predictive model estimating life expectancy using regression and feature engineering.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "#",
    github: "#",
    category: "ml"
  },
  {
    id: 9,
    title: "Kyphosis Disease Prediction",
    description: "Built a model to predict Kyphosis disease post-surgery using ensemble and decision tree techniques.",
    image: "https://images.pexels.com/photos/7088989/pexels-photo-7088989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Matplotlib"],
    link: "#",
    github: "#",
    category: "ml"
  },
  {
    id: 10,
    title: "Sportans - Sports Analytics Platform",
    description: "A platform offering sports analytics insights via ML and interactive dashboards.",
    image: "https://images.pexels.com/photos/3763870/pexels-photo-3763870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "MySQL", "Streamlit", "PowerBI"],
    link: "#",
    github: "#",
    category: "ml"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my data science and machine learning projects, showcasing real-world applications and innovative solutions.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setSelectedCategory('ml')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === 'ml' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Machine Learning
            </button>
            <button 
              onClick={() => setSelectedCategory('vision')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === 'vision' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Computer Vision
            </button>
            <button 
              onClick={() => setSelectedCategory('data')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === 'data' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Data Engineering
            </button>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <span>View Project</span>
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <span>Source Code</span>
                            <Github size={16} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {filteredProjects.length > 1 && (
              <>
                <button 
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none z-10"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none z-10"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            
            {filteredProjects.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index 
                        ? 'bg-blue-600 dark:bg-blue-500' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400 py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;