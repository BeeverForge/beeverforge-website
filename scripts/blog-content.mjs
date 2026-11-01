// External evidence is scoped to its sample; delivery is the editorial focus.
export const retiredBlogSlugs = ["from-ai-prototype-to-production","model-agnostic-ai-software-factory"];
export const articles = [
  {
    "slug": "lovable-prototypes-to-businesses",
    "date": "2026-11-01",
    "sources": [
      [
        "Deng, Fan & Meng · Understanding the (In)Security of Vibe-Coded Applications · preprint v4, 14 Sep 2026",
        "https://arxiv.org/html/2606.23130v4"
      ],
      [
        "Veracode · Fall 2026 GenAI Code Security Update",
        "https://www.veracode.com/blog/fall-2026-genai-code-security/"
      ],
      [
        "CHI 2026 · From Throw-Away to Takeaway",
        "https://doi.org/10.1145/3772318.3790757"
      ],
      [
        "DORA · Balancing AI tensions · 10 Mar 2026",
        "https://dora.dev/insights/balancing-ai-tensions/"
      ],
      [
        "NIST · Secure Software Development Framework",
        "https://csrc.nist.gov/projects/ssdf"
      ],
      [
        "VibeCodedIndex · Lovable statistics · October 2026, live index",
        "https://vibecodedindex.com/lovable-statistics/"
      ],
      [
        "Lovable · Deployment, hosting, and ownership",
        "https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership"
      ],
      [
        "Lovable · Security overview",
        "https://docs.lovable.dev/features/security"
      ]
    ],
    "pt": {
      "category": "Investigação e produto",
      "seoTitle": "9.041 projetos com IA: o salto até à produção | BeeverForge",
      "title": "9.041 projetos com IA. Apenas 11,14% com publicação verificável.",
      "summary": "Um estudo externo encontrou links de publicação em 1.007 de 9.041 projetos públicos associados à Lovable e ao Claude Code. O que isso revela — e o que exige chegar à operação.",
      "lead": "Num estudo com repositórios públicos associados à Lovable e ao Claude Code, 1.007 de 9.041 projetos tinham um endereço de publicação validado e acessível. Para quem quer pôr uma ideia a funcionar, o percurso até à operação precisa fazer parte do produto.",
      "coverAlt": "11,14% com publicação verificável: 1.007 de 9.041 projetos públicos associados à Lovable e ao Claude Code, num estudo externo em preprint.",
      "coverLabel": "O salto até à operação",
      "coverScope": "Fonte: Deng, Fan e Meng, preprint v4, secção 4. Amostra de repositórios públicos no GitHub; não é uma taxa global de produção da Lovable.",
      "takeaway": "A BeeverForge existe para levar a ideia validada até ao produto em operação, com arquitetura, implementação automatizada e critérios de entrega acordados.",
      "journey": [
        [
          "Prototype",
          "Você + IA",
          "Explore a ideia, teste a experiência e consolide os requisitos."
        ],
        [
          "Arquitetura",
          "A sua equipa ou a BeeverForge",
          "Defina a solução e prepare a base técnica. O apoio especializado da BeeverForge é opcional."
        ],
        [
          "Team",
          "Automação BeeverForge",
          "Agentes implementam; a fábrica verifica e organiza a evolução. Uma pessoa autoriza a produção."
        ]
      ],
      "sourceNotes": [
        "Preprint v4 de 14/09/2026, não apresentado aqui como artigo revisto por pares. Secção 4: 1.007/9.041 projetos com links acessíveis; secção 5: 182/200 aplicações auditadas com vulnerabilidades. Amostra GitHub, predominantemente criada por IA, sem cobertura de projetos privados nem taxa de conversão global.",
        "Benchmark de fornecedor de segurança: 18 modelos, quatro linguagens e quatro categorias de vulnerabilidade, sem orientação específica de segurança. Cerca de 38% de tarefas com código vulnerável; não mede aplicações completas nem a Lovable.",
        "Estudo misto: 85 respostas, 31 entrevistas em hackathon e oito com profissionais. Discute barreiras depois do protótipo; não estima a proporção de projetos que chega à produção.",
        "Análise de 1.110 respostas abertas de engenheiros do Google. Contextualiza verificação e integração; não mede conversão de projetos da Lovable.",
        "Referência de práticas para o desenvolvimento seguro ao longo do ciclo de vida; não é uma certificação da BeeverForge.",
        "Índice comercial externo e dinâmico de domínios próprios encontrados. Cobertura parcial, sem projetos apenas em lovable.app; não permite calcular uma taxa global de produção.",
        "Documentação da plataforma, usada exclusivamente para confirmar funcionalidades de hospedagem, exportação e portabilidade.",
        "Documentação da plataforma, usada exclusivamente para confirmar verificações de segurança disponíveis."
      ],
      "sections": [
        {
          "id": "evidence",
          "heading": "O número tem fonte. E tem um recorte.",
          "paragraphs": [
            "O <a href=\"#source-1\">estudo de Deng, Fan e Meng<sup>[1]</sup></a> selecionou projetos públicos no GitHub predominantemente criados por IA. Encontrou publicação verificável em <strong>1.007 de 9.041: 11,14%</strong>. Os projetos foram associados à Lovable e ao Claude Code por sinais nos repositórios. É um preprint, na versão de setembro de 2026.",
            "Não encontrar um link público não prova abandono: pode haver uma instalação privada, um endereço não identificado ou trabalho em curso. A amostra também não representa todos os projetos dessas ferramentas. O dado mede publicação observável no conjunto estudado, sem demonstrar quantos projetos falharam.",
            "A pergunta para quem escolhe uma plataforma continua de pé: depois de validar a ideia, que caminho existe para a pôr em operação?"
          ]
        },
        {
          "id": "conversion",
          "heading": "Publicar é uma etapa. Operar exige continuidade.",
          "paragraphs": [
            "Uma demonstração impressiona quando o percurso previsto funciona. Um produto precisa lidar com o dia em que duas pessoas reservam o mesmo horário, uma integração fica indisponível ou alguém tenta aceder a dados de outro cliente. Essas situações precisam de decisões de arquitetura, comportamento definido e verificações.",
            "Um sistema interno usado diariamente também é um produto em operação. O critério é executar o trabalho acordado: gerir reservas, apoiar uma equipa, processar pedidos ou ligar sistemas. Receita, investimento e crescimento comercial dependem de outras decisões; a entrega técnica tem de ser verificável por si mesma.",
            "<strong>A sua ideia não deveria terminar numa demonstração convincente e numa lista de tarefas técnicas que ninguém assumiu.</strong>"
          ]
        },
        {
          "id": "verification",
          "heading": "Mesmo entre as aplicações publicadas, o trabalho continua.",
          "paragraphs": [
            "Numa auditoria de 200 aplicações publicadas, o mesmo <a href=\"#source-1\">preprint<sup>[1]</sup></a> identificou vulnerabilidades em <strong>182: 91%</strong>. Esse resultado pertence à amostra auditada; não mede a taxa de falha de toda a Lovable. Mostra por que a simples presença online é um critério de entrega insuficiente.",
            "Há outra evidência, obtida por um método diferente: a <a href=\"#source-2\">atualização de outono de 2026 da Veracode<sup>[2]</sup></a> encontrou código com vulnerabilidades conhecidas em cerca de <strong>38% das tarefas avaliadas</strong>. O benchmark cobriu 18 modelos, quatro linguagens e quatro categorias de falhas. Houve melhoria face à medição anterior. Ainda assim, o resultado sustenta a necessidade de verificação; não autoriza atribuir esses 38% a aplicações da Lovable.",
            "O problema também aparece na passagem do protótipo à manutenção, discutida na <a href=\"#source-3\">investigação da CHI 2026<sup>[3]</sup></a>, e no trabalho de verificação e integração descrito pela <a href=\"#source-4\">DORA<sup>[4]</sup></a>. A nossa leitura editorial: a velocidade de gerar código só se traduz em entrega quando o trabalho seguinte também tem um processo."
          ]
        },
        {
          "id": "fair-comparison",
          "heading": "Lovable, protótipos e a responsabilidade pela entrega.",
          "paragraphs": [
            "Lovable e ferramentas semelhantes mudaram a facilidade de experimentar uma ideia. Isso tem valor: testar uma experiência antes de investir na sua implementação pode evitar meses de trabalho no produto errado.",
            "A Lovable permite <a href=\"#source-7\">publicar e exportar código<sup>[7]</sup></a> e oferece <a href=\"#source-8\">verificações de segurança<sup>[8]</sup></a>. A comparação relevante para a BeeverForge é a continuidade da execução: quem prepara a arquitetura, como os requisitos se tornam trabalho implementável e como as alterações passam por verificações até à autorização de produção.",
            "Índices como o <a href=\"#source-6\">VibeCodedIndex<sup>[6]</sup></a> ajudam a descobrir produtos, mas observam apenas parte dos sites com domínio próprio. Dividir as aplicações que encontraram pelo total de projetos da Lovable não demonstra que os restantes ficaram pelo caminho. Um comparativo sério precisa distinguir projetos criados, publicações observadas e produtos preparados para operação."
          ]
        },
        {
          "id": "operation",
          "heading": "O que deve estar pronto quando o produto entra em operação.",
          "kind": "readiness",
          "paragraphs": [
            "Voltemos ao sistema de reservas. Validar a ideia ajuda a descobrir os passos que o cliente precisa de fazer. Preparar a operação exige resolver conflitos de horário, permissões, dados reais, falhas de pagamento e recuperação. Cada condição precisa de um responsável e de uma forma de confirmar o resultado.",
            "O <a href=\"#source-5\">Secure Software Development Framework do NIST<sup>[5]</sup></a> organiza práticas de desenvolvimento seguro ao longo do ciclo de vida. Aplicadas ao projeto concreto, essas práticas ajudam a transformar a expressão “pronto para produção” em critérios que podem ser avaliados antes da entrega."
          ]
        },
        {
          "id": "factory",
          "heading": "BeeverForge: uma plataforma para levar a ideia à operação.",
          "kind": "journey",
          "paragraphs": [
            "É para esse percurso que existe a BeeverForge. O compromisso é entregar o produto em operação, dentro do âmbito e dos critérios técnicos acordados, e dar continuidade à sua evolução com automação.",
            "Começa no Prototype: você e a IA exploram a ideia, testam a experiência com dados simulados e consolidam requisitos. O protótipo ajuda a decidir o que construir e fornece as decisões para implementar a aplicação real.",
            "A arquitetura pode ser preparada pela sua equipa. Se quiser apoio, o arranque assistido da BeeverForge é opcional: analisamos o protótipo concluído na plataforma, desenhamos a solução e preparamos a base técnica acordada numa proposta. Âmbito, entregáveis e condições são definidos antes de começar.",
            "<strong>No Team, a automação BeeverForge executa o trabalho preparado.</strong> Os agentes implementam; a fábrica realiza as verificações configuradas e obtém revisão independente; o Product Owner virtual organiza prioridades e evolução. As pessoas orientam o produto, decidem a arquitetura e autorizam a entrada em produção.",
            "A conclusão do protótipo abre uma etapa de implementação e evolução na mesma plataforma. Os critérios de entrega permitem acompanhar essa passagem e saber o que falta para a operação."
          ]
        },
        {
          "id": "model-choice",
          "heading": "A fábrica trabalha com as suas escolhas de IA e infraestrutura.",
          "paragraphs": [
            "OpenAI, Anthropic, Moonshot AI/Kimi e outros fornecedores compatíveis podem integrar a solução, conforme a configuração e a validação do ambiente. Modelos locais, endpoints privados e instalações on-premises exigem interfaces compatíveis e os recursos adequados.",
            "O cliente controla as suas chaves de API e a infraestrutura de execução; o consumo de IA e os recursos são pagos separadamente. O trial alojado tem configuração própria. Essa liberdade permite escolher e rever os fornecedores conforme o produto evolui.",
            "A automação deve continuar a fazer o produto avançar quando as suas escolhas mudam. É essa continuidade que uma fábrica de software precisa oferecer."
          ]
        },
        {
          "id": "outcomes",
          "heading": "O próximo marco da sua ideia é funcionar no mundo real.",
          "paragraphs": [
            "Antes de escolher uma plataforma, peça para ver o percurso completo: requisitos, arquitetura, execução, verificações, autorização de produção e entrega das alterações seguintes. Um protótipo dá forma à ideia; o valor da fábrica aparece na capacidade de continuar a executá-la.",
            "<strong>Crie com IA. Valide a ideia. Leve o produto à operação com a automação BeeverForge.</strong>"
          ]
        }
      ],
      "readinessTitle": "O que precisa estar demonstrado antes de entrar em produção",
      "readiness": [
        [
          "Fluxo do negócio",
          "Regras e exceções verificadas contra critérios de aceitação."
        ],
        [
          "Identidade e dados",
          "Acessos, permissões e tratamento dos dados definidos e testados."
        ],
        [
          "Integrações reais",
          "Dependências ligadas ao ambiente e respostas a falhas verificadas."
        ],
        [
          "Publicação e recuperação",
          "Versão rastreável, ambiente validado e recuperação preparada."
        ],
        [
          "Operação e evolução",
          "Responsáveis definidos e um percurso para investigar problemas e entregar alterações."
        ]
      ],
      "readinessNote": "Os critérios concretos dependem do produto e são acordados antes da entrada em produção."
    },
    "en": {
      "category": "Research and product",
      "seoTitle": "9,041 AI projects: the path to production | BeeverForge",
      "title": "9,041 AI projects. Just 11.14% with a verifiable deployment.",
      "summary": "An external study found deployment links in 1,007 of 9,041 public projects associated with Lovable and Claude Code. What the finding means for the path to operation.",
      "lead": "In a study of public repositories associated with Lovable and Claude Code, 1,007 of 9,041 projects had a validated, reachable deployment address. For someone building a product, the path to operation needs to be part of the platform.",
      "coverAlt": "11.14% with a verifiable deployment: 1,007 of 9,041 public projects associated with Lovable and Claude Code, in an external preprint study.",
      "coverLabel": "The path to operation",
      "coverScope": "Source: Deng, Fan and Meng, preprint v4, section 4. Public GitHub repository sample; not a platform-wide Lovable production rate.",
      "takeaway": "BeeverForge exists to take a validated idea to an operating product, with architecture, automated implementation and agreed delivery criteria.",
      "journey": [
        [
          "Prototype",
          "You + AI",
          "Explore the idea, test the experience and capture requirements."
        ],
        [
          "Architecture",
          "Your team or BeeverForge",
          "Design the solution and prepare its foundation. BeeverForge’s expert help is optional."
        ],
        [
          "Team",
          "BeeverForge automation",
          "Agents implement; the factory checks and organizes evolution. A person authorizes production."
        ]
      ],
      "sourceNotes": [
        "Preprint v4, 14 September 2026; not presented as peer-reviewed research. Section 4: 1,007/9,041 projects with reachable deployment links; section 5: 182/200 audited apps with vulnerabilities. Predominantly AI-created GitHub sample; no coverage of private projects or global conversion rate.",
        "Security-vendor benchmark: 18 models, four languages and four vulnerability categories, without security-specific guidance. Roughly 38% of tasks produced vulnerable code; not a study of complete apps or Lovable.",
        "Mixed-method study: 85 responses, 31 hackathon interviews and eight practitioner interviews. Examines post-prototype barriers; no population deployment rate.",
        "Analysis of 1,110 open-ended responses from Google engineers about verification and integration, not Lovable project conversion.",
        "Secure development lifecycle practices; not a BeeverForge certification.",
        "External commercial, live index of discovered custom domains. Partial coverage excluding lovable.app-only projects; no platform-wide production rate can be calculated.",
        "Platform documentation used only to confirm hosting, export and portability features.",
        "Platform documentation used only to confirm available security checks."
      ],
      "sections": [
        {
          "id": "evidence",
          "heading": "A sourced number, with a defined scope.",
          "paragraphs": [
            "<a href=\"#source-1\">Deng, Fan and Meng’s study<sup>[1]</sup></a> selected public GitHub projects predominantly created by AI. It found verifiable deployments in <strong>1,007 of 9,041: 11.14%</strong>. Repository markers associated the projects with Lovable and Claude Code. The source is a preprint, in its September 2026 version.",
            "An absent public link does not prove abandonment: a project may have a private deployment, an unidentified address or ongoing development. The sample also does not represent every project on those tools. The finding measures observable deployment within the studied set, without establishing how many projects failed.",
            "The question for anyone choosing a platform remains: once the idea is validated, what path gets it into operation?"
          ]
        },
        {
          "id": "conversion",
          "heading": "Publishing is one stage. Operation needs continuity.",
          "paragraphs": [
            "A demo impresses when the intended path works. A product must handle the day when two people book the same slot, an integration becomes unavailable or someone attempts to access another customer’s data. Those situations need architecture decisions, defined behavior and checks.",
            "An internal system used every day is also an operating product. The criterion is whether it performs the agreed work: managing bookings, supporting a team, processing orders or connecting systems. Revenue, investment and commercial growth depend on other decisions; technical delivery must be verifiable in its own right.",
            "<strong>Your idea should not end with a convincing demo and a list of technical tasks nobody has taken responsibility for.</strong>"
          ]
        },
        {
          "id": "verification",
          "heading": "The work continues even after publication.",
          "paragraphs": [
            "In an audit of 200 deployed applications, the same <a href=\"#source-1\">preprint<sup>[1]</sup></a> found vulnerabilities in <strong>182: 91%</strong>. This result belongs to the audited sample; it is not a platform-wide Lovable failure rate. It explains why being online is an insufficient delivery criterion.",
            "A different method provides another piece of evidence: <a href=\"#source-2\">Veracode’s Fall 2026 update<sup>[2]</sup></a> found known vulnerabilities in code from roughly <strong>38% of evaluated tasks</strong>. Its benchmark covered 18 models, four languages and four vulnerability categories. Results improved over the previous snapshot. They still support the need for verification; they do not attribute a 38% vulnerability rate to Lovable apps.",
            "The transition from prototyping to maintenance is also discussed by <a href=\"#source-3\">CHI 2026 research<sup>[3]</sup></a>, while <a href=\"#source-4\">DORA<sup>[4]</sup></a> examines verification and integration work. Our editorial reading: faster code generation becomes delivery when the work that follows has a process too."
          ]
        },
        {
          "id": "fair-comparison",
          "heading": "Lovable, prototypes and responsibility for delivery.",
          "paragraphs": [
            "Lovable and similar tools have made experimenting with an idea much easier. That is valuable: testing an experience before committing to implementation can avoid months spent building the wrong product.",
            "Lovable supports <a href=\"#source-7\">publishing and code export<sup>[7]</sup></a> and provides <a href=\"#source-8\">security checks<sup>[8]</sup></a>. The relevant comparison for BeeverForge is continuity of execution: who prepares the architecture, how requirements become implementable work and how changes proceed through checks to production approval.",
            "Indexes such as <a href=\"#source-6\">VibeCodedIndex<sup>[6]</sup></a> help discover products but observe only part of the custom-domain landscape. Dividing the apps they discovered by Lovable’s total project count does not establish that the rest stalled. A useful comparison needs to distinguish created projects, observed deployments and products prepared for operation."
          ]
        },
        {
          "id": "operation",
          "heading": "What needs to be ready when the product enters operation.",
          "kind": "readiness",
          "paragraphs": [
            "Return to the booking system. Validating the idea helps identify the steps a customer needs. Preparing operation means resolving booking conflicts, permissions, real data, payment failures and recovery. Each condition needs an owner and a way to confirm the result.",
            "<a href=\"#source-5\">NIST’s Secure Software Development Framework<sup>[5]</sup></a> organizes secure development practices across the lifecycle. Applied to a specific project, these practices help turn “production ready” into criteria that can be assessed before delivery."
          ]
        },
        {
          "id": "factory",
          "heading": "BeeverForge: a platform taking the idea into operation.",
          "kind": "journey",
          "paragraphs": [
            "BeeverForge exists for that journey. The commitment is to deliver an operating product within the agreed scope and technical acceptance criteria, then keep its evolution moving through automation.",
            "Start in Prototype: you and AI explore the idea, test the experience with simulated data and capture requirements. The prototype helps decide what to build and records the decisions needed to implement the real application.",
            "Your team can prepare the architecture. If you want support, BeeverForge’s assisted start is optional: we analyze the prototype completed in the platform, design the solution and prepare the technical foundation agreed in a proposal. Scope, deliverables and commercial terms are defined before work begins.",
            "<strong>With Team, BeeverForge automation executes the prepared work.</strong> Agents implement; the factory runs configured checks and obtains independent review; the virtual Product Owner organizes priorities and evolution. People guide the product, decide its architecture and authorize production entry.",
            "Completing the prototype opens a stage of implementation and evolution in the same platform. Delivery criteria make progress visible and show what remains before operation."
          ]
        },
        {
          "id": "model-choice",
          "heading": "The factory works with your AI and infrastructure choices.",
          "paragraphs": [
            "OpenAI, Anthropic, Moonshot AI/Kimi and other compatible providers can form part of the solution, subject to environment configuration and validation. Local models, private endpoints and on-premises installations need compatible interfaces and suitable resources.",
            "Customers control API keys and execution infrastructure; AI consumption and resources are paid separately. The hosted trial has its own configuration. This freedom lets you select and reconsider providers as the product evolves.",
            "Automation needs to keep advancing the product when your choices change. A software factory should provide that continuity."
          ]
        },
        {
          "id": "outcomes",
          "heading": "Your idea’s next milestone is working in the real world.",
          "paragraphs": [
            "Before choosing a platform, ask to see the complete journey: requirements, architecture, execution, checks, production approval and delivery of subsequent changes. A prototype gives an idea shape; the factory’s value appears in its ability to keep executing it.",
            "<strong>Create with AI. Validate the idea. Take the product into operation with BeeverForge automation.</strong>"
          ]
        }
      ],
      "readinessTitle": "What needs to be demonstrated before production",
      "readiness": [
        [
          "Business workflow",
          "Rules and exceptions checked against acceptance criteria."
        ],
        [
          "Identity and data",
          "Access, permissions and data handling defined and tested."
        ],
        [
          "Real integrations",
          "Dependencies connected to the environment and failure responses checked."
        ],
        [
          "Release and recovery",
          "A traceable version, validated environment and prepared recovery."
        ],
        [
          "Operation and evolution",
          "Defined owners and a path to investigate problems and deliver changes."
        ]
      ],
      "readinessNote": "The specific criteria depend on the product and are agreed before production entry."
    },
    "es": {
      "category": "Investigación y producto",
      "seoTitle": "9.041 proyectos con IA: el salto a producción | BeeverForge",
      "title": "9.041 proyectos con IA. Solo el 11,14% con publicación verificable.",
      "summary": "Un estudio externo encontró enlaces de publicación en 1.007 de 9.041 proyectos públicos asociados a Lovable y Claude Code. Qué significa para el camino hasta la operación.",
      "lead": "En un estudio con repositorios públicos asociados a Lovable y Claude Code, 1.007 de 9.041 proyectos tenían una dirección de publicación validada y accesible. Para quien quiere poner una idea en funcionamiento, el camino hasta la operación debe formar parte del producto.",
      "coverAlt": "11,14% con publicación verificable: 1.007 de 9.041 proyectos públicos asociados a Lovable y Claude Code, en un estudio externo en preprint.",
      "coverLabel": "El salto hasta la operación",
      "coverScope": "Fuente: Deng, Fan y Meng, preprint v4, sección 4. Muestra de repositorios públicos de GitHub; no es una tasa global de producción de Lovable.",
      "takeaway": "BeeverForge existe para llevar la idea validada hasta el producto operativo, con arquitectura, implementación automatizada y criterios de entrega acordados.",
      "journey": [
        [
          "Prototype",
          "Usted + IA",
          "Explore la idea, pruebe la experiencia y consolide los requisitos."
        ],
        [
          "Arquitectura",
          "Su equipo o BeeverForge",
          "Diseñe la solución y prepare su base técnica. Nuestro apoyo especializado es opcional."
        ],
        [
          "Team",
          "Automatización BeeverForge",
          "Los agentes implementan; la fábrica verifica y organiza la evolución. Una persona autoriza producción."
        ]
      ],
      "sourceNotes": [
        "Preprint v4 de 14/09/2026; no se presenta como artículo revisado por pares. Sección 4: 1.007/9.041 proyectos con enlaces accesibles; sección 5: 182/200 aplicaciones auditadas con vulnerabilidades. Muestra GitHub predominantemente creada por IA, sin cobertura de proyectos privados ni tasa global de conversión.",
        "Benchmark de proveedor de seguridad: 18 modelos, cuatro lenguajes y cuatro categorías de vulnerabilidad, sin instrucciones específicas de seguridad. Cerca del 38% de tareas con código vulnerable; no mide aplicaciones completas ni Lovable.",
        "Estudio mixto: 85 respuestas, 31 entrevistas en hackathon y ocho a profesionales. Examina barreras después del prototipo; no estima una tasa general de publicación.",
        "Análisis de 1.110 respuestas abiertas de ingenieros de Google sobre verificación e integración, no sobre conversión de proyectos Lovable.",
        "Prácticas de desarrollo seguro durante el ciclo de vida; no es una certificación de BeeverForge.",
        "Índice comercial externo y dinámico de dominios propios encontrados. Cobertura parcial, sin proyectos solo en lovable.app; no permite calcular una tasa global de producción.",
        "Documentación de la plataforma usada exclusivamente para confirmar alojamiento, exportación y portabilidad.",
        "Documentación de la plataforma usada exclusivamente para confirmar verificaciones de seguridad disponibles."
      ],
      "sections": [
        {
          "id": "evidence",
          "heading": "El número tiene fuente. Y un alcance definido.",
          "paragraphs": [
            "El <a href=\"#source-1\">estudio de Deng, Fan y Meng<sup>[1]</sup></a> seleccionó proyectos públicos de GitHub creados predominantemente por IA. Encontró publicación verificable en <strong>1.007 de 9.041: 11,14%</strong>. Los proyectos se asociaron a Lovable y Claude Code por señales en los repositorios. Es un preprint, en su versión de septiembre de 2026.",
            "No encontrar un enlace público no demuestra abandono: puede existir una instalación privada, una dirección no identificada o trabajo en curso. La muestra tampoco representa todos los proyectos de esas herramientas. El dato mide publicación observable en el conjunto estudiado, sin demostrar cuántos proyectos fracasaron.",
            "La pregunta para quien elige plataforma sigue en pie: después de validar la idea, ¿qué camino existe para ponerla en funcionamiento?"
          ]
        },
        {
          "id": "conversion",
          "heading": "Publicar es una etapa. Operar exige continuidad.",
          "paragraphs": [
            "Una demostración impresiona cuando funciona el recorrido previsto. Un producto debe responder cuando dos personas reservan la misma hora, una integración deja de estar disponible o alguien intenta acceder a datos de otro cliente. Esas situaciones requieren decisiones de arquitectura, comportamiento definido y verificaciones.",
            "Un sistema interno de uso diario también es un producto operativo. El criterio es ejecutar el trabajo acordado: gestionar reservas, apoyar a un equipo, procesar pedidos o conectar sistemas. Ingresos, inversión y crecimiento comercial dependen de otras decisiones; la entrega técnica debe ser verificable por sí misma.",
            "<strong>Su idea no debería terminar en una demostración convincente y una lista de tareas técnicas de las que nadie se responsabilizó.</strong>"
          ]
        },
        {
          "id": "verification",
          "heading": "El trabajo continúa incluso después de publicar.",
          "paragraphs": [
            "En una auditoría de 200 aplicaciones publicadas, el mismo <a href=\"#source-1\">preprint<sup>[1]</sup></a> identificó vulnerabilidades en <strong>182: el 91%</strong>. El resultado pertenece a esa muestra; no mide la tasa de fallo de toda Lovable. Muestra por qué estar en línea es un criterio de entrega insuficiente.",
            "Otro método aporta evidencia adicional: la <a href=\"#source-2\">actualización de otoño de 2026 de Veracode<sup>[2]</sup></a> encontró vulnerabilidades conocidas en el código de alrededor del <strong>38% de las tareas evaluadas</strong>. El benchmark abarcó 18 modelos, cuatro lenguajes y cuatro categorías de fallos. Hubo mejoras respecto a la medición anterior. El resultado respalda la necesidad de verificación; no permite atribuir ese 38% a las aplicaciones Lovable.",
            "El paso del prototipo al mantenimiento también aparece en la <a href=\"#source-3\">investigación de CHI 2026<sup>[3]</sup></a>, mientras que <a href=\"#source-4\">DORA<sup>[4]</sup></a> examina el trabajo de verificación e integración. Nuestra lectura editorial: generar código más rápido se convierte en entrega cuando el trabajo siguiente también tiene un proceso."
          ]
        },
        {
          "id": "fair-comparison",
          "heading": "Lovable, prototipos y responsabilidad de entrega.",
          "paragraphs": [
            "Lovable y herramientas similares facilitaron experimentar con una idea. Eso tiene valor: probar una experiencia antes de invertir en implementarla puede evitar meses construyendo el producto equivocado.",
            "Lovable permite <a href=\"#source-7\">publicar y exportar código<sup>[7]</sup></a> y ofrece <a href=\"#source-8\">verificaciones de seguridad<sup>[8]</sup></a>. La comparación relevante para BeeverForge es la continuidad de ejecución: quién prepara la arquitectura, cómo los requisitos se convierten en trabajo implementable y cómo los cambios pasan las verificaciones hasta la autorización de producción.",
            "Índices como <a href=\"#source-6\">VibeCodedIndex<sup>[6]</sup></a> ayudan a descubrir productos, pero observan solo parte de los sitios con dominio propio. Dividir las aplicaciones que encontraron por el total de proyectos de Lovable no demuestra que el resto se haya quedado por el camino. Una comparación seria debe distinguir proyectos creados, publicaciones observadas y productos preparados para operar."
          ]
        },
        {
          "id": "operation",
          "heading": "Qué debe estar preparado cuando el producto entra en operación.",
          "kind": "readiness",
          "paragraphs": [
            "Volvamos al sistema de reservas. Validar la idea ayuda a descubrir los pasos del cliente. Preparar la operación exige resolver conflictos de horario, permisos, datos reales, fallos de pago y recuperación. Cada condición necesita un responsable y una forma de confirmar el resultado.",
            "El <a href=\"#source-5\">Secure Software Development Framework de NIST<sup>[5]</sup></a> organiza prácticas de desarrollo seguro durante el ciclo de vida. Aplicadas al proyecto concreto, ayudan a convertir “listo para producción” en criterios que se pueden evaluar antes de la entrega."
          ]
        },
        {
          "id": "factory",
          "heading": "BeeverForge: una plataforma para llevar la idea a operación.",
          "kind": "journey",
          "paragraphs": [
            "BeeverForge existe para ese recorrido. El compromiso es entregar el producto operativo dentro del alcance y los criterios técnicos acordados, y continuar su evolución con automatización.",
            "Empiece en Prototype: usted y la IA exploran la idea, prueban la experiencia con datos simulados y consolidan requisitos. El prototipo ayuda a decidir qué construir y registra las decisiones para implementar la aplicación real.",
            "Su equipo puede preparar la arquitectura. Si quiere apoyo, el arranque asistido de BeeverForge es opcional: analizamos el prototipo concluido en la plataforma, diseñamos la solución y preparamos la base técnica acordada en una propuesta. El alcance, los entregables y las condiciones se definen antes de empezar.",
            "<strong>Con Team, la automatización BeeverForge ejecuta el trabajo preparado.</strong> Los agentes implementan; la fábrica realiza las verificaciones configuradas y obtiene revisión independiente; el Product Owner virtual organiza prioridades y evolución. Las personas orientan el producto, deciden la arquitectura y autorizan producción.",
            "Finalizar el prototipo abre una etapa de implementación y evolución en la misma plataforma. Los criterios de entrega permiten seguir ese avance y saber qué falta para la operación."
          ]
        },
        {
          "id": "model-choice",
          "heading": "La fábrica trabaja con sus elecciones de IA e infraestructura.",
          "paragraphs": [
            "OpenAI, Anthropic, Moonshot AI/Kimi y otros proveedores compatibles pueden formar parte de la solución, según la configuración y validación del entorno. Los modelos locales, endpoints privados e instalaciones on-premises requieren interfaces compatibles y recursos adecuados.",
            "El cliente controla sus claves API y su infraestructura de ejecución; el consumo de IA y los recursos se pagan por separado. La prueba alojada tiene configuración propia. Esa libertad permite elegir y revisar proveedores a medida que evoluciona el producto.",
            "La automatización debe seguir haciendo avanzar el producto cuando sus elecciones cambian. Una fábrica de software debe ofrecer esa continuidad."
          ]
        },
        {
          "id": "outcomes",
          "heading": "El próximo hito de su idea es funcionar en el mundo real.",
          "paragraphs": [
            "Antes de elegir plataforma, pida ver el recorrido completo: requisitos, arquitectura, ejecución, verificaciones, autorización de producción y entrega de los siguientes cambios. Un prototipo da forma a la idea; el valor de la fábrica aparece en su capacidad para seguir ejecutándola.",
            "<strong>Cree con IA. Valide la idea. Lleve el producto a operación con la automatización BeeverForge.</strong>"
          ]
        }
      ],
      "readinessTitle": "Qué debe demostrarse antes de entrar en producción",
      "readiness": [
        [
          "Flujo de negocio",
          "Reglas y excepciones verificadas con criterios de aceptación."
        ],
        [
          "Identidad y datos",
          "Accesos, permisos y tratamiento de datos definidos y probados."
        ],
        [
          "Integraciones reales",
          "Dependencias conectadas al entorno y respuestas a fallos verificadas."
        ],
        [
          "Publicación y recuperación",
          "Versión trazable, entorno validado y recuperación preparada."
        ],
        [
          "Operación y evolución",
          "Responsables definidos y un recorrido para investigar problemas y entregar cambios."
        ]
      ],
      "readinessNote": "Los criterios concretos dependen del producto y se acuerdan antes de entrar en producción."
    }
  }
];
