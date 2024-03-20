import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Products from './Components/Pages/Products';
import Cart from './Components/Pages/Cart';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Home from './Components/Pages/Home';
import SingleProduct from './Components/Pages/SingleProduct';
import Error from './Components/Pages/Error';
import ScrollTop from './Components/Functionalities/ScrollTop';
import { AnimatePresence } from 'framer-motion';


function App() {

  return (
    <div className="App">
     <BrowserRouter>
     <ScrollTop/>
          <Navbar/>
     <AnimatePresence>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/products/:productId' element={<SingleProduct/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
              </AnimatePresence>
          <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
