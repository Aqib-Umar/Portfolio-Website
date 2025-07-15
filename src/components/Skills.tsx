
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const getSkillColor = (index: number) => {
    const colors = [
      "bg-orange-500", "bg-blue-500", "bg-yellow-500", 
      "bg-blue-600", "bg-cyan-500", "bg-teal-500",
      "bg-green-600", "bg-purple-500", "bg-red-500",
      "bg-purple-600", "bg-yellow-600", "bg-indigo-500"
    ];
    return colors[index % colors.length];
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: portfolioData.skills.frontend.map((skill, index) => ({
        ...skill,
        color: getSkillColor(index)
      }))
    },
    {
      title: "Backend & Tools",
      skills: portfolioData.skills.backend.map((skill, index) => ({
        ...skill,
        color: getSkillColor(index + portfolioData.skills.frontend.length)
      }))
    },
    {
      title: "Concepts & Methodologies",
      skills: portfolioData.skills.concepts.map((skill, index) => ({
        ...skill,
        color: getSkillColor(index + portfolioData.skills.frontend.length + portfolioData.skills.backend.length)
      }))
    }
  ];

  const technologies = [
    { name: "React.js", icon: "⚛️" },
    { name: "JavaScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "SQL", icon: "🗄️" },
    { name: "Git", icon: "📚" },
    { name: "Figma", icon: "🎯" },
    { name: "Swagger", icon: "🔧" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skill Levels */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Technologies I Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </div>
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