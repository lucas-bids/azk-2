import purpleLogo from "../../assets/images/azk-logo.svg";
import homeIcon from "../../assets/images/icons/home.svg";
import clientsIcon from "../../assets/images/icons/clients.svg";
import reportsIcon from "../../assets/images/icons/reports.svg";
import logoutIcon from "../../assets/images/icons/log-out.svg";

const MenuBar = (props) => {
  return (
    <div className="w-1/12 flex justify-center">
      <div className="p-3 h-[800px] w-fit">
        <nav className=" bg-white rounded-2xl shadow h-full flex flex-col justify-between items-center">
          <button>
            <img className="w-20 p-4" src={purpleLogo} alt="" />
          </button>
          <div className="flex flex-col">
            <button>
              <img className="w-18 p-4" src={homeIcon} alt="" />
            </button>
            <button>
              <img className="w-18 p-4" src={clientsIcon} alt="" />
            </button>
            <button>
              <img className="w-18 p-4" src={reportsIcon} alt="" />
            </button>
          </div>
          <button>
            <img className="w-18 p-4" src={logoutIcon} alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
