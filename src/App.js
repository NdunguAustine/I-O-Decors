
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/furniture' element={<ShopCategory banner={'https://ik.imagekit.io/Jonnes/INO%20Decors/fu_banner.png?updatedAt=1711951647922'} category="furniture"/>}/>
        <Route path='/carpets&Curtains' element={<ShopCategory banner={'https://ik.imagekit.io/Jonnes/INO%20Decors/curtain_banner.png?updatedAt=1711952300343'} category="carpets&Curtains"/>}/>
        <Route path='/artpaints' element={<ShopCategory banner={'https://ik.imagekit.io/Jonnes/INO%20Decors/art_bannerss.png?updatedAt=1711952633709'} category="artpaints"/>}/>
        <Route path='/flowers&plants' element={<ShopCategory banner={'https://ik.imagekit.io/Jonnes/INO%20Decors/flowers_banner.png?updatedAt=1711978696865'} category="flowers&plants"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
