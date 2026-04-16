"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CoursesSection from "@/components/coursessection";
import { CheckCircle2, TrendingUp, Trophy, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10 blur-[120px] opacity-50" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(184,134,11,0.2)]">
              <Compass size={16} className="fill-current" /> Empower Your Mind
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Our <br />
              <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Services</span>
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Professional chess training programs designed for every stage of your strategic journey.
            </p>
          </motion.div>
        </div>
      </section>
      
      <div className="bg-[#080808] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">
              Why Choose Our <span className="text-primary">Programs?</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Structured Curriculum",
                  desc: "Our courses are divided into clear levels: Beginner, Intermediate, and Professional.",
                  icon: TrendingUp
                },
                {
                  title: "Certified Coaching",
                  desc: "Learn from FIDE rated coaches with years of international competitive experience.",
                  icon: Trophy
                },
                {
                  title: "Interactive Learning",
                  desc: "Live online classes with real-time feedback and state-of-the-art chess software.",
                  icon: CheckCircle2
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 glass rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden glass border-primary/20 p-2">
             <img 
               src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1000" 
               className="w-full h-full object-cover rounded-2xl opacity-80"
             />
          </div>
        </div>
      </div>

      <CoursesSection />
      <Footer />
    </main>
  );
}

