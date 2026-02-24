"use client";

import Header from "@/components/Header";
import { Mail, Plus } from "lucide-react";

export default function Messages() {
    const items = [
        { label: "Staff Conversations", icon: Mail, badge: 2, color: "text-[#69a49c]" },
        { label: "Sent Messages", icon: Mail, color: "text-[#9d81ba]" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white relative">
            <Header title="Messages" />

            <div className="divide-y divide-gray-100">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white active:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`${item.color}`}>
                                <item.icon size={28} />
                            </div>
                            <span className="text-[#444] text-[15px]">{item.label}</span>
                        </div>
                        {item.badge && (
                            <span className="text-blue-600 font-bold text-sm mr-2">{item.badge}</span>
                        )}
                    </div>
                ))}
            </div>

            {/* FAB */}
            <button className="fixed bottom-20 right-6 w-14 h-14 bg-[#e31e24] text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform z-10">
                <Plus size={32} />
            </button>
        </div>
    );
}
