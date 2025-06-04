
const product = require("../models/product.model");
const joi = require("joi");

/**
 * @function validateProduct
 * @description - Validate the product object
 * @param {*} productObj
 * @returns - An error if the validation failed, or the id of
 * the product created 
 */


const variantValidationSchema = joi.object({
	name: joi.string().required(),
	images: joi.array().items(joi.string()),
	price: joi.number().required(),
	color: joi.string().required(),
	quantity: joi.number().required(),
	weight: joi.number()
});

const productValidationSchema = joi.object({
	name: joi.string().required(),
	image: joi.string(),
	price: joi.number().required(),
	description: joi.string().required(),
	category: joi.string().required(),
	user_id: joi.string().required(),
	isPublished: joi.boolean(),
	variants: joi.array().items(variantValidationSchema)
});

const validateProduct = (productObj) => {
	return productValidationSchema.validate(productObj);
};

module.exports = {validateProduct}