"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, Bell, Menu } from 'lucide-react';

const BottomNav = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', iconSrc: '/nav_home.png', href: '/' },
        { label: 'Messages', iconSrc: '/nav_msg.png', href: '/messages', badge: 2 },
        { label: 'Notifications', iconSrc: '/nav_notif.png', href: '/notifications' },
        { label: 'Menu', iconComponent: Menu, href: '/menu' },
    ];

    return (
        <div className="w-full flex flex-col bg-white shrink-0 relative z-[9999] shadow-[0_-2px_6px_rgba(0,0,0,0.03)]">
            <nav className="w-full border-t border-gray-200 flex justify-around items-center h-[55px]">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex flex-col items-center justify-center w-full h-full"
                        >
                            <div className="relative">
                                <div className="flex items-center justify-center" style={{ width: 24, height: 24 }}>
                                    {item.iconSrc ? (
                                        <div
                                            style={{
                                                WebkitMaskImage: `url(${item.iconSrc})`,
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                backgroundColor: isActive ? '#e31e24' : '#555',
                                                width: '22px',
                                                height: '22px'
                                            }}
                                        />
                                    ) : (
                                        item.iconComponent && <item.iconComponent size={24} strokeWidth={isActive ? 2.5 : 2} color={isActive ? '#e31e24' : '#555'} />
                                    )}
                                </div>
                                {item.badge && (
                                    <span className="absolute -top-1 -right-2 bg-[#e31e24] text-white text-[9px] font-bold rounded-full min-w-[16px] h-[16px] px-[4px] flex items-center justify-center">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <span className={`text-[10px] mt-1 ${isActive ? 'text-[#e31e24] font-bold' : 'text-[#555]'}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
            {/* iOS Home Indicator Safe Area Space */}
            <div className="w-full h-[33px] bg-white shrink-0"></div>
        </div>
    );
};

export default BottomNav;
