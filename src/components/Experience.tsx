
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { generateResume } from '../utils/resumeGenerator';

const Experience = () => {
  const handleDownloadResume = () => {
    generateResume();
  };

  const experiences = portfolioData.experience;
  const education = portfolioData.education;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full mr-4"></div>
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-4 -bottom-4 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full mr-4"></div>
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-purple-600 dark:text-purple-400 font-semibold">
                            {edu.school}
                          </p>
                        </div>
                        <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      {edu.gpa && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>GPA:</strong> {edu.gpa}
                        </div>
                      )}
                      {edu.certificate && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Certificate:</strong> {edu.certificate}
                        </div>
                      )}
                    </div>
                    {index < education.length - 1 && (
                      <div className="absolute left-4 -bottom-4 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br/>
          <br/>

          {/* Certifications & Achievements */}
          <div className="grid lg:grid-cols-2 gap-14 mb-14">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-9 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full mr-4"></div>
                Certifications
              </h3>
              <div className="space-y-12">
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Languages */}
            <div className="space-y-5">
              {/* Achievements */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full mr-4"></div>
                  Achievements
                </h3>
                <div className="space-y-6">
                  {portfolioData.achievements.map((achievement, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
                        {achievement.organization} • {achievement.date}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full mr-4"></div>
                  Languages
                </h3>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="space-y-4">
                    {portfolioData.languages.map((language, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {language.name}
                        </span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {language.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-12">
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <ExternalLink size={20} />
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;