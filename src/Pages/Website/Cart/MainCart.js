import { Outlet } from "react-router-dom";
import { useShoppingCart } from "../../../Context/ShopContext";
import Empty from "./BuyMethod/Empty/Empty";

export default function MainCart() {
  const { cartQuantity } = useShoppingCart();

  return cartQuantity > 0 ? (
    <section className="maincart">
      <Outlet />
    </section>
  ) : (
    <Empty />
  );
}
