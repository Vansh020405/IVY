"use client";

import Header from "@/components/Header";

export default function Notifications() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header title="Notifications" />

            <div className="p-4 bg-white border-b border-gray-100 flex flex-col gap-1">
                <h2 className="font-bold text-[#444] text-[15px]">You have 102 new Circulars</h2>
                <p className="text-gray-400 text-[13px]">Tap here to view them</p>
            </div>

            <div className="flex-1 bg-white">
                {/* Rest is empty as per screenshot */}
            </div>
        </div>
    );
}
