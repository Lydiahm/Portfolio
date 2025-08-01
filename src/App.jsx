import { motion } from "framer-motion";
import MesProjets from "./Mesprojets";
import Competences from "./Competences";
import Experiences from "./Experiences";
import Contact from "./Contact";
import { useState } from "react";

import profileImage from './assets/images/IMG_2452-removebg-preview.png';

// Fonction pour gérer les clics du menu
const handleLinkClick = (event, sectionId, closeMenu) => {
  event.preventDefault(); // Empêche le scroll automatique
  const section = document.getElementById(sectionId);
  
  // Scroll manuel avec animation
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  // Fermer le menu après le clic
  closeMenu();
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour toggler le menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen font-michroma snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* 🧭 Header */}
      <header className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center uppercase text-sm tracking-wider">
          <div className="font-syncopate text-xl">Lydia Hamza</div>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="#accueil" onClick={(e) => handleLinkClick(e, 'accueil', closeMenu)}>Accueil</a>
            </li>
            <li>
              <a href="#profil" onClick={(e) => handleLinkClick(e, 'profil', closeMenu)}>Profil</a>
            </li>
            <li>
              <a href="#formation" onClick={(e) => handleLinkClick(e, 'formation', closeMenu)}>Formation</a>
            </li>
            <li>
              <a href="#experiences" onClick={(e) => handleLinkClick(e, 'experiences', closeMenu)}>Expériences</a>
            </li>
                        <li>
              <a href="#projets" onClick={(e) => handleLinkClick(e, 'projets', closeMenu)}>Projets</a>
            </li>
            <li>
              <a href="#competences" onClick={(e) => handleLinkClick(e, 'competences', closeMenu)}>Compétences</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact', closeMenu)}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 🧑‍💻 Menu Latéral */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 z-50 bg-blue-600 text-white p-3 rounded-full"
      >
        ☰
      </button>
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#accueil" onClick={(e) => handleLinkClick(e, 'accueil', closeMenu)} className="text-white text-xl">Accueil</a>
          <a href="#profil" onClick={(e) => handleLinkClick(e, 'profil', closeMenu)} className="text-white text-xl">Profil</a>
          <a href="#formation" onClick={(e) => handleLinkClick(e, 'formation', closeMenu)} className="text-white text-xl">Formation</a>
          <a href="#experiences" onClick={(e) => handleLinkClick(e, 'experiences', closeMenu)} className="text-white text-xl">Expériences</a>
          <a href="#competences" onClick={(e) => handleLinkClick(e, 'competences', closeMenu)} className="text-white text-xl">Compétences</a>
          <a href="#projets" onClick={(e) => handleLinkClick(e, 'projets', closeMenu)} className="text-white text-xl">Projets</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact', closeMenu)} className="text-white text-xl">Contact</a>
        </div>
      </div>

      {/* 🖼️ Hero Section */}
      <section id="accueil" className="relative h-screen overflow-hidden snap-start bg-black text-white">
        {/* Arrière-plan avec effet de zoom */}
        <div className="absolute inset-0 z-0 parallax-zoom" />

        {/* Contenu au premier plan */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
          {/* 🧑‍💼 Ta photo */}
          <div className="mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 relative shadow-xl overflow-hidden">
              <img src={profileImage} alt="Lydia Hamza" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Ton nom */}
          <h1 className="font-syncopate text-5xl md:text-7xl lg:text-8xl mb-4">
            Lydia Hamza
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Développeuse Full Stack & Data Analyst
          </p>
          <button
            className="bg-blue-600 hover:bg-pink-800 text-white rounded-full px-6 py-3 transition-all"
            onClick={(e) => handleLinkClick(e, 'projets', closeMenu)}  // Mise à jour ici
          >
            DÉCOUVRIR MES PROJETS
          </button>

          <div className="mt-20 flex flex-col items-center">
            <div className="relative h-10 w-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-full animate-scrollLine" />
            </div>
          </div>
        </div>
      </section>


{/* 🧑‍💻 Profil Section */}
<motion.section
  id="profil"
  className="h-screen px-6 bg-black text-white flex items-center snap-start"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* 🎨 Image / blob animé */}
    <div className="flex justify-center">
      <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 relative shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-48 h-48 opacity-30 animate-blobFloat"
          style={{ top: 0, left: 0 }}
        >
          <path
            fill="#ffffff"
            d="M49.5,-65.9C63.2,-55.2,73.2,-42.3,78.3,-27.7C83.4,-13.1,83.5,3.3,77.4,18.2C71.3,33.1,59.1,46.5,44.5,58C29.9,69.5,13,79.1,-2.7,82.3C-18.4,85.5,-36.8,82.2,-49.6,71.5C-62.3,60.9,-69.5,42.9,-73.2,25.6C-76.9,8.3,-77.1,-8.3,-72.1,-24C-67.1,-39.8,-56.9,-54.7,-43.4,-65.6C-29.8,-76.4,-14.9,-83.2,0.9,-84.5C16.8,-85.7,33.5,-81.4,49.5,-65.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>

    {/* 📝 Texte + cartes */}
    <div className="bg-[#1c1c1c] p-10 rounded-2xl shadow-xl border border-gray-800">
      <h2 className="text-5xl font-semibold underline decoration-blue-500 mb-6">
        À propos
      </h2>
      <p className="text-gray-300 text-lg mb-8">
