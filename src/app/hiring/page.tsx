"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { Send, User, Mail, Briefcase, FileText, MapPin, Phone, Globe, Home } from "lucide-react";
import Image from "next/image";

export default function HiringPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubHero 
        title="Coach Hiring" 
        subtitle="Ignite passion for kids in the world of Chess and support him/her through the transition with passion and integrity." 
      />
      
      <div className="bg-black py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Content Side */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <div className="relative w-28 h-28 mb-10 overflow-hidden rounded-2xl p-4 glass border-primary/20">
                <Image 
                  src="/logo.png" 
                  alt="Glorious Chess Academy Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8 leading-tight tracking-tighter">
                Our Coaching <br />
                <span className="text-primary italic">Philosophy</span>
              </h2>
              <div className="glass p-10 rounded-[3rem] border-primary/20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700" />
                <p className="text-2xl text-gray-200 leading-relaxed italic relative z-10">
                  "At Glorious Chess Academy, Our vision is to “Ignite passion for kids 
                  in the world of Chess and support him/her through the transition 
                  with passion and integrity”."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                If you are passionate about Chess Coaching, start your first move by 
                filling the form. Thanks for taking the first step towards your Chess career!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Integrity", text: "Support student transitions with absolute passion." },
                  { label: "Expertise", text: "Professional FIDE / National level strategic depth." },
                  { label: "Dedication", text: "Fostering a world-class competitive mindset." },
                  { label: "Growth", text: "Empowering the next generation of grandmasters." },
                ].map((item, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all group">
                    <span className="block text-primary font-black text-xs uppercase tracking-[0.2em] mb-3 group-hover:scale-110 origin-left transition-transform">{item.label}</span>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="glass p-8 md:p-12 rounded-[4rem] border-primary/10 shadow-3xl bg-[#080808]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Image src="/logo.png" alt="logo" width={100} height={100} />
              </div>
              
              <h3 className="text-3xl font-bold mb-10 italic uppercase tracking-tighter flex items-center gap-4">
                Recruitment Form
                <span className="h-px bg-primary/30 flex-grow" />
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                    <div className="relative group">
                       <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                       <input 
                         type="text" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                         placeholder="Full Name"
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Mobile Number</label>
                    <div className="relative group">
                       <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                       <input 
                         type="tel" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                         placeholder="Mobile Number"
                       />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                  <div className="relative group">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                     <input 
                       type="email" 
                       className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                       placeholder="Email Address"
                     />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Street Address</label>
                  <div className="relative group">
                     <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                     <input 
                       type="text" 
                       className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                       placeholder="Street Address"
                     />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative group">
                     <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                     <input 
                       type="text" 
                       className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                       placeholder="Apartment, suite, etc"
                     />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                    placeholder="City"
                  />
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                    placeholder="State/Province"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                    placeholder="ZIP / Postal Code"
                  />
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all text-gray-500">
                    <option>Select country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Fide Profile *</label>
                  <div className="relative group">
                     <Globe className="absolute left-4 top-15 translate-y-4 text-primary opacity-50" size={16} />
                     <input 
                       type="url" 
                       className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:border-primary outline-none transition-all placeholder:text-gray-700"
                       placeholder="https://ratings.fide.com/..."
                     />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Coach Profile *</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-gray-700 h-32 resize-none"
                    placeholder="Coach Profile *"
                  />
                </div>

                <button className="w-full bg-primary text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
