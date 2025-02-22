// import axios from "axios";
// import { useState } from "react";
// import { REGISTER } from "../../../Api/Api";

import "./Register.css";

import Logo from "../../../Css/Assets/Images/Register/Logo-2.webp";
import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
// import LoadingSubmit from "../../../Components/Loading/Loading";

///////////////////////////////////////////////////////////////
export default function Signup() {
  //States
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   passwordconfirm: "",
  // });

  // Loading
  // const [loading, setLoading] = useState(false);
  // Err
  // const [err, setErr] = useState("");

  // Handle Form Change
  // function handleChange(e) {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }

  // Handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    //   setLoading(true);
    //   try {
    //     await axios.post(`${REGISTER}`, form);
    //     setLoading(false);
    //   } catch (err) {
    //     setLoading(false);
    //   }
  }
  ///////////////////////////////
  return (
    <>
      {/* {loading && <LoadingSubmit />} */}
      <div className="sign-page">
        <Overlay />
        <div className="forma">
          <div className="back">
            <Link to={"/"} className="link">
              <i className="fa-solid fa-chevron-left"></i>
              Back
            </Link>
          </div>

          <div className="titles flex-items">
            <img src={Logo} alt="logo" loading="lazy" />

            <div className="text">
              <h2>Sign up</h2>
              <p>Welcome back. Please register your Data</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="Form">
            <div className="filds">
              <label htmlFor="name">Full name</label>
              <i className="fa-regular fa-user"></i>
              <input
                id="name"
                name="name"
                type="text"
                // value={form.name}
                // onChange={handleChange}
                placeholder="Please enter your full name..."
                required
              />
            </div>
            <div className="filds">
              <label htmlFor="email">E-mail</label>
              <i className="fa-regular fa-envelope"></i>
              <input
                id="email"
                name="email"
                type="email"
                // value={form.email}
                // onChange={handleChange}
                placeholder=" Please enter your email..."
                required
              />
            </div>
            <div className="filds">
              <label htmlFor="password">Password</label>
              <i className="fa-solid fa-lock"></i>
              <input
                id="password"
                name="password"
                type="password"
                // value={form.password}
                // onChange={handleChange}
                placeholder="Please enter your password..."
                required
              />
            </div>
            <div className="filds">
              <label htmlFor="password">Confirm Password</label>
              <i className="fa-solid fa-lock"></i>
              <input
                id="passwordconfirm"
                name="passwordconfirm"
                type="password"
                // value={form.passwordconfirm}
                // onChange={handleChange}
                placeholder="Please enter your password again..."
                required
              />
            </div>
            <Link className="btn" to="/login">
              Sign Up
            </Link>
            {/* {err !== "" && <span className="error">{err}</span>} */}
            <div className="links">
              Already have an account?
              <Link className="link" to={"/login"}>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
