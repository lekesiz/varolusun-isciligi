import { SectionHeader } from "@/components/SectionHeader";
import { DiagramViewer } from "@/components/DiagramViewer";
import { TEAM_MEMBERS, IMAGES } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export function TeamSection() {
  return (
    <section id="ekip" className="py-32 md:py-40 lg:pl-28">
      {/* Full-width image band */}
      <div className="relative h-64 md:h-80 mb-20 overflow-hidden">
        <img
          src={IMAGES.team}
          alt="Ekip"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container max-w-5xl">
        <SectionHeader
          number="04"
          title="Ekip Yapısı"
          subtitle="7 Kişilik Uzman Kadro"
        />

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* Organization Chart */}
        <div>
          <h3
            className="text-xl md:text-2xl font-light text-foreground mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ekip Organizasyon Şeması
          </h3>
          <DiagramViewer
            src={IMAGES.ekipOrganizasyon}
            alt="Ekip Organizasyon Şeması"
            caption="Roller ve raporlama yapısı"
          />
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof TEAM_MEMBERS)[number];
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
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group p-6 border border-border bg-card/30 hover:border-amber/15 transition-all duration-500"
    >
      {/* Abbreviation badge */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-10 h-10 flex items-center justify-center text-sm font-medium text-amber/70 border border-amber/20 bg-amber/[0.04]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {member.abbr}
        </span>
        <h4
          className="text-base font-medium text-foreground tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {member.role}
        </h4>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {member.responsibility}
      </p>

      <div className="pt-3 border-t border-border/50">
        <p className="text-xs text-muted-foreground/60 tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>
          Yetkinlikler
        </p>
        <p className="text-xs text-muted-foreground mt-1">{member.skills}</p>
      </div>
    </motion.div>
  );
}
