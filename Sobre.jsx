import PageIntro from '@/components/PageIntro';
import MemoriaDivider from '@/components/MemoriaDivider';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Building2, HeartHandshake, Info, MapPin, School, Sparkles, Users } from 'lucide-react';

const ORGANIZACAO = [
  { to: '/protocolo', label: 'Protocolo escolar', text: 'Lei 10.639/03, diretrizes pedagógicas e os 6 passos de atuação.' },
  { to: '/personalidades', label: 'Personalidades negras', text: 'Dez biografias completas, com contexto histórico e legado.' },
  { to: '/dicas', label: 'Dicas antirracistas', text: 'Práticas do Pequeno Manual, checklist pessoal e links de estudo.' },
  { to: '/depoimentos', label: 'Mural de vozes', text: 'Relatos da comunidade escolar publicados em tempo real.' },
];

const REFERENCIAS = [
  'Lei nº 10.639/2003 e Lei nº 11.645/2008 — obrigatoriedade do ensino de história e cultura afro-brasileira e indígena.',
  'Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais (2004).',
  'PINHEIRO, Bárbara. Diretrizes para uma educação antirracista (2023) — referência pedagógica adotada neste protocolo.',
  'RIBEIRO, Djamila. Pequeno Manual Antirracista. São Paulo: Companhia das Letras, 2019.',
  'DAVIS, Angela. Mulheres, raça e classe. São Paulo: Boitempo, 2016.',
  'CARNEIRO, Sueli. Dispositivo de racialidade. Rio de Janeiro: Zahar, 2023.',
];

export default function Sobre() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre o projeto"
        title="Uma escola que ensina, acolhe e transforma"
        description="O Consciência Negra é um projeto pedagógico permanente da EEEFM Lions «Sebastião de Paiva Vidaurre». Reúne memória, formação e ação para cumprir a Lei nº 10.639/2003 e construir, todos os dias, uma escola antirracista."
      />

      <div className="site-container space-y-16 pb-10 lg:space-y-20">
        <section className="grid gap-5 lg:grid-cols-2">
          <article className="panel p-6 sm:p-8">
            <span className="flex items-center gap-2 eyebrow">
              <School className="h-4 w-4" />
              A escola
            </span>
            <h2 className="mt-4 font-heading text-2xl leading-snug text-foreground">
              EEEFM Lions «Sebastião de Paiva Vidaurre»
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Escola Estadual de Ensino Fundamental e Médio da rede pública do Espírito Santo.
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Cachoeiro de Itapemirim — ES. Superintendência Regional de Educação de Cachoeiro de Itapemirim.
              </li>
              <li className="flex gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Comunidade formada por estudantes, professores, pedagogos, equipe de apoio e famílias.
              </li>
            </ul>
          </article>

          <article className="panel p-6 sm:p-8">
            <span className="flex items-center gap-2 eyebrow">
              <HeartHandshake className="h-4 w-4" />
              O projeto
            </span>
            <h2 className="mt-4 font-heading text-2xl leading-snug text-foreground">
              Por que este site existe
            </h2>
            <div className="prose-site mt-4">
              <p>
                Conteúdo antirracista não pode caber em uma semana de novembro. Este site existe para que
                estudantes encontrem, a qualquer momento do ano letivo, informação confiável sobre história
                afro-brasileira, legislação, protocolos de proteção e caminhos práticos de ação.
              </p>
              <p>
                Cada página foi pensada para ser curta o suficiente para ler entre aulas — e profunda o
                suficiente para sustentar um trabalho, um debate ou uma assembleia do grêmio.
              </p>
            </div>
          </article>
        </section>

        <section>
          <SectionHeading
            eyebrow="Navegação"
            title="Como o site está organizado"
            description="Seis páginas independentes, para não transformar a leitura em um bloco único e cansativo."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ORGANIZACAO.map((item) => (
              <Link key={item.to} to={item.to} className="panel card-lift group flex items-center justify-between gap-4 p-5">
                <span>
                  <span className="block font-heading text-base text-foreground">{item.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{item.text}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>

        <MemoriaDivider />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Fundamentos" title="Referências que orientam o projeto" />
            <ul className="mt-6 space-y-3">
              {REFERENCIAS.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-5">
            <div className="panel border-primary/25 bg-primary/[0.05] p-6">
              <span className="flex items-center gap-2 eyebrow">
                <Sparkles className="h-4 w-4" />
                Dandara IA
              </span>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                A assistente virtual do site responde dúvidas sobre o protocolo, a legislação, as
                personalidades e as dicas antirracistas. Ela aparece no canto inferior direito de qualquer
                página — e não substitui o diálogo com professores e a coordenação.
              </p>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('dandara:open'))}
                className="btn-line mt-4"
              >
                Abrir conversa
              </button>
            </div>

            <div className="panel p-6">
              <h3 className="font-heading text-base text-foreground">Como participar</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                <li>Publique um relato no mural de vozes.</li>
                <li>Proponha leituras e projetos ao grêmio estudantil.</li>
                <li>Traga casos e dúvidas para a coordenação pedagógica.</li>
                <li>Use este conteúdo em trabalhos, seminários e assembleias.</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="panel flex flex-col gap-3 p-6 sm:flex-row sm:items-start">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Nota sobre as imagens: os retratos da galeria de personalidades são ilustrações digitais criadas
            para este projeto, inspiradas nas pessoas homenageadas. Não são fotografias históricas. As
            biografias foram redigidas com base em fontes públicas e podem ser ampliadas com pesquisas
            escolares.
          </p>
        </section>
      </div>
    </>
  );
}
