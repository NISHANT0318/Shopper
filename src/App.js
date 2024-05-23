
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from '../src/Components/Assets/Assets/banner_mens.png'
import women_banner from '../src/Components/Assets/Assets/banner_women.png'
import kids_banner from '../src/Components/Assets/Assets/banner_kids.png'
import Login from './Pages/Login';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './Context/userContext';



axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <div >
       <UserContextProvider>
      <BrowserRouter>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:3000}} />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category='men' />} />
        <Route path='/womens' element={<ShopCategory  banner= {women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
        <Route path='/product' element={<Product/>}>
           <Route path= ':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/signup' element={<Login/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
