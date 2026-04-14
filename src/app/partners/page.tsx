"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { Briefcase, TrendingUp, Users, Presentation, ShieldCheck, Mail, Send, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SubHero 
        title="Partner Growth" 
        subtitle="Start Your Chess Academy With FIDE-Rated Coaching Support. Build your business on our expert foundations." 
      />

      {/* Why Become a Partner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">
              Why <span className="text-primary italic">Become a Partner?</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Join the fastest-growing chess ecosystem and leverage international 
              coaching standards to build your legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "FIDE Network", text: "Access to FIDE-rated coaching network", check: true },
              { icon: Presentation, title: "Ready Platform", text: "Ready-to-use chess learning platform", check: true },
              { icon: TrendingUp, title: "Lead Support", text: "Student lead support", check: true },
              { icon: Briefcase, title: "Onboarding", text: "Training & onboarding", check: true },
              { icon: ShieldCheck, title: "Branding", text: "Marketing & branding assistance", check: true },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                   <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase italic">
                  {feature.check && "✔ "}
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Opportunity & Who Can Join */}
      <section className="py-24 bg-[#080808] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">
                Earnings <span className="text-primary italic">Opportunity</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-medium">
                Build a sustainable and scalable coaching business by leveraging 
                our expert-led chess ecosystem. Focus on student relationships while 
                we handle the complex coaching standards.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase italic text-primary">Who Can Join?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {["Chess Coaches", "Chess Academies", "Schools & Institutions", "Chess Enthusiasts"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 glass px-6 py-4 rounded-2xl border-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-bold text-gray-300">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          <div className="glass p-12 rounded-[4rem] border-primary/10 relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute top-0 right-0 p-8 opacity-5"><TrendingUp size={200} /></div>
             <h3 className="text-3xl font-black mb-8 italic uppercase leading-tight">Apply To <br /> Become A Partner</h3>
             <form className="w-full space-y-6">
                <input className="w-full bg-white/5 border border-white/20 rounded-2xl p-5 outline-none focus:border-primary transition-all" placeholder="Your Name / Institution" />
                <input className="w-full bg-white/5 border border-white/20 rounded-2xl p-5 outline-none focus:border-primary transition-all" placeholder="Contact Mobile" />
                <select className="w-full bg-white/5 border border-white/20 rounded-2xl p-5 outline-none focus:border-primary transition-all text-gray-500">
                   <option>Existing Academy</option>
                   <option>Individual Coach</option>
                   <option>School/Institution</option>
                   <option>Investment Only</option>
                </select>
                <button className="w-full bg-primary text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-primary/30">
                   <Send size={18} />
                   Apply Now
                </button>
             </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black text-center mb-20 italic uppercase tracking-tighter">How It <span className="text-primary italic">Works</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
              {[
                { step: "01", title: "Apply as Partner", text: "Submit your application and schedule an initial discovery call." },
                { step: "02", title: "Onboarding", text: "Get full access to the FIDE coaching platform and training standards." },
                { step: "03", title: "Start Coaching", text: "Launch your classes with FIDE-level support and begin scaling." },
              ].map((item, idx) => (
                <div key={idx} className="glass p-10 rounded-[3rem] border-white/5 text-center relative">
                   <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black absolute -top-6 left-1/2 -translate-x-1/2 border-8 border-black">
                      {item.step}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 mt-4 uppercase italic">{item.title}</h4>
                   <p className="text-gray-500 leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
           </div>
           <div className="mt-20 text-center">
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="inline-flex items-center gap-4 bg-white/5 border border-white/20 px-12 py-5 rounded-full font-black text-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest"
              >
                Schedule a Call
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
