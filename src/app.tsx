import "./app.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function App() {
  return (
    <main className="bg-[#1a1a1a] flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Projects />
    </main>
  );
}
