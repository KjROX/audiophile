import "./App.css";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}

export default App;
