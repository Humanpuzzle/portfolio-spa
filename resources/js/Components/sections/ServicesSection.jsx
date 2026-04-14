import { motion } from "framer-motion";
import { Monitor, Workflow, Plug, RefreshCw, Globe, Check } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Egyedi webes rendszerek fejlesztése",
        items: [
            "Admin rendszerek",
            "Ügyfélkezelő rendszerek",
            "Megrendelés nyilvántartás",
            "Belső vállalati portálok",
        ],
    },
    {
        icon: Workflow,
        title: "Üzleti folyamat automatizálás",
        items: [
            "Workflow alapú működés",
            "Automatikus riportok",
            "Értesítési rendszerek",
            "Adatfeldolgozás automatizálása",
        ],
    },
    {
        icon: Plug,
        title: "API integrációk",
        items: [
            "Külső rendszerek összekötése",
            "REST API fejlesztés",
            "Adat szinkronizáció",
            "Harmadik fél szolgáltatások integrálása",
        ],
    },
    {
        icon: RefreshCw,
        title: "Legacy rendszerek modernizálása",
        items: [
            "PHP 7 → PHP 8 migráció",
            "Régi rendszerek refaktorálása",
            "Teljesítmény optimalizálás",
            "Architektúra újratervezése",
        ],
    },
    {
        icon: Globe,
        title: "WordPress fejlesztés",
        items: [
            "Plugin fejlesztés",
            "Egyedi funkcionalitás",
            "API integrációk",
            "Hibakeresés és optimalizálás",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section id="szolgaltatasok" className="py-24 px-6 section-divider">
            <div className="max-w-5xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient-gold">
                            Szolgáltatások
                        </span>
                    </h2>

                    <p className="text-muted-foreground mb-12 text-lg">
                        Teljes körű webfejlesztési szolgáltatások vállalkozásoknak.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                }}
                                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                            >
                                {/* ICON */}
                                <Icon className="w-6 h-6 text-primary mb-4" />

                                {/* TITLE */}
                                <h3 className="text-lg font-bold mb-4">
                                    {service.title}
                                </h3>

                                {/* LIST */}
                                <ul className="space-y-2">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 text-sm text-muted-foreground"
                                        >
                                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
