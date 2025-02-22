import { useState } from "react";
import "./Uploader.css";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useResult } from "../../../Context/AiContext/ResultProvider";
import { useImage } from "../../../Context/AiContext/ImageProvider";

export default function Uploader() {
  const [fileName, setFileName] = useState("No Selected Image");
  // const { setResult } = useResult();
  const { image, setImage } = useImage();

  // const handleApi = () => {
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   axios
  //     .post(
  //       "https://cunning-monarch-nationally.ngrok-free.app/disease-predict",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // .catch((error) => {
  //   console.error("There was an error!", error);
  // });
  // .catch((error) => {
  //   console.error("Error uploading image:", error);
  //   alert(
  //     "Error uploading image. Please check the console for more details."
  //   );
  // });
  // };

  return (
    <div className="upload">
      <div className="header">
        <h3>Upload your plant image</h3>
      </div>
      <form
        className="form"
        onClick={() => document.querySelector(".input").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <img
            src={image}
            loading="lazy"
            width="100%"
            height="100%"
            alt={fileName}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ) : (
          <div className="img-click">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <div className="texts">
              Insert images here or <Link> Click to Upload.</Link>
            </div>
          </div>
        )}
      </form>

      <Link className="predict" to={image ? "result" : ""}>
        Predict
      </Link>
    </div>
  );
}
