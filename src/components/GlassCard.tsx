import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function GlassCard({ children, delay = 0, className = '' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay, 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={`relative backdrop-blur-xl bg-black/30 rounded-2xl border border-violet-500/30 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(126,34,206,0.4)] ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(126, 34, 206, 0.2), inset 0 0 20px rgba(30, 58, 138, 0.1)',
      }}
    >
      {children}
    </motion.div>
  );
}
