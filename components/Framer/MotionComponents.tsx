import { motion } from "framer-motion";
import React, { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export function LeftToRightTitle({ children, className, id }: Props) {
  return (
    <motion.h1
      initial={{
        x: -200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`${className}`}
    >
      {children}
    </motion.h1>
  );
}

export function LeftToRightSubtitle({ children, className, id }: Props) {
  return (
    <motion.h2
      id={id}
      initial={{
        x: -200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      className={`${className}`}
    >
      {children}
    </motion.h2>
  );
}

export const FadedDiv = forwardRef<HTMLDivElement, Props>(
  ({ children, className, id }, ref) => {
    return (
      <motion.div
        ref={ref}
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

FadedDiv.displayName = "FadedDiv";

export function FadedTitle({ children, className, id }: Props) {
  return (
    <motion.h1
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.h1>
  );
}

export function FadedSubtitle({ children, className, id }: Props) {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function FadedH3({ children, className, id }: Props) {
  return (
    <motion.h3
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.h3>
  );
}

export function FadedH4({ children, className, id }: Props) {
  return (
    <motion.h3
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.h3>
  );
}

export function FadedSpan({ children, className, id }: Props) {
  return (
    <motion.span
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.span>
  );
}

export function FadedParagraph({ children, className, id }: Props) {
  return (
    <motion.p
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.p>
  );
}

export function FadedListItem({ children, className, id }: Props) {
  return (
    <motion.li
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.li>
  );
}

export function ScaledDiv({ children, className, id }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}
