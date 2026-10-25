# Sito microcredito · Job Academy

Sito statico (HTML, CSS, poco JavaScript), senza dipendenze.

- `src/` sorgenti, con `{{SITE_URL}}` al posto dell'indirizzo pubblico.
- `node build.mjs https://microcredito.jobacademysrl.com` crea `docs/` (con il file `CNAME`), la cartella che GitHub Pages pubblica.
- Il modulo invia dati e allegati a info@jobacademyilma.com tramite FormSubmit (formsubmit.co).
  **Al primo invio FormSubmit manda un'email di attivazione a info@jobacademyilma.com: va confermata, altrimenti le richieste non arrivano.**
- SEO/GEO: titolo e descrizione, canonical, Open Graph (`og.png`), JSON-LD (Organization, WebSite, Service, FAQPage),
  `sitemap.xml`, `robots.txt` aperto anche ai crawler AI, `llms.txt` con i fatti chiave.
- Stile: token derivati dalle misure di reverse-brand (palette neutra, bottoni a pillola, card con raggio 20px, base 4px, bande chiare/scure). Nessun logo, font o immagine di terzi.

Da completare prima della pubblicazione: i dati del titolare in `src/privacy.html` (`[RAGIONE SOCIALE]`, `[INDIRIZZO]`, `[PARTITA IVA]`, `[DURATA]`, `[DATA]`).
