import "./Products.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Products = ({ isUserLoggedIn, isLoading }) => {
  const [products, setProducts] = useState();
  //Component did mount
  useEffect(() => {
    console.log("Component Mounted");
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  if (isLoading) {
    return <Loader component={"Products"} />;
  }
  if (isUserLoggedIn) {
    return (
      <div className="content">
        <h3>Hoodies</h3>
        <div className="products">
          {products &&
            products.Hoodies.length >= 1 &&
            products.Hoodies.map((p) => (
              <div key={p.id}>
                <Link to={`/products/${p.id}/Hoody`}>
                  <img alt="product" src={p.image} />
                </Link>
                <p style={{ textAlign: "center" }}>{p.name}</p>
              </div>
            ))}
        </div>
        <h3>Tees</h3>
        <div className="products">
          {products &&
            products.Tees.length >= 1 &&
            products.Tees.map((p) => (
              <div key={p.id}>
                <Link to={`/products/${p.id}/Tees`}>
                  <img alt="product" src={p.image} />
                </Link>
                <p style={{ textAlign: "center" }}>{p.name}</p>
              </div>
            ))}
        </div>
        <h3>Sneakers</h3>
        <div className="products">
          {products &&
            products.Sneakers.length >= 1 &&
            products.Sneakers.map((p) => (
              <div key={p.id}>
                <Link to={`/products/${p.id}/Sneakers`}>
                  <img alt="product" src={p.image} />
                </Link>
                <p style={{ textAlign: "center" }}>{p.name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="content" style={{ textAlign: "center" }}>
        Please Login To See The Products
      </div>
    );
  }
};

export default Products;
