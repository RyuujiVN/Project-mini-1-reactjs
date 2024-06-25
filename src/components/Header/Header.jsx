import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import MenuLogo from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import "./Header.scss";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <header className={`header ${sticky ? "dark-header" : ""} `}>
        <div className="container">
          <div className="header__body">
            {/* Logo */}
            <Link to="/" className="header__logo">
              <img src={Logo} alt="Logo" />
            </Link>

            {/* Navbar */}
            <nav className="nav">
              <ul className={`nav__list ${mobileMenu ? "show-menu" : ""}`}>
                <li>
                  <Link to="hero" smooth={true} offset={0} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="program" smooth={true} offset={-80} duration={500}>
                    Program
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} offset={-150} duration={500}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="gallery" smooth={true} offset={-80} duration={500}>
                    Campus
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    smooth={true}
                    offset={-140}
                    duration={500}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="btn nav__btn"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
            <img
              src={MenuLogo}
              alt="Menu logo"
              className="header__icon"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
