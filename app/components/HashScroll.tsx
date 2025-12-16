"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScroll() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Run on mount and when path changes
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                // Small delay to ensure render/layout
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [pathname, searchParams]);

    return null;
}
