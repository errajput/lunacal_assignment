"use client";

import React, { useState } from "react";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";
import RightWidgets from "@/components/RightWidgets";
import TabsWidget from "@/components/TabsWidget";
import GalleryWidget from "@/components/GalleryWidgets";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Recommended");
  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <main className="min-h-screen bg-[#30383f] text-gray-200 md:p-12 p-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left half - empty card */}
        <div className="hidden md:block">
          <div
            className="h-[560px] rounded-2xl border border-white/5 bg-linear-to-b from-[rgba(164,165,165,0.6)] to-[rgba(136,137,138,0.6)]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.02), 0 30px 60px rgba(2,6,10,0.7)",
            }}
          />
        </div>

        {/* Right column */}
        <div className="space-y-3">
          <RightWidgets>
            {/* Tabs */}
            <div className="flex items-start justify-between">
              <TabsWidget
                tabs={tabs}
                active={activeTab}
                onChange={setActiveTab}
              />
            </div>

            {/* Text content */}
            <div className="mt-6 h-20 overflow-auto pr-3 text-gray-300 leading-7">
              <p>
                Hello! I am Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <p className="mt-3">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters — Emma and Ella. Both of them are just
                starting school, so my calendar is usually blocked between 9–10
                AM.
              </p>
            </div>

            {/* Floating icons */}
            <div className="absolute top-4 left-4 flex flex-col gap-3 text-gray-400">
              <HiOutlineQuestionMarkCircle className="text-xl opacity-80 hover:text-white transition-colors duration-300" />
              <BsGrid3X3Gap className="text-lg opacity-70 hover:text-white transition-colors duration-300" />
            </div>
          </RightWidgets>

          {/* Divider */}
          <div className="h-1 bg-[rgba(255,255,255,0.05)] bg-linear-to-b from-[rgba(164,165,165,0.6)] to-[rgba(136,137,138,0.6) rounded-full mt-5 w-120 ml-12" />
          <GalleryWidget />
        </div>
      </div>
    </main>
  );
}
