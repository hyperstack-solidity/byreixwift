import React from 'react';
import CMSOverview from '@/components/cms/CMSOverview';

export const CMSDashboard = () => {
  return (
    <div className="space-y-6">  {/* overview component container */}
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3 text-white">
          System Overview
        </h1>
        <p className="text-white/40 text-sm mt-1">Content and Advertisement Management.</p>
      </div>

      {/* render overview component*/}
      <CMSOverview />
    </div>
  );
};