import close from "../../../../../Css/Assets/Images/Checkout/close.png";
import "./Popup.css";

export default function Faild(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="img-contain">
          <img src={close} alt="done" loading="lazy" />
        </div>
        <h2>Oreder is wrong</h2>
        <span className="wrong">
          You must specify the address and payment process
        </span>
        <button onClick={() => props.setTrigger(false)} className="close">
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
