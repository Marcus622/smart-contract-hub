# ✅ Feature-Checkliste – MVP Smart Contract & Subscription Hub

Diese Checkliste definiert die minimal funktionsfähige Version (MVP) der Anwendung. Sie dient als Grundlage für Entwicklung, Testing und Priorisierung.

---

## 🔹 1. Nutzerverwaltung

- [ ] Registrierung mit E-Mail & Passwort  
- [ ] Login mit JWT-Authentifizierung  
- [ ] Passwort-Reset via Token  
- [ ] Rollen: `user`, `admin`  
- [ ] Mandanten-ID für spätere Multi-Tenant-Struktur

---

## 🔹 2. Vertrags- & Aboverwaltung

- [ ] Upload von Vertragsdokumenten (PDF, JPG, PNG)  
- [ ] Manuelle Eingabe von Vertragsdaten (Titel, Frist, Betrag, Anbieter)  
- [ ] Kategorisierung: Vertrag, Abo, Garantie, Versicherung  
- [ ] Status: aktiv, gekündigt, abgelaufen  
- [ ] Tagging & Suchfunktion

---

## 🔹 3. Reminder-Engine

- [ ] Fristenerkennung (manuell, später OCR)  
- [ ] Automatische Erinnerungen per E-Mail  
- [ ] Reminder-Logik: 30/14/7 Tage vor Frist  
- [ ] Wiederkehrende Fristen (monatlich, jährlich)  
- [ ] Reminder-Status: geplant, gesendet, bestätigt

---

## 🔹 4. Dashboard & UI

- [ ] Übersicht aller Verträge & Abos  
- [ ] Kalenderansicht mit Fristen  
- [ ] Filter nach Status, Kategorie, Anbieter  
- [ ] Upload-Formular mit Fortschrittsanzeige  
- [ ] Responsive Design (PWA-fähig)

---

## 🔹 5. API & Backend-Funktionalität

- [ ] REST-API für alle CRUD-Operationen  
- [ ] Authentifizierte Endpunkte  
- [ ] Reminder-Trigger via Lambda/EventBridge  
- [ ] API-Dokumentation via Swagger  
- [ ] Logging & Fehlerbehandlung

---

## 🔹 6. Datenbankstruktur

- [ ] Tabellen: `users`, `contracts`, `reminders`, `uploads`, `organizations`  
- [ ] Erweiterungspunkte: `ocr_status`, `billing_status`, `export_flag`  
- [ ] Relationale Verknüpfung: Nutzer ↔ Verträge ↔ Reminder

---

## 🔹 7. Infrastruktur & DevOps

- [ ] Terraform-Modul für AWS-Ressourcen  
- [ ] GitHub Actions für Build, Test, Deploy  
- [ ] Environments: `dev`, `prod`  
- [ ] Secrets-Management (AWS Parameter Store oder GitHub Secrets)

---

## 🔹 8. Dokumentation & Export

- [ ] README mit Setup-Anleitung  
- [ ] Architekturübersicht (Diagramm vorhanden)  
- [ ] API-Dokumentation (Swagger/OpenAPI)  
- [ ] Exportfunktion (CSV, PDF) – vorbereitet, nicht MVP-relevant

---

Diese Checkliste kann als Grundlage für GitHub Issues, Milestones oder Kanban-Boards verwendet werden.