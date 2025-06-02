
import { Link } from "react-router";

const Sidebar = () => {

	return (
		<aside className="flex flex-col px-[1rem] py-[2rem] justify-between border min-w-[10rem] w-[14rem] h-full" >

			<div className="flex flex-col gap-[2rem]" >
				<button className="cursor-pointer" >
					<img src="./icons/menu.svg" alt="menu icon" />
				</button>

				<div className=" ">
					<ul className=" flex flex-col gap-[1rem]">
						<li className="">
							<Link className="flex gap-[1rem]">
								<img src="./icons/home.svg" alt="" />
								<p className=" hover:font-bold hover:text-primary-purple" >
									Accueil
								</p>
							</Link>
						</li>
						{/* <li className="">
							<Link className="flex gap-[1rem]">
								<img src="./icons/pie-chart.svg" alt="" />
								<p>Dashboard</p>
							</Link>
						</li> */}
						<li className="">
							<Link className="flex gap-[1rem]">
								<img src="./icons/layer.svg" alt="" />
								<p className=" hover:font-bold hover:text-primary-purple" >
									Produits
								</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>


			<div >
				<ul className=" flex flex-col gap-[1rem] ">
					<li className="">
						<Link className="flex gap-[1rem]">
							<img src="./icons/help-circle.svg" alt="" />
							<p className=" hover:font-bold hover:text-primary-purple" >
								Support
							</p>
						</Link>
					</li>
					<li className="">
						<Link className="flex gap-[1rem]">
							<img src="./icons/settings.svg" alt="" />
							<p className=" hover:font-bold hover:text-primary-purple" >
								Paramètres
							</p>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	)
};

export default Sidebar;