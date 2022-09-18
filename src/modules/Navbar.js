import { ReactComponent as Logo } from '../images/logo.svg';
function Navbar() {
    return (
        <nav className="nav">
            <a href="#home" className="nav__logo">
            <Logo />
            </a>
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__link" href="#projects">Projects</a></li>
                <li className="nav__item"><a className="nav__link" href="https://resilient-temper-595.notion.site/Hello-I-m-Cosmin-Moldovan-dc007903a27d4ad98da581173d443352" target="_blank">About</a></li>
                <li className="nav__item"><a className="nav__link" href="https://www.linkedin.com/in/cosmin-moldovan/" target="_blank">LinkedIn</a></li>
                <li className="nav__item"><a className="nav__link" href="https://github.com/cosminmoldovan" target="_blank">GitHub</a></li>
                <li className="nav__item"><a className="nav__link" href="./Cosmin_Moldovan_Resume.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;