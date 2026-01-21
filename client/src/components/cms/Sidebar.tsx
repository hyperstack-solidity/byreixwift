"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ByreixLogo } from "../ByreixLogo";

const navLinks = [
  { name: "Dashboard Overview", href: "/cms" },
  {
    name: "Banner Ads Management",
    href: "/cms/bannerAdsManagement",
  },
  { name: "Announcements", href: "/cms/announcements" },
  { name: "Settings", href: "/cms/settings" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A] border-b border-white/5 flex items-center justify-between px-6 z-60">
        <Link href="/" className="cursor-pointer">
          <ByreixLogo className="h-7" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#A0A0A0] hover:text-white transition-all active:scale-95 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <Menu size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU */}
      <aside
        className={`
        fixed z-55 bg-[#0F0F0F] transition-all duration-300 ease-in-out
        
        /* DESKTOP */
        lg:static lg:inset-y-0 lg:left-0 lg:w-64 lg:min-h-screen lg:translate-y-0 lg:opacity-100 lg:border-r lg:border-white/5
        
        /* MOBILE */
        ${
          isOpen
            ? "top-16 left-0 right-0 opacity-100 translate-y-0 visible border-b border-white/10"
            : "top-16 left-0 right-0 opacity-0 -translate-y-4 invisible lg:visible"
        }
      `}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-10 hidden lg:block">
            <Link href="/" className="cursor-pointer">
              <ByreixLogo className="h-7" />
            </Link>
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
                      ? " text-[#26D578]"
                      : "text-[#A0A0A0] hover:text-white "
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 border-t border-white/5 lg:pt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#26D578] hover:bg-[#26D578]/90 text-black w-full h-10 px-4 py-2 rounded-md font-medium"
            >
              Exit Portal
            </Link>
          </div>
        </div>
      </aside>

      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden animate-in fade-in duration-300 "
        />
      )}
    </>
  );
};
