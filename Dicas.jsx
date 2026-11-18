import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';
import MemoriaDivider from '@/components/MemoriaDivider';
import DicaCard from '@/components/dicas/DicaCard';
import Compromissos from '@/components/dicas/Compromissos';
import LinksUteis from '@/components/dicas/LinksUteis';
import { dicas } from '@/data/dicas';
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export default function Dicas() {
  return (
    <>
      <PageIntro
        eyebrow="Pequeno manual, prática grande"
        title="Dicas antirracistas para o dia a dia"
        description="Inspirado no “Pequeno Manual Antirracista”, de Djamila Ribeiro, este é um guia direto para estudantes: como reconhecer microagressões, o que ler, como apoiar colegas e como desconstruir preconceitos que aprendemos sem perceber."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="tag">6 práticas</span>
          <span className="tag">Leituras recomendadas</span>
          <span className="tag">Checklist pessoal</span>
        </div>
      </PageIntro>

      <div className="site-container space-y-16 lg:space-y-20">
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dicas.map((dica, index) => (
            <DicaCard key={dica.id} dica={dica} index={index} />
          ))}
        </section>

        <MemoriaDivider />

        <section className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Compromissos />

          <div className="space-y-5">
            <div className="panel border-primary/25 bg-primary/[0.05] p-6">
              <span className="flex items-center gap-2 eyebrow">
                <Sparkles className="h-4 w-4" />
                Do manual para a escola
              </span>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                Antirracismo não é um sentimento, é uma prática com método: estudar, escutar, intervir e
                repetir. Escolha uma atitude por semana — e conte com a Dandara IA, nossa assistente, para
                tirar dúvidas no canto da tela.
              </p>
            </div>

            <div className="panel p-6">
              <span className="flex items-center gap-2 eyebrow">
                <BookOpen className="h-4 w-4" />
                Como estudar por conta
              </span>
              <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                <li>1. Escolha um tema por vez (microagressões, história, literatura).</li>
                <li>2. Anote uma pergunta que você não sabe responder.</li>
                <li>3. Leia um texto curto de autor negro sobre isso.</li>
                <li>4. Leve a pergunta para a aula e para o grêmio.</li>
                <li>5. Compartilhe o que aprendeu no mural de vozes.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Para aprofundar"
            title="Links úteis de estudo"
            description="Fontes confiáveis para pesquisas, trabalhos escolares e projetos do grêmio."
          />
          <div className="mt-8">
            <LinksUteis />
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <ExternalLink className="h-3.5 w-3.5 text-primary" />
            Os links abrem em uma nova aba, em sites externos.
          </p>
        </section>
      </div>
    </>
  );
}
