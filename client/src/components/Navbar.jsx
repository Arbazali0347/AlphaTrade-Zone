import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import tazLogo from "/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

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
    { name: 'TAZ-Youtube', href: '/youtube' },
  ];

  // Direct link configured for the Software page
  const softwareLink = { name: 'Taz-Softwares', href: '/software/autosignal-x' };

  const secondaryLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // Filter out the active routes
  const visibleNavLinks = navLinks.filter(link => location.pathname !== link.href);
  const isSoftwareVisible = location.pathname !== softwareLink.href;
  const visibleSecondaryLinks = secondaryLinks.filter(link => location.pathname !== link.href);

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

              {/* TAZ SOFTWARE DIRECT LINK (No dropdown, no hover, pure click) */}
              {isSoftwareVisible && (
                <Link
                  to={softwareLink.href}
                  className="px-4 py-2 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  {softwareLink.name}
                </Link>
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

                {/* TAZ SOFTWARE DIRECT LINK FOR MOBILE */}
                {isSoftwareVisible && (
                  <Link
                    to={softwareLink.href}
                    className="text-[11px] font-black text-zinc-400 hover:text-blue-500 uppercase tracking-[0.15em] py-2.5 border-b border-white/[0.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    {softwareLink.name}
                  </Link>
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