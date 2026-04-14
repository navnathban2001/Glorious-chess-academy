"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { BookOpen, Video, Puzzle, Trophy, Star, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SubHero 
        title="Student Excellence" 
        subtitle="Learn Chess from FIDE-Rated Coaches – Anytime, Anywhere. Tailored pathways from absolute basics to tournament mastery." 
      />

      {/* Course Structure */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
              Structured <span className="text-primary italic">Course Journey</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              A comprehensive roadmap designed by professional coaches to take you 
              from your first move to competitive tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner Level",
                description: "The foundation of your chess journey.",
                items: ["Chess basics & rules", "Piece movement & values", "Basic checkmate patterns", "Board coordinates"],
                icon: BookOpen,
                color: "from-blue-500/20"
              },
              {
                level: "Intermediate Level",
                description: "Developing strategic depth and tactical vision.",
                items: ["Opening principles", "Mid-game tactics", "Positional play", "Typical endgame techniques"],
                icon: Puzzle,
                color: "from-emerald-500/20"
              },
              {
                level: "Advanced Level",
                description: "Elite preparation for rated competitions.",
                items: ["Tournament preparation", "Competitive strategies", "Deep calculation", "Advanced game analysis"],
                icon: Trophy,
                color: "from-primary/20"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass p-10 rounded-[3rem] border-white/5 bg-gradient-to-br ${item.color} to-transparent relative group hover:border-primary/30 transition-all`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-8 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 italic uppercase">{item.level}</h3>
                <p className="text-gray-400 mb-8 font-medium">{item.description}</p>
                <ul className="space-y-4">
                  {item.items.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-[#080808] px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase italic tracking-tighter">
              What You <br />
              <span className="text-primary italic">Unlock With Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Video, title: "Live Classes", text: "Interactive sessions by FIDE-rated coaches." },
                { icon: BookOpen, title: "Recorded Sessions", text: "Access all lessons anytime for revision." },
                { icon: Puzzle, title: "Puzzles & Games", text: "Curated practice games and strategic puzzles." },
                { icon: Trophy, title: "Tournaments", text: "Regular participation in rated events." },
              ].map((benefit, bIdx) => (
                <div key={bIdx} className="space-y-3">
                  <div className="text-primary"><benefit.icon size={24} /></div>
                  <h4 className="text-xl font-bold uppercase italic">{benefit.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video glass rounded-[3rem] relative overflow-hidden border-primary/20 flex items-center justify-center">
               <div className="text-center p-12">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Star className="text-primary" size={40} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-black italic uppercase mb-4">Official Certification</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Improve your ranking through structured learning 
                    guided by professional coaches and get recognized certificates.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-primary/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">Ready to make <br /> <span className="text-primary italic">your first move?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-primary text-white border-none px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/30 uppercase tracking-widest"
            >
              Enroll Now
            </Link>
            <Link 
              href="/#demo"
              className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all uppercase tracking-widest"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
