import done from "../../../../../Css/Assets/Images/Checkout/done-icon 1.png";

import "./Popup.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="img-contain">
          <img src={done} alt="done" loading="lazy" />
        </div>
        <h2>Order send succefully </h2>
        <button onClick={() => props.setTrigger(false)} className="ok">
          OK
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
