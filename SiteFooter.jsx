import { Link } from 'react-router-dom';
import { MapPin, School, Scale } from 'lucide-react';

const NAV = [
  { to: '/', label: 'Início' },
  { to: '/protocolo', label: 'Protocolo escolar' },
  { to: '/personalidades', label: 'Personalidades negras' },
  { to: '/dicas', label: 'Dicas antirracistas' },
  { to: '/depoimentos', label: 'Mural de vozes' },
  { to: '/sobre', label: 'Sobre o projeto' },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-card/40">
      <div className="site-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-primary/60 font-heading text-lg text-primary">
              L
            </span>
            <div className="leading-tight">
              <p className="font-heading text-[0.85rem] uppercase tracking-[0.16em]">Consciência Negra</p>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">Educação antirracista</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Projeto pedagógico permanente da EEEFM Lions «Sebastião de Paiva Vidaurre», construído com
            estudantes e educadores para afirmar a história e a cultura afro-brasileira em cumprimento à
            Lei nº 10.639/2003.
          </p>
          <p className="mt-6 font-heading text-sm text-primary">
            “Não basta não ser racista, é preciso ser antirracista.”
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Angela Davis</p>
        </div>

        <div>
          <h3 className="font-heading text-[0.8rem] uppercase tracking-[0.2em] text-foreground">Navegação</h3>
          <ul className="mt-5 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-[0.8rem] uppercase tracking-[0.2em] text-foreground">A escola</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <School className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                EEEFM Lions «Sebastião de Paiva Vidaurre»
                <br />
                Rede estadual de ensino do Espírito Santo
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Cachoeiro de Itapemirim — ES
                <br />
                Superintendência Regional de Educação de Cachoeiro de Itapemirim
              </span>
            </li>
            <li className="flex gap-3">
              <Scale className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Lei nº 10.639/2003 · Dia Nacional da Consciência Negra, 20 de novembro</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="site-container flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EEEFM Lions «Sebastião de Paiva Vidaurre». Uso pedagógico.</p>
          <p>Feito por estudantes e professores — memória, orgulho e equidade.</p>
        </div>
      </div>
    </footer>
  );
}
