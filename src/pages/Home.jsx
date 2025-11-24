import { ThemeToggle } from "@/components/ThemeToggle";    
import { StarBackground } from "@/components/StarBackground";

const Home = () => {
    return (
        <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Theme Toggle (darkmode,lightmode) */}
            <ThemeToggle />
            {/* Background effect (for Aesthetic 555) */}
            <StarBackground />
            {/* Navbar */}

            {/* Main content */}

            {/* footer */}
            
            

        </div>
    )
}

export default Home