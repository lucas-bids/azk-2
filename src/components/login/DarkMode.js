import toggleInactive from "../../assets/images/icons/toggle-inactive.svg";
import Moon from "../../assets/images/icons/moon.svg";

const DarkMode = () => {
  return (
    <div className="flex items-center">
      <p className="text-sm font-medium text-gray-400 dark:text-slate-400">Dark mode</p>
      <img className="ml-1.5 w-4" src={Moon} alt="" />
      <img className="ml-2 h-6" src={toggleInactive} alt="" />
    </div>
  );
};

export default DarkMode;
