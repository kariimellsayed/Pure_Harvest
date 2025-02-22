import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useShoppingCart } from "../../../../Context/ShopContext";
import { CROPS } from "../../../../Products/E-Crops";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, cartQuantity } = useShoppingCart();
  const buyLink = "buy";

  return (
    <section className="check">
      <div className="header">
        <h3>Belling Details</h3>
      </div>
      <Container className="container mt-4">
        <div className="titles">
          <p>
            Total
            <span id="totavalue">
              {cartItems.reduce((total, cartItem) => {
                const item = CROPS.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}{" "}
              L.E
            </span>
          </p>
          <p>
            Tax <span>10 L.E</span>
          </p>
          <p>
            Shipping charges <span>20 L.E</span>
          </p>
        </div>
        <div className="total">
          <h2>
            Total Price
            <span id="alltotal">
              {cartItems.reduce((total, cartItem) => {
                const item = CROPS.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity + 30;
              }, 0)}{" "}
              L.E
            </span>
          </h2>
        </div>
        <div className="checkout">
          <Link className="link" to={cartQuantity > 0 ? buyLink : null}>
            Checkout
          </Link>
        </div>
      </Container>
    </section>
  );
}
