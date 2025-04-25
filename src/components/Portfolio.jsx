const Portfolio = ({ darkMode }) => {
  const projects = [
    {
      title: 'E-commerce SEO',
      description: 'Increased organic traffic by 250% in 6 months',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Social Media Campaign',
      description: 'Grew Instagram following from 0 to 10k in 3 months',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Brand Website',
      description: 'Designed and developed a converting brand website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'PPC Strategy',
      description: 'Reduced CAC by 40% while increasing conversions',
      category: 'Advertising',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Content Strategy',
      description: 'Developed a content calendar that boosted engagement',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Created custom dashboards for performance tracking',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];


  return (
    <section
      id="portfolio"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-900'
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-blue-200' : 'text-blue-800'
            }`}>
            See how we've helped businesses like yours achieve remarkable
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-grow ${darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-800 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">
                    Know More
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
                  {project.category}
                </span>

                <h3
                  className={`${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-white'
                    }`}
                >{project.title}</h3>

                <p className={`${darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >{project.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;