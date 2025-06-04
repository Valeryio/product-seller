

const mongoose = require("mongoose");

const productVariantSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	images: {
		type: [String],
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		default: 0,
		required: true,
	},
	weight: {
		type: Number,
	}
}, {timestamps: true});

const productSchema = mongoose.Schema({
		name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	isPublished: {
		type: Boolean,
		default: false
	},
	variants: {
		type: [productVariantSchema]
	}

}, {timestamps: true});


const Product = mongoose.model("Product", productSchema);
module.exports = Product;