import Annoucement from "./components/Annoucement";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Slider from "./components/Slider";


const App = () => {
  return <div>
  <Annoucement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
  </div>;
};

export default App;
