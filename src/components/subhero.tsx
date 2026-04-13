"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubHeroProps {
  title: string;
  subtitle?: string;
}

export default function SubHero({ title, subtitle }: SubHeroProps) {
  return (
    <div className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto border-l-2 border-primary/40 pl-6 italic">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
