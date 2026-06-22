import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Cpu, GraduationCap } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation here
import tazLogo from "/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop hover status tracking
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile toggle status tracking
  const navigate = useNavigate();
  const location = useLocation(); // Hook to track the active route pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Academy', href: '/academy' },
    { name: 'Founder', href: '/mentor' },
    { name: 'Feast', href: '/festivals' },
    { name: 'Live Channel', href: '/live-channel' },
  ];

  const secondaryLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // Proprietary Tech Suite Links Array
  const systemDropdownLinks = [
    { 
      name: 'Trade Auto Signal X', 
      href: '/software/autosignal-x', 
      desc: 'Automated Signal System',
      icon: <Cpu size={14} className="text-emerald-400" /> 
    },
  ];

  // Filter out the active route from arrays so it hides automatically
  const visibleNavLinks = navLinks.filter(link => location.pathname !== link.href);
  const visibleSecondaryLinks = secondaryLinks.filter(link => location.pathname !== link.href);
  const visibleDropdownLinks = systemDropdownLinks.filter(link => location.pathname !== link.href);

  // Quick check if the entire Systems dropdown category should be visible
  // It will hide only if all its inner links or sublinks are not currently active
  const isSystemsDropdownVisible = visibleDropdownLinks.length > 0;

  return (
    <>
      <nav
        className={`fixed z-[100] left-0 right-0 mx-auto transition-all duration-500 ${
          scrolled 
            ? 'top-4 w-[92%] md:w-[85%] lg:w-[80%] rounded-full bg-black/75 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'top-0 w-full bg-[#020617] border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-14' : 'h-20'}`}>
            
            {/* LOGO AREA */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <img src={tazLogo} className={`${scrolled ? 'w-10' : 'w-14'} transition-all duration-500`} alt="TAZ Logo" />
                <div className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-full -z-10" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs md:text-base font-black tracking-[0.2em] text-white leading-none">
                  TRADE ALPHA <span className="text-blue-400">ZONE</span>
                </h1>
                <span className="text-[7px] tracking-[0.35em] text-zinc-500 uppercase mt-1 font-semibold">Trading Academy</span>
              </div>
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1">
              {visibleNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* SYSTEMS DROPDOWN TRIGGER (Desktop Hover Mode) */}
              {isSystemsDropdownVisible && (
                <div 
                  className="relative py-4"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="px-4 py-2 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                    Systems
                    <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={12} className="text-zinc-500" />
                    </motion.span>
                  </button>

                  {/* Dropdown Menu Container */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0a0f24] border border-white/10 rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-lg"
                      >
                        <div className="flex flex-col gap-1">
                          {visibleDropdownLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors group text-left"
                            >
                              <div className="mt-0.5 p-1.5 rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors">
                                {subLink.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[11px] font-black tracking-wide text-zinc-200 group-hover:text-white transition-colors">
                                  {subLink.name}
                                </span>
                                <span className="text-[9px] font-medium text-zinc-500 mt-0.5">
                                  {subLink.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {visibleSecondaryLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white p-2 rounded-xl active:bg-white/5 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden w-full bg-[#040814] border-t border-white/10 shadow-2xl overflow-hidden rounded-b-3xl"
            >
              <div className="flex flex-col p-6 space-y-3 max-h-[80vh] overflow-y-auto">
                {visibleNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-[11px] font-black text-zinc-400 hover:text-blue-500 uppercase tracking-[0.15em] py-2.5 border-b border-white/[0.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* SYSTEMS ACCORDION TOGGLE (Mobile Dynamic Optimization) */}
                {isSystemsDropdownVisible && (
                  <div className="flex flex-col border-b border-white/[0.02] py-1">
                    <button 
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="w-full flex justify-between items-center text-[11px] font-black text-zinc-400 uppercase tracking-[0.15em] py-2.5 text-left"
                    >
                      <span>Systems</span>
                      <motion.span animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}>
                        <ChevronDown size={14} className="text-zinc-500" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isMobileDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 flex flex-col gap-1 bg-white/[0.01] rounded-xl overflow-hidden"
                        >
                          {visibleDropdownLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              className="flex items-center gap-3 py-3 text-[11px] font-bold text-zinc-300 hover:text-white uppercase tracking-wider"
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileDropdownOpen(false);
                              }}
                            >
                              <div className="p-1 rounded bg-white/5">{subLink.icon}</div>
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {visibleSecondaryLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-[11px] font-black text-zinc-400 hover:text-blue-500 uppercase tracking-[0.15em] py-2.5 border-b border-white/[0.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Hide the Call to Action button only if user is already on the contact page */}
                {location.pathname !== "/contact" && (
                  <button 
                    onClick={() => { 
                      navigate("/contact");
                      setIsOpen(false);
                    }} 
                    className="w-full mt-4 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] active:scale-[0.98] transition-transform"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Dynamic Structural Spacer */}
      <div className={`${scrolled ? 'h-0' : 'h-20'} w-full bg-[#020617] transition-all duration-500`} />
    </>
  );
};

export default Navbar;