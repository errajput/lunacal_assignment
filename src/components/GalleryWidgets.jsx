"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const sample = [
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
  "/Rectangle-5160.png",
];

export default function GalleryWidget() {
  const [images, setImages] = useState(sample);
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

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="px-6 py-3 rounded-2xl bg-[#0f1112]/90 text-white font-medium shadow-inner">
          Gallery
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={addImage}
            className="px-5 py-3 rounded-full bg-[#ffffff]/5 backdrop-blur-sm hover:bg-[#ffffff]/10 transition-all duration-300 
            uppercase font-bold text-xs
            shadow-[-0.5px_-0.5px_6.9px_0_rgba(255,255,255,0.25),9px_10px_7.1px_0_rgba(0,0,0,0.4),inset_0px_0px_48.91px_0px_rgba(255,255,255,0.05),inset_0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)]
            "
          >
            + Add Image
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-220)}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-[#0f1112]/40 hover:bg-[#0f1112]/70 transition-all duration-300"
            >
              ◀
            </button>
            <button
              onClick={() => scroll(220)}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-[#0f1112]/40 hover:bg-[#0f1112]/70 transition-all duration-300"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-3 overflow-hidden pb-2 ">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`gallery-${i}`}
            width={165}
            height={139}
            className="object-cover rounded-2xl 
              
              min-w-[165px] overflow-hidden p-1 shadow-inner 
              transition-transform duration-300
             hover:scale-[1.1]
            hover:-rotate-5
            filter 
            saturate-0
            hover:saturate-[0.95]
            hover:sepia-[0.2]
              "
          />
        ))}
      </div>
    </>
  );
}
