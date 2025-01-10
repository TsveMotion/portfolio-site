import Image from "next/image";

const projects = [
  {
    title: "Quizzq.com",
    description: "A comprehensive educational platform designed to enhance learning through interactive quizzes and assessments. Features include customizable quiz creation, real-time progress tracking, and a rich library of educational content across various subjects. This is a private repository project.",
    image: "/quizzq.png",
    technologies: ["Next.js", "Supabase", "Vercel", "TailwindCSS"],
    features: [
      "Interactive quiz builder with multiple question types",
      "Student progress tracking and analytics",
      "Subject-specific content libraries",
      "Teacher dashboard for class management",
      "Real-time performance feedback"
    ],
    link: "https://quizzq.com"
  }
];

export default function Projects() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-gray-400 mt-2">Crafting memorable digital experiences.</p>
        </div>
        
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#111111] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative h-[400px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-lg">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Visit Website
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
