import { ExternalLinkIcon, ComputerIcon, ArrowRightIcon, GithubIcon } from "lucide-react"

const Projects = [
    {
        id: 1,
        title: "Iotwebsite",
        description: "A website for monitoring and controlling IoT devices in real-time, featuring data visualization and user authentication.",
        image: "/Projects/Iotwebsite.png",
        tags: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
        demoUrl: "https://iot-webdev-sigma.vercel.app/index.html",
        githubUrl: "https://github.com/NattapatJanchaysang/Project-Webdevelopment"
    },
    
    {
        id: 2,
        title: "MovieList",
        description: "A MovieList Website that you can add your own favorite movies.",
        image: "/Projects/movielist.png",
        tags: ["React", "CSS", "JavaScript"],
        demoUrl: "https://github.com/NattapatJanchaysang/Project-Movielist",
        githubUrl: "https://github.com/NattapatJanchaysang/Project-Movielist"
    },

]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and expertise in web development. Each project highlights my ability to create dynamic, responsive, and user-friendly web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transiton-transform duration-500 group-hover:scale-120"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <div>
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            

                            <div>
                                <h3 className="text-xl font-semibold mb-1 text-primary">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 mx-2">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" alt="Demo Link">
                                            <ExternalLinkIcon size={20}/>
                                        </a>

                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" alt="GitHub Link">
                                            <GithubIcon size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                    <div className="flex justify-center mt-12">
                        <a href="https://github.com/NattapatJanchaysang" className="nobgcosmic-button flex items-center gap-2" target="_blank">
                            Check My GitHub <ArrowRightIcon size={16}/>
                        </a>
                    </div>

            </div>
        </section>
    )
}