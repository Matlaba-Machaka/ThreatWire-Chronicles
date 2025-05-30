import express from "express";
import authRoute from "./authRoute.js";
import userRoute from "./userRoute.js";
import postRoute from "./postRoute.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is running...");
});

router.use("/auth", authRoute); //auth/register
router.use("/users", userRoute);
router.use("/posts", postRoute);

export default router;
