import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Problem from "@/app/components/Problem";
import Solution from "@/app/components/Solution";
import DigitalTwin from "@/app/components/DigitalTwin";
import ImpactFinance from "@/app/components/ImpactFinance";
import SystemArchitecture from "@/app/components/SystemArchitecture";
import BlockchainTech from "@/app/components/BlockchainTech";
import ClimateResilience from "@/app/components/ClimateResilience";
import BaliPilot from "@/app/components/BaliPilot";
import Partnership from "@/app/components/Partnership";
import SocialProof from "@/app/components/SocialProof";
import DualCTA from "@/app/components/DualCTA";
import Footer from "@/app/components/Footer";

export default function TechnologyPage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <DigitalTwin />
            <ImpactFinance />
            <SystemArchitecture />
            <BlockchainTech />
            <ClimateResilience />
            <BaliPilot />
            <Partnership />
            <SocialProof />
            <DualCTA />
            <Footer />
        </main>
    );
}
