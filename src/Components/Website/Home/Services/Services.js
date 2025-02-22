import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";
export default function OurServices() {
  return (
    <>
      <section className="services section-padding">
        <Container className="container">
          <div className="heading heading-margin">
            <h1>Our Service</h1>
          </div>
          <div className="boxes">
            <div className="box">
              <span className="num">1</span>
              <div className="titles">
                <h2>Plant diseases Diagnosis </h2>
                <p>
                  You can take a screenshot of your plant and a proper diagnosis
                  will be provided .
                </p>
              </div>
              <Link className="link">
                Explore our service
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="box">
              <span className="num">2</span>
              <div className="titles">
                <h2>Suitable Crops </h2>
                <p>
                  Providing the appropriate plant, according to the given
                  environmental conditions .
                </p>
              </div>
              <Link className="link">
                Explore our service
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="box">
              <span className="num">3</span>
              <div className="titles">
                <h2>Suitable Fertilizer </h2>
                <p>
                  By choosing the appropriate fertilizer, environmental guidance
                  will be provided in the event of a deficiency in any of the
                  elements, for example .
                </p>
              </div>
              <Link className="link">
                Explore our service
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="box">
              <span className="num">4</span>
              <div className="titles">
                <h2>Crops Market </h2>
                <p>
                  The crop store will provide you with many choices of
                  agricultural products, and you will be able to pay later in
                  several ways .
                </p>
              </div>
              <Link className="link">
                Explore our service
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
