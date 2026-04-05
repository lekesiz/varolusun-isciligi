import { NAV_ITEMS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop navigation — left side vertical line */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          
          {NAV_ITEMS.map(({ id, label, number }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative flex items-center gap-3 py-3 group"
                aria-label={`${number} ${label} bölümüne git`}
              >
                {/* Dot */}
                <div
                  className={`relative z-10 w-2 h-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-amber scale-150 shadow-[0_0_8px_oklch(0.78_0.12_75/0.5)]"
                      : "bg-muted-foreground/30 group-hover:bg-amber/50"
                  }`}
                />
                {/* Label */}
                <span
                  className={`text-xs tracking-widest uppercase transition-all duration-500 whitespace-nowrap ${
                    isActive
                      ? "text-amber opacity-100 translate-x-0"
                      : "text-muted-foreground/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {number}. {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile navigation */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-card/80 backdrop-blur-sm border border-border rounded-sm"
        aria-label="Menüyü aç/kapat"
      >
        {mobileOpen ? <X className="w-5 h-5 text-amber" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex items-center justify-center"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map(({ id, label, number }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="flex items-center gap-4 group"
                >
                  <span className="section-number text-2xl">{number}</span>
                  <span className="text-xl text-foreground tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
