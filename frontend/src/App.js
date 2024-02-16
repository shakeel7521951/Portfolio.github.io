import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login_Signup/Login';
import Signup from './Components/Login_Signup/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
