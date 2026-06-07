import React, { useState, useEffect } from 'react';
import { Code, Database, BarChart3, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimatedBars(new Array(skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)).fill(true));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "green",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Code,
      color: "blue",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "React.js", level: 80 }
      ]
    },
    {
     title: "Salesforce",
     icon: BarChart3,
     color: "blue",
     skills: [
     { name: "Salesforce Administration", level: 93 },
     { name: "Profiles & Permission Sets", level: 88 },
     { name: "Roles & Sharing Rules", level: 85 },
     { name: "Reports & Dashboards", level: 89 }
     ]
    },
    {
      title: "Tools & Databases",
      icon: Database,
      color: "orange",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "SOQL", level: 78 }
      ]
    }
  ];

  const certifications = [
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata & Forage",
    date: "Aug 2025"
  },
  {
    name: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    date: "Jul 2025"
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco",
    date: "Mar 2025"
  }
];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-400 to-green-600 border-green-400",
      blue: "from-blue-400 to-blue-600 border-blue-400",
      purple: "from-purple-400 to-purple-600 border-purple-400",
      orange: "from-orange-400 to-orange-600 border-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  let skillIndex = 0;

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
              Technical <span className="text-green-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My expertise spans across programming, web development, Salesforce, and modern tools
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 transform transition-all duration-700 hover:scale-105 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white font-mono">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, index) => {
                      const currentIndex = skillIndex++;
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-green-400 font-mono text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                              style={{
                                width: animatedBars[currentIndex] ? `${skill.level}%` : '0%',
                                transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-gray-700/30 rounded-lg p-6 border border-gray-600 transform transition-all duration-500 hover:scale-105 hover:border-green-400/50 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 200)}ms` }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-green-400 text-sm font-mono">
                    {cert.date}
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

export default Skills;
