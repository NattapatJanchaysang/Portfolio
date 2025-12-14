import { ArrowBigDownIcon } from "lucide-react";


export const HeroSection = () => {
    return ( 
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4"> 

            <div className="opacity-0 animate-fade-in">
                <img className="w-full h-auto" src="/Projects/myprofile.png" alt="ArtProfile" />
            </div>

            <div className="space-y-6 md:pt-24 w-full">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">HI, I'm </span>
                <span className="opacity-0 animate-fade-in-delay-1 text-primary">Nattapat </span>
                <span className="opacity-0 animate-fade-in-delay-2 text-gradient ml-2">Janchaysang</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I am a Iot engineering student at KMITL. I'm looking for an internship opportunity to develop my skills and gain practical experience in the field of software engineering.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 right-0 pr-4 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowBigDownIcon className="h-5 w-5 text-primary"/>
        </div>
    </section>
    )
}