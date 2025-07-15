
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focus",
      description: "Creating beautiful user interfaces"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {portfolioData.summary}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I specialize in {portfolioData.skills.frontend.slice(0, 5).map(skill => skill.name).join(', ')}, with a strong focus 
                on responsive design and user experience. I believe in writing clean, maintainable 
                code and staying up-to-date with the latest industry trends and best practices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
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