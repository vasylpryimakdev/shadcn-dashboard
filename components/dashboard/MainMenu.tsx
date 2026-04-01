import { cn } from "@/lib/utils";
import MenuTitle from "./MenuTitle";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
    </nav>
  );
}
