import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { ReactComponent as Logo } from '../images/logo.svg';
import Logo from "../images/logo.png";

function Navbar() {
  const menu = useRef();
  const menuBtn = useRef();
  const [menuState, setMenuState] = useState(false);
  function toggleMenu() {
    setMenuState(!menuState);
  }
  useEffect(() => {
    let menuItems = document.querySelectorAll(".nav__item");
    menuItems.forEach((item) =>
      item.addEventListener("click", () => setMenuState(false))
    );
  }, []);
  useEffect(() => {
    if (menuState) {
      menu.current.classList.add("visible");
      menuBtn.current.classList.add("is-active");
    } else {
      menu.current.classList.remove("visible");
      menuBtn.current.classList.remove("is-active");
    }
  }, [menuState]);
  return (
    <nav className="nav">
      <a href="#home" className="nav__logo">
        {/* <img src={Logo} alt="logo" width={32} /> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillrule="evenodd"
            cliprule="evenodd"
            d="M15.1367 10.72H24C23.3593 4.69441 18.2463 0 12.0338 0C5.38773 0 0 5.37258 0 12C0 18.6274 5.38773 24 12.0338 24C18.2463 24 23.3593 19.3056 24 13.28H15.1328L18.6163 16.7537L16.801 18.5639L13.157 14.9302V20H10.7503V15.0941L7.27068 18.5639L5.45538 16.7537L8.93888 13.28H4.01133V10.72H8.93498L5.45539 7.2502L7.27069 5.44L10.7503 8.90981V4H13.157V9.0737L16.801 5.44L18.6163 7.2502L15.1367 10.72Z"
          />
        </svg>
        Cosmin Moldovan
      </a>
      <div>
        <ul ref={menu} className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://cosminmoldovan.slite.page/p/qpDkT5dDFJz8hN/About-me"
              target="_blank"
            >
              About
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="./Cosmin_Moldovan_Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://www.linkedin.com/in/cosmin-moldovan/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <div ref={menuBtn} className="menu-btn" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
