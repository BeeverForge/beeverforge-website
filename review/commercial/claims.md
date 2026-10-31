# Evidence and limits — 2026-10-31

The public positioning is the connected journey from a validated prototype to production. It is a description of the product workflow, not a measured commercial-success rate or a claim that competitors cannot deploy applications.

- **CHI 2026, From Throw-Away to Takeaway:** https://doi.org/10.1145/3772318.3790757 — primary peer-reviewed mixed-methods study: 85 survey respondents, interviews with 31 hackathon participants and eight practitioners. Supports transition barriers in that sample. Does not measure a market-wide conversion rate or evaluate BeeverForge.
- **DORA 2025:** https://dora.dev/research/2025/dora-report/ — organizational strengths and weaknesses affect AI-assisted delivery. Our interpretation is explicitly labeled in the article. No quantitative performance claim is attributed to BeeverForge.
- **NIST SSDF:** https://csrc.nist.gov/projects/ssdf — lifecycle security context. No NIST certification or compliance claim is made.
- **RAND:** https://www.rand.org/pubs/research_reports/RRA2680-1.html — the study excludes projects that simply use pretrained LLMs. Its often-repeated failure estimate is not used as a conversion rate for generated prototypes or AI app builders.
- **OpenCode provider documentation:** https://opencode.ai/docs/providers/ — supports a broad provider catalog and local/custom compatible endpoints. This is compatibility evidence for the underlying harness, not proof that all options have been validated end to end in every BeeverForge deployment. The harness is not named in commercial page copy.
- **Kimi:** https://platform.kimi.ai/docs/guide/migrating-from-openai-to-kimi — API compatibility documentation.
- **Ollama:** https://docs.ollama.com/api/openai-compatibility — a subset of OpenAI API compatibility, not a guarantee of identical behavior or model quality.

The public core was inspected at `ef33e7e4a59fa60e1fd6c8f906e0c0fa6e9bb0ee`: README.md, docs/STATUS.md and beeverforge/adapters/agent/opencode.py. It supports configurable coding-agent/model selection and a human production gate. The hosted trial currently uses Anthropic; wider provider choice is described as deployment-dependent. No new providers, infrastructure deployment, billing capability or offline commercial platform have been implemented in this website update.

The assisted-start amount was removed from public marketing, metadata, the trial FAQ and the nonbinding next-version terms draft. The service has a project-specific proposal. No billing prices or current terms were changed.

Browser review: 72 combinations across three languages, four viewport widths, and home/pricing/trial/blog index/both articles. No horizontal overflow, one H1, no assisted amount disclosure, and dark theme throughout. Additional interaction checks: mobile menu to blog and language change preserving the article route. No live form, payment or backend mutation was submitted.
