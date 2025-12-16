import ConsumerNavbar from "./components/consumer/Navbar";
import HeroModern from "./components/consumer/HeroModern";
import HowItWorksModern from "./components/consumer/HowItWorksModern";
import SustainabilityStatement from "./components/consumer/SustainabilityStatement";
import PartnersBanner from "./components/consumer/PartnersBanner";
import SDGBanner from "./components/consumer/SDGBanner";
import ProblemSolutionToggle from "./components/consumer/ProblemSolutionToggle";
import AIChat from "./components/consumer/AIChat";
import UnifiedFlows from "./components/consumer/UnifiedFlows";
import CommunityImpact from "./components/consumer/CommunityImpact";
import ContactModern from "./components/consumer/ContactModern";
import TechnicalDeepDive from "./components/consumer/TechnicalDeepDive";
import { ModalProvider } from "./context/ModalContext";
import JoinModal from "./components/JoinModal";
import BackToTop from "./components/BackToTop";
import ConsumerFooter from "./components/consumer/Footer";

import ParallaxSection from "./components/ParallaxSection";

import HashScroll from "./components/HashScroll";

export default function Home() {
  return (
    <ModalProvider>
      <HashScroll />
      <main className="min-h-screen bg-brand-light">
        {/* XRPL Residency Link - Fixed Banner */}
        <div className="fixed top-0 left-0 right-0 z-[70] h-10 bg-brand-dark text-brand-light flex items-center justify-center border-b border-brand-light/10">
          <a href="#technology" className="font-sans text-sm md:text-base hover:text-brand-earth transition-colors flex items-center justify-center gap-2 w-full h-full">
            <span className="bg-brand-earth/20 px-2 py-0.5 rounded text-xs font-bold text-brand-earth uppercase tracking-wider">Judges</span>
            Additional Information for XRPL Residency Evaluation →
          </a>
        </div>

        <ConsumerNavbar className="top-10" />

        <HeroModern />

        <PartnersBanner />

        <ProblemSolutionToggle />

        <ParallaxSection
          backgroundImage="/backgrounds/veggies-parallax.jpg"
          height="40vh"
          overlayOpacity={0.1}
        />

        <HowItWorksModern />

        <SustainabilityStatement />

        <UnifiedFlows />

        <AIChat />

        {/* Divider between AIChat and CommunityImpact */}
        <div className="w-full h-px bg-brand-dark/10"></div>

        <CommunityImpact />

        <ParallaxSection
          backgroundImage="/backgrounds/grow-systems-parallax.jpg"
          height="40vh"
          overlayOpacity={0.3}
        />

        <TechnicalDeepDive />

        <ContactModern />

        <ConsumerFooter />

        <JoinModal />
        <BackToTop />
      </main>
    </ModalProvider>
  );
}
