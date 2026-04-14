"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import AboutSection from "@/components/aboutsection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* SubHero for the dedicated About page */}
      <SubHero 
        title="About Our Academy" 
        subtitle="Nurturing excellence through precision, strategic discipline, and expert FIDE-rated mentorship."
      />
      
      {/* Reusing the AboutSection component for core content consistency */}
      <AboutSection />
      
      {/* Additional Mission/Vision Section for the standalone page */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-primary">Our Mission</h3>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              To democratize world-class chess education by providing accessible, 
              high-quality training that empowers students to reach their full potential 
              on the global stage.
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-primary">Our Vision</h3>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              To become the world's most trusted chess academy, known for producing 
              strategic thinkers and national-level champions through our 
              unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
