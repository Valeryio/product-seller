
const Product = require("../models/product.model");
const services = require("../services/product.services");
const responseHandlers = require("../utils/response.helper");
const validators = require("../services/product.validators");

/**
 * @function addProduct
 * @description Add a new product in the database
 * @param {*} req 
 * @param {*} res 
 * @returns An error, or the created Object
 */
const addProduct = (req, res) => {

	const {error, value} = validators.validateProduct(req.body);

	if (error) {
		return responseHandlers.failResponse(
			res,
			error.details[0].message
		);
	}

	const product = new Product({...value});

	product.save()
	.then((docs) => {
		console.log("New product added successfully!");
		return responseHandlers.successResponse(
			res,
			"New product added successfully",
			docs
		);
	})
	.catch((err) => {
		console.error(`Error while adding the card!`);
		return responseHandlers.errorResponse(
			res,
			err
		);
	})
};

/**
 * @function getAllProducts
 * @description fetch all the products from the database
 * @param {*} req 
 * @param {*} res 
 * @returns - the list of all the products in the db
 */
const getAllProducts = async (req, res) => {

	try {
		const products = await services.findAll();
		return responseHandlers.successResponse(
			res,
			"Products retrieved successfully",
			products
		);
	} catch (err) {
		console.error(`Error while fetching all the products : ${err.message}`);
		return responseHandlers.errorResponse(
			res,
			err,
		);
	}
};

/**
 * @function getProduct
 * @description fetch a specific product from the database
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getProduct = async (req, res) => {

	let productId = req.params.id;

	try {
		const result = await services.findById(productId);
		return responseHandlers.successResponse (
			res,
			"Product retrieved successfully",
			result
		)
	} catch (err) {
		console.error(`Error while fetching the product : ${err}`);
		return responseHandlers.errorResponse(
			res,
			err
		)
	};
};

/**
 * @function updateProduct
 * @description - Update an product object
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateProduct = async (req, res) => {

	const productId = req.params.id;
	let result;

	const {error, value} = validators.validateProduct(req.body);

	if(error) {
		console.log(error);
	}


	try {
		result = await Product.findByIdAndUpdate(productId, req.body,
			{new: true, runValidators: true}
		).lean();
	} catch (err) {
		console.error(`Error while updating the product : ${err}`);
		return responseHandlers.errorResponse(
			res,
			err
		);
	}
	
	
	console.log("APRES LA VALIDATION", result);

	if (!result) {
		return responseHandlers.failResponse(
			res,
			"Product not found",
			404
		);
	}

	console.log("The result : ", result);

	return responseHandlers.successResponse(
		res,
		"Product updated Successfully!",
		result
	);

};

/**
 * @function updateProduct
 * @description - remove an product object from the database
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const removeProduct = async (req, res) => {

	const productId = req.params.id;
	let result;

	const {error, value} = validators.validateProduct(req.body);

	try {
		result = await Product.findByIdAndDelete(productId, value,
			{new: true, runValidators: true}
		);
	} catch (err) {
		console.error(`Error while updating the product : ${err}`);
		return responseHandlers.errorResponse(
			res,
			err
		);
	}

	if (!result) {
		return responseHandlers.failResponse(
			res,
			"Product not found",
			404
		);
	}

	return responseHandlers.successResponse(
		res,
		"Product removed Successfully!",
		result
	);
};


module.exports = {addProduct, getAllProducts, getProduct, updateProduct, removeProduct};