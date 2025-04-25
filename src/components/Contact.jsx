import { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-blue-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-blue-200' : 'text-blue-800'
          }`}>
            Ready to take your digital presence to the next level? Contact us
            today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 p-8 rounded-xl shadow-md transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}
            >
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-blue-200' : 'text-blue-800'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    darkMode
                      ? 'bg-gray-600 border-gray-500 text-white'
                      : 'border-blue-200'
                  }`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-blue-200' : 'text-blue-800'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    darkMode
                      ? 'bg-gray-600 border-gray-500 text-white'
                      : 'border-blue-200'
                  }`}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-blue-200' : 'text-blue-800'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    darkMode
                      ? 'bg-gray-600 border-gray-500 text-white'
                      : 'border-blue-200'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover-grow"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="fade-in">
            <div className={`p-8 rounded-xl shadow-lg h-full transition-colors duration-300 ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-blue-900 text-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-blue-300' : 'text-blue-200'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-gray-600' : 'bg-blue-700'
                  }`}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-bold ${
                      darkMode ? 'text-blue-300' : 'text-blue-100'
                    }`}>Phone</h4>
                    <p className={darkMode ? 'text-blue-200' : 'text-blue-300'}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-gray-600' : 'bg-blue-700'
                  }`}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-bold ${
                      darkMode ? 'text-blue-300' : 'text-blue-100'
                    }`}>Email</h4>
                    <p className={darkMode ? 'text-blue-200' : 'text-blue-300'}>
                      info@digitalpro.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-gray-600' : 'bg-blue-700'
                  }`}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-bold ${
                      darkMode ? 'text-blue-300' : 'text-blue-100'
                    }`}>Office</h4>
                    <p className={darkMode ? 'text-blue-200' : 'text-blue-300'}>
                      123 Digital Lane, Suite 100
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className={`font-bold mb-4 ${
                  darkMode ? 'text-blue-300' : 'text-blue-100'
                }`}>Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className={`hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          darkMode ? 'bg-gray-600' : 'bg-blue-800'
                        }`}
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;