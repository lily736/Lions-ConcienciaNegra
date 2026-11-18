import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { getPersonality, personalities } from '@/data/personalities';
import NaoEncontrado from '@/pages/NaoEncontrado';

export default function PersonalidadeDetalhe() {
  const { slug } = useParams();
  const person = getPersonality(slug);

  if (!person) return <NaoEncontrado />;

  const index = personalities.findIndex((p) => p.slug === slug);
  const previous = personalities[(index - 1 + personalities.length) % personalities.length];
  const next = personalities[(index + 1) % personalities.length];

  return (
    <article className="site-container pb-10 pt-10 lg:pt-14">
      <Link
        to="/personalidades"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Voltar para a galeria
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-36 lg:self-start"
        >
          <div className="relative overflow-hidden rounded-[1.4rem] border border-primary/25">
            <div className="aspect-[4/5] w-full">
              <Image src={person.image} alt={`Retrato de ${person.name}`} className="block h-full w-full" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="tag">{person.area}</span>
            <span className="tag">{person.years}</span>
          </div>

          <ul className="mt-6 space-y-2.5">
            {person.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{person.role}</span>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            {person.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{person.short}</p>

          <div className="mt-8 space-y-8">
            {person.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-xl text-foreground sm:text-2xl">{section.title}</h2>
                <p className="mt-3 text-[0.95rem] leading-[1.85] text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          {person.quote && (
            <blockquote className="mt-10 rounded-2xl border border-primary/25 bg-primary/[0.06] p-6">
              <Quote className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading text-lg leading-snug text-foreground">“{person.quote}”</p>
              <footer className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {person.quoteSource}
              </footer>
            </blockquote>
          )}

          <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6">
            <span className="eyebrow">Para levar para a vida</span>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">{person.lesson}</p>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link to={`/personalidades/${previous.slug}`} className="group inline-flex items-center gap-3 text-sm">
              <ArrowLeft className="h-4 w-4 text-primary transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Anterior
                </span>
                <span className="font-semibold text-foreground">{previous.name}</span>
              </span>
            </Link>
            <Link
              to={`/personalidades/${next.slug}`}
              className="group inline-flex items-center gap-3 text-right text-sm sm:justify-end"
            >
              <span>
                <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Próxima
                </span>
                <span className="font-semibold text-foreground">{next.name}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
