import Image from "next/image";
import { personalInfo } from "@/content/personal";

export default function HeroSection() {
  const { name, role, concentration, positioning, tagline, heroIntro, portrait } = personalInfo;

  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto max-w-page px-5 pb-20 pt-14 sm:px-8 md:pb-32 md:pt-24">
      <div className={portrait ? "grid items-end gap-12 md:grid-cols-12" : undefined}>
        <div className={portrait ? "md:col-span-8" : undefined}>
          <p className="label uppercase tracking-[0.12em]">{positioning.join(" · ")}</p>

          <h1
            id="hero-heading"
            className="mt-8 text-balance text-[clamp(2.75rem,1.5rem+5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
          >
            {name}
          </h1>

          <p className="label mt-5">
            {role} · Concentration: {concentration}
          </p>

          <div className="mt-12 max-w-measure">
            <span aria-hidden="true" className="block h-0.5 w-12 bg-accent" />
            <p className="mt-5 text-2xl font-medium leading-snug tracking-[-0.01em]">{tagline}</p>
            <p className="mt-5 text-muted">{heroIntro}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#works"
              className="inline-flex min-h-12 items-center bg-accent px-6 font-medium text-charcoal transition-colors duration-150 hover:bg-charcoal hover:text-ivory"
            >
              Explore My Work
            </a>
            <a href="#about" className="inline-flex min-h-11 items-center text-link font-medium">
              About Me
            </a>
          </div>
        </div>

        {portrait ? (
          <div className="md:col-span-4">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={640}
              height={800}
              priority
              className="h-auto w-full"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
