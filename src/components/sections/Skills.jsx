import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaDatabase, FaDocker, FaCode, FaServer, FaBrain,
  FaRobot, FaChartBar, FaEye
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 90 },
        { name: 'C++', icon: <FaCode className="text-[#00599C]" />, level: 85 },
        { name: 'C', icon: <FaCode className="text-[#A8B9CC]" />, level: 80 },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 75 },
        { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" />, level: 70 },
      ]
    },
    {
      title: 'AI & ML Technologies',
      skills: [
        { name: 'LangGraph/Langchain', icon: <FaBrain className="text-[#339933]" />, level: 85 },
        { name: 'FastAPI', icon: <FaServer className="text-[#009688]" />, level: 80 },
        { name: 'LLMs & NLP', icon: <FaBrain className="text-[#FF6F00]" />, level: 85 },
        { name: 'Autogen', icon: <FaRobot className="text-[#FF4081]" />, level: 80 },
        { name: 'Scikit-learn', icon: <FaChartBar className="text-[#F7931E]" />, level: 75 },
      ]
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
        { name: 'NumPy & Pandas', icon: <FaChartBar className="text-[#150458]" />, level: 80 },
        { name: 'OpenCV', icon: <FaEye className="text-[#5C3EE8]" />, level: 80 },
        { name: 'MediaPipe', icon: <FaEye className="text-[#00A3E0]" />, level: 75 },
        { name: 'Matplotlib & Seaborn', icon: <FaChartBar className="text-[#11557C]" />, level: 75 },
        { name: 'MySQL', icon: <FaDatabase className="text-[#4479A1]" />, level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-center pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
