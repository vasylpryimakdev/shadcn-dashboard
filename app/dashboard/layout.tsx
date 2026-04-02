"use client";

import MainMenu from "@/components/dashboard/MainMenu";
import MenuTitle from "@/components/dashboard/MenuTitle";

import { ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
        </div>
      )}

      <div className="overflow-auto py-2 px-4">
        <h1 className="mb-4">Welcome back Tom!</h1>
        {children}
      </div>
    </div>
  );
}
