import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import Header from './components/header';
import Footer from "./components/footer";
import Register from './pages/public/register';
import Login from './pages/public/login';
import Home from './pages/public/home';
import Profil from './pages/profil';
import About from './pages/public/about';
import Contact from './pages/public/contact';
import Dashboard from './pages/dashboard';
import SuccessfulRegistration from './pages/public/successfulRegistration';
import SuccessfulResetPassword from './pages/public/successfulResetPassword';
import ProductPage from './pages/productPage';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/profil' element={<Profil />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
            <Route path='/dashboard/products' element={<ProductPage />} ></Route>
            <Route path='/register/success' element={<SuccessfulRegistration />} />
            <Route path='/ra' element={<SuccessfulResetPassword />} ></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
