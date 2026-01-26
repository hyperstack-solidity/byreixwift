"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export interface Announcement {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'promo';
  startDate: string;
  endDate: string;
}

interface AnnouncementContextType {
  announcements: Announcement[];
  setAnnouncements: React.Dispatch<React.SetStateAction<Announcement[]>>;
  activeAnnouncement: Announcement | null;
}

const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

 // AnnouncementProvider - Manages the global state for site wide banners.
 // uses localStorage for persistence temporarily until backend integration.
 
export function AnnouncementProvider({ children }: { children: React.ReactNode }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('byreix_announcements');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Sync state changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('byreix_announcements', JSON.stringify(announcements));
  }, [announcements]);

  // Calculate the currently active announcement based on dates
  const activeAnnouncement = useMemo(() => {
    const now = new Date();
    return announcements.find(ann => {
      const start = new Date(ann.startDate);
      const end = new Date(ann.endDate);
      return now >= start && now <= end;
    }) || null;
  }, [announcements]);

  return (
    <AnnouncementContext.Provider value={{ announcements, setAnnouncements, activeAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

// Custom hook for accessing announcement state
export const useAnnouncements = () => {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error("useAnnouncements must be used within an AnnouncementProvider");
  }
  return context;
};