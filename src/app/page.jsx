"use client";

import React, { useState } from "react";
import RightWidgets from "@/components/RightWidgets";
import TabsWidget from "@/components/TabsWidget";
import GalleryWidget from "@/components/GalleryWidgets";
import Image from "next/image";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Recommended");
  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <main className="min-h-screen bg-[#282f35] text-gray-200 md:p-12 p-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left half - empty card */}
        <div className="hidden md:block">
          <div
            className="h-[560px] rounded-2xl border border-white/5 bg-[#616161]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.02), 0 30px 60px rgba(2,6,10,0.7)",
            }}
          />
        </div>

        {/* Right column */}
        <div className="space-y-3">
          <RightWidgets>
            <div className="flex bg-[#363C43] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] rounded-2xl">
              <div className="w-[8%] mt-5 ml-3">
                {/* Floating icons */}
                <div className="flex flex-col gap-22 text-gray-400">
                  <Image
                    src="/Vector.png"
                    alt="gallery-image"
                    width={18}
                    height={14}
                  />

                  <Image
                    src="/Frame-1000002250.png"
                    alt="gallery-image"
                    width={18}
                    height={14}
                  />
                </div>
              </div>
              <div className="w-[92%] mt-[17px] ">
                {/* Tabs */}
                <TabsWidget
                  tabs={tabs}
                  active={activeTab}
                  onChange={setActiveTab}
                />

                {/* Text content */}
                <div className="mt-6 h-40 overflow-auto pr-3 text-[#969696] leading-7 mr-[13px]">
                  <p>
                    Hello! I am Dave, your sales rep here from Salesforce. I
                    have been working at this awesome company for 3 years now.
                  </p>
                  <p className="mt-3">
                    I was born and raised in Albany, NY & have been living in
                    Santa Carla for the past 10 years with my wife Tiffany and
                    my 4-year-old twin daughters — Emma and Ella. Both of them
                    are just starting school, so my calendar is usually blocked
                    between 9-10 AM.
                  </p>
                  <p>
                    Hello! I am Dave, your sales rep here from Salesforce. I
                    have been working at this awesome company for 3 years now.
                  </p>
                  <p className="mt-3">
                    I was born and raised in Albany, NY & have been living in
                    Santa Carla for the past 10 years with my wife Tiffany and
                    my 4-year-old twin daughters — Emma and Ella. Both of them
                    are just starting school, so my calendar is usually blocked
                    between 9-10 AM.
                  </p>
                  <p className="mt-3">
                    I was born and raised in Albany, NY & have been living in
                    Santa Carla for the past 10 years with my wife Tiffany and
                    my 4-year-old twin daughters — Emma and Ella. Both of them
                    are just starting school, so my calendar is usually blocked
                    between 9-10 AM.
                  </p>
                </div>
              </div>
            </div>
          </RightWidgets>

          {/* Divider */}
          <div className="h-1 bg-[rgba(255,255,255,0.05)] bg-linear-to-b from-[rgba(164,165,165,0.6)] to-[rgba(136,137,138,0.6) rounded-full mt-5 w-120 ml-12 shadow-[0_4px_4px_rgba(0,0,0,0.33)]" />

          {/* Gallery */}
          <RightWidgets>
            <div className="flex bg-[#363C43] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] rounded-2xl">
              <div className="w-[8%] mt-5 ml-3">
                {/* Floating icons */}
                <div className="flex flex-col gap-22 text-gray-400">
                  <Image
                    src="/Vector.png"
                    alt="gallery-image"
                    width={18}
                    height={14}
                  />

                  <Image
                    src="/Frame-1000002250.png"
                    alt="gallery-image"
                    width={18}
                    height={14}
                  />
                </div>
              </div>
              <div className="w-[92%] mt-[17px]">
                <GalleryWidget />
              </div>
            </div>
          </RightWidgets>
          <div className="h-1 bg-[rgba(255,255,255,0.05)] bg-linear-to-b from-[rgba(164,165,165,0.6)] to-[rgba(136,137,138,0.6) rounded-full mt-5 w-120 ml-12 shadow-[0_4px_4px_rgba(0,0,0,0.33)]" />
        </div>
      </div>
    </main>
  );
}
