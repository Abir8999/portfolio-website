/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Instagram, Linkedin, ExternalLink, ArrowRight, Mail, Layers, PenTool, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCarousel from "./components/ProjectCarousel";

const portfolioItems = [
  {
    id: 13,
    title: "Luxury Skincare Product Ad – VELORA",
    category: "Social Media",
    description: "Premium skincare advertisement design focused on luxury branding, product presentation, and high-converting commercial visuals with a clean modern aesthetic.",
    image: "https://i.postimg.cc/DwQWr71d/velora-v-2.jpg",
    link: "https://www.instagram.com/p/DXj3xUZDwCa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    project: "01",
    featured: true
  },
  {
    id: 18,
    title: "Luxury Residential Lifestyle Campaign",
    category: "Social Media",
    description: "A luxury residential campaign exploring wellness, community, and relaxation through premium visual storytelling.",
    image: "https://i.postimg.cc/wBM7bg72/Artboard-1.jpg",
    carouselImages: [
      { title: "Your Morning Routine, Elevated", url: "https://i.postimg.cc/wBM7bg72/Artboard-1.jpg" },
      { title: "Where Connections Happen", url: "https://i.postimg.cc/ncLbmzgL/Artboard-1-copy-2.jpg" },
      { title: "Dive Into Tranquility", url: "https://i.postimg.cc/13CzF2vx/Artboard-1-copy.png" }
    ],
    link: "https://i.postimg.cc/wBM7bg72/Artboard-1.jpg",
    project: "02",
    featured: true
  },
  {
    id: 17,
    title: "Premium Headphone Campaign – AETHER",
    category: "Social Media",
    description: "High-end commercial advertisement design for AETHER premium headphones, focusing on sleek minimalist product staging, elegant dark aesthetic, and precise light-shadow contrast.",
    image: "https://i.postimg.cc/W4QZjh48/aether-headphone-v-2.jpg",
    link: "https://i.postimg.cc/W4QZjh48/aether-headphone-v-2.jpg",
    project: "03",
    featured: true
  },
  {
    id: 14,
    title: "Luxury Fashion Campaign – AUREL Studio",
    category: "Social Media",
    description: "Minimal luxury fashion campaign design for a premium streetwear brand, focused on editorial composition, clean typography, and high-end brand presentation.",
    image: "https://i.postimg.cc/SKNbTQFH/AUREL-studio-v-1.jpg",
    link: "https://i.postimg.cc/SKNbTQFH/AUREL-studio-v-1.jpg",
    project: "04",
    featured: true
  },
  {
    id: 15,
    title: "IRONCORE FITNESS STUDIO – GYM CAMPAIGN POSTER",
    category: "Social Media",
    description: "High-impact promotional fitness campaign designed for a premium gym brand focused on strength, discipline, and transformation. The design uses strong visual hierarchy, bold typography, dramatic lighting, and red-black contrast to create urgency and powerful brand presence.",
    image: "https://i.postimg.cc/vBMNwY9n/ironcore-fitness-studio-v-2.jpg",
    link: "https://i.postimg.cc/vBMNwY9n/ironcore-fitness-studio-v-2.jpg",
    project: "05",
    featured: true
  },
  {
    id: 2,
    title: "Zesta Juice Bar – Poster Design",
    category: "Social Media",
    description: "Bright commercial beverage advertisement created for strong product visibility, vibrant brand presence, and effective promotional marketing design.",
    image: "https://i.postimg.cc/4yS2nMYK/zesta-final.jpg",
    link: "https://www.instagram.com/p/DXZhhtfD-8m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    project: "06",
    featured: true
  },
  {
    id: 19,
    title: "Your Morning Routine, Elevated",
    category: "Social Media",
    description: "A luxury residential poster exploring wellness and morning routines.",
    image: "https://i.postimg.cc/wBM7bg72/Artboard-1.jpg",
    link: "https://i.postimg.cc/wBM7bg72/Artboard-1.jpg",
    project: "07",
    featured: false
  },
  {
    id: 20,
    title: "Where Connections Happen",
    category: "Social Media",
    description: "A luxury residential poster celebrating community and connection.",
    image: "https://i.postimg.cc/ncLbmzgL/Artboard-1-copy-2.jpg",
    link: "https://i.postimg.cc/ncLbmzgL/Artboard-1-copy-2.jpg",
    project: "08",
    featured: false
  },
  {
    id: 21,
    title: "Dive Into Tranquility",
    category: "Social Media",
    description: "A luxury residential poster highlighting relaxation and serenity.",
    image: "https://i.postimg.cc/13CzF2vx/Artboard-1-copy.png",
    link: "https://i.postimg.cc/13CzF2vx/Artboard-1-copy.png",
    project: "09",
    featured: false
  },
  {
    id: 22,
    title: "BVLGARI × ORLÉAN Luxury Watch Collection Campaign",
    category: "Luxury Branding & Social Media Campaign",
    description: "A luxury watch collection campaign inspired by Italian craftsmanship and French design, focusing on timeless elegance, exquisite details, and sophisticated product styling.",
    image: "https://i.postimg.cc/NMSp3shL/orlean-poster-1.jpg",
    carouselImages: [
      { title: "BVLGARI × ORLÉAN – Timeless Heritage", url: "https://i.postimg.cc/NMSp3shL/orlean-poster-1.jpg" },
      { title: "BVLGARI × ORLÉAN – Exquisite Precision", url: "https://i.postimg.cc/brn3878S/orlean-poster-2.jpg" },
      { title: "BVLGARI × ORLÉAN – Bold Sophistication", url: "https://i.postimg.cc/L6rsj7ws/orlean-poster-3.jpg" }
    ],
    link: "https://i.postimg.cc/NMSp3shL/orlean-poster-1.jpg",
    project: "07",
    featured: true
  },
  {
    id: 23,
    title: "BVLGARI × ORLÉAN – Timeless Heritage",
    category: "Luxury Branding & Social Media Campaign",
    description: "Featured luxury branding poster from the BVLGARI × ORLÉAN campaign, highlighting Italian craftsmanship.",
    image: "https://i.postimg.cc/NMSp3shL/orlean-poster-1.jpg",
    link: "https://i.postimg.cc/NMSp3shL/orlean-poster-1.jpg",
    project: "08",
    featured: false
  },
  {
    id: 24,
    title: "BVLGARI × ORLÉAN – Exquisite Precision",
    category: "Luxury Branding & Social Media Campaign",
    description: "Featured luxury branding poster from the BVLGARI × ORLÉAN campaign, emphasizing Swiss movement and modern precision.",
    image: "https://i.postimg.cc/brn3878S/orlean-poster-2.jpg",
    link: "https://i.postimg.cc/brn3878S/orlean-poster-2.jpg",
    project: "09",
    featured: false
  },
  {
    id: 25,
    title: "BVLGARI × ORLÉAN – Bold Sophistication",
    category: "Luxury Branding & Social Media Campaign",
    description: "Featured luxury branding poster from the BVLGARI × ORLÉAN campaign, capturing sleek product staging and premium finishes.",
    image: "https://i.postimg.cc/L6rsj7ws/orlean-poster-3.jpg",
    link: "https://i.postimg.cc/L6rsj7ws/orlean-poster-3.jpg",
    project: "10",
    featured: false
  },
  {
    id: 16,
    title: "YouTube Thumbnail Redesign – Is AI Stealing Your Job?",
    category: "Social Media",
    description: "A high-impact YouTube thumbnail redesign focused on maximizing click-through rates. The composition leverages strong typography and high-contrast color palettes to create immediate visual hierarchy. By balancing complex subject matter with an attention-grabbing layout, the design ensures readability even at smaller scales, driving viewer engagement through strategic composition.",
    image: "https://i.postimg.cc/43jTwb5W/thumbnail-portfolio.png",
    link: "https://i.postimg.cc/43jTwb5W/thumbnail-portfolio.png",
    project: "11",
    featured: true
  }
];

