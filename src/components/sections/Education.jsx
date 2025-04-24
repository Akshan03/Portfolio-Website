import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      degree: 'B.Tech Computer Science and Engineering',
      institution: 'Vellore Institute of Technology, Chennai',
      period: '2021 - 2025',
      description: 'Studying Computer Science with coursework in Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Operating Systems, Machine Learning, Artificial Intelligence, Object-Oriented Programming, Statistics & Applications.',
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'Mother\'s Global School',
      period: '2021',
      description: 'Completed senior secondary education with focus on science and mathematics.',
    },
    {
      degree: 'Class X (CBSE)',
      institution: 'Mother\'s Global School',
      period: '2019',
      description: 'Completed secondary education with strong academic performance.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-secondary"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-secondary text-2xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-gray-600 mb-3">{edu.institution}</h4>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
