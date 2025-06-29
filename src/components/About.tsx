import React, { useState, useEffect } from 'react';
import { User, Calendar, MapPin, GraduationCap, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      institution: "ABES Engineering College, Ghaziabad (AKTU)",
      degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
      period: "Aug 2022 – Present",
      grade: "79.11% (Till 5th sem)",
      description: "Focused on computer engineering fundamentals with specialization in data analytics and software development."
    },
    {
      institution: "Darshan Academy, Delhi (CBSE)",
      degree: "Senior Secondary (Class XII)",
      period: "Apr 2021 – Mar 2022",
      grade: "88.6%",
      description: "Strong foundation in mathematics and computer science."
    },
    {
      institution: "Darshan Academy, Delhi (CBSE)",
      degree: "Secondary (Class X)",
      period: "Apr 2019 – Mar 2020",
      grade: "87%",
      description: "Excellent academic performance with focus on STEM subjects."
    }
  ];

  const experience = [
    {
      title: "Data Analytics Intern",
      company: "TechSaksham (AICTE x Microsoft x SAP)",
      period: "Dec 2024 – Jan 2025",
      location: "Remote",
      achievements: [
        "Analyzed 10,000+ rows of consumer data, improving forecasting accuracy by 15%",
        "Applied ML algorithms (Linear Regression, K-Means) enhancing predictions by 20%",
        "Developed interactive dashboards improving reporting efficiency by 25%",
        "Reduced manual reporting time by 15 hours per week"
      ]
    }
  ];

  const achievements = [
    "Solved 50+ algorithmic problems on LeetCode",
    "Core Team Member for tech event planning",
    "Top 10% in national coding competitions",
    "Smart India Hackathon participant"
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
              <span className="text-green-400">About</span> Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate computer engineering student with expertise in data analytics and development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4 font-mono">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a dedicated Computer Engineering student at ABES Engineering College 
                  with a strong passion for data analytics and full-stack development. 
                  My journey combines academic excellence with practical experience in 
                  machine learning, web development, and data visualization.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through internships and projects, I've developed expertise in analyzing 
                  large datasets, building responsive web applications, and creating 
                  efficient solutions that drive business value and user engagement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <User className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">Name</div>
                  <div className="text-white font-semibold">Anshul Munjal</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-semibold">Delhi, India</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <GraduationCap className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">Education</div>
                  <div className="text-white font-semibold">B.Tech CE</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <Code className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">LeetCode</div>
                  <div className="text-white font-semibold">100+ Problems</div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4 font-mono flex items-center">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2 mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
                Education & Experience
              </h3>
              
              {/* Experience */}
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:border-green-400/50 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h4>
                      <div className="text-blue-400 font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-green-400 text-sm font-mono">
                        {exp.period}
                      </span>
                      <div className="text-gray-400 text-sm">
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Education */}
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:border-blue-400/50 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <div className="text-blue-400 font-medium">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-green-400 text-sm font-mono">
                        {edu.period}
                      </span>
                      <div className="text-yellow-400 text-sm font-semibold">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;