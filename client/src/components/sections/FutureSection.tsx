import { SectionHeader } from "@/components/SectionHeader";
import { FUTURE_VISION } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export function FutureSection() {
  return (
    <section id="vizyon-uzun" className="py-32 md:py-40 lg:pl-28">
      <div className="container max-w-5xl">
        <SectionHeader
          number="06"
          title="Uzun Vadeli Vizyon"
          subtitle="Gelecek Perspektifi"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {FUTURE_VISION.map((item, i) => (
            <FutureCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Closing quote */}
        <ClosingQuote />
      </div>
    </section>
  );
}

function FutureCard({
  item,
  index,
}: {
  item: (typeof FUTURE_VISION)[number];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group p-6 md:p-8 border border-border bg-card/20 hover:border-amber/15 transition-all duration-500"
    >
      <div className="w-8 h-px bg-amber/30 mb-5 group-hover:w-12 transition-all duration-500" />
      <h4
        className="text-lg md:text-xl font-light text-foreground tracking-tight mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {item.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

function ClosingQuote() {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mt-24 md:mt-32 text-center max-w-2xl mx-auto"
    >
      <div className="w-16 h-px bg-amber/20 mx-auto mb-10" />
      <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-6" style={{ fontFamily: "var(--font-body)" }}>
        "Fıtrata uygun, estetik ve kusursuz bir mühendislik anlayışıyla
        yürütülecek bu proje, insanın kendi varoluşsal kodlarını keşfetmesine
        rehberlik edecektir."
      </p>
      <p className="text-sm text-muted-foreground/50 tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>
        Varoluşun İşçiliği
      </p>
    </motion.div>
  );
}
