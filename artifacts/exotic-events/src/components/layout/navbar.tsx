import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); scrollTo('top'); }}>
          <span className="text-2xl font-black font-display uppercase tracking-tighter">
            Exotic <span className="text-primary group-hover:text-glow transition-all">Events</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('servicios')} className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Servicios</button>
          <button onClick={() => scrollTo('paquetes')} className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Paquetes</button>
          <Button className="box-glow hover:box-glow-strong transition-all" asChild>
            <a href="https://wa.me/573172430432" target="_blank" rel="noopener noreferrer">
              Reservar
            </a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-white/5 px-4 py-6 flex flex-col gap-4"
        >
          <button onClick={() => scrollTo('servicios')} className="text-left py-2 text-lg font-medium hover:text-primary uppercase">Servicios</button>
          <button onClick={() => scrollTo('paquetes')} className="text-left py-2 text-lg font-medium hover:text-primary uppercase">Paquetes</button>
          <Button className="w-full mt-4" asChild>
            <a href="https://wa.me/573172430432" target="_blank" rel="noopener noreferrer">
              Reservar Ahora
            </a>
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
