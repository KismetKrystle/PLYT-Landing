"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    isModalOpen: boolean;
    interest: "partnership" | "waitlist";
    openModal: (interest?: "partnership" | "waitlist") => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [interest, setInterest] = useState<"partnership" | "waitlist">("waitlist");

    const openModal = (type: "partnership" | "waitlist" = "waitlist") => {
        setInterest(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, interest, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
