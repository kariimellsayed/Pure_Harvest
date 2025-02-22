import { Link } from "react-router-dom";
import "../InputValue.css";

export default function InputSc() {
  return (
    <div className="inputvalue">
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
          <div className="Ph">
            <label>PH level</label>
            <input type="text" name="PH" placeholder="Enter the value..." />
          </div>
          <div className="state">
            <label>State</label>
            <select>
              <option className="select">Select State</option>
              <option>Dakhalia</option>
              <option>Cairo</option>
              <option>Alexedria</option>
              <option>Other</option>
            </select>
          </div>
          <div className="state">
            <label>City</label>
            <select>
              <option className="select d-flex justify-content-between">
                Select City
              </option>
              <option>Mansoura</option>
              <option>Tanta</option>
              <option>Domiate</option>
              <option>Other</option>
            </select>
          </div>
        </form>
        <Link className="predict">Predict</Link>
      </div>
    </div>
  );
}
