"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import RightWidgets from "./RightWidgets";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";

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
      <RightWidgets>
        {/* Floating icons */}
        <div className="absolute top-4 left-4 flex flex-col gap-3 text-gray-400">
          <HiOutlineQuestionMarkCircle className="text-xl opacity-80 hover:text-white transition-colors duration-300" />
          <BsGrid3X3Gap className="text-lg opacity-70 hover:text-white transition-colors duration-300" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="px-6 py-3 rounded-2xl bg-[#0f1112]/90 text-white font-medium shadow-inner">
            Gallery
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={addImage}
              className="px-4 py-2 rounded-full bg-[#ffffff]/5 backdrop-blur-sm hover:bg-[#ffffff]/10 transition-all duration-300"
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

        <div
          ref={containerRef}
          className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="min-w-[165px] rounded-3xl overflow-hidden p-1 shadow-inner  hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                width={165}
                height={139}
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </RightWidgets>
      <div className="h-1 bg-[rgba(255,255,255,0.05)] bg-linear-to-b from-[rgba(164,165,165,0.6)] to-[rgba(136,137,138,0.6) rounded-full mt-5 w-120 ml-12" />
    </>
  );
}
