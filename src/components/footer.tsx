"use client";

import { scrollToElement } from "../utils/scrollToElement";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#services" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0f0f0f] border-t border-[#f7f7f7]/10 px-4 md:px-6 lg:px-40 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-white/2 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#f7f7f7] text-2xl font-semibold tracking-tight">
              VPO Tech
            </h2>
            <p className="text-[#f7f7f7]/60 text-sm leading-relaxed max-w-md">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h3 className="text-[#f7f7f7]/40 text-xs font-semibold tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#f7f7f7]/70 hover:text-[#f7f7f7] transition-colors duration-200 text-sm"
                    onClick={scrollToElement}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div className="flex flex-col gap-4">
          <blockquote className="md:hidden">
            <p className="text-[#f7f7f7]/40 text-sm italic text-center">
              "A única maneira de fazer um ótimo trabalho é amar o que você
              faz." — Steve Jobs
            </p>
          </blockquote>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f7f7f7]/50 text-xs text-center md:text-left">
              © {currentYear} VPO Tech. Todos os direitos reservados.
            </p>
            <blockquote className="hidden md:block">
              <p className="text-[#f7f7f7]/40 text-sm italic text-center">
                "A única maneira de fazer um ótimo trabalho é amar o que você
                faz." — Steve Jobs
              </p>
            </blockquote>
            <div className="text-[#f7f7f7]/50 text-xs flex items-center gap-3">
              <span className="w-1 h-1 bg-[#f7f7f7]/30 rounded-full" />
              <span>Feito no 🇧🇷 Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
