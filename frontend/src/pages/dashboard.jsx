

import Header from "../components/header";
import { Link } from "react-router";
import Sidebar from "../components/sidebar";
import LogedHome from "./logedHome";
import Button from "../components/ui/button";
import AddProduct from "./addProduct";
import FieldInfoButton from "../components/ui/fieldInfoButton";

const Dashboard = () => {
	return (
		<>
			<div className="flex h-full border-red  " >

				<Sidebar />
				
				<div className="w-full h-full overflow-auto">
					<Header type="secondary" />

					{/* <LogedHome /> */}
					<AddProduct />

				</div>
			</div>
		</>
	)
};

export default Dashboard;