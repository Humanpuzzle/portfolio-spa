import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const highlights = [
    "Laravel + React alapú rendszerek",
    "Üzleti folyamat automatizálás",
    "API integrációk",
    "Egyedi admin rendszerek",
];

export default function HeroSection() {
    const scrollToContact = () => {
        const el = document.getElementById("kapcsolat");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden pt-16"
        >
            {/* GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative max-w-3xl mx-auto text-center">
                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Egyedi webes rendszereket fejlesztek, amelyek{" "}
                        <span className="text-gradient-gold">automatizálják</span>{" "}
                        és{" "}
                        <span className="text-gradient-gold">strukturálják</span>{" "}
                        a vállalati működést.
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        KKV-k és szolgáltató vállalkozások számára fejlesztek
                        stabil, skálázható webes rendszereket.
                    </p>
                </motion.div>

                {/* TAGS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {highlights.map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 rounded-full border border-border bg-secondary text-secondary-foreground text-sm font-medium"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all"
                    >
                        Ingyenes konzultáció
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
