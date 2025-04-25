const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  // Color classes based on dark mode
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-blue-900';
  const headingColor = darkMode ? 'text-blue-300' : 'text-blue-200';
  const textColor = darkMode ? 'text-blue-200' : 'text-blue-100';
  const borderColor = darkMode ? 'border-gray-700' : 'border-blue-800';
  const hoverColor = 'hover:text-white';

  // Footer sections data
  const sections = [
    {
      title: 'DigitalPro',
      content: (
        <p className={textColor}>
          Helping businesses thrive in the digital world through innovative
          marketing strategies.
        </p>
      )
    },
    {
      title: 'Services',
      items: ['SEO', 'Social Media', 'Content Marketing', 'PPC', 'Web Design']
    },
    {
      title: 'Company',
      items: ['About Us', 'Careers', 'Blog', 'Contact', 'Privacy Policy']
    }
  ];

  const legalLinks = ['Terms', 'Privacy', 'Cookies'];

  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${bgColor} text-white`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>
                {section.title}
              </h3>
              {section.items ? (
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className={`${textColor} ${hoverColor} transition-colors`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                section.content
              )}
            </div>
          ))}
        </div>

        <div className={`border-t ${borderColor} pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${textColor} mb-4 md:mb-0`}>
            © {currentYear} DigitalPro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((item) => (
              <a
                key={item}
                href="#"
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;