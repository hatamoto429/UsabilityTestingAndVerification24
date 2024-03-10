import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/about";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Button from "./components/Button/Button";
// nested components
import Info from "./components/About/info/info";
import Offers from "./components/About/offers/Offers";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    //Make HTTP call
    setTimeout(() => {
      setLogin(!loggedIn);
      setLoading(false);
    }, 2000);
  };

  return (
    <div data-testid="App" className="App">
      <nav data-testid="main_nav">
        <h1 data-testid="brandName">The Clothing Company</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <Button
          value={loggedIn}
          handleLogin={handleLogin}
          isLoading={isLoading}
          displayTrue={"Logout"}
          displayFalse={"Login"}
        />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products isUserLoggedIn={loggedIn} isLoading={isLoading} />}
        />
        <Route path="/about" element={<About />}>
          <Route path="info" element={<Info />} />
          <Route path="offers" element={<Offers />} />
        </Route>
        {loggedIn && (
          <Route path="/products/:id/:type" element={<ProductDetails />} />
        )}
        <Route path="*" element={<h4 className="error">Route Not Found</h4>} />
      </Routes>
    </div>
  );
};

export default App;
