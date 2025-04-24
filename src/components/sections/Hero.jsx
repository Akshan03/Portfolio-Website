import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import profileImage from '../../assets/images/profile.jpg'; // Update this path to match your actual image file

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-light to-gray-100 pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg text-primary font-semibold mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Akshan Verma
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-600 mb-6">
              <span className="text-secondary">AI Engineer</span> & Developer
            </h3>
            <p className="text-gray-700 mb-8 max-w-lg">
              I specialize in Generative AI, Machine Learning, and Software Development.
              Let's collaborate to bring innovative solutions to life!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary flex items-center"
              >
                Contact Me
              </a>
              <a
                href="/assets/resume.pdf"
                className="btn-outline flex items-center"
                download
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/Akshan03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/akshan-verma03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src={profileImage}
                  alt="Akshan Verma"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
