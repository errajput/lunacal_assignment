"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ScrollArrows from "./ScrollArrow";

const sample = [
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
];

export default function GalleryWidget() {
  const [images, setImages] = useState(sample);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);

  function addImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files?.[0];
      if (file) setImages((prev) => [URL.createObjectURL(file), ...prev]);
    };
    input.click();
  }

  function scroll(delta) {
    containerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  }

  // Update arrow button active state
  useEffect(() => {
    const container = containerRef.current;
    const updateScroll = () => {
      if (!container) return;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    };
    container?.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => container?.removeEventListener("scroll", updateScroll);
  }, [images]);

  return (
    <>
      <div className="flex items-center justify-between mb-4 mr-[23px]">
        <div className="px-6 py-3 ml-2 rounded-2xl bg-[#0f1112]/90 text-white font-medium shadow-inner">
          Gallery
        </div>

        <div className="flex items-center gap-3 mr-5">
          <button
            onClick={addImage}
            className="px-5 py-3 rounded-full bg-[#ffffff]/5 backdrop-blur-sm hover:bg-[#ffffff]/10 transition-all duration-300 
            uppercase font-bold text-xs
            shadow-[-0.5px_-0.5px_6.9px_0_rgba(255,255,255,0.25),9px_10px_7.1px_0_rgba(0,0,0,0.4),inset_0px_0px_48.91px_0px_rgba(255,255,255,0.05),inset_0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)]
            "
          >
            + Add Image
          </button>

          <ScrollArrows
            onLeftClick={() => scroll(-220)}
            onRightClick={() => scroll(220)}
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
          />
        </div>
      </div>

      <div className="min-h-42 mr-3">
        <div ref={containerRef} className="flex overflow-hidden pb-3 ">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`gallery-${i}`}
              width={159}
              height={139}
              className="mt-6 ml-3 object-cover rounded-2xl 
  min-w-[155px] overflow-hidden
  filter saturate-0
  transition-transform duration-500 ease-in-out
  hover:scale-110 hover:-rotate-3 hover:-translate-y-2
  hover:saturate-[0.95] hover:sepia-[0.2]
  hover:shadow-[12px_13px_39px_9px_rgba(10,10,10,0.62),_-9.15px_-18.5px_54.89px_-142px_#617892]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
