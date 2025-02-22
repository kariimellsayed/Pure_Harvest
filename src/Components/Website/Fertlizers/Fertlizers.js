import "./Fertlizers.css";
import { Link } from "react-router-dom";

import { useImage } from "../../../Context/AiContext/ImageProvider";

export default function Fertlizers() {
  const { image } = useImage();
  return (
    <div className="ferlizers">
      <div className="header">
        <Link to="/disease" className="link">
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>
        <h3>Reault</h3>
      </div>
      <div className="resultbody">
        <div className="img-contain">
          <img src={image} alt="DieseaseImage" loading="lazy" />
        </div>
        <div className="casediesase">
          <h3>
            Diesase : <span className="dname">Cedar Apple Rust</span>
          </h3>

          <h3>Case of disease :</h3>
          <p>
            Cedar-apple rust is a common plant disease caused by the fungal
            pathogen Gymnosporangium juniperi-virginianae. It infects members of
            the Rosaceae and Cupressaceae families, primarily apple, crabapple,
            eastern redcedar, and other juniper species
          </p>

          <h3 className="solution">Solution :</h3>
          <span>
            To prevent rust effectively, use fungicides such as Myclobutanil,
            copper, and sulfur products. Apply them when flower buds start
            emerging until the weather becomes consistently warm and dry in
            spring
          </span>
        </div>
      </div>
      <Link className="scan" to="/disease">
        Scan another Plant
      </Link>
    </div>
  );
}
