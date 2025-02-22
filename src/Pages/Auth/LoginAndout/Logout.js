import axios from "axios";
import "../Register/Register.css";
import { LOGOUT, baseURL } from "../../../Api/Api";
export default function Logout() {
  // cookie
  // const cookie = cookie

  async function handlelgout() {
    try {
      const res = await axios.get(`${baseURL}/${LOGOUT}`, {
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
      <button
        className="d-flex align-items-center gap-2 log"
        onClick={handlelgout}
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
      </button>
    </>
  );
}
