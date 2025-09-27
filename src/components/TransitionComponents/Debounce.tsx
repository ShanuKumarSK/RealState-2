'use client';

import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

type Props = {
  children: ReactNode;
  yOffset?: number;        // initial jump height (default: -300)
  bounces?: number;        // how many bounces (default: 6)
  duration?: number;       // total duration (default: 1.5s)
  easing?: [number, number, number, number]; // custom cubic bezier ease (default: easeOutBounce-ish)
};

export default function Debounce({
  children,
  yOffset = -300,
  bounces = 6,
  duration = 1.5,
  easing = [0.22, 1, 0.36, 1],
}: Props) {
  const bounceArray = useMemo(() => {
    const bouncesArr = [];
    let current = yOffset;
    for (let i = 0; i < bounces; i++) {
      bouncesArr.push(current, 0);
      current = current / 2; // reduce intensity
    }
    return bouncesArr;
  }, [yOffset, bounces]);

  return (
    <motion.div
      initial={{ y: yOffset, opacity: 0 }}
      animate={{ y: bounceArray, opacity: 1 }}
      transition={{
        duration,
        ease: easing as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}
