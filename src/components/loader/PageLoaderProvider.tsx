"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

const PageLoaderContext = createContext<{ isLoading: boolean }>({ isLoading: true });

export function usePageLoader() {
  return useContext(PageLoaderContext);
}

export default function PageLoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [canRender, setCanRender] = useState(false);
  const pathname = usePathname();

  // Initial load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setCanRender(true), 300); // match fade-out
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  // Page transitions
  useEffect(() => {
    if (!canRender) return;

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // quick fade loader between pages

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <PageLoaderContext.Provider value={{ isLoading }}>
      {isLoading && <PageLoader />}
      {canRender && children}
    </PageLoaderContext.Provider>
  );
}
