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
    summary: 'A IA vai substituir programadores? Veja quais etapas os agentes já podem assumir e como isso muda o papel de quem desenvolve software.',
    lead: "Imagine que a IA da sua equipe aprendeu a cancelar reservas. O código passou nos testes. Na primeira manhã em produção, uma cliente recebe dois reembolsos. O relatório diz que a entrega foi um sucesso. De quem foi o erro?",
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
        heading: "O teste que passou",
        paragraphs: [
          "O pedido no quadro tinha uma linha: “Permitir o cancelamento de reservas”. A cliente cancelou pelo aplicativo. O pagamento demorou a ser atualizado, então ela ligou para o atendimento. O atendente cancelou a mesma reserva pelo painel. Cada caminho tinha seu próprio teste, e os dois passaram. Faltou testar o que acontecia quando os caminhos se encontravam.",
          "Em <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>, Frederick Brooks chama atenção para o trabalho de entender e definir o que um software deve fazer. Aqui, a regra só fica evidente quando a cliente passa do aplicativo para o telefone: uma reserva pode ser cancelada por dois canais, mas só deve ser reembolsada uma vez. Quem conhece os atalhos do atendimento talvez perceba isso antes de quem conhece o código.",
        ],
      },
      {
        id: 'entrega',
        heading: "O desenvolvedor precisa entrar nessa história?",
        paragraphs: [
          "O problema vira um novo chamado, desta vez com a regra explícita. Um agente implementa a correção, roda os testes e encaminha a proposta para revisão. Esse é o tipo de fluxo que a <a href=\"#source-3\">BeeverForge de código aberto, antes chamada OpenFactory<sup>[3]</sup></a>, reúne. Para essa entrega, vale perguntar se o trabalho de escrever cada linha precisa passar por um desenvolvedor.",
          "Robert C. Martin, o Uncle Bob, contou à <a href=\"#source-2\">Aviator<sup>[2]</sup></a> que, quando trabalha com agentes, dedica mais atenção à arquitetura e ao comportamento do sistema. No caso da reserva, isso significaria olhar para o que os dois canais têm em comum. Se o aplicativo e o painel decidem separadamente quando pagar, a próxima duplicidade pode vir de outro caminho.",
          "A IA vai substituir programadores? Algumas entregas podem exigir menos trabalho direto de programação. O tamanho das equipes é outra pergunta. Em 2025, a <a href=\"#source-4\">OIT e o instituto polonês NASK<sup>[4]</sup></a> estimaram que cerca de um em cada quatro trabalhadores no mundo estava numa ocupação com algum grau de exposição à IA generativa. A estimativa trata das tarefas que podem mudar. No caso da reserva, a empresa pode usar o tempo ganho para investigar problemas como esse ou usar o ganho para reduzir a equipe. A decisão é da empresa.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Quem ganha o tempo que a IA economiza?",
        paragraphs: [
          "Enquanto a correção espera aprovação, alguém do financeiro concilia os pagamentos. O atendimento precisa explicar o reembolso em duplicidade à cliente. Em <a href=\"#source-5\"><em>Atlas da IA</em><sup>[5]</sup></a>, Kate Crawford segue o trabalho que fica fora da interface, além da energia e dos materiais que sustentam esses sistemas. A mesma mudança de perspectiva cabe aqui: o relatório de produtividade da engenharia registrou uma tarefa concluída. Onde aparece a hora que o atendimento gastou para resolver o problema?",
        ],
      },
      {
        id: 'ritmo',
        heading: "O elogio que vira meta",
        paragraphs: [
          "Em <em>Vigiar e punir</em>, Michel Foucault descreve como a disciplina organiza o tempo e os gestos. Em <em>O capital</em>, Karl Marx examina o que acontece quando a máquina estabelece o ritmo do trabalho. Bruna Brito e eu discutimos como as plataformas moldam o comportamento em um <a href=\"#source-6\">ensaio sobre redes sociais na MIT Technology Review Brasil<sup>[6]</sup></a>. No trabalho com agentes, vale observar o que a equipe começa a fazer quando o painel recompensa a quantidade de tarefas fechadas. Conversar com o atendimento antes de implementar a mudança pode parecer uma demora. Até chegar a primeira ligação.",
          "“Você é uma máquina” já foi o elogio para quem resolvia tudo sem perder o ritmo. Agora que a máquina consegue fechar a tarefa, quem vai receber o crédito por dizer, antes de todo mundo, que ela ainda está aberta?",
        ],
      },
    ],
  },
  en: {
    title: 'Are you a machine?',
    seoTitle: 'Will AI Replace Software Developers? | BeeverForge',
    category: 'AI and work',
    shortDescription: 'The future of software developers in the age of AI',
    summary: 'Will AI replace software developers? Explore which tasks AI agents can take on and how that changes the role of software engineers.',
    lead: "Imagine your team’s AI has learned to cancel bookings. The code passes every test. On its first morning in production, a customer gets two refunds. The report calls the release a success. Whose mistake was it?",
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
        heading: "The test that passed",
        paragraphs: [
          "The ticket was one line long: “Allow booking cancellations.” The customer canceled in the app. The payment status took a while to update, so she called support. A support rep canceled the same booking from their dashboard. Each route had its own test, and both passed. Nobody had tested what would happen when the two routes met.",
          "In <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>, Frederick Brooks draws attention to the work of figuring out what software should do. Here, the rule only becomes obvious when the customer switches from the app to the phone. A booking can be canceled through two channels, but it should only be refunded once. Someone who knows how customers use support may spot that before someone who knows the code.",
        ],
      },
      {
        id: 'entrega',
        heading: "Does a developer need to be in the loop?",
        paragraphs: [
          "The problem becomes another ticket, this time with the rule spelled out. An agent implements the fix, runs the tests, and submits the proposed change for review. The <a href=\"#source-3\">open-source BeeverForge project, formerly OpenFactory<sup>[3]</sup></a>, brings those steps together. For this change, it is fair to ask whether a developer needs to write each line.",
          "Robert C. Martin, better known as Uncle Bob, told <a href=\"#source-2\">Aviator<sup>[2]</sup></a> that when he works with agents, he pays closer attention to architecture and how the software behaves. For the booking, that would mean looking at what the two channels share. If the app and the dashboard decide separately when to issue a refund, the next duplicate may come through a different route.",
          "Will AI replace software developers? Some changes may take less hands-on programming. Team size is a separate question. In 2025, the <a href=\"#source-4\">ILO and Poland’s NASK institute<sup>[4]</sup></a> estimated that about one in four workers worldwide held a job with some exposure to generative AI. The estimate concerns tasks that might change. In our booking example, the company can use the time it saves to investigate problems like this one, or use the savings to shrink the team. That choice belongs to the company.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Who gets the time AI saves?",
        paragraphs: [
          "While the fix awaits approval, someone in finance reconciles the payments. Support has to explain the duplicate refund to the customer. In <a href=\"#source-5\"><em>Atlas of AI</em><sup>[5]</sup></a>, Kate Crawford follows the work that happens out of sight, along with the energy and materials these systems depend on. Apply that shift in perspective here. The engineering report records a completed ticket. Where does the hour support spent sorting it out show up?",
        ],
      },
      {
        id: 'ritmo',
        heading: "When a compliment becomes a target",
        paragraphs: [
          "In <em>Discipline and Punish</em>, Michel Foucault describes how discipline organizes time and movement. In <em>Capital</em>, Karl Marx considers what happens when machines set the pace. Bruna Brito and I discussed how platforms shape behavior in an <a href=\"#source-6\">essay on social media for MIT Technology Review Brasil<sup>[6]</sup></a>. In teams that work with agents, watch what happens when the dashboard rewards closed tickets. Talking to support before making the change can look like a delay. Until the first call comes in.",
          "“You’re a machine” used to be a compliment for someone who handled everything without slowing down. Now that the machine can close the ticket, who gets credit for being the first to say it’s still open?",
        ],
      },
    ],
  },
  es: {
    title: '¿Eres una máquina?',
    seoTitle: '¿La IA reemplazará a los programadores? | BeeverForge',
    category: 'IA y trabajo',
    shortDescription: 'El futuro de los programadores en la era de la IA',
    summary: '¿La IA reemplazará a los programadores? Explora qué tareas pueden asumir los agentes y cómo cambia el papel de quienes desarrollan software.',
    lead: "Imagina que la IA de tu equipo ha aprendido a cancelar reservas. El código supera todas las pruebas. En su primera mañana en producción, una clienta recibe dos reembolsos. El informe dice que la entrega fue un éxito. ¿De quién fue el error?",
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
        heading: "La prueba que salió bien",
        paragraphs: [
          "La tarea ocupaba una línea: «Permitir la cancelación de reservas». La clienta canceló desde la aplicación. Como el estado del pago tardó en actualizarse, llamó a atención al cliente. Desde allí volvieron a cancelar la misma reserva en su panel. Cada vía tenía su propia prueba y las dos salieron bien. Faltaba probar qué pasaba cuando se cruzaban.",
          "En <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>, Frederick Brooks pone el foco en el trabajo de entender y definir qué debe hacer el software. Aquí, la regla solo se hace evidente cuando la clienta pasa de la aplicación al teléfono. Una reserva puede cancelarse por dos canales, pero debe reembolsarse una sola vez. Quien conoce cómo se recurre a atención al cliente puede advertirlo antes que quien conoce el código.",
        ],
      },
      {
        id: 'entrega',
        heading: "¿Hace falta que intervenga un desarrollador?",
        paragraphs: [
          "El problema se convierte en otra tarea, esta vez con la regla escrita. Un agente implementa la corrección, ejecuta las pruebas y envía la propuesta a revisión. El <a href=\"#source-3\">proyecto de código abierto BeeverForge, antes OpenFactory<sup>[3]</sup></a>, reúne esos pasos. Para esta entrega, cabe preguntarse si hace falta que un desarrollador escriba cada línea.",
          "Robert C. Martin, conocido como Uncle Bob, contó a <a href=\"#source-2\">Aviator<sup>[2]</sup></a> que cuando trabaja con agentes presta más atención a la arquitectura y al comportamiento del sistema. En el caso de la reserva, eso implica mirar qué comparten los dos canales. Si la aplicación y el panel deciden por separado cuándo devolver el dinero, el próximo reembolso duplicado puede llegar por otra vía.",
          "¿La IA reemplazará a los programadores? Algunos cambios pueden requerir menos trabajo directo de programación. El tamaño de los equipos es otra cuestión. En 2025, la <a href=\"#source-4\">OIT y el instituto polaco NASK<sup>[4]</sup></a> estimaron que cerca de uno de cada cuatro trabajadores en el mundo tenía una ocupación con algún grado de exposición a la IA generativa. La estimación se refiere a las tareas que podrían cambiar. En el ejemplo de la reserva, la empresa puede dedicar el tiempo que gana a investigar problemas como este o aprovechar el ahorro para reducir el equipo. La decisión es de la empresa.",
        ],
      },
      {
        id: 'trabalho',
        heading: "¿Quién se queda con el tiempo que ahorra la IA?",
        paragraphs: [
          "Mientras la corrección espera aprobación, alguien en finanzas concilia los pagos. Atención al cliente tiene que explicar el reembolso duplicado. En <a href=\"#source-5\"><em>Atlas de IA</em><sup>[5]</sup></a>, Kate Crawford sigue el trabajo que queda fuera de la interfaz, además de la energía y los materiales que sostienen estos sistemas. Ese cambio de perspectiva también sirve aquí. El informe de ingeniería registra una tarea completada. ¿Dónde figura la hora que dedicó atención al cliente a resolver el problema?",
        ],
      },
      {
        id: 'ritmo',
        heading: "Cuando el elogio se convierte en objetivo",
        paragraphs: [
          "En <em>Vigilar y castigar</em>, Michel Foucault describe cómo la disciplina organiza el tiempo y los movimientos. En <em>El capital</em>, Karl Marx examina qué sucede cuando las máquinas marcan el ritmo. Bruna Brito y yo analizamos cómo las plataformas moldean el comportamiento en un <a href=\"#source-6\">ensayo sobre redes sociales en MIT Technology Review Brasil<sup>[6]</sup></a>. En los equipos que trabajan con agentes, vale la pena observar qué ocurre cuando el panel premia la cantidad de tareas cerradas. Hablar con atención al cliente antes de implementar el cambio puede parecer una demora. Hasta que llega la primera llamada.",
          "«Eres una máquina» era el elogio para quien resolvía todo sin perder el ritmo. Ahora que la máquina puede cerrar la tarea, ¿quién se lleva el mérito de decir, antes que nadie, que sigue abierta?",
        ],
      },
    ],
  },
};
