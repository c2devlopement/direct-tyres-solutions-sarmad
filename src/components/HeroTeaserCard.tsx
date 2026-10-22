export default function HeroTeaserCard() {
  return (
    <section className="w-full bg-surface py-10 px-4 md:px-8">
      <div className="max-w-2xl mx-auto bg-primary rounded-3xl p-8 md:p-10 shadow-2xl">
        <h2 className="font-heading text-2xl md:text-3xl font-black text-white leading-tight">
          This Website&apos;s Boring. Our Job Isn&apos;t. 👀
        </h2>
        <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mt-4">
          Real customers. Real emergencies. Real POV footage. See what happens when the phone rings.
        </p>
        <a
          href="https://www.tiktok.com/@directtyresolutions?_r=1&_t=ZG-9AlULbu4wLZ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-secondary text-primary font-heading font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-full hover:bg-secondary-hover transition-colors shadow-lg"
        >
          🎥 Skip to the Good Stuff →
        </a>
      </div>
    </section>
  );
}
