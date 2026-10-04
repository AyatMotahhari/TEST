import React, { useState } from 'react';
import { Search, FileText } from 'lucide-react';

export default function FilterBar({ 
  searchQuery, 
  setSearchQuery, 
  activeFilter: controlledActiveFilter, 
  setActiveFilter: controlledSetActiveFilter 
}) {
  const [internalActiveFilter, setInternalActiveFilter] = useState('all');

  const activeFilter = controlledActiveFilter ?? internalActiveFilter;
  const setActiveFilter = controlledSetActiveFilter ?? setInternalActiveFilter;

  const filterTabs = [
    { id: 'all', label: 'همه' },
    { id: 'signed', label: 'امضاء شده' },
    { id: 'unsigned', label: 'بدون امضاء' },
  ];

  return (
    <div className="p-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2.5 text-white font-bold text-sm">
        <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
          <FileText className="w-4 h-4" />
        </div>
        <span>لیست گزارشات</span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="جستجو..."
            className="w-56 bg-black/40 border border-white/10 text-xs rounded-xl px-3 py-2 pr-8 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 backdrop-blur-sm transition-all"
          />
          <Search className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-2.5" />
        </div>
      </div>
    </div>
  );
}