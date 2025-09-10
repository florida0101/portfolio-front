import Navbar from "./components/layout/Navbar"
import Compétences from "./components/views/Compétences"
import Home from "./components/views/Home"
import Projet from "./components/views/Projet"

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Home />
        <Projet />
        <Compétences />
      </main>
    </>
  )
}

export default App
