import { ArrowUpIcon } from "lucide-react"



export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Nattpat Portfolio</p>        
            
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/40 transiton-colors">
            <ArrowUpIcon className="text-primary"/>
        </a>
        </footer>
        

    )
}