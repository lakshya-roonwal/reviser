import { Router } from "express";
import { incomdingMessage } from "../controllers/webhook";
const router = Router();


router.post('/incoming-message', incomdingMessage)


export default router;