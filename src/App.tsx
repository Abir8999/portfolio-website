/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Instagram, Linkedin, ExternalLink, ArrowRight, Mail, Layers, PenTool, MapPin } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Coffee Ad Design – Lume Cafe",
    category: "Social Media",
    description: "High-impact visual design for premium coffee branding, focusing on rich textures and bold typography.",
    image: "https://i.postimg.cc/28Z75Bwx/Lume-cafe-jpg.jpg",
    link: "https://www.instagram.com/p/DXI64WnFHr5/",
    project: "01",
    featured: true
  },
  {
    id: 2,
    title: "Zesta Juice Bar – Poster Design",
    category: "Social Media",
    description: "A clean and modern Instagram advertisement created to promote Orange Blast Juice. The design focuses on strong visual hierarchy, vibrant color usage, and a minimal layout to highlight freshness and energy while maintaining a professional look.",
    image: "https://i.postimg.cc/4yS2nMYK/zesta-final.jpg",
    link: "https://i.postimg.cc/4yS2nMYK/zesta-final.jpg",
    project: "02",
    featured: true
  },
  {
    id: 3,
    title: "Organic Juice Branding – PureSip",
    category: "Branding",
    description: "Complete visual identity system for an organic juice brand, emphasizing purity and natural ingredients.",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800&auto=format&fit=crop",
    link: "#",
    project: "03",
    featured: true
  },
  {
    id: 4,
    title: "Fitness App Social Kit",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    project: "04",
    featured: false
  },
  {
    id: 5,
    title: "Event Flyer Design",
    category: "Prints",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=800&auto=format&fit=crop",
    project: "05",
    featured: false
  },
  {
    id: 6,
    title: "Minimalist Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    project: "06",
    featured: false
  },
  {
    id: 7,
    title: "Tech Conference Socials",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    project: "07",
    featured: false
  },
  {
    id: 8,
    title: "Visual Poster Series",
    category: "Prints",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    project: "08",
    featured: false
  },
  {
    id: 9,
    title: "Restaurant Menu Design",
    category: "Prints",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?q=80&w=800&auto=format&fit=crop",
    project: "09",
    featured: false
  },
  {
    id: 10,
    title: "E-commerce Social Ads",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    project: "10",
    featured: false
  },
  {
    id: 11,
    title: "App Icon Set",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    project: "11",
    featured: false
  },
  {
    id: 12,
    title: "Music Festival Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop",
    project: "12",
    featured: false
  }
];

const categories = ["All", "Social Media", "Branding", "Prints"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-40 mix-blend-difference">
        <div className="text-base md:text-lg font-bold tracking-tighter uppercase">Portfolio</div>
        <div className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-black">
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 max-w-7xl mx-auto gap-12 pt-32 md:pt-20 relative">
          <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/10 mx-8 md:mx-20" />
          
          <div className="flex-1 text-left flex flex-col reveal">
            <h1 className="text-[15vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-8 md:mb-10 order-1">
              Abir<br />Karmakar
            </h1>

            <div className="md:hidden order-2 mb-10 w-full max-w-[220px]">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl rotate-1">
                <img 
                  src="https://i.postimg.cc/kM0fWdfh/IMG-20260206-094415.jpg" 
                  alt="Abir Karmakar" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-lg md:text-2xl font-light tracking-wide max-w-xl opacity-70 leading-relaxed order-3">
              Graphic Designer focused on social media ads and visual design.
            </p>
            <div className="mt-10 md:mt-16 order-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black hover:bg-neutral-200 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-black"
              >
                Contact Me <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end w-full reveal reveal-delay-1">
            <div className="relative group w-full max-w-none">
              <div className="absolute -inset-2 bg-white/5 rounded-[2rem] blur-xl group-hover:bg-white/10 transition-colors duration-500" />
              <div className="relative aspect-[4/5] md:w-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://i.postimg.cc/kM0fWdfh/IMG-20260206-094415.jpg" 
                  alt="Abir Karmakar" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-40 px-8 md:px-20 max-w-7xl mx-auto">
          <div className="mb-32 reveal">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-4">Selected Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Featured Work</h2>
          </div>

          <div className="space-y-40">
            {portfolioItems.filter(item => item.featured).map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center reveal`}
              >
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-3/5 group cursor-pointer relative overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </a>
                <div className="w-full md:w-2/5">
                  <span className="text-xs font-mono opacity-30 block mb-4">0{item.project}</span>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                  </a>
                  <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-6">{item.category}</p>
                  {item.description && (
                    <p className="text-white/60 font-light leading-relaxed mb-10 text-base md:text-lg">
                      {item.description}
                    </p>
                  )}
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-2 hover:border-white transition-colors"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="pb-40 px-8 md:px-20 reveal">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-4">Complete Archive</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">More Designs</h2>
              </div>
              
              <div className="flex flex-wrap gap-4 md:gap-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-all duration-300 ${
                      activeCategory === cat ? 'border-white text-white' : 'border-transparent text-white/30 hover:text-white/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {portfolioItems
                  .filter((item) => activeCategory === "All" || item.category === activeCategory)
                  .map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group relative"
                    >
                      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                          <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 truncate">{item.category}</span>
                          <h4 className="text-lg font-bold uppercase leading-tight">{item.title}</h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-40 px-8 md:px-20 border-t border-white/10 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 reveal">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-4">Stack</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Tools I Use</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Photoshop */}
              <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors group reveal">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Layers size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white text-black font-black">Primary Tool</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Adobe Photoshop</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Used for creating ad designs, posters, and visual compositions with strong focus on lighting, typography, and layout.
                </p>
              </div>

              {/* Illustrator */}
              <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors group reveal reveal-delay-1">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <PenTool size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-white/40 font-bold">Secondary Tool</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Adobe Illustrator</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Used when needed for vector graphics, icons, and design elements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 px-8 md:px-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/60 mb-8">
              <MapPin size={12} className="text-white/40" /> Bangalore, India
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-8">About Me</span>
            <h3 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight mb-12">
              I help brands stand out in the digital space through clean, impactful visual storytelling.
            </h3>
            <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-2xl mx-auto">
              I specialize in creating high-performance social media assets and brand visuals. 
              My goal is to combine aesthetic excellence with strategic design to drive real results.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-8 md:px-20 bg-white text-black text-center overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 reveal">
              Ready to<br />work?
            </h2>
            <div className="flex flex-col items-center gap-12 reveal">
              <a 
                href="mailto:abir72721@gmail.com" 
                className="text-lg sm:text-2xl md:text-5xl font-bold hover:opacity-70 transition-opacity flex items-center gap-2 md:gap-4 break-all px-4"
              >
                <Mail size={24} className="md:w-12 md:h-12 flex-shrink-0" /> abir72721@gmail.com
              </a>
              
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/asherdesigns_official/", icon: <Instagram size={14} /> },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/abir-karmakar-b2b41b23a/", icon: <Linkedin size={14} /> },
                  { name: "Behance", url: "#", icon: <ExternalLink size={14} /> }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-black border-b-2 border-black/10 hover:border-black transition-all pb-1"
                  >
                    {social.icon} {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-6 opacity-30">
        <div className="text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Abir Karmakar
        </div>
        <div className="text-[10px] uppercase tracking-widest">
          Visual Design Portfolio
        </div>
      </footer>
    </div>
  );
}
