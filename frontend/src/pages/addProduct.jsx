

import { Link, useNavigate } from "react-router";
import FormInput from "../components/ui/input";
import FormSelect from "../components/ui/select";
import FormTextarea from "../components/ui/textarea";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Button from "../components/ui/button";
import inputValidators from "../components/helpers/validators";


const AddProduct = () => {


	const navigate = useNavigate();
	const [file, setFile] = useState("");

	/**
	 * formData - contains all the data of each input field
	 */
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		category: ""
	});


	/**
	 * @function handleChange
	 * @description - Update formData, validate input changes and update
	 * 							error messages
	 * @param {*} e - event object of javascript
	 */
	const handleChange = (e) => {
		const {name, value} = e.target;

		// const inputValidator = inputValidators.find((validator) => 
		// 	validator.type === e.target.name);

			setFormData({
			...formData,
			[name]: value
		});

	};

	
	const handleSelect = (e) => {
		
		const {name, value} = e.target;
		console.log(name, value);
				setFormData({
				...formData,
			[name]: value
		});
		console.log("This is the select formData : ", formData);
	}

	/**
	 * @function handleSubmit
	 * @description - POST the form by calling the backend API
	 * @param {*} e 
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		const uniqSuffix = Date.now() + "-" + Math.round(Math.random())
		const formPayload = new FormData();
		formPayload.append("name", formData.name);
		formPayload.append("user_id", "66372e6e26b87c8695f55f30");
		formPayload.append("description", formData.description);
		formPayload.append("category", formData.category);
	
		if (file) {
			formPayload.append("file", file);
		}

		for (const [key, value] of formPayload.entries()) {
			console.log(`${key}: ${value}`);
		}

		console.log("This is the formPayload : ", JSON.stringify(formPayload));

		try {
			let response = await fetch("http://localhost:8080/products/add", {
				method: "POST",
				body: formPayload,
				credentials: "include"
			});

			const token = response.headers["token"];
			console.log(response.headers["Authorization"]);

			response = await response.json();
			console.log(response);

			// navigate("/dashboard");

		} catch (err) {

			// console.error(`Error while getting the user : ${err}`);
			return err;
		}
	}


	const handleImgChange = (event) => {

		console.log(event.target.files[0]);
		setFile(event.target.files[0]);
	};

	return (
		<>

			<section className=" p-[2rem] gap-[2rem] flex border " >

				<form action="" className="w-full border border-lightest-purple flex flex-col gap-[1rem] 
				 p-[1rem] rounded-[8px] ">

					<div className=" max-w-[24rem] flex flex-col gap-[1rem] px-[2rem] p-[1rem] rounded-[8px]">
						<div className="flex flex-col gap-[.5rem]">
							<h2 className="font-semibold text-[32px]">
								Ajouter un produit
							</h2>
							<p className=" text-[15px] font-medium">
								Ajouter un nouveau produit
							</p>
						</div>

						<FormInput inputType="text" label="Nom" required={true} name="name"
						onChange={handleChange} value={formData.name} extralabel="" />
						
						{ <FormInput inputType="text" label="Description" required={true} name="description"
						onChange={handleChange} value={formData.description} extralabel="" /> }
						
						<FormSelect label={"Quel est la catégorie du produit ?"} name="category" 
						formData={formData} placeholder="Selectionnez une catégorie" 
						onChange={handleSelect} required={true} filepath="./categories.json" />

						<input type="file" name="imgFile" onChange={handleImgChange} 
						className="border"/>

					</div>
					
					<Button size="large" type="submit" onClick={handleSubmit} onSubmit={handleSubmit} >Enregistrer</Button>

				</form>

			</section>
		</>
	)


};

export default AddProduct;