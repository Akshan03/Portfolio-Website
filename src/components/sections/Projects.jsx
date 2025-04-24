import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Virtual Mouse using Hand Gestures',
      category: 'cv',
      image: 'https://via.placeholder.com/600x400',
      description: 'Developed a computer vision system that allows users to control their mouse cursor using hand gestures captured via webcam, enabling touchless computer interaction.',
      technologies: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI', 'Pynput', 'Computer Vision'],
      github: 'https://github.com/Akshan03/Virtual-Mouse',
      demo: null,
    },
    {
      title: 'Personal Finance Agentic AI',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400',
      description: 'Built a personal finance system with generative AI agents for budgeting, investment advice, and fraud detection.',
      technologies: ['FastAPI', 'Autogen/LangGraph', 'Pandas/NumPy', 'Hugging Face Transformers', 'MongoDB', 'React.js'],
      github: 'https://github.com/Akshan03/Personal-Finance-Agent',
      demo: 'https://personal-finance-ai-demo.com',
    },
    {
      title: 'AI Based Dynamic API Rate Limiter',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400',
      description: 'Developed an AI-driven API rate limiting system using the token bucket algorithm, dynamically adjusting user limits based on real-time traffic predictions from an LSTM model.',
      technologies: ['Python', 'LSTM', 'Isolation Forest', 'FastAPI', 'Redis'],
      github: 'https://github.com/Akshan03/Dynamic-API-Limiter',
      demo: 'https://api-rate-limiter-demo.com',
    },
    {
      title: 'AI-based Dynamic Pricing',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400',
      description: 'Implemented an intelligent pricing system that dynamically adjusts prices based on market demand, competitor analysis, and customer behavior patterns.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modeling'],
      github: 'https://github.com/Akshan03/AI-based-Dynamic-Pricing',
      demo: 'https://dynamic-pricing-demo.com',
    },
    {
      title: 'Image Classification',
      category: 'ml',
      image: 'https://via.placeholder.com/600x400',
      description: 'Use of OpenCV and HaarCascades in data cleaning. Implemented machine learning classification algorithms (SVM, Random Forest, Logistic Regression).',
      technologies: ['Python', 'OpenCV', 'SVM', 'Random Forest', 'Logistic Regression'],
      github: 'https://github.com/Akshan03/image-classification',
      demo: 'https://image-classification-demo.com',
    },
    {
      title: 'Multi-Modal and Multi-Lingual Chatbot',
      category: 'nlp',
      image: 'https://via.placeholder.com/600x400',
      description: 'Developed an NLP-based chatbot capable of handling text and voice inputs in multiple Indian local languages. Integrated various APIs and designed pipelines to provide seamless, multimodal responses using Flask.',
      technologies: ['Python', 'NLP', 'Flask', 'API Integration', 'Speech Recognition'],
      github: 'https://github.com/Akshan03/multilingual-chatbot',
      demo: 'https://multilingual-chatbot-demo.com',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const filterCategories = [
    { name: 'All', value: 'all' },
    { name: 'AI', value: 'ai' },
    { name: 'ML', value: 'ml' },
    { name: 'NLP', value: 'nlp' },
    { name: 'CV', value: 'cv' },
    { name: 'Web', value: 'web' },
    { name: 'Data', value: 'data' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Check out some of my recent work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {filterCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category.value)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === category.value
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
