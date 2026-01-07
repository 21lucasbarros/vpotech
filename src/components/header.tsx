"use client";

import { scrollToElement } from "../utils/scrollToElement";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-40 py-6 lg:py-8 flex flex-row justify-between items-center">
      <h1 className="text-[#f7f7f7] text-xl sm:text-2xl font-semibold tracking-tight">
        VPO Tech
      </h1>

      {/* desktop navigation */}
      <NavigationMenu
        viewport={false}
        className="hidden md:flex bg-zinc-800/90 px-2 py-1.5 rounded-full"
      >
        <NavigationMenuList className="gap-2">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <a
                  href={item.href}
                  className="text-[#f7f7f7]/80 hover:text-white hover:bg-white/5 px-5 py-1.5 rounded-full transition-colors duration-200 text-sm font-normal"
                  onClick={scrollToElement}
                >
                  {item.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-[#f7f7f7] p-2 hover:bg-white/5 rounded-lg transition-colors relative"
        aria-label="Toggle menu"
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-zinc-900/98 backdrop-blur-xl shadow-2xl z-50"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-[#f7f7f7] text-xl font-semibold">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#f7f7f7]/60 hover:text-[#f7f7f7] p-2 hover:bg-white/5 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="text-[#f7f7f7] hover:bg-white/10 px-4 py-3 rounded-xl transition-colors duration-200"
                      onClick={(e) => {
                        scrollToElement(e);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
