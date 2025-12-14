import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web developer </h3>
                        <p className="text-muted-foreground">I am determined, diligent, passionate, and always ready to learn something new.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a download='nattapat_cv.pdf' href="/nattapat_cv.pdf" className="nobgcosmic-button">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 ">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Web Development</h4>
                                    <p className="text-muted-foreground">creating responsive website with modern frameworks</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="text-primary h-6 w-6"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                        <p className="text-muted-foreground">Designing user-friendly interfaces with a focus on user experience</p>
                                    </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="text-primary h-6 w-6"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Project Management</h4>
                                        <p className="text-muted-foreground">Organizing and managing resources to bring about the successful completion of specific project goals and objectives</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}