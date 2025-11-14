# 📦 Setup-Anleitung – Smart Contract & Subscription Hub

Diese Anleitung beschreibt, wie das Projekt lokal entwickelt, die Datenbank initialisiert und die Infrastruktur mit Terraform ausgerollt wurde.

---

## 🧑‍💻 Voraussetzungen

Stelle sicher, dass folgende Tools installiert und konfiguriert sind:

- [Node.js](https://nodejs.org/) ≥ 18  
- [PostgreSQL](https://www.postgresql.org/) ≥ 14  
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) (konfiguriert mit gültigem Profil)  
- [Terraform](https://www.terraform.io/downloads) ≥ 1.5  
- GitHub Account mit aktiviertem Zugriff auf GitHub Actions

---

## 🧱 Lokales Setup

```bash
# Repository klonen
git clone https://github.com/Marcus622/smart-contract-hub.git
cd smart-contract-hub

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen vorbereiten
cp .env.example .env

# Lokalen Dev-Server starten
npm run dev

🗄️ Datenbankmigration (Prisma)
# Erste Migration ausführen
npx prisma migrate dev --name init

# Prisma Studio öffnen (optional)
npx prisma studio



☁️ Infrastruktur-Deployment (Terraform)
# In Terraform-Verzeichnis wechseln
cd infra/terraform

# Initialisieren
terraform init

# Ressourcen ausrollen
terraform apply



🔐 Umgebungsvariablen (.env)
Beispielhafte Variablen in .env.example:
DATABASE_URL="postgresql://user:password@localhost:5432/smart_contract_hub"
JWT_SECRET="your-secret-key"
AWS_REGION="eu-central-1"
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"



🧪 Tests ausführen
# Frontend-Tests
npm run test:frontend

# Backend-Tests
npm run test:backend



📌 Hinweise
- Für produktive Deployments empfiehlt sich ein separates AWS-Projekt oder IAM-Setup.
- Secrets für GitHub Actions sollten über die GitHub-Weboberfläche hinterlegt werden.
- Die Reminder-Engine wird über AWS Lambda + EventBridge konfiguriert (siehe infra/terraform/reminder.tf).

Diese Datei kann jederzeit erweitert werden, z. B. um Docker, Preview-Deployments oder CI/CD-Workflows.


