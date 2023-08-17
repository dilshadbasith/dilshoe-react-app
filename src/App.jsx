import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {Routes,Route} from 'react-router-dom';
import Productmen from './Components/productsFolder/Productmen';
import { useState } from 'react';
import { myContext } from './Components/Context';
import { productsdata } from './Components/productsFolder/Productdetails';
import Productwomen from './Components/productsFolder/Productwomen';
import Browseproducts from './Components/productsFolder/Browseproducts';
import Cart from './Components/Cart';
import { Dummy } from './Components/assets/Dummy';
import { admindummy } from './Components/assets/Admindummy';
import AdminLogin from './Components/adminSide/AdminLogin';
import Adminhome from './Components/adminSide/Adminhome';
import AdminProducts from './Components/adminSide/AdminProducts';
import AdminMen from './Components/adminSide/AdminMen';
import AdminWomen from './Components/adminSide/AdminWomen';
import AdminUsersList from './Components/adminSide/AdminUsersList';
import ViewUsers from './Components/adminSide/ViewUsers';
import AddProducts from './Components/adminSide/AddProducts';
import AdminViewProduct from './Components/adminSide/AdminViewProduct';
import Payment from './Components/Payment';

function App() {
  const [product,setProduct]=useState(productsdata)
  const [cart,setCart]=useState([])
  const[userdata,setUserdata]=useState(Dummy)
  const[loggedin,setLoggedin]=useState(false)
  const [search,setSearch]=useState('')
  const [admindata,setAdmindata]=useState(admindummy)
  

  return (
    <>
<myContext.Provider value={{product,setProduct,cart,setCart,userdata,setUserdata,loggedin,setLoggedin,search,setSearch,admindata,setAdmindata}}>
    <Routes>
    {/* User section */}
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/productmen' element={<Productmen/>}/>
    <Route path='/productwomen' element={<Productwomen/>}/>
    <Route path='/browseproducts/:id' element={<Browseproducts/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/payment/:id' element={<Payment/>}/>

    {/* Admin section */}
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/adminhome' element={<Adminhome/>}/>
    <Route path='/adminproducts' element={<AdminProducts/>}/>
    <Route path='/adminmen' element={<AdminMen/>}/>
    <Route path='/adminwomen' element={<AdminWomen/>}/>
    <Route path='/adminuserslist' element={<AdminUsersList/>}/>
    <Route path='/viewusers/:id' element={<ViewUsers/>}/>
    <Route path='/addproducts' element={<AddProducts/>}/>
    <Route path='/adminviewproducts/:id' element={<AdminViewProduct/>}/>

    </Routes>
    </myContext.Provider>
    </>
  );
}

export default App;
