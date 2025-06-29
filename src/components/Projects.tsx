import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Interactive Portfolio Website",
      description: "This very portfolio - a responsive, coding-themed showcase with advanced animations",
      longDescription: "A modern, interactive portfolio website built with React and TypeScript, featuring terminal-style animations, particle effects, and smooth transitions. This project demonstrates advanced frontend development skills with a focus on user experience and visual appeal.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML","CSS", "Javascript", "TypeScript"],
      github: "https://github.com/anshulmunjal01",
      demo: "#",
      features: [
        "Terminal-style typing animations",
        "Interactive particle background system",
        "Smooth page transitions with coding themes",
        "Responsive design for all devices",
        "Professional dark theme with accent colors",
        "SEO optimized and performance focused"
      ],
      metrics: [
        "30% increase in profile views",
        "15% improvement in search ranking",
        "25% boost in mobile engagement",
        "10% reduction in bounce rate"
      ]
    },
    {
      id: 2,
      title: "TaskSync - Assignment Management System",
      description: "Login-based web platform for assignment submissions and evaluations",
      longDescription: "A comprehensive assignment management system designed to streamline the academic workflow. Features secure authentication, real-time tracking, automated notifications, and detailed reporting capabilities for both students and educators.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP"],
      github: "https://github.com/anshulmunjal01",
      demo: "#",
      features: [
        "Secure user authentication with role-based access",
        "Real-time assignment tracking and notifications",
        "Automated grading and feedback system",
        "Progress tracking and analytics dashboard",
        "File upload and management system",
        "Responsive design for mobile and desktop"
      ],
      metrics: [
        "200+ active users",
        "20% reduction in administrative overhead",
        "25% decrease in manual grading time",
        "Improved workflow efficiency"
      ]
    },
    {
      id: 3,
      title: "Finding Shopping Trends using Data Analytics",
      description: "Interactive dashboard for consumer data analysis and visualization",
      longDescription: "A comprehensive data analytics project developed during my internship at TechSaksham. Features advanced data processing, machine learning algorithms, and interactive visualizations to derive actionable business insights from large datasets.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "Excel", "ML Algorithms"],
      github: "https://github.com/anshulmunjal01",
      demo: "#",
      features: [
        "Analysis of 10,000+ rows of consumer data",
        "Machine Learning algorithms (Linear Regression, K-Means)",
        "Interactive data visualizations",
        "Automated reporting and insights generation",
        "Predictive analytics for customer behavior",
        "Real-time dashboard updates"
      ],
      metrics: [
        "15% improvement in forecasting accuracy",
        "20% enhancement in customer predictions",
        "25% increase in reporting efficiency",
        "15 hours saved per week in manual work"
      ]
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
              Featured <span className="text-green-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing my expertise in web development, data analytics, and problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transform transition-all duration-700 hover:scale-105 hover:border-green-400/50 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openModal(project.id)}
                      className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                    >
                      Learn More →
                    </button>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-white font-mono">
                {selectedProjectData.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-gray-300 mb-6">
                    {selectedProjectData.longDescription}
                  </p>

                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProjectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProjectData.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {selectedProjectData.metrics && (
                    <>
                      <h4 className="text-lg font-semibold text-white mb-3">Impact & Results</h4>
                      <ul className="space-y-2 mb-6">
                        {selectedProjectData.metrics.map((metric, index) => (
                          <li key={index} className="text-blue-400 flex items-start">
                            <span className="text-green-400 mr-2">▸</span>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-6 border-t border-gray-700">
                <a
                  href={selectedProjectData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                {selectedProjectData.demo !== "#" && (
                  <a
                    href={selectedProjectData.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;