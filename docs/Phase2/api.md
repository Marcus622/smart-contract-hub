# API-Struktur: Smart Contract & Subscription Hub

## Ziel
Modulare, erweiterbare API zur Verwaltung von Subscriptions, Nutzern und Smart Contract Events.

## Einstiegspunkt
`src/index.ts` – Express-Server mit Routing und Middleware

## Endpunkte (Phase 2 MVP)
- `GET /subscriptions` – Liste aller aktiven Subscriptions
- `POST /subscriptions` – Neue Subscription anlegen
- `GET /users/:id` – Nutzerprofil abrufen
- `POST /contract-events` – Events vom Smart Contract empfangen

## Struktur
- `routes/` – Endpunktdefinitionen
- `controllers/` – Request-Handling
- `services/` – Business-Logik
- `prisma/` – Datenbankzugriff
- `middleware/` – Auth, Logging, Validation

## Erweiterungspotenzial
- Versionierung (`/v1/`, `/v2/`)
- Webhooks für externe Integrationen
- Admin-Dashboard-Endpunkte

## Verweise
- [database.md](./database.md)
- [migration-init.md](./migration-init.md)
- [tech-stack.md](./tech-stack.md)


src/
├── routes/             # Definiert die Endpunkte (z. B. subscriptions.ts)
├── controllers/        # Verarbeitet Requests, ruft Services auf
├── services/           # Enthält Business-Logik (z. B. Planberechnung)
├── prisma/             # Prisma Client-Instanz
├── middleware/         # Authentifizierung, Validierung, Logging
├── utils/              # Hilfsfunktionen (z. B. Datumsformatierung)
├── index.ts            # Einstiegspunkt für Express oder Fastify