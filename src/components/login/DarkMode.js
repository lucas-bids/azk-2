import toggleInactive from "../../assets/images/icons/toggle-inactive.svg";
import Moon from "../../assets/images/icons/moon.svg";

const DarkMode = () => {
  return (
    <div className="flex items-center">
      <p className="text-2xl font-medium text-gray-400">Dark mode</p>
      <img className="ml-2 w-6" src={Moon} alt="" />
      <img className="ml-3 h-9" src={toggleInactive} alt="" />
    </div>
  );
};

export default DarkMode;
