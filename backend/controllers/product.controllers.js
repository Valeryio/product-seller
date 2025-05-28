
const Product = require("../models/product.model");
const services = require("../services/product.services");
const responseHandlers = require("../utils/response.helper");


const createProduct = (req, res) => {

};

/**
 * @function getAllProducts
 * @description fetch all the products from the database
 * @param {*} req 
 * @param {*} res 
 * @returns - the list of all the products in the db
 */
const getAllProducts = (req, res) => {

	try {
		const products = services.findAll();
		return responseHandlers.successResponse(
			res,
			"Card retrieved successfully",
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


const getProduct = (req, res) => {

};

const updateProduct = (req, res) => {

};

const deleteProduct = (req, res) => {
	
};


module.exports = {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct};