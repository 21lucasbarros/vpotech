"use client";

import { scrollToElement } from "../utils/scrollToElement";
import { Instagram, Linkedin, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/vpotech",
      icon: Instagram,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/vpotech",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="relative bg-[#0f0f0f] border-t border-[#f7f7f7]/10 px-4 md:px-6 lg:px-40 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-white/2 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f7f7f7] text-2xl font-semibold tracking-tight">
              VPO Tech
            </h2>
            <p className="text-[#f7f7f7]/60 text-sm leading-relaxed">
              Transformando ideias em soluções digitais inovadoras.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#f7f7f7]/5 border border-[#f7f7f7]/10 text-[#f7f7f7]/60 hover:text-[#f7f7f7] hover:border-[#f7f7f7]/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
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

          {/* Contato */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#f7f7f7]/40 text-xs font-semibold tracking-wider uppercase">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-[#f7f7f7]/70 text-sm">
                <Mail className="w-4 h-4 text-[#f7f7f7]/50" />
                <a
                  href="mailto:contato.vpotech@gmail.com"
                  className="hover:text-[#f7f7f7] transition-colors"
                >
                  contato.vpotech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#f7f7f7]/70 text-sm">
                <MapPin className="w-4 h-4 text-[#f7f7f7]/50" />
                <span>Santos, São Paulo</span>
              </li>
            </ul>
          </div>

          {/* Horário de Atendimento */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#f7f7f7]/40 text-xs font-semibold tracking-wider uppercase">
              Atendimento
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-[#f7f7f7]/70 text-sm">
                <Clock className="w-4 h-4 text-[#f7f7f7]/50 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>Segunda a Sexta</span>
                  <span className="text-[#f7f7f7]/50">9h às 18h</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-[#f7f7f7]/70 text-sm">
                <Clock className="w-4 h-4 text-[#f7f7f7]/50 mt-0.5 opacity-0" />
                <div className="flex flex-col gap-1">
                  <span>Sábado</span>
                  <span className="text-[#f7f7f7]/50">9h às 12h</span>
                </div>
              </li>
            </ul>
          </div>
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
