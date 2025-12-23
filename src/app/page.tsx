import Header from "@/components/header";
import "./globals.css";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll-to-top";
import Footer from "@/components/footer";
import About from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-[#1a1a1a] flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
