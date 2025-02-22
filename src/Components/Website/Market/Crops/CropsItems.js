import { useShoppingCart } from "../../../../Context/ShopContext";
import "../Products.css";

export default function CropsItems({ item }) {
  const { productName, price, image, id } = item;
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <div className="card">
      <div className="img-contain">
        <img src={image} alt={productName} loading="lazy" />
      </div>
      <div className="details">
        <p className="name">{productName}</p>
        <p className="price">
          {price} <span>جنية مصري</span>
        </p>
        <div className="quanty">
          {quantity === 0 ? (
            <button className="add" onClick={() => increaseCartQuantity(id)}>
              <i className="fa-solid fa-cart-shopping"></i> اضافة الى العربة
            </button>
          ) : (
            <div className="numbers">
              <div className="addquanty">
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button className="remove" onClick={() => removeItemFromCart(id)}>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
