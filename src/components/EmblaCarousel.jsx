'use client'
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 10000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setIsAnimating(true); // Block entry animation
      setTimeout(() => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setIsAnimating(false); // Allow entry animation after delay
      }, 1200); // Adjust delay as needed
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const slides = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fslide-1.webp?alt=media&token=5390b555-a3fa-418e-855d-85cb50105810",
      text: "shine with perfection",
      heading: "Rejuvenation",
      subheading: "beautiful cover",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fslide-2.webp?alt=media&token=b16f5850-d709-4559-a94b-fb286831eb00",
      text: "practice positive energy",
      heading: "Relaxation",
      subheading: "made simple",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fslide-3.webp?alt=media&token=cda822f4-967d-46b2-8bb9-b33c49dc42da",
      text: "rejuvenate today",
      heading: "Revitalize",
      subheading: "inner serenity",
    },
  ];

  const h5Variant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const h2Variant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -80, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const strongVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -80, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`embla__fade flex-[0_0_100%] lg:flex-[0_0_95%]  lg:h-[90vh] h-[60vh] transition-opacity duration-300 ease-linear flex flex-col gap-6 justify-center pl-10 bg-[bottom_center] bg-cover lg:rounded-[40px] ${
              selectedIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <AnimatePresence mode="wait">
              {!isAnimating && selectedIndex === index && (
                <>
                  <motion.h2
                    key={`${index}-h5`}
                    variants={h5Variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-white p-2 px-4 uppercase rounded-full text-xs font-semibold w-max border-[1px]"
                  >
                    {slide.text}
                  </motion.h2>
                  <motion.strong
                    key={`${index}-strong`}
                    variants={strongVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-white text-5xl sm:text-7xl"
                  >
                    {slide.heading}
                  </motion.strong>
                  <motion.h5
                    key={`${index}-h2`}
                    variants={h2Variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-white font-normal text-5xl sm:text-7xl"
                  >
                    {slide.subheading}
                  </motion.h5>
                </>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 xl:right-1 right-[40%] xl:flex-col xl:top-[40%] transform -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`  rounded-full transition-all duration-300 ease-linear ${
              selectedIndex === index
                ? "bg-[#D9A74A]  xl:h-[28px] h-[14px] xl:w-[14px] w-[28px]"
                : "bg-[#666] dark:bg-white h-[14px]  w-[14px]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
