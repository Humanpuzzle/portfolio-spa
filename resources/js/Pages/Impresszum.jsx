import { Link, Head } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";

const data_controller = {
  name: "Trader-Soft Hungary Kft",
  address: "2314 Szigetszentmiklós-Lakihegy, Korbuly u. 2.",
  tax_number: "24281496-1-43",
  email: "krisztian.krassalkovics@gmail.com",
};

const Impresszum = () => {
  return (
    <>
        <Head title="Impresszum" />
        <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-6 py-20">

            {/* BACK */}
            <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
            <ArrowLeft className="w-4 h-4" />
            Vissza a főoldalra
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient-gold">Impresszum</span>
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="p-6 rounded-xl bg-card border border-border space-y-3">

                <div>
                <span className="text-sm text-muted-foreground">Név</span>
                <p className="text-foreground font-medium">
                    {data_controller.name}
                </p>
                </div>

                <div>
                <span className="text-sm text-muted-foreground">Cím</span>
                <p className="text-foreground font-medium">
                    {data_controller.address}
                </p>
                </div>

                <div>
                <span className="text-sm text-muted-foreground">Adószám</span>
                <p className="text-foreground font-medium">
                    {data_controller.tax_number}
                </p>
                </div>

                <div>
                <span className="text-sm text-muted-foreground">Email</span>
                <p className="text-foreground font-medium">
                    {data_controller.email}
                </p>
                </div>

            </div>
            </div>

        </div>

        <Footer />
        </div>
    </>
  );
};

export default Impresszum;
