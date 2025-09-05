function Home() {
    return (
        <section
            className="p-5 relative py-20 bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'url("/design-fond-futuriste_23-2148503793.avif")',
                height: "90vh",
            }}
        >
            <div className="flex justify-between relative text-gray-500">
                <div className="relative pl-20 mt-10">
                    <h1 className="text-5xl mb-15">
                        Développeuse
                        <p className="text-blue-500">
                            Fullstack JavaScript
                        </p>
                    </h1>
                    <p className="w-96 text-xl">
                        Passionné par la création d'applications web modernes avec React, Node.js et les dernières technologies.
                        Je transforme vos idées en solutions digitales performantes et élégantes.
                    </p>
                    <div className="bg-blue-500 w-40 text-center items-center mt-5 text-white">
                        <button> voir mes projet</button>
                    </div>
                </div>

                <div className="relative pr-20">
                    <img src="/Screenshot From 2025-08-12 12-41-49.png" alt=""
                     className="w-[500px] h-auto -mt-20"
                     />
                </div>
            </div>
        </section>
    )
}

export default Home;