import { motion } from "framer-motion";
import { Building2, Search, GraduationCap } from "lucide-react";

const projects = [
    {
        icon: Building2,
        title: "Vállalati megrendeléskezelő rendszer",
        desc: "Nagyvállalati belső rendszer több osztály együttműködésére.",
        details: [
            "LDAP alapú autentikáció",
            "Több osztályt összekötő workflow",
            "Verzió összehasonlító kereső",
            "Excel export és riport",
        ],
    },
    {
        icon: Search,
        title: "Jira integrációs kereső rendszer",
        desc: "Jira projektek közötti összefüggések gyors keresése.",
        details: [
            "REST API integráció",
            "Parent-child projekt logika",
            "Dátumalapú szűrés",
            "Riport export",
        ],
    },
    {
        icon: GraduationCap,
        title: "Képzéskezelő rendszer",
        desc: "Laravel + React alapú képzés adminisztráció.",
        details: [
            "Jelentkezési rendszer",
            "Admin panel",
            "Dinamikus szűrés",
            "Export funkciók",
            "Jogosultság kezelés",
        ],
    },
];

export default function ProjectsSection() {
    return (
        <section id="projektek" className="py-24 px-6 section-divider">
            <div className="max-w-5xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Kiemelt{" "}
                        <span className="text-gradient-gold">projektek</span>
                    </h2>

                    <p className="text-muted-foreground mb-12 text-lg">
                        Valós enterprise projektek, valós üzleti eredményekkel.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, i) => {
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.15,
                                }}
                                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors flex flex-col"
                            >
                                {/* HEADER */}
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                                    <h3 className="text-lg font-bold leading-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                {project.client && (
                                    <span className="text-primary text-sm font-mono mb-2">{project.client}</span>
                                )}

                                {/* DESC */}
                                <p className="text-gray-600 text-sm mb-4">
                                    {project.desc}
                                </p>

                                {/* DETAILS */}
                                <ul className="space-y-2 mt-auto">
                                    {project.details.map((detail) => (
                                        <li
                                            key={detail}
                                            className="text-muted-foreground text-sm flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                            {detail}
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