const categories = ["All", "YouTube Thumbnails", "Social Media Posters", "Branding & Prints"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxData, setLightboxData] = useState<{
    images: { url: string; title: string }[];
    currentIndex: number;
  } | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxData) return;
      if (e.key === "Escape") {
        setLightboxData(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxData((prev) => {
          if (!prev || prev.images.length <= 1) return prev;
          const nextIndex = prev.currentIndex - 1 < 0 ? prev.images.length - 1 : prev.currentIndex - 1;
          return { ...prev, currentIndex: nextIndex };
        });
      } else if (e.key === "ArrowRight") {
        setLightboxData((prev) => {
          if (!prev || prev.images.length <= 1) return prev;
          const nextIndex = prev.currentIndex + 1 >= prev.images.length ? 0 : prev.currentIndex + 1;
          return { ...prev, currentIndex: nextIndex };
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxData]);

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

  const featuredOrder = [13, 17, 22, 18, 14, 15, 2, 16];
  const featuredItems = portfolioItems
    .filter(item => item.featured)
    .sort((a, b) => {
      const indexA = featuredOrder.indexOf(a.id);
      const indexB = featuredOrder.indexOf(b.id);
      return (indexA !== -1 ? indexA : 99) - (indexB !== -1 ? indexB : 99);
    });

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
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center reveal`}
              >
                {item.carouselImages ? (
                  <div className="w-full md:w-3/5">
                    <ProjectCarousel 
                      images={item.carouselImages} 
                      projectTitle={item.title} 
                      onImageClick={(index) => setLightboxData({ 
                        images: item.carouselImages.map(img => ({ url: img.url, title: `${item.title} - ${img.title}` })), 
                        currentIndex: index 
                      })}
                    />
                  </div>
                ) : (
                  <button 
                    onClick={() => setLightboxData({
                      images: [{ url: item.image, title: item.title }],
                      currentIndex: 0
                    })}
                    className="w-full md:w-3/5 group cursor-pointer relative overflow-hidden rounded-[2rem] border border-white/10 text-left block"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </button>
                )}
                <div className="w-full md:w-2/5">
                  <button 
                    onClick={() => {
                      if (item.carouselImages) {
                        setLightboxData({ 
                          images: item.carouselImages.map(img => ({ url: img.url, title: `${item.title} - ${img.title}` })), 
                          currentIndex: 0 
                        });
                      } else {
                        setLightboxData({ 
                          images: [{ url: item.image, title: item.title }], 
                          currentIndex: 0 
                        });
                      }
                    }}
                    className="hover:opacity-70 transition-opacity text-left block"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                  </button>
                  <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-6">{item.category}</p>
                  {item.description && (
                    <p className="text-white/60 font-light leading-relaxed mb-10 text-base md:text-lg">
                      {item.description}
                    </p>
                  )}
                  <button 
                    onClick={() => {
                      if (item.carouselImages) {
                        setLightboxData({ 
                          images: item.carouselImages.map(img => ({ url: img.url, title: `${item.title} - ${img.title}` })), 
                          currentIndex: 0 
                        });
                      } else {
                        setLightboxData({ 
                          images: [{ url: item.image, title: item.title }], 
                          currentIndex: 0 
                        });
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-2 hover:border-white transition-colors"
                  >
                    View Design <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="pb-40 px-8 md:px-20 reveal">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-4">Complete Archive</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">More Designs</h2>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4">
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

            <div className={`grid gap-8 ${activeCategory === "YouTube Thumbnails" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}>
              <AnimatePresence mode="popLayout">
                {portfolioItems
                  .filter((item) => {
                    if (item.id === 18 || item.id === 22) return false;
                    if (activeCategory === "All") return true;
                    if (activeCategory === "YouTube Thumbnails") return item.title.toLowerCase().includes('thumbnail');
                    if (activeCategory === "Social Media Posters") {
                      return !item.title.toLowerCase().includes('thumbnail') && 
                        (item.category === "Social Media" || item.category.toLowerCase().includes("social media"));
                    }
                    if (activeCategory === "Branding & Prints") {
                      return item.category === "Branding" || 
                        item.category === "Prints" || 
                        item.category.toLowerCase().includes("branding");
                    }
                    return false;
                  })
                  .map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setLightboxData({
                        images: [{ url: item.image, title: item.title }],
                        currentIndex: 0
                      })}
                      className="group relative cursor-pointer"
                    >
                      <div className={`${item.title.toLowerCase().includes('thumbnail') ? 'aspect-video' : 'aspect-[4/5]'} overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 relative`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{item.category}</span>
                          <h4 className="text-sm md:text-base font-bold uppercase leading-tight tracking-tight line-clamp-2">{item.title}</h4>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxData(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxData(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all text-white z-50 flex items-center justify-center cursor-pointer shadow-lg"
              title="Close modal (Esc)"
            >
              <X size={20} />
            </button>

            {lightboxData.images.length > 1 && (
              <>
                {/* Left Navigation Arrow (Slide Icon) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxData((prev) => {
                      if (!prev) return null;
                      const nextIndex = prev.currentIndex - 1 < 0 ? prev.images.length - 1 : prev.currentIndex - 1;
                      return { ...prev, currentIndex: nextIndex };
                    });
                  }}
                  className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all text-white z-50 flex items-center justify-center cursor-pointer shadow-lg"
                  title="Previous poster (Arrow Left)"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Navigation Arrow (Slide Icon) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxData((prev) => {
                      if (!prev) return null;
                      const nextIndex = prev.currentIndex + 1 >= prev.images.length ? 0 : prev.currentIndex + 1;
                      return { ...prev, currentIndex: nextIndex };
                    });
                  }}
                  className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all text-white z-50 flex items-center justify-center cursor-pointer shadow-lg"
                  title="Next poster (Arrow Right)"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Container with Title */}
            <div 
              className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center cursor-default gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxData.images[lightboxData.currentIndex].url}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                drag={lightboxData.images.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, info) => {
                  if (lightboxData.images.length <= 1) return;
                  const swipe = info.offset.x;
                  if (swipe < -50) {
                    setLightboxData((prev) => {
                      if (!prev) return null;
                      const nextIndex = prev.currentIndex + 1 >= prev.images.length ? 0 : prev.currentIndex + 1;
                      return { ...prev, currentIndex: nextIndex };
                    });
                  } else if (swipe > 50) {
                    setLightboxData((prev) => {
                      if (!prev) return null;
                      const nextIndex = prev.currentIndex - 1 < 0 ? prev.images.length - 1 : prev.currentIndex - 1;
                      return { ...prev, currentIndex: nextIndex };
                    });
                  }
                }}
                src={lightboxData.images[lightboxData.currentIndex].url}
                alt={lightboxData.images[lightboxData.currentIndex].title}
                referrerPolicy="no-referrer"
                draggable="false"
                className={`max-w-[90vw] max-h-[75vh] md:max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl select-none ${
                  lightboxData.images.length > 1 ? "cursor-grab active:cursor-grabbing" : ""
                }`}
              />
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center px-4"
              >
                <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-tight leading-tight line-clamp-1">
                  {lightboxData.images[lightboxData.currentIndex].title}
                </h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
                  {lightboxData.images.length > 1 ? (
                    <span>Poster {lightboxData.currentIndex + 1} of {lightboxData.images.length}</span>
                  ) : (
                    <span>Abir Karmakar Portfolio</span>
                  )}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
