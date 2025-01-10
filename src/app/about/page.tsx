export default function About() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-gray-400 mt-2">Get to know me better</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate web developer with expertise in building modern, responsive web applications. 
              My focus is on creating intuitive user experiences while maintaining clean, efficient code.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">• React & Next.js</li>
                  <li className="text-gray-300">• TypeScript</li>
                  <li className="text-gray-300">• TailwindCSS</li>
                  <li className="text-gray-300">• HTML5 & CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Backend & Tools</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">• Node.js</li>
                  <li className="text-gray-300">• Supabase</li>
                  <li className="text-gray-300">• Git & GitHub</li>
                  <li className="text-gray-300">• Vercel</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <ul className="space-y-3">
              <li className="text-gray-300">• Build responsive and performant web applications</li>
              <li className="text-gray-300">• Create intuitive user interfaces with modern design principles</li>
              <li className="text-gray-300">• Implement robust backend solutions with modern technologies</li>
              <li className="text-gray-300">• Optimize applications for maximum speed and scalability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="bg-[#111111] p-6 rounded-lg">
              <h3 className="text-xl font-medium">Computer Science</h3>
              <p className="text-gray-400">Your University</p>
              <p className="text-gray-400">2020 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
