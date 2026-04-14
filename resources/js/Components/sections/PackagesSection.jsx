import { motion } from "framer-motion";
import { Rocket, TrendingUp, Settings2, Check } from "lucide-react";

const packages = [
    {
        icon: Rocket,
        name: "BASIC",
        subtitle: "Induló online jelenlét",
        target: "Kisvállalkozásoknak, akiknek még nincs modern weboldaluk.",
        features: [
            "1–5 oldalas bemutatkozó weboldal",
            "Mobiloptimalizált design",
            "Alap tartalomkezelés (szöveg, képek)",
            "Kapcsolati űrlap",
            "Google térkép integráció",
            "Alap SEO beállítás",
            "Biztonságos üzembe helyezés (SSL, alap védelem)",
        ],
        timeline: "2–4 hét",
        price: "300 000 – 450 000 Ft",
    },
    {
        icon: TrendingUp,
        name: "ADVANCED",
        subtitle: "Növekedést támogató weboldal",
        target: "Olyan cégeknek, akik nem csak jelenlétet, hanem működési támogatást szeretnének.",
        features: [
            "Több oldalas, strukturált weboldal",
            "Adminisztrálható tartalomkezelés",
            "Jogosultság alapú admin felület",
            "Dinamikus elemek (szolgáltatáslista, referenciák)",
            "Alap analitika integráció",
            "Teljesítmény optimalizálás",
            "SEO struktúra (meta, sitemap, indexelés)",
        ],
        timeline: "4–6 hét",
        price: "600 000 – 900 000 Ft",
        highlighted: true,
    },
    {
        icon: Settings2,
        name: "CUSTOM",
        subtitle: "Üzleti rendszerrel integrált megoldás",
        target: "Cégeknek, akik belső működést is szeretnének digitalizálni.",
        features: [
            "Egyedi admin rendszer",
            "Ügyfél- vagy partnerportál",
            "Foglalási / rendelési logika",
            "Jogosultságkezelés",
            "Riport és export funkciók",
            "API integráció",
            "Workflow automatizálás",
        ],
        timeline: "Projektfüggő",
        price: "1 200 000 Ft-tól",
    },
];

export default function PackagesSection() {
    return (
        <section id="csomagok" className="py-24 px-6 section-divider">
            <div className="max-w-5xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient-gold">Csomagok</span>
                    </h2>

                    <p className="text-muted-foreground mb-12 text-lg">
                        Válaszd ki az igényeidhez legjobban illő csomagot.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg, i) => {
                        const Icon = pkg.icon;

                        return (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.15,
                                }}
                                className={`relative p-6 rounded-xl border flex flex-col ${
                                    pkg.highlighted
                                        ? "bg-card border-primary/40 shadow-lg shadow-primary/5"
                                        : "bg-card border-border hover:border-primary/20"
                                }  transition-colors`}
                            >
                                {/* BADGE */}
                                {pkg.highlighted && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                                        Népszerű
                                    </span>
                                )}

                                {/* HEADER */}
                                <div className="flex items-center gap-3 mb-2">
                                    <Icon className="w-5 h-5 text-primary" />
                                    <h3 className="text-xl font-bold">
                                        {pkg.name}
                                    </h3>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    {pkg.subtitle}
                                </p>

                                {/* TARGET */}
                                <div className="p-3 rounded-lg bg-secondary/50 mb-5">
                                    <p className="text-xs font-medium text-foreground/80">
                                        <span className="text-primary font-semibold">
                                            Kinek?{" "}
                                        </span>
                                        {pkg.target}
                                    </p>
                                </div>

                                {/* FEATURES */}
                                <ul className="space-y-2 mb-6 flex-1">
                                    {pkg.features.map((f) => (
                                        <li
                                            key={f}
                                            className="lex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* FOOTER */}
                                <div className="border-t border-border pt-4 mt-auto space-y-1">
                                    <p className="text-xs text-muted-foreground">
                                        Határidő:{" "}
                                        <span className="text-foreground font-medium">
                                            {pkg.timeline}
                                        </span>
                                    </p>

                                    <p className="text-lg font-bold text-primary">
                                        {pkg.price}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
