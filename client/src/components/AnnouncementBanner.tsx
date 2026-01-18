"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A] border-t border-[#1E1E1E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-[#A0A0A0]">
                        <span className="text-white">Smart Escrow</span> is live — secure your deals on-chain.
                        <a
                            href="#escrow"
                            className="ml-2 text-[#26D578] hover:underline"
                        >
                            Try it →
                        </a>
                    </p>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-shrink-0 p-1 text-[#505050] hover:text-white transition-colors"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
