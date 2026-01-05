import logo from "../assets/logo-2.png";

export default function Footer() {
  return (
    <>
      <footer className="footer py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left: Links */}
            <div className="col-md-4 text-md-start text-center mb-4 mb-md-0">
              <ul className="list-unstyled footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="mailto:drink@gmail.com">drink@gmail.com</a></li>
              </ul>
            </div>

            {/* Center: Logo */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={logo}
                alt="MAK Drinks Logo"
                className="footer-logo"
              />
            </div>

            {/* Right: Subscribe */}
            <div className="col-md-4 text-md-end text-center">
              <div className="footer-subscribe ms-md-auto">
                <p className="text-light mb-3">
                  Submit your email for news and <br />
                  everything about new drinks.
                </p>

                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                />

                <button className="btn dark text-light w-100">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom copyright */}
      <div className="text-center py-2 bg-light">
        <p className="mb-0">© 2025 MAK Drinks</p>
      </div>
    </>
  );
}
