import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


import Footer from "./components/Footer";
import ContextProvider from "./class";

function App() {
  return (
    <>
    {/* <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Hero />} />
       
      </Routes>
      <Footer/>
    </Router> */}
    
    <ContextProvider/>
    
    </>
  );
}

export default App;