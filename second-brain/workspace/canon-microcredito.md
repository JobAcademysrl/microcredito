# Canon · Microcredito Job Academy

Fonte di verità del second brain. Ogni fatto ha una fonte; ciò che manca è segnato **[lacuna]** e riportato nel database Notion "Lacune e dati da completare".

Fonti usate: sito microcredito.jobacademysrl.com (`src/index.html`), `src/llms.txt`, `src/privacy.html`.
Aggiornato al: 25/10/2026.

---

## §1 Identità

| Voce | Fatto | Fonte |
| --- | --- | --- |
| Ragione sociale | Job Academy srl | llms.txt |
| Sede | Via Stefano Canzio 50r, Genova | llms.txt |
| P.IVA | 03071340990 | llms.txt |
| Attività | Sportello informativo sul microcredito: spiega le regole e orienta persone fisiche e aziende | llms.txt |
| Cosa non fa | Non raccoglie domande di finanziamento e non concede credito | llms.txt |
| Contatti | info@jobacademyilma.com · WhatsApp +39 350 159 1719 | llms.txt |
| Sito aziendale | https://www.jobacademysrl.com/ | llms.txt |

**Deciso (25/10/2026):** il network raccoglie i documenti dei clienti. La domanda di finanziamento resta del cliente verso l'ente erogatore, quindi il sito resta corretto.

**Come guadagna il network:** provvigioni solo su business plan, servizi accessori e assistenza pre e post erogazione. Mai sull'erogazione o sull'importo erogato.

## §2 Il microcredito (come descritto sul sito)

| Voce | Fatto |
| --- | --- |
| Cos'è | Finanziamento per avviare o far crescere un'attività; lo Stato fa da garante su una parte del prestito |
| Importo massimo | 75.000 € per imprese non SRL (ditte individuali, professionisti, società di persone); 100.000 € per le SRL |
| Garanzia dello Stato | 80% fino a 50.000 €; 60% fino a 100.000 € |
| Garanzie reali | Non richieste fino a 50.000 € |
| Durata del rimborso | Fino a 10 anni |
| Verifica di bancabilità | Entro 20 giorni dalla domanda presentata all'ente erogatore |
| Soldi sul conto aziendale | Entro 3 mesi |
| Chi decide | L'ente erogatore |

[lacuna] Norma che fissa gli importi 75.000 / 100.000 € (vedi `normative/normativa-importi-massimi.md`).

## §3 Network agenti a 4 livelli

Struttura gerarchica: ogni agente ha un livello superiore e una squadra diretta (Notion: Network agenti, relazione "Livello superiore" / "Squadra diretta").

| Livello | Nome | Ruolo | Contatto col cliente |
| --- | --- | --- | --- |
| 1 | Director | Vertice del network | No |
| 2 | Area manager | Coordina un'area | No |
| 3 | Senior | Guida una squadra di junior | Occasionale |
| 4 | Junior | Agente sul territorio | Sì: primo contatto e raccolta documenti |

Provvigioni: solo su business plan, servizi accessori e assistenza pre e post erogazione, mai sull'erogazione.

**Deciso (25/10/2026):** iscrizione OAM non necessaria, proprio perché il network non è pagato sull'erogazione (vedi `normative/normativa-agenti-oam.md`).

- [lacuna] Compiti precisi di ciascun livello (i ruoli in tabella sono provvisori).
- [lacuna] Elenco degli agenti e chi riporta a chi.
- [lacuna] Importi o percentuali delle provvigioni per servizio e ripartizione tra i livelli.
- [lacuna] Percorso di formazione.

Rapporto dei collaboratori: esterni, senza partita IVA (prestazione occasionale) fino a 5.000 € di compensi l'anno, poi con partita IVA. [da verificare con il commercialista: l'obbligo di partita IVA dipende dall'abitualità, non solo dall'importo]

Dettaglio: `network-livelli.md`.

## §4 Punti informativi su tutta Italia

| Punto | Regione | Indirizzo | Stato |
| --- | --- | --- | --- |
| Job Academy · Genova (sede) | Liguria | Via Stefano Canzio 50r | Attivo |

