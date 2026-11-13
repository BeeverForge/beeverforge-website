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
    ['ILO & NASK — Generative AI and Jobs', 'https://www.ilo.org/sites/default/files/2025-05/Research%20brief_FINAL_15May2025_21.05.25_1.pdf'],
    ['Kate Crawford — Atlas of AI', 'https://yalebooks.yale.edu/book/9780300264630/atlas-of-ai/'],
    ['Roberto Pereira e Bruna Brito — Conectados às redes sociais e desconectados de nossos corpos', 'https://mittechreview.com.br/conectados-as-redes-sociais-e-desconectados-de-nossos-corpos/'],
    ['IBM — Fortran', 'https://www.ibm.com/history/fortran'],
    ['GitHub Docs — Managing environments for deployment', 'https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments'],
  ],
  pt: {
    title: 'Você é uma máquina?',
    seoTitle: 'IA vai substituir programadores? | BeeverForge',
    category: 'IA e trabalho',
    shortDescription: 'O futuro dos programadores na era da IA',
    summary: "Se a IA já escreve código e pode colocá-lo em produção, onde fica o programador? Do cartão perfurado aos agentes, o que muda é o trabalho de engenharia.",
    lead: "“Você é uma máquina” era um elogio a quem conseguia manter o ritmo da produção. Agora que uma máquina pode escrever o código, o elogio revela o problema: passamos tempo demais medindo engenheiros pelo volume de trabalho de execução.",
    coverAlt: 'Uma mão repousa sobre uma bancada ao lado de um relógio de ponto mecânico.',
    coverScope: 'Ilustração editorial gerada com IA.',
    sourceNotes: [
      'O ensaio de 1987 discute a dificuldade de conceber e validar o que um software deve fazer.',
      'Relato de como o autor passou a acompanhar mais a arquitetura e o comportamento do software ao trabalhar com agentes.',
      'O estudo de 2025 estima o grau de exposição de tarefas ocupacionais à IA generativa.',
      'O livro acompanha a infraestrutura, os recursos naturais e o trabalho que sustentam a IA.',
      'Ensaio publicado na MIT Technology Review Brasil sobre tecnologia, poder e comportamento nas redes sociais.',
      "A IBM conta como o Fortran transferiu para o compilador parte do trabalho de escrever instruções de máquina.",
      "Documentação sobre ambientes de deploy e suas regras opcionais de aprovação.",
    ],
    sections: [
      {
        id: 'codigo',
        heading: "Do cartão perfurado à especificação",
        paragraphs: [
          "O cartão perfurado era um meio de entregar instruções ao computador. Com linguagens como o <a href=\"#source-6\">Fortran<sup>[6]</sup></a>, o programador pôde escrever fórmulas e deixar a tradução para instruções de máquina a cargo do compilador. O código-fonte passou a servir a dois leitores. O compilador precisava de instruções precisas. As pessoas que mantinham o sistema precisavam entender o que seus colegas haviam feito.",
          "Com agentes de IA, parte dessa tradução sobe mais um nível. Em vez de implementar linha por linha, a equipe pode especificar o comportamento e delegar a escrita do código. Um pedido como “permitir que a pessoa exclua sua conta” leva segundos para escrever. Decidir quando o acesso termina, o que acontece com os dados e como provar que a exclusão funcionou já é trabalho de engenharia. Era essa a dificuldade que Frederick Brooks apontava em <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>: conceber e testar o que o sistema deve fazer.",
        ],
      },
      {
        id: 'entrega',
        heading: "A empresa ainda vai precisar de mim?",
        paragraphs: [
          "<strong>Se a vaga existe para transformar especificações em código, a empresa pode deixar de precisar dela.</strong> Um agente já pode escrever a implementação e rodar os testes. Um fluxo de <a href=\"#source-7\">deploy automático<sup>[7]</sup></a> pode colocar a mudança em produção sem que alguém revise o código ou aprove aquela entrega. A função de ler tudo o que a máquina escreve também pode deixar de existir.",
          "O <a href=\"#source-3\">estudo da OIT e do NASK<sup>[3]</sup></a> estimou em 2025 que um em cada quatro trabalhadores no mundo estava numa ocupação com algum grau de exposição à IA generativa. Ele mede a exposição das tarefas e ajuda a entender por que cargos com o mesmo nome podem ter destinos diferentes. Uma empresa pode cortar uma vaga de implementação. Pode também precisar de alguém com experiência para definir a arquitetura, escrever critérios de aceitação e investigar falhas em produção. Essa é a resposta para quem programava e projetava o sistema na mesma função. A empresa pode dispensar a escrita manual do código e continuar precisando de quem sabe projetá-lo e medir se ele funciona.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Onde fica a engenharia",
        paragraphs: [
          "Pense numa ponte. Desenhar cada peça exige habilidade. O projeto também precisa decidir que carga a ponte suporta, como ensaiá-la e quais sinais justificam interditá-la. No software, a distinção aparece quando a equipe escolhe como dividir o sistema, que testes precisam passar e o que medir em produção para saber se uma mudança deu certo. O código é uma forma de realizar essas decisões. Parte da engenharia está em formulá-las e verificar seus efeitos.",
          "Em <a href=\"#source-2\">entrevista à Aviator<sup>[2]</sup></a>, Robert C. Martin descreve a mudança na sua própria rotina: com agentes escrevendo código, ele concentra a atenção na arquitetura e no comportamento do sistema. A experiência de quem programou continua valiosa aqui. Ela permite antecipar onde a especificação deixa margem para uma implementação ruim e desenhar um teste que revele o problema antes que o usuário o descubra.",
        ],
      },
      {
        id: 'ritmo',
        heading: "O que vamos chamar de produtividade?",
        paragraphs: [
          "Em <a href=\"#source-4\"><em>Atlas da IA</em><sup>[4]</sup></a>, Kate Crawford acompanha o trabalho que desaparece da nossa vista quando a interface devolve uma resposta em segundos. No desenvolvimento de software, esse trabalho pode reaparecer na investigação de falhas ou no atendimento a clientes. Bruna Brito e eu escrevemos na <a href=\"#source-5\"><em>MIT Technology Review Brasil</em><sup>[5]</sup></a> sobre como as plataformas moldam o comportamento pelo que tornam visível. O painel da equipe faz algo parecido quando exibe quantas tarefas foram entregues e deixa de fora o custo de mantê-las em produção.",
          "Se o agente entrega dez mudanças na segunda-feira, o painel registra dez entregas. O engenheiro que percebe que três delas nunca deveriam ter sido feitas talvez termine o dia sem acrescentar uma linha de código. Se o elogio ainda é “você é uma máquina”, o painel vai dar razão à máquina.",
        ],
      },
    ],
  },
  en: {
    title: 'Are you a machine?',
    seoTitle: 'Will AI Replace Software Developers? | BeeverForge',
    category: 'AI and work',
    shortDescription: 'The future of software developers in the age of AI',
    summary: "If AI can write code and ship it to production, where does that leave programmers? From punched cards to agents, the work of engineering is changing.",
    lead: "“You’re a machine” was a compliment for someone who could keep up with production. Now that a machine can write the code, the compliment exposes a problem: we’ve spent too long judging engineers by how much implementation work they get through.",
    coverAlt: 'A hand rests on a workbench beside a mechanical time clock.',
    coverScope: 'AI-generated editorial illustration.',
    sourceNotes: [
      'The 1987 essay discusses the difficulty of conceiving and validating what software should do.',
      'Martin describes paying closer attention to architecture and software behavior while working with agents.',
      'The 2025 study estimates how exposed occupational tasks are to generative AI.',
      'The book examines the infrastructure, natural resources, and labor underpinning AI.',
      'An essay in MIT Technology Review Brasil on technology, power, and behavior on social media.',
      "IBM recounts how Fortran shifted part of the work of writing machine instructions to the compiler.",
      "Documentation on deployment environments and their optional approval rules.",
    ],
    sections: [
      {
        id: 'codigo',
        heading: "From punched cards to specifications",
        paragraphs: [
          "Punched cards were a way to feed instructions into a computer. With languages like <a href=\"#source-6\">Fortran<sup>[6]</sup></a>, programmers could write formulas and leave the translation into machine instructions to the compiler. Source code had two audiences. The compiler needed precise instructions. The people maintaining the system needed to understand what their colleagues had done.",
          "AI agents move part of that translation up another level. A team can specify the behavior and delegate writing the code line by line. It takes seconds to type “let users delete their accounts.” Deciding when access ends, what happens to the data, and how to prove the deletion worked takes engineering. This was the difficulty Frederick Brooks identified in <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>: working out what the system should do and testing it.",
        ],
      },
      {
        id: 'entrega',
        heading: "Will the company still need me?",
        paragraphs: [
          "<strong>If the job exists to turn specifications into code, the company may stop needing that job.</strong> An agent can already write the implementation and run the tests. An <a href=\"#source-7\">automated deployment<sup>[7]</sup></a> can ship the change to production without anyone reviewing the code or approving that release. The job of reading everything the machine writes may disappear too.",
          "In 2025, the <a href=\"#source-3\">ILO and NASK study<sup>[3]</sup></a> estimated that one in four workers worldwide were in an occupation with some exposure to generative AI. It measures exposure at the task level, which helps explain why jobs with the same title may have different futures. A company may cut an implementation role. It may also need someone with the experience to design the architecture, write acceptance criteria, and investigate failures in production. That’s the answer for anyone who wrote the code and designed the system in the same role. The company can do without hand-written code and still need someone who can design the system and measure whether it works.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Where the engineering happens",
        paragraphs: [
          "Think about a bridge. Drafting each component takes skill. The design also has to establish what loads the bridge will bear, how to test it, and what signs would warrant closing it. In software, the same distinction comes up when a team decides how to divide a system, which tests need to pass, and what to measure in production to know whether a change worked. Code is a way to carry out those decisions. Part of engineering is making them and checking their effects.",
          "In <a href=\"#source-2\">an interview with Aviator<sup>[2]</sup></a>, Robert C. Martin described the shift in his own routine. With agents writing code, he pays more attention to architecture and system behavior. Experience as a programmer still matters here. It helps you see where a specification leaves room for a poor implementation and design a test that catches it before a user does.",
        ],
      },
      {
        id: 'ritmo',
        heading: "What will we call productivity?",
        paragraphs: [
          "In <a href=\"#source-4\"><em>Atlas of AI</em><sup>[4]</sup></a>, Kate Crawford traces work that disappears from view when an interface returns an answer in seconds. In software, that work can reappear when someone investigates a failure or handles a customer complaint. Bruna Brito and I wrote in <a href=\"#source-5\"><em>MIT Technology Review Brasil</em><sup>[5]</sup></a> about how platforms shape behavior through what they make visible. A team dashboard does something similar when it shows how many changes shipped and leaves out the cost of keeping them running.",
          "If an agent ships ten changes on Monday, the dashboard records ten deliveries. The engineer who realizes three of them should never have been made might end the day without adding a line of code. If “you’re a machine” is still the compliment, the dashboard will side with the machine.",
        ],
      },
    ],
  },
  es: {
    title: '¿Eres una máquina?',
    seoTitle: '¿La IA reemplazará a los programadores? | BeeverForge',
    category: 'IA y trabajo',
    shortDescription: 'El futuro de los programadores en la era de la IA',
    summary: "Si la IA ya escribe código y puede llevarlo a producción, ¿qué lugar ocupa el programador? De la tarjeta perforada a los agentes, cambia el trabajo de ingeniería.",
    lead: "«Eres una máquina» era un elogio para quien podía seguir el ritmo de producción. Ahora que una máquina puede escribir el código, el elogio deja al descubierto un problema: llevamos demasiado tiempo midiendo a los ingenieros por la cantidad de trabajo de implementación que sacan adelante.",
    coverAlt: 'Una mano descansa sobre un banco de trabajo junto a un reloj mecánico de fichar.',
    coverScope: 'Ilustración editorial generada con IA.',
    sourceNotes: [
      'El ensayo de 1987 aborda la dificultad de concebir y validar lo que debe hacer un programa.',
      'Martin relata cómo pasó a centrarse más en la arquitectura y el comportamiento del software al trabajar con agentes.',
      'El estudio de 2025 estima el grado de exposición de las tareas laborales a la IA generativa.',
      'El libro examina la infraestructura, los recursos naturales y el trabajo que sostienen la IA.',
      'Ensayo publicado en MIT Technology Review Brasil sobre tecnología, poder y comportamiento en las redes sociales.',
      "IBM explica cómo Fortran trasladó al compilador parte del trabajo de escribir instrucciones de máquina.",
      "Documentación sobre los entornos de despliegue y sus reglas opcionales de aprobación.",
    ],
    sections: [
      {
        id: 'codigo',
        heading: "De la tarjeta perforada a la especificación",
        paragraphs: [
          "La tarjeta perforada servía para introducir instrucciones en la computadora. Con lenguajes como <a href=\"#source-6\">Fortran<sup>[6]</sup></a>, los programadores podían escribir fórmulas y dejar en manos del compilador la traducción a instrucciones de máquina. El código fuente tenía dos lectores. El compilador necesitaba instrucciones precisas. Las personas encargadas de mantener el sistema necesitaban entender lo que habían hecho sus colegas.",
          "Los agentes de IA llevan parte de esa traducción a otro nivel. El equipo puede especificar el comportamiento y delegar la escritura del código línea por línea. Redactar «permitir que la persona elimine su cuenta» lleva segundos. Decidir cuándo pierde el acceso, qué pasa con los datos y cómo demostrar que la eliminación funcionó ya es trabajo de ingeniería. Es la dificultad que señalaba Frederick Brooks en <a href=\"#source-1\"><em>No Silver Bullet</em><sup>[1]</sup></a>: concebir y probar qué debe hacer el sistema.",
        ],
      },
      {
        id: 'entrega',
        heading: "¿La empresa seguirá necesitándome?",
        paragraphs: [
          "<strong>Si el puesto existe para convertir especificaciones en código, la empresa puede dejar de necesitarlo.</strong> Un agente ya puede escribir la implementación y ejecutar las pruebas. Un <a href=\"#source-7\">despliegue automático<sup>[7]</sup></a> puede llevar el cambio a producción sin que nadie revise el código ni apruebe esa entrega. La función de leer todo lo que escribe la máquina también puede desaparecer.",
          "En 2025, el <a href=\"#source-3\">estudio de la OIT y NASK<sup>[3]</sup></a> estimó que uno de cada cuatro trabajadores en el mundo tenía una ocupación con algún grado de exposición a la IA generativa. El estudio mide la exposición de las tareas y ayuda a entender por qué puestos con el mismo nombre pueden tener destinos distintos. Una empresa puede recortar un puesto de implementación. También puede necesitar a alguien con experiencia para definir la arquitectura, escribir criterios de aceptación e investigar fallos en producción. Esa es la respuesta para quien escribía el código y diseñaba el sistema en el mismo puesto. La empresa puede prescindir del código escrito a mano y seguir necesitando a quien sepa diseñar el sistema y medir si funciona.",
        ],
      },
      {
        id: 'trabalho',
        heading: "Dónde está la ingeniería",
        paragraphs: [
          "Pensemos en un puente. Dibujar cada pieza requiere habilidad. El proyecto también debe determinar qué carga soporta, cómo se va a probar y qué señales justificarían cerrarlo. En el software, la distinción aparece al decidir cómo dividir el sistema, qué pruebas deben superarse y qué medir en producción para saber si un cambio funcionó. El código materializa esas decisiones. Parte de la ingeniería consiste en tomarlas y comprobar sus efectos.",
          "En <a href=\"#source-2\">una entrevista con Aviator<sup>[2]</sup></a>, Robert C. Martin describe el cambio en su rutina. Con los agentes escribiendo código, concentra su atención en la arquitectura y el comportamiento del sistema. La experiencia de haber programado sigue siendo valiosa aquí. Permite anticipar dónde la especificación deja margen para una mala implementación y diseñar una prueba que detecte el problema antes que el usuario.",
        ],
      },
      {
        id: 'ritmo',
        heading: "¿A qué llamaremos productividad?",
        paragraphs: [
          "En <a href=\"#source-4\"><em>Atlas de IA</em><sup>[4]</sup></a>, Kate Crawford sigue el trabajo que desaparece de nuestra vista cuando una interfaz devuelve una respuesta en segundos. En el desarrollo de software, ese trabajo puede reaparecer al investigar fallos o atender reclamaciones. Bruna Brito y yo escribimos en <a href=\"#source-5\"><em>MIT Technology Review Brasil</em><sup>[5]</sup></a> sobre cómo las plataformas moldean el comportamiento a través de lo que hacen visible. El panel del equipo hace algo parecido cuando muestra cuántos cambios se entregaron y omite el coste de mantenerlos en producción.",
          "Si el agente entrega diez cambios el lunes, el panel registra diez entregas. El ingeniero que se da cuenta de que tres de ellos nunca debieron hacerse quizá termine el día sin añadir una línea de código. Si el elogio sigue siendo «eres una máquina», el panel le dará la razón a la máquina.",
        ],
      },
    ],
  },
};
