import MainMenu from "@/components/dashboard/MainMenu";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />

      <div className="overflow-auto py-2 px-4">
        <h1 className="mb-4">Welcome back Tom!</h1>
        {children}
      </div>
    </div>
  );
}
