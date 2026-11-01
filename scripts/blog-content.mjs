// Respondents are not projects. Revenue is not profit. These sources do not
// establish a BeeverForge conversion rate or endorse its product.
const cite = (n, label) => `<a href="#source-${n}">${label}<sup>[${n}]</sup></a>`;
export const retiredBlogSlugs = ['from-ai-prototype-to-production', 'model-agnostic-ai-software-factory'];
export const articles = [{
  slug: 'lovable-prototypes-to-businesses', date: '2026-11-01',
  sources: [
    ['Lovable · The Build Economy', 'https://thebuildeconomy.lovable.app/'],
    ['Lovable · A first look at the build economy · 09 Jun 2026', 'https://lovable.dev/blog/a-first-look-at-the-build-economy'],
    ['Lovable · Deployment, hosting, and ownership', 'https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership'],
    ['Lovable · Security overview', 'https://docs.lovable.dev/features/security'],
    ['DORA · Balancing AI tensions · 10 Mar 2026', 'https://dora.dev/insights/balancing-ai-tensions/'],
    ['NIST · Secure Software Development Framework', 'https://csrc.nist.gov/projects/ssdf'],
  ],
  pt: {
    category: 'Estratégia de produto', seoTitle: 'Lovable: do protótipo ao negócio | BeeverForge Journal', title: 'Pesquisa Lovable: 60,5% ainda não monetizam. E depois do protótipo?',
    summary: 'O que a pesquisa da própria Lovable revela sobre monetização — e por que a BeeverForge liga a ideia à implementação automatizada e à evolução do produto.',
    lead: 'Criar ficou mais fácil. Transformar uma ideia em software que sustenta um negócio continua a exigir decisões, engenharia e continuidade. Um dado da própria Lovable ajuda a colocar essa conversa no lugar certo.',
    coverAlt: '60,5% dos respondentes da pesquisa Lovable ainda não monetizavam, mas pretendiam. Um dado sobre pessoas, não uma taxa de fracasso de projetos.',
    coverLabel: 'Ainda não monetizam, mas pretendem', coverScope: 'Respondentes da pesquisa Lovable · maio de 2026',
    takeaway: 'Uma aplicação gerada pode ser o começo. O negócio depende do que acontece depois.',
    chartTitle: 'O que os participantes declararam', chartUnit: 'Situação de monetização · % de respondentes',
    chartLabels: ['Ainda não, mas pretendem', 'Consultoria e trabalho para clientes', 'Receita diretamente do produto', 'Produto e serviços', 'Sem planos de monetização'],
    chartNote: 'Fonte: The Build Economy, Lovable. Percentuais publicados; a soma de 100,1% decorre do arredondamento. A base de cada pergunta não é detalhada na publicação.',
    journey: [['Prototype', 'Você + IA', 'Explore a ideia, teste a experiência e consolide os requisitos.'], ['Arquitetura', 'A sua equipa ou a BeeverForge', 'Defina a solução e prepare a base técnica. O apoio especializado da BeeverForge é opcional.'], ['Team', 'Automação BeeverForge', 'Agentes implementam; a fábrica verifica e organiza a evolução. Uma pessoa autoriza a produção.']],
    sourceNotes: ['Dados autorreportados, publicados pela fornecedora. A metodologia não declara amostragem aleatória, receita auditada nem acompanhamento de coortes de projetos; não mede conversão em negócios.', 'Publicação oficial que apresenta o relatório de junho de 2026.', 'Propriedade, portabilidade e opções de infraestrutura documentadas pela Lovable.', 'Capacidades de segurança documentadas pela plataforma.', 'Pesquisa sobre geração, verificação e integração; não é um estudo sobre Lovable.', 'Práticas de desenvolvimento seguro; não é uma certificação da BeeverForge.'],
    sections: [
      { id: 'numbers', heading: 'O número existe. O denominador importa.', kind: 'chart', paragraphs: [
        `No ${cite(1, 'The Build Economy')}, apresentado em ${cite(2, 'junho de 2026')}, a Lovable informa que 60,5% dos respondentes ainda não monetizavam o que construíam, embora pretendessem fazê-lo. O relatório combina atividade da plataforma com uma pesquisa de mais de 14.300 usuários, realizada de 22 a 29 de maio de 2026.`,
        'É um dado sobre monetização autorreportada. Não informa quantos protótipos viraram empresas, nem permite chamar esses participantes de projetos fracassados. A mesma pesquisa registra pessoas que já geram receita com produtos, serviços ou ambos.',
      ] },
      { id: 'conversion', heading: 'Não temos uma taxa confiável de protótipos que viram negócios.', paragraphs: [
        'Para calcular essa taxa, seria preciso acompanhar um conjunto definido de projetos ao longo do tempo: quantos começaram, entraram em produção, conquistaram clientes e continuaram operando. Nas fontes consultadas, não encontramos esse acompanhamento com um denominador comparável para Lovable ou para o conjunto dessas plataformas.',
        'Receita também não é sinônimo de lucro, retenção ou operação sustentável. Uma ferramenta interna pode gerar valor sem vender assinaturas. Consultoria pode gerar receita sem se tornar um produto recorrente. Por isso, o gráfico não é uma taxa universal de sucesso ou fracasso.',
      ] },
      { id: 'fair-comparison', heading: 'A Lovable também chega à produção.', paragraphs: [
        `Seria conveniente dizer que a Lovable só faz demonstrações. Seria incorreto. A plataforma publica casos de negócios e documenta ${cite(3, 'exportação de código e hospedagem fora da Lovable')}, além de ${cite(4, 'verificações de segurança')}. Uma comparação séria precisa reconhecer essas capacidades.`,
        'A questão comercial é mais exigente: qual é o percurso entre a ideia validada e um produto que você consegue operar, corrigir e evoluir? Um botão de publicação, isoladamente, não responde a essa pergunta — em nenhuma plataforma.',
      ] },
      { id: 'operation', heading: 'O protótipo encanta. A operação faz as perguntas difíceis.', paragraphs: [
        'Imagine um sistema de agendamentos. Na demonstração, a reserva funciona com dados simulados. Na operação real, dois clientes podem tentar o mesmo horário. Um pagamento pode falhar. Uma integração pode parar. É preciso decidir permissões, tratar exceções, proteger dados e conseguir recuperar o serviço.',
        `A análise ${cite(5, 'DORA de março de 2026')}, baseada em 1.110 respostas abertas de engenheiros do Google, descreve essa distância: ganhos na geração inicial podem ser consumidos pela verificação e integração em produção. Não estuda a Lovable, mas ajuda a explicar por que acelerar a criação não encerra a entrega. O ${cite(6, 'SSDF do NIST')} também integra segurança ao ciclo de desenvolvimento.`,
        'O problema não se resolve desistindo da IA e voltando a fazer tudo manualmente. Resolve-se conectando a automação ao trabalho completo: intenção, requisitos, arquitetura, implementação, verificação e evolução.',
      ] },
      { id: 'factory', heading: 'Na BeeverForge, o protótipo inicia a fábrica.', kind: 'journey', paragraphs: [
        'A nossa missão é levar a ideia até um produto em produção. O Prototype começa esse percurso: você conversa com a IA, valida a experiência e consolida requisitos. Ele usa dados simulados; a aplicação real é implementada a partir das decisões e dos requisitos que o protótipo ajudou a revelar.',
        'Depois, a sua equipa define a arquitetura e prepara a base técnica — ou pede o arranque assistido opcional da BeeverForge. Analisamos o protótipo concluído na plataforma, desenhamos a solução e preparamos a base acordada em proposta, com âmbito e condições próprios.',
        'A continuidade com o Team é automação: agentes de IA executam o trabalho preparado, a fábrica corre as verificações configuradas e obtém revisão independente, e o Product Owner virtual organiza prioridades e evolução. As pessoas orientam o produto, decidem a arquitetura e autorizam a produção. A execução não fica dependente de uma sucessão de tarefas manuais.',
      ] },
      { id: 'model-choice', heading: 'O produto é seu. As escolhas técnicas também.', paragraphs: [
        'Na BeeverForge, modelos, credenciais e infraestrutura fazem parte do desenho da solução. OpenAI, Anthropic, Moonshot AI/Kimi e outros provedores compatíveis são opções conforme a configuração e a validação do ambiente. Endpoints privados e modelos locais ou on-premises exigem compatibilidade, recursos e configuração adequados.',
        'As chaves de API e a infraestrutura de execução ficam sob controlo do cliente; o consumo de IA e os recursos são pagos separadamente. O teste hospedado tem uma configuração própria e não representa a disponibilidade de todos os modelos. O objetivo é que a evolução do produto não obrigue a depender de um único fornecedor de IA.',
      ] },
      { id: 'outcomes', heading: 'A próxima métrica precisa ser o produto funcionando.', paragraphs: [
        'A diferença que defendemos é um processo contínuo de entrega, com automação e responsabilidades claras. Ainda não publicamos uma taxa comparativa de conversão em negócios; a pesquisa de outro produto não prova que o nosso garante mais receita. Clientes, distribuição e viabilidade comercial continuam essenciais.',
        'Mas existe uma decisão que você já pode tomar: escolher uma plataforma pensando no que vem depois da primeira demonstração. Pergunte como os requisitos viram trabalho executável, quem verifica as alterações, quem controla os modelos e como o produto continuará a evoluir.',
        '<strong>A sua ideia merece mais do que uma demonstração. A BeeverForge foi desenhada para executar o que vem depois.</strong>',
      ] },
    ],
  },
  en: {
    category: 'Product strategy', seoTitle: 'Lovable: from prototype to business | BeeverForge Journal', title: 'Lovable survey: 60.5% are not monetizing yet. What comes after the prototype?',
    summary: 'What Lovable’s own research says about monetization, and why BeeverForge connects the idea to automated implementation and product evolution.',
    lead: 'Starting has become easier. Turning an idea into software that supports a business still takes decisions, engineering and continuity. A finding from Lovable’s own research puts that conversation into focus.',
    coverAlt: '60.5% of Lovable survey respondents were not monetizing yet but planned to. A finding about people, not a project failure rate.',
    coverLabel: 'Not monetizing yet, but planning to', coverScope: 'Lovable survey respondents · May 2026',
    takeaway: 'A generated application can be the beginning. The business depends on what happens next.',
    chartTitle: 'What participants reported', chartUnit: 'Monetization status · % of respondents',
    chartLabels: ['Not yet, but planning to', 'Consulting and client work', 'Revenue directly from the product', 'Products and services', 'No plans to monetize'],
    chartNote: 'Source: The Build Economy, Lovable. Published percentages total 100.1% due to rounding. The publication does not detail the response base for each question.',
    journey: [['Prototype', 'You + AI', 'Explore the idea, test the experience and capture requirements.'], ['Architecture', 'Your team or BeeverForge', 'Design the solution and prepare its foundation. BeeverForge’s expert help is optional.'], ['Team', 'BeeverForge automation', 'Agents implement; the factory checks and organizes evolution. A person authorizes production.']],
    sourceNotes: ['Self-reported findings published by the vendor. The methodology does not declare random sampling, audited revenue or project-cohort tracking; this is not a project conversion study.', 'Official announcement introducing the June 2026 report.', 'Lovable’s documented ownership, portability and infrastructure options.', 'Security capabilities documented by the platform.', 'Research on generation, verification and integration; not a Lovable study.', 'Secure development practices; not a BeeverForge certification.'],
    sections: [
      { id: 'numbers', heading: 'There is a number. Its denominator matters.', kind: 'chart', paragraphs: [
        `In ${cite(1, 'The Build Economy')}, introduced in ${cite(2, 'June 2026')}, Lovable reports that 60.5% of respondents were not monetizing yet but planned to. The report combines platform activity with a survey of more than 14,300 users conducted on May 22–29, 2026.`,
        'This is self-reported monetization evidence. It does not tell us how many prototypes became businesses or justify calling those participants failed projects. The same survey records people already earning revenue from products, services or both.',
      ] },
      { id: 'conversion', heading: 'We do not have a reliable prototype-to-business conversion rate.', paragraphs: [
        'That would require following a defined cohort of projects over time: how many started, reached production, acquired customers and kept operating. We did not find that comparable project-level denominator for Lovable or these platforms collectively in the sources reviewed.',
        'Revenue is also different from profit, retention or sustainable operations. Internal tools can create value without selling subscriptions. Consulting can generate income without becoming a recurring product. We therefore do not turn the chart into a universal success or failure rate.',
      ] },
      { id: 'fair-comparison', heading: 'Lovable can also reach production.', paragraphs: [
        `It would be convenient to say Lovable only makes demos. It would be inaccurate. The platform publishes business cases and documents ${cite(3, 'code export and hosting outside Lovable')}, alongside ${cite(4, 'security checks')}. Any serious comparison must acknowledge those capabilities.`,
        'The commercial question goes further: what is the path from a validated idea to a product you can operate, fix and evolve? A publish button alone does not answer it on any platform.',
      ] },
      { id: 'operation', heading: 'The prototype impresses. Operations ask the difficult questions.', paragraphs: [
        'Consider a booking system. In a demo, a booking works with simulated data. In real use, two customers may request the same slot. A payment can fail. An integration can stop responding. Permissions, exceptions, data protection and recovery all require decisions.',
        `A ${cite(5, 'March 2026 DORA analysis')}, drawing on 1,110 open-ended responses from Google engineers, describes this gap: initial generation gains can be absorbed by verification and production integration. It does not study Lovable, but helps explain why faster creation does not finish delivery. ${cite(6, 'NIST’s SSDF')} likewise integrates security across development.`,
        'The opportunity is to connect automation to the complete job: intent, requirements, architecture, implementation, verification and evolution. Returning to a chain of manual tasks would miss that opportunity.',
      ] },
      { id: 'factory', heading: 'At BeeverForge, the prototype starts the factory.', kind: 'journey', paragraphs: [
        'Our mission is to take the idea to a product in production. Prototype begins the journey: you work with AI, validate the experience and capture requirements. It uses simulated data; the real application is implemented from the decisions and requirements the prototype helped uncover.',
        'Your team then designs the architecture and prepares the technical foundation, or requests BeeverForge’s optional assisted start. We analyze the prototype concluded inside the platform, design the solution and prepare the foundation agreed in a proposal with its own scope and commercial terms.',
        'Continuing with Team means automation: AI agents execute prepared work, the factory runs configured checks and obtains independent review, and the virtual Product Owner organizes priorities and evolution. People guide the product, decide its architecture and authorize production. Execution does not depend on a succession of manual implementation tasks.',
      ] },
      { id: 'model-choice', heading: 'Your product. Your technical choices.', paragraphs: [
        'At BeeverForge, model, credential and infrastructure choices are part of solution design. OpenAI, Anthropic, Moonshot AI/Kimi and other compatible providers are options subject to environment configuration and validation. Private endpoints and local or on-premises models require compatible interfaces, resources and configuration.',
        'API keys and execution infrastructure remain under customer control; AI consumption and resources are paid separately. The hosted trial has its own configuration and does not represent every model’s availability. The aim is to avoid tying product evolution to a single AI provider.',
      ] },
      { id: 'outcomes', heading: 'The next metric should be a working product.', paragraphs: [
        'Our proposed difference is a continuous delivery process with automation and clear responsibilities. We have not published a comparative business-conversion rate. Another product’s research cannot prove that ours guarantees more revenue. Customers, distribution and commercial viability still matter.',
        'You can already make one decision: choose a platform with what comes after the first demo in mind. Ask how requirements become executable work, who checks changes, who controls the models and how the product will keep evolving.',
        '<strong>Your idea deserves more than a demo. BeeverForge is designed to execute what comes next.</strong>',
      ] },
    ],
  },
  es: {
    category: 'Estrategia de producto', seoTitle: 'Lovable: del prototipo al negocio | BeeverForge Journal', title: 'Estudio Lovable: el 60,5% aún no monetiza. ¿Qué viene después del prototipo?',
    summary: 'Qué revela el estudio de Lovable sobre monetización y por qué BeeverForge conecta la idea con la implementación automatizada y la evolución del producto.',
    lead: 'Empezar es más fácil. Convertir una idea en software que sostenga un negocio sigue exigiendo decisiones, ingeniería y continuidad. Un dato del propio estudio de Lovable permite enfocar la conversación.',
    coverAlt: 'El 60,5% de participantes del estudio Lovable aún no monetizaba, pero quería hacerlo. Un dato sobre personas, no una tasa de fracaso de proyectos.',
    coverLabel: 'Aún no monetizan, pero quieren hacerlo', coverScope: 'Participantes del estudio Lovable · mayo de 2026',
    takeaway: 'Una aplicación generada puede ser el comienzo. El negocio depende de lo que sucede después.',
    chartTitle: 'Qué declararon los participantes', chartUnit: 'Situación de monetización · % de participantes',
    chartLabels: ['Aún no, pero quieren hacerlo', 'Consultoría y trabajo para clientes', 'Ingresos directamente del producto', 'Producto y servicios', 'Sin planes de monetización'],
    chartNote: 'Fuente: The Build Economy, Lovable. Los porcentajes publicados suman 100,1% por redondeo. La publicación no detalla la base de respuestas de cada pregunta.',
    journey: [['Prototype', 'Usted + IA', 'Explore la idea, pruebe la experiencia y consolide los requisitos.'], ['Arquitectura', 'Su equipo o BeeverForge', 'Diseñe la solución y prepare su base técnica. Nuestro apoyo especializado es opcional.'], ['Team', 'Automatización BeeverForge', 'Los agentes implementan; la fábrica verifica y organiza la evolución. Una persona autoriza producción.']],
    sourceNotes: ['Datos declarados publicados por el proveedor. La metodología no declara muestreo aleatorio, ingresos auditados ni seguimiento de cohortes de proyectos; no mide conversión en negocios.', 'Anuncio oficial que presenta el informe de junio de 2026.', 'Propiedad, portabilidad e infraestructura documentadas por Lovable.', 'Capacidades de seguridad documentadas por la plataforma.', 'Investigación sobre generación, verificación e integración; no estudia Lovable.', 'Prácticas de desarrollo seguro; no es una certificación de BeeverForge.'],
    sections: [
      { id: 'numbers', heading: 'El dato existe. El denominador importa.', kind: 'chart', paragraphs: [
        `En ${cite(1, 'The Build Economy')}, presentado en ${cite(2, 'junio de 2026')}, Lovable indica que el 60,5% de los participantes aún no monetizaba, pero pensaba hacerlo. El informe combina actividad de la plataforma con una encuesta a más de 14.300 usuarios, realizada entre el 22 y el 29 de mayo de 2026.`,
        'Es un dato sobre monetización declarada. No indica cuántos prototipos se convirtieron en empresas ni permite considerar esos participantes proyectos fracasados. La misma encuesta registra personas que ya generan ingresos con productos, servicios o ambos.',
      ] },
      { id: 'conversion', heading: 'No tenemos una tasa fiable de conversión de prototipos en negocios.', paragraphs: [
        'Para calcularla habría que seguir una cohorte definida de proyectos: cuántos empezaron, llegaron a producción, consiguieron clientes y siguieron operando. En las fuentes consultadas no encontramos ese seguimiento con un denominador comparable para Lovable ni para estas plataformas en conjunto.',
        'Ingresos tampoco equivalen a beneficios, retención u operación sostenible. Una herramienta interna puede aportar valor sin vender suscripciones. La consultoría puede generar ingresos sin convertirse en un producto recurrente. Por eso el gráfico no es una tasa universal de éxito o fracaso.',
      ] },
      { id: 'fair-comparison', heading: 'Lovable también llega a producción.', paragraphs: [
        `Sería conveniente decir que Lovable solo hace demostraciones. Sería incorrecto. La plataforma publica casos de negocios y documenta ${cite(3, 'exportación de código y alojamiento fuera de Lovable')}, además de ${cite(4, 'verificaciones de seguridad')}. Una comparación seria debe reconocer esas capacidades.`,
        'La pregunta comercial exige más: ¿cuál es el recorrido desde la idea validada hasta un producto que pueda operar, corregir y evolucionar? Un botón de publicación por sí solo no responde, en ninguna plataforma.',
      ] },
      { id: 'operation', heading: 'El prototipo impresiona. La operación hace las preguntas difíciles.', paragraphs: [
        'Piense en un sistema de reservas. En la demostración, la reserva funciona con datos simulados. En la operación real, dos clientes pueden pedir la misma hora. Un pago puede fallar. Una integración puede dejar de responder. Hay que decidir permisos, tratar excepciones, proteger datos y poder recuperar el servicio.',
        `El análisis ${cite(5, 'DORA de marzo de 2026')}, basado en 1.110 respuestas abiertas de ingenieros de Google, describe esa distancia: las ganancias de generación pueden consumirse en verificación e integración. No estudia Lovable, pero explica por qué acelerar la creación no completa la entrega. El ${cite(6, 'SSDF de NIST')} también integra seguridad a lo largo del desarrollo.`,
        'La oportunidad es conectar la automatización al trabajo completo: intención, requisitos, arquitectura, implementación, verificación y evolución. Volver a una cadena de tareas manuales desperdiciaría esa oportunidad.',
      ] },
      { id: 'factory', heading: 'En BeeverForge, el prototipo pone en marcha la fábrica.', kind: 'journey', paragraphs: [
        'Nuestra misión es llevar la idea hasta un producto en producción. Prototype inicia el recorrido: usted trabaja con la IA, valida la experiencia y consolida requisitos. Utiliza datos simulados; la aplicación real se implementa a partir de las decisiones y los requisitos que ayudó a descubrir.',
        'Su equipo diseña la arquitectura y prepara la base técnica, o solicita el arranque asistido opcional de BeeverForge. Analizamos el prototipo concluido dentro de la plataforma, diseñamos la solución y preparamos la base acordada por propuesta, con alcance y condiciones propios.',
        'Continuar con Team significa automatización: agentes de IA ejecutan trabajo preparado, la fábrica realiza las verificaciones configuradas y obtiene revisión independiente, y el Product Owner virtual organiza prioridades y evolución. Las personas orientan el producto, deciden la arquitectura y autorizan producción. La ejecución no depende de una sucesión de tareas manuales.',
      ] },
      { id: 'model-choice', heading: 'Su producto. Sus decisiones técnicas.', paragraphs: [
        'En BeeverForge, elegir modelos, credenciales e infraestructura forma parte de la solución. OpenAI, Anthropic, Moonshot AI/Kimi y otros proveedores compatibles son opciones según la configuración y validación del entorno. Los endpoints privados y modelos locales u on-premises requieren compatibilidad, recursos y configuración adecuados.',
        'Las claves de API y la infraestructura de ejecución quedan bajo control del cliente; el consumo de IA y los recursos se pagan por separado. La prueba alojada tiene su propia configuración y no representa la disponibilidad de todos los modelos. El objetivo es evitar que la evolución del producto dependa de un único proveedor de IA.',
      ] },
      { id: 'outcomes', heading: 'La siguiente métrica debe ser un producto funcionando.', paragraphs: [
        'La diferencia que defendemos es un proceso continuo de entrega, con automatización y responsabilidades claras. Aún no publicamos una tasa comparativa de conversión en negocios. El estudio de otro producto no demuestra que el nuestro garantice más ingresos. Clientes, distribución y viabilidad comercial siguen siendo esenciales.',
        'Ya puede elegir una plataforma pensando en lo que viene después de la primera demostración. Pregunte cómo los requisitos se convierten en trabajo ejecutable, quién verifica los cambios, quién controla los modelos y cómo seguirá evolucionando el producto.',
        '<strong>Su idea merece más que una demostración. BeeverForge está diseñada para ejecutar lo que viene después.</strong>',
      ] },
    ],
  },
}];
