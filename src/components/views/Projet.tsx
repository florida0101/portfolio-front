import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Button } from "../ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

function Projet() {
    return (
        <section id="projet" className="pt-15">
            <div className="text-center text-gray-500">
                <h1 className="text-4xl text-blue-500">Mes projets</h1>
                <div className="pt-6">
                    <p className="text-xl">
                        Découvrez une sélection de mes réalisations récentes,
                        allant des applications web aux APIs backend.
                    </p>
                </div>
            </div>


            <div className="flex gap-5 justify-center pt-10 ">
                <GrPrevious className="mt-40 size-10 text-gray-500" />

                <div className="w-85 h-98 bg-tranparent border-2 border-blue-500 rounded-lg ">
                    <div className="w-75 h-50 bg-gray-500 mt-5 ml-5 rounded-lg"></div>
                    <div className="ml-5">
                        <h1 className="font-bold text-xl">
                            E-commerce
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        
                        <div className="flex gap-5 mt-2">
                            <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>React</h1>
                            </div>
                            <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>Nest</h1>
                            </div>

                             <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>API</h1>
                            </div>
                        </div>

                        <div className="flex gap-1 pt-2">
                            <Button className="bg-blue-500  hover:bg-gray-500  hover:text-pink-600">
                                <FaArrowUpRightFromSquare />
                                Voir le projet
                            </Button>
                            <Button className="bg-transparent border-1 border-pink-600">
                                <LuGithub />
                                <h1>Code</h1>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-85 h-98 bg-transparent border-2 border-blue-500 rounded-lg">
                    <div className="w-75 h-50 bg-gray-500 mt-5 ml-5 rounded-lg"></div>
                    <div className="ml-5">
                        <h1 className="font-bold text-xl">
                            E-commerce
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="flex gap-5 mt-2">
                            <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>React</h1>
                            </div>
                            <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>Nest</h1>
                            </div>

                             <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>API</h1>
                            </div>
                        </div>

                        <div className="flex gap-1 pt-2">
                            <Button className="bg-blue-500  hover:bg-gray-500  hover:text-pink-600">
                                <FaArrowUpRightFromSquare />
                                Voir le projet
                            </Button>
                            <Button className="bg-transparent border-1 border-pink-600">
                                <LuGithub />
                                <h1>Code</h1>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-85 h-98 bg-transparent border-2 border-blue-500 rounded-lg">
                    <div className="w-75 h-50 bg-gray-500 mt-5 ml-5 rounded-lg"></div>
                    <div className="ml-5">
                        <h1 className="font-bold text-xl">
                            E-commerce
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="flex gap-5 mt-2">
                            <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>React</h1>
                            </div>
                            <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>Nest</h1>
                            </div>

                             <div className="flex gap-1">
                                <div className=" w-1.5 h-1.5 bg-blue-500 rounded-full mt-3"></div>
                                <h1>API</h1>
                            </div>
                        </div>

                        <div className="flex gap-1 pt-2">
                            <Button className="bg-blue-500 hover:bg-gray-500  hover:text-pink-600">
                                <FaArrowUpRightFromSquare />
                                Voir le projet
                            </Button>
                            <Button className="bg-transparent border-1 border-pink-600 ">
                                <LuGithub />
                                <h1>Code</h1>
                            </Button>
                        </div>
                    </div>
                </div>
                <GrNext className="mt-40 size-10 text-gray-500" />
            </div>
        </section>
    )
}
export default Projet