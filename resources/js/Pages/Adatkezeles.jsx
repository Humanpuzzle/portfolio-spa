import { Link, Head } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";

const data_controller = {
  name: "Trader-Soft Hungary Kft",
  address: "2314 Szigetszentmiklós-Lakihegy, Korbuly u. 2.",
  tax_number: "24281496-1-43",
  email: "krisztian.krassalkovics@gmail.com",
};

const Adatkezeles = () => {
  return (
    <>
        <Head title="Adatkezelés" />
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
            <span className="text-gradient-gold">
                Adatkezelési tájékoztató
            </span>
            </h1>

            <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Adatkezelő adatai
                </h2>
                <ul className="space-y-1">
                <li><strong className="text-foreground">Név:</strong> {data_controller.name}</li>
                <li><strong className="text-foreground">Székhely:</strong> {data_controller.address}</li>
                <li><strong className="text-foreground">Adószám:</strong> {data_controller.tax_number}</li>
                <li><strong className="text-foreground">Email:</strong> {data_controller.email}</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Kezelt adatok köre
                </h2>
                <p className="mb-3">
                A weboldalon keresztül az alábbi személyes adatokat kezeljük:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Név</li>
                <li>Email cím</li>
                <li>Telefonszám</li>
                <li>Üzenet tartalma</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Adatkezelés célja
                </h2>
                <ul className="list-disc list-inside space-y-1">
                <li>Kapcsolatfelvétel biztosítása</li>
                <li>Ajánlatadás és projektek egyeztetése</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Jogalap
                </h2>
                <p>
                Az adatkezelés az érintett önkéntes hozzájárulásán alapul (GDPR 6. cikk (1) bekezdés a) pont).
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Adatkezelés időtartama
                </h2>
                <p>
                A személyes adatokat a hozzájárulás visszavonásáig, de legfeljebb{" "}
                <strong className="text-foreground">12 hónapig</strong> tároljuk.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Adattovábbítás
                </h2>
                <p className="mb-3">
                Az adatkezelő az alábbi szolgáltatók felé továbbíthat adatot:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Tárhelyszolgáltató</li>
                <li>Email szolgáltató</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Felhasználói jogok
                </h2>
                <p className="mb-3">Az érintett jogosult:</p>
                <ul className="list-disc list-inside space-y-1">
                <li>Hozzáférést kérni a személyes adataihoz</li>
                <li>Adatai helyesbítését kérni</li>
                <li>Adatai törlését kérni</li>
                <li>Az adatkezelés korlátozását kérni</li>
                <li>Tiltakozni az adatkezelés ellen</li>
                <li>Az adathordozhatósághoz való jog</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                8. Adatbiztonság
                </h2>
                <p>
                Az adatkezelő megfelelő technikai és szervezési intézkedéseket alkalmaz a személyes adatok védelme érdekében, beleértve az SSL titkosítást, a hozzáférés-szabályozást és a rendszeres biztonsági mentéseket.
                </p>
            </section>

            </div>
        </div>

        <Footer />
        </div>
    </>
  );
};

export default Adatkezeles;
