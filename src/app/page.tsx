import Background from "./components/Background";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:btn-secondary"
      >
        Skip to content
      </a>
      <Intro />
      <Background />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
