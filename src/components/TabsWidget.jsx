"use client";

import React from "react";

export default function TabsWidget({ tabs = [], active, onChange }) {
  return (
    <div className="bg-[#0f0f0f] rounded-[18px] flex items-center gap-1.5 flex-wrap p-1.5 mr-[53px]">
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            aria-pressed={isActive}
            className={`
              
              cursor-pointer relative w-[32%] px-5 py-2 rounded-xl text-sm font-medium select-none transition-all duration-300
              ${
                isActive
                  ? "bg-[#303030]/90  text-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.8)] scale-[1.02]"
                  : " "
              }
              group overflow-hidden 
              `}
          >
            {!isActive && (
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-400 ease-in-out bg-white/4 z-0"></span>
            )}
            <span className="relative z-10  transition-colors duration-300">
              {t}
            </span>
          </button>
        );
      })}
    </div>
  );
}
