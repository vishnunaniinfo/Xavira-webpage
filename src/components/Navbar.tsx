import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export function Navbar({ currentPage, setCurrentPage, darkMode, setDarkMode }: NavbarProps) {
  const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative backdrop-blur-xl bg-black/30 rounded-2xl border border-violet-500/30 shadow-[0_0_30px_rgba(126,34,206,0.3)]"
          style={{
            boxShadow: '0 0 30px rgba(126, 34, 206, 0.3), inset 0 0 20px rgba(30, 58, 138, 0.1)',
          }}
        >
          <div className="flex items-center justify-between px-8 py-4">
            {/* Brand Text Only */}
            <motion.div
              className="cursor-pointer"
              onClick={() => setCurrentPage('home')}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-xl tracking-[0.25em] bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 30px rgba(126, 34, 206, 0.6)',
                  }}
                >
                  XAVIRA
                </span>
                <span className="text-sm text-white/80 tracking-wider">TECH LABS</span>
              </div>
              <div className="text-[10px] text-violet-400/60 tracking-wider mt-0.5">Part of Xavira Group</div>
            </motion.div>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link}
                  onClick={() => setCurrentPage(link.toLowerCase())}
                  className={`relative px-4 py-2 transition-colors ${
                    currentPage === link.toLowerCase()
                      ? 'text-violet-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                  {currentPage === link.toLowerCase() && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-600"
                      style={{
                        boxShadow: '0 0 10px rgba(126, 34, 206, 0.8)',
                      }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-violet-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
