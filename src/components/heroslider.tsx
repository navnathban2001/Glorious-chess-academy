"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/slider1.png",
    title: "EVERY PLAYER IS A STAR",
    subtitle: "Unlock your potential with expert chess coaching.",
  },
  {
    image: "/slider2.png",
    title: "MASTER THE GAME",
    subtitle: "From beginner to Grandmaster – we guide you every step.",
  },
  {
    image: "/slide3.jpg",
    title: "STRATEGIC THINKING",
    subtitle: "Develop critical logic and problem-solving skills.",
  },
  {
    image: "/slider4.png",
    title: "JOIN THE ELITE",
    subtitle: "Be part of a community that breathes chess excellence.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          key={`content-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            {slides[current].title.split(" ").map((word, i) => (
              <span key={i} className={word === "STAR" ? "text-primary italic" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
              Get Started
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === i ? "w-12 bg-primary" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
