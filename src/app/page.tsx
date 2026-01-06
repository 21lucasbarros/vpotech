import "./globals.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll-to-top";
import Footer from "@/components/footer";
import About from "@/components/about";
import Contact from "@/components/contact";
import Stacks from "@/components/stacks";

export default function Home() {
  return (
    <main className="bg-[#1a1a1a] flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
