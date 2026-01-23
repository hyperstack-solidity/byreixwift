"use client";

import React, { useState } from 'react';
import { Plus, Search, ExternalLink, Trash2, Edit3 } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

// mock data for ads
const initialAds = [
  { id: 1, name: 'Sidra Chain', url: 'https://Sidra.com/news', status: 'active', impressions: 1240, clicks: 88, thumbnail: '/mockThumbnail.png' },
  { id: 2, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 3, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 4, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 5, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 6, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 7, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 8, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 9, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
  { id: 10, name: 'O Block Street', url: 'https://Kingvon.com/ArmAndDangerous', status: 'inactive', impressions: 0, clicks: 0, thumbnail: '/mockThumbnail.png' },
];

export const BannerAdsManager = () => {
  const [ads, setAds] = useState(initialAds);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleStatus = (id: number) => {
    setAds(prevAds => prevAds.map(ad => 
      ad.id === id 
        ? { ...ad, status: ad.status === 'active' ? 'inactive' : 'active' } 
        : ad
    ));
  };

  const filteredAds = ads.filter(ad => 
    ad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Banner Ads Management</h1>
          <p className="text-(--byreix-text-secondary) text-sm">Monitor and manage your platform advertisements.</p>
        </div>
        <Button className="bg-(--byreix-green) hover:opacity-90 text-(--byreix-bg) gap-2 font-bold px-6 w-full md:w-auto">
          <Plus size={18} />
          Create New Ad
        </Button>
      </div>

      {/* Search Filter Bar */}
      <div className="flex items-center gap-4 p-4 bg-(--byreix-surface) border border-(--byreix-border) rounded-xl">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-(--byreix-text-secondary)" size={18} />
          <input 
            title='search ads'
            type="text"
            placeholder="Search by ad name or URL..."
            className="w-full bg-(--byreix-bg) border border-(--byreix-border) rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-(--byreix-green) outline-none transition-all text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-(--byreix-surface) border border-(--byreix-border) rounded-2xl overflow-hidden">
        
        {/* MOBILE VIEW */}
        <div className="block md:hidden max-h-100 overflow-y-auto scrollbar-thin scrollbar-thumb-(--byreix-border) scrollbar-track-transparent divide-y divide-(--byreix-border)">
          {filteredAds.map((ad) => (
            <div key={ad.id} className="p-4 space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-(--byreix-bg) border border-(--byreix-border) shrink-0 relative overflow-hidden">
                  <Image src={ad.thumbnail} alt="Preview" fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{ad.name}</p>
                  <a href={ad.url} className="text-[10px] text-(--byreix-green) truncate block">{ad.url}</a>
                </div>
                <div className="flex gap-2">
                  <Edit3 size={16} className="text-(--byreix-text-secondary) cursor-pointer" />
                  <Trash2 size={16} className="text-(--byreix-text-secondary) cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between items-center bg-(--byreix-bg) p-3 rounded-lg border border-(--byreix-border)">
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      title='toggle status'
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={ad.status === 'active'} 
                      onChange={() => handleToggleStatus(ad.id)}
                    />
                    <div className="w-8 h-4 bg-white/10 rounded-full peer peer-checked:bg-(--byreix-green) after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                  </label>
                  <span className={`text-[10px] font-bold uppercase ${ad.status === 'active' ? 'text-(--byreix-green)' : 'text-(--byreix-text-secondary)'}`}>
                    {ad.status}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-white">
                  {ad.impressions} IMP / {ad.clicks} CLK
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed">
              <thead className="bg-[#1A1A1A] border-b border-(--byreix-border) sticky top-0 z-10">
                <tr>
                  <th className="w-[10%] px-6 py-5 text-[10px] uppercase tracking-widest text-(--byreix-text-secondary) font-bold">Thumbnail</th>
                  <th className="w-[45%] px-6 py-5 text-[10px] uppercase tracking-widest text-(--byreix-text-secondary) font-bold">Ad Details</th>
                  <th className="w-[15%] px-6 py-5 text-[10px] uppercase tracking-widest text-(--byreix-text-secondary) font-bold">Status</th>
                  <th className="w-[15%] px-6 py-5 text-[10px] uppercase tracking-widest text-(--byreix-text-secondary) font-bold text-center">Stats (I/C)</th>
                  <th className="w-[15%] px-6 py-5 text-[10px] uppercase tracking-widest text-(--byreix-text-secondary) font-bold text-right">Actions</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="max-h-100 overflow-y-auto scrollbar-thin scrollbar-thumb-(--byreix-border) scrollbar-track-transparent">
            <table className="w-full text-left border-collapse table-fixed">
              <tbody className="divide-y divide-(--byreix-border)">
                {filteredAds.map((ad) => (
                  <tr key={ad.id} className="hover:bg-white/2 transition-colors group">
                    <td className="w-[10%] px-6 py-4">
                      <div className="w-11 h-11 rounded bg-(--byreix-bg) border border-(--byreix-border) flex items-center justify-center overflow-hidden">
                        <Image src={ad.thumbnail} alt="Preview" width={44} height={44} className="object-cover rounded" />
                      </div>
                    </td>
                    <td className="w-[45%] px-6 py-4">
                      <div className="flex flex-col min-w-0 pr-8">
                        <span className="text-sm font-bold text-white truncate">{ad.name}</span>
                        <a href={ad.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-(--byreix-green) hover:underline flex items-center gap-1 w-fit">
                          {ad.url} <ExternalLink size={10} />
                        </a>
                      </div>
                    </td>
                    <td className="w-[15%] px-6 py-4">
                      <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            title='toggle status'
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={ad.status === 'active'} 
                            onChange={() => handleToggleStatus(ad.id)}
                          />
                          <div className="w-8 h-4 bg-white/10 rounded-full peer peer-checked:bg-(--byreix-green) after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4"></div>
                        </label>
                        <span className={`text-[10px] font-bold uppercase ${ad.status === 'active' ? 'text-(--byreix-green)' : 'text-(--byreix-text-secondary)'}`}>
                          {ad.status}
                        </span>
                      </div>
                    </td>
                    <td className="w-[15%] px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-4 text-xs font-mono">
                        <div className="flex flex-col items-center">
                          <span className="text-white font-bold">{ad.impressions}</span>
                          <span className="text-[8px] text-(--byreix-text-secondary) uppercase">Imp</span>
                        </div>
                        <div className="h-5 w-px bg-(--byreix-border)" />
                        <div className="flex flex-col items-center">
                          <span className="text-white font-bold">{ad.clicks}</span>
                          <span className="text-[8px] text-(--byreix-text-secondary) uppercase">Clk</span>
                        </div>
                      </div>
                    </td>
                    <td className="w-[15%] px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <button className="text-(--byreix-text-secondary) hover:text-white transition-colors p-1" title="Edit Ad"><Edit3 size={17} /></button>
                        <button className="text-(--byreix-text-secondary) hover:text-red-500 transition-colors p-1" title="Delete Ad"><Trash2 size={17} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredAds.length === 0 && (
          <div className="px-6 py-16 text-center text-(--byreix-text-secondary) text-sm italic border-t border-(--byreix-border)">
            No advertisements found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};