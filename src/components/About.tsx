import React from 'react';
import { Code, Brain, Database, BarChart as ChartBar } from 'lucide-react';

const skills = [
  { 
    name: 'Machine Learning', 
    icon: <Brain />, 
    description: 'Developing and implementing machine learning models for real-world applications.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Neural Networks']
  },
  { 
    name: 'Data Analysis', 
    icon: <ChartBar />, 
    description: 'Analyzing complex datasets to extract meaningful insights and patterns.',
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  },
  { 
    name: 'Big Data Processing', 
    icon: <Database />, 
    description: 'Working with large-scale datasets and distributed computing systems.',
    technologies: ['Apache Spark', 'Hadoop', 'SQL', 'MongoDB']
  },
  { 
    name: 'Programming', 
    icon: <Code />, 
    description: 'Building efficient algorithms and data processing pipelines.',
    technologies: ['Python', 'R', 'Java', 'Data Structures']
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate Data Science and AI/ML student with a strong foundation in machine learning, 
              statistical analysis, and data visualization. I combine analytical thinking with technical expertise 
              to derive meaningful insights from complex data.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in data science has equipped me with the skills to tackle challenging problems 
              using cutting-edge machine learning techniques and data analysis tools. I'm particularly 
              interested in developing AI solutions that make a real-world impact.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</p>
                <p className="text-gray-600 dark:text-gray-400">ML Projects</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">20+</p>
                <p className="text-gray-600 dark:text-gray-400">Datasets Analyzed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</p>
                <p className="text-gray-600 dark:text-gray-400">Research Papers</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</p>
                <p className="text-gray-600 dark:text-gray-400">Competitions</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-bl-full"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">{skill.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;