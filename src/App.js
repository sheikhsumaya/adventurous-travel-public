
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Offers from './Pages/Home/Offers/Offers';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Package from './Pages/Package/Package';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/package/:packageId' element={<Package></Package>}></Route>
          <Route path='/offers' element={<Offers></Offers>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          {/* <Route path='' element={}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