Étudiante en informatique à la recherche d'une alternance pour la rentrée 2025,
        j'ai acquis une solide expérience en développement web full-stack,
        développement mobile, ainsi qu'en analyse de Big Data et 
        Machine Learning. J'ai également dirigé plusieurs projets en 
        utilisant des méthodologies agiles, renforçant ainsi mes 
        compétences en gestion d'équipe et de projet. Autonome, rigoureuse 
        et passionnée par les nouvelles technologies, je suis prête à relever
        de nouveaux défis.
      </p>

      {/* 📊 Cartes interactives */}
      <div className="grid grid-cols-3 gap-8 text-center">
        {[
          { label: "Années d’expérience", value: "3+" },
          { label: "Projets réalisés", value: "11+" },
          { label: "Domaines d’expertise", value: "8" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1c1c1c] border border-[#2c2c2c] p-4 rounded-lg transition duration-300 hover:bg-pink-700 hover:border-pink-500 hover:scale-105 cursor-pointer"
          >
            <div className="text-white text-xl font-bold">
              {item.value}
            </div>
            <div className="text-gray-400 text-sm mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</motion.section>


      {/* 🏫 Formation Section */}
<section
  id="formation"
  className="min-h-screen bg-black text-white py-20 px-4 snap-start"
>
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 100 }} // Initialement invisible et décalé vers le bas
    whileInView={{ opacity: 1, y: 0 }} // Lorsqu'il entre dans la vue, il devient visible et se déplace
    viewport={{ once: true }} // L'animation ne se produit qu'une seule fois
    transition={{ duration: 1, ease: "easeOut" }} // Durée et easing de l'animation
  >
    <h2 className="text-4xl font-bold text-center mb-16 font-syncopate">Formation</h2>

    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600" />

      {/* Événement 1 (gauche) */}
      <div className="mb-6 flex justify-start relative">
        <div className="w-1/2 pr-8 text-right">
          <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-lg border border-[#2c2c2c] hover:bg-pink-700 hover:border-pink-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <p className="text-sm text-blue-500">2024–2025</p>
            <h3 className="text-xl font-bold mt-1">MASTER 1 EXPERT INFORMATIQUE ET SYSTÈME D’INFORMATIONS</h3>
            <p className="text-gray-400 text-sm mt-1">EPSI PARIS</p>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-6 left-[-8px]" />
        </div>
      </div>

      {/* Événement 2 (droite) */}
      <div className="mb-6 flex justify-end relative">
        <div className="w-1/2 relative">
          <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-6 right-[-8px]" />
        </div>
        <div className="w-1/2 pl-8 text-left">
          <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-lg border border-[#2c2c2c] hover:bg-pink-700 hover:border-pink-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <p className="text-sm text-blue-500">2023–2024</p>
            <h3 className="text-xl font-bold mt-1">MASTER 1 BIG DATA ANALYTICS</h3>
            <p className="text-gray-400 text-sm mt-1">
              Université des sciences et technologies Houari Boumedienne
            </p>
          </div>
        </div>
      </div>

      {/* Événement 3 (gauche) */}
      <div className="mb-6 flex justify-start relative">
        <div className="w-1/2 pr-8 text-right">
          <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-lg border border-[#2c2c2c] hover:bg-pink-700 hover:border-pink-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <p className="text-sm text-blue-500">2020–2023</p>
            <h3 className="text-xl font-bold mt-1">LICENCE EN INFORMATIQUE</h3>
            <p className="text-gray-400 text-sm mt-1">
              Université des sciences et technologies Houari Boumedienne
            </p>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-6 left-[-8px]" />
        </div>
      </div>

      {/* Événement 4 (droite) */}
      <div className="mb-6 flex justify-end relative">
        <div className="w-1/2 relative">
          <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-6 right-[-8px]" />
        </div>
        <div className="w-1/2 pl-8 text-left">
          <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-lg border border-[#2c2c2c] hover:bg-pink-700 hover:border-pink-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <p className="text-sm text-blue-500">2020</p>
            <h3 className="text-xl font-bold mt-1">Baccalauréat Français</h3>
            <p className="text-gray-400 text-sm mt-1">
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>


      {/* 🧑‍💻 Autres Sections */}
      <Experiences />
      <MesProjets />
      <Competences />
      <Contact />
    </div>
  );
}

export default App;
