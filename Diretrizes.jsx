import { BookMarked, Compass, MessagesSquare, Users } from 'lucide-react';

const DIRETRIZES = [
  {
    icon: Compass,
    title: 'Letramento racial como base',
    text:
      'Antes de exigir mudança de comportamento, é preciso ensinar o que é racismo estrutural, como ele aparece no cotidiano e por que certas expressões ferem. Letramento racial é conteúdo, não palestra isolada.',
  },
  {
    icon: Users,
    title: 'Protagonismo negro',
    text:
      'Estudantes e professores negros devem ocupar lugar de fala e de decisão: nos projetos, nos cartazes, nos conselhos, nas escolhas de leitura. Representatividade sem poder é vitrine.',
  },
  {
    icon: BookMarked,
    title: 'Currículo afrocentrado e interdisciplinar',
    text:
      'A história e a cultura afro-brasileira atravessam todas as disciplinas: matemática (tecnologias africanas), ciências (saberes tradicionais), artes, literatura, geografia e educação física.',
  },
  {
    icon: MessagesSquare,
    title: 'Acolhimento e escuta qualificada',
    text:
      'A vítima precisa ser recebida com cuidado e sem precisar provar nada. A escola organiza fluxos claros de escuta, registro e encaminhamento, com sigilo e proteção integral.',
  },
];

export default function Diretrizes() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {DIRETRIZES.map((item) => (
        <article key={item.title} className="panel card-lift p-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <item.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-heading text-lg text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
