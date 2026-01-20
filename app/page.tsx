import { Suspense } from "react";
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

import { ModalProvider } from "./context/ModalContext";
import JoinModal from "./components/JoinModal";
import BackToTop from "./components/BackToTop";
import ConsumerFooter from "./components/consumer/Footer";

import ParallaxSection from "./components/ParallaxSection";

import HashScroll from "./components/HashScroll";

export default function Home() {
  return (
    <ModalProvider>
      <Suspense fallback={null}>
        <HashScroll />
      </Suspense>
      <main className="min-h-screen bg-brand-light">


        <ConsumerNavbar />

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



        <ContactModern />

        <ConsumerFooter />

        <JoinModal />
        <BackToTop />
      </main>
    </ModalProvider>
  );
}
