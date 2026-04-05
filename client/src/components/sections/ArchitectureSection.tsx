import { SectionHeader } from "@/components/SectionHeader";
import { DiagramViewer } from "@/components/DiagramViewer";
import { TECH_STACK, IMAGES } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export function ArchitectureSection() {
  return (
    <section id="mimari" className="py-32 md:py-40 lg:pl-28">
      {/* Full-width image band */}
      <div className="relative h-64 md:h-80 mb-20 overflow-hidden">
        <img
          src={IMAGES.architecture}
          alt="Sistem Mimarisi"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container max-w-5xl">
        <SectionHeader
          number="02"
          title="Teknolojik Altyapı"
          subtitle="Sistem Mimarisi ve Güvenlik"
        />

        {/* Tech Stack Table */}
        <TechStackTable />

        {/* System Architecture Diagram */}
        <div className="mt-20">
          <h3
            className="text-xl md:text-2xl font-light text-foreground mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sistem Mimarisi Diyagramı
          </h3>
          <DiagramViewer
            src={IMAGES.sistemMimarisi}
            alt="Sistem Mimarisi Diyagramı"
            caption="Tüm katmanlar ve aralarındaki veri akışı"
          />
        </div>

        {/* User Flow Diagram */}
        <div className="mt-16">
          <h3
            className="text-xl md:text-2xl font-light text-foreground mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Kullanıcı Akış Şeması
          </h3>
          <DiagramViewer
            src={IMAGES.kullaniciAkisi}
            alt="Kullanıcı Akış Diyagramı"
            caption="Kayıttan nihai rapora kadar kullanıcı yolculuğu"
          />
        </div>

        {/* Security Architecture */}
        <div className="mt-20">
          <SecurityBlock />
        </div>
      </div>
    </section>
  );
}

function TechStackTable() {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-x-auto"
    >
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-amber/20">
            <th
              className="py-4 pr-6 text-sm text-amber/70 font-medium tracking-wider uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Katman
            </th>
            <th
              className="py-4 pr-6 text-sm text-amber/70 font-medium tracking-wider uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Teknoloji
            </th>
            <th
              className="py-4 text-sm text-amber/70 font-medium tracking-wider uppercase hidden md:table-cell"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gerekçe
            </th>
          </tr>
        </thead>
        <tbody>
          {TECH_STACK.map((item, i) => (
            <tr
              key={i}
              className="border-b border-border/50 hover:bg-amber/[0.02] transition-colors duration-300"
            >
              <td className="py-4 pr-6 text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-display)" }}>
                {item.layer}
              </td>
              <td className="py-4 pr-6 text-muted-foreground text-sm">
                {item.tech}
              </td>
              <td className="py-4 text-muted-foreground/70 text-sm hidden md:table-cell">
                {item.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

function SecurityBlock() {
  const { ref, isInView } = useInView();

  const layers = [
    {
      title: "Veritabanı Düzeyi",
      desc: "Serbest metin alanları AES-256 ile şifrelenir. Şifreleme anahtarı kullanıcının parolasından türetilir (PBKDF2).",
    },
    {
      title: "İletişim Düzeyi",
      desc: "Tüm API çağrıları HTTPS/TLS 1.3 üzerinden gerçekleştirilir. Offline veriler şifreli kanal üzerinden senkronize edilir.",
    },
    {
      title: "AI Düzeyi",
      desc: "Local LLM'e gönderilen metinlerden PII bilgileri otomatik temizlenir. LLM çıktıları loglanmaz.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3
        className="text-xl md:text-2xl font-light text-foreground mb-8 tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Güvenlik ve Gizlilik Mimarisi
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="p-6 border border-border bg-card/30 hover:border-amber/15 transition-colors duration-500"
          >
            <h4
              className="text-sm text-amber/70 font-medium tracking-wider uppercase mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {layer.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {layer.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
