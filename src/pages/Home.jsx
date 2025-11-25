import { ThemeToggle } from "@/components/ThemeToggle";    
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { Herosection } from "@/components/Herosection";

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
            <Herosection />
            </main>


            {/* footer */}
            
            
        </div>
    )
}

export default Home