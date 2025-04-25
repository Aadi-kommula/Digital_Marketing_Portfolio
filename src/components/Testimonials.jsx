const Testimonials = () => {
    const testimonials = [
      {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        company: 'TechStart Inc.',
        content:
          'Working with DigitalPro transformed our online presence. Our website traffic increased by 300% in just 4 months!',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        name: 'Michael Chen',
        role: 'CEO',
        company: 'EcoGoods',
        content:
          'Their social media strategy helped us build an engaged community that directly contributed to a 40% increase in sales.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        name: 'Emily Rodriguez',
        role: 'Founder',
        company: 'Bella Cosmetics',
        content:
          'The SEO work they did for us put us on the first page of Google for all our key terms. Absolutely worth the investment.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
    ];
  
    return (
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client <span className="text-blue-300">Testimonials</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about
              working with us.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover-grow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-blue-200 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-blue-100 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;