import { Container } from "react-bootstrap";
import "./Cart.css";
import Checkout from "../../../../Components/Website/Cart/Checkout/Checkout";
import { useShoppingCart } from "../../../../Context/ShopContext";
import CartCrop from "./CartCrop";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <section className="cart section-padding">
      <Container className="container d-flex gap-4 flex-wrap">
        <div className="cartitems">
          <div className="header">
            <h3>Cart</h3>
          </div>
          <div className="cropbody">
            {cartItems.map((item) => (
              <CartCrop key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="totals">
          <Checkout />
        </div>
      </Container>
    </section>
  );
}
