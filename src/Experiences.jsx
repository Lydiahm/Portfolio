import { motion } from "framer-motion";
import { FaChartLine, FaDatabase, FaCode, FaChessKnight } from "react-icons/fa";

export default function Experiences() {
  const experiences = [
    {
      title: "DATA ANALYSTE FREELANCE",
      date: "2023–2025",
      icon: <FaChartLine className="text-3xl text-blue-500" />,
      missions: [
        "Analyse de données pour appuyer la prise de décision",
        "Création de rapports visuels avec Power BI et Matplotlib",
        "Traitement de données issues de diverses sources",
        "Recommandations basées sur les résultats d’analyse",
      ],
    },
    {
      title: "DÉVELOPPEUR DE BASES DE DONNÉES",
      date: "Janvier–Mars 2024 | EURL AMAL COOPERATION",
      icon: <FaDatabase className="text-3xl text-blue-500" />,
      missions: [
        "Création et implémentation de bases de données selon les besoins métier",
        "Optimisation des structures pour de meilleures performances",
        "Mise en place de sauvegardes et de mesures de sécurité des données",
      ],
    },
    {
      title: "DÉVELOPPEMENT FULL STACK",
      date: "Janvier–Mai 2023 | NAFTAL",
      icon: <FaCode className="text-3xl text-blue-500" />,
      missions: [
        "Développement d’une application Full Stack pour la maintenance informatique",
        "Interface utilisateur intuitive et base de données intégrée",
        "Tests, déploiement et documentation pour usage interne",
      ],
    },
    {
      title: "PROFESSEURE DE JEU D'ÉCHEC",
      date: "2021–2024 | PRIMAIRE FRANÇAIS D’ALEXANDRE DUMAS",
      icon: <FaChessKnight className="text-3xl text-blue-500" />,
      missions: [
        "Enseignement des bases et stratégies du jeu d’échecs à des élèves du primaire",
        "Organisation de tournois internes pour le développement des compétences",
      ],
    },
  ];

  return (
    <section id="experiences" className="bg-black py-20 px-6 text-white snap-start">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-syncopate border-b-4 w-fit mx-auto border-blue-500">
          Expériences Professionnelles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
                backgroundColor: "#9d174d", // pink-800 hex
                boxShadow: "0 15px 30px rgba(156, 18, 50, 0.5)",
              }}
              className="group flex flex-col bg-black rounded-xl p-6 border border-gray-800 shadow-lg transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                {exp.icon}
                <h3 className="text-xl font-bold text-left">{exp.title}</h3>
              </div>
              <p className="text-pink-500 text-sm mb-4 text-left">{exp.date}</p>
              <ul className="list-disc list-inside text-left space-y-2 text-sm text-gray-300">
                {exp.missions.map((mission, idx) => (
                  <li key={idx}>{mission}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
