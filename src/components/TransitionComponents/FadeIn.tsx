
'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

type Props = {
    children: ReactNode | ReactNode[];
    stagger?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    duration?: number;
    className?: string;
};

const directionMap = {
    left: { x: -75, y: 0 },
    right: { x: 75, y: 0 },
    top: { x: 0, y: -75 },
    bottom: { x: 0, y: 75 },
};

export default function FadeIn({
    children,
    stagger = 0.15,
    direction = 'left',
    duration = 0.8,
    className = '',
}: Props) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' }); // triggers just before it enters
    const controls = useAnimation();

    const initialOffset = directionMap[direction] || { x: 0, y: 0 };

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, y: 0 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, ...initialOffset }}
            animate={controls}
            transition={{ duration, ease: 'easeOut', delay: stagger }}
        >
            {children}
        </motion.div>
    );
}