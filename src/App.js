import { Route, Routes } from "react-router-dom";
// Main
import MainWeb from "./Pages/Website/HomPage/MainWeb";
import Home from "./Pages/Website/Home/HomePage";
// Register --
import Signup from "./Pages/Auth/Register/Signup";
import Login from "./Pages/Auth/Register/Login";
import Forgot from "./Pages/Auth/ForgotPassword/Forgot";
import Reset from "./Pages/Auth/ForgotPassword/Reset";
import Otp from "./Pages/Auth/ForgotPassword/Otp";
// E-Commerce -- Cart
import Cart from "./Pages/Website/Cart/MainCart/Cart";
import Shop from "./Pages/Website/Shop/Shop";
import Crops from "./Components/Website/Market/Crops/Crops";
import ShoppingProvider from "./Context/ShopContext";
import MainCart from "./Pages/Website/Cart/MainCart";
import { Buy } from "./Pages/Website/Cart/BuyMethod/Buy";
// Diesease
import MainDiesease from "./Pages/Website/Diesease/MianDiesease";
import Diesase from "./Pages/Website/Diesease/Diesease/Diesease";
import DieseaseResult from "./Pages/Website/Diesease/DieseaseResult/DieseaseResult";
// Sc
// import Sc from "./Pages/Website/SC/sc/Sc";
// import MainSc from "./Pages/Website/SC/MainSc";
// Sf
// import InputSf from "./Components/Website/InputValues/InputSf/InputSf";
// import Sf from "./Pages/Website/SF/sf/Sf";
// import ResultSc from "./Components/Website/InputValues/InputSf/ResultSc";

import About from "./Pages/Website/About/About";
import Management from "./Pages/Website/Management/Management";
function App() {
  return (
    <ShoppingProvider>
      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<MainWeb />} />
          {/* About Rout */}
          <Route path="about" element={<About />} />
          {/* End About Rout */}
          {/* Diesease Route */}
          <Route path="disease" element={<MainDiesease />}>
            <Route path="" element={<Diesase />} />
            <Route path="result" element={<DieseaseResult />} />
          </Route>
          {/* End  Diesease Route*/}
          {/* Sc Route */}
          {/* <Route path="sc" element={<MainSc />}>
            <Route path="" element={<Sc />} />
          </Route> */}
          {/* End Sc Route */}
          {/* Sf Route */}
          {/* <Route path="sf" element={<Sf />}>
            <Route path="" element={<InputSf />} />
            <Route path="suitablefertilzer" element={<ResultSc />} />
          </Route> */}
          {/* End Sf Route */}
          {/* Cart Route */}
          <Route path="cart" element={<MainCart />}>
            <Route path="" element={<Cart />} />
            <Route path="buy" element={<Buy />} />
          </Route>
          {/* End Cart Route */}
          {/* Market Routes */}
          <Route path="market" element={<Shop />}>
            <Route path="" element={<Crops />} />
          </Route>
          {/* End Market Routes */}
          {/* Protected Routes */}
          <Route path="/dashboard" element={<Management />} />
          {/* End Prodtected */}
        </Route>

        {/* End Public Routes */}
        {/* Register Routes */}
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        {/* End Register Routes */}
      </Routes>
    </ShoppingProvider>
  );
}

export default App;
