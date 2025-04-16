import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Review } from "../entities/Review";

class ReviewController {
  private reviewRepository = AppDataSource.getRepository(Review);

  create = async (req: Request, res: Response) => {
    try {
      let { productId, name, email, feedback, experience, recommend } =
        req.body;

      if (
        !productId ||
        !name ||
        !email ||
        !feedback ||
        !experience ||
        !recommend
      ) {
        res.status(400).json({ message: "Invalid body" });
        return;
      }

      const review = this.reviewRepository.create({
        product_id: productId,
        name: name,
        email: email,
        feedback: feedback,
        experience: experience,
        recommend: recommend,
      });

      const savedReview = await this.reviewRepository.save(review);
      res.status(201).json(savedReview);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const reviews = await this.reviewRepository.find();
      res.status(200).json(reviews);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const review = await this.reviewRepository.findOne({
        where: { id: Number(id) },
      });
  
      if (!review) {
        res.status(404).json({ message: "Review not found" });
        return;
      }
  
      res.status(200).json(review);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  };
}

export default ReviewController;
