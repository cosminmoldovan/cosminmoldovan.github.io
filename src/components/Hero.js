import ReactRotatingText from 'react-rotating-text';
import { ReactComponent as RocketIcon } from '../images/rocket.svg';
import { ReactComponent as ResumeIcon } from '../images/resume.svg';

import Button from './Button';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="flex">
                <div className="hero__text">
                    <div className="introduction">
                        <span>Hello, my</span>
                        <span>name is Cosmin.</span>
                    </div>
                    <div className='text-animation'>
                        <div>I'm a Web&nbsp;</div>
                        <div><ReactRotatingText items={['Developer', 'Designer', 'Enthusiast', 'Creative']} typingInterval={80} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__cta">
                <Button href="#projects" icon={<RocketIcon />} text="View Projects" variant="solid" size="lg" classList="hero-btn" />
                <Button href="./Cosmin_Moldovan_Resume.pdf" target="_blank" icon={<ResumeIcon />} text="Resume" variant="outline" size="lg" />
            </div>
        </section>
    )
}
export default Hero;