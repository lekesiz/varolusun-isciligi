import { SectionHeader } from "@/components/SectionHeader";
import { MODULES, IMAGES } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { useState } from "react";

export function ModulesSection() {
  return (
    <section id="moduller" className="py-32 md:py-40 lg:pl-28">
      {/* Full-width image band */}
      <div className="relative h-64 md:h-80 mb-20 overflow-hidden">
        <img
          src={IMAGES.modules}
          alt="Modüller"
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container max-w-5xl">
        <SectionHeader
          number="03"
          title="Temel Modüller"
          subtitle="Fonksiyonel Gereksinimler"
        />

        <div className="space-y-16 md:space-y-24">
          {MODULES.map((mod, i) => (
            <ModuleCard key={i} module={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({
  module,
  index,
}: {
  module: (typeof MODULES)[number];
  index: number;
}) {
  const { ref, isInView } = useInView();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* Module number and title */}
      <div className="flex items-start gap-6 mb-6">
        <span
          className="text-4xl md:text-5xl font-light text-amber/20 flex-shrink-0 leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {module.number}
        </span>
        <div>
          <h3
            className="text-2xl md:text-3xl font-light text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {module.title}
          </h3>
          <p className="text-sm text-amber/60 mt-1 tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>
            {module.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="ml-0 md:ml-[4.5rem]">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
          {module.description}
        </p>

        {/* Quote if exists */}
        {"quote" in module && module.quote && (
          <blockquote className="border-l-2 border-amber/30 pl-5 py-2 mb-6">
            <p className="text-sm md:text-base text-foreground/70 italic leading-relaxed">
              "{module.quote}"
            </p>
          </blockquote>
        )}

        {/* Categories if exists */}
        {"categories" in module && module.categories && (
          <div className="flex flex-wrap gap-2 mb-6">
            {module.categories.map((cat, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs tracking-wider uppercase border border-border text-muted-foreground hover:border-amber/20 hover:text-amber/70 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Questions if exists */}
        {"questions" in module && module.questions && (
          <div className="space-y-3 mb-6">
            {module.questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-amber/40 mt-2.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{q}</p>
              </div>
            ))}
          </div>
        )}

        {/* Stages if exists */}
        {"stages" in module && module.stages && (
          <div className="space-y-4 mb-6">
            {module.stages.map((stage, i) => (
              <div
                key={i}
                className="p-4 border border-border/50 bg-card/20 hover:border-amber/10 transition-colors duration-500"
              >
                <h4
                  className="text-sm font-medium text-foreground mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stage.name}
                </h4>
                <p className="text-sm text-muted-foreground">{stage.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Dimensions if exists */}
        {"dimensions" in module && module.dimensions && (
          <div className="flex flex-wrap gap-3">
            {module.dimensions.map((dim, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-amber/[0.04] border border-amber/10 text-sm text-amber/70"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {dim}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      {index < MODULES.length - 1 && (
        <div className="mt-16 md:mt-24 w-full h-px bg-border/50" />
      )}
    </motion.div>
  );
}
