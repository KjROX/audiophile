import "./App.css";
import BrandPromotion from "./components/BrandPromotion";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import LandingPageProducts from "./components/LandingPageProducts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <LandingPageProducts />
      <BrandPromotion />
      <Footer />
    </div>
  );
}

export default App;
