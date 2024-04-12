import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import clientsRoutes from "./routes/clients.js"
import path from 'path'
import { fileURLToPath } from 'url'
import { createPost } from './controllers/posts.js'

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
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})
app.post('/posts',upload.single('picture'), createPost)

/* ROUTES */
app.use("/clients",clientsRoutes)
app.get('',(req,res) => {
    res.status(200).json({message: 'test'})
})
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
