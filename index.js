import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import clientsRoutes from "./routes/clients.js"
import path from 'path'
import { fileURLToPath } from 'url'

/* CONFIGURATION */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const corsOptions = {
    origin: [
        'http://localhost:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions))
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

/* ROUTES */
app.use("/clients",clientsRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
