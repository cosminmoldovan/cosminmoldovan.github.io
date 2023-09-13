import { ReactComponent as RocketIcon } from "../images/rocket.svg";
import { ReactComponent as ResumeIcon } from "../images/resume.svg";
import profilePicture from "../images/cosmin-moldovan.png";
import { ReactComponent as LinkedInIcon } from "../images/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as TwitterIcon } from "../images/twitter.svg";
import Button from "./Button";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__image">
        <img alt="picture with Cosmin Moldovan" src={profilePicture} />
        <div className="hero__image__description">Cosmin Moldovan</div>
      </div>
      <div className="hero__social">
        <a
          href="https://www.linkedin.com/in/cosmin-moldovan/"
          className="hero__social__btn"
        >
          <LinkedInIcon />
        </a>
        {/* <a href="https://twitter.com/CosminMol" className="hero__social__btn">
          <TwitterIcon />
        </a> */}
        <a
          href="https://github.com/cosminmoldovan"
          className="hero__social__btn"
        >
          <GitHubIcon />
        </a>
        <a href="mailto:cosminmol@proton.me" className="hero__social__btn">
          <EmailIcon />
        </a>
      </div>
      <div className="hero__text">
        <div className="title">
          Creative developer & designer crafting unique web experiences
        </div>
      </div>
      <div className="hero__cta">
        <Button
          href="#projects"
          icon={<RocketIcon />}
          text="View Projects"
          variant="solid"
          size="lg"
          classList="hero-btn"
        />
        <Button
          href="./Cosmin_Moldovan_Resume.pdf"
          target="_blank"
          icon={<ResumeIcon />}
          text="Resume"
          variant="text"
          size="lg"
        />
      </div>
    </section>
  );
}
export default Hero;
