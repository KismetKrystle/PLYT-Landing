import ConsumerNavbar from "@/app/components/consumer/Navbar";
import Hero from "@/app/components/Hero";
import Problem from "@/app/components/Problem";
import Solution from "@/app/components/Solution";
import DigitalTwin from "@/app/components/DigitalTwin";
import ImpactFinance from "@/app/components/ImpactFinance";
import SystemArchitecture from "@/app/components/SystemArchitecture";
import BlockchainTech from "@/app/components/BlockchainTech";
import ClimateResilience from "@/app/components/ClimateResilience";
import BaliPilot from "@/app/components/BaliPilot";
import Partnerships from "@/app/components/consumer/Partnerships";
import ContactModern from "@/app/components/consumer/ContactModern";
import { ModalProvider } from "@/app/context/ModalContext";

export default function TechnologyPage() {
    return (
        <ModalProvider>
            <main>
                <ConsumerNavbar />
                <Hero />
                <Problem />
                <Solution />
                <DigitalTwin />
                <ImpactFinance />
                <SystemArchitecture />
                <BlockchainTech />
                <ClimateResilience />
                <BaliPilot />
                <Partnerships />
                <ContactModern />
            </main>
        </ModalProvider>
    );
}
