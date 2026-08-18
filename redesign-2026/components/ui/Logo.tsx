import clsx from "clsx";
import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
  markOnly?: boolean;
};

// The circular mic-in-Nepal-flag mark, same file used on the live site's
// header. It's a square JPG with a dark backdrop baked in, so it's cropped
// to a circle here rather than redrawn.
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={clsx("relative block shrink-0 overflow-hidden rounded-full", className)}>
      <Image src="/logo.jpg" alt="" fill sizes="40px" className="object-cover" />
    </span>
  );
}

export default function Logo({ className, tone = "light", markOnly = false }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9" />
      {!markOnly && (
        <span className={clsx("font-semibold tracking-tight", isDark ? "text-white" : "text-[var(--ink)]")}>
          Voice Tech <span className="text-[var(--accent)]">Nepal</span>
        </span>
      )}
    </span>
  );
}