[lacuna] Tutti gli altri punti informativi: città, indirizzo, referente, stato. Si censiscono in Notion (Punti informativi) per regione e area (Nord-Ovest, Nord-Est, Centro, Sud, Isole).

Dettaglio: `punti-informativi.md`.

## §5 Clienti e raccolta documenti

Tipi di cliente: persona fisica (nuova attività), ditta individuale, lavoratore autonomo / professionista, società di persone, SRL.

Fasi della pratica (Notion: Clienti → Fase):
Primo contatto → Raccolta documenti → Documenti completi → Inviata all'ente erogatore → Verifica bancabilità → Erogato / Non finanziabile / Rinuncia.

Documenti utili (dal sito):

- Persona fisica: documento d'identità, codice fiscale, stato di famiglia, numero di telefono, email.
- Azienda già esistente: documento d'identità dell'amministratore, visura camerale, ultimo bilancio (se presente), numero di telefono, email.

Regola: nessun documento prima dell'informativa privacy e del consenso.

- [lacuna] Enti erogatori con cui si lavora.
Servizi del network al cliente (campo "Servizi" in Notion): business plan, servizi accessori, assistenza pre-erogazione, assistenza post-erogazione. Coprono anche l'assistenza e il monitoraggio previsti per il microcredito.

Privacy (bozze in `../privacy/`, da far verificare e firmare):

- Job Academy srl è titolare; ogni collaboratore firma un documento prima di raccogliere dati.
- Senza partita IVA → lettera di autorizzazione (art. 29 GDPR); con partita IVA → nomina a responsabile (art. 28 GDPR); per tutti le istruzioni operative.
- Archivio unico: database Notion "Documenti clienti", accessi per persona.
- Conservazione: 24 mesi dall'ultimo contatto senza servizi; 10 anni dalla fine del rapporto per i clienti (come l'informativa del sito).

Dettaglio: `percorso-cliente.md`, `documenti-checklist.md`.

## §6 Normative di riferimento

Tutte da verificare su fonte ufficiale prima dell'uso con i clienti.

| Nota | Riferimento | Ambito |
| --- | --- | --- |
| `normative/normativa-tub-art-111.md` | D.Lgs. 385/1993, art. 111 | Microcredito |
| `normative/normativa-dm-176-2014.md` | D.M. MEF 17/10/2014 n. 176 | Microcredito |
| `normative/normativa-importi-massimi.md` | Da individuare | Microcredito |
| `normative/normativa-fondo-garanzia-pmi.md` | L. 662/1996, art. 2 c. 100 lett. a) | Garanzia pubblica |
| `normative/normativa-agenti-oam.md` | TUB artt. 128-quater, 128-sexies; D.Lgs. 141/2010 | Intermediari e agenti |
| `normative/normativa-trasparenza.md` | TUB Titolo VI | Trasparenza |
| `normative/normativa-gdpr.md` | Reg. UE 2016/679; D.Lgs. 196/2003 | Privacy |
| `normative/normativa-antiriciclaggio.md` | D.Lgs. 231/2007 | Antiriciclaggio |
| `normative/ente-nazionale-microcredito.md` | Da verificare | Enti |

## §7 KPI

Definiti, non ancora calcolati (nessun dato storico). Database Notion: KPI.

Clienti in lavorazione · Pratiche inviate all'ente erogatore · Pratiche erogate · Importo erogato totale · Tasso di erogazione · Tempo medio domanda → erogazione (riferimento: max 3 mesi) · Clienti con documenti completi · Agenti attivi per livello · Punti informativi attivi · Regioni coperte (su 20).

## §8 Lacune e decisioni

L'elenco vivo è nel database Notion "Lacune e dati da completare". Priorità alta:

1. Privacy: verifica delle bozze, firme dei collaboratori, pubblicazione dell'informativa aggiornata (§5).
2. Soglia 5.000 € e partita IVA dei collaboratori: verifica con il commercialista (§3).
3. Elenco agenti (§3).
4. Elenco punti informativi (§4).
5. Fonte normativa degli importi (§2, §6).

Chiuse il 25/10/2026: raccolta documenti (sì), OAM (non necessaria), nomi dei livelli (Director, Area manager, Senior, Junior), servizi di assistenza (li svolge il network).
