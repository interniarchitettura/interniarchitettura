# SEO Todo List - interniarchitettura.it

**Audit date:** 2026-03-09
**SEO Health Score:** 67/100 | **AI Search Readiness:** 62/100

---

## Critical

- [x] Fix hamburger menu CSS typo (`bg-foregtext-foreground` → `bg-foreground`) in Navbar.tsx
- [ ] Aggiungere indirizzo fisico, telefono e Partita IVA nel footer/contatti (obbligatorio per legge in Italia)
- [ ] Thin content - homepage ~204 parole (min 500), pagine progetto ~60-130 parole (min 300). Aggiungere statistiche aggregate ("50+ progetti completati", "30+ anni di esperienza") e frasi citabili per AI
- [x] Cambiare redirect root da 307 (temporaneo) a 301/308 (`/ → /it`)

## High

- [x] Aggiungere CTA above the fold nella hero section (link a `#progetti`)
- [x] Aggiungere schema `WebSite` e `WebPage` in `layout.tsx`
- [x] Aggiungere schema `BreadcrumbList` nelle pagine progetto
- [x] Aggiungere pagina privacy policy (obbligatorio GDPR)
- [x] Hamburger tap target troppo piccolo (24x15px, minimo 48x48px)
- [x] Aggiungere contact form con honeypot + rate limiting
- [x] Aggiungere `description`, `image` allo schema LocalBusiness
- [ ] Espandere descrizioni progetto a 400+ parole con: brief cliente, sfida progettuale, materiali scelti, "expert quote" degli architetti
- [x] Creare `llms-full.txt` - versione estesa con descrizioni complete progetti, competenze, processo di lavoro
- [ ] Creare pagina servizi `/servizi` - progettazione interni, ristrutturazioni, direzione lavori (alta citabilità AI)

## Medium

- [x] Aggiungere `og:image` e `og:url` alla homepage (`page.tsx`)
- [ ] URL inglesi usano path italiano `/en/progetti/` - valutare `/en/projects/`
- [x] Abilitare supporto AVIF in `next.config.ts`
- [x] Aggiungere security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [x] Language switcher tap target troppo piccoli (26x24px, minimo 48x48px)
- [x] Link logo `href="/"` causa redirect 307 - cambiare a `href="/it"` (o locale corrente)
- [x] Schema: `areaServed` usa `State` invece di `AdministrativeArea`
- [x] Twitter card usa `summary` invece di `summary_large_image`
- [ ] Aggiungere sottotitoli H2/H3 nelle descrizioni progetto
- [x] Aggiungere crawler AI mancanti al robots.txt: `Google-Extended`, `CCBot`, `Applebot-Extended`

## Low

- [x] Creare pagina indice `/it/progetti`
- [x] Aggiungere tag hreflang anche nell'HTML `<head>` (già presente via Next.js `alternates.languages` in `generateMetadata`)
- [x] Aggiungere Twitter Card meta tags (già presente via `twitter.card` nel layout + ereditati da openGraph)
- [x] Configurare `images.minimumCacheTTL` in next.config.ts per caching immagini
- [ ] Blog/articoli - contenuti informativi su materiali, tendenze, consigli ristrutturazione
