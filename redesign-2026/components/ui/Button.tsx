"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { buttonInteraction } from "@/lib/animations";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: () => void;
  disabled?: never;
  target?: string;
  rel?: string;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseStyles =
  "group relative inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-[background-color,box-shadow,border-color,color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[0_10px_28px_rgba(214,0,58,0.28)] hover:bg-[var(--accent-hover)] hover:shadow-[0_16px_38px_rgba(214,0,58,0.36)]",
  secondary:
    "border border-[var(--border)] bg-white text-[var(--ink)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]",
  ghost: "bg-transparent text-white/90 hover:bg-white/10",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.3)] hover:bg-[#1fbd5a]",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-base",
};

const MotionLink = motion.create(Link);

export default function Button({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...rest
}: ButtonProps & { target?: string; rel?: string }) {
  const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <MotionLink
        href={href}
        onClick={onClick}
        className={classes}
        variants={buttonInteraction}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      variants={buttonInteraction}
      initial="rest"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
    >
      {children}
    </motion.button>
  );
}
