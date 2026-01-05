import mainImg from "../assets/mak-drink-7.png";

import drink8 from "../assets/mak-drink-8.png";
import drink9 from "../assets/mak-drink-9.png";
import drink10 from "../assets/drinks.jpg";
import drink11 from "../assets/mak-drink-11.png";
import drink12 from "../assets/ultra5.png";

import ultra1 from "../assets/ultra1.jpg";
import ultra2 from "../assets/ultra2.jpg";
import ultra3 from "../assets/ultra3.jpg";
import ultra4 from "../assets/ultra4.jpg";
import ultra5 from "../assets/ultra5.png";

const drinksByCategory = {
  ultra: [
    { id: "01", title: "Ultra Lemon", subtitle: "Fresh & powerful citrus taste", img: ultra1 },
    { id: "02", title: "Ultra Berry", subtitle: "Bold mixed berry flavor", img: ultra2 },
    { id: "03", title: "Ultra Mango", subtitle: "Tropical energy boost", img: ultra3 },
    { id: "04", title: "Ultra Apple", subtitle: "Crisp green apple taste", img: ultra4 },
    { id: "05", title: "Ultra Cherry", subtitle: "Sweet cherry kick", img: ultra5 },
  ],

  food: [
    { id: "01", title: "Food Cola", subtitle: "Perfect companion for meals", img: drink8 },
    { id: "02", title: "Food Orange", subtitle: "Bright orange refreshment", img: drink9 },
    { id: "03", title: "Food Lime", subtitle: "Zesty lime flavor", img: drink10 },
    { id: "04", title: "Food Grape", subtitle: "Smooth grape soda", img: drink11 },
    { id: "05", title: "Food Peach", subtitle: "Soft peach sweetness", img: drink12 },
  ],

  drinks: [
    { id: "01", title: "Mint Drink", subtitle: "Cool & refreshing mint", img: drink8 },
    { id: "02", title: "Cherry Drink", subtitle: "Rich cherry taste", img: drink9 },
    { id: "03", title: "Lemon Drink", subtitle: "Sharp lemon freshness", img: drink10 },
    { id: "04", title: "Berry Drink", subtitle: "Fruity berry blend", img: drink11 },
    { id: "05", title: "Tropical Drink", subtitle: "Exotic tropical mix", img: drink12 },
  ],

  dessert: [
    { id: "01", title: "Classic Portrait", subtitle: "Elegant crafted flavor", img: drink8 },
    { id: "02", title: "Golden Portrait", subtitle: "Premium smooth taste", img: drink9 },
    { id: "03", title: "Dark Portrait", subtitle: "Deep & bold notes", img: drink10 },
    { id: "04", title: "Soft Portrait", subtitle: "Balanced mild flavor", img: drink11 },
    { id: "05", title: "Signature Portrait", subtitle: "House special blend", img: drink12 },
  ],

  monsters: [
    { id: "01", title: "Monster Red", subtitle: "Strong energy blast", img: drink8 },
    { id: "02", title: "Monster Green", subtitle: "Wild herbal mix", img: drink9 },
    { id: "03", title: "Monster Blue", subtitle: "Icy cool rush", img: drink10 },
    { id: "04", title: "Monster Purple", subtitle: "Dark berry power", img: drink11 },
    { id: "05", title: "Monster Black", subtitle: "Maximum intensity", img: drink12 },
  ],
};

const DrinkGallery = ({ activeCategory }) => {
  const drinksData = drinksByCategory[activeCategory] || [];

  return (
    <div className="container-fluid p-5">
      <div className="row g-4">

        {/* LEFT IMAGE */}
        <div className="col-lg-5 col-md-12">
          <img
            src={drinksData[0]?.img || mainImg}
            alt={activeCategory}
            className="drink-main-image"
          />
        </div>

        {/* RIGHT MENU */}
        <div className="col-lg-7 col-md-12">
          {drinksData.map((drink) => (
            <div
              key={drink.id}
              className="d-flex align-items-center border-bottom py-3"
            >
              <div style={{ width: "50px", textAlign: "center" }}>
                <span className="danger">({drink.id})</span>
              </div>

              <div style={{ flex: 1 }}>
                <h5 className="mb-1">{drink.title}</h5>
                <p className="text-muted mb-0">{drink.subtitle}</p>
              </div>

              <img
                src={drink.img}
                alt={drink.title}
                style={{
                  width: "90px",
                  height: "68px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DrinkGallery;
