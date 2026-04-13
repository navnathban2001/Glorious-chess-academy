import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import FAQSection from "@/components/faqsection";

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubHero 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about our enrollment, curriculum, and online classroom experience." 
      />
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

