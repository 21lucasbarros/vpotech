import { scrollToElement } from "../utils/scrollToElement";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-40 py-8 flex flex-row justify-between items-center bg-[#1a1a1a]/80 backdrop-blur-md">
      <h1 className="text-[#f7f7f7] text-2xl font-semibold tracking-tight">
        VPO Tech
      </h1>
      <NavigationMenu
        viewport={false}
        className="bg-zinc-800/30 px-2 py-1.5 rounded-full"
      >
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                href="#about"
                className="text-[#f7f7f7]/80 hover:text-white hover:bg-white/5 px-5 py-1.5 rounded-full transition-colors duration-200 text-sm font-normal"
                onClick={scrollToElement}
              >
                Sobre
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                href="#services"
                className="text-[#f7f7f7]/80 hover:text-white hover:bg-white/5 px-5 py-1.5 rounded-full transition-colors duration-200 text-sm font-normal"
                onClick={scrollToElement}
              >
                Projetos
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                href="#contact"
                className="text-[#f7f7f7]/80 hover:text-white hover:bg-white/5 px-5 py-1.5 rounded-full transition-colors duration-200 text-sm font-normal"
                onClick={scrollToElement}
              >
                Contato
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
