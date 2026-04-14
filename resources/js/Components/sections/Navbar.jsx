import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Szolgáltatások", target: "szolgaltatasok" },
    { label: "Csomagok", target: "csomagok" },
    { label: "Projektek", target: "projektek" },
    { label: "Rólam", target: "rolam" },
    { label: "Kapcsolat", target: "kapcsolat" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);

        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled || mobileOpen
                    ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* LOGO */}
                <button
                    onClick={() => scrollTo("hero")}
                    className="font-bold text-lg text-foreground hover:text-primary transition-colors"
                >
                    KKdev<span className="text-primary">.hu</span>
                </button>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => scrollTo(item.target)}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
                    >
                        <div className="flex flex-col px-6 py-4 gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.target}
                                    onClick={() => scrollTo(item.target)}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
