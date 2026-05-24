import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import tazLogo from "/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sirf 4 main pages
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Academy', href: '/academy' },
    { name: 'Mentor', href: '/mentor' },
    { name: 'Festivals', href: '/festivals' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed z-[100] left-0 right-0 mx-auto transition-all duration-500 ${
          scrolled 
            ? 'top-4 w-[92%] md:w-[80%] rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-xl' 
            : 'top-0 w-full bg-[#020617] border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-14' : 'h-20'}`}>
            
            {/* LOGO AREA */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <img src={tazLogo} className={`${scrolled ? 'w-10' : 'w-14'} transition-all duration-500`} alt="TAZ Logo" />
                {/* Subtle glow effect behind logo */}
                <div className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-full -z-10" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm md:text-lg font-bold tracking-[0.2em] text-white leading-none">
                  TRADE ALPHA <span className="text-blue-400">ZONE</span>
                </h1>
                <span className="text-[8px] tracking-[0.4em] text-zinc-500 uppercase mt-1">Forex Academy</span>
              </div>
            </motion.div>

            {/* DESKTOP NAV (Simple & Clean) */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (Full Responsive) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 shadow-2xl"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-[12px] font-bold text-zinc-400 hover:text-blue-500 uppercase tracking-widest py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="w-full py-3 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer */}
      <div className={`${scrolled ? 'h-0' : 'h-20'} w-full bg-[#020617]`} />
    </>
  );
};

export default Navbar;