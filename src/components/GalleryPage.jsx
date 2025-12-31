// GalleryPage.jsx
import { useState } from "react";
import GalleryMenu from "./Menu/GalleryMenu";
import DrinkGallery from "./Gallery/DrinkGallery";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("Ultra");

  return (
    <>
      <GalleryMenu onHoverCategory={setActiveCategory} />
      <DrinkGallery activeCategory={activeCategory} />
    </>
  );
};

export default GalleryPage;
