type LocationMapEmbedProps = {
  areaLabel: string;
  className?: string;
};

export default function LocationMapEmbed({ areaLabel, className = "" }: LocationMapEmbedProps) {
  const query = encodeURIComponent(`${areaLabel}, UK`);

  return (
    <div
      className={`relative w-full h-80 rounded-2xl overflow-hidden shadow-xl ${className}`}
    >
      <iframe
        title={`Map of ${areaLabel}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
