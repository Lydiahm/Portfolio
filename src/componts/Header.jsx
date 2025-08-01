function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black z-50">
      <h1 className="text-white font-bold text-lg tracking-wide">Lydia Hamza</h1>
      <nav className="space-x-6 uppercase text-sm text-white font-medium">
        <a href="#accueil">Accueil</a>
        <a href="#profil">Profil</a>
        <a href="#formation">Formation</a>
        <a href="#experiences">Expériences</a>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
