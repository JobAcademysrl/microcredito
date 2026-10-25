# Second brain · Microcredito

Stessa struttura del second brain di Aurora Sistemi, adattata a Job Academy e al microcredito:

- **Canon** (`workspace/canon-microcredito.md`): i fatti fissi, in sezioni numerate (§1–§8). È la fonte di verità. Le altre note lo citano, non lo ripetono.
- **Note tematiche**: `network-livelli.md`, `punti-informativi.md`, `percorso-cliente.md`, `documenti-checklist.md`.
- **Normative** (`normative/`): una nota per norma, con riferimento, cosa dice per noi, impatto operativo e stato di verifica.
- **Modelli** (`modelli/`): schede vuote per agente, cliente, punto informativo e normativa.
- **Cruscotto Notion** "Cruscotto Microcredito": i database operativi (Network agenti, Punti informativi, Clienti, Documenti clienti, Normative di riferimento, KPI, Lacune e dati da completare) con relazioni e grafici.

## Regola sui dati personali

Il repository è **pubblico**: qui ci sono solo struttura, regole e normative.
Nomi, recapiti e documenti di clienti e agenti stanno **solo su Notion** (privato).
Le cartelle `clienti/`, `documenti-clienti/` e `agenti/` sono in `.gitignore` per evitare caricamenti per errore.

## Come si aggiorna

1. Un fatto nuovo e verificato va prima nel canon, con la fonte.
2. Poi si aggiornano la nota tematica e il database Notion collegati.
3. Ciò che manca o va deciso diventa una voce in **Lacune e dati da completare** (Notion), con il rimando "Dove nel cervello" (es. `canon §3`).
4. Una normativa si considera valida solo con `Verifica: Verificata su fonte ufficiale` e la data di ultima verifica.
