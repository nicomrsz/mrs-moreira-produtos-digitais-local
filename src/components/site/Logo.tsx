import { useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <span
        role="img"
        aria-label="MRS MOREIRA"
        className={cn(
          "inline-flex items-center whitespace-nowrap text-base font-black tracking-[0.16em]",
          tone === "dark" ? "text-foreground" : "text-white",
          className,
        )}
      >
        MRS MOREIRA<span className="ml-0.5 self-start text-[0.55em]">®</span>
      </span>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="MRS MOREIRA®"
      width={1000}
      height={265}
      className={cn(
        "block h-auto w-[130px] object-contain select-none",
        tone === "dark" ? "brightness-0" : "brightness-0 invert",
        className,
      )}
      draggable={false}
      onError={() => setImageFailed(true)}
    />
  );
}
