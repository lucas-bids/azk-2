
import DarkMode from "../login/DarkMode";

const AltHeader = (props) => {
  return (
    <header className="pt-3 flex items-end justify-between">
      <h1 className="text-2xl">{props.type}</h1>
      <DarkMode />
    </header>
  );
};

export default AltHeader;
