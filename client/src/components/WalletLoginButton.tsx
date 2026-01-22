"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Wallet, Loader2, AlertCircle, ArrowRight } from "lucide-react";

interface WalletLoginButtonProps {
    onConnect: (address: string) => void;
}

export function WalletLoginButton({onConnect}: WalletLoginButtonProps) {
    const [status, setStatus] = useState<"idle" | "connecting" | "error" | "no-wallet">
    ("idle");

    const[error, setError] = useState("");

    const handleConnect = async() => {
        setStatus("connecting");
        setError("");

        try {
            //STEP 1: Sidra Chain Wallet Detection
            // no sidra chain extension so will use metamask or simulation

            if (typeof window !== "undefined" && (window as any).ethereum) {
                const provider = (window as any).ethereum;



                // STEP 2: Sidra Chain Account Address request
                // There should be a popup where the sidra chain address will be shown

                const accounts = await provider.request( {
                    method: "eth_requestAccounts"
                });

                if(accounts.Legnth > 0) {
                    const walletAddress = accounts[0];

                    // Step 3: Web3 network check to ensure that the wallet is on the sidra chain (e.g sidra testnet)
                    // if not switch to sidra testnet

                    // Step 4: Issuance of BACKEND AUTHENTICATION (API CALL to ASP.NET Controller)
                    // API call to server controller which will issue 'nonce'.
                    // The nonce will be used to geenrate a signature which will be sent to the server
                    // send signature and address to the ASP.NET API Controller to get JWT.

                    // SUCCESSFUL AUTHENTICATION
                    
                    setStatus("idle");
                    onConnect(walletAddress); 
                } 

            }
            else {
                    setStatus("no-wallet");
                    setError("Sidra Wallet not detected. Please install the Sidra Wallet/Extention.");
                }
            } catch (err: any) {
                setStatus("error");
                setError(err.Message || "Failed to connect wallet.");
            }
        };

        return ( 

            <div className="space-y-3">
                <Button
                    onClick={handleConnect}
                    disabled= {status === "connecting"}
                    className="flex items-center w-full bg-[#26D578] hover:bg-[#26D578]/90 text-black font-semibold py-7 text-base transition-all hover:shadow-[0_0_30px_rgba(38,213,120,0.3)] group"
                    >
                        {status === "connecting" ? (
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                ) : (
                    <Wallet className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                )}
                {status === "connecting" ? "Connecting..." : "Connect with Sidra Wallet"}
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />


                </Button>
                    {/* User Feedback/Error Message */}
                    {(status === "error" || status === "no-wallet") && (
                        <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

            </div>
        )
    };



