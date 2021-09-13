import {
  container,
  cardBackground,
  cardSection,
  cardTitle,
} from "./Card.module.css";
import Avatar from "../Avatar/Avatar";
import Stat from "../Stat/Stat";

const Card = ({ data }) => {
  const { background, avatar, name, age, city, stats } = data;

  return (
    <div className={container}>
      <div className={cardBackground}>
        <img src={background} alt="card background" />
      </div>
      <Avatar info={avatar} />
      <h2 className={cardTitle}>
        {name} <span>{age}</span>
      </h2>
      <p>{city}</p>
      <hr />
      <div className={cardSection}>
        <Stat info={stats.followers}>Followers</Stat>
        <Stat info={stats.likes}>Likes</Stat>
        <Stat info={stats.photos}>photos</Stat>
      </div>
    </div>
  );
};

export default Card;
