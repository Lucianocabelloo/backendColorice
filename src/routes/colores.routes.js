import { Router } from "express";
import { listarColores } from "../controllers/colores.controllers.js";

const router = Router()

router.route("/colores").get(listarColores).post().delete().put()

export default router