import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

import Button from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";
import { Textarea } from "@/Components/ui/Textarea";
import { Link } from "@inertiajs/react";

import { notify } from "@/lib/notify";

const aboutValues = [
    "Tiszta architektúra",
    "Átlátható jogosultsági rendszer",
    "Hosszú távon karbantartható megoldások",
];

export default function AboutSection() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "", // honeypot
        form_started_at: Date.now(),
        accepted: false,
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setProcessing(true);
        setErrors({});

        if (!data.accepted) {
            notify.error("Fogadd el az adatkezelési tájékoztatót!");
            setProcessing(false);
            return;
        }

        try {
            const res = await axios.post("/contact", data);

            notify.success(res.data.message);

            setData({
                name: "",
                email: "",
                phone: "",
                message: "",
                company: "",
                form_started_at: Date.now(),
                accepted: false,
            });
        } catch (err) {
            if (err.response?.status === 422) {
                setErrors(err.response.data.errors || {});
                notify.error("Kérlek javítsd a hibákat!");
            } else {
                notify.error(
                    err.response?.data?.message || "Hiba történt az üzenetküldés során"
                );
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            {/* RÓLAM */}
            <section id="rolam" className="py-24 px-6 section-divider">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            <span className="text-gradient-gold">Rólam</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground mb-8">
                            <p>
                                2013 óta foglalkozom webfejlesztéssel. Az elmúlt években főként vállalati belső rendszerek fejlesztésén dolgoztam.
                            </p>
                            <p>
                                A tapasztalatom az, hogy a legtöbb cég működésében a problémák nem technológiai, hanem strukturális jellegűek: Excelben vezetett adatok, manuális riportok, párhuzamos rendszerek.
                            </p>
                            <p>
                                Fejlesztőként a célom nem csupán az, hogy egy alkalmazás működjön, hanem hogy a vállalati folyamatok átlátható, automatizált rendszerben működjenek.
                            </p>
                        </div>

                        <div>
                            <p className="text-foreground font-semibold mb-3">
                                Fontos számomra:
                            </p>
                            <ul className="space-y-2">
                                {aboutValues.map((v) => (
                                    <li
                                        key={v}
                                        className="flex items-center gap-2 text-muted-foreground"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="kapcsolat" className="py-24 px-6 section-divider">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-secondary to-card border border-borde">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Beszéljük meg a{" "}
                                <span className="text-gradient-gold">
                                    projektet
                                </span>
                            </h2>

                            <p className="text-muted-foreground max-w-md mx-auto">
                                Írj, és megnézzük hogyan tudok segíteni.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="max-w-lg mx-auto space-y-4"
                        >
                            {/* NAME */}
                            <Input
                                placeholder="Név"
                                value={data.name}
                                onChange={(e) =>
                                    handleChange("name", e.target.value)
                                }
                                maxLength={100}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">
                                    {errors.name[0]}
                                </p>
                            )}

                            {/* EMAIL */}
                            <Input
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) =>
                                    handleChange("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email[0]}
                                </p>
                            )}

                            {/* PHONE */}
                            <Input
                                type="text"
                                placeholder="Telefon (opcionális)"
                                value={data.phone}
                                onChange={(e) =>
                                    handleChange("phone", e.target.value)
                                }
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">
                                    {errors.phone[0]}
                                </p>
                            )}

                            {/* HONEYPOT */}
                            <input
                                type="text"
                                className="hidden"
                                value={data.company}
                                onChange={(e) =>
                                    handleChange("company", e.target.value)
                                }
                            />

                            {/* MESSAGE */}
                            <Textarea
                                placeholder="Projekt leírása..."
                                rows={4}
                                maxLength={1000}
                                value={data.message}
                                onChange={(e) =>
                                    handleChange("message", e.target.value)
                                }
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm">
                                    {errors.message[0]}
                                </p>
                            )}

                            {/* CHECKBOX */}
                            <div className="flex items-start gap-3">
                                <input
                                    id="privacy"
                                    type="checkbox"
                                    checked={data.accepted}
                                    onChange={(e) =>
                                        handleChange(
                                            "accepted",
                                            e.target.checked
                                        )
                                    }
                                    className="mt-0.5"
                                />
                                Elfogadom az{" "}
                                <Link
                                    href="/adatkezeles"
                                    className="text-primary hover:underline"
                                >
                                    adatkezelési tájékoztatót
                                </Link>
                            </div>

                            {/* BUTTON */}
                            <Button
                                type="submit"
                                size="lg"
                                disabled={processing}
                                className="w-full inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all"
                            >
                                {processing ? "Küldés..." : "Üzenet küldése"}
                                <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
