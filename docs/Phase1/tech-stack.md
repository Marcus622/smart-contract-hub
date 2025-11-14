# 🧱 Tech-Stack – Smart Contract & Subscription Hub (MVP)

Diese Datei dokumentiert den finalen Technologie-Stack für das MVP. Der Stack ist modular aufgebaut, cloud-native und auf Erweiterbarkeit ausgelegt.

---

## 🔹 1. Frontend

- **Framework:** React  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **PWA-Fähigkeit:** Workbox oder Vite-PWA  
- **Optional:** React Native für spätere mobile App

---

## 🔹 2. Backend

- **Framework:** Node.js mit Express  
- **Alternative:** FastAPI (Python), falls OCR/NLP stark ausgebaut wird  
- **Authentifizierung:** JWT (OAuth2 optional)  
- **API-Dokumentation:** Swagger / OpenAPI

---

## 🔹 3. Datenbank

- **DBMS:** PostgreSQL  
- **ORM:** Prisma   
- **Erweiterungstabellen/Felder:**  
  - `organization_id` für Multi-Tenant  
  - `ocr_status` für Textract-Integration  
  - `billing_status` für Zahlungsstatus

---

##  🔹 4. Prisma-Version

Aktuell verwendet: `v6.19.0`

- Stabiler Migrationsmechanismus
- Kompatibel mit PostgreSQL
- Unterstützt Prisma Studio und Client
- Erweiterbar für zukünftige Datenbanktypen

---

## 🔹 5. Cloud & Infrastruktur

- **Cloud Provider:** AWS  
- **Infrastructure as Code:** Terraform  
- **OCR:** AWS Textract (später evtl. spaCy)  
- **Reminder-Engine:** AWS Lambda + EventBridge  
- **Benachrichtigung:** AWS SNS (E-Mail/SMS)

---

## 🔹 6. CI/CD & DevOps

- **CI/CD:** GitHub Actions  
- **Testing:**  
  - Frontend: Jest  
  - Backend: Supertest  
- **Deployment:** Terraform + GitHub Actions  
- **Environments:** `dev`, `prod`  
- **Secrets-Management:** GitHub Secrets oder AWS Parameter Store

---

## 🔹 7. Erweiterungspunkte (vorbereitet)

- Mobile App: React Native  
- Exportfunktion: PDFKit, csv-writer  
- Zahlungsabwicklung: Stripe / PayPal SDK  
- Rollen & Rechte: RBAC-Modell in DB/API  
- API-Zugang: OAuth2, API Keys, Rate Limits  
- White-Labeling: Mandantenfähige DB + Branding