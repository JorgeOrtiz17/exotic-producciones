import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Music, 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  XCircle,
  Star, 
  MapPin, 
  Phone,
  Flame,
  Speaker,
  PartyPopper
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const WHATSAPP_LINK = "https://wa.me/573172430432";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden dark" ref={containerRef}>
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none mix-blend-overlay"></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Nightclub event" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">El Mejor Sonido de Casanare</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase font-display"
          >
            Exotic <span className="text-primary text-glow">Events</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light"
          >
            Llevamos la energía de las mejores discotecas a tu evento. Sonido profesional, iluminación inmersiva y una hora loca inolvidable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="text-base h-14 px-8 box-glow hover:box-glow-strong transition-all duration-300" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Reserva Ahora <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 border-primary/20 hover:bg-primary/10" asChild>
              <a href="#paquetes">Ver Paquetes</a>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Descubre</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10 border-y border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Eventos Realizados", value: "+100" },
              { label: "Clientes Felices", value: "100%" },
              { label: "Sonido Profesional", value: "PRO" },
              { label: "Garantía de Fiesta", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <span className="text-4xl md:text-5xl font-black text-primary font-display">{stat.value}</span>
                <span className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="servicios" className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 font-display uppercase"
            >
              La Experiencia <span className="text-primary">Exotic</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              No somos solo un DJ, somos la fiesta completa. Transformamos cualquier espacio en el mejor club de la ciudad.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Volume2,
                title: "Sonido Inmersivo",
                desc: "Equipos de alta fidelidad que hacen vibrar el piso. Bajos profundos y agudos cristalinos para una experiencia de club."
              },
              {
                icon: Sparkles,
                title: "Luces Profesionales",
                desc: "Iluminación inteligente, láseres y efectos visuales sincronizados con la música que transforman el ambiente."
              },
              {
                icon: PartyPopper,
                title: "Hora Loca Épica",
                desc: "El clímax de la noche con animación en vivo, humo, accesorios y la mejor energía para que nadie se quede sentado."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/party-crowd.png" alt="Party Crowd" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group md:mt-12"
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/dj-setup.png" alt="DJ Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="py-24 md:py-32 relative z-10 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 font-display uppercase"
            >
              Nuestros <span className="text-primary">Paquetes</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Diseñados para adaptarse al tamaño de tu evento y tu presupuesto.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Economico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/50 backdrop-blur border-white/5 relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-display uppercase tracking-wide">Economico</CardTitle>
                  <CardDescription className="text-lg">Lo esencial para una celebracion con buen ambiente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-black font-display">$650K</span>
                    <span className="text-muted-foreground text-sm ml-2">COP</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Incluye</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">2 cabinas B3 de 15"</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">DJ basico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Microfono</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Par LED</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Mini spider</span>
                    </li>
                  </ul>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-6 mb-4">No incluye</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-foreground/60">Camara de humo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-foreground/60">Luces roboticas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-foreground/60">Hora loca</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-foreground/60">Polvora fria</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10" asChild>
                    <a href={`${WHATSAPP_LINK}?text=Hola, estoy interesado en el paquete Economico con precio sugerido de $650.000`} target="_blank" rel="noopener noreferrer">
                      Elegir Economico
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Premium (Center) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-20"
            >
              <Card className="bg-card border-primary relative overflow-hidden transform md:scale-105 box-glow">
                <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Mas Popular
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-3xl font-display uppercase tracking-wide text-primary">Premium</CardTitle>
                  <CardDescription className="text-lg">La experiencia mas completa para una fiesta inolvidable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-5xl font-black font-display">$1.5M</span>
                    <span className="text-muted-foreground text-sm ml-2">COP</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Incluye</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">2 cabinas B3 de 15"</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">DJ profesional</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Animacion completa + hora loca</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Microfonos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Camara de humo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">3 luces roboticas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Par LED</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Mini spider</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Strober</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Estructura para luces</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Detonadores de polvora fria</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">Accesorios para hora loca</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button size="lg" className="w-full text-base h-14" asChild>
                    <a href={`${WHATSAPP_LINK}?text=Hola, quiero la experiencia completa. Me interesa el paquete Premium con precio sugerido de $1.500.000`} target="_blank" rel="noopener noreferrer">
                      Reservar Premium
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Intermedio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur border-white/5 relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-display uppercase tracking-wide">Intermedio</CardTitle>
                  <CardDescription className="text-lg">El equilibrio ideal entre produccion y presupuesto</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-black font-display">$1.0M</span>
                    <span className="text-muted-foreground text-sm ml-2">COP</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Incluye</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">2 cabinas B3 de 15"</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">DJ</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Microfonos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Camara de humo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">2 luces roboticas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Par LED</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Mini spider</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Animacion basica</span>
                    </li>
                  </ul>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-6 mb-4">No incluye</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-foreground/60">Polvora fria</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-foreground/60">Hora loca completa</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10" asChild>
                    <a href={`${WHATSAPP_LINK}?text=Hola, estoy interesado en el paquete Intermedio con precio sugerido de $1.0M `} target="_blank" rel="noopener noreferrer">
                      Elegir Intermedio
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 font-display uppercase"
            >
              Lo que <span className="text-primary">Dicen</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Carlos M.",
                event: "Matrimonio",
                text: "Contratamos el paquete Premium para nuestra boda y fue la mejor decisión. La pista de baile nunca estuvo vacía. ¡La hora loca fue brutal!"
              },
              {
                name: "Valentina R.",
                event: "Quinceaños",
                text: "Increíble. Las luces y el sonido transformaron el salón en una discoteca de verdad. Mis amigos todavía hablan de la fiesta."
              },
              {
                name: "Andrés P.",
                event: "Evento Corporativo",
                text: "Súper profesionales desde el primer contacto. Llegaron a tiempo, montaron todo rápido y el ambiente que crearon fue perfecto para integrar al equipo."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-foreground/90 mb-6">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-bold text-primary font-display">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 font-display uppercase"
          >
            ¿Listo para la <span className="text-primary">Mejor Fiesta</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Las fechas se llenan rápido. Contáctanos hoy mismo y asegura el mejor entretenimiento para tu evento en Casanare.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="text-lg h-16 px-10 box-glow-strong hover:scale-105 transition-transform duration-300" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-6 h-6" /> Cotizar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone={WHATSAPP_LINK} />
    </div>
  );
}
