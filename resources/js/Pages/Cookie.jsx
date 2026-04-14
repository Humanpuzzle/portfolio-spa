import { Link, Head } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";


const Cookie = () => {
  return (
    <>
        <Head title="Cookie tájékoztató" />
        <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-6 py-20">
            <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
            <ArrowLeft className="w-4 h-4" />
            Vissza a főoldalra
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient-gold">Cookie tájékoztató</span>
            </h1>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Mi az a süti (cookie)?</h2>
                <p>
                A sütik kis szöveges fájlok, amelyeket a weboldal a böngésződben tárol. Céljuk, hogy a weboldal megjegyezze a beállításaidat, és jobb felhasználói élményt nyújtson. A sütik nem tartalmaznak személyes adatokat, és nem képesek vírusokat terjeszteni.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Milyen sütiket használunk?</h2>
                <p className="mb-3">A weboldalon az alábbi típusú sütiket alkalmazzuk:</p>
                <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong className="text-foreground">Szükséges sütik</strong> – Az oldal alapvető működéséhez szükségesek (pl. munkamenet-kezelés). Ezek nélkül a weboldal nem tud megfelelően működni.
                </li>
                <li>
                    <strong className="text-foreground">Funkcionális sütik</strong> – A felhasználói élmény javítását szolgálják (pl. nyelvi beállítások, űrlapadatok megjegyzése).
                </li>
                <li>
                    <strong className="text-foreground">Analitikai sütik</strong> – A weboldal látogatottságának mérésére és a felhasználói viselkedés elemzésére szolgálnak.
                </li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Analitika (Google Analytics)</h2>
                <p className="mb-3">
                Weboldalunkon a Google Analytics szolgáltatást használjuk a látogatottsági adatok elemzésére. A Google Analytics sütiket helyez el a böngésződben, amelyek anonimizált adatokat gyűjtenek az alábbi területekről:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Látogatások száma és időtartama</li>
                <li>Megtekintett oldalak</li>
                <li>Földrajzi elhelyezkedés (ország/város szinten)</li>
                <li>Használt eszköz és böngésző típusa</li>
                </ul>
                <p className="mt-3">
                Az adatgyűjtés anonimizáltan történik, és nem alkalmas az egyéni felhasználó azonosítására. További információ:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    Google Adatvédelmi irányelvek
                </a>
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Hogyan lehet kikapcsolni a sütiket?</h2>
                <p className="mb-3">
                A legtöbb böngészőben lehetőséged van a sütik kezelésére és törlésére. Az alábbi linkeken találsz útmutatót a legnépszerűbb böngészőkhöz:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a>
                </li>
                <li>
                    <a href="https://support.mozilla.org/hu/kb/sutik-engedelyezese-es-tiltasa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a>
                </li>
                <li>
                    <a href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a>
                </li>
                <li>
                    <a href="https://support.microsoft.com/hu-hu/microsoft-edge/cookie-k-t%C3%B6rl%C3%A9se-a-microsoft-edge-ben-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a>
                </li>
                </ul>
                <p className="mt-3">
                Felhívjuk a figyelmet, hogy a sütik letiltása esetén a weboldal bizonyos funkciói korlátozottan vagy egyáltalán nem működhetnek.
                </p>
            </section>
            </div>
        </div>
        <Footer />
        </div>
    </>
  );
};

export default Cookie;
