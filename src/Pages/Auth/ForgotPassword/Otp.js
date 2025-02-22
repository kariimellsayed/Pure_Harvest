import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import "./Forgot.css";

export default function Otp() {
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
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>

          <form className="forgot">
            <div className="otp-container">
              <input
                type="text"
                className="otp-input"
                maxlength="1"
                autofocus
              />
              <input type="text" className="otp-input" maxlength="1" />
              <input type="text" className="otp-input" maxlength="1" />
              <input type="text" className="otp-input" maxlength="1" />
              <input type="text" className="otp-input" maxlength="1" />
            </div>
            <button className="btn">Next</button>
          </form>
          <div className="code">
            <p className="m-0">Don't have an account ?</p>
            <Link className="resend">Resend OTP</Link>
          </div>
        </div>
      </div>
    </>
  );
}
