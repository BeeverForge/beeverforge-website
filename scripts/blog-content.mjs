// Scoped external audits support the production-delivery argument.
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
      ],
      [
        "Aqua Voice · Vibe Coding Showdown · 30 Oct 2025",
        "https://aquavoice.com/blog/vibe-coding-showdown-2025-base44-vs-replit-vs-bolt-vs-loveable-vs-rork-vs-v0"
      ],
      [
        "SlopCodeBench · preprint v2 · 7 May 2026",
        "https://arxiv.org/html/2603.24755v2"
      ]
    ],
    "pt": {
      "category": "Investigação e produto",
      "seoTitle": "Apps com IA: 91% com vulnerabilidades na auditoria | BeeverForge",
      "title": "91% das aplicações auditadas tinham vulnerabilidades. O desafio continua depois de publicar.",
      "summary": "Uma auditoria de 200 aplicações publicadas encontrou vulnerabilidades em 182. O que comparativos de ferramentas com IA revelam sobre o caminho até à operação.",
      "lead": "Uma investigação preliminar auditou 200 aplicações publicadas associadas à Lovable e ao Claude Code e identificou vulnerabilidades em 182. Arquitetura, verificações e evolução precisam acompanhar a ideia até à operação.",
      "coverAlt": "91% das aplicações auditadas tinham vulnerabilidades: 182 de 200 aplicações publicadas associadas à Lovable e ao Claude Code, num estudo preliminar.",
      "coverLabel": "Depois de publicar",
      "coverScope": "Fonte: Deng, Fan e Meng, preprint v4, secção 5. Amostra de 200 aplicações publicadas com repositórios públicos no GitHub; não é uma taxa global de insucesso.",
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
        "Preprint v4 de 14/09/2026. Secção 5: 182 das 200 aplicações publicadas auditadas tinham vulnerabilidades. Amostra com repositórios públicos no GitHub e autoria predominante por IA, associada a Lovable e Claude Code; não é uma taxa global de insucesso nem pesquisa apresentada como revista por pares.",
        "Benchmark de fornecedor de segurança: 18 modelos, quatro linguagens e quatro categorias de vulnerabilidade, sem orientação específica de segurança. Cerca de 38% de tarefas com código vulnerável; não mede aplicações completas nem a Lovable.",
        "Estudo misto: 85 respostas, 31 entrevistas em hackathon e oito com profissionais. Discute barreiras depois do protótipo; não estima a proporção de projetos que chega à produção.",
        "Análise de 1.110 respostas abertas de engenheiros do Google. Contextualiza verificação e integração; não mede conversão de projetos da Lovable.",
        "Referência de práticas para o desenvolvimento seguro ao longo do ciclo de vida; não é uma certificação da BeeverForge.",
        "Índice comercial externo e dinâmico de domínios próprios encontrados. Cobertura parcial, sem projetos apenas em lovable.app; não permite calcular uma taxa global de produção.",
        "Documentação da plataforma, usada exclusivamente para confirmar funcionalidades de hospedagem, exportação e portabilidade.",
        "Documentação da plataforma, usada exclusivamente para confirmar verificações de segurança disponíveis.",
        "Comparativo prático externo, com um caso testado em 27/10/2025 em seis plataformas. Resultado lido da tabela de seis funcionalidades. Não é um estudo populacional nem uma avaliação das versões atuais.",
        "Preprint v2 de 07/05/2026: 15 agentes, 36 problemas e 196 checkpoints. O resultado integral exige passar todos os testes em todas as etapas. Não mede a taxa de passagem a produção de plataformas comerciais."
      ],
      "sections": [
        {
          "id": "evidence",
          "heading": "182 aplicações com vulnerabilidades, numa amostra de 200.",
          "paragraphs": [
            "O <a href=\"#source-1\">estudo de Deng, Fan e Meng<sup>[1]</sup></a> auditou aplicações publicadas associadas à Lovable e ao Claude Code. Em <strong>182 das 200 aplicações avaliadas — 91% —</strong>, os investigadores identificaram pelo menos uma vulnerabilidade. O trabalho está disponível como preprint, na versão de setembro de 2026.",
            "A amostra foi selecionada entre aplicações com publicação acessível e repositórios públicos no GitHub, predominantemente criadas por IA. O resultado descreve a segurança das aplicações auditadas. Não mede abandono nem permite concluir que 91% de todos os produtos dessas ferramentas fracassa.",
            "Para quem quer transformar uma ideia num produto em operação, o achado coloca uma pergunta concreta: que trabalho continua depois de a aplicação já estar online?"
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
            "Uma aplicação pode permitir uma reserva e, ao mesmo tempo, ter permissões mal definidas. Confirmar a experiência prevista é uma parte da entrega; testar as fronteiras de acesso e as respostas a falhas exige verificações próprias.",
            "Há outra evidência, obtida por um método diferente: a <a href=\"#source-2\">atualização de outono de 2026 da Veracode<sup>[2]</sup></a> encontrou código com vulnerabilidades conhecidas em cerca de <strong>38% das tarefas avaliadas</strong>. O benchmark cobriu 18 modelos, quatro linguagens e quatro categorias de falhas. Houve melhoria face à medição anterior. Ainda assim, o resultado sustenta a necessidade de verificação; não autoriza atribuir esses 38% a aplicações da Lovable.",
            "O problema também aparece na passagem do protótipo à manutenção, discutida na <a href=\"#source-3\">investigação da CHI 2026<sup>[3]</sup></a>, e no trabalho de verificação e integração descrito pela <a href=\"#source-4\">DORA<sup>[4]</sup></a>. A nossa leitura editorial: a velocidade de gerar código só se traduz em entrega quando o trabalho seguinte também tem um processo."
          ]
        },
        {
          "id": "comparison",
          "heading": "Outras ferramentas, o mesmo desafio de concluir e evoluir.",
          "paragraphs": [
            "Num <a href=\"#source-9\">comparativo prático da Aqua Voice<sup>[9]</sup></a>, realizado em outubro de 2025, Base44, Replit, Bolt, Lovable, v0 e Rork receberam um caso de aplicação. Pela tabela publicada, <strong>apenas uma das seis ferramentas obteve aprovação nas seis funcionalidades avaliadas</strong>: autenticação, publicações, imagens, comentários, likes e base de dados. É um teste de um único caso e das versões da época, não uma taxa de fracasso do mercado.",
            "A continuidade foi o foco do <a href=\"#source-10\">SlopCodeBench, preprint v2<sup>[10]</sup></a>: 15 agentes de programação foram avaliados em 36 problemas com requisitos que evoluíam por etapas. <strong>Nenhuma execução passou todos os testes de todas as etapas de um problema, de ponta a ponta.</strong> É um benchmark controlado de evolução de código, com critérios estritos; não uma medição das plataformas Lovable ou Bolt em produção.",
            "São recortes diferentes, com uma questão em comum para o comprador: como a solução executa as partes que faltam, trata regressões e continua a evoluir quando os requisitos mudam? Essa pergunta deve entrar na escolha da plataforma desde o início."
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
            "A automação deve continuar a fazer o produto avançar quando as suas escolhas mudam. É essa continuidade que uma fábrica de software precisa oferecer.",
            "Para empresas que precisam de toda a plataforma na sua infraestrutura, o <a href=\"/pt/pricing/#enterprise\">Enterprise</a>, um plano da BeeverForge Enterprise Platform (BEP), é contratado sob consulta, com instalação self-hosted, RBAC, SSO e suporte BeeverForge. A implantação, a capacidade e as condições de suporte são definidas por proposta."
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
      "seoTitle": "AI apps: 91% had vulnerabilities in an audit | BeeverForge",
      "title": "91% of audited apps had vulnerabilities. The work continues after publishing.",
      "summary": "An audit of 200 deployed apps found vulnerabilities in 182. What AI-tool comparisons reveal about the path to an operating product.",
      "lead": "A preliminary study audited 200 deployed applications associated with Lovable and Claude Code and found vulnerabilities in 182. Architecture, verification and evolution need to accompany an idea all the way into operation.",
      "coverAlt": "91% of audited apps had vulnerabilities: 182 of 200 deployed applications associated with Lovable and Claude Code, in a preliminary study.",
      "coverLabel": "After publishing",
      "coverScope": "Source: Deng, Fan and Meng, preprint v4, section 5. Sample of 200 deployed applications with public GitHub repositories; not a platform-wide failure rate.",
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
        "Preprint v4, 14 September 2026. Section 5: 182 of 200 audited deployed apps had vulnerabilities. Predominantly AI-created public GitHub sample associated with Lovable and Claude Code; not a platform-wide failure rate or research presented as peer reviewed.",
        "Security-vendor benchmark: 18 models, four languages and four vulnerability categories, without security-specific guidance. Roughly 38% of tasks produced vulnerable code; not a study of complete apps or Lovable.",
        "Mixed-method study: 85 responses, 31 hackathon interviews and eight practitioner interviews. Examines post-prototype barriers; no population deployment rate.",
        "Analysis of 1,110 open-ended responses from Google engineers about verification and integration, not Lovable project conversion.",
        "Secure development lifecycle practices; not a BeeverForge certification.",
        "External commercial, live index of discovered custom domains. Partial coverage excluding lovable.app-only projects; no platform-wide production rate can be calculated.",
        "Platform documentation used only to confirm hosting, export and portability features.",
        "Platform documentation used only to confirm available security checks.",
        "External practical comparison: one scenario tested on 27 October 2025 across six platforms. Finding read from the six-feature table; not a population study or an evaluation of current versions.",
        "Preprint v2, 7 May 2026: 15 agents, 36 problems and 196 checkpoints. Full success requires passing every test at every stage. Not a production-conversion rate for commercial platforms."
      ],
      "sections": [
        {
          "id": "evidence",
          "heading": "182 apps with vulnerabilities in a sample of 200.",
          "paragraphs": [
            "<a href=\"#source-1\">Deng, Fan and Meng’s study<sup>[1]</sup></a> audited deployed applications associated with Lovable and Claude Code. Researchers identified at least one vulnerability in <strong>182 of the 200 evaluated apps — 91%</strong>. The work is available as a preprint, in its September 2026 version.",
            "The sample was selected from applications with reachable deployments and public GitHub repositories, predominantly created by AI. The result describes the audited apps’ security. It does not measure abandonment or establish that 91% of all products from those tools fail.",
            "For anyone turning an idea into an operating product, the finding raises a concrete question: what work continues after the application is already online?"
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
            "An app can accept a booking while enforcing permissions incorrectly. Checking the intended experience is one part of delivery; testing access boundaries and failure responses requires dedicated verification.",
            "A different method provides another piece of evidence: <a href=\"#source-2\">Veracode’s Fall 2026 update<sup>[2]</sup></a> found known vulnerabilities in code from roughly <strong>38% of evaluated tasks</strong>. Its benchmark covered 18 models, four languages and four vulnerability categories. Results improved over the previous snapshot. They still support the need for verification; they do not attribute a 38% vulnerability rate to Lovable apps.",
            "The transition from prototyping to maintenance is also discussed by <a href=\"#source-3\">CHI 2026 research<sup>[3]</sup></a>, while <a href=\"#source-4\">DORA<sup>[4]</sup></a> examines verification and integration work. Our editorial reading: faster code generation becomes delivery when the work that follows has a process too."
          ]
        },
        {
          "id": "comparison",
          "heading": "Other tools face the challenge of completing and evolving software.",
          "paragraphs": [
            "In an <a href=\"#source-9\">Aqua Voice practical comparison<sup>[9]</sup></a> conducted in October 2025, Base44, Replit, Bolt, Lovable, v0 and Rork were given one application scenario. In the published table, <strong>only one of the six tools passed all six evaluated features</strong>: authentication, posts, images, comments, likes and database. This is a single-case test of the versions available then, not a market-wide failure rate.",
            "<a href=\"#source-10\">SlopCodeBench, preprint v2<sup>[10]</sup></a>, focused on continuity: 15 coding agents were evaluated on 36 problems with requirements evolving through successive stages. <strong>No run passed every test at every stage of a problem end to end.</strong> This is a controlled code-evolution benchmark with strict criteria, not a measurement of Lovable or Bolt platforms in production.",
            "These are different observations with a shared question for a buyer: how does the solution execute missing work, handle regressions and keep evolving when requirements change? That question belongs in platform selection from the start."
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
            "Automation needs to keep advancing the product when your choices change. A software factory should provide that continuity.",
            "For companies needing the entire platform in their own infrastructure, <a href=\"/pricing/#enterprise\">Enterprise</a>, a plan of the BeeverForge Enterprise Platform (BEP), is available by quotation with self-hosted deployment, RBAC, SSO and BeeverForge support. Deployment, capacity and support terms are agreed in a proposal."
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
      "seoTitle": "Apps con IA: el 91% con vulnerabilidades en auditoría | BeeverForge",
      "title": "El 91% de las aplicaciones auditadas tenía vulnerabilidades. El reto continúa después de publicar.",
      "summary": "Una auditoría de 200 aplicaciones publicadas encontró vulnerabilidades en 182. Qué revelan los comparativos de herramientas con IA sobre el camino hasta la operación.",
      "lead": "Una investigación preliminar auditó 200 aplicaciones publicadas asociadas a Lovable y Claude Code y encontró vulnerabilidades en 182. Arquitectura, verificaciones y evolución deben acompañar la idea hasta la operación.",
      "coverAlt": "El 91% de las aplicaciones auditadas tenía vulnerabilidades: 182 de 200 aplicaciones publicadas asociadas a Lovable y Claude Code, en un estudio preliminar.",
      "coverLabel": "Después de publicar",
      "coverScope": "Fuente: Deng, Fan y Meng, preprint v4, sección 5. Muestra de 200 aplicaciones publicadas con repositorios públicos de GitHub; no es una tasa global de fracaso.",
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
        "Preprint v4 de 14/09/2026. Sección 5: 182 de 200 aplicaciones publicadas auditadas tenían vulnerabilidades. Muestra de GitHub público con autoría predominante de IA, asociada a Lovable y Claude Code; no es una tasa global de fracaso ni investigación presentada como revisada por pares.",
        "Benchmark de proveedor de seguridad: 18 modelos, cuatro lenguajes y cuatro categorías de vulnerabilidad, sin instrucciones específicas de seguridad. Cerca del 38% de tareas con código vulnerable; no mide aplicaciones completas ni Lovable.",
        "Estudio mixto: 85 respuestas, 31 entrevistas en hackathon y ocho a profesionales. Examina barreras después del prototipo; no estima una tasa general de publicación.",
        "Análisis de 1.110 respuestas abiertas de ingenieros de Google sobre verificación e integración, no sobre conversión de proyectos Lovable.",
        "Prácticas de desarrollo seguro durante el ciclo de vida; no es una certificación de BeeverForge.",
        "Índice comercial externo y dinámico de dominios propios encontrados. Cobertura parcial, sin proyectos solo en lovable.app; no permite calcular una tasa global de producción.",
        "Documentación de la plataforma usada exclusivamente para confirmar alojamiento, exportación y portabilidad.",
        "Documentación de la plataforma usada exclusivamente para confirmar verificaciones de seguridad disponibles.",
        "Comparativo práctico externo: un caso probado el 27/10/2025 en seis plataformas. Resultado leído de la tabla de seis funciones; no es un estudio poblacional ni una evaluación de las versiones actuales.",
        "Preprint v2 de 07/05/2026: 15 agentes, 36 problemas y 196 checkpoints. El resultado completo exige superar todas las pruebas en todas las etapas. No mide conversión a producción de plataformas comerciales."
      ],
      "sections": [
        {
          "id": "evidence",
          "heading": "182 aplicaciones con vulnerabilidades en una muestra de 200.",
          "paragraphs": [
            "El <a href=\"#source-1\">estudio de Deng, Fan y Meng<sup>[1]</sup></a> auditó aplicaciones publicadas asociadas a Lovable y Claude Code. Los investigadores identificaron al menos una vulnerabilidad en <strong>182 de las 200 aplicaciones evaluadas: el 91%</strong>. El trabajo está disponible como preprint, en su versión de septiembre de 2026.",
            "La muestra se seleccionó entre aplicaciones con publicación accesible y repositorios públicos de GitHub, creadas predominantemente por IA. El resultado describe la seguridad de las aplicaciones auditadas. No mide abandono ni permite concluir que el 91% de todos los productos de esas herramientas fracase.",
            "Para quien quiere convertir una idea en un producto operativo, el hallazgo plantea una pregunta concreta: ¿qué trabajo continúa después de que la aplicación ya está en línea?"
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
            "Una aplicación puede aceptar una reserva y, al mismo tiempo, aplicar permisos incorrectos. Comprobar la experiencia prevista es una parte de la entrega; probar los límites de acceso y las respuestas a fallos requiere verificaciones propias.",
            "Otro método aporta evidencia adicional: la <a href=\"#source-2\">actualización de otoño de 2026 de Veracode<sup>[2]</sup></a> encontró vulnerabilidades conocidas en el código de alrededor del <strong>38% de las tareas evaluadas</strong>. El benchmark abarcó 18 modelos, cuatro lenguajes y cuatro categorías de fallos. Hubo mejoras respecto a la medición anterior. El resultado respalda la necesidad de verificación; no permite atribuir ese 38% a las aplicaciones Lovable.",
            "El paso del prototipo al mantenimiento también aparece en la <a href=\"#source-3\">investigación de CHI 2026<sup>[3]</sup></a>, mientras que <a href=\"#source-4\">DORA<sup>[4]</sup></a> examina el trabajo de verificación e integración. Nuestra lectura editorial: generar código más rápido se convierte en entrega cuando el trabajo siguiente también tiene un proceso."
          ]
        },
        {
          "id": "comparison",
          "heading": "Otras herramientas, el reto de completar y evolucionar el software.",
          "paragraphs": [
            "En un <a href=\"#source-9\">comparativo práctico de Aqua Voice<sup>[9]</sup></a>, realizado en octubre de 2025, Base44, Replit, Bolt, Lovable, v0 y Rork recibieron un caso de aplicación. Según la tabla publicada, <strong>solo una de las seis herramientas aprobó las seis funciones evaluadas</strong>: autenticación, publicaciones, imágenes, comentarios, likes y base de datos. Es una prueba de un solo caso y de las versiones de entonces, no una tasa de fracaso del mercado.",
            "<a href=\"#source-10\">SlopCodeBench, preprint v2<sup>[10]</sup></a>, examinó la continuidad: 15 agentes de programación fueron evaluados en 36 problemas con requisitos que evolucionaban por etapas. <strong>Ninguna ejecución superó todas las pruebas de todas las etapas de un problema de principio a fin.</strong> Es un benchmark controlado de evolución de código con criterios estrictos, no una medición de las plataformas Lovable o Bolt en producción.",
            "Son observaciones distintas con una pregunta común para el comprador: ¿cómo ejecuta la solución el trabajo que falta, trata regresiones y sigue evolucionando cuando cambian los requisitos? Esa pregunta debe entrar en la elección de plataforma desde el principio."
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
            "La automatización debe seguir haciendo avanzar el producto cuando sus elecciones cambian. Una fábrica de software debe ofrecer esa continuidad.",
            "Para empresas que necesitan toda la plataforma en su infraestructura, <a href=\"/es/pricing/#enterprise\">Enterprise</a>, un plan de BeeverForge Enterprise Platform (BEP), se contrata bajo consulta, con instalación self-hosted, RBAC, SSO y soporte BeeverForge. La implantación, la capacidad y las condiciones de soporte se definen en una propuesta."
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
