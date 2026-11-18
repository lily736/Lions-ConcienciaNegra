export default function DicaCard({ dica, index }) {
  return (
    <article className="panel card-lift flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-lg leading-snug text-foreground">{dica.title}</h3>
        <span className="font-heading text-2xl text-primary/40">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{dica.text}</p>
      <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-4">
        {dica.items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/70" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
