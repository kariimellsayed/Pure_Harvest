import "./ResultSc.css";
import { Link } from "react-router-dom";
import sfimg from "../../../../Css/Assets/Images/Diesease/Rectangle 68 (1).png";
export default function ResultSc() {
  return (
    <div className="scfertlize">
      <div className="header">
        <Link to="/sf" className="link">
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>
        <h3>Reault</h3>
      </div>

      <div className="resultbody">
        <h3>
          Fertilizer : <span>Corn fertilizer</span>
        </h3>
        <div className="img-contain">
          <img src={sfimg} alt="imag" loading="lazy" />
        </div>

        <h3 className="mt-3">More information about :</h3>
        <span>
          Add potassium fertilizer at a rate of 50 kg of potassium sulphate at
          once after thinning. Add potassium using 5 kg of potassium sulphate
          three times, or with any potassium compound when cutting, at the
          beginning of flowering, and after 15 days. Planting begins during this
          month with the recommended varieties, as planting with local or
          unreliable varieties leads to a significant reduction in yield. For
          example, the maize plant responds clearly to nitrogen, so 400 kg of
          ammonium nitrate fertilizer, 33.5% per acre, or 300 kg of urea, must
          be added. In the case of drip irrigation or pivot irrigation, it
          begins with adding nitrogen fertilizer 15 days after planting and
          every 3-4 days at a rate of 8-10 equal batche,
        </span>
      </div>

      <Link className="scan" to="/sf">
        Scan another Plant
      </Link>
    </div>
  );
}
