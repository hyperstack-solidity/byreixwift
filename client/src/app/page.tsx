"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { LandingPage } from "@/components/pages/LandingPage";
import { WalletDashboard } from "@/components/pages/WalletDashboard";
import { EscrowPage } from "@/components/pages/EscrowPage";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { AdContainer } from "@/components/ad-container";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnect = () => {
    if (!isWalletConnected) {
      // Simulate wallet connection
      setTimeout(() => {
        setIsWalletConnected(true);
        toast.success("Wallet connected successfully!");
        setCurrentPage("wallet");
      }, 500);
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter']">
      <Navbar
        onConnect={handleConnect}
        isConnected={isWalletConnected}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="relative ">
        <div className="py-4">
          {/* Ad Placeholder Fallback States*/}
          <AdContainer simulateError={true} />
        </div>

        {currentPage === "home" && (
          <LandingPage onNavigate={handleNavigate} onConnect={handleConnect} />
        )}
        {currentPage === "wallet" && <WalletDashboard />}
        {currentPage === "escrow" && <EscrowPage />}
      </main>

      <Footer />
      <AnnouncementBanner />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#121212",
            border: "1px solid #1E1E1E",
            color: "#FFFFFF",
          },
        }}
      />
    </div>
  );
}
