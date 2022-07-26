import toggleInactive from "../../assets/images/icons/toggle-inactive.svg";
import Moon from "../../assets/images/icons/moon.svg";

const DarkMode = () => {
  return (
    <div className="flex">
      <p className="text-xl font-medium text-gray-400">Dark mode</p>
      <img className="ml-1 w-5" src={Moon} alt="" />
      <img className="ml-2" src={toggleInactive} alt="" />
    </div>
  );
};

export default DarkMode;
