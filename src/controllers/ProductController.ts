import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

class ProductController {

  private productRepository = AppDataSource.getRepository(Product);

  create = async (req: Request, res: Response) => {
    try {
      let { name, price, description, url_image, category, brand } = req.body;

      if (!name || !price || !description || !url_image || !category || !brand) {
        res.status(400).json({ message: "Invalid body" });
        return;
      }

      const product = this.productRepository.create({
        name: name,
        price: price,
        description: description,
        url_image: url_image,
        category: category,
        brand: brand,
      });

      const savedProduct = await this.productRepository.save(product);
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const products = await this.productRepository.find() 
        res.status(200).json(products);
        return
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  }

export default ProductController;
