import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
