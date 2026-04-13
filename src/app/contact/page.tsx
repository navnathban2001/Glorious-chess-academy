"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubHero from "@/components/subhero";
import { Mail, Phone, MapPin, Send, MessageSquare, User } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubHero 
        title="Contact Us" 
        subtitle="We're here to guide your strategic journey. Reach out for enrollments, partnerships, or support." 
      />
      
      <div className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-4xl font-black italic uppercase mb-8">Get In <span className="text-primary">Touch</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a question about our classes or trial sessions? Drop us a message or 
                visit our academy office in Jalna.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Call Us", text: "+91 76208 57664" },
                { icon: Mail, label: "Email Support", text: "support@gloriouschessacademy.com" },
                { icon: MapPin, label: "Our Office", text: "Ambad Rd, behind Sai Kirti hotel, Prayag Nagar, Old Jalna, Jalna, 431203" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group items-start">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:bg-opacity-20 group-hover:border-primary/40 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">{item.label}</span>
                    <span className="text-xl font-bold text-gray-200">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="glass p-10 md:p-12 rounded-[3.5rem] border-primary/20">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                      <input 
                        type="text" 
                        placeholder="Jane Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-12 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                      <input 
                        type="email" 
                        placeholder="jane@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-12 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" size={16} />
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-12 focus:border-primary outline-none transition-all appearance-none">
                      <option className="text-black">General Inquiry</option>
                      <option className="text-black">Enrollment Question</option>
                      <option className="text-black">Technical Support</option>
                      <option className="text-black">Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us more about your child's chess journey..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-white font-black py-6 rounded-2xl uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.01] transition-all shadow-2xl shadow-primary/20">
                  <MessageSquare size={20} />
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

