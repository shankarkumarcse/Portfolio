const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I am a passionate Full Stack Developer with a strong foundation in web development
              and a keen eye for creating elegant solutions to complex problems.
            </p>
            <p className="text-lg text-gray-600">
              With expertise in both frontend and backend technologies, I strive to build
              applications that are not only functional but also provide an exceptional
              user experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Name:</h3>
                <p className="text-gray-600">Shankar Kumar</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email:</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location:</h3>
                <p className="text-gray-600">Your Location</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Availability:</h3>
                <p className="text-gray-600">Available for work</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900">Full Stack Developer</h4>
                <p className="text-gray-600">2020 - Present</p>
                <p className="text-gray-600 mt-2">
                  Working on various web development projects using modern technologies.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Bachelor's Degree in Computer Science</h4>
                <p className="text-gray-600">2016 - 2020</p>
                <p className="text-gray-600 mt-2">
                  Studied computer science with focus on web development and software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 