import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  title: string;
  url: string;
}

interface ProjectCarouselProps {
  images: ImageItem[];
  projectTitle: string;
  onImageClick?: (index: number) => void;
}

export default function ProjectCarousel({ images, projectTitle, onImageClick }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const setSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 group transition-all duration-500"
      style={{ aspectRatio: aspectRatio ? `${aspectRatio}` : "4/5" }}
    >
      {/* Slide transition */}
      <div className="absolute inset-0 select-none">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, info) => {
              const swipe = info.offset.x;
              if (swipe < -50) {
                navigate(1);
              } else if (swipe > 50) {
                navigate(-1);
              }
            }}
            onTap={() => onImageClick?.(currentIndex)}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none flex items-center justify-center"
          >
            {/* Ambient Blurred Background (renders subtly behind just in case of transition updates) */}
            <img
              src={images[currentIndex].url}
              alt=""
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-10 scale-105 pointer-events-none"
            />
            {/* Main Image */}
            <img
              src={images[currentIndex].url}
              alt={`${projectTitle} - ${images[currentIndex].title}`}
              referrerPolicy="no-referrer"
              draggable="false"
              onLoad={(e) => {
                const img = e.currentTarget;
                if (img.naturalWidth && img.naturalHeight) {
                  setAspectRatio(img.naturalWidth / img.naturalHeight);
                }
              }}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
            />
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-white hover:text-black hover:scale-105 transition-all text-white border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => navigate(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-white hover:text-black hover:scale-105 transition-all text-white border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
