import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Thank you for visiting my portfolio website. Feel free to reach out if you have any questions or would like to collaborate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-primary" />
                <a href="mailto:akshanverma0310@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  akshanverma0310@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-primary" />
                <a href="tel:+918448702639" className="text-gray-300 hover:text-primary transition-colors">
                  +91 8448702639
                </a>
              </li>
              <li className="flex items-center">
                <FaGithub className="mr-2 text-primary" />
                <a href="https://github.com/Akshan03" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-2 text-primary" />
                <a href="https://www.linkedin.com/in/akshan-verma03" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Akshan Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
