import { Link } from "@inertiajs/react";

const Footer = () => {
  const scrollTo = (id) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 */}
          <div>
            <p className="font-bold text-lg text-foreground mb-3">
              KKdev<span className="text-primary">.hu</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Egyedi webes rendszerek fejlesztése KKV-k és szolgáltató vállalkozások számára.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Navigáció
            </p>
            <ul className="space-y-2">
              {[
                { label: "Szolgáltatások", id: "szolgaltatasok" },
                { label: "Projektek", id: "projektek" },
                { label: "Kapcsolat", id: "kapcsolat" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Jogi információk
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/adatkezeles"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adatkezelés
                </Link>
              </li>

              <li>
                <Link
                  href="/cookie"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie
                </Link>
              </li>

              <li>
                <Link
                  href="/impresszum"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
