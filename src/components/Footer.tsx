
import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{portfolioData.personal.name}</h3>
              <p className="text-gray-400 leading-relaxed">
                {portfolioData.personal.title} passionate about creating beautiful, 
                functional web experiences that make a difference.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>{portfolioData.personal.email}</p>
                <p>{portfolioData.personal.phone}</p>
                <p>{portfolioData.personal.location}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center gap-2 mb-4 md:mb-0">
              Made with <Heart size={16} className="text-red-500" /> by {portfolioData.personal.name}
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">
                © 2024 All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                title="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;