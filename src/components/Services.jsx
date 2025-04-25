const Services = ({ darkMode }) => {
  const services = [
        {
          title: 'SEO Optimization',
          description:
            'Improve your search engine rankings and drive organic traffic to your website with our proven SEO strategies.',
          icon: '🔍',
        },
        {
          title: 'Social Media Marketing',
          description:
            'Engage your audience and grow your brand presence across all major social media platforms.',
          icon: '📱',
        },
        {
          title: 'Content Marketing',
          description:
            'Create compelling content that resonates with your audience and drives conversions.',
          icon: '✍️',
        },
        {
          title: 'PPC Advertising',
          description:
            'Launch targeted ad campaigns that deliver measurable results and maximize your ROI.',
          icon: '💰',
        },
        {
          title: 'Web Design',
          description:
            'Beautiful, responsive websites designed to convert visitors into customers.',
          icon: '💻',
        },
        {
          title: 'Analytics',
          description:
            'Data-driven insights to measure performance and optimize your marketing efforts.',
          icon: '📊',
        },
      ];

  return (
    <section
      id="services"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-blue-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-blue-200' : 'text-blue-800'
          }`}>
            Comprehensive digital marketing solutions tailored to your business
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-grow group ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}
            >
              <div className="text-4xl mb-4 group-hover:text-blue-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className={darkMode ? 'text-blue-100' : 'text-blue-800'}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;