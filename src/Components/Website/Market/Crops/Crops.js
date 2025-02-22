import React, { useEffect, useState } from "react";
import CropsItems from "./CropsItems";
// import "./Crops.css";

export default function Crops() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <section className="crops mt-5">
      {products.map((item, index) => (
        <CropsItems item={item} key={index} />
      ))}
    </section>
  );
}
