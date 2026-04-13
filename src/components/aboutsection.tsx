"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 p-4 relative">
            <div className="absolute inset-0 bg-primary/5 z-10" />
            <img
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000"
              alt="Chess Academy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl flex flex-col items-center">
            <span className="text-4xl font-black text-primary">10+</span>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Years Experience
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            About Our Academy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Quality over Quantity: <br />
            <span className="text-primary italic">Excellence in Chess</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Founded by FIDE rated coaches, Glorious Chess Academy is dedicated to
            nurturing the next generation of grandmasters. We provide a safe,
            intellectual environment where players of all ages can solve terminal
            problems and master the art of strategy.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: Award,
                title: "FIDE International Rating Success",
                description: "Our student Vedant Sachin Hingole achieved an international FIDE rating in 2023, showcasing our world-class training results.",
              },
              {
                icon: Target,
                title: "FIDE-Rated Professional Coaches",
                description: "Our team is led by FIDE-rated instructors who bring international standards and elite strategic insights to every class.",
              },
              {
                icon: Shield,
                title: "Skill-Based Peer Learning",
                description: "Students are grouped by skill evaluation (Beginner, Intermediate, Pro) rather than age for the most effective peer learning environment.",
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 10 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 italic tracking-tight uppercase">{item.title}</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
