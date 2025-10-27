"use client";

import React, { useState, useLayoutEffect, useRef } from "react";

export default function TabsWidget({ tabs = [], active, onChange }) {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const activeBtn = container?.querySelector(`[data-tab="${active}"]`);
    if (activeBtn) {
      requestAnimationFrame(() => {
        setIndicatorStyle({
          width: `${activeBtn.offsetWidth}px`,
          left: `${activeBtn.offsetLeft}px`,
        });
      });
    }
  }, [active, tabs]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#0f0f0f] rounded-[18px] flex items-center gap-1.5 flex-wrap p-1.5 mr-[53px] "
    >
      <span
        className="select-none absolute top-0 px-6 py-1 h-9 mt-1.5 rounded-[14px] transition-all duration-500 ease-[cubic-bezier(0.45,0,0.55,1)] 
        shadow-[20px_20px_36px_rgba(0,0,0,1.0),-5px_-16px_32px_rgba(255,255,255,0.05)] "
        style={{
          width: indicatorStyle.width,
          left: indicatorStyle.left,
          background: "#303030",
        }}
      />

      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            data-tab={t}
            onClick={() => onChange(t)}
            aria-pressed={isActive}
            className={`
              text-gray-400
              relative z-10 cursor-pointer w-[32%] px-5 py-2 rounded-xl text-sm font-medium select-none
              transition-all duration-700 overflow-hidden group
              ${isActive ? "text-white scale-[1.02] " : " "}
            `}
          >
            {!isActive && (
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 
                transform transition-transform duration-400 ease-in-out bg-white/5 z-0"
              />
            )}
            <span className="relative z-10 transition-colors duration-300">
              {t}
            </span>
          </button>
        );
      })}
    </div>
  );
}
