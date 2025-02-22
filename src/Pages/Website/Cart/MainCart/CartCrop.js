import { useShoppingCart } from "../../../../Context/ShopContext";
import { CROPS } from "../../../../Products/E-Crops";
import "./Cart.css";

export default function CartCrop({ id, quantity }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } =
    useShoppingCart();
  const item = CROPS.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <div className="cropsitems">
        <div className="box">
          <div className="img-contain">
            <img src={item.productImage} alt={item.productName} />
          </div>
          <div className="titles">
            <h3>{item.productName}</h3>
            <p>Crops</p>
            <h2>{item.price * quantity} L.E</h2>
          </div>
          {quantity > 1 && <span className="cropnums">x{quantity}</span>}
        </div>
        <div className="addquanty">
          <button onClick={() => increaseCartQuantity(id)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
        </div>
        <div className="remove" onClick={() => removeItemFromCart(id)}>
          <i className="fa-solid fa-rectangle-xmark"></i>
        </div>
      </div>
    </>
  );
}
