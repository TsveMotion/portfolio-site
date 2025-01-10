export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
        "Modern UI/UX"
      ]
    },
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Creating beautiful, interactive user interfaces with attention to detail and performance.",
      features: [
        "Component Architecture",
        "State Management",
        "Animation & Transitions",
        "Cross-browser Compatibility"
      ]
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Improving website speed and performance for better user experience and SEO.",
      features: [
        "Load Time Optimization",
        "Code Splitting",
        "Caching Strategies",
        "Image Optimization"
      ]
    },
    {
      icon: "🔧",
      title: "Technical Consultation",
      description: "Expert advice on web technologies, architecture, and best practices.",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review",
        "Best Practices Implementation"
      ]
    }
  ];

  return (
    <div className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="text-gray-400 mt-2">Professional web development solutions tailored to your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#111111] p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
