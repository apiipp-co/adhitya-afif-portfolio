import { personal, socials, socialIcons } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t-4 border-on-primary-fixed w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-8 gap-gutter text-center md:text-left">
        <div>
          <h2 className="text-headline-md font-headline-md text-on-primary mb-2 uppercase">
            READY TO BUILD?
          </h2>
          <p className="text-white/80 text-xs font-body-md max-w-md">
            {personal.about.intro} • Let&apos;s turn ideas into functional, beautiful realities.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4 items-center">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all active:scale-95 bg-white/20 p-2 rounded-full border border-white/40 text-white inline-flex items-center justify-center"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {Icon && <Icon className="w-5 h-5 fill-current" />}
                </a>
              );
            })}
          </div>
        </div>
        <div className="text-center md:text-right mt-6 md:mt-0">
          <div className="text-label-caps font-label-caps text-on-primary text-xs flex items-center justify-center md:justify-end gap-1">
            <span className="font-sans font-normal text-sm leading-none">©</span>
            <span>{currentYear} {personal.name.toUpperCase()} • BUILT BY BRICK</span>
          </div>
          <div className="text-[11px] text-white/70 font-label-caps mt-1">
            {personal.location.toUpperCase()}
          </div>
        </div>
      </div>
    </footer>
  );
}
