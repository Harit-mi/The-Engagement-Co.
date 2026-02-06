export default function Footer() {
    return (
        <footer className="bg-punk-black text-white py-20 relative overflow-hidden border-t-8 border-punk-magenta">
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grain"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-end">

                {/* Brand Area */}
                <div className="mb-12 md:mb-0">
                    <h2 className="font-display text-8xl md:text-[10rem] leading-none uppercase text-transparent text-stroke opacity-50 hover:opacity-100 transition-opacity select-none cursor-default">
                        The<br />End.
                    </h2>
                </div>

                {/* Links & Info */}
                <div className="text-right space-y-8">
                    <div className="flex flex-col gap-2 font-display text-2xl uppercase tracking-widest">
                        <a href="#" className="hover:text-punk-cyan hover:translate-x-[-10px] transition-all">Instagram</a>
                        <a href="#" className="hover:text-punk-magenta hover:translate-x-[-10px] transition-all">LinkedIn</a>
                        <a href="#" className="hover:text-punk-cyan hover:translate-x-[-10px] transition-all">Email Us</a>
                    </div>

                    <div className="font-mono text-xs text-white/40 max-w-xs ml-auto">
                        <p>
                            © 2026 THE ENGAGEMENT CO.<br />
                            ALL RIGHTS RESERVED. NO BORING EVENTS ALLOWED.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Bar */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-punk-cyan"></div>
        </footer>
    );
}
