import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface LinkButtonProps {
  label: string;
  href: string;
  disabled?: boolean;
  hint?: string;
  className?: string;
}

export function LinkButton({
  label,
  href,
  disabled = false,
  hint,
  className,
}: LinkButtonProps) {
  return (
    <>
      <Button
        variant="ghost"
        disabled={disabled}
        className={cn(
          "hover:bg-inherit transition-all p-0",
          disabled && "cursor-not-allowed",
          className
        )}
        asChild
      >
        <Link
          href={href}
          className={cn(
            "px-1 py-1 font-medium text-base inline-flex items-center",
            "group underline",
            disabled
              ? "pointer-events-none no-underline text-gray-500 hover:text-gray-500"
              : "hover:drop-sm hover:scale-[1.02] hover:rotate-1 hover:-translate-x-1 transition-all"
          )}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          target="_blank"
        >
          <div className={cn(disabled ? "line-through" : "underline")}>
            {label}
          </div>
          {disabled ? (
            <div className="ml-2 bg-blue-50 border border-blue-200 px-1 pt-1 pb-0.5 rounded text-blue-600 text-[9px] tracking-tighter leading-[6px]">
              <div>coming</div>
              <div>soon</div>
            </div>
          ) : hint ? (
            <div className="ml-2 bg-blue-50 border border-blue-200 px-1 pt-1 pb-0.5 rounded text-blue-600 text-[9px] tracking-tighter leading-[6px]">
              {hint}
            </div>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "transition-all ",
                !disabled &&
                  "group-hover:translate-x-1 group-hover:-translate-y-1"
              )}
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                strokeWidth="4"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </Link>
      </Button>
    </>
  );
}
