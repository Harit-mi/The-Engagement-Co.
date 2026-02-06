import { motion } from 'framer-motion';

export default function Marquee() {
    return (
        <div className="bg-punk-magenta py-4 overflow-hidden border-y-4 border-black rotate-2 scale-105 z-20 relative">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="font-display text-4xl uppercase text-black mx-8">
                        Events Reimagined  ///  No More Boring Parties  ///  Live Art  ///  Magic
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
