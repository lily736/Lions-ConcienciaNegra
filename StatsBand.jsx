const STATS = [
  { value: '2003', label: 'Lei nº 10.639 torna obrigatório o ensino de história e cultura afro-brasileira' },
  { value: '20/11', label: 'Dia Nacional da Consciência Negra, em memória de Zumbi dos Palmares' },
  { value: '10', label: 'Personalidades negras com biografias completas para estudo em sala' },
  { value: '6', label: 'Passos do protocolo escolar de enfrentamento ao racismo' },
];

export default function StatsBand() {
  return (
    <section className="border-y border-border/70 bg-card/35">
      <div className="site-container grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.value} className="border-l border-primary/30 pl-5">
            <p className="font-heading text-3xl text-primary">{stat.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
