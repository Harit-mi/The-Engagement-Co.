import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-punk-black pt-20">
            {/* Grain & Grid Background */}
            <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block bg-punk-cyan text-black px-4 py-1 font-bold uppercase tracking-widest text-xs mb-6 -rotate-2">
                        Est. 2026 // Events Reimagined
                    </span>

                    <h1 className="font-display text-7xl md:text-9xl uppercase tracking-tighter leading-[0.9] mb-8 text-white mix-blend-difference">
                        Turning<br />
                        <span className="text-stroke">Gatherings</span><br />
                        Into <span className="text-punk-magenta">Experiences</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg md:text-xl text-white/70 font-light mb-12">
                        We design interactive experiences for corporate events, weddings, and private celebrations that refuse to be boring.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a href="#contact" className="bg-white text-black px-10 py-4 font-display text-2xl uppercase tracking-wide hover:bg-punk-cyan hover:-translate-y-1 transition-all border-2 border-white">
                            Start Planning
                        </a>
                        <a href="#packages" className="text-white px-10 py-4 font-display text-2xl uppercase tracking-wide border-2 border-white/30 hover:border-punk-magenta hover:text-punk-magenta transition-all">
                            View Packages
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Torn Paper Divider */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-punk-paper clip-path-tear z-20"></div>
        </section>
    );
}
