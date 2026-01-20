"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "../context/ModalContext";
import { useState, useEffect } from "react";

export default function JoinModal() {
    const { isModalOpen, closeModal, interest } = useModal();
    const [activeTab, setActiveTab] = useState<"partnership" | "waitlist">(interest);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // Sync local state with context interest when it changes
    useEffect(() => {
        if (isModalOpen) {
            setActiveTab(interest);
            setStatus("idle"); // Reset status when modal opens
        }
    }, [interest, isModalOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Add contextual info
        data["_subject"] = `New Plyant ${activeTab === "partnership" ? "Partnership Inquiry" : "Waitlist Request"}`;
        data["_template"] = "table";
        data["form_type"] = activeTab;
        data["site_url"] = window.location.href; // Track if it's localhost or production

        try {
            const response = await fetch("https://formsubmit.co/ajax/krystle@plyant.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

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

                            {/* Tabs (only show if not success) */}
                            {status !== "success" && (
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
                            )}

                            {/* Content */}
                            <div className="p-8 overflow-y-auto">
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                                        >
                                            <div className="w-20 h-20 bg-brand-earth/20 rounded-full flex items-center justify-center text-brand-earth mb-4">
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="font-display text-3xl uppercase text-brand-dark">Received!</h3>
                                            <p className="font-serif text-xl text-brand-dark/70">
                                                Thanks for reaching out. We'll be in touch soon.
                                            </p>
                                            <p className="text-sm text-brand-dark/50 italic mt-4">
                                                (Please check your email to confirm if this is your first time)
                                            </p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-8 bg-brand-dark text-brand-light px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-earth transition-colors"
                                            >
                                                Close
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6"
                                            onSubmit={handleSubmit}
                                        >
                                            <div>
                                                <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="w-full bg-white border border-brand-dark/20 p-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                                                    placeholder="Jane Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="w-full bg-white border border-brand-dark/20 p-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
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
                                                        name="organization"
                                                        className="w-full bg-white border border-brand-dark/20 p-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                                                        placeholder="Company Name"
                                                    />
                                                </div>
                                            )}

                                            <div>
                                                <label className="block font-sans text-sm font-bold text-brand-dark mb-2 uppercase tracking-wide">
                                                    Message (Optional)
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows={3}
                                                    className="w-full bg-white border border-brand-dark/20 p-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                                                    placeholder="Tell us about your interest..."
                                                ></textarea>
                                            </div>

                                            {status === "error" && (
                                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">
                                                    Something went wrong. Please try again or email us directly at krystle@plyant.com.
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "submitting"}
                                                className="w-full bg-brand-dark text-brand-light py-4 font-display text-xl uppercase tracking-wider hover:bg-brand-earth disabled:opacity-50 disabled:cursor-wait transition-colors"
                                            >
                                                {status === "submitting" ? "Sending..." : (activeTab === "waitlist" ? "Join Waitlist" : "Inquire Partnership")}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
