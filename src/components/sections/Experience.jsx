import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Generative Artificial Intelligence Intern',
      company: 'VectoScalar Technologies',
      period: 'Dec 2024 - Current',
      description: 'Developed generative AI-powered agentic features (Langchain, Autogen), including a workflow toolthat reduced development effort. Developed an LLM-based question-answering application for students, achieving a 92% accuracy ratein answer generation.',
    },
    {
      title: 'AI Robustness Testing Research Intern',
      company: 'Defence Research and Development Organisation (DRDO)',
      period: 'Nov 2023 - Jan 2024',
      description: 'Conducted robustness testing of Tensorflow-based Al models, identifying vulnerabilities and failure points. Improved model robustness by 6% through adversarial training Integrated robustness testing seamlessly into the Tensorflow-based AI development lifecycle resulting in a more streamlined testing process and earlier detection of vulnerabilities.',
    },
    {
      title: 'Software Development Intern',
      company: 'Ascendiya Technologies',
      period: 'Nov 2023 - Dec 2023',
      description: 'Developed responsive interfaces with react.js, emphasizing reusable components and design. Utilized Git/Github for version control and seamless collaboration within the development team.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 md:mb-0 relative ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'
              } md:w-1/2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-md
                              md:left-1/2 md:transform md:-translate-x-1/2">
                <FaBriefcase />
              </div>

              {/* Content */}
              <div className={`p-6 bg-white rounded-lg shadow-md border-l-4 border-primary relative md:border-l-0
                              ${index % 2 === 0 ? 'md:border-r-4' : 'md:border-l-4'}`}>
                <div className="md:hidden absolute -left-3 top-5 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10">
                  <FaBriefcase className="text-sm" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <h4 className="text-gray-600 mb-3">{exp.company}</h4>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
