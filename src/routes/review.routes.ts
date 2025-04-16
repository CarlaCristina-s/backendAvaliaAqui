import { Router } from "express";
import ReviewController from "../controllers/ReviewController";

const reviewRouter = Router();
const reviewController = new ReviewController();

reviewRouter.post("/", reviewController.create);
reviewRouter.get("/", reviewController.findAll);
reviewRouter.get("/:id", reviewController.findById);

export default reviewRouter;
