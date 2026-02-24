"use client";

import Header from "@/components/Header";
import { ChevronRight, Calendar, Bookmark, GraduationCap, IdCard, UserCog, Camera, X } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useState, useRef } from "react";

export default function Menu() {
    const { userData, updateUserData } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState(userData);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const sections = [
        {
            title: "ACCOUNT PREFERENCES",
            items: [
                { label: "Update Profile Data", icon: UserCog, color: "bg-[#e31e24]", action: () => { setEditForm(userData); setIsEditing(true); } },
            ]
        },
        {
            title: "FREQUENTLY USED",
            items: [
                { label: "Apply Duty/Medical Leave", icon: IdCard, color: "bg-[#ff8a65]" },
                { label: "View Details Gatepass", icon: IdCard, color: "bg-[#4db6ac]" },
                { label: "Report Card", icon: Bookmark, color: "bg-[#7986cb]" },
                { label: "Attendance", icon: Calendar, color: "bg-[#ff8a65]" },
                { label: "Apply Gatepass", icon: IdCard, color: "bg-[#4fc3f7]" },
            ]
        },
        {
            title: "ACADEMICS",
            items: [
                { label: "Time Table", icon: Calendar, color: "bg-[#009688]" },
                { label: "Attendance", icon: Calendar, color: "bg-[#ff8a65]" },
                { label: "Attendance Subjectwise", icon: Calendar, color: "bg-[#ff8a65]" },
                { label: "Subjects", icon: GraduationCap, color: "bg-[#4fc3f7]" },
            ]
        }
    ];

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditForm((prev) => ({ ...prev, profileImage: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        updateUserData(editForm);
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col min-h-full bg-white relative">
            <Header title="Menu" />

            <div className="p-4 space-y-4 bg-gray-50 flex-1 overflow-y-auto">
                {sections.map((section, sIdx) => (
                    <div key={sIdx} className="bg-white shadow-sm border border-gray-100 rounded-[4px] overflow-hidden">
                        <div className="px-4 py-3 bg-white border-b border-gray-50">
                            <h2 className="text-[12px] font-bold text-[#666] uppercase tracking-wider">
                                {section.title}
                            </h2>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {section.items.map((item, iIdx) => (
                                <div
                                    key={iIdx}
                                    onClick={item.action}
                                    className="flex items-center justify-between px-4 py-[14px] active:bg-gray-50 transition-colors cursor-pointer group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`${item.color} w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm group-active:scale-95 transition-transform`}>
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-[#333] text-[15px] font-medium">{item.label}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-gray-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Profile Modal */}
            {isEditing && (
                <div className="absolute inset-0 z-[100] bg-black/60 flex flex-col justify-end">
                    <div className="bg-white w-full rounded-t-3xl shadow-2xl p-6 pb-12 animate-in slide-in-from-bottom duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[18px] font-bold text-gray-800">Edit Profile</h3>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 active:text-gray-600 p-1">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center mb-6 relative">
                            <div className="w-[100px] h-[100px] rounded-full border-[3px] border-gray-100 overflow-hidden bg-white shadow-sm flex items-center justify-center">
                                {editForm.profileImage ? (
                                    <img src={editForm.profileImage} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-gray-400"><Camera size={32} /></div>
                                )}
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-1/2 translate-x-10 translate-y-2 bg-[#e31e24] text-white p-[8px] rounded-full shadow-md active:scale-95 transition-transform"
                            >
                                <Camera size={16} />
                            </button>
                            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[12px] font-bold text-gray-500 uppercase">Full Name</label>
                                <input
                                    type="text"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-black font-semibold focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[12px] font-bold text-gray-500 uppercase">Roll Number</label>
                                <input
                                    type="text"
                                    value={editForm.rollNo}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, rollNo: e.target.value }))}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-black font-semibold focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[12px] font-bold text-gray-500 uppercase">Stream & Semester Details</label>
                                <input
                                    type="text"
                                    value={editForm.stream}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, stream: e.target.value }))}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-black font-semibold focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]"
                                    placeholder="e.g. 2024-BE-CSE-AI-4 SEM"
                                />
                            </div>

                            <button
                                onClick={handleSave}
                                className="w-full bg-[#e31e24] text-white py-3.5 mt-4 rounded-xl font-bold text-[15px] shadow-lg shadow-red-200 active:bg-red-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
