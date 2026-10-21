import React, { useState, useEffect } from 'react';
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
import { TutorialPage } from './components/TutorialPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tutorial'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#tutorial' || hash === '#tutorial-de-reparo') {
        return 'tutorial';
      }
    }
    return 'home';
  });

  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#tutorial' || hash === '#tutorial-de-reparo') {
        setCurrentView('tutorial');
      } else if (!hash || hash === '#home') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openTutorial = () => {
    window.location.hash = 'tutorial-de-reparo';
    setCurrentView('tutorial');
  };

  const openHome = () => {
    window.location.hash = '';
    setCurrentView('home');
  };

  if (currentView === 'tutorial') {
    return <TutorialPage onBack={openHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#1A1A1A] font-sans selection:bg-[#2F9E41]/20 selection:text-[#124B1E]">
      
      {/* 00. Top Bar with institutional strip, navigation menu and pulsing amber lamp */}
      <Header
        onOpenDonate={() => setIsDonateModalOpen(true)}
        onOpenGuide={() => setIsGuideModalOpen(true)}
        onOpenTutorial={openTutorial}
      />

      <main className="flex-1">
        {/* CAPA / HERO */}
        <HeroSection />

        {/* 1 — O PROJETO */}
        <ProjectSection />

        {/* 2 — O PROBLEMA & 3 — EFICIÊNCIA ENERGÉTICA */}
        <TheProblemSection />

        {/* 4 — ENTENDA A LÂMPADA & DIAGNÓSTICO */}
        <UnderstandLampSection />

        {/* 5 — COMO RECUPERAMOS (Com atalho direto para a Página Dedicada do Tutorial) */}
        <HowWeRecoverSection
          onOpenTutorial={openTutorial}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />

        {/* 6 — RESULTADOS & IMPACTO */}
        <ResultsImpactSection />

        {/* 7 — EXTENSÃO E COMUNIDADE */}
        <ExtensionCommunitySection />

        {/* 8 — PARTICIPE & PONTOS DE COLETA */}
        <ParticipateSection
          onOpenDonateModal={() => setIsDonateModalOpen(true)}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />
      </main>

      {/* RODAPÉ OFICIAL PROJETO ReLED / IFSC */}
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
