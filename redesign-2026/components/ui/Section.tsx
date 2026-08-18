import clsx from "clsx";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "white" | "tint" | "chrome";
  id?: string;
};

const backgrounds = {
  white: "bg-white",
  tint: "bg-[var(--surface)]",
  chrome: "bg-[var(--chrome)] text-white",
};

export default function Section({ children, className, background = "white", id }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 lg:py-28", backgrounds[background], className)}>
      {children}
    </section>
  );
}
