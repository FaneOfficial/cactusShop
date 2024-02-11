const uuid = require("uuid");
const { Product } = require("../models/models");
const ApiError = require("../error/ApiError");
const path = require("path");

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({ name, price, img: fileName });

      return res.json(product);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let products = await Product.findAll();
    return res.json(products)
  }

  async getOne(req, res) {}
}

module.exports = new ProductController();
