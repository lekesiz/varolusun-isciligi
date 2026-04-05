import { SectionHeader } from "@/components/SectionHeader";
import { VALUE_PROPOSITIONS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Shield, WifiOff, Layers } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  "wifi-off": <WifiOff className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
};

export function VisionSection() {
  return (
    <section id="vizyon" className="py-32 md:py-40 lg:pl-28">
      <div className="container max-w-5xl">
        <SectionHeader
          number="01"
          title="Proje Vizyonu"
          subtitle="Stratejik Konumlandırma"
        />

        {/* Problem Statement */}
        <div className="mb-20">
          <ProblemBlock />
        </div>

        {/* Value Propositions */}
        <div className="grid gap-8 md:gap-12">
          {VALUE_PROPOSITIONS.map((prop, i) => (
            <ValueCard key={i} {...prop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemBlock() {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="border-l-2 border-amber/30 pl-6 md:pl-8"
    >
      <h3
        className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Problemin Tanımı
      </h3>
      <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
        Modern kariyer planlaması bireyin kimliğinden ziyade piyasa koşullarına, statü arzularına
        ve finansal güvencelere göre kurgulanmaktadır. Bu durum, insanın kendi içsel tasarımına
        zıt bir dışsal düzende var olmaya çalışmasına ve sonuç olarak tükenmişlik sendromu,
        kronik anlamsızlık ve kendi emeğine yabancılaşmasına yol açmaktadır.
      </p>
      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
        Mevcut dijital kariyer araçları genellikle tek boyutlu psikometrik testler sunmakta
        ve kullanıcının çocukluk anıları, varoluşsal dertleri, sosyal aynalamaları ve gönüllü
        çile kapasitesi gibi derin katmanları analiz etmemektedir.
      </p>
    </motion.div>
  );
}

function ValueCard({
  title,
  subtitle,
  description,
  icon,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-6 md:p-8 border border-border hover:border-amber/20 transition-colors duration-700 bg-card/50"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-amber/60 group-hover:text-amber transition-colors duration-500">
          {iconMap[icon]}
        </div>
        <div>
          <h3
            className="text-lg md:text-xl font-medium text-foreground mb-1 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <p
            className="text-sm text-amber/60 mb-3 tracking-wider uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {subtitle}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
