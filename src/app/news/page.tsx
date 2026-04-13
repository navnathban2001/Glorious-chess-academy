import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import Link from "next/link";
import { Calendar, ChevronRight, Share2 } from "lucide-react";

const newsItems = [
  {
    title: "Student Success: Vedant Sachin Hingole Achieves FIDE Rating",
    date: "Aug 8, 2023",
    excerpt: "Detailed report of the Jalna student's rating achievement in Pune during the Bharatbhushan Halkude Memorial Chess Festival.",
    image: "/slide3.jpg"
  },
  {
    title: "The Diverse World of Academy Events",
    date: "Sep 28, 2022",
    excerpt: "From local championships to intensive grandmaster training sessions, explore the types of events we hold for our students.",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Best Cognitive Benefits of Playing Chess",
    date: "Jul 28, 2022",
    excerpt: "Discussing the long-term impact of early chess education on prefrontal cortex development and life-long strategic planning skills.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubHero 
        title="Academy News" 
        subtitle="Latest updates on student FIDE ratings, academy events, and strategic articles." 
      />
      
      <div className="bg-black py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {newsItems.map((news, idx) => (
              <div key={idx} className="group glass rounded-[2.5rem] overflow-hidden flex flex-col border-white/5 hover:border-primary/20 transition-all shadow-xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white font-black px-4 py-2 rounded-xl scale-90 group-hover:scale-100 transition-transform">
                    LATEST
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-primary/40 pl-4">
                    <Calendar size={16} />
                    {news.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 italic tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <Link 
                      href="#" 
                      className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                    >
                      Read Article <ChevronRight size={16} className="text-primary" />
                    </Link>
                    <button className="text-gray-600 hover:text-primary transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
             <div className="glass p-12 rounded-[3.5rem] border-primary/5 max-w-2xl mx-auto">
               <h4 className="text-2xl font-bold italic mb-6">Stay ahead of the game</h4>
               <p className="text-gray-500 mb-8">Subscribe to our newsletter for weekly strategic insights and tournament updates.</p>
               <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-grow bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-primary outline-none transition-all"
                  />
                  <button className="bg-primary text-white font-bold px-10 py-4 rounded-2xl hover:bg-opacity-90 transition-all">
                    Subscribe
                  </button>
               </div>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
