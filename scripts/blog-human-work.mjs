const punchedCards = '/assets/journal-punched-cards.jpg';
const robot = '/assets/journal-vibe-coding.jpg';

export const humanWorkSlug = 'voce-e-uma-maquina';

export const humanWork = {
  slug: humanWorkSlug,
  date: '2026-11-13',
  author: 'Roberto Costa Silva Pereira',
  artwork: '/assets/journal-human-work.jpg',
  artworkWidth: 1200,
  artworkHeight: 630,
  sources: [
    ["IBM — The punched card", "https://www.ibm.com/history/punched-card"],
    ["Andrej Karpathy — Vibe coding", "https://x.com/karpathy/status/1886192184808149383"],
    ["Dan Shapiro — The Five Levels", "https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/"],
    ["BeeverForge — Open-source documentation", "https://github.com/BeeverForge/beeverforge-oss#your-first-ticket"],
    ["Frederick P. Brooks Jr. — No Silver Bullet", "https://doi.org/10.1109/MC.1987.1663532"],
    ["GitHub Docs — Managing environments for deployment", "https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments"],
    ["Justin McCarthy — StrongDM Software Factory", "https://factory.strongdm.ai/"],
    ["BeeverForge — Pull request #539", "https://github.com/BeeverForge/beeverforge-oss/pull/539"],
  ],
  pt: {
    title: 'Você é uma máquina?',
    seoTitle: 'IA vai substituir programadores? | BeeverForge',
    category: 'IA e trabalho',
    shortDescription: 'O futuro dos programadores na era da IA',
    summary: "Do cartão perfurado ao vibe coding e à fábrica de software com IA. O que acontece com o programador quando escrever código deixa de ser o centro do trabalho?",
    lead: "“Você é uma máquina” era um elogio para quem produzia sem parar. Agora a máquina escreve o código. Se a empresa mede um engenheiro pelo quanto ele produz, já escolheu o trabalho que vai automatizar primeiro.",
    coverAlt: 'Uma mão repousa sobre uma bancada ao lado de um relógio de ponto mecânico.',
    coverScope: 'Ilustração editorial gerada com IA.',
    sourceNotes: [
      "Como os cartões perfurados eram usados para carregar programas.",
      "O post que deu nome ao vibe coding.",
      "A escala de autonomia de 0 a 5, publicada em janeiro de 2026.",
      "O fluxo de implementação, testes e revisão da fábrica.",
      "Por que decidir o que o software deve fazer é parte central da engenharia.",
      "Como a aprovação de um deploy pode ser configurada.",
      "Relato da equipe que delegou a escrita e a revisão do código a agentes.",
      "Proposta de alteração aberta pela própria fábrica no repositório da BeeverForge.",
    ],
    sections: [
      {
        id: 'codigo',
        heading: "Do cartão à conversa",
        paragraphs: [
          "Antes de digitar um programa na tela, era possível escrevê-lo numa pilha de cartões perfurados. Os furos representavam caracteres, e o computador lia os cartões em ordem. Hoje dá para começar descrevendo em palavras o que você quer que o programa faça.",
        ],
        timeline: [
          ["Cartão perfurado", "Cada cartão podia carregar uma linha de programa. Para rodar, era preciso levar a pilha ao leitor. <a href=\"#source-1\">[1]</a>", { src: punchedCards, alt: "Uma mão segura cartões perfurados diante da bandeja de um leitor.", credit: "Ilustração gerada com IA." }],
          ["Linguagens de programação", "O código virou o texto que colegas liam e mantinham. Compiladores e interpretadores cuidavam de fazê-lo rodar."],
          ["Vibe coding", "Você descreve o que quer, experimenta o resultado e pede ajustes. O código pode ficar fora da conversa. <a href=\"#source-2\">[2]</a>", { src: robot, alt: "Um robô e uma pessoa olham juntos para a tela de uma conversa.", credit: "Ilustração gerada com IA." }],
        ],
      },
      {
        id: 'entrega',
        heading: "Do chat à fábrica",
        intro: "Você pede uma tela no chat e, minutos depois, tem algo para experimentar. Quando chega a próxima mudança, o trabalho é outro: fazer o pedido virar código, rodar os testes do projeto e saber se a entrega atende ao que foi combinado. A escada abaixo mostra quanto desse processo já pode passar para a máquina.",
        ladder: {
          caption: "Na <a href=\"#source-3\">escada de Dan Shapiro<sup>[3]</sup></a>, cada degrau transfere mais trabalho à máquina.",
          steps: ["Escrever o código", "Delegar tarefas pontuais", "Programar em dupla com a IA", "Revisar o código do agente", "Especificar e conferir os testes", "Entregar a especificação à fábrica"],
        },
        paragraphs: [
          "Industrializar é repetir esse processo a cada mudança. Na <a href=\"#source-4\">BeeverForge<sup>[4]</sup></a>, a tarefa entra com critérios de aceitação. A fábrica planeja, implementa, roda as verificações do projeto e encaminha a mudança para uma revisão independente. Esse fluxo se repete a cada tarefa. Em outros fluxos, a mudança pode inclusive ir à produção <a href=\"#source-6\">sem aprovação humana a cada entrega<sup>[6]</sup></a>.",
        ],
      },
      {
        id: 'trabalho',
        heading: "A empresa ainda vai precisar de mim?",
        paragraphs: [
          "<strong>Para escrever cada linha de código, a empresa já pode dispensar você.</strong> Uma equipe da <a href=\"#source-7\">StrongDM<sup>[7]</sup></a> levou a ideia ao pé da letra. Os engenheiros definiam as especificações e os cenários de teste. Os agentes escreviam o código e rodavam as verificações. A equipe também dispensou a revisão manual do código.",
          "A BeeverForge já usa a própria fábrica para evoluir. Uma <a href=\"#source-8\">mudança no repositório da BeeverForge<sup>[8]</sup></a> começou como um chamado no quadro. A fábrica implementou a alteração, rodou verificações e abriu a proposta. A decisão de incorporar a mudança cabe à equipe.",
          "Na prática, o trabalho mudou de lugar. Se o cliente pode excluir a conta, alguém precisa decidir quando o acesso termina, quais dados devem sumir e como comprovar que sumiram. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> já colocava esse tipo de decisão no centro da engenharia. A máquina consegue escrever o botão. O trabalho de engenharia começa por definir o que deve acontecer depois do clique.",
        ],
      },
      {
        id: 'ritmo',
        heading: "Você é uma máquina?",
        paragraphs: [
          "A máquina consegue entregar dez mudanças numa manhã. Um engenheiro percebe que três vão criar problemas e manda parar. No painel da empresa, ele acabou de reduzir a produtividade. Se “você é uma máquina” ainda é o maior elogio, o painel está medindo o trabalho errado.",
        ],
      },
    ],
  },
  en: {
    title: 'Are you a machine?',
    seoTitle: 'Will AI Replace Software Developers? | BeeverForge',
    category: 'AI and work',
    shortDescription: 'The future of software developers in the age of AI',
    summary: "From punched cards to vibe coding and AI software factories. What happens to programmers when writing code stops being the core of the job?",
    lead: "“You’re a machine” was a compliment for someone who could produce without slowing down. Now the machine writes the code. If a company judges engineers by how much they produce, it has already picked the work it will automate first.",
    coverAlt: 'A hand rests on a workbench beside a mechanical time clock.',
    coverScope: 'AI-generated editorial illustration.',
    sourceNotes: [
      "How punched cards were used to load programs.",
      "The post that named vibe coding.",
      "The autonomy scale from 0 to 5, published in January 2026.",
      "The factory’s implementation, testing, and review workflow.",
      "Why deciding what software should do is central to engineering.",
      "How deployment approval can be configured.",
      "The team’s account of delegating code writing and review to agents.",
      "A change the factory proposed in BeeverForge’s own repository.",
    ],
    sections: [
      {
        id: 'codigo',
        heading: "From cards to conversation",
        paragraphs: [
          "Before programmers could type a program on a screen, they could write it on a stack of punched cards. The holes represented characters, and the computer read the cards in order. Today you can start by describing in words what you want the program to do.",
        ],
        timeline: [
          ["Punched cards", "A card could hold one line of a program. Running it meant taking the stack to a card reader. <a href=\"#source-1\">[1]</a>", { src: punchedCards, alt: "A hand holds punched cards in front of the reader tray.", credit: "AI-generated illustration." }],
          ["Programming languages", "Code became the text colleagues read and maintained. Compilers and interpreters took care of running it."],
          ["Vibe coding", "Describe what you want, try the result, and ask for changes. The code can stay out of the conversation. <a href=\"#source-2\">[2]</a>", { src: robot, alt: "A robot and a person look together at a chat screen.", credit: "AI-generated illustration." }],
        ],
      },
      {
        id: 'entrega',
        heading: "From chat to factory",
        intro: "Ask for a screen in chat and minutes later you have something to try. The next change brings a different job: turn the request into code, run the project’s tests, and check whether the result meets the agreed requirements. The ladder below shows how much of that process you can hand to the machine.",
        ladder: {
          caption: "Each rung of <a href=\"#source-3\">Dan Shapiro’s ladder<sup>[3]</sup></a> hands more work to the machine.",
          steps: ["Write the code", "Delegate individual tasks", "Pair with AI", "Review the agent’s code", "Write a spec and check the tests", "Give the spec to the factory"],
        },
        paragraphs: [
          "Industrializing means repeating that process for every change. At <a href=\"#source-4\">BeeverForge<sup>[4]</sup></a>, a task comes in with acceptance criteria. The factory plans the change, implements it, runs the project checks, and sends it for independent review. The same workflow runs for each task. Other workflows can even ship changes to production <a href=\"#source-6\">without human approval for each release<sup>[6]</sup></a>.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Will the company still need me?",
        paragraphs: [
          "<strong>To write every line of code, the company can already do without you.</strong> A team at <a href=\"#source-7\">StrongDM<sup>[7]</sup></a> took that idea literally. Engineers defined the specifications and test scenarios. Agents wrote the code and ran the checks. The team also did away with manual code review.",
          "BeeverForge already uses its own factory to develop itself. A <a href=\"#source-8\">change in BeeverForge’s own repository<sup>[8]</sup></a> started as a ticket on the board. The factory implemented it, ran checks, and opened the pull request. The team decides whether to merge it.",
          "In practice, the work has shifted. If customers can delete their accounts, someone has to decide when access ends, which data goes away, and how to prove it’s gone. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> already put decisions like these at the heart of engineering. The machine can build the button. The engineering starts with deciding what happens after the click.",
        ],
      },
      {
        id: 'ritmo',
        heading: "Are you a machine?",
        paragraphs: [
          "The machine can ship ten changes in a morning. An engineer sees that three will cause problems and stops them. On the company dashboard, they just lowered productivity. If “you’re a machine” is still the highest compliment, the dashboard is measuring the wrong work.",
        ],
      },
    ],
  },
  es: {
    title: '¿Eres una máquina?',
    seoTitle: '¿La IA reemplazará a los programadores? | BeeverForge',
    category: 'IA y trabajo',
    shortDescription: 'El futuro de los programadores en la era de la IA',
    summary: "De la tarjeta perforada al vibe coding y la fábrica de software con IA. ¿Qué pasa con los programadores cuando escribir código deja de ser el centro del trabajo?",
    lead: "«Eres una máquina» era un elogio para quien producía sin parar. Ahora la máquina escribe el código. Si la empresa mide a un ingeniero por cuánto produce, ya ha elegido el trabajo que automatizará primero.",
    coverAlt: 'Una mano descansa sobre un banco de trabajo junto a un reloj mecánico de fichar.',
    coverScope: 'Ilustración editorial generada con IA.',
    sourceNotes: [
      "Cómo se usaban las tarjetas perforadas para cargar programas.",
      "La publicación que dio nombre al vibe coding.",
      "La escala de autonomía del 0 al 5, publicada en enero de 2026.",
      "El flujo de implementación, pruebas y revisión de la fábrica.",
      "Por qué decidir qué debe hacer el software es parte central de la ingeniería.",
      "Cómo se puede configurar la aprobación de un despliegue.",
      "El relato del equipo que delegó la escritura y la revisión del código a agentes.",
      "Una propuesta de cambio abierta por la propia fábrica en el repositorio de BeeverForge.",
    ],
    sections: [
      {
        id: 'codigo',
        heading: "De la tarjeta a la conversación",
        paragraphs: [
          "Antes de teclear un programa en una pantalla, se podía escribir en una pila de tarjetas perforadas. Los agujeros representaban caracteres y la computadora leía las tarjetas en orden. Hoy puedes empezar describiendo con palabras lo que quieres que haga el programa.",
        ],
        timeline: [
          ["Tarjeta perforada", "Una tarjeta podía contener una línea del programa. Para ejecutarlo había que llevar la pila al lector. <a href=\"#source-1\">[1]</a>", { src: punchedCards, alt: "Una mano sostiene tarjetas perforadas delante de la bandeja de un lector.", credit: "Ilustración generada con IA." }],
          ["Lenguajes de programación", "El código se convirtió en el texto que los compañeros leían y mantenían. Los compiladores e intérpretes se encargaban de que pudiera ejecutarse."],
          ["Vibe coding", "Describes lo que quieres, pruebas el resultado y pides ajustes. El código puede quedar fuera de la conversación. <a href=\"#source-2\">[2]</a>", { src: robot, alt: "Un robot y una persona miran juntos una conversación en la pantalla.", credit: "Ilustración generada con IA." }],
        ],
      },
      {
        id: 'entrega',
        heading: "Del chat a la fábrica",
        intro: "Pides una pantalla en el chat y, en unos minutos, tienes algo que probar. Con el siguiente cambio llega otro trabajo: convertir el pedido en código, ejecutar las pruebas del proyecto y comprobar si la entrega cumple lo acordado. La escala de abajo muestra cuánto de ese proceso puede asumir la máquina.",
        ladder: {
          caption: "Cada peldaño de la <a href=\"#source-3\">escala de Dan Shapiro<sup>[3]</sup></a> transfiere más trabajo a la máquina.",
          steps: ["Escribir el código", "Delegar tareas puntuales", "Programar en pareja con la IA", "Revisar el código del agente", "Especificar y comprobar las pruebas", "Entregar la especificación a la fábrica"],
        },
        paragraphs: [
          "Industrializar significa repetir ese proceso con cada cambio. En <a href=\"#source-4\">BeeverForge<sup>[4]</sup></a>, la tarea llega con criterios de aceptación. La fábrica planifica, implementa, ejecuta las comprobaciones del proyecto y envía el cambio a una revisión independiente. El flujo se repite en cada tarea. Otros flujos incluso permiten llevar el cambio a producción <a href=\"#source-6\">sin aprobación humana en cada entrega<sup>[6]</sup></a>.",
        ],
      },
      {
        id: 'trabalho',
        heading: "¿La empresa seguirá necesitándome?",
        paragraphs: [
          "<strong>Para escribir cada línea de código, la empresa ya puede prescindir de ti.</strong> Un equipo de <a href=\"#source-7\">StrongDM<sup>[7]</sup></a> se tomó esa idea al pie de la letra. Los ingenieros definían las especificaciones y los escenarios de prueba. Los agentes escribían el código y ejecutaban las comprobaciones. El equipo también prescindió de la revisión manual del código.",
          "BeeverForge ya usa su propia fábrica para seguir desarrollándose. Un <a href=\"#source-8\">cambio en el repositorio de BeeverForge<sup>[8]</sup></a> empezó como una tarea en el tablero. La fábrica lo implementó, ejecutó las comprobaciones y abrió la propuesta. El equipo decide si la incorpora.",
          "En la práctica, el trabajo ha cambiado de lugar. Si el cliente puede eliminar su cuenta, alguien tiene que decidir cuándo pierde el acceso, qué datos se borran y cómo demostrar que se borraron. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> ya situaba ese tipo de decisiones en el centro de la ingeniería. La máquina puede crear el botón. El trabajo de ingeniería empieza por definir qué debe pasar después del clic.",
        ],
      },
      {
        id: 'ritmo',
        heading: "¿Eres una máquina?",
        paragraphs: [
          "La máquina puede entregar diez cambios en una mañana. Un ingeniero ve que tres van a causar problemas y los detiene. En el panel de la empresa, acaba de reducir la productividad. Si «eres una máquina» sigue siendo el mejor elogio, el panel está midiendo el trabajo equivocado.",
        ],
      },
    ],
  },
};
