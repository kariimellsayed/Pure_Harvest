import { Container } from "react-bootstrap";
import Crumbs from "../../../Components/Website/Crumbs/Crumbs";
// Style
import "./Management.css";
import { useEffect, useState } from "react";
import AddProductPopup from "./popup-Product/AddProductPopup";

export default function Management() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: products.length + 1 }; // Add ID based on the current length
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <section className="management">
      <Container>
        <Crumbs />
        <div className="add-new-product">
          <h3>Uploaded product</h3>
          <button onClick={() => setShowPopup(true)}>
            <i className="fa-solid fa-plus"></i>Add new product
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) &&
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.productName}
                        width="50"
                      />
                    )}
                  </td>
                  <td>
                    {product.price}..
                    <span>جنية مصري</span>
                  </td>
                  <td>
                    {product.productQuantity}..
                    <span>طن</span>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash delete-product"
                      onClick={() => handleDeleteProduct(index)}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {showPopup && (
          <AddProductPopup
            onClose={() => setShowPopup(false)}
            onAddProduct={handleAddProduct}
          />
        )}
      </Container>
    </section>
  );
}
