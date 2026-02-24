"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserData {
  name: string;
  rollNo: string;
  stream: string;
  semester: string;
  profileImage: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const defaultUser: UserData = {
  name: "VANSH BANSAL",
  rollNo: "2410992641",
  stream: "2024-BE-CSE-AI-4 SEM 4 SEM",
  semester: "4 SEM",
  profileImage: "/profile.jpg", // Default placeholder
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData>(defaultUser);

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const updateUserData = (data: Partial<UserData>) => {
    const newData = { ...userData, ...data };
    setUserData(newData);
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
