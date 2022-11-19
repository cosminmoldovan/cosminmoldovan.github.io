import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar() {
    const menu = useRef();
    const menuBtn = useRef();
    const [menuState, setMenuState] = useState(false)
    function toggleMenu() {
        setMenuState(!menuState);
    }
    useEffect(() => {
        if (menuState) {
            menu.current.classList.add('visible');
            menuBtn.current.classList.add('is-active');
        } else {
            menu.current.classList.remove('visible');
            menuBtn.current.classList.remove('is-active');
        }
    }, [menuState])
    if (menuState) {
        const menuItems = document.getElementsByClassName('nav__item');
        for (let item of menuItems) {
            item.addEventListener('click', () => {
                setMenuState(false);
            })
        }
    }

    return (
        <nav className="nav">
            <a href="#home" className="nav__logo">
                <Logo />
            </a>
            <div>
                <ul ref={menu} className="nav__list">
                    <li className="nav__item"><a className="nav__link" href="#projects">Projects</a></li>
                    <li className="nav__item"><a className="nav__link" href="https://resilient-temper-595.notion.site/Hi-I-m-Cosmin-dc007903a27d4ad98da581173d443352" target="_blank">About</a></li>
                    <li className="nav__item"><a className="nav__link" href="./Cosmin_Moldovan_Resume.pdf" target="_blank">Resume</a></li>
                    <li className="nav__item"><a className="nav__link" href="https://www.linkedin.com/in/cosmin-moldovan/" target="_blank">LinkedIn</a></li>
                </ul>

                <div ref={menuBtn} class='menu-btn' onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;