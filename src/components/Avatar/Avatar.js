import { cardAvatar } from "./Avatar.module.css";

const Avatar = ({ info }) => {
  return <img className={cardAvatar} src={info} alt="personal avatar" />;
};

export default Avatar;
