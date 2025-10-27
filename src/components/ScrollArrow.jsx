"use client";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight, GoArrowUpLeft } from "react-icons/go";

export default function ScrollArrows({
  onLeftClick,
  onRightClick,
  canScrollLeft,
  canScrollRight,
}) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (direction) => {
    setActiveButton(direction);
    if (direction === "left" && canScrollLeft) onLeftClick();
    if (direction === "right" && canScrollRight) onRightClick();
  };

  return (
    <div className="flex gap-2">
      {/* Left Arrow */}
      <button
        onClick={() => handleClick("left")}
        disabled={!canScrollLeft}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer duration-500 ease-in-out
          ${
            !canScrollLeft
              ? "bg-[#6c88a8] text-white shadow-[-4px_-8px_10px_rgba(107,144,195,0.35),4px_4px_10px_rgba(0,0,0,0.8)] "
              : activeButton === "left"
              ? "bg-[#1e2630]  shadow-inner shadow-black/60 "
              : "bg-[#0f1112]/40 hover:bg-[#0f1112]/70 shadow-[-4px_-8px_10px_rgba(107,144,195,0.10),4px_4px_10px_rgba(0,0,0,0.8)]"
          }`}
      >
        {/* <Image src="/Group-28.svg" alt="left-arrow" width={13} height={10} /> */}
        <GoArrowLeft alt="left-arrow" width={13} height={10} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => handleClick("right")}
        disabled={!canScrollRight}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer duration-500 ease-in-out
          ${
            !canScrollRight
              ? " bg-[#6c88a8] text-white shadow-[-4px_-8px_10px_rgba(107,144,195,0.35),4px_4px_10px_rgba(0,0,0,0.8)]"
              : activeButton === "right"
              ? "bg-[#1e2630] shadow-inner shadow-black/60"
              : "bg-[#0f1112]/40 hover:bg-[#0f1112]/70 shadow-[-4px_-8px_10px_rgba(107,144,195,0.10),4px_4px_10px_rgba(0,0,0,0.8)]"
          }`}
      >
        <GoArrowRight alt="left-arrow" width={13} height={10} />
        {/* <Image src="/Group-28.png" alt="right-arrow" width={13} height={10} /> */}
      </button>
    </div>
  );
}
