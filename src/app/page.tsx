"use client";

import Header from "@/components/Header";
import { FileText } from "lucide-react";

export default function Home() {
  const circulars = [
    {
      title: "RE-APPEAR RESULT OF BCA BATCH 2023",
      content: "The REAPPEAR result(s) of the following programs have been declared;1. BCA BATCH 2023 1ST SEM RE-APPEAR DECEMBER 2025  2.BCA...",
    },
    {
      title: "Seating Plan 25.02.2026 & 26.02.2026 Morning & Evening Session",
      content: "Seating Plan 25.02.2026 & 26.02.2026 Morning & Evening Session",
    },
    {
      title: "Seating Plan for ST-1 for Batch 2024 and 2025 (AIML & AIFT), scheduled on 25th,26th and 27th February 2026.",
      content: "Dear Students, Kindly find the attachment for your references.      Regards",
    },
    {
      title: "REGULAR RESULT OF BE MCE BATCH 2022 7TH SEM",
      content: "The Regular result(s) of the following program has been declared;1. BE MCE BATCH 2022 7TH SEMESTER REGULAR DECEMBER 2025",
    },
    {
      title: "REGULAR RESULT OF BE EE BATCH 2022 7TH SEM",
      content: "The Regular result(s) of the following program has been declared;1. BE EE BATCH 2022 7TH SEMESTER REGULAR DECEMBER 2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      <Header showProfileLink={true} />

      <div className="flex-1 w-full bg-white relative pb-10">

        {/* Date Separator */}
        <div className="flex items-center justify-center mt-6 mb-8 px-10">
          <div className="h-[1px] bg-gray-300 flex-1"></div>
          <span className="px-5 text-[#333] font-medium text-[16px]">Feb 24, Tuesday</span>
          <div className="h-[1px] bg-gray-300 flex-1"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-[18px] pr-4">

          {/* Vertical Line Behind Icons */}
          <div className="absolute left-[38px] top-6 bottom-0 w-[4px] bg-[#e2e8f0]"></div>

          <div className="space-y-10 relative z-10">
            {circulars.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">

                {/* Timeline Icon */}
                <div className="w-[44px] h-[44px] shrink-0 bg-[#5ca89e] rounded-full flex items-center justify-center shadow-sm">
                  <FileText className="text-white" size={20} strokeWidth={1.5} />
                </div>

                {/* Content block */}
                <div className="flex-1 pt-1 pb-2">
                  <h3 className="font-bold text-[#333] text-[15px] leading-[1.3] uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#555] text-[15px] leading-relaxed whitespace-pre-wrap">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
