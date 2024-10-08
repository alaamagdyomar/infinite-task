"use client";
import React, { createContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type BarContext = {
  barStatus: boolean;
  updateBar: (status: boolean) => void;
};

export const BarContext = createContext<BarContext>({
  barStatus: false,
  updateBar: () => {},
});

export const AppProvider = ({ children }: ThemeContextProviderProps) => {
  const [barStatus, setProgressBar] = useState(false);

  const updateBar = (state: boolean) => {
    setProgressBar(state);
  };

  return (
    <BarContext.Provider value={{ barStatus, updateBar }}>
      {children}
    </BarContext.Provider>
  );
};
