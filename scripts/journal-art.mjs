// Original vector editorial cover. Its numerical statement is scoped in the
// artwork, its alt text and the article; it never labels projects as failures.
export function journalArt(locale) {
  const t = {
    pt:['60,5%','PESQUISA LOVABLE / 2026','Ainda não monetizam.','Mas pretendem.','Respondentes, não projetos.','DADOS: THE BUILD ECONOMY · MAIO DE 2026'],
    en:['60.5%','LOVABLE SURVEY / 2026','Not monetizing yet.','But planning to.','Respondents, not projects.','DATA: THE BUILD ECONOMY · MAY 2026'],
    es:['60,5%','ESTUDIO LOVABLE / 2026','Aún no monetizan.','Pero quieren hacerlo.','Participantes, no proyectos.','DATOS: THE BUILD ECONOMY · MAYO DE 2026'],
  }[locale];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800"><rect width="1200" height="800" fill="#e7bf7a"/><g fill="none" stroke="#322b22" opacity=".18"><circle cx="1090" cy="60" r="310"/><circle cx="1090" cy="60" r="240"/><circle cx="1090" cy="60" r="170"/><path d="M75 101h1050M75 693h1050"/></g><g fill="#222329"><text x="78" y="72" font-family="Arial,sans-serif" font-size="18" font-weight="700" letter-spacing="2">BEEVERFORGE JOURNAL</text><text x="78" y="160" font-family="Arial,sans-serif" font-size="20" letter-spacing="2">${t[1]}</text><text x="65" y="381" font-family="Georgia,serif" font-size="226" letter-spacing="-12">${t[0]}</text><text x="78" y="449" font-family="Georgia,serif" font-size="49">${t[2]}</text><text x="78" y="506" font-family="Georgia,serif" font-size="49">${t[3]}</text><rect x="78" y="557" width="1044" height="12" opacity=".2"/><rect x="78" y="557" width="631.62" height="12"/><text x="78" y="632" font-family="Arial,sans-serif" font-size="25">${t[4]}</text><text x="78" y="743" font-family="Arial,sans-serif" font-size="15" letter-spacing="1.5">${t[5]}</text></g></svg>`;
}
