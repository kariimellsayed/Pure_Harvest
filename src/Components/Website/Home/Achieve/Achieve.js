// images
import { Container } from "react-bootstrap";
import group from "../../../../Css/Assets/Images/Home/group.webp";
import icon from "../../../../Css/Assets/Images/Home/icon.webp";
// Css
import "./Achieve.css";
export default function Achieve() {
  return (
    <>
      {/*Start Our Achievements */}
      <section className="achieve section-padding">
        <Container className="container">
          <div className="box-1">
            <div className="group">
              <div className="img-contain">
                <img src={group} alt="group" loading="lazy" />
              </div>
              <div className="icon">
                <img src={icon} alt="icon" loading="lazy" />
                <div className="line">
                  <h4>86,700</h4>
                  <p>Farmer helped with our service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="heading">
              <h3>Our Achievements</h3>
              <h1>Helping Farmers </h1>
            </div>
            <div className="titles">
              <h1>We’re Leader in Agriculture Market</h1>
              <p>
                Here, we work through our website to reach the largest number of
                farmers or farm owners and help them develop their farms with a
                high degree of efficiency. Through our platform, you can also
                benefit from the following :
              </p>
            </div>
            <div className="feature">
              <h5>
                The ability to detect a plant disease and guide you to treatment
              </h5>

              <h5>
                Providing an agricultural store that serves your crop needs
              </h5>

              <h5>
                Guiding you on the appropriate path for your plant’s growth
              </h5>
            </div>
          </div>
        </Container>
      </section>
      {/*End Our Achievements */}
    </>
  );
}
