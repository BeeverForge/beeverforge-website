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
        ladder: {
          caption: "Na <a href=\"#source-3\">escada de Dan Shapiro<sup>[3]</sup></a>, cada degrau transfere mais trabalho à máquina.",
          steps: ["Escrever o código", "Delegar tarefas pontuais", "Programar em dupla com a IA", "Revisar o código do agente", "Especificar e conferir os testes", "Entregar a especificação à fábrica"],
        },
        paragraphs: [
          "Uma conversa pode render um protótipo. Industrializar é ter um processo que funciona também na próxima mudança. Na <a href=\"#source-4\">BeeverForge<sup>[4]</sup></a>, a tarefa entra com critérios de aceitação. A fábrica planeja, implementa, roda as verificações do projeto e encaminha a mudança para uma revisão independente. Esse fluxo se repete a cada tarefa. Em outros fluxos, a mudança pode inclusive ir à produção <a href=\"#source-6\">sem aprovação humana a cada entrega<sup>[6]</sup></a>.",
        ],
      },
      {
        id: 'trabalho',
        heading: "A empresa ainda vai precisar de mim?",
        paragraphs: [
          "<strong>Para escrever cada linha de código, já pode dispensar você.</strong> Se esse era o motivo da contratação, a vaga perde sua razão de existir. Promover todo programador a revisor também só empurra o problema para o próximo degrau.",
          "A empresa tem outro trabalho para quem sabe projetar o sistema. Imagine especificar “o cliente pode excluir a conta”. A IA entrega o botão. A engenharia define o que acontece com o acesso, quais dados precisam sumir e que teste demonstra que sumiram. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> já colocava essa dificuldade no centro do ofício. Quando a implementação vira rotina da fábrica, saber projetar, testar e medir o comportamento do sistema passa a definir o cargo.",
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
        ladder: {
          caption: "Each rung of <a href=\"#source-3\">Dan Shapiro’s ladder<sup>[3]</sup></a> hands more work to the machine.",
          steps: ["Write the code", "Delegate individual tasks", "Pair with AI", "Review the agent’s code", "Write a spec and check the tests", "Give the spec to the factory"],
        },
        paragraphs: [
          "A conversation can get you a prototype. Industrialization gives you a process you can run again for the next change. At <a href=\"#source-4\">BeeverForge<sup>[4]</sup></a>, a task comes in with acceptance criteria. The factory plans the change, implements it, runs the project checks, and sends it for independent review. The same workflow runs for each task. Other workflows can even ship changes to production <a href=\"#source-6\">without human approval for each release<sup>[6]</sup></a>.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Will the company still need me?",
        paragraphs: [
          "<strong>It can already do without you writing every line of code.</strong> If that was the reason for hiring, the role loses its reason to exist. Promoting every programmer to reviewer just moves the problem up a rung.",
          "The company has different work for someone who can design a system. Imagine specifying “customers can delete their accounts.” AI delivers the button. Engineering decides what happens to access, which data has to go, and what test proves it’s gone. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> already put that difficulty at the heart of the job. Once implementation is routine factory work, the role is defined by the ability to design, test, and measure how the system behaves.",
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
        ladder: {
          caption: "Cada peldaño de la <a href=\"#source-3\">escala de Dan Shapiro<sup>[3]</sup></a> transfiere más trabajo a la máquina.",
          steps: ["Escribir el código", "Delegar tareas puntuales", "Programar en pareja con la IA", "Revisar el código del agente", "Especificar y comprobar las pruebas", "Entregar la especificación a la fábrica"],
        },
        paragraphs: [
          "Una conversación puede dar lugar a un prototipo. Industrializar significa contar con un proceso que sirva también para el siguiente cambio. En <a href=\"#source-4\">BeeverForge<sup>[4]</sup></a>, la tarea llega con criterios de aceptación. La fábrica planifica, implementa, ejecuta las comprobaciones del proyecto y envía el cambio a una revisión independiente. El flujo se repite en cada tarea. Otros flujos incluso permiten llevar el cambio a producción <a href=\"#source-6\">sin aprobación humana en cada entrega<sup>[6]</sup></a>.",
        ],
      },
      {
        id: 'trabalho',
        heading: "¿La empresa seguirá necesitándome?",
        paragraphs: [
          "<strong>Para escribir cada línea de código, ya puede prescindir de ti.</strong> Si ese era el motivo de la contratación, el puesto pierde su razón de ser. Convertir a todos los programadores en revisores solo traslada el problema al siguiente peldaño.",
          "La empresa tiene otro trabajo para quien sabe diseñar el sistema. Imagina que la especificación dice «el cliente puede eliminar su cuenta». La IA entrega el botón. La ingeniería define qué pasa con el acceso, qué datos deben borrarse y qué prueba demuestra que se borraron. <a href=\"#source-5\">Frederick Brooks<sup>[5]</sup></a> ya situaba esa dificultad en el centro del oficio. Cuando implementar se vuelve una rutina de la fábrica, saber diseñar, probar y medir el comportamiento del sistema pasa a definir el puesto.",
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
