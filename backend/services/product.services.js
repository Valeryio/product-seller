

const Product = require("../models/product.model");


const findById = async (productId) => {

	try {
		const result = await Product.findOne({_id: productId});
		console.log("The product found : ", result);
		return result;
	} catch (err) {
		throw new Error(err.message);
	}
};

const findAll = async (userId) => {
	try {
		
		if (userId) {
			const result = await Product.find({user_id: userId});
			console.log("The doc :", result);
			return result;
		} else {
			const result = await Product.find();
			console.log("The docs : ", result);
			return result;
		}
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = {findAll, findById};