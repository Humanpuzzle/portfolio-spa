import { motion } from "framer-motion";

const techItems = [
    "Laravel",
    "React + Inertia",
    "PHP",
    "MySQL",
    "REST API",
    "WordPress",
    "Git",
    "Linux szerverek",
];

export default function TechStackSection() {
    return (
        <section id="stack" className="py-24 px-6 section-divider">
            <div className="max-w-4xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Technológiai{" "}
                        <span className="text-gradient-gold">stack</span>
                    </h2>
                </motion.div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3">
                    {techItems.map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.05,
                            }}
                            className="px-5 py-3 rounded-lg bg-secondary/50 border border-border text-sm text-foreground font-medium"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
