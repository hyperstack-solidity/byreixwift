import React from 'react';
import { LayoutDashboard } from 'lucide-react';

export const CMSDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <LayoutDashboard className="text-[#26D578]" />
          System Overview
        </h1>
        <p className="text-white/40 text-sm mt-1">Manage your platform content and advertisements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder cards to show the layout*/}
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 rounded-2xl bg-white/5 border border-white/5 border-dashed flex items-center justify-center">
            <span className="text-white/10 text-xs uppercase tracking-widest font-bold">Placeholder {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
};