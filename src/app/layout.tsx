import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "CHALKPAD PRO",
  description: "Campus Management System",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white h-[100dvh] antialiased flex flex-col m-0 p-0 overflow-hidden">
        <UserProvider>
          <div className="flex-1 w-full bg-white flex flex-col h-full relative overflow-hidden">
            <main className="flex-1 w-full relative overflow-y-auto overflow-x-hidden">
              {children}
            </main>
            <BottomNav />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
