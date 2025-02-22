import overlaylogo from "../../../Css/Assets/Images/Register/Overlogo.png";
import "./Overlay.css";

//////////////////////////////////////////////////
export default function Overlay() {
  return (
    <div className="overlay">
      <div className="overlay">
        <div className="titles">
          <h1>
            Pure
            <span className="harvest">
              Harvest <img src={overlaylogo} alt="overlaylogo" loading="lazy" />
            </span>
          </h1>
          <p>
            Here in our private world, we are pleased to provide you with the
            best service to discover more beauty and prosperity on your plant
            and to enjoy a healthy.
          </p>
        </div>
      </div>
    </div>
  );
}
