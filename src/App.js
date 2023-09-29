import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;

