


import { Link, useNavigate } from "react-router";
import FormInput from "../components/ui/input";
import FormSelect from "../components/ui/select";
import FormTextarea from "../components/ui/textarea";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Button from "../components/ui/button";
import inputValidators from "../components/helpers/validators";


const AddProductForm = () => {

	const navigate = useNavigate();
	const [file, setFile] = useState("");

	/**
	 * formData - contains all the data of each input field
	 */
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		category: "",
		price: ""
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

		let user = localStorage.getItem("data");
		user = JSON.parse(user);

		const uniqSuffix = Date.now() + "-" + Math.round(Math.random())
		const formPayload = new FormData();
		formPayload.append("name", formData.name);
		formPayload.append("user_id", user.id);
		formPayload.append("description", formData.description);
		formPayload.append("category", formData.category);
		formPayload.append("price", formData.price);
	
		if (file) {
			formPayload.append("file", file);
			console.log(file)
		}

		try {
			let response = await fetch("http://localhost:8080/products/add", {
				method: "POST",
				body: formPayload,
				credentials: "include"
			});

			response = await response.json();
			console.log(response);
			navigate("/app/products");

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

			<section className=" bg-white p-[.5rem] gap-[2rem] flex " >

				<form action="" className="bg-white w-[24rem] max-h-[36rem] border-lightest-purple flex flex-col gap-[1rem] 
				px-[1.5rem] pt-[2rem] pb-[4rem] rounded-[8px] overflow-y-auto">

					<div className="  flex flex-col gap-[1rem] ">
						<div className="flex flex-col gap-[.5rem]">
							<h2 className="font-semibold text-[32px]">
								Ajouter un produit
							</h2>
							<p className=" text-[15px] font-medium">
								Enregistrez les différentes informations relatives à votre produit
								et passez à la suite !
							</p>
						</div>

						<FormInput inputType="text" label="Nom" required={true} name="name"
						onChange={handleChange} value={formData.name} extralabel="" />
						
						<FormInput inputType="text" label="Description" required={true} name="description"
						onChange={handleChange} value={formData.description} extralabel="" />

						<FormInput inputType="number" label="Prix du produit" required={true} name="price"
						onChange={handleChange} value={formData.price} extralabel="" />
						
						<FormSelect label={"Quel est la catégorie du produit ?"} name="category" 
						formData={formData} placeholder="Selectionnez une catégorie" 
						onChange={handleSelect} required={true} filepath="../../categories.json" />

						<div className="flex flex-col gap-[.25rem]">
							<div className="flex justify-between">
								<label htmlFor="file" className="text-input font-medium" >
									Ajouter une image de votre produit
									<span className="text-primary-red"> * </span>
								</label>
							</div>

							<div className={`flex border rounded-[.25rem] px-[.8rem] py-[.5rem]`}>

							<input type="file" name="imgFile" onChange={handleImgChange} id="file"
							className="cursor-pointer file:mr-5 file:py-1 file:px-3 file:border-[1px]
  						file:text-xs file:font-medium file:bg-stone-50 hover:file:cursor-pointer
						hover:file:bg-blue-50 hover:file:text-primary-purple file:rounded-sm"/>
							</div>
						</div>
					</div>
					<Button size="large" type="submit" onClick={handleSubmit} onSubmit={handleSubmit} >Enregistrer</Button>
				</form>

				<div className="flex flex-col items-center gap-[1rem] p-[2rem]" >

					<h2 className="text-[1rem]" >
						Image Produit
					</h2>

					<picture  className="border p-[2rem] w-[650px] h-[450px] rounded-9x border-lightest-purple ">
						<img src={
							file.name ?
							URL.createObjectURL(file)
						:
						"https://placehold.co/600x400"
						} alt="" className="object-cover w-full h-full" />
					</picture>
				</div>
				
				


			</section>
		</>
	)


};

export default AddProductForm;