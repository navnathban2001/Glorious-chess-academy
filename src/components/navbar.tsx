"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "FAQ's", href: "/faq" },
  { name: "Achievements", href: "/achievements" },
  { name: "Coach Hiring", href: "/hiring" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Glorious Chess Academy Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">
            GLORIOUS CHESS <span className="text-primary italic">ACADEMY</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? "text-primary" : "text-gray-400"
                } hover:text-primary`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            );
          })}
          <Link
            href="https://wa.me/7620857664"
            target="_blank"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Inquiry Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex justify-between items-center text-lg font-medium py-2 border-b border-white/5 ${
                      isActive ? "text-primary" : "text-gray-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={18} className={isActive ? "text-primary" : "text-gray-600"} />
                  </Link>
                );
              })}
              <Link
                href="https://wa.me/7620857664"
                target="_blank"
                className="bg-primary text-white py-4 rounded-xl text-center font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Inquiry Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
