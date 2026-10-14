type LocationMapProps = {
  areaLabel: string;
};

export default function LocationMap({ areaLabel }: LocationMapProps) {
  const query = encodeURIComponent(`${areaLabel}, UK`);

  return (
    <section className="w-full bg-primary-dark py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <span className="text-secondary font-bold tracking-[0.15em] uppercase text-sm mb-2 block">
            Service Area
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-black text-white">
            Where We Cover in {areaLabel}
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            title={`Map of ${areaLabel}`}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
