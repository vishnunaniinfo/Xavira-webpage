import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* XAVIRA GROUP Text Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="flex flex-col items-center gap-2">
            {/* XAVIRA */}
            <h1 className="text-6xl md:text-8xl tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 relative">
              {'XAVIRA'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                  style={{
                    textShadow: '0 0 30px rgba(126, 34, 206, 0.8), 0 0 60px rgba(30, 58, 138, 0.6)',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            {/* GROUP */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-4xl md:text-6xl tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400"
              style={{
                textShadow: '0 0 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(126, 34, 206, 0.6)',
              }}
            >
              GROUP
            </motion.h2>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-64 md:w-96 mx-auto"
        >
          <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(126, 34, 206, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4 text-gray-400 text-sm"
          >
            Loading Experience... {progress}%
          </motion.p>
        </motion.div>

        {/* Pulsing Glow Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-96 h-96 bg-gradient-to-br from-violet-600/30 to-blue-600/30 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </motion.div>
  );
}
