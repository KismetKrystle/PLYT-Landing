import ConsumerNavbar from "./components/consumer/Navbar";
import HeroModern from "./components/consumer/HeroModern";
import PartnersBanner from "./components/consumer/PartnersBanner";
import HowItWorksModern from "./components/consumer/HowItWorksModern";
import SustainabilityStatement from "./components/consumer/SustainabilityStatement";
import ConsumerProblem from "./components/consumer/Problem";
import AIChat from "./components/consumer/AIChat";
import UnifiedFlows from "./components/consumer/UnifiedFlows";
import CommunityImpact from "./components/consumer/CommunityImpact";
import BaliPilot from "./components/consumer/BaliPilot";
import Partnerships from "./components/consumer/Partnerships";
import ContactModern from "./components/consumer/ContactModern";
import TechnicalDeepDive from "./components/consumer/TechnicalDeepDive";

export default function Home() {
  return (
    <main>
      <ConsumerNavbar className="top-0" />

      <HeroModern />
      <PartnersBanner />
      <HowItWorksModern />
      <SustainabilityStatement />
      <ConsumerProblem />
      <AIChat />
      <UnifiedFlows />
      <CommunityImpact />
      <TechnicalDeepDive />
      <BaliPilot />
      <Partnerships />
      <ContactModern />
    </main>
  );
}
