import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  tone?: "ink" | "white";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  tone = "ink",
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const isWhite = tone === "white";

  return (
    <div className={clsx("mb-12 lg:mb-14 max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={clsx(
            "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]",
            isWhite ? "text-[var(--accent-tint)]" : "text-[var(--accent)]"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15]",
          isWhite ? "text-white" : "text-[var(--ink)]"
        )}
      >
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-[var(--accent)]">{highlight}</span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-[15px] leading-7 sm:text-lg sm:leading-8",
            isWhite ? "text-white/70" : "text-[var(--body)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
