import { scrollToElement } from "../utils/scrollToElement";

export default function Header() {
  return (
    <header className="px-40 py-8 flex flex-row justify-between items-center baseline">
      <h1 className="text-[#f7f7f7] text-2xl font-bold">VPO Tech</h1>
      <nav className="bg-zinc-400/50 px-8 py-2 rounded-2xl">
        <ul className="flex justify-center gap-12 items-center">
          <li>
            <a
              href="#about"
              className="text-[#f7f7f7] hover:underline"
              onClick={scrollToElement}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[#f7f7f7] hover:underline"
              onClick={scrollToElement}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#f7f7f7] hover:underline"
              onClick={scrollToElement}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
