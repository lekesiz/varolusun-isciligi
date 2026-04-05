/*
 * Varoluşun İşçiliği — İnteraktif Keşif Platformu
 * Tasarım: İnziva Odası — Derin Karanlık Minimalizm
 * Wabi-Sabi + Swiss International Typographic Style
 * Renk: Kömür siyahı zemin, yumuşak beyaz metin, kehribar vurgu
 */

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <VisionSection />
        <ArchitectureSection />
        <ModulesSection />
        <TeamSection />
        <RoadmapSection />
        <FutureSection />
      </main>
      <FooterSection />
    </div>
  );
}
