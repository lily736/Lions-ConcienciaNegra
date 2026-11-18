import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

export default function CtaVoz() {
  return (
    <section className="site-container pb-6 pt-10 lg:pb-10">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/25 bg-card/60 p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <span className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary">
              <Quote className="h-3.5 w-3.5" />
              Mural de vozes
            </span>
            <h2 className="mt-4 text-balance font-heading text-2xl leading-snug text-foreground sm:text-3xl">
              A escola muda quando alguém decide contar o que viveu.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Estudantes, professores e famílias podem registrar depoimentos sobre pertencimento, racismo e
              superação. Cada relato fica guardado neste mural.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/depoimentos" className="btn-gold">
              Deixar meu depoimento
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('dandara:open'))}
              className="btn-line"
            >
              Falar com a Dandara IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
