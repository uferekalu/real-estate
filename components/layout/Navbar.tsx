"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const BRAND_COLOR = "#1a1a1a";
const GOLD_ACCENT = "#c9a96e";
const TEXT_COLOR = "#2c2c2c";
const HOVER_COLOR = GOLD_ACCENT;

const navLinks = [
  { name: "Properties", href: "/properties" },
  { name: "About Us", href: "/about" },
  { name: "Our Agents", href: "/agents" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-[1000]
          bg-white/97 backdrop-blur-md
          border-b border-gray-100/80
          shadow-sm
          transition-all duration-400
        `}
      >
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-extrabold tracking-tight transition-colors duration-300 hover:opacity-90"
              style={{ color: BRAND_COLOR }}
            >
              Neeps <span style={{ color: GOLD_ACCENT, fontWeight: 600 }}>International</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    group relative text-[15px] xl:text-base font-medium tracking-wide
                    transition-colors duration-300
                    ${isActive(link.href)
                      ? `text-[${GOLD_ACCENT}]`
                      : `text-[${TEXT_COLOR}] hover:text-[${HOVER_COLOR}]`
                    }
                    visited:text-[${GOLD_ACCENT}]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[${GOLD_ACCENT}] focus-visible:ring-offset-2 rounded-sm
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute -bottom-2 left-0 h-[2.5px] bg-[${GOLD_ACCENT}] rounded-full
                      transition-all duration-500 ease-out
                      ${isActive(link.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full group-focus:w-full"
                      }
                    `}
                  />
                </Link>
              ))}
              <Link
                href="/properties"
                className={`
                  ml-6 px-8 py-3.5 rounded-full
                  text-[15px] xl:text-base font-semibold tracking-wide uppercase
                  bg-[${GOLD_ACCENT}] text-[${GOLD_ACCENT}]
                  shadow-[0_4px_14px_rgba(201,169,110,0.25)]
                  hover:shadow-[0_8px_24px_rgba(201,169,110,0.35)]
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-400
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[${GOLD_ACCENT}]
                `}
              >
                Explore Properties
              </Link>
            </nav>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-3 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={28} strokeWidth={2.5} color={BRAND_COLOR} />
              ) : (
                <Menu size={28} strokeWidth={2.5} color={BRAND_COLOR} />
              )}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 160 }}
              className={`
                fixed top-0 right-0 bottom-0 z-[1000]
                w-[85vw] max-w-md
                bg-gradient-to-b from-white to-gray-50
                shadow-[-20px_0_50px_rgba(0,0,0,0.25)]
                lg:hidden overflow-y-auto
              `}
            >
              <div className="flex flex-col h-full">
                <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-2xl font-bold tracking-tight" style={{ color: BRAND_COLOR }}>
                    Neeps
                  </span>
                  <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                    <X size={32} color={BRAND_COLOR} />
                  </button>
                </div>
                <div className="flex-1 px-8 py-12 space-y-10">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.09 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block text-lg lg:text-xl font-medium tracking-wide
                          transition-colors duration-300
                          ${isActive(link.href)
                            ? `text-[${GOLD_ACCENT}]`
                            : `text-gray-800 hover:text-[${GOLD_ACCENT}]`
                          }
                          visited:text-[${GOLD_ACCENT}]
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="p-8 border-t border-gray-100 mt-auto">
                  <Link
                    href="/properties"
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex justify-center items-center py-6
                      bg-[${GOLD_ACCENT}] text-[${GOLD_ACCENT}]
                      rounded-2xl text-lg font-semibold tracking-wide uppercase
                      shadow-lg shadow-[${GOLD_ACCENT}]/30
                      hover:shadow-xl hover:shadow-[${GOLD_ACCENT}]/40
                      hover:-translate-y-1 active:translate-y-0
                      transition-all duration-400
                    `}
                  >
                    Explore Properties
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      <div className="h-16 lg:h-20" />
    </>
  );
}