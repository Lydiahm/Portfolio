import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MicroMind from './assets/images/micromind.png';
import MicroMind1 from './assets/images/micromind1.png';
import MicroMind2 from './assets/images/micromind2.png';
import MicroMind3 from './assets/images/Micromind3.png';
import MicroMind4 from './assets/images/micromind4.png';
import LuminiskinImg from './assets/images/Luminiskin1.png';  // Remplace par le chemin correct
import LuminiSkinImg from './assets/images/LuminiSkin.png';
import LuminiSkinImg2 from './assets/images/luminiskin2.png';
import LuminiSkinImg3 from './assets/images/Luminiskin3.png';
import NAFTAL from './assets/images/NAFTAL.png';
import NAFTAL2 from './assets/images/NAFTAL2.png';
import NAFTAL3 from './assets/images/NAFTAL31.png';
import NAFTAL4 from './assets/images/NAFTAL6.png';
import NAFTAL5 from './assets/images/NAFTAL4.png';
import NAFTAL6 from './assets/images/NAFTAL3.png';




const projets = [
  {
    id: 1,
    title: "Application de maintenance informatique",
    description:
      "Développement d'une application web complète pour la gestion de la maintenance informatique chez NAFTAL, incluant un système de tickets et un suivi des interventions.",
    tag: "Web / Maintenance",
    color: "bg-blue-600",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
       images: [NAFTAL, NAFTAL2, NAFTAL3, NAFTAL4, NAFTAL5, NAFTAL6],  // Exemple avec l'image déplacée
  },
  {
    id: 2,
    title: "Visualisation de données ",
    description:
      "Création de dashboards interactifs Power BI pour un site e-commerce, avec segmentation produit et indicateurs de performance clés.",
    tag: "Data / BI",
    color: "bg-pink-600", // Exemple avec l'image déplacée
    
  },
  {
    id: 3,
    title: "LuminiSkin (iOS)",
    description:
      "Application iOS d’analyse de la peau avec détection de zones grasses et imperfections, ajout de routines skincare, fiches ingrédients et gestion de données locales.",
    tag: "Mobile / Santé / IA",
    color: "bg-zinc-800",
    images: [LuminiSkinImg, LuminiSkinImg2, LuminiSkinImg3], // Exemple avec l'image déplacée
  },
  {
  id: 4,
  title: "Micromind – Thérapie interactive",
  description:
    "Création d'une application Micromind proposant une question par jour pour initier une conversation complète, favorisant l'introspection et le bien-être mental à travers une approche proche d'une thérapie.",
  tag: "Mobile / Bien-être / IA",
  color: "bg-zinc-900",
  images: [MicroMind, MicroMind1, MicroMind2, MicroMind3, MicroMind4], // ✅ complété
},
  {
    id: 5,
    title: "Exploration Big Data avec Spark",
    description:
      "Traitement et visualisation de données volumineuses avec Apache Spark et Scala : agrégation, tri et extraction de tendances.",
    tag: "Big Data",
    color: "bg-blue-800",
    colSpan: "col-span-2",
  },
];

export default function MesProjets() {
  const [selectedProjet, setSelectedProjet] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const modalRef = useRef();

  useEffect(() => {
    if (!selectedProjet?.images) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % selectedProjet.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedProjet]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedProjet(null);
      }
    };
    if (selectedProjet) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProjet]);

  const handlePrev = () => {
    if (!selectedProjet?.images) return;
    setImageIndex(
      (prev) =>
        (prev - 1 + selectedProjet.images.length) %
        selectedProjet.images.length
    );
  };

  const handleNext = () => {
    if (!selectedProjet?.images) return;
    setImageIndex((prev) => (prev + 1) % selectedProjet.images.length);
  };

  return (
    <section id="projets" className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-2 font-syncopate">Mes projets</h2>
        <div className="h-1 w-24 bg-blue-600 mb-8 rounded animate-pulse" />
        <p className="text-gray-400 mb-16 text-sm md:text-base">
          Une sélection de mes travaux récents en développement et analyse de données
        </p>

        <div className="grid grid-cols-[2fr_1.2fr_1.2fr] gap-4 auto-rows-[200px]">
          {projets.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -16,
                boxShadow: "0 12px 25px rgba(0, 0, 0, 0.4)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
                mass: 0.7,
                duration: 0.35,
                delay: i * 0.05,
              }}
              className={`relative rounded-2xl ${proj.color} ${proj.colSpan || ""} ${proj.rowSpan || ""} group cursor-pointer overflow-hidden`}
            >
              <div className="absolute inset-0 flex flex-col justify-end overflow-hidden pointer-events-none">
                <div className="h-32 w-full absolute bottom-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="relative z-10 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out p-6">
                  <p className="text-xs uppercase text-blue-200 tracking-wider mb-1">{proj.tag}</p>
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-xs text-gray-100 line-clamp-2">{proj.description}</p>
                  <button
                    onClick={() => {
                      setSelectedProjet(proj);
                      setImageIndex(0);
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-pink-700 transition pointer-events-auto"
                  >
                    Voir le projet
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODALE */}
        {selectedProjet && (
          <div className="fixed inset-0 bg-[radial-gradient(circle,_rgba(75,75,75,0.6)_0%,_transparent_100%)] backdrop-blur-sm flex items-center justify-center z-50">
            <div
              ref={modalRef}
              className="bg-zinc-900/70 backdrop-blur-md text-white rounded-2xl p-8 max-w-4xl w-full relative shadow-2xl ring-1 ring-white/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProjet(null)}
                className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-500"
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Carrousel */}
                <div className="w-full md:w-1/2 relative flex items-center justify-center">
                  {selectedProjet.images ? (
                    <>
                      <img
                        src={selectedProjet.images[imageIndex]}
                        alt={`Image ${imageIndex + 1}`}
                        className="rounded-lg w-full object-cover"
                      />
                      <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded-full"
                      >
                        ‹
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded-full"
                      >
                        ›
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400">Aucune image</span>
                  )}
                </div>

                {/* Détails texte */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase text-blue-300 tracking-wider mb-2">{selectedProjet.tag}</p>
                    <h3 className="text-2xl font-bold mb-4">{selectedProjet.title}</h3>
                    <p className="text-sm text-gray-300 mb-6">{selectedProjet.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
