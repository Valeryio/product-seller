import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({productId}) => {

	const navigate = useNavigate();
	const handleSubmit = async (e) => {

		e.preventDefault();

		try {
			let response = await fetch(`http://localhost:8080/products/${productId}`, {
				method: "DELETE",
				credentials: "include"
			});

			response = await response.json();
			console.log(response);
			navigate("/app/home");

		} catch (err) {
			return err;
		}
	}

	return (
		<form className="">
			<button className="p-[.5rem] rounded-[8px] bg-red-50
			cursor-pointer" onClick={handleSubmit}>
				<img src="./../icons/trash.svg" alt="" />
			</button>
		</form>
	)

};

export default DeleteButton;