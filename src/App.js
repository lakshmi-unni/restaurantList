
import './App.css';
import Navbarcomponent from './Components/Navbarcomponent';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import RestaurantDetails from './Components/RestaurantDetails';





function App() {
  return (
    <Router>
        <Navbarcomponent/>
        <main className='py-3'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
            </Routes>

        </main>

        <Footer/>
    </Router>
  );
}

export default App;
