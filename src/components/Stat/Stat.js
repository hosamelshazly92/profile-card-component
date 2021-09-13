import { container, title } from "./Stat.module.css";

const Stat = ({ children, info }) => {
  return (
    <div className={container}>
      <h2 className={title}>{info}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Stat;
