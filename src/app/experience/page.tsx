export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: [
        "Led the development of multiple high-impact React applications",
        "Implemented responsive designs and improved performance metrics by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description: [
        "Developed and maintained client websites using React and Next.js",
        "Collaborated with designers to implement pixel-perfect UI",
        "Integrated third-party APIs and services"
      ]
    },
    {
      title: "Web Developer",
      company: "Startup",
      period: "2019 - 2021",
      description: [
        "Built and deployed responsive websites",
        "Worked with HTML, CSS, JavaScript, and various frontend frameworks",
        "Participated in agile development processes"
      ]
    }
  ];

  return (
    <div className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p className="text-gray-400 mt-2">My professional journey in web development.</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500"
            >
              <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
              
              <div className="bg-[#111111] p-6 rounded-lg">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
