import "./app.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import ScrollToTop from "./components/scroll-to-top";

export default function App() {
  return (
    <main className="bg-[#1a1a1a] flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <ScrollToTop />
    </main>
  );
}
