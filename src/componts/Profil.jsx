function Profil() {
  return (
    <section
      id="profil"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-20 bg-black text-white"
    >
      <div className="bg-neutral-800 p-12 rounded-xl">
        <div className="bg-blue-600 w-48 h-48 rounded-full blur-sm" />
      </div>
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 w-fit">Profil</h2>
        <p className="text-gray-300 mb-6">
          Étudiante en informatique, je recherche une alternance pour la rentrée 2025. J'ai acquis une solide expérience en développement web, analyse de données massives (Big Data), et gestion de projet.
          <br /><br />
          Autonome, rigoureuse et motivée, je suis prête à m’impliquer dans des projets innovants et concrets.
          <br /><br />
          Ma passion pour la technologie et l’analyse de données me pousse à constamment approfondir mes connaissances et à relever de nouveaux défis.
        </p>
        <div className="flex gap-4 mt-6">
          <div className="bg-neutral-900 px-6 py-4 rounded-lg text-center">
            <p className="text-2xl font-bold">3+</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Années d'expérience</p>
          </div>
          <div className="bg-neutral-900 px-6 py-4 rounded-lg text-center">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Projets réalisés</p>
          </div>
          <div className="bg-neutral-900 px-6 py-4 rounded-lg text-center">
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Domaines d’expertise</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profil
