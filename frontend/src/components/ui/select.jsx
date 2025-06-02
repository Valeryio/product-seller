
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";


let allData;

const FormSelect = ({
	name,
	label,
	formData,
	onChange,
	validated,
	SelectType,
	errorMessage,
	required=false,
	placeholder="Selectionnez un pays",
	filepath = "./countries.json"
}) => {

	const [allData, setAllData] = useState([]);

	useEffect( () => {

		const fetchData = async () => {
			try {
				let data = await fetch(filepath);
				data = await data.json();

				setAllData(data)

				console.log("all data : ", allData);
			} catch (err) {
				console.log(err);
			}
		}

		fetchData();

	}, [filepath])

	let borderStyle = "border-gray-300";
	// const [updatedType, setUpdatedType] = useState(SelectType);


	// if (validated === true) {
	// 	borderStyle = "border-green-400 hover:outline outline-green-400";
	// } else if (validated === false) {
	// 	borderStyle = "hover:border-red-400 hover:outline hover:outline-red-400";
	// } else {
	// 	borderStyle = "border-gray-800";
	// }

	return (
		<div className="flex flex-col gap-[.25rem]">
			<div className="flex justify-between">
				<label htmlFor={name} className="text-input font-medium" >
					{label}
					{required && <span className="text-primary-red"> * </span>}
				</label>
			</div>

			<div className={`flex border rounded-[.25rem] px-[.8rem] py-[.5rem]`}>

				<select name={name} id={name} onChange={onChange} value={formData.value}
				className={`outline-none  w-full`} >
					<option >{placeholder}</option>
					{
						allData.map(dataObj => (
							<option value={dataObj.label} key={dataObj.value}>
								{dataObj.label}
							</option>
						))
					}
				</select>
			</div>

			{ validated === false && <p className="text-Select-error mt-[.5rem] text-red-400"
			>{errorMessage}</p>}
		</div>
	)
};

export default FormSelect;