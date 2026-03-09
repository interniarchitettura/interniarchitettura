# SEO Strategic Plan - Ferro & Salamano Architetti

**Business type:** Local Service (studio di architettura d'interni)
**Location:** Torino, Piemonte
**Site:** interniarchitettura.it
**Data:** 2026-03-09
**SEO Score attuale:** 48/100 | **AI Readiness:** 62/100

---

## 1. Discovery

### Business Profile

- Studio di architettura d'interni fondato nel 1990
- 2 fondatrici: Simonetta Salamano e Paola Ferro (Politecnico di Torino)
- 30+ anni di attività, 10 progetti documentati sul sito
- Servizi: progettazione interni, ristrutturazioni, direzione lavori
- Area: Torino e Piemonte
- Lingue: IT (primaria), EN (secondaria)

### Target Audience

- Proprietari di immobili a Torino che vogliono ristrutturare
- Professionisti che cercano uffici di design
- Committenti commerciali/industriali
- Clienti internazionali (versione EN)

### KPI Targets

| Metrica                   | Attuale          | 3 Mesi   | 6 Mesi   | 12 Mesi  |
| ------------------------- | ---------------- | -------- | -------- | -------- |
| Organic Traffic           | ~50/mese (stima) | 150      | 400      | 800+     |
| Keyword Rankings (top 10) | 0-2              | 5-8      | 15-20    | 30+      |
| Pagine indicizzate        | 12               | 18       | 25       | 35+      |
| Lead dal form             | 0                | 2-3/mese | 5-8/mese | 10+/mese |
| AI Search Citations       | 0                | 1-2      | 5+       | 10+      |

---

## 2. Competitive Landscape

### Competitor Probabili (Torino)

1. **Studioata.it** - studio architettura Torino, buon posizionamento locale
2. **Studiopianeta.it** - interior design Torino, portfolio ricco
3. **Archiproducts.com** - portale con profili di studi
4. **Houzz.it** - piattaforma con profili professionisti
5. **Architetti.com** - directory professionisti

### Gap Analysis

| Segnale                 | Voi           | Competitor medi |
| ----------------------- | ------------- | --------------- |
| Contenuto per progetto  | 60-130 parole | 300-500+ parole |
| Pagina servizi dedicata | No            | Si              |
| Blog/articoli           | No            | 5-20 articoli   |
| Google Business Profile | Non linkato   | Ottimizzato     |
| Recensioni              | 0 visibili    | 10-50+          |
| Profili directory       | 0             | 3-5+            |
| Schema markup           | Buono         | Basico          |

---

## 3. Site Architecture

### Struttura URL attuale

```
/it                          (homepage)
/it/progetti/[slug]          (10 pagine progetto)
/it/privacy-policy           (legal)
/en/...                      (versione inglese)
```

### Struttura URL target

```
/it                                   (homepage - espandere a 500+ parole)
/it/servizi                           (NEW - hub servizi)
/it/servizi/progettazione-interni     (NEW)
/it/servizi/ristrutturazioni          (NEW)
/it/servizi/direzione-lavori          (NEW)
/it/progetti                          (NEW - pagina indice portfolio)
/it/progetti/[slug]                   (espandere a 400+ parole)
/it/blog                              (NEW - hub articoli)
/it/blog/[slug]                       (NEW - articoli informativi)
/it/privacy-policy
/en/...                               (mirror EN)
```

### Internal Linking Strategy

- Homepage → Servizi (3 link) + Progetti (featured 3) + Blog (ultimi 3)
- Ogni progetto → Servizio correlato + Progetti adiacenti (prev/next, già presente)
- Ogni servizio → 3-4 progetti correlati + CTA contatti
- Blog → Servizi correlati + Progetti come case study

---

## 4. Content Strategy

### Content Pillars (pilastri)

| Pilastro       | Pagine              | Keyword target                                                                                            |
| -------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Servizi**    | 3-4 pagine          | "architetto interni torino", "ristrutturazione appartamento torino", "direzione lavori torino"            |
| **Portfolio**  | 10 pagine (espanse) | "[tipo] [zona] torino", "ristrutturazione [quartiere]"                                                    |
| **Blog/Guide** | 2-4/mese            | "quanto costa ristrutturare torino", "come scegliere architetto interni", "tendenze interior design 2026" |

### Keyword Targets (priorità)

**Transazionali (alta conversione):**

- "architetto interni torino"
- "studio architettura interni torino"
- "ristrutturazione appartamento torino"
- "interior design torino"
- "progettazione interni torino"

**Informativi (traffico + autorità):**

- "quanto costa ristrutturare un appartamento a torino"
- "come scegliere un architetto per ristrutturazione"
- "ristrutturazione appartamento centro storico"
- "illuminazione interni consigli"
- "materiali ristrutturazione casa"

**Long-tail (nicchia):**

- "ristrutturazione appartamento seicento torino"
- "architetto ristrutturazione villa piemonte"
- "progetto open space cucina soggiorno"

### E-E-A-T Building Plan

| Segnale               | Stato  | Azione                                                                     |
| --------------------- | ------ | -------------------------------------------------------------------------- |
| **Experience**        | Medio  | Aggiungere foto di cantiere, before/after, processo di lavoro nei progetti |
| **Expertise**         | Buono  | Bio con credenziali presenti. Aggiungere articoli tecnici sul blog         |
| **Authoritativeness** | Debole | Creare profili Houzz/Archilovers, ottenere citazioni su riviste locali     |
| **Trustworthiness**   | Medio  | Aggiungere indirizzo fisico, telefono, P.IVA, recensioni                   |

---

## 5. Technical Foundation

### Stato attuale (buono)

- HTTPS, security headers, AVIF, cache TTL
- Schema: WebSite, LocalBusiness, ProfessionalService, WebPage, BreadcrumbList, CreativeWork
- robots.txt ottimizzato per AI crawler (GPTBot, ClaudeBot, PerplexityBot, Amazonbot, Google-Extended, CCBot, Applebot-Extended)
- llms.txt + llms-full.txt
- Sitemap XML con hreflang
- Contact form con honeypot + rate limiting (Resend)

### Da completare

- Aggiungere `telephone` e `address.streetAddress` allo schema LocalBusiness
- Aggiungere `aggregateRating` quando avrete recensioni

---

## 6. Implementation Roadmap

### Phase 1 - Foundation (settimane 1-4)

| Task                                                                 | Priorità | Effort |
| -------------------------------------------------------------------- | -------- | ------ |
| Aggiungere indirizzo, telefono, P.IVA al footer e schema             | Critical | 1h     |
| Configurare Google Business Profile e linkare dal sito               | Critical | 2h     |
| Espandere homepage a 500+ parole (statistiche, processo, value prop) | High     | 3h     |
| Creare pagina `/servizi` hub con 3 servizi principali                | High     | 4h     |

### Phase 2 - Content Expansion (settimane 5-12)

| Task                                                                    | Priorità | Effort      |
| ----------------------------------------------------------------------- | -------- | ----------- |
| Espandere ogni progetto a 400+ parole (brief, sfida, materiali, quote)  | High     | 2h/progetto |
| Creare 3 pagine servizio dedicate (progettazione, ristrutturazioni, DL) | High     | 3h/pagina   |
| Pubblicare primi 4 articoli blog                                        | Medium   | 3h/articolo |
| Aggiungere foto before/after e foto cantiere ai progetti                | Medium   | 1h/progetto |
| Creare profili Houzz e Archilovers, aggiungere a sameAs                 | Medium   | 2h          |

**Articoli blog suggeriti per il lancio:**

1. "Quanto costa ristrutturare un appartamento a Torino nel 2026"
2. "Come scegliere i materiali per una ristrutturazione: la nostra guida"
3. "Ristrutturare un appartamento d'epoca: il caso di Via Porta Palatina"
4. "Open space cucina-soggiorno: pro, contro e soluzioni progettuali"

### Phase 3 - Scale (settimane 13-24)

| Task                                                            | Priorità | Effort      |
| --------------------------------------------------------------- | -------- | ----------- |
| Pubblicare 2 articoli/mese sul blog                             | Medium   | 3h/articolo |
| Richiedere recensioni Google ai clienti passati                 | High     | ongoing     |
| Aggiungere schema `Review`/`AggregateRating`                    | Medium   | 1h          |
| Creare contenuti video (tour progetti, processo) da embeddare   | Low      | 4h/video    |
| Valutare URL inglesi `/en/projects/`                            | Low      | 2h          |
| Outreach a riviste locali (Torino Magazine, press architettura) | Medium   | ongoing     |

### Phase 4 - Authority (mesi 7-12)

| Task                                                               | Priorità | Effort        |
| ------------------------------------------------------------------ | -------- | ------------- |
| Pubblicazione su riviste di settore (Domus, Elle Decor, AD Italia) | High     | ongoing       |
| Partecipazione a eventi/premi architettura                         | Medium   | ongoing       |
| Case study dettagliati (2000+ parole) per i 3 progetti migliori    | Medium   | 4h/case study |
| Valutare Google Ads per keyword transazionali                      | Low      | setup 2h      |
| Monitoraggio e ottimizzazione continua                             | ongoing  | 2h/mese       |

---

## 7. Quick Wins (implementabili subito)

1. **Google Business Profile** - Creare/ottimizzare il profilo con foto, servizi, orari. Impatto enorme per Local SEO.
2. **Indirizzo + telefono** - Aggiungere al footer. Obbligatorio per legge e per E-E-A-T.
3. **Richiedere 5-10 recensioni** - Contattare clienti recenti. Le recensioni Google sono il segnale #1 per local ranking.
4. **Homepage: aggiungere numeri** - "Dal 1990", "30+ anni di esperienza", "Torino e Piemonte". Frasi citabili per AI.

---

## 8. Schema Markup Roadmap

### Attuale (implementato)

- `WebSite` con `@id` e `publisher`
- `LocalBusiness` + `ProfessionalService` con `founder`, `makesOffer`, `knowsAbout`, `alumniOf`
- `WebPage` con `isPartOf` e `about`
- `BreadcrumbList` sulle pagine progetto
- `CreativeWork` per i progetti

### Da aggiungere

| Schema                      | Dove            | Quando                            |
| --------------------------- | --------------- | --------------------------------- |
| `Service` (pagine dedicate) | `/servizi/*`    | Phase 1                           |
| `ImageGallery`              | Pagine progetto | Phase 2                           |
| `AggregateRating`           | Layout globale  | Phase 3 (quando avete recensioni) |
| `Article` + `author`        | Blog posts      | Phase 2                           |
| `speakable`                 | Pagine servizio | Phase 3                           |

---

## 9. Monitoring

### Strumenti consigliati (gratuiti)

- **Google Search Console** - performance, indicizzazione, errori
- **Google Analytics 4** - traffico, conversioni (form submit)
- **Google Business Profile Insights** - visibilità locale
- **Vercel Analytics** - già installato

### Check mensili

- [ ] Pagine indicizzate vs inviate (Search Console)
- [ ] Keyword rankings per target principali
- [ ] Lead ricevuti dal contact form
- [ ] Core Web Vitals (Search Console)
- [ ] Nuove recensioni Google
- [ ] Citazioni AI (cercare "Ferro Salamano" o "interniarchitettura" su ChatGPT, Perplexity)
