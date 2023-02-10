
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Form from './Components/Form';
import Footer from './Components/Footer';

//This project is about IT Company & about their service.
//Different component is created for each section
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Service/>
     <Blog/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
