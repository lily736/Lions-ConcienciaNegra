export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-balance text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      )}
    </div>
  );
}
