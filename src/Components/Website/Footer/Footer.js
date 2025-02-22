import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Css/Assets/Images/Footer/f-logo.webp";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <Container className="container">
        <div className="boxes">
          <div className="box">
            <Link className="logo">
              <img src={logo} alt="logo" loading="lazy" />
            </Link>
            <p>
              For more information or suggestion, please contact us through our
              email , thank you .
            </p>
            <ul className="social">
              <li>
                <Link className="link face">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link className="link insta">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link className="link in">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link className="link x">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li>
                <Link className="link tube">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h3>Home</h3>
            <ul className="links">
              <li>
                <Link>Our Achievements</Link>
              </li>
              <li>
                <Link>Our Service</Link>
              </li>

              <li>
                <Link>FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h3>About as</h3>
            <ul className="links">
              <li>
                <Link>Passion</Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h3>Our service</h3>
            <ul className="links">
              <li>
                <Link>Plant diseases Diagnosis</Link>
              </li>
              <li>
                <Link>Suitable Crops</Link>
              </li>

              <li>
                <Link>Suitable Fertilizer</Link>
              </li>
              <li>
                <Link>Crops Market</Link>
              </li>
            </ul>
          </div>

          {/* <div className="box">
            <h3>Cart</h3>
          </div> */}
        </div>
        <div className="rights">
          <p>@ All rights reserved to Pure Harvest Company</p>
          <p>Terms and conditions</p>
        </div>
      </Container>
    </footer>
  );
}
