import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../../Api/Api";
import Overlay from "../Overlay/Overlay";
import "./Forgot.css";
export default function Forgot() {
  //States
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("ren");
    try {
      await axios.post(`${LOGIN}`, form);
      console.log("Succes");
    } catch (err) {}
  }
  return (
    <>
      <div className="sign-page">
        <Overlay />
        <div className="forgota">
          <div className="back">
            <Link to={"/login"} className="link">
              <i className="fa-solid fa-chevron-left"></i>
              Back
            </Link>
          </div>

          <div className="locked flex-items">
            <div className="text">
              <h2>Forgot your password?</h2>
              <p>You can reset your password again.</p>
            </div>
            <div className="lock">
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="forgot">
            <div className="filds">
              <label htmlFor="email">Enter your registered E-mail</label>
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

            <button className="btn">Next</button>
          </form>
        </div>
      </div>
    </>
  );
}
