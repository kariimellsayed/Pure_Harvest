import React, { useState } from "react";
import "./AddProductPopup.css";
import addimag from "../../../../Css/Assets/Images/dashboard/gallery-add.png";
export default function AddProductPopup({ onClose, onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleAddProduct = () => {
    if (!productName || !productQuantity || !price || !image) {
      // أحد الحقول فارغ، عرض رسالة خطأ هنا
      console.error("يرجى ملء جميع الحقول");
      return;
    }
    onAddProduct({ productName, productQuantity, price, image });
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="popup-products">
      <div className="inputs-popup">
        <h2>Upload new product</h2>
        <div className="popup-content">
          <div>
            <label>Product name </label>
            <input
              className="p-name"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label>Product Quantity </label>
            <input
              type="text"
              className="p-number"
              placeholder="Enter Product Quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              className="p-price"
              placeholder="Enter Product Price per EG"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label for="imagg" className="image-uploud">
              {image ? (
                <img
                  src={image}
                  alt="image"
                  loading="lazy"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <div>
                    <img src={addimag} alt="add" loading="lazy" />
                  </div>
                  Insert image (250x250) here or click to
                  <span>download</span>
                </>
              )}
            </label>
            <input
              className="imagg"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="imagg"
            />
          </div>
          <button onClick={handleAddProduct}>Add product</button>
          {/* <button onClick={onClose}>Cancel</button> */}
          <i
            className="fa-solid fa-circle-xmark close-product"
            onClick={onClose}
          ></i>
        </div>
      </div>
    </div>
  );
}
