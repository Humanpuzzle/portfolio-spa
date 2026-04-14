import { motion } from "framer-motion";
import { Table2, Clock, Copy, RefreshCw } from "lucide-react";

const painPoints = [
    {
        icon: Table2,
        title: "Excelben vezetik az adatokat",
        desc: "Ügyfelek, megrendelések vagy projektek Excel táblákban vannak kezelve, ami idővel átláthatatlanná válik.",
        solution: "egyedi webes admin rendszer.",
    },
    {
        icon: Clock,
        title: "Manuális folyamatok lassítják a működést",
        desc: "Riportok, jelentések, ügyfélkezelés manuálisan történik.",
        solution: "automatizált workflow és riport generálás.",
    },
    {
        icon: Copy,
        title: "Több rendszer között kell adatokat másolni",
        desc: "CRM, webshop, számlázás vagy más rendszerek nem kommunikálnak egymással.",
        solution: "API integráció és adat szinkronizáció.",
    },
    {
        icon: RefreshCw,
        title: "Elavult vagy nehezen bővíthető rendszer",
        desc: "Régi PHP rendszerek vagy WordPress megoldások, amelyek már nehezen fejleszthetők.",
        solution: "modern architektúrára történő migráció.",
    },
];

export default function TargetSection() {
    return (
        <section id="kinek" className="py-24 px-6 section-divider">
            <div className="max-w-4xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Kinek tudok{" "}
                        <span className="text-gradient-gold">segíteni?</span>
                    </h2>

                    <p className="text-muted-foreground mb-12 text-lg">
                        Ha az alábbiak közül bármelyik ismerős, tudok segíteni.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {painPoints.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.1,
                                }}
                                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                            >
                                {/* TITLE */}
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                                    <h3 className="text-foreground font-bold">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* DESC */}
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxe">
                                    {item.desc}
                                </p>

                                {/* SOLUTION */}
                                <div className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                                    <span className="text-primary text-sm font-semibold">
                                        Megoldás:{" "}
                                    </span>
                                    <span className="text-foreground text-sm">
                                        {item.solution}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
