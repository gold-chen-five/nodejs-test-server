import express from "express"
import { getParams, getQuery, getTest, postTest } from "../controllers/clients.js"

const router = express.Router()

router.get("/gettest", getTest)

router.get("/getquery", getQuery)

router.get("/getparams/:id", getParams)

router.get("/posttest", postTest)

export default router