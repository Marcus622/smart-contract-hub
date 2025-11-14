import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

// Routen importieren
import subscriptionRoutes from './routes/subscriptions'

// Umgebungsvariablen laden
dotenv.config()

// Express-App initialisieren
const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Basisroute
app.get('/', (_req, res) => {
  res.json({ message: 'Smart Contract & Subscription Hub API is running.' })
})

// API-Routen
app.use('/subscriptions', subscriptionRoutes)

// Server starten
app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`)
})