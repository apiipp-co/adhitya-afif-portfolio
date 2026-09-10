export default function ScrollingTicker() {
  const items = [
    "CODE",
    "DESIGN",
    "BUILD",
    "CODE",
    "DESIGN",
    "BUILD",
    "CODE",
    "DESIGN",
    "BUILD",
    "CODE",
    "DESIGN",
    "BUILD",
  ];
  // 24 items in total: second half exactly duplicates the first half for seamless -50% loop
  const track = [...items, ...items];

  return (
    <div className="w-full border-y-4 border-on-surface bg-brick-yellow py-4 overflow-hidden mb-32 flex select-none brick-shadow">
      <div className="flex w-max shrink-0 items-center gap-8 whitespace-nowrap font-label-caps text-label-caps text-on-surface font-bold animate-marquee">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span>{item}</span>
            <span className="material-symbols-outlined text-[14px]">
              grid_view
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
