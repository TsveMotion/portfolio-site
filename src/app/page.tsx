import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Experienced web developer
          <br />
          specializing in <span className="gradient-text">ReactJS</span>
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          I have a strong foundation in HTML, CSS, and JavaScript, and I am skilled in creating interactive and
          visually appealing websites.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Contact me
          </Link>
          <a
            href="/cv.pdf"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
