import toggleInactive from "../assets/images/icons/toggle-inactive.svg";
import Moon from "../assets/images/icons/moon.svg";

const Header = (props) => {
  return (
    <header className="pt-3 flex items-end justify-between">
      <h1 className="text-3xl">Hello, Lucas</h1>
      <div className="flex">
        <p className="text-xl font-medium text-gray-400">Dark mode</p>
        <img className="ml-1 w-5" src={Moon} alt="" />
        <img className="ml-2" src={toggleInactive} alt="" />
      </div>
    </header>
  );
};

export default Header;
