import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <nav className=" py-3 d-flex align-items-center justify-content-between">
        {/* LEFT LINKS */}
        <div className="d-flex gap-4 nav-links">
          <a href="#about">About us</a>
          <a href="#menu">Our menu</a>
        </div>

        {/* CENTER LOGO */}
        <div className="logo-container text-center">
          <img src={logo} className="logo-img" alt="MAK drinks" />
        </div>

        {/* RIGHT LINKS */}
        <div className="d-flex gap-4 nav-links">
          <a href="#reservations">Reservations</a>
          <a href="#contact">Contact us</a>
        </div>
      </nav>
    </header>
  );
}
