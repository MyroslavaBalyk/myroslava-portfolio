import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Myroslava</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A passionate web developer focused on creating beautiful and functional web experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/about" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 shadow-md"
                >
                  About Me
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md transition duration-300 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Replace with your profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-800">
                <Image
                  src="/profile-placeholder.jpg" // Replace with your image
                  alt="Myroslava's profile picture"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'JavaScript', icon: '📜' },
              { name: 'HTML/CSS', icon: '🌐' },
              { name: 'Git', icon: '📊' },
              { name: 'Responsive Design', icon: '📱' },
            ].map((skill, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-800"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Replace with your actual projects */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
              <div className="h-48 relative">
                <Image
                  src="/project-placeholder.jpg" // Replace with project image
                  alt="Project 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Short description of the project and the technologies used.</p>
                <div className="flex gap-2">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <span className="text-gray-400">|</span>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Additional project cards would go here */}
            {/* You can duplicate the above card and modify for more projects */}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 shadow-md"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Work Together</h2>
          <p className="text-xl mb-8 text-blue-100">I'm currently available for freelance work or full-time positions.</p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-md transition duration-300 shadow-md font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
