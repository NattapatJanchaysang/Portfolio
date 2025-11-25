import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react"
import { cn } from "@/lib/utils";



export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-primary">Contact Me</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact information
                    </h3>

                    
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 ">
                            <MailIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:66011360@kmitl.ac.th" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                                66011360@kmitl.ac.th
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <PhoneIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:0926597787" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                                0926597787
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPinIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Bangkok, Thailand
                            </a>
                        </div>
                    </div>                
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/nattapatj/" target="_blank">
                            <LinkedinIcon />
                        </a>
                        <a href="https://www.instagram.com/_nattapat.9/" target="_blank">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.facebook.com/nattapat.janchaysang/?locale=th_TH" target="_blank">
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring_primary"
                        placeholder="Write YourName..."
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring_primary"
                        placeholder="Write Email..."
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                        <textarea 
                        id="message" 
                        name="message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring_primary resize:none"
                        placeholder="Write Your Message..."
                        />
                    </div>

                    <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                    )}>
                        Send Message<SendIcon size={16}/>
                    </button>
                </form>

            </div>


                </div>
            </div>
        </section>
    )
}