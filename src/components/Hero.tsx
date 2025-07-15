
import { ArrowDown, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { generateResume } from '../utils/resumeGenerator';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    generateResume();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                {portfolioData.personal.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                {portfolioData.summary}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
                <button 
                  onClick={handleDownloadResume}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/cropcopy.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;