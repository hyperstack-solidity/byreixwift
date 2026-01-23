import { ByreixLogo } from "./ByreixLogo";
import { Github, Twitter, Send } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import BannerAd, { BannerAdSize } from "@/components/ads/BannerAd";

export function Footer() {
    const footerLinks = [
        {
            title: "Product",
            links: ["Features", "Swap", "Send", "TrendView", "Smart Escrow"],
        },
        {
            title: "Resources",
            links: ["Documentation", "API", "Support", "Community"],
        },
        {
            title: "Company",
            links: ["About", "Blog", "Careers", "Contact"],
        },
    ];

    return (
        <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <ByreixLogo />
                        <p className="mt-4 text-sm text-[#A0A0A0] max-w-sm">
                            The future of Web3 wallet infrastructure. Secure, fast, and built for the Sidrachain ecosystem.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#121212] border border-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] hover:text-[#26D578] hover:border-[#26D578] transition-colors"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#121212] border border-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] hover:text-[#26D578] hover:border-[#26D578] transition-colors"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#121212] border border-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] hover:text-[#26D578] hover:border-[#26D578] transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-[#A0A0A0] hover:text-[#26D578] transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <AdSlot className="mt-8">
                                    <BannerAd
                                        imageURL="/ads/medium-rectangle-ad.jpg"
                                        linkURL="https://example.com"
                                        size={BannerAdSize.MEDIUM_RECTANGLE} altText={""}                                    />
                                 </AdSlot>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#A0A0A0]">
                        © 2026 Byreixwift. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-[#A0A0A0] hover:text-[#26D578] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-[#A0A0A0] hover:text-[#26D578] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
