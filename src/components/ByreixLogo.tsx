import Image from "next/image";

export function ByreixLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-0.5 ${className}`}>
            {/* Logo Icon */}
            <Image
                src="/logo_transparent.png"
                alt="Byreixwift"
                width={36}
                height={36}
                className="h-9 w-auto"
            />

            {/* Wordmark - Gradient text */}
            <span
                className="text-xl font-semibold tracking-wide bg-gradient-to-r from-[#D4AF37] to-[#26D578] bg-clip-text text-transparent"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                Byreixwift
            </span>
        </div>
    );
}
