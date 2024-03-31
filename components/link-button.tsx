import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkButtonProps {
  label: string;
  href: string;
}

export function LinkButton({ label, href }: LinkButtonProps) {
  return (
    <>
      <Link
        href={href}
        className={cn(
          "px-2 py-1"
          //   "bg-neutral-50  transition-all border-2 ",
          // "shadow-[4px_4px_2px_1px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_1px_2px_rgba(0,0,0,0.2)]"
        )}
      >
        {label}
      </Link>
    </>
  );
}
