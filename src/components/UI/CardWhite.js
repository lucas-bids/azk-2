import { surfaceCardClass } from "./uiClasses";

const CardWhite = (props) => {
  return (
    <div className={surfaceCardClass}>
      {props.children}
    </div>
  );
};

export default CardWhite;
