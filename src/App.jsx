import "./App.css";
import { Header, Footer } from "./components";
import { Home, ProductsPage, Product } from "./screens";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
