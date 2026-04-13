import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-black font-display uppercase tracking-tighter mb-4 block">
              Exotic <span className="text-primary text-glow">Events</span>
            </span>
            <p className="text-muted-foreground max-w-sm mb-6">
              La mejor experiencia de entretenimiento para eventos en Casanare. DJs profesionales, iluminación, sonido y hora loca.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold font-display uppercase mb-4 text-foreground/90">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+57 317 243 0432</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Casanare, Colombia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-display uppercase mb-4 text-foreground/90">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#paquetes" className="text-muted-foreground hover:text-primary transition-colors">Paquetes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Exotic Events. Todos los derechos reservados.</p>
          <p>Diseñado para hacer vibrar.</p>
        </div>
      </div>
    </footer>
  );
}
