import { Quote } from 'lucide-react';

const initials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const formatDate = (value) =>
  new Date(value).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

export default function Mural({ depoimentos }) {
  if (depoimentos.length === 0) {
    return (
      <div className="panel flex flex-col items-center px-6 py-16 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          <Quote className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-heading text-xl text-foreground sm:text-2xl">
          O mural está esperando a primeira voz
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Nenhum depoimento foi publicado ainda. Que tal ser a primeira pessoa a deixar um relato, um
          aprendizado ou um compromisso antirracista? Sua história pode encorajar outros estudantes.
        </p>
        <a href="#depoimento-form" className="btn-line mt-6">
          Escrever o primeiro depoimento
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {depoimentos.map((item) => (
        <article key={item.id} className="panel card-lift flex h-full flex-col p-6">
          <Quote className="h-5 w-5 text-primary/60" />
          <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-foreground/90">{item.mensagem}</p>
          <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/35 bg-primary/10 font-heading text-xs text-primary">
              {initials(item.nome)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{item.nome}</p>
              <p className="truncate text-xs text-muted-foreground">
                {item.turma} · {formatDate(item.createdAt)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
