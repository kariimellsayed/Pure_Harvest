import { Container } from "react-bootstrap";
import Uploader from "../../../../Components/Website/UploadImage/Uploader";
import "../Diesease.css";
import Logo from "../../../../Css/Assets/Images/Home/h-logo.webp";

export default function Diesease() {
  return (
    <>
      <section className="diesease section-padding">
        <Container className="container">
          <div className="heading">
            <h1>
              Let us help you to <span>Diagnose disease</span> your plants .
              <img src={Logo} alt="logo" loading="lazy" />
            </h1>
          </div>
          <Uploader />
        </Container>
      </section>
    </>
  );
}
