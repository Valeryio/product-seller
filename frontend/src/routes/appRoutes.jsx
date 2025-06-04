
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "../pages/public/home";
import Contact from "../pages/public/contact";
import About from "../pages/public/about";
import Login from "../pages/public/login";
import LogedHome from "../pages/user/logedHome";
import ProductPage from "../pages/user/productPage";
import Register from "../pages/public/register";
import PublicLayout from "../layout/PublicLayout";
import PrivateLayout from "../layout/PrivateLayout";
import IntegrationPage from "../pages/user/integration";
import SuccessfulRegistration from "../pages/public/successfulRegistration";
import AddProductForm from "../components/addProductForm";


function App() {

	return (
		<BrowserRouter>
			<Routes>
				{/* Public routes */}
				<Route path="/" element={<PublicLayout />} >
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="register/success" element={<SuccessfulRegistration />} />
				</Route>

				{/* Private routes */}
				<Route path="/app" element={<PrivateLayout />} >
					<Route path="home" element={<LogedHome />} />
					{/* <Route path="/profile" element={<Profile />} /> */}
					<Route path="products" element={<ProductPage />} />
					<Route path="payment" element={<IntegrationPage />} />
					<Route path="products/add" element={<AddProductForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default App;