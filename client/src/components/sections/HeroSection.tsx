import { IMAGES } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-amber text-sm md:text-base tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A'dan Z'ye Proje Organizasyon Raporu
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Varoluşun
          <br />
          <span className="text-amber">İşçiliği</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic"
          style={{ fontFamily: "var(--font-body)" }}
        >
          İnsanın Fıtrat, İstidat ve Şâkile Ekseninde
          <br className="hidden md:block" />
          Mesleki Kodlarının Ontolojik Analizi
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6"
        >
          <p
            className="text-sm text-muted-foreground/60 tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mikail Lekesiz
          </p>
        </motion.div>

        {/* Quran verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-amber/10 max-w-lg mx-auto"
        >
          <p
            className="text-2xl md:text-3xl text-amber/70 leading-relaxed mb-3"
            style={{ fontFamily: "var(--font-arabic)" }}
            dir="rtl"
          >
            قُلْ كُلٌّ يَعْمَلُ عَلَىٰ شَاكِلَتِهِ
          </p>
          <p className="text-sm text-muted-foreground/50 italic">
            "Herkes kendi şâkilesine göre iş yapar" — İsrâ 17:84
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
