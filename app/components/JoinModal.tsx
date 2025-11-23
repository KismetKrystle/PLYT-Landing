"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "../context/ModalContext";
import { useState, useEffect } from "react";

export default function JoinModal() {
    const { isModalOpen, closeModal, interest } = useModal();
    const [activeTab, setActiveTab] = useState<"partnership" | "waitlist">(interest);

    // Sync local state with context interest when it changes
    useEffect(() => {
        if (isModalOpen) {
            setActiveTab(interest);
        }
    }, [interest, isModalOpen]);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none"
                    >
                        <div className="bg-brand-light w-full max-w-lg rounded-none shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">
                            {/* Header */}
                            <div className="bg-brand-dark text-brand-light p-6 flex justify-between items-center shrink-0">
                                <h2 className="font-display text-2xl uppercase tracking-wider">Join the Movement</h2>
                                <button onClick={closeModal} className="text-brand-light/50 hover:text-brand-light transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-brand-dark/10 shrink-0">
                                <button
                                    onClick={() => setActiveTab("waitlist")}
                                    className={`flex-1 py-4 font-sans font-bold uppercase tracking-wider text-sm transition-colors ${activeTab === "waitlist"
                                            ? "bg-brand-light text-brand-dark border-b-2 border-brand-dark"
                                            : "bg-brand-light/50 text-brand-dark/50 hover:bg-brand-light hover:text-brand-dark"
                                        }`}
                                >
                                    Join Waitlist
                                </button>
                                <button
                                    onClick={() => setActiveTab("partnership")}
                                    className={`flex-1 py-4 font-sans font-bold uppercase tracking-wider text-sm transition-colors ${activeTab === "partnership"
                                            ? "bg-brand-light text-brand-dark border-b-2 border-brand-dark"
                                            : "bg-brand-light/50 text-brand-dark/50 hover:bg-brand-light hover:text-brand-dark"
                                        }`}
                                >
                                    Partnership
                                </button>
                            </div>

                            {/* Form */}
                            <div className="p-8 overflow-y-auto">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border border-brand-dark/20 p-3 focus:outline-none focus:border-brand-dark transition-colors"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full bg-white border border-brand-dark/20 p-3 focus:outline-none focus:border-brand-dark transition-colors"
                                            placeholder="jane@example.com"
                                        />
                                    </div>

                                    {activeTab === "partnership" && (
                                        <div>
                                            <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                                Organization / Role
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-white border border-brand-dark/20 p-3 focus:outline-none focus:border-brand-dark transition-colors"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            rows={3}
                                            className="w-full bg-white border border-brand-dark/20 p-3 focus:outline-none focus:border-brand-dark transition-colors"
                                            placeholder="Tell us about your interest..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-brand-dark text-brand-light py-4 font-display text-xl uppercase tracking-wider hover:bg-brand-earth transition-colors"
                                    >
                                        {activeTab === "waitlist" ? "Join Waitlist" : "Inquire Partnership"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
