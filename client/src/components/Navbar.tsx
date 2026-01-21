"use client";

import Link from "next/link";
import { ByreixLogo } from "./ByreixLogo";
import { Button } from "./ui/button";
import { Wallet, Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onConnect?: () => void;
  isConnected?: boolean;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Navbar({
  onConnect,
  isConnected,
  currentPage,
  onNavigate,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", value: "home" },
    { label: "Wallet", value: "wallet" },
    { label: "Escrow", value: "escrow" },
    { label: "CMS", value: "cms", href: "/cms", isRoute: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate?.("home")}
            className="flex-shrink-0"
            title="home"
          >
            <ByreixLogo />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link key={link.value} href={link.href || "#"}>
                  <button
                    className="text-sm transition-colors hover:text-white text-[#A0A0A0] cursor-pointer"
                    title={link.value}
                  >
                    {link.label}
                  </button>
                </Link>
              ) : (

                <button
                  key={link.value}
                  onClick={() => onNavigate?.(link.value)}
                  className={`text-sm transition-colors ${
                    currentPage === link.value
                      ? "text-[#26D578]"
                      : "text-[#A0A0A0] hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            {isConnected ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#121212] border border-[#1E1E1E]">
                <div className="w-2 h-2 bg-[#26D578] rounded-full animate-pulse" />
                <span className="text-sm text-white">0x742d...9aB8</span>
              </div>
            ) : (
              <Button
                onClick={onConnect}
                className="bg-[#26D578] hover:bg-[#26D578]/90 text-black"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A0A0A0] hover:text-white"
            title="menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1E1E1E]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  
                  <Link key={link.value} href={link.href || "#"}>
                    <button
                      className="text-left px-2 py-2 hover:text-white text-sm transition-colors text-[#A0A0A0] cursor-pointer"
                      title={link.value}
                    >
                      {link.label}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={link.value}
                    onClick={() => {
                      onNavigate?.(link.value);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-2 py-2 text-sm transition-colors ${
                      currentPage === link.value
                        ? "text-[#26D578]"
                        : "text-[#A0A0A0] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
              {!isConnected && (
                <Button
                  onClick={onConnect}
                  className="bg-[#26D578] hover:bg-[#26D578]/90 text-black"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}