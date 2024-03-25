import { Router } from "express";
import { crearColor, editarColor, eliminarColor, listarColor, listarColores } from "../controllers/colores.controllers.js";

const router = Router()

router.route("/colores").get(listarColores).post(crearColor)
router.route("/colores/:id").get(listarColor).delete(eliminarColor).put(editarColor)

export default router