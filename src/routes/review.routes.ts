import { Router } from "express";
import ReviewController from "../controllers/ReviewController";

const reviewRouter = Router();
const reviewController = new ReviewController();

reviewRouter.post("/", reviewController.create);
reviewRouter.get("/", reviewController.findAll);

export default reviewRouter;
