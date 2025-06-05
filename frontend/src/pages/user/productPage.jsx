import Button from "../../components/ui/button";
import { useEffect, useState } from "react";
import Card from "../../components/card";
import { Link } from "react-router";

const ProductPage = ({data}) => {

	const [allProducts, setAllProducts] = useState([]);
	const [addProductPopup, setAddProductPopup] = useState(false);

	useEffect(() => {
		let user = localStorage.getItem("data");
		user = JSON.parse(user);

		console.log(user);

		const fetchProducts = async () => {
			let allData = await fetch(`https://${import.meta.env.VITE_BACKEND_API}:${import.meta.env.VITE_PORT}/products/user/${user.id}`);
			allData = await allData.json();

			setAllProducts(allData.data);
		};

		fetchProducts();

	}, [])

	return (
		<div className="" >

			<div className=" flex bg-white justify-between items-center px-[1rem] py-[.5rem]">
				<p className="text-p text-medium-purple">
						Total :
					<span className=" text-dark-purple ml-1">
						{allProducts.length || 0} produits
					</span>
				</p>

				<Link to="/app/products/add">
					<Button addIcon={true} imgSrc={"./icons/list-plus.svg"} >Ajouter un nouveau produit</Button>
				</Link>
			</div>

			<div className=" h-[34rem] bg-lightest-purple overflow overflow-auto">
				<div className="flex flex-wrap p-[2rem] just gap-[4rem] ">

					{
						allProducts.map( dataObj => (
							<div key={dataObj._id}> 
								<Card source={dataObj.image} productId={dataObj._id} name={dataObj.name} 
								description={dataObj.description} price={dataObj.price} />
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
};

export default ProductPage;