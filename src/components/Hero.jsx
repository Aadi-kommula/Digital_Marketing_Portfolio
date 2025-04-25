import { useEffect } from 'react';

const Hero = ({ darkMode }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section
      id="home"
      className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-blue-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Enhance Your{' '}
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-300'}`}>
                Digital Presence
              </span>
            </h1>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-blue-100'
            }`}>
              We craft stunning digital experiences that drive results and help
              your business grow in the online world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className={`${
                  darkMode
                    ? 'bg-blue-700 hover:bg-blue-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white px-6 py-3 rounded-lg font-medium transition-all hover-grow pulse-hover`}
              >
                Contact Us
              </a>
              <a
                href="#portfolio"
                className={`border ${
                  darkMode ? 'border-blue-400 hover:bg-gray-800' : 'border-blue-300 hover:bg-blue-800'
                } text-white px-6 py-3 rounded-lg font-medium transition-all hover-grow`}
              >
                View Work
              </a>
            </div>
          </div>
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              className={`rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto hover-grow`}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${
          darkMode
            ? 'from-gray-900 to-transparent opacity-20'
            : 'from-white to-transparent opacity-10'
        }`}
      ></div>
    </section>
  );
};

export default Hero;