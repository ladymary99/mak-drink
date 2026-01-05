import { useState, useRef, useEffect } from "react";
import gsap from "gsap";


import imgUltra from "../assets/ultra.jpg";
import imgFood from "../assets/food.jpg";
import imgDrinks from "../assets/drinks.jpg";
import imgPortraits from "../assets/dessert.jpg";
import imgMonsters from "../assets/monsters.jpg";


const categories = [
  { id: "00", key: "ultra", label: "Ultra", img: imgUltra },
  { id: "01", key: "food", label: "Food", img: imgFood },
  { id: "02", key: "drinks", label: "Drinks", img: imgDrinks },
  { id: "03", key: "dessert", label: "Dessert", img: imgPortraits },
  { id: "04", key: "monsters", label: "Monsters", img: imgMonsters },
];

const GalleryMenu = ({ onHoverCategory }) => {
  const [active, setActive] = useState(categories[0]);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);

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
              active.key === cat.key ? "active" : ""
            }`}
            onMouseEnter={() => {
              setActive(cat);
              onHoverCategory(cat.key); 

              gsap.fromTo(
                itemRefs.current[index],
                { opacity: 0.5, x: -20 },
                
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
