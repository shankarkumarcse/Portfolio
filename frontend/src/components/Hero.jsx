const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image - Left Side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src="https://via.placeholder.com/400x400"
                alt="Shankar Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Hi, I'm <span className="text-blue-500">Shankar Kumar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 