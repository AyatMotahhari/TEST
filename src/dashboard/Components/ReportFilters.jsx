import { useState } from 'react';
import { Search, FileText } from 'lucide-react';

export default function FilterBar({  
  activeFilter: controlledActiveFilter, 
  setActiveFilter: controlledSetActiveFilter 
}) {
  const [internalActiveFilter, setInternalActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState("")

  console.log(searchQuery)

  const activeFilter = controlledActiveFilter ?? internalActiveFilter;
  
  const setActiveFilter = controlledSetActiveFilter ?? setInternalActiveFilter;

  const filterTabs = [
    { id: 'all', label: 'همه' },
    { id: 'signed', label: 'امضاء شده' },
    { id: 'unsigned', label: 'بدون امضاء' },
  ];

  return (
    <div className="p-5 -mt-2.5 border-b border-white/5 flex flex-wrap items-center justify-between gap-5">
      
      <div className="flex items-center gap-3 text-white font-bold text-xl">
        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
          <FileText className="w-5 h-5" />
        </div>
        <span>لیست گزارشات</span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        
        <div className="flex items-center gap-1.5 bg-black/30 p-1.5 rounded-xl border border-white/5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
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
            className="w-64 h-11 bg-black/40 border border-white/10 text-sm rounded-xl px-4 py-2 pr-10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 backdrop-blur-sm transition-all"
          />

          <Search className="w-4.5 h-4.5 text-gray-400 absolute right-3 top-3.5" />
        </div>

      </div>
    </div>
  );
}