import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";



const NavItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
]


export const NavBar = () => {

    const [isscrolled, setIsScrolled] = useState(false); /* สร้าง state เพื่อตรวจสอบการ scroll */
    const [isMenuopen, setIsMenuOpen] = useState(false); /* สร้าง state เพื่อตรวจสอบเมนูมือถือเปิดหรือปิด */

    useEffect(() => { 
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); /* เพิ่ม event listener เมื่อ scroll และลบเมื่อ component ถูกทำลาย */




    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300" , 
        isscrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5 bg-transparent")}>

        <div className="container flex items-center justify-between">

        {/* Logo */}
            <a className="text-xl font-bold text-primary flex items-center" href="#hero"> 
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Nattapat</span> Portfolio
                </span>
            </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
            {NavItems.map((item, key) => (
                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duratuion-300">
                    {item.name}
                </a>

            ))}
        </div>

        {/* Mobile Nav */}


        {/* ปุ่มเปิดปิดเมนูมือถือ */}
        <button  className="md:hidden z-50 p-2 text-foreground" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label={isMenuopen ? "Close menu" : "Open menu"}>
            {isMenuopen ? <X size={24}/> : <Menu size={24}/>}
        </button> 

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center",
            "transition-all duration-300 md-hidden",
            isMenuopen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
        <div className="flex flex-col space-y-8 text-xl">
            {NavItems.map((item, key) => (
                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duratuion-300"
                onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                </a>

            ))}
        </div>
        </div>

        



        </div>
    </nav>
    )
}