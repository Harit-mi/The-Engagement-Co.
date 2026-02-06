import { motion } from 'framer-motion';

const services = [
    { title: "Magic & Illusion", desc: "Close-up magic that breaks the ice.", icon: "✨", tag: "INTERACTIVE" },
    { title: "Live Art Stations", desc: "Custom caricatures and live painting.", icon: "🎨", tag: "CREATIVE" },
    { title: "Game Shows", desc: "High-energy quizzes and contests.", icon: "🎤", tag: "ENGAGEMENT" },
];

export default function Services() {
    return (
        <section id="services" className="bg-punk-paper py-32 relative text-punk-black clip-path-tear-top">
            <div className="absolute top-0 w-full h-8 bg-punk-paper -mt-8 clip-path-tear rot-180"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="font-display text-6xl uppercase tracking-tighter mb-4">
                        Curated <span className="bg-punk-magenta text-white px-2">Chaos</span>
                    </h2>
                    <p className="font-body text-xl max-w-2xl border-l-4 border-punk-black pl-6">
                        We don't do boring. Select your flavor of engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            className="bg-white border-4 border-punk-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,0,255,1)] transition-all cursor-pointer group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-4xl">{s.icon}</span>
                                <span className="bg-punk-cyan text-black text-xs font-bold px-2 py-1 border border-black uppercase rotate-3 group-hover:-rotate-2 transition-transform">
                                    {s.tag}
                                </span>
                            </div>
                            <h3 className="font-display text-3xl uppercase mb-4">{s.title}</h3>
                            <p className="font-body text-lg opacity-80">{s.desc}</p>

                            <div className="mt-8 flex justify-end">
                                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
