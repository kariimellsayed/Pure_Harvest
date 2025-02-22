import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";
import "./Crums.css";

export default function Crumbs() {
  return (
    <Breadcrumb className="manage-links">
      <NavLink to="/" className="crumb-link">
        Home
      </NavLink>
      <NavLink to="/dashboard" className="crumb-link active">
        Product
      </NavLink>
    </Breadcrumb>
  );
}
