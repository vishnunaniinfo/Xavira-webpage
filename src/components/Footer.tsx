import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateToAdmin?: () => void;
}

export function Footer({ onNavigateToAdmin }: FooterProps = {}) {
  return (
    <footer className="relative mt-20 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-violet-500/20 p-8"
          style={{
            boxShadow: '0 0 20px rgba(126, 34, 206, 0.2), inset 0 0 15px rgba(30, 58, 138, 0.1)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                Copyright © 2025 <span className="text-violet-400">Xavira Tech Labs</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Part of Xavira Group • All rights reserved
                {onNavigateToAdmin && (
                  <>
                    {' • '}
                    <button
                      onClick={onNavigateToAdmin}
                      className="text-gray-600 hover:text-violet-500 transition-colors"
                      title="Admin Panel"
                    >
                      Admin
                    </button>
                  </>
                )}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6">
              <motion.a
                href="https://www.linkedin.com/in/vishnu-vardhanburri/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/30 hover:bg-violet-500/20 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(126, 34, 206, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                title="Connect with Vishnu Vardhan Burri on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-violet-400" />
              </motion.a>
              <motion.a
                href="mailto:xavira.group@gmail.com"
                className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/30 hover:bg-violet-500/20 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(126, 34, 206, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                title="Email us"
              >
                <Mail className="w-5 h-5 text-violet-400" />
              </motion.a>
            </div>

            {/* Contact Email */}
            <div className="text-center md:text-right">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center md:justify-end gap-2">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <a
                    href="mailto:xavira.group@gmail.com"
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    xavira.group@gmail.com
                  </a>
                </div>
                <p className="text-xs text-gray-500">
                  CEO: vishnuvardhanburri19@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
