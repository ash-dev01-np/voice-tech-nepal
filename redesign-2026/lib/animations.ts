import { Variants, Transition } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 340,
  damping: 26,
};

export const viewport = { once: true, amount: 0.3 };

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, when: "beforeChildren" },
  },
};

// Plain opacity + a small rise — no blur filter, no long delays. Motion
// here is a light nudge that content has arrived, not a production effect.
export const revealMedium: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export const revealSmall: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
};

export const cardHover: Variants = {
  rest: { y: 0 },
  hover: { y: -3, transition: { duration: 0.25, ease } },
};

export const buttonInteraction: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: springSnappy },
  tap: { scale: 0.97, transition: { duration: 0.15 } },
};
