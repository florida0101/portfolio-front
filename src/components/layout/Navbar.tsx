function Navbar() {
    return (
        <header className="p-5 flex justify-between">
            <div className="flex">
                <strong>MANJA</strong>
                <h1>Florida</h1>
            </div>
            <nav className="flex gap-9">
                <a href="">Accueil</a>
                <a href="">Projet</a>
                <a href="">Compétences</a>
                <a href="">Expériences</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}
export default Navbar