"use client";

import Header from "@/components/Header";
import { useUser } from "@/context/UserContext";

export default function Profile() {
    const { userData } = useUser();

    const SessionIcon = () => (
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <img src="/icon_session.png" alt="Session" className="w-full h-full object-contain" />
        </div>
    );

    const PasswordIcon = () => (
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <img src="/icon_password.png" alt="Change Password" className="w-full h-full object-contain" />
        </div>
    );

    const PrivacyIcon = () => (
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <img src="/icon_privacy.png" alt="Privacy" className="w-full h-full object-contain" />
        </div>
    );

    const LogoutIcon = () => (
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <img src="/icon_logout.png" alt="Logout" className="w-full h-full object-contain" />
        </div>
    );

    const settingsItems = [
        { label: "Session", component: SessionIcon },
        { label: "Change Password", component: PasswordIcon },
        { label: "Privacy", component: PrivacyIcon },
        { label: "Logout", component: LogoutIcon },
    ];

    return (
        <div className="flex flex-col min-h-full bg-white relative">
            <Header title="Profile" />

            {/* Profile Info Section - Exact match to screenshot 1 */}
            <div className="bg-gradient-to-b from-[#f2f2f2] to-[#e6e6e6] flex flex-col items-center pt-[9px] pb-[19px] relative shadow-[inset_0_-1px_3px_rgba(0,0,0,0.05)]" >

                <div className="relative mt-2">
                    <div className="w-[100px] h-[100px] rounded-full border-[3px] border-white overflow-hidden bg-white shadow-md flex items-center justify-center">
                        {userData.profileImage ? (
                            <img src={userData.profileImage} alt="Profile" className="w-[94px] h-[94px] rounded-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                {/* Placeholder fallback */}
                            </div>
                        )}
                    </div>
                </div>

                <h2 className="mt-4 font-[800] text-[#333] text-[13px] uppercase flex items-center gap-2">
                    {userData.name}
                </h2>
                <div className="text-[#333] text-[14px] font-[700] text-center px-6 mt-1 leading-[1.3] flex flex-col">
                    <span>Roll. No: {userData.rollNo}, 2024-BE-CSE-AI-4 SEM</span>
                    <span>4 SEM</span>
                </div>
                <span className="text-[#888] text-[12px] mt-1 font-medium">Profile</span>
            </div>

            {/* Settings Grid */}
            <div className="px-6 py-6">
                <div className="flex items-center mb-6">
                    <span className="text-[12px] font-bold text-[#555] uppercase mr-3 tracking-normal">SETTINGS</span>
                    <div className="h-[1px] bg-gray-200 flex-1"></div>
                </div>

                <div className="grid grid-cols-3 gap-y-8 gap-x-2">
                    {settingsItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <item.component />
                            <span className="text-[12px] font-[500] text-center text-[#222] leading-tight">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
