

const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");

router.get("/", productControllers.getAllProducts);

router.get("/:id", productControllers.getProduct);

router.post("/add", productControllers.addProduct);

router.put("/:id", productControllers.updateProduct);

router.delete("/:id", productControllers.removeProduct);


module.exports = router;