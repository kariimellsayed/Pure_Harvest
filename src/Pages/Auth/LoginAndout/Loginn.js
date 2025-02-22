import axios from "axios";
import "../Register/Register.css";
import { LOGIN } from "../../../Api/Api";
import { Link } from "react-router-dom";

export default function Loginn() {
  // cookie
  // const cookie = cookie

  async function handlelgin() {
    try {
      const res = await axios.get(`${LOGIN}`, {
        headers: {
          // Authorization: "Bearer" + cookie.get("e-coomerce"),
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Link
        className="log d-flex align-items-center gap-2 "
        onClick={handlelgin}
        to="/login"
      >
        <i className="fa-regular fa-user"></i> Login
      </Link>
    </>
  );
}
