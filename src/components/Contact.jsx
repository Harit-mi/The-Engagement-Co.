export default function Contact() {
    return (
        <section id="contact" className="bg-punk-paper py-32 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="font-display text-punk-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-[0.9]">
                    Let's Make Some<br />
                    <span className="text-punk-magenta">Noise</span>
                </h2>

                <p className="text-xl mb-12 max-w-xl mx-auto">
                    Ready to turn your gathering into an experience? Drop us a line.
                </p>

                <form className="bg-white border-4 border-punk-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#000000] text-left max-w-2xl mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="space-y-6">
                        <div>
                            <label className="block font-bold uppercase text-xs tracking-widest mb-2">Who are you?</label>
                            <input type="text" placeholder="NAME / COMPANY" className="w-full bg-gray-100 border-2 border-transparent focus:border-punk-cyan p-4 font-bold outline-none" />
                        </div>
                        <div>
                            <label className="block font-bold uppercase text-xs tracking-widest mb-2">How can we reach you?</label>
                            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-gray-100 border-2 border-transparent focus:border-punk-cyan p-4 font-bold outline-none" />
                        </div>
                        <div>
                            <label className="block font-bold uppercase text-xs tracking-widest mb-2">The Vibe?</label>
                            <textarea rows="4" placeholder="TELL US ABOUT THE EVENT" className="w-full bg-gray-100 border-2 border-transparent focus:border-punk-cyan p-4 font-bold outline-none"></textarea>
                        </div>
                        <button className="w-full bg-punk-black text-white font-display text-2xl uppercase py-4 hover:bg-punk-magenta transition-colors">
                            Send Request
                        </button>
                    </div>
                </form>

                {/* Footer removed and moved to separate component */}
            </div>
        </section>
    );
}
