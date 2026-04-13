"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Are the classes online or at your center?",
    answer: "Our classes are exclusively online and live, ensuring an interactive learning environment that combines professional instruction with the convenience of learning from home.",
  },
  {
    question: "Do you provide certificates after the course?",
    answer: "Yes, students receive an official certificate from Glorious Chess Academy upon the successful completion of each level, following a verifying assessment test.",
  },
  {
    question: "How are students placed into different levels?",
    answer: "New students begin with a free trial class where our coaches evaluate their child's understanding and interest level to place them in Beginner, Intermediate, or Pro groups.",
  },
  {
    question: "How long can we access the course material?",
    answer: "Enrollment grants access to our curriculum portal and mobile app for as long as your subscription is active, with continuous coach support.",
  },
  {
    question: "What is your teaching methodology?",
    answer: "We use a step-by-step approach starting from the basics, focusing on strategic concepts followed by practice assignments and weekly internal tournaments.",
  },
  {
    question: "Are classes based on age groups?",
    answer: "No, we group students by their understanding of chess (skill level) rather than age, ensuring that peers learn at a similar pace.",
  },
  {
    question: "How do I enroll my child?",
    answer: "The process is simple: 1. Fill out the enrollment form. 2. Attend a free trial class for evaluation. 3. Receive group placement and invoice for confirmation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            Everything You Need To Know
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            FREQUENTLY ASKED <span className="text-primary italic">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl overflow-hidden transition-all duration-300 border border-white/5 hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className="text-xl font-bold group-hover:text-primary transition-colors pr-6">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-primary flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-primary/10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white">
              <MessageCircle size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold italic">Still have questions?</h4>
              <p className="text-gray-400">Our coaches are here to help your child succeed.</p>
            </div>
          </div>
          <a
            href="https://wa.me/7620857664"
            target="_blank"
            className="bg-primary hover:bg-opacity-90 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20"
          >
            Chat with a Coach
          </a>
        </div>
      </div>
    </section>
  );
}
