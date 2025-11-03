# smart-contract-hub
Modularer Vertrags- &amp; Abo-Manager mit Reminder-Engine und Cloud-Architektur.

# Smart Contract & Subscription Hub

Ein modularer Vertrags- und Abomanager mit automatisierter Reminder-Engine, Cloud-Infrastruktur und Erweiterungspotenzial für B2C und B2B-Anwendungen.

## 🧾 Projektzusammenfassung

Dieses Projekt adressiert ein alltägliches Problem: den Überblick über laufende Verträge, Abonnements und deren Fristen zu behalten. Ziel ist es, eine benutzerfreundliche Plattform zu entwickeln, die:

- Verträge und Abos zentral verwaltet  
- Fristen automatisch erkennt und erinnert  
- Dokumente hochlädt und optional per OCR ausliest  
- Kostenübersichten und Kündigungsoptionen bietet  
- Skalierbar ist für private und gewerbliche Nutzer

## 🧱 Tech-Stack (MVP)

**Frontend:** React, Tailwind CSS, React Router, PWA-fähig  
**Backend:** Node.js + Express, JWT Auth, Swagger/OpenAPI  
**Datenbank:** PostgreSQL mit Prisma ORM  
**Cloud:** AWS (RDS, Lambda, SNS, Textract), Terraform  
**CI/CD:** GitHub Actions, Environments `dev` & `prod`

## ✅ MVP-Funktionen

- Nutzerregistrierung & Login  
- Vertrags- und Aboverwaltung mit Upload  
- Reminder-Engine mit Fristenerkennung  
- Dashboard mit Kalenderansicht  
- REST-API mit Authentifizierung  
- Infrastruktur via Terraform & CI/CD

## 📦 Setup & Entwicklung

### Voraussetzungen

- Node.js ≥ 18  
- PostgreSQL ≥ 14  
- AWS CLI konfiguriert  
- Terraform ≥ 1.5  
- GitHub Account mit aktiviertem Actions-Zugriff

### Lokales Setup

```bash
git clone https://github.com/dein-benutzername/smart-contract-hub.git
cd smart-contract-hub
npm install
cp .env.example .env
npm run dev
