import { SectionHeader } from "@/components/SectionHeader";
import { DiagramViewer } from "@/components/DiagramViewer";
import { ROADMAP_PHASES, IMAGES } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export function RoadmapSection() {
  return (
    <section id="yolharitasi" className="py-32 md:py-40 lg:pl-28">
      {/* Full-width image band */}
      <div className="relative h-64 md:h-80 mb-20 overflow-hidden">
        <img
          src={IMAGES.roadmap}
          alt="Yol Haritası"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container max-w-5xl">
        <SectionHeader
          number="05"
          title="Yol Haritası"
          subtitle="14 Haftalık Geliştirme Planı"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 md:space-y-16">
            {ROADMAP_PHASES.map((phase, i) => (
              <PhaseCard key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>

        {/* Gantt Chart */}
        <div className="mt-20">
          <h3
            className="text-xl md:text-2xl font-light text-foreground mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Proje Zaman Çizelgesi
          </h3>
          <DiagramViewer
            src={IMAGES.gantt}
            alt="Gantt Zaman Çizelgesi"
            caption="14 haftalık detaylı proje takvimi"
          />
        </div>
      </div>
    </section>
  );
}

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof ROADMAP_PHASES)[number];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-12 md:pl-16"
    >
      {/* Dot on the line */}
      <div
        className={`absolute left-[12px] md:left-[20px] top-1 w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
          index === 0
            ? "bg-amber border-amber shadow-[0_0_8px_oklch(0.78_0.12_75/0.4)]"
            : "bg-background border-border"
        }`}
      />

      {/* Phase header */}
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="text-sm text-amber/60 font-medium tracking-wider uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {phase.phase}
        </span>
        <span className="text-xs text-muted-foreground/50">
          {phase.weeks}
        </span>
      </div>

      <h4
        className="text-xl md:text-2xl font-light text-foreground tracking-tight mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {phase.title}
      </h4>

      {/* Tasks */}
      <div className="space-y-2">
        {phase.tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {task}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
