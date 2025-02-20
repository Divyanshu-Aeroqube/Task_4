
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Villas from "./Pages/Villas";
import Services from "./Pages/Services";
import Partner from "./Pages/Partner";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import DetailedVillas from "./Pages/DetailedVila";

const App = () => {
  return (
    <div  >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/villa/:id" element={<DetailedVillas />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;