import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  res.json({ route: true });
});

export default router;
