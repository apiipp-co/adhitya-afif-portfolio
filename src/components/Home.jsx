import HeroAnimation from "./HeroAnimation";

export default function Home() {
  return (
    <section id="home">
      {/* Canvas Sequence Animation Hero */}
      <HeroAnimation />

      {/* Full-width, uncropped Cloud Transition Divider between Hero and About Me */}
      <div className="relative w-full z-40 pointer-events-none select-none -mt-[14vw] md:-mt-[18vw] lg:-mt-[21vw] mb-[-3vw] leading-none overflow-hidden">
        <img
          src="/images/awan-section.png"
          alt="Cloud Divider"
          className="w-full h-auto block select-none"
        />
      </div>
    </section>
  );
}
