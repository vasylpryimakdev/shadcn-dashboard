import { cn } from "@/lib/utils";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
      sidebar
    </nav>
  );
}
