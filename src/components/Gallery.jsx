import { motion } from 'framer-motion';

export default function Gallery() {
    return (
        <section id="gallery" className="bg-punk-black py-32 relative overflow-hidden">
            {/* Spray Paint Effect Canvas - Placeholder for now */}

            <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
                <h2 className="font-display text-white text-6xl uppercase tracking-tighter">
                    Visual <span className="text-stroke">Evidence</span>
                </h2>
                <div className="hidden md:block bg-punk-magenta w-32 h-2"></div>
            </div>

            <div className="flex overflow-x-auto gap-4 px-6 pb-10 scrollbar-hide">
                {[1, 2, 3, 4, 5].map((item) => (
                    <motion.div
                        key={item}
                        className="min-w-[300px] md:min-w-[400px] h-[500px] bg-gray-800 border-2 border-white/20 relative grayscale hover:grayscale-0 transition-all duration-500"
                        whileHover={{ scale: 0.98 }}
                    >
                        {/* Placeholder Images */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-6 left-6">
                            <span className="text-punk-cyan text-xs font-bold uppercase tracking-widest block mb-2">Event Type 0{item}</span>
                            <h3 className="text-white font-display text-3xl uppercase">Corporate<br />Bash</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
