"use client";

import { useUser } from '@/context/UserContext';
import { UserCog } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
    title?: string;
    showProfileLink?: boolean;
}

const Header = ({ title, showProfileLink = false }: HeaderProps) => {
    const { userData } = useUser();

    return (
        <div className="sticky top-0 z-50 w-full flex flex-col">
            {/* iOS Status Bar Safe Area Space */}
            <div className="w-full h-[7px] bg-white shrink-0"></div>
            <header className="bg-[#e31e24] text-white h-[57px] flex items-center px-4 w-full shadow-md shrink-0">
                {title ? (
                    <>
                        <div className="flex-1 flex justify-center items-center">
                            <h1 className="text-[17px] font-bold tracking-normal">
                                {title}
                            </h1>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex-1 overflow-hidden pr-2">
                            <h1 className="text-[16px] font-semibold truncate tracking-tight uppercase">
                                {`${userData.name}(${userData.stream})`}
                            </h1>
                        </div>
                        {showProfileLink && (
                            <Link href="/profile" className="flex flex-col items-center justify-center w-12 h-full active:opacity-70 transition-opacity">
                                <UserCog size={26} strokeWidth={2} className="mb-[2px]" />
                                <span className="text-[10px] font-medium leading-none">Profile</span>
                            </Link>
                        )}
                    </>
                )}
            </header>
        </div>
    );
};

export default Header;
