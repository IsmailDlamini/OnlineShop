import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router();

productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

productRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404)
        throw new Error("product not found")
      }
    })
  );

  productRoute.get(
    "/:searchTerm",
    asyncHandler(async (req, res) => {
      const searchedProducts = await Product.findByName(req.params.searchTerm);
      if (searchedProducts) {
        res.json(searchedProducts);
      } else {
        res.status(404)
        throw new Error("product not found")
      }
    })
  );



export default productRoute
