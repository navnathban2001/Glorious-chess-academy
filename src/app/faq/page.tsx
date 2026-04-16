"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQSection from "@/components/faqsection";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQPage() {
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
              <HelpCircle size={16} className="fill-current" /> Here To Help
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Frequently Asked <br />
              <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Questions</span>
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Everything you need to know about our enrollment, curriculum, and online classroom experience.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="bg-[#0f0f0f]">
        <FAQSection />
      </div>
      <div className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border-primary/20">
          <h3 className="text-3xl font-bold mb-6 italic">Need more clarity?</h3>
          <p className="text-gray-400 text-lg mb-8">
            Our support team is available 24/7 to help you with any specific queries regarding 
            your child's chess education.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Visit Help Center
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

