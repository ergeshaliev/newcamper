import React from 'react'
import NavbarComponent from './components/navbar/navbar';
import CaravanComponent from './components/pages/caravan/caravan';
import TuningComponent from './components/pages/tuning/tuning';
import UsedcarComponent from './components/pages/usedcar/used';
import CampingComponent from './components/pages/camping place/camping';
import MotorComponent from './components/pages/motor/motor';
import FooterComponent from './components/footer/footer';
import CartComponent from './components/pages/cart/cart';
import VmenuComponent from './components/pages/vmenu/vmenu';
import AidalComponent from './components/pages/aidal/aidal';
import LoginComponent from './components/auth/login/login';
import RegisterComponent from './components/auth/register/register';
import { Route, Routes, useLocation } from 'react-router-dom';

const RouterComponent = () => {
      const location = useLocation();
      const Navbarhidden = location.pathname ==="/login" || location.pathname === "/register";


  return (
    <div>
      {!Navbarhidden && <NavbarComponent/>}
    <Routes> 
      <Route path="/motor" element={<MotorComponent/>}/>
      <Route path="/caravan" element={<CaravanComponent/>}/>
      <Route path="/tuning" element={<TuningComponent/>}/>
      <Route path="/usedcar" element={<UsedcarComponent/>}/>
      <Route path="/camping" element={<CampingComponent/>}/>
      <Route path="/cart" element={<CartComponent/>}/>
      <Route path="/vmenu" element={<VmenuComponent/>}/>
      <Route path="/aidal" element={<AidalComponent/>}/>
      <Route path="/login" element={<LoginComponent/>}/>
      <Route path="/register" element={<RegisterComponent/>}/>
      <Route path="/register" element={<LoginComponent/>}/>
      <Route path="/login" element={<MotorComponent/>}/>
    </Routes>
     {!Navbarhidden && <FooterComponent/>}

    </div>
  )
}

export default RouterComponent