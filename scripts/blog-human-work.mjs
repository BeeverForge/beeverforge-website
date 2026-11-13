export const humanWork = {
  slug: 'voce-e-uma-maquina',
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
    seoTitle: 'Você é uma máquina? A IA e o valor do trabalho humano | BeeverForge',
    category: 'IA e trabalho',
    summary: 'Se agentes de IA já escrevem, testam e revisam código, o que muda para quem desenvolve software? Um ensaio sobre produtividade, responsabilidade e o valor do trabalho humano.',
    lead: 'Agentes de IA já escrevem, testam e revisam código. O que acontece com uma profissão quando a máquina assume as tarefas pelas quais ela aprendeu a ser reconhecida?',
    takeaway: 'Quando a execução fica mais rápida, ganha peso a decisão sobre o que construir, quem responde pelo resultado e como usar o tempo que a automação libera.',
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
        id: 'ritmo',
        heading: 'Quando produtividade vira elogio',
        paragraphs: [
          '“Você é uma máquina.” A frase costuma chegar depois de um dia em que alguém resolveu tudo. A pessoa entregou rápido, deu conta do imprevisto e seguiu no mesmo ritmo. O elogio revela a medida que usamos para admirar seu trabalho. O que acontece com essa medida quando a máquina passa a fazer parte do serviço?',
          'A fábrica industrial fez do ritmo da produção uma medida de desempenho. Em <em>Vigiar e punir</em>, Michel Foucault descreve a disciplina do tempo, do espaço e dos movimentos. Em <em>O capital</em>, Karl Marx examina como a maquinaria absorve tarefas e impõe seu ritmo a quem trabalha. No escritório digital, o trabalho também se divide em etapas e resultados que podem ser medidos e, em alguns casos, automatizados.',
          'Em um <a href="#source-6">artigo publicado na MIT Technology Review Brasil<sup>[6]</sup></a>, Bruna Brito e eu examinamos como as redes sociais moldam o comportamento. Com a IA, a mesma pergunta chega ao trabalho de quem construiu boa parte dessas ferramentas.',
        ],
      },
      {
        id: 'codigo',
        heading: 'O difícil começa antes do código',
        paragraphs: [
          'Imagine um pedido no quadro de tarefas: “Permitir o cancelamento de reservas”. Um agente pode implementar a mudança e rodar os testes. Quem pode cancelar? Até quando? O que acontece com o pagamento? As respostas mudam a rotina de quem usa e opera o sistema.',
          'Frederick Brooks já tratava dessa dificuldade em <a href="#source-1"><em>No Silver Bullet</em><sup>[1]</sup></a>. Definir o comportamento do software e verificar se ele faz o que precisa fazer exige entender o problema. A geração de código acelera uma parte desse percurso.',
          'Em <a href="#source-2">entrevista à Aviator<sup>[2]</sup></a>, Robert C. Martin contou que, ao trabalhar com agentes, passou a concentrar sua atenção na arquitetura e a experimentar o sistema para entender o que precisa mudar. É um exemplo de como o trabalho pode migrar da escrita de cada instrução para decisões sobre o comportamento do produto.',
        ],
      },
      {
        id: 'entrega',
        heading: 'Uma entrega inteira sem desenvolvedor?',
        paragraphs: [
          'Uma tarefa aprovada pode seguir para implementação por um agente, passar por verificações e chegar como proposta de alteração para avaliação. A <a href="#source-3">BeeverForge de código aberto, antes chamada OpenFactory<sup>[3]</sup></a>, organiza essas etapas em um só fluxo. Em determinadas entregas, as pessoas podem definir o objetivo e aceitar o resultado sem que um desenvolvedor conduza cada passo técnico.',
          'Esse cenário pode mudar tanto as atribuições quanto o tamanho das equipes. Em 2025, a <a href="#source-4">OIT e o instituto polonês NASK<sup>[4]</sup></a> estimaram que cerca de um em cada quatro trabalhadores no mundo estava em uma ocupação com algum grau de exposição à IA generativa. A estimativa se refere ao potencial de automação de tarefas. Os autores consideram mais provável uma transformação das ocupações, e o efeito sobre a quantidade de vagas depende de como cada organização adota a tecnologia.',
        ],
      },
      {
        id: 'trabalho',
        heading: 'O trabalho que fica fora da tela',
        paragraphs: [
          'Em <a href="#source-5"><em>Atlas da IA</em><sup>[5]</sup></a>, Kate Crawford acompanha o trabalho, os dados, a energia e os materiais que tornam esses sistemas possíveis. Dentro de uma empresa, o trabalho também muda de lugar. O tempo liberado da implementação pode ir para a investigação de problemas, a revisão de entregas ou a operação da infraestrutura. Também pode virar pressão para aprovar mais mudanças no mesmo dia.',
          'Voltemos à reserva. Se a mudança causa um reembolso indevido, alguém precisa perceber o erro, responder a quem foi afetado e corrigir o processo. Quantas linhas o agente escreveu diz pouco sobre esse trabalho. O que uma empresa escolhe reconhecer quando diz “você é uma máquina” ajuda a definir que trabalho terá valor quando produzir código ficar mais rápido.',
        ],
      },
    ],
  },
  en: {
    title: 'Are you a machine?',
    seoTitle: 'Are you a machine? AI and the value of human work | BeeverForge',
    category: 'AI and work',
    summary: 'AI agents can write, test, and review code. What changes for software developers? An essay on productivity, responsibility, and the value of human work.',
    lead: 'AI agents already write, test, and review code. What happens to a profession when machines take over the tasks it has come to be known for?',
    takeaway: 'As execution speeds up, deciding what to build, who answers for the outcome, and how to use the time automation frees up becomes more consequential.',
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
        id: 'ritmo',
        heading: 'When productivity becomes praise',
        paragraphs: [
          '“You’re a machine.” We tend to say it after someone has done it all. They delivered quickly, dealt with the unexpected, and kept up the pace. The compliment reveals how we measure their work. What happens to that measure when machines start doing some of the work themselves?',
          'The industrial factory made the pace of production a measure of performance. In <em>Discipline and Punish</em>, Michel Foucault describes how discipline governs time, space, and movement. In <em>Capital</em>, Karl Marx examines how machinery absorbs tasks and sets the pace for workers. Digital work is also divided into stages and outputs that can be measured and, in some cases, automated.',
          'In an <a href="#source-6">essay for MIT Technology Review Brasil<sup>[6]</sup></a>, Bruna Brito and I looked at how social networks shape behavior. AI brings the same question to the work of the people who built many of those tools.',
        ],
      },
      {
        id: 'codigo',
        heading: 'The hard part comes before the code',
        paragraphs: [
          'Imagine a ticket on a task board: “Allow booking cancellations.” An agent can implement the change and run the tests. Who can cancel? How late? What happens to the payment? The answers affect everyone who uses or operates the system.',
          'Frederick Brooks addressed this difficulty in <a href="#source-1"><em>No Silver Bullet</em><sup>[1]</sup></a>. Defining how software should behave and verifying that it does what people need requires understanding the problem. Code generation speeds up one part of that work.',
          'In <a href="#source-2">an Aviator interview<sup>[2]</sup></a>, Robert C. Martin described how working with agents led him to focus on architecture and try the software himself to understand what needed to change. His experience shows how work can shift from writing every instruction to making decisions about product behavior.',
        ],
      },
      {
        id: 'entrega',
        heading: 'An entire delivery without a developer?',
        paragraphs: [
          'An approved task can go to an agent for implementation, pass through checks, and arrive as a proposed change for review. <a href="#source-3">The open-source BeeverForge project, formerly OpenFactory<sup>[3]</sup></a>, brings these stages into one workflow. For some changes, people can set the goal and accept the result without a developer guiding every technical step.',
          'That possibility can alter what teams do and how large they are. In 2025, the <a href="#source-4">ILO and Poland’s NASK institute<sup>[4]</sup></a> estimated that about one in four workers worldwide held an occupation with some exposure to generative AI. The estimate concerns the potential to automate tasks. The authors expect occupations to change, while the effect on job numbers depends on how organizations adopt the technology.',
        ],
      },
      {
        id: 'trabalho',
        heading: 'The work beyond the screen',
        paragraphs: [
          'In <a href="#source-5"><em>Atlas of AI</em><sup>[5]</sup></a>, Kate Crawford traces the workers, data, energy, and materials that make these systems possible. Work moves around inside a company, too. Time freed from implementation can go toward investigating problems, reviewing changes, or operating infrastructure. It can also become pressure to approve more changes in a day.',
          'Return to the booking. If the change triggers a refund that shouldn’t have happened, someone has to spot the error, respond to the people affected, and fix the process. The number of lines the agent wrote tells us little about that work. What a company chooses to recognize when it says “you’re a machine” helps determine what work will be valued when producing code gets faster.',
        ],
      },
    ],
  },
  es: {
    title: '¿Eres una máquina?',
    seoTitle: '¿Eres una máquina? La IA y el valor del trabajo humano | BeeverForge',
    category: 'IA y trabajo',
    summary: 'Los agentes de IA pueden escribir, probar y revisar código. ¿Qué cambia para quienes desarrollan software? Un ensayo sobre productividad, responsabilidad y el valor del trabajo humano.',
    lead: 'Los agentes de IA ya escriben, prueban y revisan código. ¿Qué sucede con una profesión cuando las máquinas asumen las tareas por las que se la conoce?',
    takeaway: 'Al acelerarse la ejecución, cobran más importancia las decisiones sobre qué construir, quién responde por el resultado y cómo aprovechar el tiempo que libera la automatización.',
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
        id: 'ritmo',
        heading: 'Cuando la productividad se vuelve un elogio',
        paragraphs: [
          '«Eres una máquina». Solemos decirlo al final de un día en el que alguien lo ha resuelto todo. Entregó rápido, salió del paso ante los imprevistos y mantuvo el ritmo. El elogio revela cómo medimos su trabajo. ¿Qué pasa con esa medida cuando las propias máquinas empiezan a hacer parte del trabajo?',
          'La fábrica industrial convirtió el ritmo de producción en una medida del rendimiento. En <em>Vigilar y castigar</em>, Michel Foucault describe cómo la disciplina rige el tiempo, el espacio y los movimientos. En <em>El capital</em>, Karl Marx analiza cómo la maquinaria asume tareas e impone el ritmo a los trabajadores. El trabajo digital también se divide en etapas y resultados que pueden medirse y, en algunos casos, automatizarse.',
          'En un <a href="#source-6">artículo para MIT Technology Review Brasil<sup>[6]</sup></a>, Bruna Brito y yo examinamos cómo las redes sociales moldean el comportamiento. La IA lleva la misma pregunta al trabajo de quienes construyeron muchas de esas herramientas.',
        ],
      },
      {
        id: 'codigo',
        heading: 'La dificultad empieza antes del código',
        paragraphs: [
          'Imagina una tarea en el tablero: «Permitir la cancelación de reservas». Un agente puede implementar el cambio y ejecutar las pruebas. ¿Quién puede cancelar? ¿Hasta cuándo? ¿Qué ocurre con el pago? Las respuestas afectan a quienes usan el sistema y a quienes se encargan de operarlo.',
          'Frederick Brooks ya abordaba esa dificultad en <a href="#source-1"><em>No Silver Bullet</em><sup>[1]</sup></a>. Definir cómo debe comportarse el software y verificar que cumpla su cometido exige comprender el problema. La generación de código acelera una parte de ese trabajo.',
          'En <a href="#source-2">una entrevista con Aviator<sup>[2]</sup></a>, Robert C. Martin contó que al trabajar con agentes pasó a prestar más atención a la arquitectura y a probar el sistema para entender qué debía cambiar. Su experiencia ilustra cómo el trabajo puede pasar de escribir cada instrucción a tomar decisiones sobre el comportamiento del producto.',
        ],
      },
      {
        id: 'entrega',
        heading: '¿Una entrega completa sin un desarrollador?',
        paragraphs: [
          'Una tarea aprobada puede pasar a un agente para su implementación, superar verificaciones y llegar como propuesta de cambio para su evaluación. <a href="#source-3">El proyecto de código abierto BeeverForge, antes OpenFactory<sup>[3]</sup></a>, reúne esas etapas en un solo flujo. En algunas entregas, las personas pueden fijar el objetivo y aceptar el resultado sin que un desarrollador dirija cada paso técnico.',
          'Esa posibilidad puede cambiar tanto las funciones como el tamaño de los equipos. En 2025, la <a href="#source-4">OIT y el instituto polaco NASK<sup>[4]</sup></a> estimaron que cerca de uno de cada cuatro trabajadores en el mundo tenía una ocupación con algún grado de exposición a la IA generativa. La estimación se refiere al potencial de automatizar tareas. Los autores consideran más probable una transformación de las ocupaciones, y el efecto sobre el número de empleos depende de cómo se adopte la tecnología.',
        ],
      },
      {
        id: 'trabalho',
        heading: 'El trabajo que queda fuera de la pantalla',
        paragraphs: [
          'En <a href="#source-5"><em>Atlas de IA</em><sup>[5]</sup></a>, Kate Crawford rastrea el trabajo, los datos, la energía y los materiales que hacen posibles estos sistemas. Dentro de una empresa, el trabajo también cambia de lugar. El tiempo que se libera de la implementación puede dedicarse a investigar problemas, revisar entregas u operar la infraestructura. También puede convertirse en presión para aprobar más cambios en el mismo día.',
          'Volvamos a la reserva. Si el cambio provoca un reembolso indebido, alguien tiene que detectar el error, responder a las personas afectadas y corregir el proceso. El número de líneas que escribió el agente dice poco sobre ese trabajo. Lo que una empresa elige reconocer cuando dice «eres una máquina» contribuye a definir qué trabajo tendrá valor cuando producir código sea más rápido.',
        ],
      },
    ],
  },
};
