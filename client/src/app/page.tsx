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

  const handleGoogleLogin = () => {
   // TODO:
   // login through google  or wallet connect will be implemented here
    
    // simulation of successful login for now
    setTimeout(() => {
      setIsWalletConnected(true);
      toast.success("Signed in with Google successfully!");
      setCurrentPage("wallet");
    }, 1000);
  };

  const handleWalletConnect = () => {
  
    handleConnect();
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
   
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

      <main className="relative">
        {currentPage === "home" && (
          <LandingPage onNavigate={handleNavigate} onConnect={handleConnect} />
        )}
        {currentPage === "login" && (
          <LoginPage 
            onNavigate={handleNavigate} 
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