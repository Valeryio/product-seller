
import Button from "./ui/button";
import DeleteButton from "./ui/deleteButton";

const Card = (
	{
		key,
		source,
		name,
		price,
		productId,
		description
	}
) => {
	return (
		<div className="flex h-[316px] flex-col gap-[1rem] p-[1rem] hover:shadow-lg border
		border-medium-purple rounded-[8px] bg-white">
			<picture className="w-full max-w-[16rem] overflow overflow-hidden">

			<img src={`http://localhost:8080/uploads/${source}`} alt="" 
			 />
			</picture>
			<div className=" flex flex-col gap-[.5rem]">

				<div className="flex justify-between items-center" >
					<h3 className="text-[1rem] font-semibold">
						{name}
					</h3>
					<p className="">
							<span className="text- ml-1 text-primary-green font-semibold
							bg-green-200 px-[1rem] py-1.5 rounded-[4px] " >
								{price} Fcfa
							</span>
					</p>
				</div>

				<p className="text-[14px] max-w-[15rem]">
					{description}
				</p>

				<div className="flex py-[.5rem] justify-between items-center" >
					{/* <Button styleType="secondary" >Options</Button> */}
					<DeleteButton productId={productId} />
					<Button >Publier</Button>
				</div>

			</div>
		</div>
	)
};

export default Card;