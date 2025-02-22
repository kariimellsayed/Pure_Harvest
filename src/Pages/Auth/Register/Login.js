// import axios from "axios";
import { useState } from "react";
// import { LOGIN } from "../../../Api/Api";

import "./Register.css";

import Logo from "../../../Css/Assets/Images/Register/Logo.webp";
import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
// import LoadingSubmit from "../../../Components/Loading/Loading";

///////////////////////////////////////////////////////////////

export default function Login() {
  //States
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // Loading
  // const [loading, setLoading] = useState(false);
  // Err
  // const [err, setErr] = useState("");

  // Handle Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);
    // try {
    //   await axios.post(`${LOGIN}`, {
    //     email: form.email,
    //     password: form.password,
    //   });
    //   setLoading(false);
    //   window.location.pathname = "/";
    // } catch (err) {
    //   setLoading(false);
    //   if (err.response === 401) {
    //     setErr("wrong Email Or Password");
    //   } else {
    //     setErr("Interva Server ERR");
    //   }
    // }
  }

  return (
    <>
      {/* {loading && <LoadingSubmit />} */}
      <div className="sign-page">
        <Overlay />
        <div className="forma">
          <div className="titles flex-items">
            <img src={Logo} alt="logo" loading="lazy" />

            <div className="text">
              <h2>Sign In</h2>
              <p>Welcome back. Please register your Data</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="Form">
            <div className="filds">
              <label htmlFor="email">E-mail</label>
              <i className="fa-regular fa-envelope"></i>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Please Enter Your Email"
              />
            </div>
            <div className="filds">
              <label htmlFor="password">Password</label>
              <i className="fa-solid fa-lock"></i>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Please Enter Your Password"
              />
            </div>
            <div className="remember">
              <div className="rememberme">
                <input type="checkbox" name="rememberme" id="rememberme" />
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <Link className="link" to={"/forgot"}>
                Forget password?
              </Link>
            </div>
            <Link className="btn" to="/">
              Sign In
            </Link>
            {/* {err !== "" && <span className="error">{err}</span>} */}
            <div className="links">
              Already have an account?
              <Link className="link" to={"/register"}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
