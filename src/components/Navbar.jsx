import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white text-gray-900 shadow-md' 
        : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Shankar Kumar</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#home" 
                className={`hover:bg-opacity-10 hover:bg-gray-900 px-3 py-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'hover:bg-gray-900' : 'hover:bg-white'
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`hover:bg-opacity-10 hover:bg-gray-900 px-3 py-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'hover:bg-gray-900' : 'hover:bg-white'
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`hover:bg-opacity-10 hover:bg-gray-900 px-3 py-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'hover:bg-gray-900' : 'hover:bg-white'
                }`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`hover:bg-opacity-10 hover:bg-gray-900 px-3 py-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'hover:bg-gray-900' : 'hover:bg-white'
                }`}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`hover:bg-opacity-10 hover:bg-gray-900 px-3 py-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'hover:bg-gray-900' : 'hover:bg-white'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? 'bg-white' : 'bg-gray-900'
          }`}>
            <a 
              href="#home" 
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-900' 
                  : 'hover:bg-white hover:bg-opacity-10 text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-900' 
                  : 'hover:bg-white hover:bg-opacity-10 text-white'
              }`}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-900' 
                  : 'hover:bg-white hover:bg-opacity-10 text-white'
              }`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-900' 
                  : 'hover:bg-white hover:bg-opacity-10 text-white'
              }`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-900' 
                  : 'hover:bg-white hover:bg-opacity-10 text-white'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 