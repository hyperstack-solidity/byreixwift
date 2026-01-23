"use client";

import React, { ReactNode } from "react";

interface AdSlotProps {
  children?: ReactNode;
  isVisible?: boolean; // show only if ad available
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ children, isVisible = true, className }) => {
  if (!isVisible) return null;

  return <div className={`ad-slot my-4 ${className}`}>{children}</div>;
};
