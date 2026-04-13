import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { Star, Award, Medal, Users, Trophy } from "lucide-react";
import Image from "next/image";

const milestones = [
  {
    year: "2023",
    title: "International FIDE Rating Success",
    description: "Our student Vedant Sachin Hingole achieved an international FIDE rating at the Bharatbhushan Halkude Memorial Chess Festival in Pune.",
    icon: Star
  },
  {
    year: "2022",
    title: "Awards & Graduation Ceremonies",
    description: "Hosted regular ceremonies to celebrate student milestones, certificates, and trophy winners across all levels.",
    icon: Trophy
  },
  {
    year: "2021",
    title: "Expanding Elite Coaching",
    description: "Built a team of FIDE-rated professional instructors with international competitive experience.",
    icon: Award
  }
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubHero 
        title="Our Achievements" 
        subtitle="Celebrating Vedant Sachin Hingole's FIDE rating and our community of aspiring masters." 
      />
      
      <div className="bg-black py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Spotlight Achievement */}
          <div className="glass p-12 rounded-[3.5rem] mb-24 relative overflow-hidden border-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                  <Star size={18} fill="currentColor" />
                  International Milestone
                </div>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-8 leading-tight">
                  Student Success: <br />
                  <span className="text-primary italic">Vedant Sachin Hingole</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    From Jalna to the international stage, Vedant Sachin Hingole achieved his 
                    International FIDE Rating during the Bharatbhushan Halkude Memorial Chess 
                    Festival in Pune, May 2023.
                  </p>
                  <p>
                    He secured critical draws against international FIDE-rated players, 
                    showcasing the tactical depth and resilience nurtured at Glorious Chess Academy.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative aspect-square max-w-md">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3" />
                <div className="relative w-full h-full glass rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                   <div className="text-center p-8">
                     <Image 
                       src="/logo.png" 
                       alt="Glorious Chess Academy" 
                       width={180} 
                       height={180}
                       className="mx-auto mb-6 opacity-80"
                     />
                     <p className="text-sm font-bold tracking-widest text-primary uppercase">FIDE Certified Training</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="glass p-12 rounded-[2.5rem] relative group border-white/5 hover:border-primary/20 transition-all">
                <div className="absolute top-8 right-8 text-primary font-black text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {item.year}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-inner">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6 italic uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
