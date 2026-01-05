import drink3 from "../assets/mak-drink-3.png";
import drink4 from "../assets/mak-drink-4.png";
import drink5 from "../assets/mak-drink-5.png";

export default function Banner() {
  return (
    <section className="home-wrapper">
      <div className="drink-gallery">
        <img src={drink3} alt="drink 1" className="drink-img left" />
        <img src={drink4} alt="drink 2" className="drink-img center" />
        <img src={drink5} alt="drink 3" className="drink-img right" />
      </div>

      <div className="title-quote-row">
        <div>
          <span className="section-number">(01)</span>
          <h1 className="drink-title-1">DRINKS</h1>
        </div>

        <p className="quote-text">
          We make all drinks that make you feel
          <br />
          paradise and feel like heaven
        </p>
      </div>
    </section>
  );
}
