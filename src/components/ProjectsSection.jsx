
const Projects = [
    {
        id: 1,
        title: "Iotwebsite",
        description: "A website for monitoring and controlling IoT devices in real-time, featuring data visualization and user authentication.",
        Image: "/Projects/iotwebsite.png",
        tags: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
        demoUrl: "https://iot-webdev-sigma.vercel.app/index.html",
        githubUrl: "https://github.com/NattapatJanchaysang/Project-Webdevelopment"
    },
    
    {
        id: 2,
        title: "Iotwebsite",
        description: "A website for monitoring and controlling IoT devices in real-time, featuring data visualization and user authentication.",
        Image: "/Projects/iotwebsite.png",
        tags: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
        demoUrl: "https://iot-webdev-sigma.vercel.app/index.html",
        githubUrl: "https://github.com/NattapatJanchaysang/Project-Webdevelopment"
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
            </div>
        </section>
    )
}