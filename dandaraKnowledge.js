export const WELCOME =
  'Olá! Eu sou a Dandara IA, assistente do projeto Consciência Negra da EEEFM Lions.\n\nPosso explicar a Lei 10.639/03, a diferença entre racismo e bullying, o protocolo da escola, as personalidades da nossa galeria e as dicas do Pequeno Manual Antirracista.\n\nSobre o que você quer conversar?';

export const SUGGESTIONS = [
  'O que é racismo estrutural?',
  'Racismo e bullying são iguais?',
  'O que diz a Lei 10.639?',
  'Sofri racismo, o que faço?',
  'Como publico um depoimento?',
];

const topics = [
  {
    id: 'risco',
    keywords: ['nao aguento', 'estou mal', 'chorando', 'triste', 'medo', 'sozinho', 'sozinha', 'nao tenho amigos', 'cvv', '188', 'me machucar'],
    answer:
      'Sinto muito que você esteja passando por isso. O que você sente é importante e você não precisa atravessar sozinho(a).\n\nProcure hoje um adulto de confiança na escola — professor(a), coordenação, direção — ou alguém da sua família. Se precisar conversar com alguém agora, o CVV atende gratuitamente pelo telefone 188, 24 horas por dia, com sigilo.\n\nEu sou uma assistente virtual e não substituo esse apoio. Mas fico aqui para conversar sobre o projeto e sobre o que você quiser aprender.',
  },
  {
    id: 'denuncia',
    keywords: ['sofri racismo', 'aconteceu comigo', 'o que fazer', 'como denunciar', 'denunciar', 'denuncia', 'fui xingado', 'me chamaram', 'disque 100', 'protocolo da escola', 'agressao racista'],
    answer:
      'Sinto muito que isso tenha acontecido com você. Racismo não é culpa de quem sofre — e a escola tem o dever de proteger e responder.\n\nO protocolo da nossa escola tem 6 passos:\n1. Identificar e interromper a situação.\n2. Acolher e proteger a pessoa agredida.\n3. Registrar por escrito o ocorrido.\n4. Conversar com as famílias dos envolvidos.\n5. Realizar ações pedagógicas com a turma.\n6. Acompanhar o caso ao longo do tempo.\n\nNa prática: procure a direção, a coordenação ou um professor de confiança e conte o que aconteceu. Anote data, local e testemunhas se possível. Para denúncias formais, o Disque 100 (Direitos Humanos) é gratuito e sigiloso, 24 horas por dia.\n\nQuer que eu detalhe algum desses passos?',
  },
  {
    id: 'bullying',
    keywords: ['bullying', 'brincadeira', 'zoacao', 'racismo e bullying', 'diferenca entre racismo', 'e so piada', 'piada'],
    answer:
      'Não são a mesma coisa — e entender a diferença muda a resposta da escola.\n\nO bullying é uma agressão repetida entre pares, com desequilíbrio de poder. Pode atingir qualquer pessoa.\n\nO racismo é um sistema de poder com origem histórica na colonização e na escravidão. Ele atinge um grupo inteiro, a partir de raça, cabelo, religião ou origem, e produz desvantagens estruturais na escola, no trabalho, na saúde e na segurança.\n\nQuando o bullying usa raça como alvo, ele é violência racial. Chamar de "só brincadeira" apaga a história e culpa a vítima por "não saber levar". O protocolo escolar trata o racismo com letramento racial, reparação pedagógica e acompanhamento.',
  },
  {
    id: 'lei',
    keywords: ['lei 10639', '10639', '10.639', 'legislacao', 'ldb', 'currículo', 'curriculo', 'escola deve ensinar', 'obrigatorio'],
    answer:
      'A Lei nº 10.639, de 9 de janeiro de 2003, alterou a Lei de Diretrizes e Bases da Educação e tornou obrigatório o ensino de história e cultura afro-brasileira em toda a educação básica, pública e privada.\n\nEla acrescentou os artigos 26-A, 79-A e 79-B à LDB e incluiu o 20 de novembro — Dia Nacional da Consciência Negra — no calendário escolar.\n\nPontos importantes:\n• O conteúdo deve atravessar todo o currículo, com destaque para Educação Artística, Literatura e História Brasileira.\n• Não é disciplina extra, nem projeto de uma semana em novembro.\n• A lei valoriza a contribuição do povo negro na cultura, na economia e na formação social do Brasil.\n\nEm 2008, a Lei nº 11.645 incluiu também a história e cultura dos povos indígenas.',
  },
  {
    id: 'estrutural',
    keywords: ['racismo estrutural', 'o que e racismo', 'preconceito', 'discriminacao', 'injuria racial', 'racismo reverso', 'existe racismo'],
    answer:
      'Racismo estrutural é o racismo que não depende da intenção de ninguém: ele está organizado na sociedade, nas instituições e nas estatísticas.\n\nExemplos do cotidiano: menos pessoas negras em cargos de liderança, abordagem policial diferente para a mesma situação, materiais didáticos que apagam a história africana, piadas naturalizadas.\n\nPor isso dizer "eu não sou racista" não basta. Racismo não é só um ato individual de uma pessoa má — é um sistema que distribui oportunidades de forma desigual. O antirracismo exige ação: estudar, intervir, apoiar políticas de equidade e mudar práticas.\n\nSobre "racismo reverso": no Brasil, o preconceito pode existir em qualquer direção, mas o racismo como sistema de poder tem uma direção histórica — contra pessoas negras e indígenas.',
  },
  {
    id: 'microagressao',
    keywords: ['microagressao', 'cabelo', 'apelido', 'comentario', 'elogio', 'moreno', 'cabelo ruim', 'tocar no cabelo'],
    answer:
      'Microagressões são comentários e gestos cotidianos que reforçam estereótipos. Parecem pequenos para quem fala, mas são repetidos todos os dias para quem escuta.\n\nExemplos comuns na escola:\n• Tocar no cabelo de alguém sem permissão.\n• "Você é negra, mas é tão bonita" — o elogio que revela expectativa baixa.\n• "Cabelo ruim", "moreno", "boa aparência".\n• Duvidar da capacidade de um colega negro.\n• Dizer "eu não vejo cor", apagando a experiência racial da pessoa.\n\nO que fazer: nomeie o incômodo com calma, sem expor a pessoa agredida, e leve o tema para a turma. Microagressão repetida não é detalhe — é violência racial.',
  },
  {
    id: 'personalidades',
    keywords: ['personalidade', 'zumbi', 'dandara', 'machado de assis', 'carolina maria', 'djamila ribeiro', 'rebeca andrade', 'sueli carneiro', 'pele', 'viola davis', 'maju', 'quem foi'],
    answer:
      'Nossa galeria reúne dez trajetórias de superação e excelência negra:\n\n• Zumbi dos Palmares — liderança do Quilombo dos Palmares.\n• Dandara dos Palmares — guerreira e estrategista quilombola.\n• Machado de Assis — escritor genial, neto de pessoas escravizadas, fundador da ABL.\n• Carolina Maria de Jesus — catadora de papel e autora de "Quarto de Despejo".\n• Djamila Ribeiro — filósofa e autora do "Pequeno Manual Antirracista".\n• Rebeca Andrade — maior medalhista olímpica do Brasil.\n• Sueli Carneiro — filósofa e fundadora do Geledés.\n• Pelé — o Atleta do Século.\n• Viola Davis — atriz EGOT.\n• Maju Coutinho — jornalista, âncora do "Fantástico".\n\nAbra a página Personalidades para ler as biografias completas, com a história de superação de cada uma.',
  },
  {
    id: 'manual',
    keywords: ['pequeno manual', 'djamila', 'que livro', 'livro', 'o que ler', 'indicacao', 'leitura', 'autores negros'],
    answer:
      'O "Pequeno Manual Antirracista", de Djamila Ribeiro (2019), é um ótimo começo: capítulos curtos, linguagem direta e ações práticas. Venceu o Prêmio Jabuti em 2020.\n\nOutras leituras para começar:\n• "Quarto de Despejo" — Carolina Maria de Jesus.\n• "O que é lugar de fala?" — Djamila Ribeiro.\n• "Olhos d\'Água" e "Ponciá Vicêncio" — Conceição Evaristo.\n• "Torto Arado" — Itamar Vieira Junior.\n• "Um defeito de cor" — Ana Maria Gonçalves.\n\nNa página Dicas antirracistas você encontra seis práticas inspiradas no manual, com microagressões, apoio real e desconstrução de preconceitos. Também tem uma lista de links úteis para pesquisa.',
  },
  {
    id: 'mural',
    keywords: ['depoimento', 'mural', 'como participar', 'publicar', 'escrever no mural', 'deixar relato'],
    answer:
      'No Mural de Vozes você pode publicar um relato, um aprendizado ou um compromisso antirracista.\n\nComo fazer:\n1. Abra a página Depoimentos.\n2. Preencha nome, turma ou cargo e a mensagem.\n3. Clique em "Publicar depoimento".\n\nO relato aparece imediatamente no mural e fica salvo neste navegador, então permanece quando você voltar ao site neste mesmo dispositivo.\n\nDica de cuidado: evite expor nomes de colegas em situações de conflito e escreva com respeito. Se o caso for grave, procure a direção da escola além de publicar.',
  },
  {
    id: 'escola',
    keywords: ['escola', 'lions', 'sebastiao', 'paiva', 'cachoeiro', 'onde fica', 'endereco', 'horario', 'projeto'],
    answer:
      'Este site é um projeto da EEEFM Lions «Sebastião de Paiva Vidaurre», escola da rede estadual do Espírito Santo, em Cachoeiro de Itapemirim — ES, ligada à Superintendência Regional de Educação de Cachoeiro de Itapemirim.\n\nO projeto reúne protocolo de enfrentamento ao racismo, galeria de personalidades negras, dicas antirracistas, mural de vozes e esta assistente virtual.\n\nPara informações sobre matrícula, horários e contato, procure a secretaria da escola. Se quiser registrar uma sugestão ou um relato, use o Mural de Vozes.',
  },
  {
    id: 'quem-sou',
    keywords: ['quem e voce', 'seu nome', 'dandara ia', 'voce e um robo', 'assistente', 'voce e real', 'robo'],
    answer:
      'Sou a Dandara IA, assistente virtual deste projeto. Meu nome homenageia Dandara dos Palmares, guerreira e estrategista do Quilombo dos Palmares.\n\nNão sou uma pessoa: sou um programa criado para organizar os conteúdos do site e responder dúvidas sobre a Lei 10.639/03, racismo, bullying, o protocolo da escola, as personalidades negras e as dicas antirracistas.\n\nSe a sua dúvida for sobre algo pessoal e difícil, procure também um adulto de confiança na escola — eu não substituo esse apoio.',
  },
  {
    id: 'saudacao',
    keywords: ['oi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'e ai', 'eai', 'tudo bem', 'opa', 'salve'],
    answer:
      'Olá! Que bom te ver por aqui. Eu sou a Dandara IA, assistente do projeto Consciência Negra da EEEFM Lions.\n\nPosso explicar a Lei 10.639/03, a diferença entre racismo e bullying, o protocolo da escola, as personalidades da galeria e as dicas do Pequeno Manual Antirracista.\n\nSobre o que você quer conversar?',
  },
  {
    id: 'agradecimento',
    keywords: ['obrigado', 'obrigada', 'valeu', 'agradeco', 'brigado', 'brigada'],
    answer:
      'Eu que agradeço! Aprender e praticar antirracismo todos os dias muda a escola e a vida das pessoas.\n\nSe quiser continuar, dá uma olhada na página Dicas antirracistas ou deixe um depoimento no Mural de Vozes. Estou por aqui.',
  },
];

const fallback = {
  id: 'fallback',
  answer:
    'Ainda não tenho uma resposta pronta para isso, mas posso ajudar com estes temas do projeto:\n\n• Lei 10.639/2003 e currículo escolar.\n• Diferença entre racismo e bullying.\n• Protocolo da escola em 6 passos.\n• Personalidades negras da nossa galeria.\n• Dicas do Pequeno Manual Antirracista.\n• Como publicar um depoimento no mural.\n\nReformule sua pergunta com uma dessas palavras — ou leve a dúvida para um professor, que pode explorar o tema com a turma.',
};

const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s.]/g, ' ');

export function findAnswer(input) {
  const question = normalize(input || '');
  let best = null;
  let bestScore = 0;

  topics.forEach((topic) => {
    let score = 0;
    topic.keywords.forEach((keyword) => {
      if (question.includes(keyword)) {
        score += keyword.includes(' ') ? 3 : keyword.length >= 6 ? 2 : 1;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  });

  return bestScore > 0 ? best.answer : fallback.answer;
}
