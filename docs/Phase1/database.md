# 🗄️ Datenbankstruktur – Smart Contract & Subscription Hub

Diese Dokumentation beschreibt die Datenbankstruktur des Projekts. Sie basiert auf PostgreSQL und wird mit Prisma ORM modelliert. Ziel ist eine modulare, erweiterbare und mandantenfähige Architektur.

---

## 🧠 Grundprinzipien

- **Modularität:** Jede Entität ist klar abgegrenzt und erweiterbar  
- **Mandantenfähigkeit:** Organisationen können mehrere Nutzer und Verträge verwalten  
- **Erweiterungspunkte:** Felder für OCR, Export, Zahlung sind vorbereitet  
- **Referentielle Integrität:** Beziehungen sind über Foreign Keys abgebildet

---

## 📋 Tabellenübersicht

| Tabelle        | Zweck                              |
|----------------|-------------------------------------|
| `users`        | Registrierte Nutzer                 |
| `organizations`| Mandantenstruktur (optional)        |
| `contracts`    | Verträge, Abos, Garantien etc.      |
| `reminders`    | Erinnerungen zu Fristen             |
| `uploads`      | Dokumente (PDF, Bilder)             |

---

## 🔹 Tabelle: `users`

Speichert alle registrierten Nutzer.

| Feld             | Typ         | Beschreibung                       |
|------------------|-------------|------------------------------------|
| `id`             | UUID        | Primärschlüssel                    |
| `email`          | String      | Eindeutige E-Mail-Adresse          |
| `password_hash`  | String      | Gehashter Passwortwert             |
| `role`           | Enum        | `user` oder `admin`                |
| `organization_id`| UUID        | FK zu `organizations` (optional)  |
| `created_at`     | Timestamp   | Registrierungsdatum                |

---

## 🔹 Tabelle: `organizations`

Optional für B2B oder White-Labeling.

| Feld         | Typ       | Beschreibung                  |
|--------------|-----------|-------------------------------|
| `id`         | UUID      | Primärschlüssel               |
| `name`       | String    | Name der Organisation         |
| `created_at` | Timestamp | Erstellungsdatum              |

---

## 🔹 Tabelle: `contracts`

Zentrale Entität für Verträge, Abos, Garantien etc.

| Feld             | Typ       | Beschreibung                          |
|------------------|-----------|---------------------------------------|
| `id`             | UUID      | Primärschlüssel                       |
| `user_id`        | UUID      | FK zu `users`                         |
| `title`          | String    | Vertragsbezeichnung                   |
| `category`       | Enum      | `contract`, `subscription`, `warranty`, `insurance` |
| `provider`       | String    | Anbieter (z. B. Telekom, Netflix)     |
| `amount`         | Decimal   | Monatlicher Betrag                    |
| `status`         | Enum      | `active`, `cancelled`, `expired`     |
| `due_date`       | Date      | Fristdatum                            |
| `ocr_status`     | Enum      | `pending`, `completed`, `error`      |
| `billing_status` | Enum      | `unpaid`, `paid`, `cancelled`        |
| `export_flag`    | Boolean   | Für CSV/PDF-Export markiert          |
| `created_at`     | Timestamp | Erstellungsdatum                     |

---

## 🔹 Tabelle: `reminders`

Erinnerungen zu Fristen, automatisch oder manuell erstellt.

| Feld         | Typ       | Beschreibung                      |
|--------------|-----------|-----------------------------------|
| `id`         | UUID      | Primärschlüssel                   |
| `contract_id`| UUID      | FK zu `contracts`                 |
| `send_date`  | DateTime  | Geplantes Versanddatum            |
| `status`     | Enum      | `scheduled`, `sent`, `confirmed` |
| `channel`    | Enum      | `email`, `sms`, `push`            |
| `created_at` | Timestamp | Erstellungsdatum                  |

---

## 🔹 Tabelle: `uploads`

Verknüpfung von Dokumenten zu Verträgen.

| Feld         | Typ       | Beschreibung                      |
|--------------|-----------|-----------------------------------|
| `id`         | UUID      | Primärschlüssel                   |
| `contract_id`| UUID      | FK zu `contracts`                 |
| `file_path`  | String    | Pfad oder S3-URL                  |
| `file_type`  | Enum      | `pdf`, `jpg`, `png`               |
| `ocr_result` | Text      | Extrahierter Text (optional)      |
| `created_at` | Timestamp | Upload-Datum                      |

---

## 📐 Beziehungen

- Ein `user` kann mehrere `contracts` haben  
- Ein `contract` kann mehrere `reminders` und `uploads` haben  
- Ein `user` kann optional zu einer `organization` gehören  
- Alle Beziehungen sind über Foreign Keys abgebildet

---

## 🧩 Erweiterungspunkte

- `billing_status` für spätere Zahlungsintegration  
- `ocr_status` für Texterkennung mit Textract oder spaCy  
- `export_flag` für selektiven Export  
- `organization_id` für Mandantenfähigkeit

---

## 📄 Hinweis zur Implementierung

Die Struktur wird im Prisma-Modell (`backend/prisma/schema.prisma`) abgebildet. Migrationen erfolgen über:

```bash
npx prisma migrate dev --name init