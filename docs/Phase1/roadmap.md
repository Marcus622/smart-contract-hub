# 🗺️ Projekt-Roadmap – Smart Contract & Subscription Hub

Diese Roadmap beschreibt die geplanten Phasen zur Entwicklung und Erweiterung des Projekts. Jede Phase ist modular aufgebaut und kann unabhängig getestet und erweitert werden.

---

## ✅ Phase 1 – Projektdefinition & Architektur

- [x] Projektzusammenfassung erstellen (`README.md`)  
- [x] SWOT-Analyse dokumentieren (`docs/swot.md`)  
- [x] Tech-Stack finalisieren (`docs/tech-stack.md`)  
- [x] Feature-Checkliste definieren (`docs/feature-checklist.md`)  
- [x] Visuelle Architekturdiagramme erstellen  
- [x] GitHub-Repo initialisieren mit Struktur & Setup-Datei (`docs/setup.md`)

---

## 🚧 Phase 2 – MVP Backend & Datenbank

- [ ] Datenbankmodell mit Prisma definieren (`prisma/schema.prisma`)  
- [ ] Tabellen: `users`, `contracts`, `reminders`, `uploads`, `organizations`  
- [ ] REST-API mit Express/FastAPI aufsetzen  
- [ ] Authentifizierung mit JWT implementieren  
- [ ] Reminder-Logik vorbereiten (Lambda/EventBridge)  
- [ ] API-Dokumentation mit Swagger/OpenAPI

---

## 🚧 Phase 3 – Frontend & UI

- [ ] React-App mit Tailwind CSS aufsetzen  
- [ ] Upload-Formular für Vertragsdokumente  
- [ ] Dashboard mit Kalenderansicht  
- [ ] Filter- und Suchfunktionen  
- [ ] Responsive Design (PWA-fähig)

---

## 🚧 Phase 4 – Cloud & Infrastruktur

- [ ] Terraform-Modul für AWS-Ressourcen erstellen  
- [ ] RDS, S3, Lambda, Textract, SNS konfigurieren  
- [ ] Secrets-Management via AWS Parameter Store  
- [ ] GitHub Actions für CI/CD einrichten  
- [ ] Environments: `dev`, `prod`

---

## 🚧 Phase 5 – Erweiterungen & Monetarisierung

- [ ] OCR-Integration mit AWS Textract oder spaCy  
- [ ] Exportfunktion (PDF, CSV)  
- [ ] Multi-Tenant-Struktur mit `organization_id`  
- [ ] Zahlungsintegration (Stripe, PayPal)  
- [ ] API-Zugang für Drittanbieter  
- [ ] White-Label-Vorbereitung

---

## 📌 Hinweise

- Jede Phase ist unabhängig dokumentiert und testbar  
- Erweiterungen sind vorbereitet, aber nicht MVP-relevant  
- Roadmap kann als Grundlage für GitHub Milestones oder Kanban-Boards verwendet werden
