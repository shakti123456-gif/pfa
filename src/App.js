import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Landing from './Pages/Landing/Landing';
import Courses from './Pages/Courses/Courses';
import Facilities from "./Pages/Facilities/Facilities";
import Gallary from "./Pages/Gallary/Gallary";
import Contact from "./Pages/Contact/Contact";
import Infrastructure from "./Pages/Infrastructure/Infrastructure";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HowToApply from "./Pages/HowToApply/HowToApply";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path="/facilities" element={<Facilities />}></Route>
          <Route path="/galary" element={<Gallary />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/infrastructure" element={<Infrastructure />}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/how-to-apply" element={<HowToApply/>}></Route>
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;