import { motion } from 'framer-motion';

const packages = [
    { name: "Engage Basic", price: "₹45k", features: ["1Hr Duration", "1 Activity", "Host/Emcee"] },
    { name: "Signature", price: "₹1.5L", features: ["3Hr Duration", "Magic + Art", "Event Coordinator"], highlight: true },
    { name: "Premium", price: "₹2L+", features: ["Full Day", "Custom Game Show", "Photography", "Hampers"] },
];

export default function Packages() {
    return (
        <section id="packages" className="py-32 px-6 max-w-7xl mx-auto">
            <h2 className="font-display text-white text-6xl uppercase tracking-tighter mb-12 text-right">
                The <span className="text-punk-cyan">Menu</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className={`p-8 border-4 ${pkg.highlight ? 'border-punk-magenta bg-punk-magenta/10' : 'border-white/20 bg-punk-black'} relative`}
                    >
                        {pkg.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-punk-magenta text-black font-bold uppercase px-4 py-1 text-sm tracking-widest">Most Popular</span>}

                        <h3 className="font-display text-4xl text-white uppercase mb-2">{pkg.name}</h3>
                        <div className="text-punk-cyan font-bold text-2xl mb-8">{pkg.price}</div>

                        <ul className="space-y-4 mb-8 text-white/70 font-mono text-sm">
                            {pkg.features.map((f, j) => (
                                <li key={j} className="flex items-center gap-2">
                                    <span className="text-punk-magenta">{">>"}</span> {f}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-3 font-bold uppercase tracking-widest border-2 ${pkg.highlight ? 'bg-punk-magenta text-black border-punk-magenta' : 'border-white text-white hover:bg-white hover:text-black'} transition-colors`}>
                            Select
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
