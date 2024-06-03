import express from "express";
import send_reservation from "../controllers/reservationControll.js";

const router = express.Router();

router.post("/send", send_reservation);

export default router;