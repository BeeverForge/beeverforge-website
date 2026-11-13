export const humanWorkSlug = 'voce-e-uma-maquina';

export const humanWork = {
  slug: humanWorkSlug,
  date: '2026-11-13',
  author: 'Roberto Costa Silva Pereira',
  artwork: '/assets/journal-human-work.jpg',
  artworkWidth: 1200,
  artworkHeight: 630,
  sources: [
    ['Frederick P. Brooks Jr. — No Silver Bullet', 'https://doi.org/10.1109/MC.1987.1663532'],
    ['Robert C. Martin — Interview with Aviator', 'https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code'],
    ['BeeverForge — Open-source documentation', 'https://github.com/BeeverForge/beeverforge-oss'],
    ['ILO & NASK — Generative AI and Jobs', 'https://www.ilo.org/sites/default/files/2025-05/Research%20brief_FINAL_15May2025_21.05.25_1.pdf'],
    ['Kate Crawford — Atlas of AI', 'https://yalebooks.yale.edu/book/9780300264630/atlas-of-ai/'],
    ['Roberto Pereira e Bruna Brito — Conectados às redes sociais e desconectados de nossos corpos', 'https://mittechreview.com.br/conectados-as-redes-sociais-e-desconectados-de-nossos-corpos/'],
  ],
  pt: {
    title: 'Você é uma máquina?',
    seoTitle: 'IA vai substituir programadores? | BeeverForge',
    category: 'IA e trabalho',
    shortDescription: 'O futuro dos programadores na era da IA',
    summary: "Programadores passaram décadas automatizando o trabalho dos outros. O que acontece com a profissão quando a IA começa a automatizar a escrita e a revisão de código?",
    lead: "Durante décadas, programadores foram pagos para transformar o trabalho dos outros em software. Agora, o trabalho deles virou uma tarefa na fila.",
    coverAlt: 'Uma mão repousa sobre uma bancada ao lado de um relógio de ponto mecânico.',
    coverScope: 'Ilustração editorial gerada com IA.',
    sourceNotes: [
      'O ensaio de 1987 discute a dificuldade de conceber e validar o que um software deve fazer.',
      'Relato de como o autor passou a acompanhar mais a arquitetura e o comportamento do software ao trabalhar com agentes.',
      'Documentação da BeeverForge, anteriormente OpenFactory, sobre seu fluxo de implementação e revisão.',
      'O estudo de 2025 estima o grau de exposição de tarefas ocupacionais à IA generativa.',
      'O livro acompanha a infraestrutura, os recursos naturais e o trabalho que sustentam a IA.',
      'Ensaio publicado na MIT Technology Review Brasil sobre tecnologia, poder e comportamento nas redes sociais.',
    ],
    sections: [
      {
        id: 'codigo',
        heading: "A primeira linha ficou barata",
        paragraphs: [
          "Num quadro de tarefas, “adicionar um botão de excluir conta” parece um pedido simples. A IA pode entregar o botão antes que a equipe combine o que “excluir” quer dizer. A pessoa perde o acesso na hora? Os dados somem também? Uma resposta cabe numa linha. As consequências ficam no produto.",
          "Em <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>, Frederick Brooks já situava a dificuldade de construir software nas decisões sobre o que ele deve fazer. Décadas depois, Robert C. Martin, o Uncle Bob, contou à <a href=\"#source-2\">Aviator<sup>[2]</sup></a> que, ao trabalhar com agentes, passou a prestar mais atenção à arquitetura e ao comportamento do sistema. Quando o código sai rápido, as perguntas que a equipe deixou em aberto também chegam mais rápido a quem usa o produto.",
        ],
      },
      {
        id: 'entrega',
        heading: "A empresa ainda vai precisar de mim?",
        paragraphs: [
          "A pergunta incomoda porque, para algumas entregas, já dá para imaginar um chamado indo da fila a uma proposta de alteração sem passar pelas mãos de um desenvolvedor. Na <a href=\"#source-3\">BeeverForge de código aberto, antes chamada OpenFactory<sup>[3]</sup></a>, agentes implementam a tarefa, executam verificações e encaminham a proposta para revisão. Quem decide o que entra em produção ainda precisa entender o que está aprovando. Essa pessoa pode vir de outra área.",
          "Então a IA vai substituir programadores? Em 2025, a <a href=\"#source-4\">OIT e o instituto polonês NASK<sup>[4]</sup></a> estimaram que cerca de um em cada quatro trabalhadores no mundo estava em uma ocupação com algum grau de exposição à IA generativa. A unidade da mudança é muitas vezes a tarefa. O que isso faz com o emprego passa por uma decisão concreta: quem assume o trabalho que resta e quanto tempo recebe para fazê-lo?",
        ],
      },
      {
        id: 'trabalho',
        heading: "A hora que some da conta",
        paragraphs: [
          "Em <a href=\"#source-5\"><em>Atlas da IA</em><sup>[5]</sup></a>, Kate Crawford acompanha o trabalho humano, a energia e os materiais por trás de uma resposta que aparece em segundos. Olhe para o outro lado da tela. Se uma equipe passa a receber dez alterações para revisar no tempo em que recebia duas, ela ganhou velocidade na produção de código. Na revisão, ganhou uma fila.",
        ],
      },
      {
        id: 'ritmo',
        heading: "Você é uma máquina",
        paragraphs: [
          "Em <em>O capital</em>, Marx descreve o que acontece quando a máquina dita o ritmo do trabalho. Em <em>Vigiar e punir</em>, Foucault mostra como horários e avaliações ensinam as pessoas a seguir um ritmo. Bruna Brito e eu levamos essa pergunta às redes sociais num <a href=\"#source-6\">ensaio para a MIT Technology Review Brasil<sup>[6]</sup></a>. Hoje ela cabe no quadro de tarefas: quando o painel só conta entregas, quem vai querer ser a pessoa que pede mais um dia para entender o problema?",
          "“Você é uma máquina” sempre soou como elogio a quem dava conta de tudo. Agora imagine que a máquina faça em um dia o que tomava a semana inteira. Na segunda à tarde, você fecha o notebook ou recebe o trabalho de mais quatro dias?",
        ],
      },
    ],
  },
  en: {
    title: 'Are you a machine?',
    seoTitle: 'Will AI Replace Software Developers? | BeeverForge',
    category: 'AI and work',
    shortDescription: 'The future of software developers in the age of AI',
    summary: "Programmers spent decades automating other people’s work. What happens to the profession when AI starts automating the writing and review of code?",
    lead: "For decades, programmers were paid to turn other people’s work into software. Now their own work is a ticket in the queue.",
    coverAlt: 'A hand rests on a workbench beside a mechanical time clock.',
    coverScope: 'AI-generated editorial illustration.',
    sourceNotes: [
      'The 1987 essay discusses the difficulty of conceiving and validating what software should do.',
      'Martin describes paying closer attention to architecture and software behavior while working with agents.',
      'BeeverForge, formerly OpenFactory, documents its implementation and review workflow.',
      'The 2025 study estimates how exposed occupational tasks are to generative AI.',
      'The book examines the infrastructure, natural resources, and labor underpinning AI.',
      'An essay in MIT Technology Review Brasil on technology, power, and behavior on social media.',
    ],
    sections: [
      {
        id: 'codigo',
        heading: "The first line got cheap",
        paragraphs: [
          "On a task board, “Add a delete-account button” sounds simple. AI can deliver the button before the team agrees on what “delete” means. Does the person lose access immediately? Does their data disappear too? The answer fits on one line. The consequences stay in the product.",
          "In <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>, Frederick Brooks located the difficulty of building software in deciding what it should do. Decades later, Robert C. Martin, known as Uncle Bob, told <a href=\"#source-2\">Aviator<sup>[2]</sup></a> that working with agents led him to pay closer attention to architecture and system behavior. When code arrives fast, the questions the team left unresolved also reach the people using the product faster.",
        ],
      },
      {
        id: 'entrega',
        heading: "Will the company still need me?",
        paragraphs: [
          "It’s an uncomfortable question because, for some changes, it’s already possible to picture a ticket moving from the queue to a proposed change without passing through a developer’s hands. In <a href=\"#source-3\">the open-source BeeverForge project, formerly OpenFactory<sup>[3]</sup></a>, agents implement a task, run checks, and submit the change for review. Whoever decides what goes into production still needs to understand what they’re approving. That person might come from another department.",
          "So will AI replace software developers? In 2025, the <a href=\"#source-4\">ILO and Poland’s NASK institute<sup>[4]</sup></a> estimated that about one in four workers worldwide held a job with some exposure to generative AI. Change often starts with a task. What that does to a job comes down to a practical decision. Who takes on the work that remains, and how much time do they get to do it?",
        ],
      },
      {
        id: 'trabalho',
        heading: "The missing hour",
        paragraphs: [
          "In <a href=\"#source-5\"><em>Atlas of AI</em><sup>[5]</sup></a>, Kate Crawford follows the labor, energy, and materials behind an answer that appears in seconds. Now look at the other side of the screen. If a team gets ten changes to review in the time it used to get two, code production has sped up. On the review side, it has gained a backlog.",
        ],
      },
      {
        id: 'ritmo',
        heading: "You’re a machine",
        paragraphs: [
          "In <em>Capital</em>, Marx describes what happens when machinery sets the pace of work. In <em>Discipline and Punish</em>, Foucault shows how schedules and assessments teach people to keep pace. Bruna Brito and I brought that question to social media in <a href=\"#source-6\">an essay for MIT Technology Review Brasil<sup>[6]</sup></a>. Today it applies just as well to the task board. When the dashboard only counts completed tickets, who wants to be the person who asks for one more day to understand the problem?",
          "“You’re a machine” always sounded like a compliment for someone who could do it all. Now imagine the machine takes a day to do what used to take a week. On Monday afternoon, do you close your laptop or get four more days of work?",
        ],
      },
    ],
  },
  es: {
    title: '¿Eres una máquina?',
    seoTitle: '¿La IA reemplazará a los programadores? | BeeverForge',
    category: 'IA y trabajo',
    shortDescription: 'El futuro de los programadores en la era de la IA',
    summary: "Los programadores llevan décadas automatizando el trabajo ajeno. ¿Qué pasa con la profesión cuando la IA empieza a automatizar la escritura y la revisión de código?",
    lead: "Durante décadas, a los programadores les pagaron por convertir el trabajo ajeno en software. Ahora su propio trabajo es una tarea más en la cola.",
    coverAlt: 'Una mano descansa sobre un banco de trabajo junto a un reloj mecánico de fichar.',
    coverScope: 'Ilustración editorial generada con IA.',
    sourceNotes: [
      'El ensayo de 1987 aborda la dificultad de concebir y validar lo que debe hacer un programa.',
      'Martin relata cómo pasó a centrarse más en la arquitectura y el comportamiento del software al trabajar con agentes.',
      'BeeverForge, antes OpenFactory, documenta su flujo de implementación y revisión.',
      'El estudio de 2025 estima el grado de exposición de las tareas laborales a la IA generativa.',
      'El libro examina la infraestructura, los recursos naturales y el trabajo que sostienen la IA.',
      'Ensayo publicado en MIT Technology Review Brasil sobre tecnología, poder y comportamiento en las redes sociales.',
    ],
    sections: [
      {
        id: 'codigo',
        heading: "La primera línea sale barata",
        paragraphs: [
          "En un tablero de tareas, «Añadir un botón para eliminar la cuenta» parece un pedido sencillo. La IA puede entregar el botón antes de que el equipo acuerde qué significa «eliminar». ¿La persona pierde el acceso en el acto? ¿Desaparecen también sus datos? La respuesta cabe en una línea. Las consecuencias se quedan en el producto.",
          "En <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>, Frederick Brooks ya situaba la dificultad de construir software en decidir qué debe hacer. Décadas después, Robert C. Martin, conocido como Uncle Bob, contó a <a href=\"#source-2\">Aviator<sup>[2]</sup></a> que trabajar con agentes lo llevó a prestar más atención a la arquitectura y al comportamiento del sistema. Cuando el código sale rápido, las preguntas que el equipo dejó pendientes también llegan antes a quienes usan el producto.",
        ],
      },
      {
        id: 'entrega',
        heading: "¿La empresa seguirá necesitándome?",
        paragraphs: [
          "La pregunta incomoda porque, para algunos cambios, ya se puede imaginar una tarea que pasa de la cola a una propuesta de cambio sin pasar por las manos de un desarrollador. En <a href=\"#source-3\">el proyecto de código abierto BeeverForge, antes OpenFactory<sup>[3]</sup></a>, los agentes implementan la tarea, ejecutan verificaciones y envían la propuesta a revisión. Quien decide qué llega a producción todavía necesita entender qué está aprobando. Esa persona puede venir de otra área.",
          "Entonces, ¿la IA reemplazará a los programadores? En 2025, la <a href=\"#source-4\">OIT y el instituto polaco NASK<sup>[4]</sup></a> estimaron que cerca de uno de cada cuatro trabajadores en el mundo tenía una ocupación con algún grado de exposición a la IA generativa. El cambio suele empezar por una tarea. Lo que eso supone para el empleo depende de una decisión concreta. ¿Quién asume el trabajo que queda y cuánto tiempo tiene para hacerlo?",
        ],
      },
      {
        id: 'trabalho',
        heading: "La hora que desaparece de la cuenta",
        paragraphs: [
          "En <a href=\"#source-5\"><em>Atlas de IA</em><sup>[5]</sup></a>, Kate Crawford rastrea el trabajo humano, la energía y los materiales que hay detrás de una respuesta que aparece en segundos. Miremos al otro lado de la pantalla. Si al equipo le llegan diez cambios para revisar en el tiempo en que antes le llegaban dos, ha ganado velocidad en la producción de código. En la revisión, ha ganado una cola.",
        ],
      },
      {
        id: 'ritmo',
        heading: "Eres una máquina",
        paragraphs: [
          "En <em>El capital</em>, Marx describe qué ocurre cuando la máquina marca el ritmo del trabajo. En <em>Vigilar y castigar</em>, Foucault muestra cómo los horarios y las evaluaciones enseñan a seguir un ritmo. Bruna Brito y yo llevamos esa pregunta a las redes sociales en <a href=\"#source-6\">un ensayo para MIT Technology Review Brasil<sup>[6]</sup></a>. Hoy la pregunta cabe en el tablero de tareas. Cuando el panel solo cuenta entregas, ¿quién quiere ser la persona que pide un día más para entender el problema?",
          "«Eres una máquina» siempre sonó a elogio para quien podía con todo. Ahora imagina que la máquina hace en un día lo que llevaba una semana. El lunes por la tarde, ¿cierras el portátil o te llegan otros cuatro días de trabajo?",
        ],
      },
    ],
  },
};
