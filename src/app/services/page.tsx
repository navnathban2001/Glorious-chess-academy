import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import CoursesSection from "@/components/coursessection";
import { CheckCircle2, TrendingUp, Trophy } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubHero 
        title="Our Services" 
        subtitle="Professional chess training programs designed for every stage of your strategic journey." 
      />
      
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 italic uppercase tracking-tight">
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

