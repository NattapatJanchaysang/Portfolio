import { useState , useEffect } from "react"
import { cn } from "@/lib/utils"

const Skills = [
    //Frontend Skills
    { name : "HTML/CSS", level: 95, category: "frontend" },
    { name : "JavaScript", level: 95, category: "frontend" },
    { name : "React", level: 95, category: "frontend" },
    {name : "Tailwind CSS", level: 95, category: "frontend" },

    //Backend Skills
    { name : "Node.js", level: 85, category: "backend" },
    { name : "Express.js", level: 85, category: "backend" },

    //Tools
    { name : "Git/GitHub", level: 95, category: "tools" },
    { name : "VS Code", level: 95, category: "tools" },

]

const categories = ["All", "frontend", "backend", "tools"];

export const Skillssection = () => {

    const [activeCategories, setActiveCategories] = useState("All");

    const filteredSkills = Skills.filter((Skills) => activeCategories === "All" || Skills.category === activeCategories);


    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((categories, key) => (
                            <button key={key} className={cn("nobgcosmic-button" , activeCategories === categories ? "bg-primary text-primary-foreground" : "nogbgcosmic-button")}
                            onClick={() => setActiveCategories(categories)}>
                                {categories}
                            </button>
                        ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((Skills, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div>
                                <h3 className="font-semibold text-lg">{Skills.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width: Skills.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{Skills.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>                                                      
            </div>
        </section>
    )
}