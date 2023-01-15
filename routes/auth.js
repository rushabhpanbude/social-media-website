import express from "express";
import login from "../controllers/.js";

const router = express = express.Router();

router.post("/login", login);
export default router;