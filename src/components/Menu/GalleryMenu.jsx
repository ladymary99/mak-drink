import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./GalleryMenu.css";

import imgUltra from "../../assets/mak-drink-6.png";
import imgFood from "../../assets/mak-drink-3.png";
import imgDrinks from "../../assets/mak-drink-4.png";
import imgPortraits from "../../assets/mak-drink-5.png";
import imgMonsters from "../../assets/mak-drink-6.png";

const categories = [
  { id: "00", label: "Ultra", img: imgUltra },
  { id: "01", label: "Food", img: imgFood },
  { id: "02", label: "DRINKS", img: imgDrinks },
  { id: "03", label: "Portraits", img: imgPortraits },
  { id: "04", label: "Monsters", img: imgMonsters },
];

const GalleryMenu = () => {
  const [active, setActive] = useState(categories[0]);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);

  // Animate big image on change
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 60, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: "power3.out" }
    );
  }, [active]);

  return (
    <div className="gallery-container">
      <div className="gallery-left">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`gallery-item ${
              active.id === cat.id ? "active" : ""
            }`}
            onMouseEnter={() => {
              setActive(cat);

              gsap.fromTo(
                itemRefs.current[index],
                { opacity: 0.5, x: -20 }
              );
            }}
          >
            <span className="gallery-id">({cat.id})</span>
            <span className="gallery-label">{cat.label}</span>
          </div>
        ))}
      </div>

      <div className="gallery-right">
        <img
          ref={imageRef}
          src={active.img}
          alt={active.label}
          className="gallery-image"
        />
      </div>
    </div>
  );
};

export default GalleryMenu;
