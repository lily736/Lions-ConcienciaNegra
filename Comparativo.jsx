import { useState } from 'react';
import { AlertTriangle, Equal, Info } from 'lucide-react';

const TABS = [
  {
    id: 'racismo',
    label: 'Racismo',
    icon: AlertTriangle,
    intro:
      'O racismo é um sistema de poder que hierarquiza pessoas a partir da ideia de raça e produz desvantagens concretas para pessoas negras. Não é opinião, nem excesso de sensibilidade.',
    points: [
      'Tem origem histórica: foi construído junto com a colonização e a escravidão, para justificar a exploração de pessoas africanas e seus descendentes.',
      'É estrutural: aparece nas escolas, no mercado de trabalho, na saúde, na segurança pública e na mídia — mesmo quando ninguém tem intenção explícita.',
      'É coletivo: atinge um grupo inteiro, com base em características físicas, cabelo, religião ou pertencimento étnico-racial.',
      'No Brasil, é crime inafiançável e imprescritível, previsto na Lei nº 7.716/1989 e na Constituição Federal (art. 5º, XLII).',
    ],
  },
  {
    id: 'bullying',
    label: 'Bullying',
    icon: Equal,
    intro:
      'O bullying é uma agressão repetida e intencional entre pares, marcada por desequilíbrio de poder. Também fere e precisa ser enfrentado — mas não é a mesma coisa que racismo.',
    points: [
      'Costuma partir de uma relação de força pontual: tamanho, popularidade, jeito de ser, condição física.',
      'Pode atingir qualquer pessoa e não se organiza por um marcador histórico de opressão.',
      'Quando o bullying usa raça, cabelo, religião de matriz africana ou origem como alvo, ele deixa de ser apenas bullying: passa a ser violência racial.',
      'No ambiente escolar, ambos exigem intervenção imediata, registro e trabalho pedagógico — mas a resposta ao racismo precisa incluir letramento racial.',
    ],
  },
  {
    id: 'diferenca',
    label: 'Por que distinguir?',
    icon: Info,
    intro:
      'Chamar tudo de "brincadeira" ou de "coisa de criança" apaga a dimensão histórica do racismo. Distinguir não é hierarquizar dor: é escolher a resposta correta.',
    points: [
      'Racismo exige reparação e política pedagógica; bullying exige mediação e acompanhamento.',
      'Nomear o racismo evita que a vítima seja culpada por "não ter levado na brincadeira".',
      'A escola que só pune não educa; a escola que só conversa não protege. O protocolo precisa das duas coisas.',
      'Reconhecer a especificidade do racismo é reconhecer que ele não começou nem termina nos muros da escola.',
    ],
  },
];

export default function Comparativo() {
  const [active, setActive] = useState('racismo');
  const current = TABS.find((tab) => tab.id === active);

  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap gap-1 border-b border-border/70 p-2" role="tablist" aria-label="Comparação entre racismo e bullying">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
              active === tab.id
                ? 'bg-primary/12 text-primary'
                : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
            }`}
          >
            <tab.icon className="h-3.5 w-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-[0.95rem] leading-relaxed text-foreground/90">{current.intro}</p>
        <ul className="mt-6 space-y-3.5">
          {current.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/80" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
