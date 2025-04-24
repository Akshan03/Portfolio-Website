import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaMobileAlt, FaServer,
  FaSearch, FaPalette, FaRocket
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'AI Application Development',
      description: 'Building intelligent applications using LangGraph/Langchain, Autogen, and other AI frameworks to solve complex problems.',
    },
    {
      icon: <FaServer />,
      title: 'API Development',
      description: 'Creating robust and scalable APIs using FastAPI to connect your frontend with powerful backend services.',
    },
    {
      icon: <FaSearch />,
      title: 'Machine Learning Solutions',
      description: 'Developing custom machine learning models for classification, prediction, and data analysis using Python and scikit-learn.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'NLP & Text Analysis',
      description: 'Implementing natural language processing solutions for text classification, sentiment analysis, and information extraction.',
    },
    {
      icon: <FaPalette />,
      title: 'Data Visualization',
      description: 'Creating insightful and interactive data visualizations using Matplotlib, Seaborn, and other visualization libraries.',
    },
    {
      icon: <FaRocket />,
      title: 'AI Model Testing & Optimization',
      description: 'Testing and optimizing AI models for robustness, performance, and efficiency to ensure reliable results in production.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Here are the services I offer to help bring your digital ideas to life
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm border-b-4 border-primary hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 text-3xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
