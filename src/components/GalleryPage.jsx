import { useState } from "react";
import GalleryMenu from "./GalleryMenu";
import DrinkGallery from "./DrinkGallery"; 

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("ultra");

  return (
    <>
      <GalleryMenu onHoverCategory={setActiveCategory} />
      <DrinkGallery activeCategory={activeCategory} />
    </>
  );
};

export default GalleryPage;
