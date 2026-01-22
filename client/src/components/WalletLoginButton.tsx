"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Wallet, Loader2, AlertCircle, ArrowRight } from "lucide-react";


interface WalletLoginButtonProps {
    onConnect: (address: string) => void;
}