import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Here you will find more information about me, what I do, and my current skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            <p className="text-gray-700 mb-4">
              I'm a <span className="font-medium">Computer Science Engineering student</span> at Vellore Institute of Technology, Chennai,
              specializing in AI, Machine Learning, and Software Development. Check out some of my work in the
              Projects section.
            </p>
            <p className="text-gray-700 mb-4">
              I have experience with Generative AI technologies like LangGraph/Langchain and Autogen, as well as
              FastAPI, NLP, and various ML libraries. I've worked as an intern at VectoScalar Technologies,
              Ascendiya Technologies, and DRDO.
            </p>
            <p className="text-gray-700 mb-6">
              I'm passionate about AI innovation and open to opportunities where I can contribute, learn and grow.
              If you have a project or opportunity that matches my skills, don't hesitate to contact me.
            </p>

            <a href="#contact" className="btn-primary inline-block">
              Contact Me
            </a>
          </motion.div>

          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaUser className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Name</h4>
                  <p className="font-medium">Akshan Verma</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Email</h4>
                  <p className="font-medium">akshanverma0310@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Phone</h4>
                  <p className="font-medium">+91 8448702639</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Location</h4>
                  <p className="font-medium">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaCalendarAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Education</h4>
                  <p className="font-medium">B.Tech CSE (2021-2025)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
