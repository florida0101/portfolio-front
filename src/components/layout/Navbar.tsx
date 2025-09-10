"use client"
function Navbar() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }
    return (
        <header className="p-5 flex justify-between ">
            <div className="flex pl-25">
                <strong className="text-pink-600">MANJA</strong>
                <h1 className="text-blue-500">Florida</h1>
            </div>
            <nav className="flex gap-9 pr-25">
                <a href="">Accueil</a>
                <a href="#projet" onClick={(e) => handleSmoothScroll(e, "projet")}>
                    Projet
                </a>
                <a href="">Compétences</a>
                <a href="">Expériences</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}
export default Navbar