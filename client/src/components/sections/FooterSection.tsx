import { NAV_ITEMS } from "@/lib/data";

export function FooterSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-20 border-t border-border/50 lg:pl-28">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left — Branding */}
          <div>
            <h3
              className="text-lg font-light text-foreground tracking-tight mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Varoluşun İşçiliği
            </h3>
            <p className="text-sm text-muted-foreground/60 max-w-xs">
              İnsanın Fıtrat, İstidat ve Şâkile Ekseninde Mesleki Kodlarının Ontolojik Analizi
            </p>
            <p className="text-xs text-muted-foreground/40 mt-3">
              Mikail Lekesiz — 2026
            </p>
          </div>

          {/* Right — Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map(({ id, label, number }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-muted-foreground/50 hover:text-amber transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-xs text-amber/30 mr-1">{number}</span>
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/30">
            Kaynak Makale:{" "}
            <a
              href="https://mikail.net/varolusun-isciligi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber/40 hover:text-amber/70 transition-colors duration-300 underline underline-offset-2"
            >
              mikail.net/varolusun-isciligi
            </a>
          </p>
          <p className="text-xs text-muted-foreground/30">
            A'dan Z'ye Proje Organizasyon Raporu
          </p>
        </div>
      </div>
    </footer>
  );
}
