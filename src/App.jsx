import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HeroSection from "./components/HeroSection";
import ScrollingTicker from "./components/ScrollingTicker";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificatesSection from "./components/CertificatesSection";
import BrickboxSection from "./components/BrickboxSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import useScrollReveal from "./hooks/useScrollReveal";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  // Initialize Lenis smooth momentum scrolling and anchor navigation
  useSmoothScroll();

  // Initialize scroll entrance reveal system
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* Home Section (Hero Sequence + Cloud Divider) */}
      <Home />

      <main className="pb-32 pt-0 relative z-40 lego-dot-bg overflow-x-clip">
        <div id="about" className="scroll-mt-28">
          <HeroSection />
          <ScrollingTicker />
          <AboutSection />
          <ExperienceSection />
          <CertificatesSection />
          <BrickboxSection />
        </div>
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating Lego-Themed Scroll-to-Top Button */}
      <ScrollToTop />
    </>
  );
}
