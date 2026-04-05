import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-number text-6xl md:text-8xl lg:text-9xl font-light block mb-4">
          {number}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg md:text-xl text-muted-foreground font-body italic">
            {subtitle}
          </p>
        )}
        <div className="mt-8 w-16 h-px bg-amber" />
      </motion.div>
    </div>
  );
}
