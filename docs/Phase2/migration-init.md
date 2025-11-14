# Datenbankmigration: `init`

## Ziel
Initiale Synchronisierung des Prisma-Datenmodells mit der PostgreSQL-Datenbank im Rahmen von Phase 2 des MVP-Plans.

## Kontext
Dies ist der erste technische Schritt in Phase 2: Aufbau des Backends, beginnend mit der Datenbankmodellierung und Migration.

## Voraussetzungen
- Lokale PostgreSQL-Instanz läuft unter `localhost:5432`
- `.env`-Datei enthält gültige `DATABASE_URL`
- Prisma-Schema (`prisma/schema.prisma`) ist definiert
- Node.js und npm sind im WSL korrekt installiert
- Projektabhängigkeiten wurden mit `npm install` installiert

## Ausgeführte Schritte

```bash
# Lokale Prisma-Installation verwenden
./node_modules/.bin/prisma migrate dev --name init