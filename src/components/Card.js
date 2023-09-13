import { ReactComponent as GithubIcon } from '../images/githubbtn.svg';
import Button from './Button';
function Card(props) {
    const cardStyle = {
      // flexDirection: props.flexDirection,
      // background: props.background
      backgroundImage: `url('./thumbnails/${props.background}')`,
    };
    const thumbnail = {
    //   backgroundImage: `url('./thumbnails/${props.thumbnail}')`
    };
    const topics = props.topics.map(topic => <div key={topic} className='topic'>{topic}</div>)
    return (
        <div className="card" >
            <div className="card__thumbnail" style={thumbnail}>
                <img src={`./thumbnails/${props.thumbnail}`} alt="Project Thumbnail" />
            </div>
            <div className="card__info">
                <div className="card__title">
                    {props.title}
                </div>
                <div className="card__description">
                    {props.description}
                </div>
                <div className='card__topics'>
                    {topics}
                </div>
                <div className="card__cta">
                    {props.websiteLink && <Button href={props.websiteLink} text="See Live" variant="solid" target="_blank" />}
                    {props.githubLink && <Button href={props.githubLink} icon={<GithubIcon />} variant="outline" target="_blank" />}
                </div>
            </div>
        </div>
    );
}
export default Card;