import logoPreto from "@/assets/mrs-moreira-logo-preto.png.asset.json";
import logoBranco from "@/assets/mrs-moreira-logo-branco.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const src = tone === "dark" ? logoPreto.url : logoBranco.url;
  return (
    <img
      src={src}
      alt="MRS MOREIRA®"
      width={1000}
      height={265}
      className={cn("h-auto w-[130px] select-none", className)}
      draggable={false}
    />
  );
}
