import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function PersonalityCard({ person }) {
  return (
    <Link
      to={`/personalidades/${person.slug}`}
      className="panel card-lift group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={person.image}
          alt={`Retrato de ${person.name}`}
          className="block h-full w-full transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-90"
          aria-hidden="true"
        />
        <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur">
          {person.area}
        </span>
        <span className="absolute inset-x-3 bottom-3 font-heading text-[0.7rem] uppercase tracking-[0.18em] text-foreground/85">
          {person.years}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg text-foreground">{person.name}</h3>
        <p className="mt-1 text-[0.72rem] uppercase tracking-[0.12em] text-primary">{person.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{person.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
          Ler a história
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
