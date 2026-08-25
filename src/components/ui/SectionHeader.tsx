interface Props {
  tag: string;
  title?: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, highlight, subtitle }: Props) {
  return (
    <div className="mb-12">
      <span className="section-tag">{tag}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title && <span>{title} </span>}
        <span className="text-gradient">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-500 mt-3 text-sm max-w-lg">{subtitle}</p>
      )}
    </div>
  );
}
