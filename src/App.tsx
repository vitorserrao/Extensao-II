import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectSection } from './components/ProjectSection';
import { TheProblemSection } from './components/TheProblemSection';
import { UnderstandLampSection } from './components/UnderstandLampSection';
import { HowWeRecoverSection } from './components/HowWeRecoverSection';
import { ResultsImpactSection } from './components/ResultsImpactSection';
import { ExtensionCommunitySection } from './components/ExtensionCommunitySection';
import { ParticipateSection } from './components/ParticipateSection';
import { Footer } from './components/Footer';
import { DonationTicketModal } from './components/DonationTicketModal';
import { FullRepairGuideModal } from './components/FullRepairGuideModal';

export default function App() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#0A231C] font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* 00. Top Bar with institutional strip, navigation menu and pulsing amber lamp */}
      <Header
        onOpenDonate={() => setIsDonateModalOpen(true)}
        onOpenGuide={() => setIsGuideModalOpen(true)}
      />

      <main className="flex-1">
        {/* CAPA / HERO */}
        <HeroSection />

        {/* 1 — O PROJETO */}
        <ProjectSection />

        {/* 2 — O PROBLEMA (Unindo "Por que recuperar?" e "Eficiência energética") */}
        <TheProblemSection />

        {/* 3 — ENTENDA A LÂMPADA (Unindo "Conheça a lâmpada" e "Diagnóstico") */}
        <UnderstandLampSection />

        {/* 4 — COMO RECUPERAMOS (Etapas, esquema animado e guia de reparo) */}
        <HowWeRecoverSection
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />

        {/* 5 — RESULTADOS (Indicadores + Painel Aberto de Impacto Comunitário + Simulador de Impacto) */}
        <ResultsImpactSection />

        {/* 6 — EXTENSÃO E COMUNIDADE (Fluxo de extensão + "Quem faz acontecer" + "Conhecimento que sai da sala de aula") */}
        <ExtensionCommunitySection />

        {/* 7 — PARTICIPE (Pontos de coleta, chamado para conserto e gerador de identificador) */}
        <ParticipateSection
          onOpenDonateModal={() => setIsDonateModalOpen(true)}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />
      </main>

      {/* RODAPÉ OFICIAL REACENDE / IFSC */}
      <Footer />

      {/* Modais Interativos */}
      <DonationTicketModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />

      <FullRepairGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
}
