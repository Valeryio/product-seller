

const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");
const multer = require("multer");

// Using multer to set up the storage of the uploaded image
// while adding a new product
let uniqSuffix;
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		uniqSuffix = Date.now() + "-" + Math.round(Math.random());
		uniqSuffix = uniqSuffix + "-" + file.originalname;
		cb(null, uniqSuffix);
	}
});
const upload = multer({ storage });


router.get("/", productControllers.getAllProducts);

router.get("/user/:id", productControllers.getUsersAllProducts);

router.get("/:id", productControllers.getProduct);

router.post("/add", upload.single("file"), (req, res, next) => {
	req.body.image = uniqSuffix;
	console.log(req.body);

	next();
}, productControllers.addProduct);

router.put("/:id", productControllers.updateProduct);

router.delete("/:id", productControllers.removeProduct);


module.exports = router;