# Studio Casa Mormino
Sito vetrina in italiano, con presentazione, servizi, telefono ed email.

## Sviluppo
Richiede Node.js 22.13+ e pnpm 11.19.0.

- `pnpm install --frozen-lockfile`
- `pnpm dev`
- `pnpm build`
- `pnpm deploy` (account Cloudflare autenticato)

Hosting: Cloudflare Workers, configurato in `wrangler.jsonc`. Nessun accesso ChatGPT richiesto. Il repository conserva anche la versione iniziale e la cronologia della migrazione.

## Materiali
Logo originale fornito dallo studio. Recapiti tratti dal biglietto da visita: Dott.ssa Rossella Mormino, +39 353 498 1834, info@studiocasamormino.it.
Foto illustrativa di Kateryna T: https://unsplash.com/photos/white-and-blue-concrete-building-CH1_YWNRezU — https://unsplash.com/license. Non rappresenta un immobile dichiarato in gestione.

## Contenuti da completare
Confermare i testi dei servizi e aggiungere sede e dati fiscali dello studio.

## Collegamenti
Sito pubblico: https://studio-casa-mormino.fulcinitimatteo.workers.dev
Repository: https://github.com/fulcinitimatteo-gif/studio-casa-mormino

La pubblicazione iniziale è stata eseguita con Wrangler. I successivi push GitHub non pubblicano automaticamente: eseguire pnpm deploy per aggiornare Cloudflare.

