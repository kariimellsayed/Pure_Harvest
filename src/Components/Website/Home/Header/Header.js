import "./Header.css";
import logo from "../../../../Css/Assets/Images/Home/h-logo.webp";

export default function Header() {
  return (
    <>
      <header>
        <div className="titles">
          <h1>
            Pure
            <span className="harvest">
              Harvest <img src={logo} alt="logo" loading="lazy" />
            </span>
          </h1>
          <p>
            Here in our private world, we are pleased to provide you with the
            best service to discover more beauty and prosperity on your plant
            and to enjoy a healthy.
          </p>
        </div>
      </header>
    </>
  );
}
