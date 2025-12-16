"use client";
import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";
import { ModalProvider } from "../context/ModalContext";
import JoinModal from "../components/JoinModal";
import React from "react";
import FounderTimeline from "../components/about/FounderTimeline";

export default function AboutPage() {
    return (
        <ModalProvider>
            <main className="min-h-screen bg-brand-dark flex flex-col relative">
                <ConsumerNavbar className="!bg-brand-dark/90 !backdrop-blur-md border-b border-white/5" theme="dark" />

                <div className="flex-grow w-full">
                    <FounderTimeline />
                </div>

                <ConsumerFooter />
                <JoinModal />
            </main>
        </ModalProvider>
    );
}
