import Button from './Button';
import { ReactComponent as ResumeIcon } from '../images/resume.svg';
import { ReactComponent as GithubIcon } from '../images/github.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin.svg';



function About() {
    return (
        <section className='about' id='about'>
            <div className="about__content">
                <div className='about__left'>
                    <div className="about__img">
                    </div>
                    <div>
                        <h3>Cosmin Moldovan</h3>
                        <p style={{ opacity: '0.8', fontSize: '14px', textAlign: 'center' }}>Frontend Developer</p>
                    </div>
                    <Button href="https://cosminmoldovan.github.io" target="_blank" icon={<ResumeIcon />} text="Resume" type="outline" />


                </div>

                <div>
                    <div className="about__info">
                        <p>
                            <h2>Hi there! 👋</h2> <br />I’m Cosmin, a web developer and designer currently based in Sibiu, Romania. I am an enthusiastic developer who strives to provide a high quality code and an outstanding user experience for every product I build.
                        </p>
                        <p>
                            I have a degree in Computer Science, but I began to learn coding much earlier. Increasingly interested in UI Design and web technologies, I decided to specialise in Front-End Web Development.
                        </p>
                        <p>
                            At present, while broadening my own skills and acquiring more experience, I place a high value on sharing knowledge and aim to help others who are striving to become better developers and make the web more exciting.
                        </p>
                    </div>
                    <div className='about__social'>

                    </div>
                </div>

            </div>
        </section>
    );
}
export default About;