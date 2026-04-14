"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { Trophy, Users, BarChart, ShieldCheck, Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TournamentPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SubHero 
        title="Tournaments" 
        subtitle="Compete in Professional Chess Tournaments. Organized under the expert guidance of FIDE-rated coaches." 
      />

      {/* Hero Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                🏆 Competitive Arena
             </div>
             <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
                Prove Your Skills, <br />
                <span className="text-primary italic">Gain Recognition</span>
             </h2>
             <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                Improve your strategic depth through real competition. Our tournaments 
                provide the perfect platform to test your skills against players 
                worldwide in a professional, fair environment.
             </p>
             <Link 
               href="https://wa.me/7620857664"
               target="_blank"
               className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/30 uppercase tracking-widest"
             >
                Join Tournament
             </Link>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
             {[
               { icon: Play, title: "Regular Events", text: "Weekly online tournaments across all skill levels." },
               { icon: BarChart, title: "Rankings", text: "Global leaderboards and performance analysis." },
               { icon: ShieldCheck, title: "Pro Guidance", text: "Fair play monitored by FIDE-rated instructors." },
               { icon: Trophy, title: "Big Prizes", text: "Trophies, certificates, and placement recognition." }
             ].map((item, idx) => (
               <div key={idx} className="glass p-8 rounded-3xl border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-primary/20 transition-all">
                  <div className="text-primary mb-4"><item.icon size={32} /></div>
                  <h4 className="text-xl font-bold uppercase italic mb-2 leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-24 bg-[#080808] px-6 text-center">
          <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5"><Trophy size={150} /></div>
             <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">
                Why <span className="text-primary italic">Participate?</span>
             </h2>
             <p className="text-xl text-gray-400 mb-0 leading-relaxed font-medium">
                Competition is the fastest way to learn. By participating in professional 
                tournaments, you build the resilience and tactical mindset required 
                for master-level chess performance. Gaining recognition among peers 
                and professional coaches opens doors to advanced competitive opportunities.
             </p>
          </div>
      </section>

      <Footer />
    </main>
  );
}
