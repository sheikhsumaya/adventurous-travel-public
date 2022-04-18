
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Offers from './Pages/Home/Offers/Offers';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Package from './Pages/Package/Package';
import Login from './Form/Login/Login';
import Register from './Form/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequiredAuth from './Form/RequiredAuth/RequiredAuth';
import Blog from '../src/Pages/Blog/Blog'

function App() {
  return (
    <div>
      {/* Here are routes and header */}
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/package/:packageId' element={<Package></Package>}></Route>
          <Route path='/offers' element={<Offers></Offers>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
           <Route path='/checkout' element={<RequiredAuth>
            <CheckOut></CheckOut>
           </RequiredAuth>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
