import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experiences', href: '#services' },
        { name: 'Packages', href: '#packages' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-punk-black border-b border-white/20' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <a href="#" className="font-display text-2xl tracking-tight text-white uppercase relative group">
                    The Engagement <span className="text-punk-magenta">Co.</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-punk-cyan transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest hover:text-punk-cyan transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="bg-punk-magenta text-black px-6 py-2 font-display text-lg uppercase tracking-wide hover:bg-white hover:scale-105 transition-all skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Book Now</span>
                    </a>
                </nav>

                {/* Mobile Trigger */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-punk-black border-b border-white/20 p-6 flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl font-display uppercase tracking-wider hover:text-punk-magenta"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
