import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-bar d-flex align-items-center">
      <Container>
        {/* Conneect */}
        <div className="contact d-flex align-items-center justify-content-between">
          <div className="connect d-flex align-center gap-4">
            <div className="sms">
              <i className="fa-regular fa-envelope"></i>
              <Link className="link">info@tasweqy.sa</Link>
            </div>
            <div className="phone position-relative">
              <i className="fa-solid fa-phone-volume"></i>
              <Link className="link">920004250</Link>
            </div>
          </div>
          {/* Social */}
          <div className="social d-flex align-items-center gap-4">
            <div className="drop-down d-flex align-items-center gap-2 position-relative">
              <div className="wrapper d-flex align-items-center gap-2">
                <img
                  src={require("../../../Css/Assets/Images/ContactBar/Uk.webp")}
                  alt="uk"
                  loading="lazy"
                ></img>
                <div className="selected">EN</div>
              </div>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </div>
            {/* Social Icons */}
            <div className="icons d-flex align-items-center gap-2">
              <Link className="link face">
                <i className="fa-brands fa-facebook-f "></i>
              </Link>
              <Link className="link insta">
                <i className="fa-brands fa-instagram "></i>
              </Link>
              <Link className="link in">
                <i className="fa-brands fa-linkedin-in "></i>
              </Link>
              <Link className="link x">
                <i className="fa-brands fa-x-twitter "></i>
              </Link>
              <Link className="link tube">
                <i className="fa-brands fa-youtube "></i>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
