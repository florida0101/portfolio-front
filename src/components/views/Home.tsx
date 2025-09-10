import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";

function Home() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Développeuse"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 800) // 200ms delay between each letter

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="p-5 relative py-20 bg-cover bg-no-repeat font-sans"
      style={{
        backgroundImage: 'url("/design-fond-futuriste_23-2148503793.avif")',
        height: "90vh",
      }}
    >
      <div className="flex justify-between relative text-gray-500">
        <div className="relative pl-25 mt-10">

          <h1 className="text-5xl mb-15 tracking-wider">
            {displayedText}
            <span className="animate-pulse">|</span>
            <p className="text-blue-500">Fullstack JavaScript</p>
          </h1>


          <p className="w-96 text-xl">
            Passionné par la création d'applications web modernes avec React,
            Node.js et les dernières technologies. Je transforme vos idées en
            solutions digitales performantes et élégantes.
          </p>

          <div className="pt-5">
            <Button className="bg-blue-500 w-30">Click me</Button>
            <Button className="bg-blue-500 ml-1 w-30">Click me</Button>
          </div>

          <div className="flex gap-3 pt-3">
            <BiLogoFacebookCircle />
            <BsGithub />
            <div>
              <BiLogoGmail />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            src="/profil.png"
            alt=""
            className="w-[600px] h-auto -mt-40"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
