import Button from "../../components/ui/button";
import { useEffect, useState } from "react";
import Card from "../../components/card";

const LogedHome = () => {

	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		
		let user = localStorage.getItem("data");
		user = JSON.parse(user);
			const fetchProducts = async () => {
			
			let allData = await fetch(`http://${import.meta.env.VITE_BACKEND_API}/products/user/${user.id}`);
			allData = await allData.json();
			// console.log(allData.data);

			setAllProducts(allData.data);
			// console.log(allProducts)
		};

		fetchProducts();

	}, [])

	return (
		<>

			<div className=" h-[32rem]  flex flex-wrap p-[1rem] gap-[2rem]  ">

				<div className=" border rounded-[1rem] bg-white border-medium-purple flex 
				flex-col justify-center items-center gap-[1rem] p-[1.5rem] h-[12rem] w-[20rem]">
					
						<h2 className="text-[1.2rem] text-dark-purple ">
							Nombre total de produits
						</h2>
					<div className="flex justify-center gap-[2rem] ">

						<img src="../icons/package-search.svg" alt="" className="w-[3rem]" />
						<p className=" text-[4rem] text-primary-purple w-fit font-semibold">
							{ allProducts.length.toString().length < 2 ? 0 : ""}
							{ allProducts.length }
						</p>
					</div>
				</div>

				<div className=" border rounded-[1rem] bg-white border-medium-purple flex 
				flex-col justify-center items-center gap-[1rem] p-[1.5rem] h-[12rem] w-[20rem]">
					
						<h2 className="text-[1.2rem] text-dark-purple ">
							Nombre total de ventes
						</h2>
					<div className="flex justify-center gap-[2rem] ">

						<img src="../icons/hand-coins.svg" alt="" className="w-[3rem]" />
						<p className=" text-[4rem] text-primary-purple w-fit font-semibold">
							00
						</p>
					</div>
				</div>

					<div className=" border rounded-[1rem] bg-white border-medium-purple flex 
				flex-col justify-center items-center gap-[1rem] p-[1.5rem] h-[12rem] w-[20rem]">
					
						<h2 className="text-[1.2rem] text-dark-purple ">
							Nombre de vues produits total
						</h2>
					<div className="flex justify-center gap-[2rem] ">

						<img src="../icons/eye-stat.svg" alt="" className="w-[3rem]" />
						<p className=" text-[4rem] text-primary-purple w-fit font-semibold">
							00
						</p>
					</div>
				</div>

				<div className=" border rounded-[1rem] bg-white border-medium-purple flex 
				flex-col justify-center items-center gap-[1rem] p-[1.5rem] h-[12rem] w-[20rem]">
					
						<h2 className="text-[1.2rem] text-dark-purple ">
							Nombre total de clients
						</h2>
					<div className="flex justify-center gap-[2rem] ">

						<img src="../icons/users-round.svg" alt="" className="w-[3rem]" />
						<p className=" text-[4rem] text-primary-purple w-fit font-semibold">
							00
						</p>
					</div>
				</div>

			</div>
			


		</>
	)
};

export default LogedHome;