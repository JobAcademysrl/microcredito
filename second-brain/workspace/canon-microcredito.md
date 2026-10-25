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

**Decisione aperta:** il network raccoglie i documenti dei clienti, mentre il sito dice che Job Academy non raccoglie domande. Va deciso il perimetro dell'attività e allineata la comunicazione pubblica (vedi §5 e §6).

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

| Livello | Ruolo (provvisorio) | Contatto col cliente |
| --- | --- | --- |
| Livello 1 | Vertice del network | No |
| Livello 2 | Coordinamento | No |
| Livello 3 | Gestione delle squadre | Occasionale |
| Livello 4 | Agente sul territorio | Sì: primo contatto e raccolta documenti |

- [lacuna] Nomi dei livelli usati in azienda e compiti precisi.
- [lacuna] Elenco degli agenti e chi riporta a chi.
- [lacuna] Compensi e provvigioni per livello.
- [lacuna] Percorso di formazione.
- **Decisione aperta:** quali livelli devono essere iscritti agli elenchi OAM (vedi `normative/normativa-agenti-oam.md`).

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
- [lacuna] Chi svolge i servizi di assistenza e monitoraggio previsti per il microcredito.
- **Decisione aperta:** ruoli privacy di agenti e punti informativi, archivio unico dei documenti, tempi di conservazione.

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

1. Perimetro: raccolta documenti o solo informazione (§1, §5).
2. Inquadramento OAM del network (§3, §6).
3. Ruoli privacy e archivio documenti (§5, §6).
4. Nomi e compiti dei 4 livelli (§3).
5. Elenco agenti (§3).
6. Elenco punti informativi (§4).
7. Fonte normativa degli importi (§2, §6).
