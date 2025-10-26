import React from "react";

export default function RightWidgets({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl p-6 border border-white/5 backdrop-blur-md bg-linear-to-b from-[rgba(255,255,255,0.02)] to-[rgba(0,0,0,0.15)] ${className}`}
      style={{
        boxShadow:
          "0 18px 40px rgba(2,6,10,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
      }}
    >
      {children}
    </div>
  );
}
