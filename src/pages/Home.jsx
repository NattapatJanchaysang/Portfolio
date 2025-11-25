import { ThemeToggle } from "@/components/ThemeToggle";    
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { Herosection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Skillssection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";


const Home = () => {
    return (
        <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Theme Toggle (darkmode,lightmode) */}
            <ThemeToggle />
            {/* Background effect (for Aesthetic 555) */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main content */}
            <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            </main>


            {/* footer */}
            <Footer />
            
        </div>
    )
}

export default Home