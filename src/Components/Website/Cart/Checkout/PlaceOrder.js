import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../Context/ShopContext";
import { CROPS } from "../../../../Products/E-Crops";
import "./Checkout.css";

export default function PlaceOrder({
  setButtonPopup,
  setButtonFaild,
  address,
  payment,
}) {
  const { cartItems } = useShoppingCart();

  const CheckPayment = () => {
    if (address === "address" && payment === "payment") {
      setButtonPopup(true);
    } else {
      setButtonFaild(true);
    }
  };

  return (
    <div className="check">
      <div className="header">
        <h3>Belling Details</h3>
      </div>
      <Container className="container mt-4">
        <div className="titles">
          <p>
            Total{" "}
            <span>
              {" "}
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
            <span>
              {cartItems.reduce((total, cartItem) => {
                const item = CROPS.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity + 30;
              }, 0)}{" "}
              L.E
            </span>
          </h2>
        </div>
        <div className="checkout">
          <Link className="link" onClick={() => CheckPayment()}>
            Place order
          </Link>
        </div>
      </Container>
    </div>
  );
}
