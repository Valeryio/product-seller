

import Header from "../../components/header";
import { Link } from "react-router";
import Sidebar from "../../components/sidebar";
import LogedHome from "../logedHome";
import ProductPage from "./productPage";

const Dashboard = () => {
	return (
		<>
			<div className="flex h-full border-red  " >

				<Sidebar />
				
				<div className="w-full h-full overflow-auto">
					<Header type="secondary" />

					{/* <LogedHome /> */}
					{<ProductPage />}
					

				</div>
			</div>
		</>
	)
};

export default Dashboard;