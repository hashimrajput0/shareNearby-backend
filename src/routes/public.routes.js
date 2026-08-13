import express from "express"
import { getPublicData, createPublicData } from "../Controller/public.controller.js"

const router = express.Router()

router.post("/get", getPublicData)
router.post("/create", createPublicData)


export default router