import { DiReact, DiMongodb, DiNodejsSmall, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiMysql, SiPython, SiJavascript, SiDocker, SiTalend,
  SiPandas, SiNumpy, SiPostman, SiGit
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi"; // Power BI
import { motion } from "framer-motion";

export default function Competences() {
  const competences = [
    { name: "HTML5", icon: <DiHtml5 className="text-orange-500" />, level: "Intermédiaire" },
    { name: "CSS3", icon: <DiCss3 className="text-blue-500" />, level: "Intermédiaire" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Avancé" },
    { name: "React", icon: <DiReact className="text-cyan-400" />, level: "Avancé" },
    { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" />, level: "Intermédiaire" },
    { name: "MongoDB", icon: <DiMongodb className="text-green-700" />, level: "Débutant" },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" />, level: "Intermédiaire" },
    { name: "Python", icon: <SiPython className="text-blue-400" />, level: "Intermédiaire" },
    { name: "Tableau", icon: <IoLogoTableau className="text-blue-600" />, level: "Intermédiaire" },
    { name: "Power BI", icon: <FiBarChart className="text-yellow-500" />, level: "Intermédiaire" },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: "Intermédiaire" },
    { name: "Talend", icon: <SiTalend className="text-purple-600" />, level: "Débutant" },
    { name: "NumPy", icon: <SiNumpy className="text-blue-400" />, level: "Intermédiaire" },
    { name: "Pandas", icon: <SiPandas className="text-blue-300" />, level: "Intermédiaire" },
    { name: "API REST", icon: <SiPostman className="text-pink-500" />, level: "Intermédiaire" },
    { name: "Git", icon: <SiGit className="text-orange-600" />, level: "Intermédiaire" },
  ];

  return (
    <section id="competences" className="bg-black py-20 px-6 text-white snap-start">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-syncopate">Compétences</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {competences.map((comp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.05, duration: 0.5 }
                }
              }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-6 bg-black rounded-xl shadow-lg border border-gray-800 hover:bg-pink-800 hover:border-pink-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="text-5xl mb-4">{comp.icon}</div>
              <div className="text-lg font-semibold">{comp.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
