# Prisma Setup & Fehlerbehebung

## Problem
`npx prisma` zeigte:
> Cannot find module 'C:\Users\marcu\Documents\prisma\build\index.js'

## Ursache
- Kaputter globaler Pfad
- Kein `node` in WSL
- Falsches Arbeitsverzeichnis
- `npx`-Cache veraltet

## Lösung
- `npm install prisma`
- `sudo ln -s /usr/bin/nodejs /usr/bin/node`
- `npm cache clean --force`
- `rm -rf ~/.npm/_npx ~/.npm/_lib`
- Terminal neu starten
- Ausführen aus `backend`-Ordner

## Ergebnis
`npx prisma studio` funktioniert und zeigt die Datenbank visuell an

## Warum Prisma lokal installiert wurde

- Vermeidung globaler Pfadkonflikte
- Sicherstellung der Versionskompatibilität
- Stabilität in WSL-Umgebung
- Reproduzierbarkeit für andere Entwickler und CI/CD
- Klar definierter Pfad: `./node_modules/.bin/prisma`

## Prisma-Version

Aktuell verwendet: `v6.19.0`

- Stabiler Migrationsmechanismus
- Kompatibel mit PostgreSQL
- Unterstützt Prisma Studio und Client
- Erweiterbar für zukünftige Datenbanktypen