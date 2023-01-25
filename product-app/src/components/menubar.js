import { Route } from "react-router";
import Products from './products'
import Signup from './user/signup2';
import Login from './user/login2';
import {Routes} from 'react-router-dom'
import Profile from './profile';
import Home from './home'
import ContactUs from './user/contactus';


const Routing=()=>{
    return(
    <>
    <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>

    </>
    )
}

export default Routing;