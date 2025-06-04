
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { useEffect, useState } from "react";


const PrivateLayout = () => {

	const [data, setData] = useState({});
	const navigate = useNavigate();
	const isConnected = localStorage.getItem("data");

	useEffect(() => {
		if (!isConnected) {
			navigate("/home");
		} else {
		setData(JSON.parse(isConnected));
		navigate("/app/home");
		}
	}, []);

	return (
		<>
			<div className="flex h-full " >

				<Sidebar />
				
				<div className="w-full h-full bg-lightest-purple overflow overflow-hidden">
					<Header type="logged" data={data} />			
					<Outlet data={data} />
				</div>
			</div>
		</>
	)
};

export default PrivateLayout;