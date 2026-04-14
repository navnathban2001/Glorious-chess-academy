"use client";

import { Trophy, Users, Star, Rocket, Send } from "lucide-react";
import Link from "next/link";

// ✅ Components Imports
import Navbar from "@/components/navbar";
import HeroSlider from "@/components/heroslider";
import CoursesSection from "@/components/coursessection";
import FAQSection from "@/components/faqsection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />
      <HeroSlider />

      {/* Highlights Section */}
      <section className="py-24 bg-black px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Users, stat: "1000+", label: "Students Trained" },
              { icon: Trophy, stat: "100+", label: "Tournaments Conducted" },
              { icon: Star, stat: "Certified", label: "FIDE-rated Coaches" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20">
                  <item.icon size={32} />
                </div>
                <div className="text-5xl font-black text-white italic">
                  {item.stat}
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* Partner Section */}
      <section className="py-24 bg-[#080808] px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-primary/20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] mb-8">
              <Rocket size={20} />
              Partner Opportunity
            </div>

            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase italic tracking-tighter">
              Start Your Chess <br />
              <span className="text-primary">
                Academy With Us 
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Build your own chess academy with Access to FIDE-rated coaching network, 
              ready-to-use platforms, student lead support, and full marketing assistance.
            </p>

            <Link
              href="/partners"
              className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/30 uppercase tracking-widest"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
              Book Your <br />
              <span className="text-primary">
                Free Demo Class
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium capitalize">
              Learn directly from a FIDE-rated coach and experience our world-class training standards firsthand.
            </p>

            <div className="flex items-center gap-6 text-gray-500 font-bold">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-black bg-gray-800"
                  />
                ))}
              </div>
              <span>Join 500+ students this month</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass p-10 md:p-12 rounded-[3.5rem] border-white/5 bg-gradient-to-br from-white/5 to-transparent">

              <form className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                      Mobile Number
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all"
                      placeholder="Contact number"
                    />
                  </div>

                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                    Child's Age (If applicable)
                  </label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all"
                    placeholder="Age"
                  />
                </div>

                <button className="w-full bg-primary text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                  <Send size={18} />
                   Book Free Demo
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

      <FAQSection />
      <Footer />

    </main>
  );
}