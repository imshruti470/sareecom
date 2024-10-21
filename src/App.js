import CardGridWithFilter from "./components/cardgrid";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Login from "./components/login";
import Navbar from "./components/navbar";


function App() {
 
  return (
    <>
    <Navbar/>
    <Carousel />
    <CardGridWithFilter/>
    <Footer/>
    </>

  );
}

export default App;