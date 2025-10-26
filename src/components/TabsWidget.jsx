"use client";

import React from "react";

export default function TabsWidget({ tabs = [], active, onChange }) {
  return (
    <div className="bg-[#0f0f0f] rounded-xl flex items-center gap-3 flex-wrap p-1.5">
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            aria-pressed={isActive}
            className={`relative px-5 py-2 rounded-lg text-sm font-medium select-none transition-all duration-300
              ${
                isActive
                  ? "bg-[#303030]/90 text-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.8)] scale-[1.02]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }
              focus:outline-none focus:ring-2 focus:ring-gray-500/40`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
