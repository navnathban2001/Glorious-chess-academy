"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { CheckCircle, ArrowRight, PlayCircle, Users, User, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SubHero 
        title="Our Programs" 
        subtitle="Structured Chess Programs by FIDE-Rated Coaches. High-quality training standards designed for every skill level." 
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "Beginner Course",
                description: "The Fundamentals of Chess",
                points: ["Board orientation & coordinates", "Piece movement and values", "Basic rules (Castling, En Passant)", "Elementary checkmate patterns"],
                icon: PlayCircle,
                cta: "Enroll Now",
                color: "bg-blue-600"
              },
              {
                title: "Intermediate Course",
                description: "Strategy & Tactical Play",
                points: ["Tactical patterns (Pins, Forks, Skewers)", "Opening principles and variations", "Strategic thinking and planning", "Positional evaluation Basics"],
                icon: Users,
                color: "bg-emerald-600",
                cta: "Enroll Now"
              },
              {
                title: "Advanced Course",
                description: "Competitive Chess & Mastery",
                points: ["Elite tournament preparation", "Deep game analysis & calculation", "Advanced competitive strategies", "Individualized training plans"],
                icon: User,
                color: "bg-primary",
                cta: "Enroll Now"
              }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-10 md:p-16 rounded-[4rem] border-white/5 flex flex-col lg:flex-row gap-16 items-center hover:border-primary/20 transition-all group"
              >
                <div className="lg:w-1/3 text-center lg:text-left">
                   <div className={`w-24 h-24 rounded-[2rem] ${course.color} flex items-center justify-center text-white mx-auto lg:mx-0 mb-8 shadow-3xl`}>
                      <course.icon size={48} />
                   </div>
                   <h3 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">{course.title}</h3>
                   <p className="text-gray-400 text-xl font-medium">{course.description}</p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-4 glass bg-white/5 p-6 rounded-2xl border-white/5 group-hover:bg-primary/5 transition-all">
                       <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                       <span className="text-gray-300 font-bold leading-tight">{point}</span>
                    </div>
                  ))}
                  <div className="md:col-span-2 mt-4">
                     <Link 
                       href="/contact"
                       className={`inline-flex items-center gap-4 ${course.color} text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl uppercase tracking-widest`}
                     >
                         {course.cta}
                     </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Highlight */}
      <section className="py-24 bg-[#080808] px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[3.5rem] border-primary/20 text-center relative overflow-hidden">
             <div className="flex items-center justify-center gap-4 text-primary mb-8 font-black uppercase tracking-widest">
                <Star size={24} fill="currentColor" />
                Expert Led
             </div>
             <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase leading-tight tracking-tighter">
                Designed & Delivered <br />
                <span className="text-primary italic">By FIDE-Rated Coaches</span>
             </h2>
             <p className="text-xl text-gray-400 leading-relaxed font-medium">
                Every course is curated to meet the highest global training standards, 
                ensuring that you don't just learn to play, but learn to win with strategy.
             </p>
          </div>
      </section>

      <Footer />
    </main>
  );
}
