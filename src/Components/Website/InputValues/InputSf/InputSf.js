import { Link } from "react-router-dom";
import "../InputValue.css";

export default function InputSf() {
  return (
    <div className="inputvalue sff">
      <div className="header">
        <h3>Fill up this fields to can help you</h3>
      </div>
      <div className="sc-content">
        <form className="form">
          <div className="nitrogen">
            <label>Nitrogen</label>
            <input type="text" name="nitro" placeholder="Enter the value..." />
          </div>
          <div className="phosph">
            <label>Phosphorous</label>
            <input type="text" name="phosph" placeholder="Enter the value..." />
          </div>
          <div className="pottasium">
            <label>Pottasium</label>
            <input
              type="text"
              name="pottasium"
              placeholder="Enter the value..."
            />
          </div>
          <div className="grow">
            <label>Crop you want to grow</label>
            <select>
              <option className="select">Enter the value...</option>
              <option>Dakhalia</option>
              <option>Cairo</option>
              <option>Alexedria</option>
              <option>Other</option>
            </select>
          </div>
        </form>
        <Link className="predict" to="suitablefertilzer">
          Predict
        </Link>
      </div>
    </div>
  );
}
