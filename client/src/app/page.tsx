"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { LandingPage } from "@/components/pages/LandingPage";
import { LoginPage } from "@/components/pages/LoginPage";
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

  const handleEmailLogin = (credentials: { email: string; password: string; rememberMe: boolean }) => {
    // TODO: Call api controller for authentication, store auth token, redirect to dashboard
 
    setTimeout(() => {
      setIsWalletConnected(true);
      toast.success(`Welcome back! Signed in as ${credentials.email}`);
      setCurrentPage("wallet");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    // TODO: Call api controller for authentication, open google authentication, store auth token, redirect to dashboard

    setTimeout(() => {
      setIsWalletConnected(true);
      toast.success("Signed in with Google successfully!");
      setCurrentPage("wallet");
    }, 1000);
  };

  const handleWalletConnect = () => {
    // Reuse the existing wallet connection logic
    handleConnect();
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
        {currentPage === "login" && (
          <LoginPage 
            onNavigate={handleNavigate}
            onEmailLogin={handleEmailLogin}
            onGoogleLogin={handleGoogleLogin}
            onWalletConnect={handleWalletConnect}
          />
        )}
        {currentPage === "wallet" && <WalletDashboard onNavigate={handleNavigate} />}
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