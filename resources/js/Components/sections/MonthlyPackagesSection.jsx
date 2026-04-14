import { motion } from "framer-motion";
import {
    Shield,
    TrendingUp,
    Zap,
    MessageSquare,
    ListChecks,
    Rocket,
    Check,
} from "lucide-react";

import Button from "@/Components/ui/Button";

const monthlyCards = [
    {
        icon: Shield,
        title: "SUPPORT",
        subtitle: "Alap üzemeltetés és karbantartás",
        features: [
            "Hibajavítások",
            "Biztonsági frissítések",
            "Rendszer monitoring",
            "Automatikus mentések (backup)",
            "Kisebb módosítások",
        ],
        extras: ["Reakcióidő: 1–3 munkanap"],
        price: "30 000 – 80 000 Ft / hó",
    },
    {
        icon: TrendingUp,
        title: "GROWTH",
        subtitle: "Folyamatos fejlesztés és bővítés",
        badge: "Népszerű",
        features: [
            "Havi 10–20 óra fejlesztés",
            "Új funkciók fejlesztése",
            "Admin felület bővítése",
            "UX optimalizálás",
            "Riportok és dashboardok",
        ],
        extras: ["Reakcióidő: 1 munkanap", "Prioritásos kezelés"],
        price: "120 000 – 300 000 Ft / hó",
        highlighted: true,
    },
    {
        icon: Zap,
        title: "BUSINESS",
        subtitle: "Automatizálás és rendszerintegráció",
        features: [
            "Workflow automatizálás",
            "API integrációk",
            "Adat szinkronizáció",
            "Email automatizmusok",
            "Üzleti folyamatok digitalizálása",
        ],
        extras: ["Kiemelt támogatás", "Folyamatos rendszeroptimalizálás"],
        price: "300 000 Ft+ / hó",
    },
];

const steps = [
    {
        icon: MessageSquare,
        title: "Konzultáció",
        text: "Átbeszéljük a jelenlegi működésed és a problémákat.",
    },
    {
        icon: ListChecks,
        title: "Prioritások",
        text: "Meghatározzuk, mi hozza a legnagyobb üzleti értéket.",
    },
    {
        icon: Rocket,
        title: "Folyamatos fejlesztés",
        text: "Havi szinten fejlesztjük és optimalizáljuk a rendszert.",
    },
];

export default function MonthlyPackagesSection() {
    const scrollToContact = () => {
        const el = document.getElementById("kapcsolat");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* INTRO */}
            <section className="py-16 px-6">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        A projekt átadása csak az{" "}
                        <span className="text-gradient-gold">első lépés</span>
                    </h2>

                    <p className="text-foreground/90 text-lg leading-relaxed mb-4">
                        A legtöbb rendszer folyamatos fejlesztést és optimalizálást igényel.
                        A valódi üzleti érték nem az indulásnál, hanem a folyamatos működés és fejlesztés során keletkezik.
                    </p>

                    <p className="text-muted-foreground">
                        Ezért havi együttműködésben is dolgozom, ahol a rendszered nem csak működik, hanem folyamatosan fejlődik.
                    </p>
                </div>
            </section>

            {/* PACKAGES */}
            <section id="havi-csomagok" className="py-24 px-6 section-divider">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Folyamatos fejlesztés és{" "}
                        <span className="text-gradient-gold">
                            rendszerüzemeltetés
                        </span>
                    </h2>

                    <p className="text-gray-600 mb-12 text-lg">
                        Havi díjas konstrukcióban biztosítom a rendszered stabil működését és folyamatos fejlődését.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {monthlyCards.map((card, i) => {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.15,
                                    }}
                                    className={`relative p-6 rounded-xl border flex flex-col ${
                                        card.highlighted
                                            ? "bg-card border-primary/40 shadow-lg shadow-primary/5"
                                            : "bg-card border-border hover:border-primary/20"
                                    } transition-colors`}
                                >
                                    {card.badge && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                                            {card.badge}
                                        </span>
                                    )}

                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon className="w-5 h-5 text-primary" />
                                        <h3 className="text-xl font-bold">
                                            {card.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4">
                                        {card.subtitle}
                                    </p>

                                    <ul className="space-y-2 mb-6 flex-1">
                                        {card.features.map((f) => (
                                            <li
                                                key={f}
                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                            >
                                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="border-t border-border pt-4 mt-auto space-y-1">
                                        {card.extras.map((e) => (
                                            <p
                                                key={e}
                                                className="text-xs text-muted-foreground"
                                            >
                                                {e}
                                            </p>
                                        ))}

                                        <p className="text-lg font-bold text-primary">
                                            {card.price}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto"
                    >
                        A havi csomagok fejlesztési órakeretet tartalmaznak.
                        A fel nem használt órák nem halmozódnak, de a feladatok priorizálása rugalmas.
                    </motion.p>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 px-6 section-divider">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Hogyan <span className="text-gradient-gold">működik?</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                            className="text-center"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                            <step.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        Beszéljük meg, melyik csomag <span className="text-gradient-gold">illik hozzád</span>
                    </h2>
                    <Button size="lg" className="text-lg font-semibold bg-primary text-primary-foreground px-10 py-6" onClick={scrollToContact}>
                        Ingyenes konzultáció
                    </Button>
                </motion.div>
            </section>
        </>
    );
}
