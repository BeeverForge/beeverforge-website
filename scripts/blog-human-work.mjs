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
    ["Robert C. Martin — Interview with Aviator", "https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code"],
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
      "Robert C. Martin descreve como passou a orientar agentes, examinar a arquitetura e experimentar o software, lendo pouco do código gerado.",
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
          "Na BeeverForge, já temos soluções em produção cujo código foi todo escrito por agentes. Usamos a mesma fábrica para <a href=\"#source-8\">manter a própria BeeverForge<sup>[8]</sup></a>. Quem trabalha no projeto continua definindo o que precisa mudar e que evidências mostram que a mudança funcionou.",
          "Vale voltar ao cartão perfurado. Durante muito tempo, quem projetava um sistema também passava boa parte do dia operando a ferramenta que o construía. Os cartões deram lugar às linguagens, e o <em>vibe coding</em> tornou possível começar pela conversa. A fábrica dá o passo seguinte: assume a implementação como rotina. É aí que a divisão, antes escondida dentro do mesmo cargo, fica visível. Escrever as instruções é um trabalho. Decidir como o sistema deve se comportar, inclusive quando as coisas dão errado, é outro.",
          "Robert C. Martin, o <a href=\"#source-9\">Uncle Bob<sup>[9]</sup></a>, fez carreira ensinando gente a escrever código melhor. Em entrevista de 2026, o autor de <em>Clean Code</em> contou que hoje quase não vê o código gerado. Ele diz aos agentes o que quer e quais limites precisam respeitar. Depois examina a arquitetura e usa o software para ver como ele se comporta. A experiência de décadas escrevendo código aparece nas instruções que ele dá e no que percebe quando põe o sistema à prova.",
          "De volta à pergunta do cargo: sim, ainda há trabalho para o desenvolvedor que sabe projetar e investigar. Quando alguém sugere “deixar o cliente excluir a conta”, o engenheiro ajuda a descobrir o que a empresa realmente quer dizer por excluir. Ele decide com a equipe quando o acesso acaba e o que o teste precisa demonstrar. Se o sistema se comporta de outro jeito em produção, ele sabe que evidência buscar. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> já tratava essas decisões como parte central da engenharia. Agora elas podem ocupar o centro da jornada também.",
        ],
      },
      {
        id: 'ritmo',
        heading: "Você é uma máquina?",
        paragraphs: [
          "“Você é uma máquina” era a maneira de elogiar quem entregava muito e aguentava o ritmo. Quem aprendeu a programar desse jeito sabe o que dá orgulho: ver algo funcionar porque você entendeu um problema que, até ali, ninguém tinha conseguido explicar direito. Digitar a solução era parte desse prazer. Descobri-la ainda é.",
          "Quando a máquina assume o teclado, dá para dedicar mais tempo a esse trabalho. Conversar com quem vai usar o software. Experimentar uma arquitetura antes de comprometer a equipe com ela. Escrever um teste para o caso que todo mundo esqueceu. É assim que o programador ocupa mais espaço como engenheiro.",
          "Talvez o elogio que a gente devesse aprender a fazer seja outro: “Ainda bem que você percebeu isso antes de a gente construir.”",
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
      "Robert C. Martin describes directing agents, examining architecture, and trying the software while reading little of the generated code.",
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
          "At BeeverForge, we already have software in production whose code was written entirely by agents. We use the same factory to <a href=\"#source-8\">maintain BeeverForge itself<sup>[8]</sup></a>. The people working on the project still decide what needs to change and what evidence would show that it worked.",
          "Go back to the punched card. For a long time, the person who designed a system also spent much of the day operating the tool that built it. Cards gave way to programming languages, and vibe coding made it possible to start with a conversation. The factory takes the next step: it makes implementation a routine operation. That exposes a division the job title used to hide. Writing the instructions is one kind of work. Deciding how the system should behave, including when things go wrong, is another.",
          "Robert C. Martin, better known as <a href=\"#source-9\">Uncle Bob<sup>[9]</sup></a>, made a career teaching people to write better code. In a 2026 interview, the author of <em>Clean Code</em> said he now barely sees the generated code. He tells the agents what he wants and which constraints matter. Then he examines the architecture and tries the software to see how it behaves. Decades of writing code show up in the instructions he gives and in what he notices when he puts the system to the test.",
          "Back to the question about your job: yes, there is still work for developers who can design and investigate. When someone says “let customers delete their accounts,” the engineer helps work out what the company actually means by delete. They decide with the team when access ends and what the test needs to prove. If the system behaves differently in production, they know what evidence to look for. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> already put these decisions at the heart of engineering. Now they can be at the center of the workday too.",
        ],
      },
      {
        id: 'ritmo',
        heading: "Are you a machine?",
        paragraphs: [
          "“You’re a machine” was how we praised someone who delivered a lot and kept up the pace. If you learned to program that way, you know what makes you proud: seeing something work because you understood a problem nobody had managed to explain properly. Typing out the solution was part of that pleasure. Discovering it still is.",
          "When the machine takes over the keyboard, you can spend more time on that work. Talk to the people who will use the software. Try out an architecture before committing the team to it. Write a test for the case everyone forgot. That’s how programmers make more room for engineering in their work.",
          "Maybe we need to learn a different compliment: “I’m glad you spotted that before we built it.”",
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
      "Robert C. Martin cuenta cómo pasó a dirigir agentes, examinar la arquitectura y probar el software leyendo muy poco del código generado.",
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
          "En BeeverForge ya tenemos soluciones en producción cuyo código fue escrito íntegramente por agentes. Usamos la misma fábrica para <a href=\"#source-8\">mantener la propia BeeverForge<sup>[8]</sup></a>. Quienes trabajan en el proyecto siguen decidiendo qué debe cambiar y qué evidencia demuestra que el cambio funcionó.",
          "Volvamos a la tarjeta perforada. Durante mucho tiempo, quien diseñaba un sistema también pasaba buena parte del día manejando la herramienta con la que lo construía. Las tarjetas dieron paso a los lenguajes de programación, y el vibe coding permitió empezar por una conversación. La fábrica da el siguiente paso: convierte la implementación en una operación rutinaria. Así se hace visible una división que el puesto solía ocultar. Escribir las instrucciones es un trabajo. Decidir cómo debe comportarse el sistema, incluso cuando las cosas salen mal, es otro.",
          "Robert C. Martin, conocido como <a href=\"#source-9\">Uncle Bob<sup>[9]</sup></a>, hizo carrera enseñando a escribir mejor código. En una entrevista de 2026, el autor de <em>Clean Code</em> contó que hoy apenas ve el código generado. Les dice a los agentes qué quiere y qué límites deben respetar. Después examina la arquitectura y usa el software para ver cómo se comporta. Sus décadas escribiendo código se reflejan en las instrucciones que da y en lo que detecta al poner a prueba el sistema.",
          "Volvamos a la pregunta sobre el puesto: sí, sigue habiendo trabajo para quien sabe diseñar e investigar. Cuando alguien propone «permitir que el cliente elimine su cuenta», el ingeniero ayuda a aclarar qué entiende la empresa por eliminar. Decide con el equipo cuándo termina el acceso y qué debe demostrar la prueba. Si el sistema se comporta de otra forma en producción, sabe qué evidencia buscar. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> ya situaba estas decisiones en el centro de la ingeniería. Ahora también pueden ocupar el centro de la jornada.",
        ],
      },
      {
        id: 'ritmo',
        heading: "¿Eres una máquina?",
        paragraphs: [
          "«Eres una máquina» era nuestra forma de elogiar a quien entregaba mucho y seguía el ritmo. Si aprendiste a programar así, sabes de dónde viene el orgullo: ver que algo funciona porque entendiste un problema que hasta entonces nadie había sabido explicar bien. Teclear la solución era parte de ese placer. Descubrirla sigue siéndolo.",
          "Cuando la máquina se ocupa del teclado, puedes dedicar más tiempo a ese trabajo. Hablar con quienes van a usar el software. Probar una arquitectura antes de comprometer al equipo con ella. Escribir una prueba para el caso que todos olvidaron. Así es como el programador gana espacio para ejercer de ingeniero.",
          "Quizá tengamos que aprender otro elogio: «Menos mal que te diste cuenta antes de que lo construyéramos».",
        ],
      },
    ],
  },
};
