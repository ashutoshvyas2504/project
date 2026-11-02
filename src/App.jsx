
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />
      </Routes>
    </>
  );
}

export default App;
