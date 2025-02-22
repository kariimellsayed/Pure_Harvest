import React, { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [image, setImage] = useState(null);
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  return useContext(ImageContext);
}
