import { ReactComponent as GithubIcon } from '../images/github.svg';
import Button from './Button';
function Card(props) {
    const cardStyle = {
        // flexDirection: props.flexDirection,
        background: props.background
    };
    const topics = props.topics.map(topic => <div key={topic} className='topic'>{topic}</div>)
    return (
        <div className="card" style={cardStyle}>
            <div className="card__thumbnail">
                <img src={`./thumbnails/${props.thumbnail}`} alt="Project Thumbnail" />
            </div>
            <div className="card__info">
                <div className="card__logo">
                    <img src={`./thumbnails/${props.logo}`} alt="Project logo" />
                </div>
                <div className="card__title">
                    {props.title}
                </div>
                <div className="card__description">
                    {props.description}
                    <div className='card__topics'>
                        {topics}
                    </div>
                </div>
                <div className="card__cta">
                    <Button href={props.websiteLink} text="See Live" variant="outline" target="_blank"/>
                    <Button href={props.githubLink} icon={<GithubIcon />} variant="outline" target="_blank" />
                </div>
            </div>
        </div>
    );
}
export default Card;