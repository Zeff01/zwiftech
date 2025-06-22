"use client";
import React from "react";
import { useEffect, useState, createContext, useContext } from "react";
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

  // Handle initial page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setCanRender(true), 300); // sync with fade-out
      }, 2500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Handle route transitions
  useEffect(() => {
    if (!canRender) return;

    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000); // short loader for transitions
    return () => clearTimeout(timeout);
  }, [pathname, canRender]);

  return (
    <PageLoaderContext.Provider value={{ isLoading }}>
      {isLoading && <PageLoader />}
      {canRender && children}
    </PageLoaderContext.Provider>
  );
}
