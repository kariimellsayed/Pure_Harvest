import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import { useState } from "react";
import { LOGIN } from "../../../Api/Api";
import axios from "axios";
import "./Forgot.css";
export default function Reset() {
  //States
  const [form, setForm] = useState({
    password: "",
    passwordconfirm: "",
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
    <div className="sign-page">
      <Overlay />
      <div className="forgota">
        <div className="back">
          <Link to={"/login"} className="link">
            <i className="fa-solid fa-chevron-left"></i>
            Back
          </Link>
        </div>

        <div className="create flex-items">
          <div className="text">
            <h2>Create a new password</h2>
            <p>Enter a new password</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="forgot">
          <div className="filds">
            <label htmlFor="password">Password</label>
            <i className="fa-solid fa-lock"></i>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
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
              value={form.passwordconfirm}
              onChange={handleChange}
              placeholder="Please enter your password again..."
              required
            />
          </div>

          <button className="btn">Confirm</button>
        </form>
      </div>
    </div>
  );
}
