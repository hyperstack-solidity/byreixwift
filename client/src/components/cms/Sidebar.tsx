"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Megaphone,
  BellRing,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { ByreixLogo } from "../ByreixLogo";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Dashboard Overview", href: "/cms", icon: LayoutDashboard },
  {
    name: "Banner Ads Management",
    href: "/cms/bannerAdsManagement",
    icon: Megaphone,
  },
  { name: "Announcements", href: "/cms/announcements", icon: BellRing },
  { name: "Settings", href: "/cms/settings", icon: Settings },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A] border-b border-white/5 flex items-center justify-between px-6 z-[60]">
        <ByreixLogo className="h-6" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#A0A0A0] hover:text-white transition-all active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* COLLAPSIBLE MENU */}
      <aside
        className={`
        fixed z-[55] bg-[#0F0F0F] transition-all duration-300 ease-in-out
        
        /* DESKTOP: Static Sidebar */
        lg:static lg:inset-y-0 lg:left-0 lg:w-64 lg:min-h-screen lg:translate-y-0 lg:opacity-100 lg:border-r lg:border-white/5
        
        /* MOBILE: Top-down Dropdown */
        ${
          isOpen
            ? "top-16 left-0 right-0 opacity-100 translate-y-0 visible border-b border-white/10"
            : "top-16 left-0 right-0 opacity-0 -translate-y-4 invisible lg:visible"
        }
      `}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-10 hidden lg:block">
            <ByreixLogo className="h-7" />
          </div>

          <nav className="space-y-1.5 overflow-y-auto custom-scrollbar">
            {navLinks.map((link) => {
           
              const isActive =
                link.href === "/cms"
                  ? pathname === "/cms"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#26D578]/10 text-[#26D578]"
                      : "text-[#A0A0A0] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 border-t border-white/5 lg:pt-6">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-[11px] text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              <Button className="cursor-pointer bg-[#26D578] hover:bg-[#26D578]/90 text-black w-full">
              Exit Portal
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] lg:hidden animate-in fade-in duration-300"
        />
      )}
    </>
  );
};
